<template>
  <header class="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
      <!-- Logo -->
      <router-link 
      to="/" 
      class="text-2xl font-bold cursor-pointer hover:text-indigo-500 transition-colors"
    >
      SankGaming
    </router-link>

      
      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-8">
        <li><router-link to="/games" class="hover:text-indigo-500 transition-colors">Games</router-link></li>
        <li><router-link to="/#how-it-works" class="hover:text-indigo-500 transition-colors">How It Works</router-link></li>
        <li><router-link to="/about" class="hover:text-indigo-500 transition-colors">About</router-link></li>
        <!-- Admin Link (only visible to admin) -->
          <li v-if="user && user.email === 'onlyadmin@gmail.com'">
            <router-link to="/admin" class="hover:text-indigo-500 transition-colors">Admin</router-link>
          </li>        
      </ul>
      
      <!-- Desktop Logout -->
      <div class="hidden md:flex items-center gap-4">
        <button v-if="user">
          <!-- Cart only if logged in -->
          <router-link to="/cart" class="hover:text-indigo-500 text-xl">
            🛒
          </router-link>
        </button>
        <button 
        v-if="user" 
        @click="logout" 
        class="btn btn-ghost btn-circle"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-base-content opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5" />
        </svg>
      </button>
        
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <!-- Hamburger -->
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" 
               class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <!-- Close (X) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" 
               class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <ul v-if="menuOpen" class="md:hidden bg-gray-800 px-6 py-4 flex flex-col gap-4">
        <li><router-link to="/games" class="hover:text-indigo-500 transition-colors">Games</router-link></li>
        <li><router-link to="/#how-it-works" class="hover:text-indigo-500 transition-colors">How It Works</router-link></li>
        <li><router-link to="/about" class="hover:text-indigo-500 transition-colors">About</router-link></li>

        <!-- ✅ Admin link for mobile -->
        <li v-if="user && user.email === 'onlyadmin@gmail.com'">
          <router-link to="/admin" class="hover:text-indigo-500 transition-colors">Admin</router-link>
        </li>

        <!-- Cart -->
        <li v-if="user">
          <router-link to="/cart" class="hover:text-indigo-500 text-xl">🛒</router-link>
        </li>

        <!-- Logout -->
        
        <button 
        v-if="user" 
        @click="logout" 
        class="btn btn-ghost btn-circle"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-base-content opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5" />
        </svg>
      </button>
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

    // ✅ Automatically close menu on route change
    this.$router.afterEach(() => {
      this.menuOpen = false;
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
