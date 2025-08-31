<template>
  <article
    class="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-lg hover:shadow-indigo-600/30 transition-transform duration-500 hover:scale-[1.03]"
  >
    <!-- Game Cover -->
    <div class="relative">
      <img 
        :src="game.image" 
        :alt="game.title" 
        class="h-52 sm:h-60 md:h-72 w-full object-cover rounded-t-2xl transform transition duration-500 group-hover:scale-110 group-hover:rotate-1"
      />
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent rounded-t-2xl"></div>

      <!-- Price Tag -->
      <span 
        class="absolute right-3 top-3 rounded-xl backdrop-blur-md bg-indigo-600/80 px-3 py-1 text-xs sm:text-sm font-semibold text-white shadow-lg border border-indigo-500/50"
      >
        ${{ game.price }}
      </span>
    </div>

    <!-- Content -->
    <div class="flex items-center justify-between p-4">
      <div>
        <!-- Title -->
        <h3 class="font-extrabold text-base sm:text-lg text-white truncate group-hover:text-indigo-400 transition-colors">
          {{ game.title }}
        </h3>
        <!-- Genre -->
        <p class="text-xs sm:text-sm text-gray-400 italic">
          {{ game.genre || 'Action' }}
        </p>
      </div>

      <!-- View Button -->
      <button 
        @click="$emit('view-details', game)" 
        class="inline-flex items-center justify-center rounded-lg px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
      >
        View
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Optional subtle animation on hover */
article:hover img {
  transform: scale(1.1) rotate(1deg);
}
</style>
