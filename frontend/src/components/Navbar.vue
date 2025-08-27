<template>
  <header class="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
      <!-- Logo -->
      <p class="text-2xl font-bold cursor-pointer hover:text-indigo-500 transition-colors">
        SankGaming
      </p>
      
      <!-- Menu Links (Desktop) -->
      <ul class="hidden md:flex items-center gap-8">
        <li><router-link to="/" class="hover:text-indigo-500 transition-colors">Home</router-link></li>
        <li><router-link to="/games" class="hover:text-indigo-500 transition-colors">Games</router-link></li>
        <li><router-link to="/#how-it-works" class="hover:text-indigo-500 transition-colors">How It Works</router-link></li>
        <li><router-link to="/about" class="hover:text-indigo-500 transition-colors">About</router-link></li>

        <!-- Cart only if logged in -->
        <li v-if="user">
          <router-link to="/cart" class="hover:text-indigo-500 text-xl">
            🛒
          </router-link>
        </li>
      </ul>
      
      <!-- Auth Buttons (only if logged in) -->
      <div class="hidden md:flex items-center gap-4">
        <button 
          v-if="user" 
          @click="logout" 
          class="hover:text-red-500 text-xl"
        >
          🚪
        </button>
      </div>
      </nav>

     <!-- Mobile Menu -->
<transition name="slide-fade">
  <ul v-if="menuOpen" class="md:hidden bg-gray-800 px-6 py-4 flex flex-col gap-4">
    <li>
      <router-link to="/" class="hover:text-indigo-500 transition-colors" @click.native="closeMenu">
        Home
      </router-link>
    </li>
    <li>
      <router-link to="/games" class="hover:text-indigo-500 transition-colors" @click.native="closeMenu">
        Games
      </router-link>
    </li>
    <li>
      <router-link to="/#how-it-works" class="hover:text-indigo-500 transition-colors" @click.native="closeMenu">
        How It Works
      </router-link>
    </li>
    <li>
      <router-link to="/about" class="hover:text-indigo-500 transition-colors" @click.native="closeMenu">
        About
      </router-link>
    </li>

    <!-- Cart -->
    <li v-if="user">
      <router-link to="/cart" class="hover:text-indigo-500 text-xl" @click.native="closeMenu">
        🛒
      </router-link>
    </li>

    <!-- Logout -->
    <li v-if="user">
      <button @click="logout" class="hover:text-red-500 text-xl">🚪</button>
    </li>
  </ul>
</transition>

  </header>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false,
      user: null,
    };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.user = null;
        this.$router.push("/");
      });
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
