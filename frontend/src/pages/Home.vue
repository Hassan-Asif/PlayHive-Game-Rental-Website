<template>
  <div class="min-h-screen bg-[#0f172a] text-[#f1f5f9] overflow-x-hidden">
    
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-[#1e293b] to-[#0f172a] py-32">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInDown text-[#6366f1]">
          Rent the Best Games Instantly
        </h1>
        <p class="text-lg md:text-xl text-[#94a3b8] mb-8 animate-fadeIn">
          From GTA to FIFA, experience gaming without buying.
        </p>
        <router-link 
          to="/games" 
          class="bg-[#6366f1] hover:bg-[#06b6d4] transition-transform transform hover:scale-105 px-8 py-3 rounded-lg text-lg font-semibold animate-bounce shadow-lg"
        >
          Browse More Games
        </router-link>
      </div>
    </section>

    <!-- Featured Games Section -->
<section class="py-16 container mx-auto px-6">
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 text-center sm:text-left">
    <h2 class="text-3xl font-extrabold text-white mb-3 sm:mb-0">Featured Games</h2>
    <router-link 
      to="/games" 
      class="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300 underline-offset-4 hover:underline"
    >
      Discover All →
    </router-link>
  </div>

  <!-- Mobile scroll, Desktop grid -->
  <div 
    v-if="games.length"
    class="flex gap-6 overflow-x-auto snap-x snap-mandatory
           sm:grid sm:gap-8 sm:overflow-visible sm:snap-none 
           sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <div
      v-for="game in featuredGames"
      :key="game.id"
      class="group bg-gray-900 border border-gray-800 rounded-2xl shadow-lg 
             overflow-hidden hover:shadow-indigo-600/20 transition-transform duration-500 
             transform hover:scale-[1.03] min-w-[250px] snap-center sm:min-w-0"
    >
      <!-- Game Image -->
      <div class="relative h-48">
        <img :src="game.image" :alt="game.title" 
             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
      </div>

      <!-- Game Info -->
      <div class="p-5 flex flex-col gap-3">
        <h3 class="text-lg font-bold text-white truncate">{{ game.title }}</h3>
        <p class="text-gray-400 text-sm line-clamp-2">{{ game.description }}</p>

        <div class="mt-4">
          <button
            @click="goToRent(game.id)"
            class="w-full bg-indigo-600/90 hover:bg-indigo-700 text-white px-4 py-2 
                   rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/30"
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Empty State -->
  <div v-else class="text-center text-gray-400 py-20">
    <p class="text-xl">No games available yet. Please check back later!</p>
  </div>
</section>

<!-- How It Works Section -->
<section id="how-it-works" class="relative bg-gradient-to-r from-[#1e293b] to-[#0f172a] py-32">
  <h2 class="text-3xl font-bold text-center mb-12 text-[#6366f1]">How It Works</h2>

  <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-center">
    <div class="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-600/30 transition-transform duration-500">
      <h3 class="text-xl font-semibold mb-2 text-indigo-400">Choose Your Game</h3>
      <p class="text-gray-300">Browse our wide collection and pick your favorite.</p>
    </div>

    <div class="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-600/30 transition-transform duration-500">
      <h3 class="text-xl font-semibold mb-2 text-indigo-400">Rent Online</h3>
      <p class="text-gray-300">Pay online and get instant access to the game.</p>
    </div>

    <div class="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-600/30 transition-transform duration-500">
      <h3 class="text-xl font-semibold mb-2 text-indigo-400">Play & Enjoy</h3>
      <p class="text-gray-300">Download or play online and enjoy your gaming session.</p>
    </div>
  </div>
</section>


    
  </div>
</template>

<script>
import { db } from "../firebase"; 
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "Home",
  data() {
    return {
      games: [],
    };
  },
  computed: {
    // Only show first 4 games in Featured section
    featuredGames() {
      return this.games.slice(0, 4);
    },
  },
  methods: {
    goToRent(gameId) {
      this.$router.push(`/rent/${gameId}`);
    },
  },
  async mounted() {
    // Fetch games from Firebase Firestore
    const querySnapshot = await getDocs(collection(db, "games"));
    this.games = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
};
</script>

<style scoped>
@keyframes fadeInDown {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.animate-fadeInDown { animation: fadeInDown 1s ease forwards; }
.animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
.animate-fadeIn { animation: fadeIn 1.2s ease forwards; }

html {
  scroll-behavior: smooth;
}
</style>
