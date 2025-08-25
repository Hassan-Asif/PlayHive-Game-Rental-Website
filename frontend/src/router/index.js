import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import GameDetails from "../pages/GameDetails.vue";
import Cart from "../pages/Cart.vue";
import Admin from "../pages/Admin.vue";
import About from "../pages/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/game/:id", component: GameDetails },
  { path: "/cart", component: Cart },
  { path: "/about", component: About },
  { path: "/admin", component: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
