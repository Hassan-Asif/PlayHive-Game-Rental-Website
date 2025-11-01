<template>
  <div class="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 overflow-hidden pt-24 pb-20 px-4 sm:px-8">
    
    <!-- Background animation (floating orbs / particles) -->
    <div class="absolute inset-0 overflow-hidden -z-10">
      <div class="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
      <div class="absolute w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl bottom-20 right-10 animate-bounce-slow"></div>
    </div>

    <h1 class="text-center text-5xl sm:text-6xl font-extrabold mb-12 text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-fadeInDown">
      🛒 Your Gaming Cart
    </h1>

    <div v-if="loading" class="text-center py-40 text-gray-400 font-semibold text-xl">
      <svg class="animate-spin h-10 w-10 text-cyan-500 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"></path>
      </svg>
      <p>Loading your epic loot...</p>
    </div>

    <div v-else-if="cartItems.length === 0" class="text-center py-40">
      <p class="text-gray-400 text-lg sm:text-xl mb-6">Your cart is empty. Time to grab some games!</p>
      <router-link
        to="/games"
        class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg text-lg font-bold uppercase tracking-wide 
               shadow-lg shadow-cyan-500/40 hover:scale-105 transition-transform"
      >
        Browse Games
      </router-link>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto animate-fadeInUp">
      
      <!-- Cart Items -->
      <div class="lg:col-span-2 space-y-6">
        <div
          v-for="item in cartItems"
          :key="item.id + '-' + item.rentalPlan"
          class="relative bg-gray-900/80 border border-cyan-700 rounded-2xl p-4 sm:p-6 flex items-center gap-5 
                 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:border-cyan-400 transition-all duration-300 group"
        >
          <img 
            :src="item.image" 
            :alt="item.title" 
            class="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-xl border-2 border-cyan-500/50 shadow-lg group-hover:scale-105 transition-transform"
          />

          <div class="flex-1 min-w-0">
            <h2 class="font-extrabold text-lg sm:text-xl text-white truncate group-hover:text-cyan-400 transition-colors">
              {{ item.title }}
            </h2>
            <p class="text-gray-400 text-sm sm:text-base">
              Plan: <span class="text-cyan-400 font-semibold uppercase">{{ item.rentalPlan }}</span>
            </p>
            <p class="text-cyan-400 font-extrabold text-lg sm:text-xl mt-2">
              Rs {{ (item.price * (item.quantity || 1)).toFixed(2) }}
            </p>
          </div>

          <button
            @click="removeItem(item)"
            class="text-red-500 hover:text-red-400 transition text-sm sm:text-base font-semibold 
                   border border-red-500/50 px-3 py-1.5 rounded-lg hover:bg-red-900/40 shadow-md hover:scale-105"
          >
            ✖ Remove
          </button>
        </div>
      </div>

      <!-- Summary -->
      <div class="bg-gray-950/90 border border-cyan-700 rounded-2xl p-8 shadow-2xl shadow-cyan-900/40 backdrop-blur-sm">
        <h2 class="text-3xl font-black mb-8 text-cyan-400 border-l-4 border-cyan-600 pl-4">Order Summary</h2>

        <div class="flex justify-between text-lg mb-4">
          <span class="text-gray-400">Subtotal ({{ cartItems.length }} item<span v-if="cartItems.length > 1">s</span>)</span>
          <span class="text-white font-bold">Rs {{ subtotal.toFixed(2) }}</span>
        </div>

        <div class="flex justify-between text-2xl font-extrabold border-t border-cyan-700/50 pt-4 mb-6">
          <span class="text-white">Total Due</span>
          <span class="text-cyan-400">Rs {{ subtotal.toFixed(2) }}</span>
        </div>

        <button
          @click="goToCheckout"
          class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 sm:py-4 rounded-lg shadow-xl shadow-cyan-500/40 
                 text-lg font-bold uppercase tracking-wider hover:scale-[1.03] transition-all duration-300 focus:ring-4 focus:ring-cyan-500/50"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cartItems: [],
      loading: true,
    };
  },
  mounted() {
    const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
    this.cartItems = guestCart;
    this.loading = false;
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0
      );
    },
  },
  methods: {
    removeItem(itemToRemove) {
      const index = this.cartItems.findIndex(
        (item) =>
          item.id === itemToRemove.id && item.rentalPlan === itemToRemove.rentalPlan
      );
      if (index !== -1) {
        this.cartItems.splice(index, 1);
        localStorage.setItem("guestCart", JSON.stringify(this.cartItems));
      }
    },
    goToCheckout() {
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
.animate-fadeInDown { animation: fadeInDown 0.8s ease-out forwards; }

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-25px); }
}
.animate-bounce-slow {
  animation: bounce-slow 6s ease-in-out infinite;
}
</style>
