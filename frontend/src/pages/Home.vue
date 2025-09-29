<template>
  <div class="min-h-screen bg-[#0f172a] text-[#f1f5f9] overflow-x-hidden">
    
    <section class="relative bg-gradient-to-r from-[#1e293b] to-[#0f172a] py-32 border-b-4 border-cyan-600/50">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInDown text-cyan-500 drop-shadow-lg shadow-cyan-500/50">
          Rent the Best Games Instantly
        </h1>
        <p class="text-lg md:text-xl text-[#94a3b8] mb-8 animate-fadeIn">
          From GTA to FIFA, experience gaming without buying.
        </p>
        <router-link 
          to="/games" 
          class="bg-cyan-600 hover:bg-cyan-700 transition-transform transform hover:scale-105 px-8 py-3 rounded-lg text-lg font-bold animate-bounce shadow-xl shadow-cyan-500/30 uppercase tracking-wide"
        >
          Browse More Games
        </router-link>
      </div>
    </section>

    <section class="py-16 container mx-auto px-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 text-center sm:text-left">
        <h2 class="text-3xl font-extrabold text-white mb-3 sm:mb-0 border-l-4 border-cyan-600 pl-3">Featured Games</h2>
        <router-link 
          to="/games" 
          class="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline-offset-4 hover:underline"
        >
          Discover All →
        </router-link>
      </div>

      <div 
        v-if="games.length"
        class="flex gap-6 overflow-x-auto snap-x snap-mandatory
               sm:grid sm:gap-8 sm:overflow-visible sm:snap-none 
               sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="game in featuredGames"
          :key="game.id"
          class="group bg-gray-950 border border-cyan-800 rounded-2xl shadow-xl 
                 overflow-hidden hover:shadow-cyan-500/30 transition-transform duration-500 
                 transform hover:scale-[1.05] min-w-[280px] snap-center sm:min-w-0"
        >
          <div class="relative h-48">
            <img :src="game.image" :alt="game.title" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1" />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent"></div>
          </div>

          <div class="p-5 flex flex-col gap-3">
            <h3 class="text-xl font-extrabold text-white truncate group-hover:text-cyan-400 transition-colors">{{ game.title }}</h3>
            <p class="text-gray-400 text-sm line-clamp-2">{{ game.description }}</p>

            <div class="mt-4">
              <button
                @click="goToRent(game.id)"
                class="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 
                       rounded-xl font-bold transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/40 uppercase"
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-gray-400 py-20">
        <p class="text-xl">No games available yet. Please check back later!</p>
      </div>
    </section>

    <section id="how-it-works" class="relative bg-gradient-to-r from-[#1e293b] to-[#0f172a] py-32 border-t-4 border-cyan-600/50">
      <h2 class="text-3xl font-bold text-center mb-12 text-cyan-500">How It Works</h2>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-center">
        <div class="bg-gray-900 border border-cyan-700 p-8 rounded-2xl shadow-2xl shadow-cyan-900/40 hover:scale-105 hover:shadow-cyan-600/30 transition-transform duration-500">
          <svg class="w-10 h-10 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l-1.5 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h3 class="text-xl font-semibold mb-2 text-cyan-400">Choose Your Game</h3>
          <p class="text-gray-300">Browse our wide collection and pick your favorite title.</p>
        </div>

        <div class="bg-gray-900 border border-cyan-700 p-8 rounded-2xl shadow-2xl shadow-cyan-900/40 hover:scale-105 hover:shadow-cyan-600/30 transition-transform duration-500">
          <svg class="w-10 h-10 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
          <h3 class="text-xl font-semibold mb-2 text-cyan-400">Rent Online</h3>
          <p class="text-gray-300">Pay securely and get instant digital access to the game.</p>
        </div>

        <div class="bg-gray-900 border border-cyan-700 p-8 rounded-2xl shadow-2xl shadow-cyan-900/40 hover:scale-105 hover:shadow-cyan-600/30 transition-transform duration-500">
          <svg class="w-10 h-10 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h3 class="text-xl font-semibold mb-2 text-cyan-400">Play & Enjoy</h3>
          <p class="text-gray-300">Download or stream instantly and enjoy your gaming session.</p>
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