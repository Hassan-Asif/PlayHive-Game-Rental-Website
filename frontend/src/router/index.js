import { createRouter, createWebHistory } from "vue-router";
// 1. Import Firebase Auth
import { getAuth } from "firebase/auth";

import Home from "../pages/Home.vue";
import GameDetails from "../pages/GameDetails.vue";
import Cart from "../pages/Cart.vue";
import Admin from "../pages/Admin.vue";
import About from "../pages/About.vue";
import Login from "../pages/Login.vue";
import GameRent from "../pages/GameRent.vue";
import Games from "../pages/Games.vue";
import Checkout from "../pages/Checkout.vue";
import CheckoutMessage from "../pages/CheckoutMessage.vue";

// Helper function to wait for Firebase Auth to initialize
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = getAuth().onAuthStateChanged(user => {
      removeListener();
      resolve(user);
    }, reject);
  });
};

const routes = [
  { path: "/", component: Home },
  { path: "/game/:id", component: GameDetails },
  { path: "/cart", component: Cart },
  { path: "/about", component: About },
  { path: "/checkoutmessage", component: CheckoutMessage },
  { 
    path: "/admin", 
    component: Admin, 
    meta: { requiresAdmin: true } 
  },
  { path: "/login", component: Login },
  { path: "/rent/:id", component: GameRent },
  { path: "/games", component: Games },
  { path: "/checkout", component: Checkout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

// ✅ FIXED Route guard for admin
router.beforeEach(async (to, from, next) => {
  // Check if admin is required
  if (to.meta.requiresAdmin) {
    try {
      // Wait for the actual Firebase user object
      const user = await getCurrentUser();

      // 1. Not logged in → redirect to login
      if (!user) {
        return next("/login");
      }

      // 2. Logged in, but not the admin → redirect to home
      if (user.email !== "onlyadmin@gmail.com") {
        return next("/");
      }

      // 3. Logged in AND is the admin → proceed
      next();

    } catch (error) {
      // In case of a Firebase error, redirect to home or login
      console.error("Auth check failed:", error);
      next("/login");
    }
  } else {
    // No admin required → proceed
    next();
  }
});

export default router;