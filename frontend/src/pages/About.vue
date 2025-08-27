<template>
  <div class="min-h-screen bg-gray-800 text-gray-900">
    
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-32">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-5xl font-extrabold mb-4 animate-fadeInDown">SankGaming</h1>
        <p class="text-xl text-gray-200 animate-fadeIn">
          Your ultimate platform to rent the best games instantly.
        </p>
      </div>
    </section>

    <!-- Our Mission -->
    <section class="max-w-6xl mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4 text-white">Our Mission</h2>
        <p class="text-white text-lg">
          SankGaming is dedicated to bringing gamers closer to the games they love without the hassle of purchasing. 
          Rent, play, and enjoy — anytime, anywhere.
        </p>
      </div>

      <!-- Milestones / Story -->
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2 text-white">Founded</h3>
          <p class="text-gray-300">2023</p>
        </div>
        <div class="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2 text-white">Games Available</h3>
          <p class="text-gray-300">100+ titles</p>
        </div>
        <div class="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2 text-white">Happy Gamers</h3>
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
</style>
