<template>
  <div class="min-h-screen bg-gray-900 pt-20 py-12 px-6">
    <div v-if="game" class="max-w-5xl mx-auto bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-700">
      
      <!-- Game Section -->
      <div class="flex flex-col md:flex-row">
        
        <!-- Game Image -->
        <div 
          class="bg-gray-900 flex justify-center items-center w-full md:w-1/2 
                 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden 
                 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
        >
          <img 
            :src="game.image" 
            :alt="game.title" 
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <!-- Game Details -->
        <div class="p-8 w-full md:w-1/2 bg-gray-900 flex flex-col justify-center">
          <h1 class="text-3xl font-bold mb-4 text-indigo-400">{{ game.title }}</h1>
          <p class="text-gray-300 leading-relaxed">{{ game.description }}</p>
        </div>
      </div>

      <!-- Rental Plan Section -->
      <div class="p-8 bg-gray-900 rounded-b-2xl">
        <h2 class="text-2xl font-bold mb-6 text-indigo-400">Choose Your Rental Plan</h2>

        <!-- Mobile: scroll | Desktop: grid -->
        <div 
          class="flex gap-6 overflow-x-auto snap-x snap-mandatory
                 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:snap-none"
        >
          <!-- Daily Plan -->
          <div 
            @click="selectPlan('daily')" 
            :class="planClass('daily')" 
            class="cursor-pointer p-6 rounded-xl border bg-gray-800 hover:shadow-lg hover:shadow-indigo-500/20 transition min-w-[250px] snap-center md:min-w-0"
          >
            <h3 class="text-xl font-semibold text-white">Daily Plan</h3>
            <p class="text-gray-400 mt-2">Rent this game for 1 full day.</p>
            <p class="text-indigo-400 font-bold mt-4">
              Rs {{ game.dailyPrice }} / day
            </p>
          </div>

          <!-- Weekly Plan -->
          <div 
            @click="selectPlan('weekly')" 
            :class="planClass('weekly')" 
            class="cursor-pointer p-6 rounded-xl border bg-gray-800 hover:shadow-lg hover:shadow-indigo-500/20 transition min-w-[250px] snap-center md:min-w-0"
          >
            <h3 class="text-xl font-semibold text-white">Weekly Plan</h3>
            <p class="text-gray-400 mt-2">Rent this game for 7 days.</p>
            <p class="text-indigo-400 font-bold mt-4">
              Rs {{ game.weeklyPrice }} / week
            </p>
          </div>
        </div>

        <!-- Selected Plan Summary -->
        <div v-if="selectedPlan" class="mt-10 p-6 bg-gray-800 rounded-xl border border-gray-700">
          <h3 class="text-lg font-semibold text-white">You selected:</h3>
          <p class="mt-2 text-gray-300">
            <span class="capitalize">{{ selectedPlan }}</span>
            &nbsp;
            <span class="text-indigo-400 font-bold">Rs {{ calculatePrice }}</span>
          </p>
          <button 
            @click="confirmOrder" 
            class="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            Confirm Rental
          </button>
          
        </div>
      </div>
    </div>

    <!-- Game not found -->
    <div v-else class="text-center text-gray-400 text-xl font-semibold mt-12">
      Game not found!
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
