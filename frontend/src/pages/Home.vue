<template>
  <div class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <GameCard v-for="game in games" :key="game.id" :game="game" />
  </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";

export default {
  components: { GameCard },
  data() {
    return {
      games: [
        {
          id: 1,
          title: "GTA V",
          description: "Open world action-adventure game.",
          pricePerDay: 50,
          image: "https://i.imgur.com/dtSMITE.jpeg",
        },
        {
          id: 2,
          title: "FIFA 23",
          description: "Football simulation game.",
          pricePerDay: 40,
          image: "https://i.imgur.com/ABJ3F4W.jpeg",
        },
        {
          id: 3,
          title: "Resident Evil 4",
          description: "Survival horror classic remake.",
          pricePerDay: 45,
          image: "https://i.imgur.com/Z9uMVR3.jpeg",
        },
      ],
    };
  },
};
</script>
