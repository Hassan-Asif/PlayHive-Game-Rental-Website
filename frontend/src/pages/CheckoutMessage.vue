<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white px-4 py-24 pb-16">
    
    <div 
      class="max-w-xl w-full text-center p-10 sm:p-16 bg-gray-900 rounded-2xl 
             shadow-3xl shadow-cyan-900/50 border-t-4 border-cyan-600 animate-fadeIn"
    >
      
      <div class="mb-8">
        <svg 
          class="w-16 h-16 text-cyan-500 mx-auto mb-6 drop-shadow-lg shadow-cyan-500/50 animate-bounceOnce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h1 class="text-4xl md:text-5xl font-black mb-3 text-cyan-400 drop-shadow-md">
          Order Confirmed!
        </h1>
      </div>
      
      <p class="text-lg md:text-xl text-gray-300 mb-6">
        Your rental order has been successfully placed.
      </p>
      
      <p class="text-base text-gray-400 mb-8 border-t border-cyan-800/50 pt-4">
        We're processing your request and will contact you via email/phone soon with the game activation details. Get ready to play!
      </p>
      
      <router-link
        to="/games"
        class="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-bold text-lg uppercase 
               tracking-wider transition transform hover:scale-[1.02] shadow-xl shadow-cyan-500/40"
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
/* Keyframe for the main fade-in effect */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { 
  animation: fadeIn 0.8s ease-out forwards; 
}

/* Keyframe for the subtle icon bounce */
@keyframes bounceOnce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-bounceOnce {
  animation: bounceOnce 1.2s ease-out;
}
</style>