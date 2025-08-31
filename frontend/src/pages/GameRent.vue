<template>
  <div class="min-h-screen bg-gray-900 pt-24 px-6">
    <div 
      v-if="game" 
      class="max-w-6xl mx-auto bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-gray-700"
    >
      <!-- Game Section -->
      <div class="flex flex-col md:flex-row">
        <!-- Game Image -->
        <div 
          class="relative flex justify-center items-center w-full md:w-2/5 
                 h-[220px] sm:h-[300px] md:h-[340px] lg:h-[380px] overflow-hidden"
        >
          <img 
            :src="game.image" 
            :alt="game.title" 
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>         
        </div>

        <!-- Game Details -->
        <div class="p-10 w-full md:w-3/5 flex flex-col justify-start">
          <h1 class="text-3xl md:text-4xl font-extrabold text-indigo-400 leading-snug">
            {{ game.title }}
          </h1>
          <p class="text-gray-300 leading-relaxed text-base md:text-lg mt-4">
            {{ game.description }}
          </p>
        </div>
      </div>

      <!-- Rental Plan Section -->
      <div class="p-10 bg-gray-900 rounded-b-3xl border-t border-gray-700">
        <h2 class="text-2xl md:text-3xl font-bold mb-8 text-indigo-400">🎮 Choose Your Rental Plan</h2>

        <!-- Plans -->
        <div 
          class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4
                 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:snap-none"
        >
          <!-- Daily Plan -->
          <div 
            @click="selectPlan('daily')" 
            :class="planClass('daily')" 
            class="cursor-pointer p-6 rounded-2xl border bg-gray-800 hover:shadow-xl hover:shadow-indigo-500/30 transition min-w-[260px] snap-center md:min-w-0"
          >
            <h3 class="text-xl font-semibold text-white">Daily Plan</h3>
            <p class="text-gray-400 mt-2">Perfect for short sessions or trying out a game.</p>
            <p class="text-indigo-400 font-bold mt-4 text-lg">
              Rs {{ game.dailyPrice }} / day
            </p>
          </div>

          <!-- Weekly Plan -->
          <div 
            @click="selectPlan('weekly')" 
            :class="planClass('weekly')" 
            class="cursor-pointer p-6 rounded-2xl border bg-gray-800 hover:shadow-xl hover:shadow-indigo-500/30 transition min-w-[260px] snap-center md:min-w-0"
          >
            <h3 class="text-xl font-semibold text-white">Weekly Plan</h3>
            <p class="text-gray-400 mt-2">Great value if you want to dive deeper.</p>
            <p class="text-indigo-400 font-bold mt-4 text-lg">
              Rs {{ game.weeklyPrice }} / week
            </p>
          </div>
        </div>

        <!-- Selected Plan Summary -->
        <div 
          v-if="selectedPlan" 
          class="mt-10 p-6 bg-gray-800/90 backdrop-blur-md rounded-2xl border border-gray-700"
        >
          <h3 class="text-lg font-semibold text-white">✅ You selected:</h3>
          <p class="mt-3 text-gray-300">
            <span class="capitalize font-medium">{{ selectedPlan }}</span>
            &nbsp; → 
            <span class="text-indigo-400 font-bold text-lg">Rs {{ calculatePrice }}</span>
          </p>
          <button 
            @click="confirmOrder" 
            class="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/30"
          >
            Confirm Rental
          </button>
        </div>
      </div>
    </div>

    <!-- Game not found -->
    <div v-else class="text-center text-gray-500 text-xl font-semibold mt-12">
      ⚠️ Game not found!
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
    };
  },
  computed: {
    calculatePrice() {
      if (!this.selectedPlan) return 0;
      switch (this.selectedPlan) {
        case "daily": 
          return this.game.dailyPrice ? this.game.dailyPrice.toFixed(2) : 0;
        case "weekly": 
          return this.game.weeklyPrice ? this.game.weeklyPrice.toFixed(2) : 0;
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
        ? "border-2 border-indigo-500 bg-gray-700"
        : "border border-gray-700";
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
    }
  },
};
</script>
