<template>
  <div class=" max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class=" text-2xl font-semibold mb-4 text-gray-800">Shopping Cart</h2>
    
    <div v-if="cartItems.length > 0" class=" space-y-6">
      <div v-for="item in cartItems" :key="item.id" class=" flex items-center space-x-4 border-b pb-4">
        <img :src="item.image" :alt="item.title" class= "w-24 h-24 object-cover rounded-lg" />
        <div class="flex-grow">
          <h3 class=" text-lg font-semibold text-gray-800">{{ item.title }}</h3>
          <p class="text-sm text-gray-500">{{ item.category }}</p>
          <p class="text-lg font-semibold text-gray-800 mt-2">{{ formatPrice(item.price) }}</p>
          <div class="flex items-center mt-4 space-x-2">
            <button @click="updateQuantity(item.id, item.quantity - 1)" :disabled="item.quantity === 1" class="px-3 py-1 bg-gray-200 rounded-md text-gray-800 disabled:opacity-50">-</button>
            <span class="font-semibold text-gray-800">{{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, item.quantity + 1)" class="px-3 py-1 bg-gray-200 rounded-md text-gray-800">+</button>
          </div>
          <button @click="removeItem(item.id)" class=" mt-4 text-red-500 hover:underline">Remove</button>
        </div>
      </div>

      <div class="text-right">
        <p class="text-xl font-semibold text-gray-800">Total: {{ formatPrice(totalCost) }}</p>
        <button @click="clearCart" class="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">Clear Cart</button>
      </div>
    </div>
    
    <div v-else class=" text-center py-10 text-gray-500">
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
    };
  },
  computed: {
    totalCost() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
  },
  methods: {
    formatPrice(price) {
      return `$${price}`;
    },
    updateQuantity(productId, quantity) {
      const item = this.cartItems.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
        this.saveCart();
      }
    },
    removeItem(productId) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
      this.saveCart();
    },
    clearCart() {
      this.cartItems = [];
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
      }
    },
  },
  mounted() {
    this.loadCart();
  },
};
</script>