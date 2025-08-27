<template>
  <div class="min-h-screen bg-gray-100 py-12 px-6">
    <div v-if="game" class="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      
      <!-- Game Section (Image + Details side by side) -->
      <div class="flex flex-col md:flex-row">
        
        <!-- Game Image -->
        <div class="bg-gray-200 flex justify-center items-center w-full md:w-1/2">
          <img 
            :src="game.image" 
            :alt="game.title" 
            class="w-full h-[400px] object-cover"
          />
        </div>

        <!-- Game Details -->
        <div class="p-8 w-full md:w-1/2">
          <h1 class="text-3xl font-bold mb-2">{{ game.title }}</h1>
          <p class="text-gray-600 mb-4">{{ game.description }}</p>
          <p class="text-yellow-500 mb-6">⭐ {{ game.rating }}/5</p>
        </div>
      </div>

      <!-- Rental Plan Section -->
      <div class="p-8 bg-gray-50 rounded-b-2xl shadow-inner">
        <h2 class="text-2xl font-bold mb-4">Choose Your Rental Plan</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Daily Plan -->
          <div 
            @click="selectPlan('daily')" 
            :class="planClass('daily')" 
            class="cursor-pointer p-6 rounded-xl border hover:shadow-lg transition">
            <h3 class="text-xl font-semibold">Daily Plan</h3>
            <p class="text-gray-600 mt-2">Rent this game for a full day.</p>
            <p class="text-indigo-600 font-bold mt-4">
              Rs {{ game.dailyPrice }} / day
            </p>
          </div>

          <!-- Weekly Plan -->
          <div 
            @click="selectPlan('weekly')" 
            :class="planClass('weekly')" 
            class="cursor-pointer p-6 rounded-xl border hover:shadow-lg transition">
            <h3 class="text-xl font-semibold">Weekly Plan</h3>
            <p class="text-gray-600 mt-2">Rent this game for 7 days.</p>
            <p class="text-indigo-600 font-bold mt-4">
              Rs {{ game.weeklyPrice }} / week
            </p>
          </div>

        </div>

        <!-- Selected Plan Summary -->
        <div v-if="selectedPlan" class="mt-8 p-6 bg-indigo-50 rounded-xl">
          <h3 class="text-lg font-semibold">You selected:</h3>
          <p class="mt-2">
            <span class="font-bold capitalize">{{ selectedPlan }}</span> Plan → 
            <span class="text-indigo-600 font-bold">Rs {{ calculatePrice }}</span>
          </p>
          <button 
            @click="confirmOrder" 
            class="mt-6 bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition">
            Confirm Rental
          </button>
        </div>
      </div>
    </div>

    <!-- Game not found -->
    <div v-else class="text-center text-gray-600 text-xl font-semibold mt-12">
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
        ? "border-2 border-indigo-500 bg-indigo-50"
        : "border";
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
          // Logged-in user → Firestore
          const cartRef = collection(db, "users", user.uid, "cart");
          await addDoc(cartRef, cartItem);
        } else {
          // Guest → localStorage
          const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
          guestCart.push(cartItem);
          localStorage.setItem("guestCart", JSON.stringify(guestCart));
        }

        this.$router.push("/cart");
      } catch (err) {
        console.error("Error adding to cart:", err);
        this.$router.push("/cart");
      }
    },
  },
  async mounted() {
    const gameId = this.$route.params.id;
    const gameRef = doc(db, "games", gameId);
    const gameSnap = await getDoc(gameRef);

    if (gameSnap.exists()) {
      this.game = { id: gameSnap.id, ...gameSnap.data() };
    } else {
      this.game = null;
    }
  },
};
</script>
