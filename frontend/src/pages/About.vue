<template>
  <div class="min-h-screen bg-[#0f172a] text-[#f1f5f9] overflow-x-hidden">
    
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-[#1e293b] to-[#0f172a] py-32">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInDown text-[#6366f1]">
          SankGaming
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-fadeIn">
          Your ultimate platform to rent the best games instantly — play more, own less.
        </p>
      </div>
    </section>

    <!-- Our Mission -->
    <section class="max-w-6xl mx-auto px-6 py-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-indigo-400">Our Mission</h2>
        <p class="text-gray-300 text-lg max-w-3xl mx-auto">
          SankGaming is dedicated to bringing gamers closer to the titles they love without the heavy costs of purchasing.
          With our platform, you can rent, play, and enjoy — anytime, anywhere.
        </p>
      </div>

      <!-- Milestones -->
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-600/30 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2 text-indigo-400">Founded</h3>
          <p class="text-gray-300">2023</p>
        </div>
        <div class="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-600/30 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2 text-indigo-400">Games Available</h3>
          <p class="text-gray-300">100+ titles</p>
        </div>
        <div class="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-600/30 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2 text-indigo-400">Happy Gamers</h3>
          <p class="text-gray-300">5000+ users</p>
        </div>
      </div>
    </section>



  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      team: [
        { name: "Aqil Khan", role: "Founder & CEO", image: "/images/team1.jpg", linkedin: "#", twitter: "#" },
        { name: "Sarah Lee", role: "Lead Developer", image: "/images/team2.jpg", linkedin: "#", twitter: "#" },
        { name: "John Doe", role: "UI/UX Designer", image: "/images/team3.jpg", linkedin: "#", twitter: "#" },
        { name: "Emily Clark", role: "Marketing Lead", image: "/images/team4.jpg", linkedin: "#", twitter: "#" },
      ]
    };
  }
};
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
