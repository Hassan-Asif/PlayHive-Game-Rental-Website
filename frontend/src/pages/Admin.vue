<template>
  <div v-if="isAdmin" class="flex min-h-screen bg-gray-900 text-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-950 border-r border-gray-800 flex flex-col pt-5">
      <nav class="flex-1 p-6 space-y-3 pt-20">
        <button @click="currentTab='dashboard'" :class="tabClass('dashboard')">📊 Dashboard</button>
        <button @click="currentTab='games'" :class="tabClass('games')">🎮 Manage Games</button>
        <button @click="currentTab='users'" :class="tabClass('users')">👤 Users</button>
        <button @click="currentTab='orders'" :class="tabClass('orders')">🛒 Orders</button>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 pt-24">
      <!-- Dashboard -->
      <div v-if="currentTab==='dashboard'" class="animate-fadeIn">
        <h1 class="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-600/30 transition-transform duration-500">
            <h2 class="text-xl font-semibold mb-2 text-indigo-400">Total Games</h2>
            <p class="text-3xl font-bold text-gray-300">{{ games.length }}</p>
          </div>
          <div class="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-600/30 transition-transform duration-500">
            <h2 class="text-xl font-semibold mb-2 text-indigo-400">Active Users</h2>
            <p class="text-3xl font-bold text-gray-300">{{ users.length }}</p>
          </div>
          <div class="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-600/30 transition-transform duration-500">
            <h2 class="text-xl font-semibold mb-2 text-indigo-400">Pending Orders</h2>
            <p class="text-3xl font-bold text-gray-300">{{ orders.filter(o => o.status==='Pending').length }}</p>
          </div>
        </div>
      </div>

      <!-- Manage Games -->
      <div v-if="currentTab==='games'" class="animate-fadeIn">
        <h1 class="text-3xl font-bold mb-6">Manage Games</h1>

        <!-- Add Game Form -->
        <div class="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 mb-6">
          <h2 class="text-xl font-semibold mb-4 text-indigo-400">➕ Create Game</h2>
          <form @submit.prevent="addGame" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input v-model="newGame.title" type="text" placeholder="Game Title" class="input-style" required />
            <input v-model="newGame.image" type="url" placeholder="Image URL" class="input-style" required />
            <textarea v-model="newGame.description" placeholder="Description" class="input-style md:col-span-2" required></textarea>
            <input v-model.number="newGame.dailyPrice" type="number" placeholder="Daily Price (Rs)" class="input-style" required />
            <input v-model.number="newGame.weeklyPrice" type="number" placeholder="Weekly Price (Rs)" class="input-style" required />
            <button type="submit" class="btn-primary md:col-span-2">Add Game</button>
          </form>
        </div>

        <!-- Game List -->
        <ul class="space-y-3">
          <li v-for="game in games" :key="game.id" class="flex justify-between items-center bg-gray-800 p-4 rounded-xl border border-gray-700 hover:shadow-md transition">
            <div>
              <p class="font-semibold text-white">{{ game.title }}</p>
              <p class="text-sm text-gray-400">🕹 Daily: Rs{{ game.dailyPrice }} | 📅 Weekly: Rs{{ game.weeklyPrice }}</p>
            </div>
            <button @click="removeGame(game.id)" class="text-red-500 hover:text-red-600 font-medium">Delete</button>
          </li>
        </ul>
      </div>

      <!-- Users -->
      <div v-if="currentTab==='users'" class="animate-fadeIn">
        <h1 class="text-3xl font-bold mb-6">Users</h1>
        <div class="mb-4 bg-gray-800 p-4 rounded-xl shadow text-lg font-semibold text-indigo-400 border border-gray-700">
          Total Registered Users: {{ users.length }}
        </div>
        <ul class="space-y-2">
          <li v-for="(user, index) in users" :key="user.id || user.email" class="flex justify-between bg-gray-800 p-4 rounded-xl border border-gray-700">
            <span>{{ index + 1 }}. {{ user.email }}</span>
            <span class="text-gray-400">{{ user.role || 'user' }}</span>
          </li>
        </ul>
      </div>

      <!-- Orders -->
      <div v-if="currentTab==='orders'" class="animate-fadeIn">
        <h1 class="text-3xl font-bold mb-6">Orders</h1>
        <ul class="space-y-3">
          <li v-for="order in sortedOrders" :key="order.id" @click="toggleOrder(order.id)"
            class="bg-gray-800 p-5 rounded-xl border border-gray-700 cursor-pointer hover:bg-gray-700 transition">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-indigo-300">
                {{ order.billing?.fullName || 'Unknown User' }} - Rs{{ order.total }}
              </span>
              <span class="text-gray-400">{{ order.status }}</span>
            </div>
            <div v-if="expandedOrderId === order.id" class="mt-3 border-t border-gray-700 pt-3 text-sm text-gray-300">
              <p><strong>User Email:</strong> {{ order.billing?.email }}</p>
              <p><strong>Address:</strong> {{ order.billing?.address }}</p>
              <p><strong>Total:</strong> Rs{{ order.total }}</p>
              <p><strong>Status:</strong> {{ order.status }}</p>
              <p><strong>Date:</strong> {{ order.createdAt?.toDate ? order.createdAt.toDate().toLocaleString() : 'N/A' }}</p>
              <div class="mt-2">
                <strong>Items:</strong>
                <ul class="list-disc ml-6">
                  <li v-for="item in order.items" :key="item.id">
                    {{ item.title }} ×{{ item.quantity }} - Rs{{ (item.price * item.quantity).toFixed(2) }}
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>

  <!-- Access Denied -->
  <div v-else class="flex items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-3xl font-bold text-red-500">Access Denied</h1>
  </div>
</template>

<script>
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

export default {
  name: "AdminPanel",
  data() {
    return {
      email: "admin@example.com",
      registeredAdminEmail: "admin@example.com",
      currentTab: "dashboard",
      newGame: { title: "", description: "", image: "", dailyPrice: null, weeklyPrice: null },
      games: [],
      users: [],
      orders: [],
      expandedOrderId: null,
    };
  },
  computed: {
    isAdmin() {
      return this.email === this.registeredAdminEmail;
    },
    // newest first
    sortedOrders() {
      return [...this.orders].sort((a, b) => {
        const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(0);
        const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(0);
        return dateB - dateA;
      });
    },
  },
  methods: {
    tabClass(tab) {
      return [
        "block w-full text-left px-4 py-2 rounded-lg transition",
        this.currentTab === tab
          ? "bg-indigo-600 text-white font-semibold shadow-lg"
          : "hover:bg-gray-800",
      ];
    },
    async fetchGames() {
      const snapshot = await getDocs(collection(db, "games"));
      this.games = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async addGame() {
      const docRef = await addDoc(collection(db, "games"), this.newGame);
      this.games.push({ id: docRef.id, ...this.newGame });
      this.newGame = { title: "", description: "", image: "", dailyPrice: null, weeklyPrice: null };
    },
    async removeGame(id) {
      await deleteDoc(doc(db, "games", id));
      this.games = this.games.filter(g => g.id !== id);
    },
    async fetchOrders() {
      const snapshot = await getDocs(collection(db, "orders"));
      this.orders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async fetchUsers() {
      const snapshot = await getDocs(collection(db, "users"));
      this.users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    toggleOrder(orderId) {
      this.expandedOrderId = this.expandedOrderId === orderId ? null : orderId;
    },
  },
  async mounted() {
    await this.fetchGames();
    await this.fetchUsers();
    await this.fetchOrders();
  },
};
</script>

<style scoped>
.input-style {
  @apply p-2 border rounded bg-gray-700 border-gray-600 text-white;
}
.btn-primary {
  @apply bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2 rounded-xl shadow-md transition;
}
</style>
