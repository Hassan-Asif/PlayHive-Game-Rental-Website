<template>
  <div v-if="isAdmin" class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white flex flex-col">
      <div class="text-2xl font-bold p-6 border-b border-gray-800">PlayHive Admin</div>
      <nav class="flex-1 p-6 space-y-4">
        <button @click="currentTab='dashboard'" :class="tabClass('dashboard')">Dashboard</button>
        <button @click="currentTab='games'" :class="tabClass('games')">Manage Games</button>
        <button @click="currentTab='users'" :class="tabClass('users')">Users</button>
        <button @click="currentTab='orders'" :class="tabClass('orders')">Orders</button>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8">
      <!-- Dashboard -->
      <div v-if="currentTab==='dashboard'" class="animate-fadeIn">
        <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white shadow rounded-lg p-6">
            <h2 class="text-xl font-semibold">Total Games</h2>
            <p class="text-3xl font-bold mt-2">{{ games.length }}</p>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <h2 class="text-xl font-semibold">Active Users</h2>
            <p class="text-3xl font-bold mt-2">{{ users.length }}</p>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <h2 class="text-xl font-semibold">Pending Orders</h2>
            <p class="text-3xl font-bold mt-2">{{ orders.filter(o => o.status==='Pending').length }}</p>
          </div>
        </div>
      </div>

      <!-- Manage Games -->
      <div v-if="currentTab==='games'" class="animate-fadeIn">
        &nbsp; &nbsp;
        
        <h1 class="text-3xl font-bold mb-6">Manage Games</h1>

        <!-- Add Game Form -->
        <div class="bg-white p-6 rounded-lg shadow mb-6">
          <h2 class="text-xl font-semibold mb-4">Create Game</h2>
          <form @submit.prevent="addGame" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input v-model="newGame.title" type="text" placeholder="Game Title" class="p-2 border rounded" required />
            <input v-model="newGame.image" type="url" placeholder="Image URL" class="p-2 border rounded" required />
            <textarea v-model="newGame.description" placeholder="Description" class="p-2 border rounded md:col-span-2" required></textarea>
            <input v-model.number="newGame.price" type="number" placeholder="Price (Rs)" class="p-2 border rounded" required />
            <input v-model.number="newGame.rating" type="number" min="1" max="5" placeholder="Rating (1-5)" class="p-2 border rounded" required />
            <button type="submit" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 md:col-span-2">
              Add Game
            </button>
          </form>
        </div>

        <!-- Game List -->
        <ul class="space-y-2">
          <li v-for="game in games" :key="game.id" class="flex justify-between items-center bg-white p-4 rounded shadow">
            <div>
              <p class="font-semibold">{{ game.title }}</p>
              <p class="text-sm text-gray-500">Rs{{ game.price }} | ⭐ {{ game.rating }}</p>
            </div>
            <button @click="removeGame(game.id)" class="text-red-500 hover:text-red-700">Delete</button>
          </li>
        </ul>
      </div>

      <<!-- Users -->
<div v-if="currentTab==='users'" class="animate-fadeIn">
  &nbsp;
  <h1 class="text-3xl font-bold mb-6">Users</h1>

  <!-- Show total users -->
  <div class="mb-4 bg-white p-4 rounded shadow text-lg font-semibold">
    Total Registered Users: {{ users.length }}
  </div>

  <!-- User list -->
  <ul class="space-y-2">
    <li v-for="user in users" :key="user.email" class="flex justify-between bg-white p-4 rounded shadow">
      <span>{{ user.email }}</span>
      <span class="text-gray-500">{{ user.role || 'user' }}</span>
    </li>
  </ul>
</div>


      <!-- Orders -->
<div v-if="currentTab==='orders'" class="animate-fadeIn">
  &nbsp;
  <h1 class="text-3xl font-bold mb-6">Orders</h1>
  <ul class="space-y-2">
    <li 
      v-for="order in orders" 
      :key="order.id" 
      class="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-50"
      @click="toggleOrder(order.id)"
    >
      <div class="flex justify-between items-center">
        <span class="font-semibold">
          {{ order.billing?.fullName || 'Unknown User' }} - Rs{{ order.total }}
        </span>
        <span class="text-gray-500">{{ order.status }}</span>
      </div>

      <div v-if="expandedOrderId === order.id" class="mt-3 border-t pt-3 text-sm text-gray-700">
        <p><strong>User Email:</strong> {{ order.billing?.email }}</p>
        <p><strong>Address:</strong> {{ order.billing?.address }}</p>
        <p><strong>Total:</strong> Rs{{ order.total }}</p>
        <p><strong>Status:</strong> {{ order.status }}</p>
        <p><strong>Date:</strong> {{ order.createdAt?.toDate ? order.createdAt.toDate().toLocaleString() : 'N/A' }}</p>
        
        <!-- Items list -->
        <div class="mt-2">
          <strong>Items:</strong>
          <ul class="list-disc ml-6">
            <li v-for="item in order.items" :key="item.id">
              {{ item.title }} x{{ item.quantity }} - Rs{{ (item.price * item.quantity).toFixed(2) }}
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
      newGame: { title: "", description: "", image: "", price: null, rating: 5 },
      games: [],
      users: [],
      orders: [],
      expandedOrderId: null, // track which order is expanded
    };
  },
  computed: {
    isAdmin() {
      return this.email === this.registeredAdminEmail;
    },
  },
  methods: {
    tabClass(tab) {
      return [
        "block w-full text-left px-4 py-2 rounded hover:bg-gray-800 transition",
        this.currentTab === tab ? "bg-gray-700 font-semibold" : "",
      ];
    },
    async fetchGames() {
      const querySnapshot = await getDocs(collection(db, "games"));
      this.games = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async addGame() {
      const docRef = await addDoc(collection(db, "games"), this.newGame);
      this.games.push({ id: docRef.id, ...this.newGame });
      this.newGame = { title: "", description: "", image: "", price: null, rating: 5 };
    },
    async removeGame(id) {
      await deleteDoc(doc(db, "games", id));
      this.games = this.games.filter(g => g.id !== id);
    },
    async fetchOrders() {
      const querySnapshot = await getDocs(collection(db, "orders"));
      this.orders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async fetchUsers() {
      const querySnapshot = await getDocs(collection(db, "users"));
      this.users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
