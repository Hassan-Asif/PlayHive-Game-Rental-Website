<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-[#020617] text-white overflow-hidden relative px-6 py-20">
    
    <!-- Neon animated background -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.1),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.1),transparent_60%)] animate-pulse-slow -z-10"></div>
    <div class="absolute inset-0 bg-[linear-gradient(45deg,rgba(56,189,248,0.05)_25%,transparent_25%,transparent_75%,rgba(56,189,248,0.05)_75%),linear-gradient(45deg,rgba(168,85,247,0.05)_25%,transparent_25%,transparent_75%,rgba(168,85,247,0.05)_75%)] bg-[length:60px_60px] opacity-30 animate-scanlines -z-10"></div>

    <!-- Card -->
    <div class="relative max-w-xl w-full text-center p-10 sm:p-16 bg-[#0f172a]/80 backdrop-blur-md rounded-2xl border border-cyan-700/50 shadow-[0_0_30px_rgba(56,189,248,0.2)] animate-fadeIn z-10">
      
      <!-- Animated success icon -->
      <div class="relative flex justify-center mb-8">
        <div class="absolute w-28 h-28 rounded-full border-4 border-cyan-600/40 animate-spin-slow"></div>
        <svg 
          class="w-16 h-16 text-cyan-400 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] animate-bounceOnce relative z-10"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>

      <!-- Text -->
      <h1 class="text-4xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
        Order Confirmed!
      </h1>

      <p class="text-lg md:text-xl text-gray-300 mt-4">
        Your rental order has been successfully placed.
      </p>

      <p class="text-base text-gray-400 mt-4 border-t border-cyan-800/40 pt-4 leading-relaxed">
        We’re preparing your gaming session! You’ll receive an email or message soon with your game access details. Get ready to dive in.
      </p>

      <!-- Button -->
      <router-link
        to="/games"
        class="inline-block mt-10 bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-3 rounded-lg font-bold text-white uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all duration-300"
      >
        Continue Browsing Games
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderSuccess",
};
</script>

<style scoped>
/* Fade in animation */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }

/* Bounce icon animation */
@keyframes bounceOnce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-bounceOnce { animation: bounceOnce 1.2s ease-out; }

/* Rotating neon border ring */
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spinSlow 6s linear infinite;
}

/* Subtle pulse background */
@keyframes pulseSlow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}
.animate-pulse-slow {
  animation: pulseSlow 8s ease-in-out infinite;
}

/* Moving scanline overlay */
@keyframes scanlines {
  0% { background-position: 0 0, 0 0; }
  100% { background-position: 120px 120px, -120px -120px; }
}
.animate-scanlines {
  animation: scanlines 20s linear infinite;
}
</style>
