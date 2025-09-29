<template>
  <div class="min-h-screen bg-gray-950 text-white overflow-x-hidden">
    
    <div class="pt-24"></div> 

    <header class="relative bg-gradient-to-r from-gray-800 to-gray-950 py-16 border-b-4 border-cyan-600/50">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInDown text-cyan-500 drop-shadow-lg shadow-cyan-500/50">
          Explore All Games
        </h1>
        <p class="text-lg md:text-xl text-gray-400 mb-8 animate-fadeIn">
          Browse and rent your favorite titles instantly
        </p>
      </div>
    </header>

    <section class="py-16 container mx-auto px-6">
      
      <div v-if="loading" class="text-center py-32">
        <svg class="animate-spin h-10 w-10 text-cyan-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="text-xl text-gray-400">Loading the library...</p>
      </div>

      <div 
        v-else-if="games.length" 
        class="grid gap-3 sm:gap-6 lg:gap-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <router-link
          v-for="game in games"
          :key="game.id"
          :to="`/rent/${game.id}`"
          class="group bg-gray-950 border border-cyan-800 rounded-lg shadow-xl 
                 overflow-hidden hover:shadow-cyan-500/30 transition-transform duration-500 
                 transform hover:scale-[1.03] cursor-pointer block"
        >
          <div class="relative w-full aspect-square">
            <img :src="game.image" :alt="game.title" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1" />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent"></div>
          </div>

          <div class="p-2 lg:p-5 flex flex-col justify-between h-full">
            <div>
              <h2 class="text-sm lg:text-xl font-extrabold text-white truncate group-hover:text-cyan-400 transition-colors">{{ game.title }}</h2>
              <p class="hidden lg:block text-gray-400 text-sm line-clamp-2 mt-1 mb-4">{{ game.description }}</p>
            </div>

            <div 
              class="w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white px-2 py-1 
                     rounded-md text-xs lg:text-base font-bold transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/40 uppercase mt-2 lg:mt-0"
            >
              Rent Now
            </div>
          </div>
        </router-link>
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
      loading: true,
    };
  },
  async mounted() {
    try {
      // Initialize Firestore without explicitly passing 'app'
      const db = getFirestore(); 
      
      const gamesCol = collection(db, "games");
      const gamesSnapshot = await getDocs(gamesCol);
      this.games = gamesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error fetching games from Firebase:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
/* Keeping line-clamp just in case, though description is hidden on mobile now */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>