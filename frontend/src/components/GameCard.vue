<template>
  <div
    class="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
  >
    <!-- Game Image -->
    <img :src="game.image" :alt="game.name" class="w-full h-56 object-cover" />

    <!-- Overlay on hover -->
    <div
      class="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
    >
      <h3 class="text-lg font-bold text-white">{{ game.name }}</h3>
      <p class="text-gray-300 text-sm">{{ game.genre }}</p>
      <div class="flex items-center justify-between mt-2">
        <!-- Price -->
        <span class="text-indigo-400 font-semibold">${{ game.price.toFixed(2) }}</span>

        <!-- Rent Button -->
        <button
          class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded-lg font-medium transition-transform transform hover:scale-105"
          @click="$emit('rent', game.id)"
        >
          Rent
        </button>
      </div>

      <!-- Optional Badge or Rating -->
      <div class="absolute top-2 left-2 bg-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded">
        {{ game.rating }}⭐
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
      required: true,
      default: () => ({
        id: 1,
        name: "GTA V",
        genre: "Action / Adventure",
        price: 5.99,
        image: "/images/gta.jpg",
        rating: 4.8,
      }),
    },
  },
};
</script>

<style scoped>
/* Optional hover animation if you want additional effects */
</style>
