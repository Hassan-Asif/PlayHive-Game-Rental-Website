<template>
  <footer
    class="relative overflow-hidden bg-gradient-to-b from-[#03030a] via-[#050518] to-[#0b0b1f] text-gray-300 py-16 border-t border-cyan-800/40"
  >
    <!-- Animated grid / glow background -->
    <div class="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.15),_transparent_70%)] animate-pulse-slow"></div>
    <div class="absolute inset-0 -z-20 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10"></div>

    <div class="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
      <!-- BRAND -->
      <div class="space-y-5">
        <h2
          class="text-3xl sm:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"
        >
          SankGaming
        </h2>
        <p class="text-gray-400 text-sm leading-relaxed">
          Power up your play! Rent top titles, unlock gaming freedom, and dive into immersive worlds anytime.
        </p>
        <div class="flex gap-4 mt-4">
          <!--<a
            href="#"
            class="p-2 rounded-full bg-gray-800/70 hover:bg-cyan-600/40 transition transform hover:scale-110 hover:shadow-[0_0_18px_rgba(56,189,248,0.7)]"
          >
            <i class="fab fa-twitter text-cyan-400 text-lg"></i>
          </a>
          <a
            href="#"
            class="p-2 rounded-full bg-gray-800/70 hover:bg-purple-600/40 transition transform hover:scale-110 hover:shadow-[0_0_18px_rgba(168,85,247,0.7)]"
          >
            <i class="fab fa-discord text-purple-400 text-lg"></i>
          </a>
          <a
            href="#"
            class="p-2 rounded-full bg-gray-800/70 hover:bg-red-600/40 transition transform hover:scale-110 hover:shadow-[0_0_18px_rgba(239,68,68,0.7)]"
          >
            <i class="fab fa-youtube text-red-500 text-lg"></i>
          </a> -->
        </div>
      </div>

      <!-- QUICK LINKS -->
      <div>
        <h3 class="text-lg font-semibold text-cyan-400 mb-3 border-l-2 border-cyan-600 pl-3">Quick Links</h3>
        <ul class="space-y-2 text-sm">
          <li><router-link to="/games" class="hover:text-cyan-300 transition">Browse Games</router-link></li>
          <li><a href="#how-it-works" class="hover:text-cyan-300 transition">How It Works</a></li>
          <li><router-link to="/about" class="hover:text-cyan-300 transition">About Us</router-link></li>
        </ul>
      </div>

      <!-- SUPPORT -->
      <!---<div>
        <h3 class="text-lg font-semibold text-cyan-400 mb-3 border-l-2 border-cyan-600 pl-3">Support</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-cyan-300 transition">FAQs</a></li>
          <li><a href="#" class="hover:text-cyan-300 transition">Terms of Service</a></li>
          <li><a href="#" class="hover:text-cyan-300 transition">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-cyan-300 transition">Report a Problem</a></li>
        </ul>
      </div> -->

      <!-- NEWSLETTER -->
      <div>
        <h3 class="text-lg font-semibold text-cyan-400 mb-3 border-l-2 border-cyan-600 pl-3">Stay Updated</h3>
        <p class="text-gray-400 text-sm mb-4">
          Subscribe for exclusive game drops, special rental discounts, and sneak peeks.
        </p>
        <form @submit.prevent class="flex items-center gap-2">
          <input
            type="email"
            placeholder="Your Email"
            class="w-full px-3 py-2 rounded-lg bg-gray-900/70 border border-cyan-700/40 focus:ring-2 focus:ring-cyan-500 outline-none text-gray-200 text-sm placeholder-gray-500"
          />
          <button
            type="submit"
            class="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-sm text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:scale-[1.03] transition-all"
          >
            Join
          </button>
        </form>
      </div>
    </div>

    <!-- COPYRIGHT -->
    <div class="relative border-t border-cyan-800/30 mt-12 pt-6 text-center text-gray-500 text-sm z-10">
      © {{ new Date().getFullYear() }}
      <a
        href="https://aqil-lab.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        class="text-cyan-400 hover:text-cyan-300 transition font-semibold"
      >
        AqilLabs
      </a>
      — All Rights Reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

/* Slow pulsating background glow */
@keyframes pulseGlowSlow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulseGlowSlow 10s ease-in-out infinite;
}
</style>
