<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Header -->
    &nbsp;
    &nbsp;

    <header class="bg-gradient-to-r from-purple-700 to-indigo-800 py-12 shadow-lg">
      <div class="container mx-auto px-6 text-center">
        &nbsp;
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Explore All Games</h1>
        <p class="text-lg text-gray-300">Browse and rent your favorite titles instantly</p>
      </div>
    </header>

    <!-- Games Grid -->
    <section class="py-16 container mx-auto px-6">
      <div v-if="games.length" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div
          v-for="game in games"
          :key="game.id"
          class="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <!-- Game Image -->
          <div class="relative h-48">
            <img :src="game.image" :alt="game.title" class="w-full h-full object-cover" />
            <div class="absolute top-2 right-2 bg-indigo-600 px-2 py-1 rounded text-xs font-semibold">
              ⭐ {{ game.rating }}
            </div>
          </div>

          <!-- Game Info -->
          <div class="p-5">
            <h2 class="text-xl font-bold truncate">{{ game.title }}</h2>
            <p class="text-gray-400 text-sm mt-2 line-clamp-2">{{ game.description }}</p>
            <div class="mt-4 flex items-center justify-between">
              <button
                @click="goToRent(game.id)"
                class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center text-gray-400">
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
      const gamesCol = collection(db, "games"); // 'games' collection in Firestore
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
      // ✅ Always go to rent page, no matter if logged in or not
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
