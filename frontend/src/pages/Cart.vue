<template>
  <div class="min-h-screen bg-gray-900 pt-20 px-6 md:px-12"> 
    <h1 class="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent animate-fadeInDown">
      Your Cart
    </h1>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-32 text-gray-300">
      Loading your cart...
    </div>

    <!-- Empty Cart -->
    <div v-else-if="cartItems.length === 0" class="text-center py-32">
      <p class="text-gray-300 text-xl mb-6">Your cart is empty.</p>
      <router-link
        to="/games"
        class="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
      >
        Browse Games
      </router-link>
    </div>

    <!-- Cart Items -->
    <div v-else class="grid md:grid-cols-3 gap-10">
      <!-- Items List -->
      <div class="md:col-span-2 space-y-6">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="bg-gray-800 p-5 rounded-2xl shadow-lg flex items-center gap-6 hover:shadow-2xl transition-all animate-fadeIn"
        >
          <!-- Game Image -->
          <img :src="item.image" :alt="item.title" class="w-28 h-28 object-cover rounded-xl shadow" />

          <!-- Game Info -->
          <div class="flex-1">
            <h2 class="font-semibold text-xl text-white">{{ item.title }}</h2>
            <p class="text-gray-400 text-sm mt-1">
              Rental Plan: <span class="text-indigo-400 font-medium">{{ item.rentalPlan }}</span>
            </p>
            <p class="text-indigo-500 font-bold mt-2">Rs {{ item.price.toFixed(2) }}</p>

            
          </div>

          <!-- Remove -->
          <div class="text-right">
            <button
              @click="removeItem(item.id)"
              class="text-red-500 hover:text-red-600 transition text-sm font-medium"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg animate-fadeIn">
        <h2 class="text-2xl font-bold mb-6 text-white">Order Summary</h2>

        <div class="flex justify-between mb-3">
          <span class="text-gray-400">Subtotal</span>
          <span class="text-gray-200">Rs {{ subtotal.toFixed(2) }}</span>
        </div>

        <div class="flex justify-between text-lg font-semibold border-t border-gray-700 pt-3 mb-6">
          <span class="text-gray-300">Total</span>
          <span class="text-indigo-400">Rs {{ subtotal.toFixed(2) }}</span>
        </div>

        <button
          @click="goToCheckout"
          class="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 rounded-xl shadow-md transition transform hover:scale-105 disabled:opacity-50"
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
        // Logged-in user cart from Firestore
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
        // Guest cart from localStorage (ensure unique IDs)
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
        const itemRef = doc(db, "users", this.userId, "cart", itemId);
        await deleteDoc(itemRef);
      } else {
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
