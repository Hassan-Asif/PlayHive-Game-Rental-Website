<template>
  <div v-if="isAdmin" class="flex min-h-screen bg-gray-100">
    
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white flex flex-col">
      <div class="text-2xl font-bold p-6 border-b border-gray-800">PlayHive Admin</div>
      <nav class="flex-1 p-6 space-y-4">
        <button @click="currentTab='dashboard'" 
                :class="tabClass('dashboard')">Dashboard</button>
        <button @click="currentTab='games'" 
                :class="tabClass('games')">Manage Games</button>
        <button @click="currentTab='users'" 
                :class="tabClass('users')">Users</button>
        <button @click="currentTab='orders'" 
                :class="tabClass('orders')">Orders</button>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8">
      <div v-if="currentTab==='dashboard'" class="animate-fadeIn">
        <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white shadow rounded-lg p-6">
            <h2 class="text-xl font-semibold">Total Games</h2>
            <p class="text-3xl font-bold mt-2">42</p>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <h2 class="text-xl font-semibold">Active Users</h2>
            <p class="text-3xl font-bold mt-2">128</p>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <h2 class="text-xl font-semibold">Pending Orders</h2>
            <p class="text-3xl font-bold mt-2">7</p>
          </div>
        </div>
      </div>

      <!-- Manage Games Tab -->
      <div v-if="currentTab==='games'" class="animate-fadeIn">
        <h1 class="text-3xl font-bold mb-6">Manage Games</h1>
        <div class="mb-4 flex justify-between">
          <input v-model="newGameName" type="text" placeholder="Add new game" 
                 class="p-2 rounded border w-1/2" />
          <button @click="addGame" class="bg-indigo-500 px-4 py-2 rounded text-white hover:bg-indigo-600 transition">
            Add Game
          </button>
        </div>
        <ul class="space-y-2">
          <li v-for="game in games" :key="game.id" class="flex justify-between bg-white p-4 rounded shadow">
            <span>{{ game.name }}</span>
            <button @click="removeGame(game.id)" class="text-red-500 hover:text-red-700">Delete</button>
          </li>
        </ul>
      </div>

      <!-- Users Tab -->
      <div v-if="currentTab==='users'" class="animate-fadeIn">
        <h1 class="text-3xl font-bold mb-6">Users</h1>
        <ul class="space-y-2">
          <li v-for="user in users" :key="user.email" class="flex justify-between bg-white p-4 rounded shadow">
            <span>{{ user.email }}</span>
            <span>{{ user.role }}</span>
          </li>
        </ul>
      </div>

      <!-- Orders Tab -->
      <div v-if="currentTab==='orders'" class="animate-fadeIn">
        <h1 class="text-3xl font-bold mb-6">Orders</h1>
        <ul class="space-y-2">
          <li v-for="order in orders" :key="order.id" class="flex justify-between bg-white p-4 rounded shadow">
            <span>{{ order.gameName }} - {{ order.userEmail }}</span>
            <span class="text-gray-500">{{ order.status }}</span>
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
export default {
  name: "AdminPanel",
  data() {
    return {
      email: "admin@example.com", // placeholder for current user email
      registeredAdminEmail: "admin@example.com", // will be set from backend later
      currentTab: "dashboard",
      newGameName: "",
      games: [
        { id: 1, name: "GTA V" },
        { id: 2, name: "FIFA 23" },
      ],
      users: [
        { email: "user1@example.com", role: "User" },
        { email: "user2@example.com", role: "User" },
      ],
      orders: [
        { id: 1, gameName: "GTA V", userEmail: "user1@example.com", status: "Pending" },
        { id: 2, gameName: "FIFA 23", userEmail: "user2@example.com", status: "Completed" },
      ],
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
    addGame() {
      if (this.newGameName.trim()) {
        this.games.push({ id: Date.now(), name: this.newGameName });
        this.newGameName = "";
      }
    },
    removeGame(id) {
      this.games = this.games.filter(game => game.id !== id);
    },
  },
};
</script>

<style scoped>
/* Simple fade-in animation */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease forwards;
}
</style>
