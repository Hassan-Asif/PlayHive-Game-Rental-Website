<template>
  <div class="min-h-screen bg-gray-950 flex items-center justify-center px-4 pt-24 pb-16"> 
    <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      <div 
        class="lg:col-span-2 bg-gray-900 p-8 lg:p-10 rounded-2xl shadow-3xl shadow-cyan-900/30 
               border border-cyan-800/70 transition-all"
      >
        <h2 class="text-4xl font-black mb-8 text-cyan-400 border-l-4 border-cyan-600 pl-3">
          Finalize Rental
        </h2>

        <h3 class="text-xl font-extrabold mb-4 text-white">Billing Information</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <input v-model="billing.fullName" type="text" placeholder="Full Name *" class="checkout-input-themed" required />
          <input v-model="billing.email" type="email" placeholder="Email" class="checkout-input-themed" />
          <input v-model="billing.phone" type="text" placeholder="Phone Number *" class="checkout-input-themed" required />
          <input v-model="billing.city" type="text" placeholder="City" class="checkout-input-themed" />
        </div>
      </div>

      <div 
        class="bg-gray-900 p-8 rounded-2xl shadow-3xl shadow-cyan-900/30 
               border border-cyan-800/70 lg:sticky lg:top-8 h-fit"
      >
        <h3 class="text-2xl font-bold mb-6 text-white border-b border-cyan-800/50 pb-3">Order Summary</h3>

        <div v-if="loading" class="text-center py-8 text-gray-400">Loading cart...</div>
        <div v-else-if="cart.length === 0" class="text-center py-8 text-gray-400">Your cart is empty.</div>

        <div v-else class="space-y-4 animate-fadeIn">
          <div
            v-for="item in cart"
            :key="item.id + item.rentalPlan"
            class="flex justify-between items-center bg-gray-800 p-3 rounded-lg border-l-4 border-cyan-600/50"
          >
            <div>
              <p class="font-semibold text-white">{{ item.title }}</p>
              <p class="text-xs text-gray-400 capitalize">{{ item.rentalPlan }} Plan</p>
            </div>
            <p class="font-extrabold text-cyan-400">Rs {{ (item.price * (item.quantity || 1)).toFixed(2) }}</p>
          </div>
        </div>

        <div v-if="cart.length > 0" class="mt-8 border-t border-cyan-700 pt-4 space-y-3">
          <div class="flex justify-between">
            <span class="text-gray-400">Subtotal</span>
            <span class="text-gray-300 font-medium">Rs {{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between font-extrabold text-xl">
            <span class="text-white">Total Payment</span>
            <span class="text-cyan-400">Rs {{ total.toFixed(2) }}</span>
          </div>
        </div>

        <button 
          @click="placeOrder" 
          class="w-full mt-8 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-lg uppercase py-3 rounded-lg transition transform hover:scale-[1.01] shadow-xl shadow-cyan-500/30"
          :disabled="cart.length === 0 || loadingOrder"
        >
          {{ loadingOrder ? "Placing Order..." : "Place Order & Pay" }}
        </button>

        <transition name="fade">
          <p v-if="errorMessage" class="mt-4 text-red-400 text-center font-semibold animate-pulse">{{ errorMessage }}</p>
        </transition>
        <transition name="fade">
          <p v-if="successMessage" class="mt-4 text-green-400 text-center font-semibold">{{ successMessage }}</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "vue-router";

const router = useRouter();
const cart = ref([]);
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

onMounted(() => {
  const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
  cart.value = guestCart;
  loading.value = false;
});

const subtotal = computed(() =>
  cart.value.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
);

const total = computed(() => subtotal.value);

const placeOrder = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  if (!billing.value.fullName || !billing.value.phone) {
    errorMessage.value = "⚠️ Please fill in your full name and phone number.";
    return;
  }

  loadingOrder.value = true;

  try {
    const orderData = {
      items: cart.value,
      subtotal: subtotal.value,
      total: total.value,
      billing: billing.value,
      createdAt: serverTimestamp(),
      status: "Pending",
    };

    // Firebase Rule Change is required on the backend for this line to work for guests.
    // Assuming rules were updated to allow 'create' on the 'orders' collection.
    await addDoc(collection(db, "orders"), orderData);

    localStorage.removeItem("guestCart");
    cart.value = [];

    successMessage.value = "✅ Order placed successfully! Redirecting...";
    setTimeout(() => router.push("/checkoutmessage"), 2000);
  } catch (err) {
    console.error(err);
    errorMessage.value = "❌ Failed to place order. Try again.";
  } finally {
    loadingOrder.value = false;
  }
};
</script>

<style>
/* Global input style matching theme */
.checkout-input-themed {
  @apply w-full p-4 border rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none 
         bg-gray-800 border-gray-700 text-white placeholder-gray-400 
         transition duration-200;
}
/* Replaced original .checkout-input with the themed one above */

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>