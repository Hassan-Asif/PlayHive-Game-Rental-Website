<template>
  <div class="relative min-h-screen bg-[#030712] text-gray-100 pt-24 pb-20 overflow-hidden">
    
    <!-- Animated Neon Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.08)_0%,_transparent_70%)] animate-pulse-slow"></div>
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="relative text-center text-gray-400 font-semibold py-40 animate-fadeIn z-10">
      <svg class="animate-spin h-10 w-10 text-cyan-400 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4zm2 5.3A8 8 0 014 12H0c0 3 1.1 5.8 3 7.9l3-2.6z" />
      </svg>
      <p class="text-xl">Loading game details...</p>
    </div>

    <!-- Game Details -->
    <div v-else-if="game" class="relative max-w-6xl mx-auto z-10 animate-fadeUp">
      <div class="bg-gray-900/80 border border-cyan-800/50 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.2)] backdrop-blur-md">

        <!-- Game Info -->
        <div class="flex flex-col md:flex-row">
          <div class="relative w-full md:w-2/5 aspect-[1/1] overflow-hidden border-b-4 md:border-r-4 border-cyan-700/40">
            <img :src="game.image" :alt="game.title"
              class="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <button @click="$router.go(-1)"
              class="absolute top-4 left-4 z-10 p-3 rounded-full bg-cyan-600/70 hover:bg-cyan-500 transition shadow-lg backdrop-blur-md">
              <svg class="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
          </div>

          <div class="flex flex-col justify-center p-6 md:p-10 w-full md:w-3/5">
            <h1 class="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
              {{ game.title }}
            </h1>
            <p class="mt-5 text-gray-300 leading-relaxed text-sm md:text-base">
              {{ game.description }}
            </p>
          </div>
        </div>

        <!-- Rental Options -->
        <div class="p-8 bg-gray-950/90 border-t border-cyan-800/40">
          <h2 class="text-2xl font-bold text-cyan-400 border-l-4 border-cyan-600 pl-3 mb-6">
            Rent This Game Instantly
          </h2>

          <div class="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible">
            <div v-for="plan in plans" :key="plan.type" @click="selectPlan(plan.type)"
              :class="planClass(plan.type)"
              class="cursor-pointer p-5 rounded-xl border-2 bg-gray-900/70 shadow-md hover:shadow-cyan-500/30 transition-transform duration-300 transform hover:scale-[1.03] min-w-[250px] snap-center">
              <h3 class="text-xl font-bold text-white uppercase tracking-wide">
                {{ plan.label }}
              </h3>
              <p class="text-gray-400 text-sm mt-1">{{ plan.desc }}</p>
              <p class="text-cyan-400 font-extrabold mt-3 text-xl">
                Rs {{ plan.price }}
                <span class="text-sm text-gray-500 font-normal">/ {{ plan.duration }}</span>
              </p>
            </div>
          </div>

          <!-- Confirm Section -->
          <transition name="fade-scale">
            <div v-if="selectedPlan" class="mt-8 p-6 bg-gray-900/80 rounded-xl border border-cyan-700 shadow-[0_0_25px_rgba(6,182,212,0.25)] backdrop-blur-lg">
              <h3 class="text-lg font-extrabold flex items-center">
                <span class="text-cyan-400 mr-2">✓</span> Ready to Rent
              </h3>
              <p class="mt-3 text-gray-300">
                Plan Selected:
                <span class="capitalize font-bold text-cyan-400">{{ selectedPlan }}</span>
              </p>
              <p class="mt-1 text-gray-300">
                Total Price:
                <span class="text-cyan-400 font-black text-xl ml-2">Rs {{ calculatePrice }}</span>
              </p>

              <button @click="confirmOrder"
                class="mt-6 w-full md:w-auto bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                Confirm Rental
              </button>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- 404 -->
    <div v-else class="relative text-center text-gray-400 py-40 z-10 animate-fadeIn">
      <h3 class="text-5xl font-black text-cyan-500 mb-4">404</h3>
      <p>⚠️ Game not found! Please check the link.</p>
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
      plans: [],
    };
  },
  computed: {
    calculatePrice() {
      if (!this.selectedPlan) return 0;
      const plan = this.plans.find((p) => p.type === this.selectedPlan);
      return plan ? plan.price : 0;
    },
  },
  methods: {
    selectPlan(type) {
      this.selectedPlan = type;
    },
    planClass(type) {
      return this.selectedPlan === type
        ? "border-cyan-500 bg-gray-800 shadow-[0_0_20px_rgba(56,189,248,0.5)]"
        : "border-gray-700";
    },
    async confirmOrder() {
      if (!this.selectedPlan) return alert("Please select a rental plan first!");
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
          await addDoc(collection(db, "users", user.uid, "cart"), cartItem);
        } else {
          const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
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
      const id = this.$route.params.id;
      const snap = await getDoc(doc(db, "games", id));
      if (snap.exists()) {
        const data = snap.data();
        this.game = { id: snap.id, ...data };
        this.plans = [
          { type: "daily", label: "Daily Pass", desc: "Perfect for quick play sessions.", duration: "24 hrs", price: data.dailyPrice },
          { type: "weekly", label: "Weekly Access", desc: "Best for immersive gaming.", duration: "7 days", price: data.weeklyPrice },
        ];
      } else this.game = null;
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
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeUp {
  animation: fadeUp 0.9s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 1.2s ease forwards;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulse-slow 20s ease-in-out infinite;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.5s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
