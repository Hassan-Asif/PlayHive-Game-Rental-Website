<template>
  <div class="relative min-h-screen bg-[#030712] text-white overflow-x-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-800/10 via-purple-800/10 to-transparent animate-slowSpin"
      ></div>
      <div
        class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"
      ></div>
    </div>

    <!-- Spacer for Navbar -->
    <div class="pt-24"></div>

    <!-- Hero Section -->
    <header class="relative text-center py-24 border-b border-cyan-700/40 z-10">
      <h1
        class="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] animate-fadeInDown"
      >
        Explore All Games
      </h1>
      <p class="text-gray-400 text-lg md:text-xl mb-10 animate-fadeIn">
        Search and rent your favorite titles — play without limits.
      </p>

      <!-- Centered Search Bar -->
      <div
        class="max-w-xl mx-auto flex items-center bg-gray-900/70 border border-cyan-700/50 rounded-2xl px-5 py-3 shadow-[0_0_25px_rgba(56,189,248,0.3)] focus-within:shadow-cyan-500/40 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-cyan-400 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for a game..."
          class="bg-transparent w-full focus:outline-none text-gray-200 placeholder-gray-500 text-lg"
        />
      </div>
    </header>

    <!-- Games Grid -->
    <section class="relative py-16 container mx-auto px-6 z-10">
      <div v-if="loading" class="text-center py-32">
        <svg
          class="animate-spin h-10 w-10 text-cyan-400 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <p class="text-xl text-gray-400">Loading the library...</p>
      </div>

      <transition-group
        name="fade-scale"
        tag="div"
        v-else-if="filteredGames.length"
        class="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        <router-link
          v-for="game in filteredGames"
          :key="game.id"
          :to="`/rent/${game.id}`"
          class="group relative bg-gray-900/60 border border-cyan-800/40 rounded-xl shadow-lg overflow-hidden hover:shadow-cyan-500/30 transition-transform duration-500 transform hover:scale-[1.04] cursor-pointer"
        >
          <div class="relative w-full aspect-square overflow-hidden">
            <img
              :src="game.image"
              :alt="game.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 text-left bg-gradient-to-t from-black/60 to-transparent">
              <h2
                class="text-lg font-extrabold text-white truncate group-hover:text-cyan-400 transition-colors"
              >
                {{ game.title }}
              </h2>
            </div>
          </div>

          <div class="p-4">
            <p class="text-gray-400 text-sm line-clamp-2">{{ game.description }}</p>
            <button
              class="mt-4 w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-lg py-2 text-sm uppercase hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300"
            >
              Rent Now
            </button>
          </div>
        </router-link>
      </transition-group>

      <div v-else class="text-center text-gray-400 py-20">
        <p class="text-xl">No games found.</p>
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
      searchQuery: "",
    };
  },
  computed: {
    filteredGames() {
      const search = this.searchQuery.toLowerCase();
      return this.games.filter((g) => g.title.toLowerCase().includes(search));
    },
  },
  async mounted() {
    try {
      const db = getFirestore();
      const snapshot = await getDocs(collection(db, "games"));
      this.games = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInDown {
  animation: fadeInDown 1s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 1.2s ease forwards;
}

@keyframes slowSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-slowSpin {
  animation: slowSpin 100s linear infinite;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.6s ease;
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
