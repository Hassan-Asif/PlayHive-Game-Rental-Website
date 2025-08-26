<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <div class="relative w-full h-96 overflow-hidden">
      <img
        :src="game.image"
        :alt="game.name"
        class="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
      />
      <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
        <h1 class="text-4xl font-bold text-white mb-2">{{ game.name }}</h1>
        <p class="text-gray-300 text-lg">{{ game.genre }} | Released: {{ game.releaseDate }}</p>
        <div class="flex items-center gap-4 mt-3">
          <span class="text-yellow-400 font-semibold">{{ game.rating }}⭐</span>
          <span class="text-white font-bold text-xl">Rs {{ game.price.toFixed(2) }}</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div class="flex flex-col md:flex-row gap-12">
        
        <!-- Description & Tabs -->
        <div class="flex-1 bg-white rounded-xl shadow-lg p-6">
          <!-- Tabs -->
          <div class="flex gap-4 border-b border-gray-200 mb-4">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="currentTab = tab"
              :class="tab === currentTab ? 'border-b-2 border-indigo-500 text-indigo-500 font-semibold' : 'text-gray-500 hover:text-indigo-500'"
            >
              {{ tab }}
            </button>
          </div>

          <div class="mt-4 text-gray-700">
            <p v-if="currentTab === 'Description'">{{ game.description }}</p>
            <ul v-if="currentTab === 'Reviews'" class="space-y-4">
              <li v-for="review in game.reviews" :key="review.id" class="border p-4 rounded-lg">
                <p class="font-semibold">{{ review.user }}</p>
                <p>{{ review.comment }}</p>
                <p class="text-yellow-400">{{ review.rating }}⭐</p>
              </li>
            </ul>
            <ul v-if="currentTab === 'System Requirements'" class="space-y-2">
              <li v-for="(value, key) in game.systemRequirements" :key="key">
                <span class="font-semibold">{{ key }}:</span> {{ value }}
              </li>
            </ul>
          </div>

          <!-- Action Buttons -->
          <div class="mt-6 flex gap-4">
            <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105">
              Rent Now
            </button>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-900 px-6 py-3 rounded-lg transition-transform transform hover:scale-105">
              Add to Wishlist
            </button>
          </div>
        </div>

        <!-- Sidebar / Additional Info -->
        <div class="w-full md:w-1/3 flex flex-col gap-4">
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h3 class="font-semibold text-lg mb-2">Game Details</h3>
            <ul class="text-gray-700">
              <li><span class="font-semibold">Genre:</span> {{ game.genre }}</li>
              <li><span class="font-semibold">Developer:</span> {{ game.developer }}</li>
              <li><span class="font-semibold">Publisher:</span> {{ game.publisher }}</li>
              <li><span class="font-semibold">Release Date:</span> {{ game.releaseDate }}</li>
              <li><span class="font-semibold">Platform:</span> {{ game.platform.join(', ') }}</li>
            </ul>
          </div>
          <!-- Related Games -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h3 class="font-semibold text-lg mb-4">Related Games</h3>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="related in game.relatedGames" :key="related.id" class="relative overflow-hidden rounded-lg shadow hover:scale-105 transition-transform">
                <img :src="related.image" :alt="related.name" class="w-full h-24 object-cover"/>
                <div class="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity text-white font-semibold">
                  {{ related.name }}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameDetail",
  data() {
    return {
      tabs: ["Description", "Reviews", "System Requirements"],
      currentTab: "Description",
      game: {
        id: 1,
        name: "GTA V",
        genre: "Action / Adventure",
        price: 5.99,
        rating: 4.8,
        releaseDate: "2013-09-17",
        developer: "Rockstar North",
        publisher: "Rockstar Games",
        platform: ["PC", "PS5", "Xbox"],
        image: "/images/gta.jpg",
        description: "GTA V is an action-adventure game set in the fictional city of Los Santos...",
        reviews: [
          { id: 1, user: "Player1", comment: "Amazing game!", rating: 5 },
          { id: 2, user: "Player2", comment: "Great graphics and gameplay", rating: 4.5 },
        ],
        systemRequirements: {
          "OS": "Windows 10",
          "Processor": "Intel i5",
          "Memory": "8 GB RAM",
          "Graphics": "NVIDIA GTX 970",
          "Storage": "72 GB available space"
        },
        relatedGames: [
          { id: 2, name: "Red Dead Redemption 2", image: "/images/rdr2.jpg" },
          { id: 3, name: "Cyberpunk 2077", image: "/images/cyberpunk.jpg" },
        ]
      }
    };
  }
};
</script>

<style scoped>
/* Fade-in animation */
@keyframes fadeInDown {
  0% { opacity: 0; transform: translateY(-20px);}
  100% { opacity: 1; transform: translateY(0);}
}
.animate-fadeInDown { animation: fadeInDown 0.5s ease forwards; }
</style>
