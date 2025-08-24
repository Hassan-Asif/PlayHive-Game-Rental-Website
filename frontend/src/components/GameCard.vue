<template>
  <div class="bg-white shadow-lg rounded-xl p-4">
    <img :src="game.image" alt="Game Image" class="rounded-xl mb-4" />
    <h2 class="text-lg font-bold">{{ game.title }}</h2>
    <p class="text-sm text-gray-600">{{ game.description }}</p>
    <p class="font-semibold mt-2">₹{{ game.pricePerDay }} / day</p>
    <router-link
      :to="'/game/' + game.id"
      class="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
    >
      Rent Now
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["game"],
};
</script>
