<template>
  <header class="fixed w-full z-50 px-3 sm:px-5 py-2">
    <div
      class="rounded-xl sm:rounded-2xl border border-cyan-700/50 
             bg-gray-900/95 backdrop-blur shadow-xl shadow-cyan-900/20
             flex items-center justify-between gap-4 px-4 sm:px-6 py-3"
    >
      <router-link 
        to="/"
        class="text-xl sm:text-2xl font-black tracking-wide 
               text-cyan-400 drop-shadow-md cursor-pointer"
      >
        SankGaming
      </router-link>

      <nav class="hidden md:flex items-center gap-6 text-gray-300 font-medium">
        <router-link to="/games" class="transition-all hover:text-cyan-400 hover:scale-[1.03]">Games</router-link>
        <a href="#how-it-works" class="transition-all hover:text-cyan-400 hover:scale-[1.03]">How It Works</a>
        <router-link to="/about" class="transition-all hover:text-cyan-400 hover:scale-[1.03]">About</router-link>

        <router-link 
          v-if="user && user.email === 'onlyadmin@gmail.com'" 
          to="/admin" 
          class="transition-all text-red-400 font-bold hover:text-red-300 hover:scale-[1.03]"
        >
          Admin Panel
        </router-link>
      </nav>

      <div class="hidden md:flex items-center gap-4">
        
        <router-link 
          to="/cart" 
          class="relative p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-all hover:scale-110 shadow-lg text-lg text-cyan-400"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          <span 
            v-if="cartCount > 0"
            class="absolute -top-1 -right-1 text-white text-xs font-bold px-1.5 py-0.5 rounded-full bg-red-600 shadow-md ring-2 ring-gray-900"
          >
            {{ cartCount }}
          </span>
        </router-link>

        <button v-if="user" @click="logout" 
          class="px-4 py-2 rounded-lg bg-red-600/70 hover:bg-red-700/80 text-white font-semibold text-sm transition shadow-lg">
          Logout
        </button>
        

      </div>

      <button @click="toggleMenu" class="md:hidden p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-all shadow-sm text-cyan-400">
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <transition name="slide-fade">
      <ul v-if="menuOpen" 
          @click="toggleMenu"
          class="md:hidden mt-2 rounded-xl border border-cyan-700/50 
                 bg-gray-900/95 backdrop-blur shadow-2xl flex flex-col gap-3 px-6 py-4 text-gray-300 font-medium text-lg">
        
        <router-link to="/games" class="hover:text-cyan-400 transition py-1">Games</router-link>
        <a href="#how-it-works" class="hover:text-cyan-400 transition py-1">How It Works</a>
        <router-link to="/about" class="hover:text-cyan-400 transition py-1">About</router-link>

        <div class="border-t border-gray-700 my-2"></div>
        
        <router-link v-if="user && user.email === 'onlyadmin@gmail.com'" to="/admin" class="hover:text-red-400 transition py-1">Admin Panel</router-link>

        <a v-else @click.stop="logout" class="text-red-400 hover:text-red-300 transition cursor-pointer py-1">Logout</a>
        
        <router-link 
          to="/cart" 
          class="relative flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition py-1"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          Cart 
        </router-link>
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
      // Ensure this matches the logic used in other components
      return this.cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
    }
  },
  created() {
    const auth = getAuth();
    // 1. Auth state listener
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });

    // 2. Close mobile menu on route change
    this.$router.afterEach(() => {
      this.menuOpen = false;
    });

    // 3. Cart loading logic
    this.loadCart();
    // Add event listener to react to changes in local storage from other tabs/windows (like adding to cart)
    window.addEventListener("storage", this.loadCart);
  },
  beforeUnmount() {
    // Clean up event listener
    window.removeEventListener("storage", this.loadCart);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    loadCart() {
      // Logic for loading guest cart from local storage
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