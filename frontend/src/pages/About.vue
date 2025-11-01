<template>
  <div class="min-h-screen bg-[#020617] text-[#e2e8f0] overflow-x-hidden relative">
    
    <!-- Animated background -->
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.1),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.1),transparent_60%)] animate-pulse-slow"></div>

    <!-- HERO SECTION -->
    <section class="relative py-32 text-center bg-gradient-to-b from-[#0f172a]/90 to-[#020617] border-b border-cyan-700/40">
      <div class="max-w-4xl mx-auto px-6">
        <h1 class="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)] animate-fadeInDown">
          About SankGaming
        </h1>
        <p class="text-lg md:text-xl text-gray-400 mt-6 animate-fadeInUp max-w-2xl mx-auto leading-relaxed">
          We’re redefining how gamers play — forget ownership, embrace freedom. 
          SankGaming lets you rent the best games instantly and play without limits.
        </p>
      </div>
    </section>

    <!-- MISSION SECTION -->
    <section class="max-w-6xl mx-auto px-6 py-20 relative">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-cyan-400 border-b-4 border-cyan-600 inline-block px-6 pb-2 tracking-wider">
          Our Mission
        </h2>
        <p class="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          We’re here to connect players with the games they love — without the price barrier. 
          Play your way, explore new worlds, and experience premium gaming at your fingertips.
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid md:grid-cols-3 gap-10">
        <div class="group bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-8 rounded-2xl border border-cyan-800/60 shadow-lg shadow-cyan-900/30 hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500 text-center">
          <h3 class="text-cyan-400 text-xl font-semibold mb-2">Founded</h3>
          <p class="text-3xl font-extrabold text-white group-hover:text-cyan-300">2023</p>
        </div>
        <div class="group bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-8 rounded-2xl border border-cyan-800/60 shadow-lg shadow-cyan-900/30 hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500 text-center">
          <h3 class="text-cyan-400 text-xl font-semibold mb-2">Games Available</h3>
          <p class="text-3xl font-extrabold text-white group-hover:text-cyan-300">100+</p>
        </div>
        <div class="group bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-8 rounded-2xl border border-cyan-800/60 shadow-lg shadow-cyan-900/30 hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500 text-center">
          <h3 class="text-cyan-400 text-xl font-semibold mb-2">Happy Gamers</h3>
          <p class="text-3xl font-extrabold text-white group-hover:text-cyan-300">5000+</p>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="relative py-24 bg-gradient-to-r from-cyan-700/10 to-purple-800/10 border-t border-cyan-700/40 text-center">
      <div class="max-w-3xl mx-auto px-6">
        <h2 class="text-4xl font-extrabold text-white mb-6 drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]">
          Join the SankGaming Revolution
        </h2>
        <p class="text-gray-400 text-lg mb-8">
          Be part of the future of gaming. Access hundreds of titles without breaking the bank — because play should be limitless.
        </p>
        <router-link
          to="/games"
          class="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-4 rounded-xl text-white font-bold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-transform duration-300"
        >
          Explore Games
        </router-link>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "About",
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
.animate-fadeInDown { animation: fadeInDown 0.8s ease forwards; }
.animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }

@keyframes pulseSlow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}
.animate-pulse-slow {
  animation: pulseSlow 10s ease-in-out infinite;
}
</style>
