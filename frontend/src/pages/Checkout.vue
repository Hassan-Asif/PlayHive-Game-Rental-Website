<template>
  <div class="min-h-screen bg-gray-700 flex items-center justify-center px-4">
    <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Left: Checkout Form -->
      <div class="lg:col-span-2 bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-800">
        <h2 class="text-3xl font-bold mb-6 text-white">Checkout</h2>

        <!-- Billing Info -->
        <h3 class="text-lg font-semibold mb-3 text-white">Billing Information</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input v-model="billing.fullName" type="text" placeholder="Full Name *" class="checkout-input" />
          <input v-model="billing.email" type="email" placeholder="Email *" class="checkout-input" />
          <input v-model="billing.phone" type="text" placeholder="Phone Number" class="checkout-input" />
          <input v-model="billing.address" type="text" placeholder="Address *" class="checkout-input" />
          <input v-model="billing.city" type="text" placeholder="City" class="checkout-input" />
        </div>
      </div>

      <!-- Right: Cart Summary -->
      <div class="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-800">
        <h3 class="text-xl font-bold mb-6 text-white">Order Summary</h3>

        <div v-if="loading" class="text-center py-8 text-gray-500">Loading cart...</div>
        <div v-else-if="cart.length === 0" class="text-center py-8 text-gray-500">Your cart is empty.</div>

        <div v-else class="space-y-4">
          <div
            v-for="item in cart"
            :key="item.id"
            class="flex justify-between items-center border-b pb-3"
          >
            <div>
              <p class="font-semibold text-gray-400">{{ item.title }}</p>
            </div>
            <p class="font-bold text-gray-400">Rs {{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
        </div>

        <!-- Totals -->
        <div v-if="cart.length > 0" class="mt-6 border-t pt-4 space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-400">Subtotal</span>
            <span class="text-gray-400">Rs {{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between font-bold text-lg">
            <span class="text-gray-400">Total</span>
            <span class="text-gray-400">Rs {{ total.toFixed(2) }}</span>
          </div>
        </div>

        <!-- Place Order -->
        <button 
          @click="placeOrder" 
          class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 shadow-md"
          :disabled="cart.length === 0 || loadingOrder"
        >
          {{ loadingOrder ? "Placing Order..." : "Place Order" }}
        </button>

        <!-- Feedback Messages -->
        <transition name="fade">
          <p v-if="errorMessage" class="mt-4 text-red-500 text-center">{{ errorMessage }}</p>
        </transition>
        <transition name="fade">
          <p v-if="successMessage" class="mt-4 text-green-600 text-center">{{ successMessage }}</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { auth, db } from "../firebase";
import { collection, query, onSnapshot, doc, deleteDoc, addDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";

const router = useRouter();
const cart = ref([]);
const userId = ref(null);
const loading = ref(true);
const loadingOrder = ref(false);
const errorMessage = ref("");
const successMessage = ref("");

const billing = ref({
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
});

let unsubscribeCart = null;
let unsubscribeAuth = null;

onMounted(() => {
  unsubscribeAuth = onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/login");
      return;
    }

    userId.value = user.uid;

    const cartRef = collection(db, "users", user.uid, "cart");
    const q = query(cartRef);

    unsubscribeCart = onSnapshot(
      q,
      (snapshot) => {
        cart.value = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        loading.value = false;
      },
      (error) => {
        console.error("Error fetching cart:", error);
        loading.value = false;
      }
    );
  });
});

onBeforeUnmount(() => {
  if (unsubscribeCart) unsubscribeCart();
  if (unsubscribeAuth) unsubscribeAuth();
});

const subtotal = computed(() =>
  cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

// ✅ Removed tax, total = subtotal
const total = computed(() => subtotal.value);

const placeOrder = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  if (!billing.value.fullName || !billing.value.email || !billing.value.address || !billing.value.phone) {
    errorMessage.value = "⚠️ Please fill in all required billing fields (including phone number).";
    return;
  }

  loadingOrder.value = true;

  try {
    const orderData = {
      userId: userId.value,
      items: cart.value,
      subtotal: subtotal.value,
      total: total.value,
      billing: billing.value,
      createdAt: new Date(),
      status: "Pending",
    };

    await addDoc(collection(db, "users", userId.value, "orders"), orderData);
    await addDoc(collection(db, "orders"), orderData);

    for (const item of cart.value) {
      await deleteDoc(doc(db, "users", userId.value, "cart", item.id));
    }

    successMessage.value = "✅ Order placed successfully!";
    setTimeout(() => router.push("/checkoutmessage"), 2000);
  } catch (err) {
    console.error(err);
    errorMessage.value = "❌ Failed to place order. Try again.";
  } finally {
    loadingOrder.value = false;
  }
};
</script>

<style scoped>
.checkout-input {
  @apply w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-gray-700 border-gray-700 text-white placeholder-gray-400;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
