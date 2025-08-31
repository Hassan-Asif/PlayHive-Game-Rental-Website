<template>
  <div class="min-h-screen bg-[#0f172a] text-[#f1f5f9] overflow-x-hidden">
    <!-- Header -->
    <header class="relative bg-gradient-to-r from-[#1e293b] to-[#0f172a] py-32">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInDown text-[#6366f1]">Explore All Games</h1>
        <p class="text-lg md:text-xl text-[#94a3b8] mb-8 animate-fadeIn">Browse and rent your favorite titles instantly</p>
      </div>
    </header>

    <!-- Games Section -->
<section class="py-16 container mx-auto px-6">
  <div 
    v-if="games.length" 
    class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <div
      v-for="game in games"
      :key="game.id"
      class="group bg-gray-900 border border-gray-800 rounded-2xl shadow-lg 
             overflow-hidden hover:shadow-indigo-600/20 transition-transform duration-500 
             transform hover:scale-[1.03]"
    >
      <!-- Game Image -->
      <div class="relative h-48">
        <img :src="game.image" :alt="game.title" 
             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
      </div>

      <!-- Game Info -->
      <div class="p-5 flex flex-col gap-3">
        <h2 class="text-lg font-bold text-white truncate">{{ game.title }}</h2>
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

  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default {
  name: "Games",
  data() {
    return {
      games: [],
    };
  },
  async mounted() {
    try {
      const db = getFirestore();
      const gamesCol = collection(db, "games");
      const gamesSnapshot = await getDocs(gamesCol);
      this.games = gamesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error fetching games from Firebase:", error);
    }
  },
  methods: {
    goToRent(gameId) {
      this.$router.push(`/rent/${gameId}`);
    },
  },
};
</script>

<style scoped>
/* Limit description to 2 lines */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
