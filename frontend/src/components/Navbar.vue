<template>
  <header class="fixed w-full z-50 px-3 sm:px-5 py-2">
    <div
      class="rounded-xl sm:rounded-2xl border border-indigo-500/40 
             bg-gradient-to-r from-slate-900/95 to-slate-800/95 
             backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.5)]
             flex items-center justify-between gap-4 px-4 sm:px-6 py-3"
    >
      <!-- Logo -->
      <router-link 
        to="/"
        class="text-xl sm:text-2xl font-bold tracking-wide 
               bg-gradient-to-r from-indigo-400 to-cyan-400 
               bg-clip-text text-transparent cursor-pointer"
      >
        SankGaming
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-6 text-gray-300 font-medium">
        <router-link to="/games" class="transition-all hover:text-indigo-400 hover:scale-105">Games</router-link>
        <router-link to="/#how-it-works" class="transition-all hover:text-indigo-400 hover:scale-105">How It Works</router-link>
        <router-link to="/about" class="transition-all hover:text-indigo-400 hover:scale-105">About</router-link>

        <!-- Admin Only -->
        <router-link 
          v-if="user && user.email === 'onlyadmin@gmail.com'" 
          to="/admin" 
          class="transition-all hover:text-cyan-400 hover:scale-105"
        >
          Admin
        </router-link>
      </nav>

      <!-- Right side (cart + logout) -->
      <div class="hidden md:flex items-center gap-3">
        <!-- Cart (always visible) -->
        <router-link 
          to="/cart" 
          class="relative p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/60 transition-all hover:scale-105 shadow-sm text-lg text-cyan-400"
        >
          🛒
          <span 
            v-if="cartCount > 0"
            class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow"
          >
            {{ cartCount }}
          </span>
        </router-link>

        <!-- Logout -->
        <button v-if="user" @click="logout" 
          class="p-2 rounded-lg bg-red-600/70 hover:bg-red-700/80 text-white text-sm transition shadow-md">
          Logout
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/60 transition-all shadow-sm">
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <ul v-if="menuOpen" 
          class="md:hidden mt-2 rounded-xl border border-indigo-500/40 
                 bg-gradient-to-r from-slate-900/95 to-slate-800/95 
                 backdrop-blur shadow-lg flex flex-col gap-3 px-6 py-4 text-gray-300 font-medium">
        
        <router-link to="/games" class="hover:text-indigo-400 transition">Games</router-link>
        <router-link to="/#how-it-works" class="hover:text-indigo-400 transition">How It Works</router-link>
        <router-link to="/about" class="hover:text-indigo-400 transition">About</router-link>

        <!-- Admin link (mobile) -->
        <router-link v-if="user && user.email === 'onlyadmin@gmail.com'" to="/admin" class="hover:text-cyan-400 transition">Admin</router-link>

        <!-- Cart (always visible on mobile too) -->
        <router-link 
          to="/cart" 
          class="relative hover:text-cyan-400 text-lg"
        >
          🛒
          <span 
            v-if="cartCount > 0"
            class="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow"
          >
            {{ cartCount }}
          </span>
        </router-link>

        <!-- Logout -->
        <button v-if="user" @click="logout" 
          class="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/60 transition-all hover:scale-105 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      cartItems: []
    };
  },
  computed: {
    cartCount() {
      return this.cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
    }
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });

    this.$router.afterEach(() => {
      this.menuOpen = false;
    });

    this.loadCart();
    window.addEventListener("storage", this.loadCart);
  },
  beforeUnmount() {
    window.removeEventListener("storage", this.loadCart);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    loadCart() {
      this.cartItems = JSON.parse(localStorage.getItem("guestCart") || "[]");
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
