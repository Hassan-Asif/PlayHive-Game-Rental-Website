<template>
  <header
    class="fixed w-full top-0 z-50 px-3 sm:px-5 py-2 backdrop-blur-md bg-gradient-to-r from-[#0a0a1a]/80 to-[#060618]/80 border-b border-cyan-700/40 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
  >
    <div
      class="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 
             text-gray-200 font-medium"
    >
      <!-- LOGO -->
      <router-link
        to="/"
        class="text-2xl sm:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-105 transition-transform duration-300"
      >
        Sank<span class="text-cyan-500">Gaming</span>
      </router-link>

      <!-- DESKTOP NAV -->
      <nav
        class="hidden md:flex items-center gap-8 text-gray-300 font-semibold text-sm uppercase tracking-wide"
      >
        <router-link
          to="/games"
          class="relative hover:text-cyan-400 transition-colors duration-300 group"
        >
          Games
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300"
          ></span>
        </router-link>

        <!-- HOW IT WORKS (Scroll to Home Section) -->
        <button
          @click="goToHowItWorks"
          class="relative hover:text-cyan-400 transition-colors duration-300 group"
        >
          How It Works
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300"
          ></span>
        </button>

        <router-link
          to="/about"
          class="relative hover:text-cyan-400 transition-colors duration-300 group"
        >
          About
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300"
          ></span>
        </router-link>

        <router-link
          v-if="user && user.email === 'onlyadmin@gmail.com'"
          to="/admin"
          class="text-red-400 hover:text-red-300 font-bold transition-all duration-300"
        >
          Admin Panel
        </router-link>
      </nav>

      <!-- RIGHT ACTIONS -->
      <div class="hidden md:flex items-center gap-4">
        <!-- CART -->
        <router-link
          to="/cart"
          class="relative p-2 rounded-full bg-[#0b0b1a]/70 hover:bg-[#101028]/80 transition-all duration-300 hover:scale-110 text-cyan-400"
        >
          <i class="fas fa-shopping-cart text-xl"></i>
          <span
            v-if="cartCount > 0"
            class="absolute -top-1 -right-1 text-white text-xs font-bold px-1.5 py-0.5 rounded-full bg-red-600 shadow-md ring-2 ring-gray-900"
          >
            {{ cartCount }}
          </span>
        </router-link>

        <!-- LOGOUT -->
        <button
          v-if="user && user.email === 'onlyadmin@gmail.com'"
          @click="logout"
          class="px-4 py-2 rounded-lg bg-red-600/70 hover:bg-red-700/80 text-white font-semibold text-xs uppercase tracking-wide transition-all shadow-md hover:shadow-lg hover:shadow-red-600/40"
        >
          Logout
        </button>
      </div>

      <!-- MOBILE MENU BUTTON -->
      <button
        @click="toggleMenu"
        class="md:hidden p-2 rounded-full bg-[#0a0a1a]/80 hover:bg-[#12122a]/90 transition-all duration-300 text-cyan-400"
      >
        <i :class="menuOpen ? 'fas fa-times text-xl' : 'fas fa-bars text-xl'"></i>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <transition name="slide-fade">
      <ul
        v-if="menuOpen"
        class="md:hidden mt-2 rounded-xl border border-cyan-700/50 bg-[#0a0a1a]/95 backdrop-blur-xl shadow-2xl flex flex-col gap-3 px-6 py-4 text-gray-300 font-semibold text-lg"
      >
        <router-link to="/games" @click="toggleMenu" class="hover:text-cyan-400 transition py-1">
          <i class="fas fa-gamepad mr-2 text-cyan-400"></i> Games
        </router-link>

        <button
          @click="goToHowItWorks"
          class="hover:text-cyan-400 transition py-1 flex items-center"
        >
          <i class="fas fa-info-circle mr-2 text-cyan-400"></i> How It Works
        </button>

        <router-link to="/about" @click="toggleMenu" class="hover:text-cyan-400 transition py-1">
          <i class="fas fa-users mr-2 text-cyan-400"></i> About
        </router-link>

        <div class="border-t border-gray-700 my-2"></div>

        <router-link
          v-if="user && user.email === 'onlyadmin@gmail.com'"
          to="/admin"
          @click="toggleMenu"
          class="text-red-400 hover:text-red-300 transition py-1"
        >
          <i class="fas fa-shield-alt mr-2"></i> Admin Panel
        </router-link>

        <a
          v-if="user && user.email === 'onlyadmin@gmail.com'"
          @click.stop="logout(); toggleMenu();"
          class="text-red-400 hover:text-red-300 transition cursor-pointer py-1"
        >
          <i class="fas fa-sign-out-alt mr-2"></i> Logout
        </a>

        <router-link
          to="/cart"
          @click="toggleMenu"
          class="relative flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition py-1"
        >
          <i class="fas fa-shopping-cart"></i>
          Cart
          <span
            v-if="cartCount > 0"
            class="absolute -top-1 left-16 text-white text-xs font-bold px-1.5 py-0.5 rounded-full bg-red-600 shadow-md ring-2 ring-gray-900"
          >
            {{ cartCount }}
          </span>
        </router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { nextTick } from "vue";

export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false,
      user: null,
      cartItems: [],
    };
  },
  computed: {
    cartCount() {
      return this.cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
    },
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => (this.user = user));
    this.$router.afterEach(() => (this.menuOpen = false));
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
    async goToHowItWorks() {
      this.menuOpen = false;

      if (this.$route.path !== "/") {
        await this.$router.push("/");
        // Wait for the Home component to render fully
        await new Promise((r) => setTimeout(r, 400));
        await nextTick();
      }

      const section = document.getElementById("how-it-works");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.warn("⚠️ 'how-it-works' section not found in DOM");
      }
    },
  },
};
</script>


<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

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
