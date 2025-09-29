<template>
  <div class="min-h-screen bg-gray-950 pt-20 px-4 sm:px-6 md:px-12"> 
    <h1 class="text-3xl sm:text-4xl font-black mb-8 sm:mb-10 text-center text-cyan-500 drop-shadow-lg shadow-cyan-500/50 animate-fadeInDown">
      Your Cart 
    </h1>

    <div v-if="loading" class="text-center py-20 sm:py-32 text-gray-400 font-medium">
      Loading your rental cart...
    </div>

    <div v-else-if="cartItems.length === 0" class="text-center py-20 sm:py-32">
      <p class="text-gray-400 text-lg sm:text-xl mb-6">Your cart is currently empty. Time to play!</p>
      <router-link
        to="/games"
        class="bg-cyan-600 hover:bg-cyan-700 text-white px-6 sm:px-8 py-3 rounded-lg shadow-xl shadow-cyan-500/30 transition transform hover:scale-105 text-base sm:text-lg font-bold uppercase tracking-wider"
      >
        Browse Games
      </router-link>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto">
      <div class="lg:col-span-2 space-y-4 sm:space-y-5">
        <div
          v-for="item in cartItems"
          :key="item.id + '-' + item.rentalPlan"
          class="bg-gray-900 p-3 sm:p-5 rounded-xl shadow-2xl shadow-cyan-900/10 flex flex-row items-center gap-4 sm:gap-6 border border-cyan-800/50 hover:border-cyan-600 transition-all duration-300 animate-fadeIn"
        >
          <img 
            :src="item.image" 
            :alt="item.title" 
            class="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg border-2 border-cyan-600/50 shadow-lg" 
          />

          <div class="flex-1 min-w-0">
            <h2 class="font-extrabold text-lg sm:text-xl text-white truncate mb-1">
              {{ item.title }}
            </h2>
            <p class="text-gray-400 text-sm sm:text-base truncate">
              Plan: <span class="text-cyan-400 font-semibold uppercase">{{ item.rentalPlan }}</span>
            </p>
            <p class="text-cyan-500 font-black text-lg sm:text-xl mt-1">
              Rs {{ (item.price * (item.quantity || 1)).toFixed(2) }}
            </p>
          </div>

          <button
            @click="removeItem(item)"
            class="text-red-500 hover:text-red-400 transition text-sm sm:text-base font-medium ml-2 p-2 rounded-lg border border-red-500/50 hover:bg-red-900/30"
          >
            Remove
          </button>
        </div>
      </div>

      <div class="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl shadow-cyan-900/40 border-t-4 border-cyan-600 animate-fadeIn h-fit sticky top-20">
        <h2 class="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 text-white">Order Summary</h2>

        <div class="flex justify-between mb-4">
          <span class="text-gray-400 text-lg">Subtotal ({{ cartItems.length }} item<span v-if="cartItems.length > 1">s</span>)</span>
          <span class="text-gray-300 font-semibold text-lg">Rs {{ subtotal.toFixed(2) }}</span>
        </div>

        

        <div class="flex justify-between text-xl sm:text-2xl font-extrabold border-t border-cyan-700/50 pt-4 mb-6">
          <span class="text-white">Total Due</span>
          <span class="text-cyan-400">Rs {{ subtotal.toFixed(2) }}</span>
        </div>

        <button
          @click="goToCheckout"
          class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 sm:py-4 rounded-lg shadow-xl shadow-cyan-500/30 transition transform hover:scale-[1.01] text-lg sm:text-xl font-bold uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
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
    // Note: In a real app with Firebase, you'd fetch logged-in user's cart here.
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
        this.cartItems.splice(index, 1); // remove just one
        // Update local storage after removal
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
.animate-fadeInDown { animation: fadeInDown 0.6s ease forwards; }

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.animate-fadeIn { animation: fadeIn 0.5s ease forwards; }
</style>