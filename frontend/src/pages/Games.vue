<template>
  <div class="min-h-screen bg-[#0f172a] text-[#f1f5f9] overflow-x-hidden">
    
    <header class="relative bg-gradient-to-r from-[#1e293b] to-[#0f172a] py-32 border-b-4 border-cyan-600/50">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInDown text-cyan-500 drop-shadow-lg shadow-cyan-500/50">
          Explore All Games
        </h1>
        <p class="text-lg md:text-xl text-[#94a3b8] mb-8 animate-fadeIn">
          Browse and rent your favorite titles instantly
        </p>
      </div>
    </header>

    <section class="py-16 container mx-auto px-6">
      <div 
        v-if="games.length" 
        class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="game in games"
          :key="game.id"
          
          class="group bg-gray-950 border border-cyan-800 rounded-2xl shadow-xl 
                 overflow-hidden hover:shadow-cyan-500/30 transition-transform duration-500 
                 transform hover:scale-[1.03]"
          
        >
          <div class="relative h-48">
            <img :src="game.image" :alt="game.title" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1" />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent"></div>
          </div>

          <div class="p-5 flex flex-col gap-3">
            <h2 class="text-xl font-extrabold text-white truncate group-hover:text-cyan-400 transition-colors">{{ game.title }}</h2>
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

/* Include custom animations if needed, although they weren't in the original <style> block,
   they were in the class list. I'll omit them here since they are not in the <style> block.
*/
</style>