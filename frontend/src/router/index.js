import { createRouter, createWebHistory } from "vue-router";
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

const routes = [
  { path: "/", component: Home },
  { path: "/game/:id", component: GameDetails },
  { path: "/cart", component: Cart },
  { path: "/about", component: About },
  { path: "/checkoutmessage", component: CheckoutMessage },
  { 
    path: "/admin", 
    component: Admin, 
    meta: { requiresAdmin: true } // ✅ protected
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
        behavior: "smooth", // ✅ smooth scroll to #id
      };
    } else {
      return { top: 0 };
    }
  },
});

// ✅ Route guard for admin
router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (to.meta.requiresAdmin) {
    // not logged in → redirect
    if (!user) {
      return next("/login");
    }

    // only allow this one email
    if (user.email !== "onlyadmin@gmail.com") {
      return next("/");
    }
  }

  next();
});

export default router;
