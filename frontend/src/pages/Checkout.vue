<template>
  <div class="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 flex items-center justify-center px-4 pt-28 pb-20 overflow-hidden">

    <!-- Neon background animations -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-16 left-10 animate-pulse"></div>
      <div class="absolute w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-3xl bottom-0 right-0 animate-bounce-slow"></div>
      <div class="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl top-1/3 right-1/3 animate-pulse-slow"></div>
    </div>

    <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10 animate-fadeInUp">
      
      <!-- Billing Form -->
      <div 
        class="lg:col-span-2 bg-gray-900/80 backdrop-blur-md p-8 lg:p-10 rounded-2xl 
               shadow-[0_0_30px_rgba(6,182,212,0.15)] border border-cyan-800/50 transition-all hover:shadow-cyan-500/30"
      >
        <h2 class="text-4xl font-black mb-10 text-cyan-400 border-l-4 border-cyan-600 pl-4">
          Finalize Your Rental
        </h2>

        <h3 class="text-2xl font-extrabold mb-6 text-white">
          Billing Information
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <input v-model="billing.fullName" type="text" placeholder="Full Name *" class="checkout-input-themed" required />
          <input v-model="billing.email" type="email" placeholder="Email" class="checkout-input-themed" />
          <input v-model="billing.phone" type="text" placeholder="Phone Number *" class="checkout-input-themed" required />
          <input v-model="billing.city" type="text" placeholder="City" class="checkout-input-themed" />
          <input v-model="billing.address" type="text" placeholder="Address" class="checkout-input-themed md:col-span-2" />
        </div>
      </div>

      <!-- Order Summary -->
      <div 
        class="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl border border-cyan-800/60 
               shadow-[0_0_40px_rgba(6,182,212,0.15)] lg:sticky lg:top-10 h-fit"
      >
        <h3 class="text-3xl font-extrabold mb-6 text-cyan-400 border-b border-cyan-700/50 pb-3">
          Order Summary
        </h3>

        <div v-if="loading" class="text-center py-10 text-gray-400 font-medium">
          Loading cart...
        </div>

        <div v-else-if="cart.length === 0" class="text-center py-10 text-gray-400 font-medium">
          Your cart is empty.
        </div>

        <div v-else class="space-y-4 animate-fadeIn">
          <div
            v-for="item in cart"
            :key="item.id + item.rentalPlan"
            class="flex justify-between items-center bg-gray-800/90 p-3 rounded-lg border-l-4 border-cyan-600/50 shadow-inner shadow-cyan-800/20"
          >
            <div>
              <p class="font-semibold text-white">{{ item.title }}</p>
              <p class="text-xs text-gray-400 capitalize">{{ item.rentalPlan }} Plan</p>
            </div>
            <p class="font-extrabold text-cyan-400">
              Rs {{ (item.price * (item.quantity || 1)).toFixed(2) }}
            </p>
          </div>
        </div>

        <div v-if="cart.length > 0" class="mt-8 border-t border-cyan-700 pt-4 space-y-3">
          <div class="flex justify-between">
            <span class="text-gray-400">Subtotal</span>
            <span class="text-gray-300 font-semibold">Rs {{ subtotal.toFixed(2) }}</span>
          </div>

          <div class="flex justify-between text-2xl font-extrabold border-t border-cyan-700/40 pt-4">
            <span class="text-white">Total Payment</span>
            <span class="text-cyan-400">Rs {{ total.toFixed(2) }}</span>
          </div>
        </div>

        <button 
          @click="placeOrder" 
          class="w-full mt-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 
                 text-white font-bold text-lg uppercase py-3 rounded-lg transition transform hover:scale-[1.02] 
                 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
          :disabled="cart.length === 0 || loadingOrder"
        >
          {{ loadingOrder ? "Processing..." : "Place Order & Pay 💳" }}
        </button>

        <transition name="fade">
          <p v-if="errorMessage" class="mt-4 text-red-400 text-center font-semibold animate-pulse">
            {{ errorMessage }}
          </p>
        </transition>
        <transition name="fade">
          <p v-if="successMessage" class="mt-4 text-green-400 text-center font-semibold animate-bounce">
            {{ successMessage }}
          </p>
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

<style scoped>
.checkout-input-themed {
  @apply w-full p-4 border rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none 
         bg-gray-800 border-gray-700 text-white placeholder-gray-400 
         transition duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/20;
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp {
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-25px); }
}
.animate-bounce-slow {
  animation: bounce-slow 6s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}
.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
