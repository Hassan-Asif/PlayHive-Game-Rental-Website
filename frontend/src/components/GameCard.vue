<template>
  <article
    class="group overflow-hidden rounded-2xl border border-blue-800 bg-gray-950 shadow-lg hover:shadow-cyan-500/40 transition-transform duration-500 hover:scale-[1.03]"
  >
    <div class="relative">
      <img 
        :src="game.image" 
        :alt="game.title" 
        class="h-52 sm:h-60 md:h-72 w-full object-cover rounded-t-2xl transform transition duration-500 group-hover:scale-110 group-hover:rotate-1"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-950/90 to-transparent rounded-t-2xl"></div>

      <span 
        class="absolute right-3 top-3 rounded-xl backdrop-blur-md bg-cyan-600/80 px-4 py-1.5 text-sm sm:text-base font-bold text-white shadow-xl border border-cyan-500/50 transform rotate-2 group-hover:rotate-0 transition-transform duration-300"
      >
        <span class="text-xs font-semibold">$</span>{{ game.price }}
      </span>
    </div>

    <div class="flex items-center justify-between p-4">
      <div>
        <h3 class="font-extrabold text-base sm:text-lg text-white truncate group-hover:text-cyan-400 transition-colors">
          {{ game.title }}
        </h3>
        <p class="text-xs sm:text-sm text-gray-400 italic">
          {{ game.genre || 'Action' }}
        </p>
      </div>

      <button 
        @click="$emit('view-details', game)" 
        class="inline-flex items-center justify-center rounded-lg px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold bg-cyan-600 text-white hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
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