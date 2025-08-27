<template>
  &nbsp;
  <div class="min-h-screen bg-gray-700 py-12 px-6 md:px-12">
    <h1 class="text-4xl font-bold mb-8 text-white animate-fadeInDown">Your Cart</h1>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-32 text-white">
      Loading your cart...
    </div>

    <!-- Empty Cart -->
    <div v-else-if="cartItems.length === 0" class="text-center py-32">
      <p class="text-white text-xl mb-4">Your cart is empty.</p>
      &nbsp;
      <router-link
        to="/games"
        class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition transform hover:scale-105"
      >
        Browse Games
      </router-link>
    </div>

    <!-- Cart Items -->
    <div v-else class="grid md:grid-cols-3 gap-8">
      <!-- Items List -->
      <div class="md:col-span-2 space-y-4">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="bg-gray-800 p-4 rounded-lg shadow flex items-center gap-4 hover:shadow-2xl transition-all animate-fadeIn"
        >
          <img :src="item.image" :alt="item.title" class="w-24 h-24 object-cover rounded-lg" />
          <div class="flex-1">
            <h2 class="font-semibold text-lg text-white">{{ item.title }}</h2>
            <p class="text-gray-400">{{ item.description }}</p>
            <p class="text-gray-400 text-sm">
              Rental Plan: <span class="text-indigo-500">{{ item.rentalPlan }}</span>
            </p>
          </div>

          <div class="text-right">
            <button
              @click="removeItem(item.id)"
              class="text-red-500 hover:text-red-700 mt-2 transition"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="bg-gray-800 p-6 rounded-lg shadow animate-fadeIn">
        <h2 class="text-2xl font-bold mb-4 text-white">Order Summary</h2>
        <div class="flex justify-between mb-2">
          <span class="text-gray-400">Subtotal</span>
          <span class="text-gray-400">Rs {{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between font-bold text-lg border-t border-gray-300 pt-2 mb-4">
          <span class="text-gray-400">Total</span>
          <span class="text-gray-400">Rs {{ subtotal.toFixed(2) }}</span>
        </div>
        <button
          @click="goToCheckout"
          class="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg transition transform hover:scale-105"
          :disabled="cartItems.length === 0"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from "../firebase";
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default {
  name: "Cart",
  data() {
    return {
      cartItems: [],
      userId: null,
      loading: true,
      unsubscribe: null,
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      this.userId = user ? user.uid : null;

      if (this.userId) {
        // 🔹 Logged-in user cart from Firestore
        const cartRef = collection(db, "users", this.userId, "cart");
        const q = query(cartRef);
        this.unsubscribe = onSnapshot(
          q,
          (snapshot) => {
            this.cartItems = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            this.loading = false;
          },
          (error) => {
            console.error("Error fetching cart:", error);
            this.loading = false;
          }
        );
      } else {
        // 🔹 Guest cart from localStorage (ensure unique IDs)
        const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]").map((item) => {
          if (!item.id) {
            item.id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
          }
          return item;
        });
        this.cartItems = guestCart;
        localStorage.setItem("guestCart", JSON.stringify(this.cartItems));
        this.loading = false;
      }
    });
  },
  beforeUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
    },
  },
  methods: {
    async increaseQty(item) {
      if (!this.userId) {
        // 🔹 Guest cart qty update
        this.cartItems = this.cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 } : cartItem
        );
        localStorage.setItem("guestCart", JSON.stringify(this.cartItems));
        return;
      }
      const itemRef = doc(db, "users", this.userId, "cart", item.id);
      await updateDoc(itemRef, { quantity: item.quantity + 1 });
    },
    async decreaseQty(item) {
      if (!this.userId) {
        // 🔹 Guest cart qty update
        if ((item.quantity || 1) <= 1) return;
        this.cartItems = this.cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
        localStorage.setItem("guestCart", JSON.stringify(this.cartItems));
        return;
      }
      if (item.quantity <= 1) return;
      const itemRef = doc(db, "users", this.userId, "cart", item.id);
      await updateDoc(itemRef, { quantity: item.quantity - 1 });
    },
    async removeItem(itemId) {
      if (this.userId) {
        // 🔹 Firestore remove
        const itemRef = doc(db, "users", this.userId, "cart", itemId);
        await deleteDoc(itemRef);
      } else {
        // 🔹 Guest cart remove one item only
        this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
        localStorage.setItem("guestCart", JSON.stringify(this.cartItems));
      }
    },
    goToCheckout() {
      if (!this.userId) {
        this.$router.push("/login");
        return;
      }
      this.$router.push("/checkout");
    },
  },
};
</script>

<style scoped>
@keyframes fadeInDown {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeInDown { animation: fadeInDown 0.6s ease forwards; }

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.animate-fadeIn { animation: fadeIn 0.5s ease forwards; }
</style>
