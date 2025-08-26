<template>
  <div class="min-h-screen bg-gray-900 text-white overflow-x-hidden">
    
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-purple-800 to-indigo-900 py-32">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInDown">
          Rent the Best Games Instantly
        </h1>
        <p class="text-lg md:text-xl text-gray-300 mb-8 animate-fadeIn">
          From GTA to FIFA, experience gaming without buying.
        </p>
        <router-link 
          to="/games" 
          class="bg-indigo-500 hover:bg-indigo-600 transition-transform transform hover:scale-105 px-8 py-3 rounded-lg text-lg font-semibold animate-bounce"
        >
          Browse More Games
        </router-link>
      </div>
    </section>

    <!-- Featured Games Carousel -->
    <section class="py-20">
      <h2 class="text-3xl font-bold text-center mb-12 animate-fadeInUp">Featured Games</h2>
      <div class="flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory">
        <div
          v-for="game in featuredGames"
          :key="game.id"
          class="min-w-[250px] snap-start bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
        >
          <img :src="game.image" :alt="game.title" class="w-full h-40 object-cover"/>
          <div class="p-4">
            <h3 class="text-lg font-semibold">{{ game.title }}</h3>
            <p class="text-gray-400 mt-1">{{ game.genre || 'Action' }}</p>
            <button 
              @click="goToRent(game.id)"
              class="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 w-full"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 bg-gray-800">
      <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">
        <div class="bg-gray-700 rounded-xl p-6 hover:scale-105 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2">Choose Your Game</h3>
          <p class="text-gray-300">Browse our wide collection and pick your favorite.</p>
        </div>
        <div class="bg-gray-700 rounded-xl p-6 hover:scale-105 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2">Rent Online</h3>
          <p class="text-gray-300">Pay online and get instant access to the game.</p>
        </div>
        <div class="bg-gray-700 rounded-xl p-6 hover:scale-105 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2">Play & Enjoy</h3>
          <p class="text-gray-300">Download or play online and enjoy your gaming session.</p>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import { db, auth } from "../firebase"; 
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "Home",
  data() {
    return {
      games: [],
    };
  },
  computed: {
    featuredGames() {
      return this.games.slice(0, 4);
    },
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "games"));
    this.games = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  methods: {
    goToRent(gameId) {
      const user = auth.currentUser;
      if (!user) {
        this.$router.push("/login");
      } else {
        this.$router.push(`/rent/${gameId}`);
      }
    },
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
</style>
