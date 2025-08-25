<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-32">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-5xl font-extrabold mb-4 animate-fadeInDown">About PlayHive</h1>
        <p class="text-xl text-gray-200 animate-fadeIn">
          Your ultimate platform to rent the best games instantly.
        </p>
      </div>
    </section>

    <!-- Our Mission -->
    <section class="max-w-6xl mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
        <p class="text-gray-700 text-lg">
          PlayHive is dedicated to bringing gamers closer to the games they love without the hassle of purchasing. 
          Rent, play, and enjoy — anytime, anywhere.
        </p>
      </div>

      <!-- Milestones / Story -->
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2">Founded</h3>
          <p class="text-gray-600">2023</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2">Games Available</h3>
          <p class="text-gray-600">100+ titles</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500">
          <h3 class="text-xl font-semibold mb-2">Happy Gamers</h3>
          <p class="text-gray-600">5000+ users</p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="max-w-6xl mx-auto px-6 py-20 bg-gray-50">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Meet the Team</h2>
        <p class="text-gray-700 text-lg">Passionate gamers and developers behind PlayHive.</p>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="member in team" :key="member.name" class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
          <img :src="member.image" :alt="member.name" class="w-full h-56 object-cover"/>
          <div class="p-4 text-center">
            <h3 class="font-semibold text-lg">{{ member.name }}</h3>
            <p class="text-gray-500 text-sm">{{ member.role }}</p>
            <div class="flex justify-center gap-3 mt-2">
              <a :href="member.linkedin" target="_blank" class="text-gray-500 hover:text-indigo-500 transition"><i class="fab fa-linkedin"></i></a>
              <a :href="member.twitter" target="_blank" class="text-gray-500 hover:text-blue-400 transition"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
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
