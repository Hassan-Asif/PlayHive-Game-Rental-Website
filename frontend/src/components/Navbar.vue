<template>
  <header class="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
      <!-- Logo -->
      <div class="text-2xl font-bold cursor-pointer hover:text-indigo-500 transition-colors">
        PlayHive
      </div>
      
      <!-- Menu Links (Desktop) -->
      <ul class="hidden md:flex items-center gap-8">
        <li>
          <a href="/" class="hover:text-indigo-500 transition-colors">Home</a>
        </li>
        <li>
          <a href="/" class="hover:text-indigo-500 transition-colors">Games</a>
        </li>
        <li>
          <a href="/" class="hover:text-indigo-500 transition-colors">How It Works</a>
        </li>
        <li>
          <a href="/about" class="hover:text-indigo-500 transition-colors">About</a>
        </li>
      </ul>
      
      <!-- Call to Action -->
      <div class="hidden md:block">
        <button class="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-transform transform hover:scale-105">
          Sign In
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" 
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" 
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <ul v-if="menuOpen" class="md:hidden bg-gray-800 px-6 py-4 flex flex-col gap-4">
        <li><a href="#" class="hover:text-indigo-500 transition-colors">Home</a></li>
        <li><a href="#featured" class="hover:text-indigo-500 transition-colors">Games</a></li>
        <li><a href="#how-it-works" class="hover:text-indigo-500 transition-colors">How It Works</a></li>
        <li><a href="#contact" class="hover:text-indigo-500 transition-colors">Contact</a></li>
        <li>
          <button class="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg w-full transition-transform transform hover:scale-105">
            Sign In
          </button>
        </li>
      </ul>
    </transition>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Mobile slide-down animation */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
