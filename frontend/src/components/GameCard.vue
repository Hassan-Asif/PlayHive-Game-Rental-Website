<template>
  <article 
    class="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-lg hover:shadow-indigo-600/20 transition-transform duration-500 hover:scale-[1.02]"
  >
    <!-- Game Cover -->
    <div class="relative">
      <img 
        :src="game.image" 
        :alt="game.title" 
        class="h-44 sm:h-48 md:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

      <!-- Price Tag -->
      <span 
        class="absolute left-2 sm:left-3 top-2 sm:top-3 rounded-lg bg-indigo-600/80 px-2 py-1 text-[10px] sm:text-xs font-medium text-white shadow"
      >
        ${{ game.price }}
      </span>
    </div>

    <!-- Content -->
    <div class="flex items-center justify-between p-4">
      <div>
        <!-- Title -->
        <h3 class="font-bold text-sm sm:text-base text-white truncate">
          {{ game.title }}
        </h3>
        <!-- Genre -->
        <p class="text-xs sm:text-sm text-gray-400">
          {{ game.genre || 'Action' }}
        </p>
      </div>

      <!-- View Button -->
      <button 
        @click="$emit('view-details', game)" 
        class="inline-flex items-center justify-center rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-indigo-600/80 text-white hover:bg-indigo-700 transition-transform duration-200 hover:-translate-y-0.5"
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
