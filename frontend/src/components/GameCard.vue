<template>
  <div 
    class="relative bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300 group border border-gray-800"
  >
    <!-- Game Cover -->
    <div class="relative">
      <img 
        :src="game.image" 
        :alt="game.title" 
        class="w-full h-56 object-cover group-hover:opacity-90 transition"
      />
      <!-- Price Tag -->
      <div class="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 text-sm font-semibold rounded-lg shadow">
        ${{ game.price }}
      </div>
    </div>

    <!-- Game Info -->
    <div class="p-4 flex flex-col gap-3">
      <!-- Title -->
      <h3 class="text-lg font-bold text-white truncate">{{ game.title }}</h3>
      <!-- Description -->
      <p class="text-gray-400 text-sm line-clamp-2">
        {{ game.description }}
      </p>

      <!-- Rating (static for now, can be dynamic later) -->
      <div class="flex items-center text-yellow-400 text-sm">
        <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" 
             class="h-4 w-4 fill-current" 
             :class="{ 'text-gray-600': i > game.rating }" 
             viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.18 3.64a1 1 0 00.95.69h3.826c.969 0 1.371 1.24.588 1.81l-3.1 2.25a1 1 0 00-.364 1.118l1.18 3.64c.3.921-.755 1.688-1.54 1.118l-3.1-2.25a1 1 0 00-1.176 0l-3.1 2.25c-.784.57-1.838-.197-1.539-1.118l1.18-3.64a1 1 0 00-.364-1.118l-3.1-2.25c-.783-.57-.38-1.81.588-1.81h3.827a1 1 0 00.95-.69l1.18-3.64z"/>
        </svg>
      </div>

      <!-- Buttons -->
      <div class="flex justify-between items-center mt-2">
        <button 
          @click="$emit('add-to-cart', game)" 
          class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow transition"
        >
          Add to Cart
        </button>
        <button 
          @click="$emit('view-details', game)" 
          class="border border-gray-600 hover:border-indigo-600 hover:text-indigo-400 px-4 py-2 rounded-xl text-sm text-gray-300 transition"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    game: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
/* Line clamp for description */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
