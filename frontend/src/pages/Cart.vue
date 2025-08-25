<template>
  <div class="min-h-screen bg-gray-100 py-12 px-6 md:px-12">
    &nbsp;
    &nbsp;
    <h1 class="text-4xl font-bold mb-8 text-gray-900 animate-fadeInDown">Your Cart</h1>

    <!-- Empty Cart State -->
    <div v-if="cartItems.length === 0" class="text-center py-32">
      <p class="text-gray-500 text-xl mb-4">Your cart is empty.</p>
      <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition transform hover:scale-105">
        Browse Games
      </button>
    </div>

    <!-- Cart Items -->
    <div v-else class="grid md:grid-cols-3 gap-8">
      
      <!-- Items List -->
      <div class="md:col-span-2 space-y-4">
        <div v-for="item in cartItems" :key="item.id" class="bg-white p-4 rounded-lg shadow flex items-center gap-4 hover:shadow-2xl transition-all animate-fadeIn">
          
          <!-- Game Image -->
          <img :src="item.image" :alt="item.name" class="w-24 h-24 object-cover rounded-lg" />

          <!-- Game Info -->
          <div class="flex-1">
            <h2 class="font-semibold text-lg">{{ item.name }}</h2>
            <p class="text-gray-500">{{ item.genre }}</p>
            <div class="flex items-center gap-2 mt-2">
              <button @click="decreaseQty(item)" class="bg-gray-200 hover:bg-gray-300 rounded px-2 transition">-</button>
              <span class="px-2">{{ item.quantity }}</span>
              <button @click="increaseQty(item)" class="bg-gray-200 hover:bg-gray-300 rounded px-2 transition">+</button>
            </div>
          </div>

          <!-- Price & Remove -->
          <div class="text-right">
            <p class="font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</p>
            <button @click="removeItem(item.id)" class="text-red-500 hover:text-red-700 mt-2 transition">Remove</button>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="bg-white p-6 rounded-lg shadow animate-fadeIn">
        <h2 class="text-2xl font-bold mb-4">Order Summary</h2>
        <div class="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Tax (10%)</span>
          <span>${{ tax.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between font-bold text-lg border-t border-gray-300 pt-2 mb-4">
          <span>Total</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>
        <button class="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg transition transform hover:scale-105">
          Proceed to Checkout
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cartItems: [
        { id: 1, name: "GTA V", genre: "Action / Adventure", price: 5.99, quantity: 1, image: "/images/gta.jpg" },
        { id: 2, name: "FIFA 23", genre: "Sports", price: 4.99, quantity: 2, image: "/images/fifa.jpg" },
        { id: 3, name: "Resident Evil", genre: "Horror / Action", price: 6.49, quantity: 1, image: "/images/residentevil.jpg" },
      ],
    };
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    tax() {
      return this.subtotal * 0.1;
    },
    total() {
      return this.subtotal + this.tax;
    },
  },
  methods: {
    increaseQty(item) {
      item.quantity++;
    },
    decreaseQty(item) {
      if (item.quantity > 1) item.quantity--;
    },
    removeItem(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
    },
  },
};
</script>

<style scoped>
@keyframes fadeInDown {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeInDown { animation: fadeInDown 0.6s ease forwards; }

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.animate-fadeIn { animation: fadeIn 0.5s ease forwards; }
</style>
