<template>
  <div class="min-h-screen bg-gray-900 pt-20 px-4 sm:px-6 md:px-12"> 
    <h1 class="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-10 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent animate-fadeInDown">
      Your Cart
    </h1>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-20 sm:py-32 text-gray-300">
      Loading your cart...
    </div>

    <!-- Empty Cart -->
    <div v-else-if="cartItems.length === 0" class="text-center py-20 sm:py-32">
      <p class="text-gray-300 text-lg sm:text-xl mb-6">Your cart is empty.</p>
      <router-link
        to="/games"
        class="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-5 sm:px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105 text-sm sm:text-base"
      >
        Browse Games
      </router-link>
    </div>

    <!-- Cart Items -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
      <!-- Items List -->
      <div class="lg:col-span-2 space-y-4 sm:space-y-5">
        <div
          v-for="item in cartItems"
          :key="item.id + '-' + item.rentalPlan"
          class="bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg flex flex-row items-center gap-3 sm:gap-5 hover:shadow-2xl transition-all animate-fadeIn"
        >
          <!-- Game Image -->
          <img 
            :src="item.image" 
            :alt="item.title" 
            class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow" 
          />

          <!-- Game Info -->
          <div class="flex-1 min-w-0">
            <h2 class="font-semibold text-sm sm:text-base text-white truncate">
              {{ item.title }}
            </h2>
            <p class="text-gray-400 text-xs sm:text-sm truncate">
              Plan: <span class="text-indigo-400 font-medium">{{ item.rentalPlan }}</span>
            </p>
            <p class="text-indigo-500 font-semibold text-xs sm:text-sm">
              Rs {{ (item.price * (item.quantity || 1)).toFixed(2) }}
            </p>
          </div>

          <!-- Remove -->
          <button
            @click="removeItem(item)"
            class="text-red-500 hover:text-red-600 transition text-xs sm:text-sm font-medium ml-2"
          >
            Remove
          </button>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-lg animate-fadeIn h-fit">
        <h2 class="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-white">Order Summary</h2>

        <div class="flex justify-between mb-3">
          <span class="text-gray-400">Subtotal</span>
          <span class="text-gray-200">Rs {{ subtotal.toFixed(2) }}</span>
        </div>

        <div class="flex justify-between text-base sm:text-lg font-semibold border-t border-gray-700 pt-3 mb-5 sm:mb-6">
          <span class="text-gray-300">Total</span>
          <span class="text-indigo-400">Rs {{ subtotal.toFixed(2) }}</span>
        </div>

        <button
          @click="goToCheckout"
          class="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-2.5 sm:py-3 rounded-xl shadow-md transition transform hover:scale-105 text-sm sm:text-base"
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
        this.cartItems.splice(index, 1); // remove just one
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
