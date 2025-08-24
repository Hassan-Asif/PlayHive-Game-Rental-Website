<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">{{ game.title }}</h1>
    <img :src="game.image" alt="Game" class="rounded-lg mt-4 w-64" />
    <p class="mt-4">{{ game.description }}</p>
    <p class="mt-2 font-semibold">₹{{ game.pricePerDay }} / day</p>
    <button
      class="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
      @click="addToCart"
    >
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      game: {
        id: this.$route.params.id,
        title: "Sample Game",
        description: "Game details go here.",
        pricePerDay: 50,
        image: "https://i.imgur.com/dtSMITE.jpeg",
      },
    };
  },
  methods: {
    addToCart() {
      alert("Added to cart!");
    },
  },
};
</script>
