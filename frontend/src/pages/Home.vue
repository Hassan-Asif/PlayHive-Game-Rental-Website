<template>
  <div class="min-h-screen bg-[#050510] text-gray-200 font-sans overflow-x-hidden relative">

    <!-- HERO SECTION -->
    <section class="relative flex flex-col justify-center items-center text-center h-[95vh] overflow-hidden">
      <!-- Animated background video -->
      <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src="https://cdn.coverr.co/videos/coverr-futuristic-light-tunnel-9691/1080p.mp4" type="video/mp4" />
      </video>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#050510]/70 via-[#06061a]/90 to-[#000]/95"></div>

      <!-- Floating Particles -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div v-for="n in 25" :key="n" class="particle"></div>
      </div>

      <!-- Hero content -->
      <div class="relative z-10 px-6 max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-glitch">
          GAME. RENT. REPEAT.
        </h1>
        <p class="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed animate-fadeInUp">
          Access the ultimate collection of games — no downloads, no limits. Play instantly across all platforms.
        </p>
        <router-link 
          to="/games"
          class="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-lg font-bold uppercase tracking-wider transition-transform transform hover:scale-110 hover:shadow-[0_0_40px_#06b6d4]"
        >
          Explore Library
        </router-link>
      </div>
    </section>

    <!-- FEATURED GAMES -->
    <section class="relative py-24 px-6 bg-[#070718] overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_60%)]"></div>

      <div class="relative z-10 container mx-auto">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 text-center sm:text-left">
          <h2 class="text-3xl font-extrabold text-white border-l-4 border-cyan-500 pl-3">🔥 Featured Games</h2>
          <router-link 
            to="/games"
            class="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-all underline-offset-4 hover:underline"
          >
            See All →
          </router-link>
        </div>

        <div
          v-if="featuredGames.length"
          class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="game in featuredGames"
            :key="game.id"
            class="group bg-[#0b0b20] rounded-2xl border border-cyan-800 shadow-lg shadow-cyan-900/40 
                   hover:shadow-cyan-500/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            <div class="relative h-48 overflow-hidden">
              <img :src="game.image" :alt="game.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-2 left-2 text-xs text-cyan-400 font-semibold bg-black/60 px-2 py-1 rounded">FEATURED</div>
            </div>

            <div class="p-5 flex flex-col gap-3">
              <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors truncate">{{ game.title }}</h3>
              <p class="text-gray-400 text-sm line-clamp-2">{{ game.description }}</p>

              <button
                @click="goToRent(game.id)"
                class="mt-auto w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-500/40 uppercase"
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>

        <div v-else class="text-center text-gray-400 py-20">
          <p class="text-xl">No games available yet. Check back soon!</p>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section id="how-it-works" class="relative py-24 bg-[#060616] border-t border-cyan-900">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.15),transparent_60%)]"></div>

      <div class="relative z-10 container mx-auto px-6 text-center">
        <h2 class="text-4xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">How It Works</h2>

        <div class="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="bg-[#0b0b20] border border-cyan-800 p-8 rounded-2xl shadow-xl shadow-cyan-900/40 
                   hover:-translate-y-2 hover:shadow-cyan-500/30 transition-transform duration-500"
          >
            <div class="text-cyan-400 text-4xl mb-4">
              <i :class="step.icon"></i>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">{{ step.title }}</h3>
            <p class="text-gray-400">{{ step.desc }}</p>
          </div>
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
      steps: [
        { icon: "fas fa-gamepad", title: "Choose Your Game", desc: "Browse hundreds of titles from every platform." },
        { icon: "fas fa-credit-card", title: "Rent Instantly", desc: "Pay securely and start playing within minutes." },
        { icon: "fas fa-play", title: "Play Anywhere", desc: "Stream or download and enjoy without limits." },
      ],
    };
  },
  computed: {
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
    const querySnapshot = await getDocs(collection(db, "games"));
    this.games = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

html {
  scroll-behavior: smooth;
}

/* Floating particles */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(6, 182, 212, 0.7);
  border-radius: 50%;
  animation: floatParticles 10s linear infinite;
}
.particle:nth-child(odd) { background: rgba(139, 92, 246, 0.8); }
@keyframes floatParticles {
  from { transform: translateY(100vh) translateX(0); opacity: 1; }
  to { transform: translateY(-10vh) translateX(20px); opacity: 0; }
}

/* Animations */
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp {
  animation: fadeInUp 1.5s ease forwards;
}

/* Glitch Text Effect */
@keyframes glitch {
  0% { text-shadow: 2px 2px #ff00c1, -2px -2px #00fff9; }
  20% { text-shadow: -2px 2px #ff00c1, 2px -2px #00fff9; }
  40% { text-shadow: 2px -2px #ff00c1, -2px 2px #00fff9; }
  60% { text-shadow: -2px -2px #ff00c1, 2px 2px #00fff9; }
  80% { text-shadow: 1px 1px #ff00c1, -1px -1px #00fff9; }
  100% { text-shadow: 2px 2px #ff00c1, -2px -2px #00fff9; }
}
.animate-glitch {
  animation: glitch 2s infinite;
}
</style>
