<template>
  <div class="min-h-screen bg-gray-950 px-4 text-gray-100 pt-24 pb-16">
    
    <div v-if="loading" class="text-center text-gray-400 font-semibold py-32">
      <svg class="animate-spin h-8 w-8 text-cyan-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p class="text-xl">Loading game details...</p>
    </div>

    <div 
      v-else-if="game" 
      class="max-w-5xl mx-auto bg-gray-900 shadow-3xl shadow-cyan-900/20 rounded-xl overflow-hidden border border-cyan-800"
    >
      <div class="flex flex-col md:flex-row">
        <div 
          class="relative flex justify-center items-center w-full md:w-2/5 
                 h-[200px] sm:h-[280px] md:h-auto md:aspect-square overflow-hidden border-b-4 md:border-r-4 border-cyan-700/50"
        >
          <img 
            :src="game.image" 
            :alt="game.title" 
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent"></div>
          
          <button 
            @click="$router.go(-1)"
            class="absolute top-4 left-4 z-10 p-3 rounded-full bg-cyan-600/80 backdrop-blur-sm text-white hover:bg-cyan-700 transition shadow-lg"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </button>
        </div>

        <div class="p-6 md:p-8 w-full md:w-3/5 flex flex-col justify-center">
          <h1 class="text-3xl md:text-4xl font-black text-cyan-400 leading-tight drop-shadow-md">
            {{ game.title }}
          </h1>
          <p class="text-gray-300 leading-relaxed text-sm mt-4">
            {{ game.description }}
          </p>
        </div>
      </div>

      <div class="p-6 md:p-8 bg-gray-950 border-t border-cyan-700/50">
        <h2 class="text-2xl font-extrabold mb-6 text-cyan-400 border-l-4 border-cyan-600 pl-3">
            Rent this Title Instantly
        </h2>

        <div 
          class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4
                 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:snap-none"
        >
          <div 
            @click="selectPlan('daily')" 
            :class="planClass('daily')" 
            class="cursor-pointer p-5 rounded-lg border-2 bg-gray-900 shadow-md hover:shadow-cyan-500/30 transition duration-300 transform hover:scale-[1.01] min-w-[250px] snap-center md:min-w-0"
          >
            <h3 class="text-xl font-bold text-white uppercase tracking-wider">Daily Pass</h3>
            <p class="text-gray-400 text-sm mt-1">Perfect for short sessions.</p>
            <p class="text-cyan-400 font-extrabold mt-3 text-xl">
              Rs {{ game.dailyPrice }} <span class="text-sm text-gray-500 font-normal">/ 24 hrs</span>
            </p>
          </div>

          <div 
            @click="selectPlan('weekly')" 
            :class="planClass('weekly')" 
            class="cursor-pointer p-5 rounded-lg border-2 bg-gray-900 shadow-md hover:shadow-cyan-500/30 transition duration-300 transform hover:scale-[1.01] min-w-[250px] snap-center md:min-w-0"
          >
            <h3 class="text-xl font-bold text-white uppercase tracking-wider">Weekly Access</h3>
            <p class="text-gray-400 text-sm mt-1">Great value for deep dives.</p>
            <p class="text-cyan-400 font-extrabold mt-3 text-xl">
              Rs {{ game.weeklyPrice }} <span class="text-sm text-gray-500 font-normal">/ 7 days</span>
            </p>
          </div>
        </div>

        <div 
          v-if="selectedPlan" 
          class="mt-8 p-6 bg-gray-900 rounded-lg border border-cyan-700 shadow-lg shadow-cyan-900/30"
        >
          <h3 class="text-lg font-extrabold text-white flex items-center">
            <span class="text-cyan-500 mr-2">✓</span> Ready to Rent:
          </h3>
          <p class="mt-3 text-gray-300 text-base">
            Plan Selected: <span class="capitalize font-bold text-cyan-400">{{ selectedPlan }}</span>
          </p>
          <p class="mt-1 text-gray-300 text-base">
            Total Price: 
            <span class="text-cyan-400 font-black text-xl ml-2">Rs {{ calculatePrice }}</span>
          </p>

          <button 
            @click="confirmOrder" 
            class="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-2.5 rounded-md font-bold text-base uppercase tracking-wide transition-all duration-300 shadow-lg shadow-cyan-500/30 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
          >
            Confirm Rental 
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-500 text-xl font-semibold py-32">
      <h3 class="text-3xl text-cyan-500 mb-4">Error 404</h3>
      <p>⚠️ Game not found! Please check the URL and try again.</p>
    </div>

  </div>
</template>

<script>
import { auth, db } from "../firebase"; 
import { doc, getDoc, collection, addDoc } from "firebase/firestore";

export default {
  name: "GameRent",
  data() {
    return {
      game: null,
      selectedPlan: null,
      loading: true, 
    };
  },
  computed: {
    calculatePrice() {
      if (!this.selectedPlan) return 0;
      switch (this.selectedPlan) {
        case "daily": 
          return parseFloat(this.game.dailyPrice || 0).toFixed(2);
        case "weekly": 
          return parseFloat(this.game.weeklyPrice || 0).toFixed(2);
        default: 
          return 0;
      }
    },
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    },
    planClass(plan) {
      return this.selectedPlan === plan
        ? "border-cyan-500 bg-gray-800 shadow-xl shadow-cyan-500/40"
        : "border-gray-700";
    },
    async confirmOrder() {
      if (!this.selectedPlan) {
        alert("Please select a rental plan!");
        return;
      }

      const cartItem = {
        gameId: this.game.id,
        title: this.game.title,
        image: this.game.image,
        rentalPlan: this.selectedPlan,
        price: parseFloat(this.calculatePrice),
        quantity: 1,
        createdAt: new Date().toISOString(),
      };

      try {
        const user = auth.currentUser;

        if (user) {
          const cartRef = collection(db, "users", user.uid, "cart");
          await addDoc(cartRef, cartItem);
        } else {
          let guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
          guestCart.push(cartItem);
          localStorage.setItem("guestCart", JSON.stringify(guestCart));
        }

        this.$router.push("/cart");
      } catch (err) {
        console.error("Error adding to cart:", err);
        alert("Something went wrong while adding to cart.");
      }
    },
  },
  async mounted() {
    try {
      const gameId = this.$route.params.id;
      const gameRef = doc(db, "games", gameId);
      const gameSnap = await getDoc(gameRef);

      if (gameSnap.exists()) {
        this.game = { id: gameSnap.id, ...gameSnap.data() };
      } else {
        this.game = null;
      }
    } catch (err) {
      console.error("Error fetching game:", err);
      this.game = null;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
/* No specific style block needed as all styling is handled by Tailwind classes */
</style>