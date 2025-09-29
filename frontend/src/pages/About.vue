<template>
  <div class="min-h-screen bg-[#0f172a] text-[#f1f5f9] overflow-x-hidden">
    
    <section class="relative bg-gradient-to-r from-[#1e293b] to-[#0f172a] py-32 border-b-4 border-cyan-600/50">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInDown text-cyan-500 drop-shadow-lg shadow-cyan-500/50">
          SankGaming
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-fadeIn">
          Your ultimate platform to rent the best games instantly — play more, own less.
        </p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-cyan-400 border-b-4 border-cyan-600 inline-block px-4 pb-2">Our Mission</h2>
        <p class="text-gray-300 text-lg max-w-3xl mx-auto">
          SankGaming is dedicated to bringing gamers closer to the titles they love without the heavy costs of purchasing.
          With our platform, you can rent, play, and enjoy — anytime, anywhere.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="bg-gray-900 border border-cyan-700 p-6 rounded-2xl shadow-xl shadow-cyan-900/40 hover:scale-105 hover:shadow-cyan-600/30 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2 text-cyan-400">Founded</h3>
          <p class="text-gray-300 font-bold text-lg">2023</p>
        </div>
        <div class="bg-gray-900 border border-cyan-700 p-6 rounded-2xl shadow-xl shadow-cyan-900/40 hover:scale-105 hover:shadow-cyan-600/30 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2 text-cyan-400">Games Available</h3>
          <p class="text-gray-300 font-bold text-lg">100+ titles</p>
        </div>
        <div class="bg-gray-900 border border-cyan-700 p-6 rounded-2xl shadow-xl shadow-cyan-900/40 hover:scale-105 hover:shadow-cyan-600/30 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2 text-cyan-400">Happy Gamers</h3>
          <p class="text-gray-300 font-bold text-lg">5000+ users</p>
        </div>
      </div>
      
     
      </section>

  </div>
</template>

<script>

</script>

<style scoped>
/* Fade-in animation for hero */
@keyframes fadeInDown {
  0% { opacity: 0; transform: translateY(-20px);}
  100% { opacity: 1; transform: translateY(0);}
}
.animate-fadeInDown { animation: fadeInDown 0.6s ease forwards; }
.animate-fadeIn { animation: fadeInDown 0.8s ease forwards; }
</style>