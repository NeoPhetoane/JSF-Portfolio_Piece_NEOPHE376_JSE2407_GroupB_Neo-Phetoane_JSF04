<template>
  <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-semibold mb-4 text-gray-800">My Wishlist</h2>

    <div v-if="wishlistItems.length > 0" class="space-y-6">
      <div
        v-for="item in wishlistItems"
        :key="item.id"
        class="flex items-center space-x-4 border-b pb-4"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-24 h-24 object-cover rounded-lg"
        />
        <div class="flex-grow">
          <h3 class="text-lg font-semibold text-gray-800">{{ item.title }}</h3>
          <p class="text-sm text-gray-500">{{ item.category }}</p>
          <p class="text-lg font-semibold text-gray-800 mt-2">
            {{ formatPrice(item.price) }}
          </p>
          <div class="flex items-center mt-4 space-x-4">
            <button
              @click="addToCart(item)"
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add to Cart
            </button>
            <button
              @click="removeItem(item.id)"
              class="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div class="text-right">
        <button
          @click="clearWishlist"
          class="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
        >
          Clear Wishlist
        </button>
      </div>
    </div>

    <div v-else class="text-center py-10 text-gray-500">
      <p>Your Wishlist is empty.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wishlistItems: [],
    };
  },
  computed: {
    totalCost() {
      return this.wishlistItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);
    },
  },
  methods: {
    formatPrice(price) {
      return `$${price}`;
    },
    removeItem(productId) {
      this.wishlistItems = this.wishlistItems.filter(
        (item) => item.id !== productId
      );
      this.saveWishlist();
    },
    clearWishlist() {
      this.wishlistItems = [];
      this.saveWishlist();
    },
    saveWishlist() {
      localStorage.setItem("wishlist", JSON.stringify(this.wishlistItems));
    },
    loadWishlist() {
      const savedWishlist = localStorage.getItem("wishlist");
      if (savedWishlist) {
        try {
          this.wishlistItems = JSON.parse(savedWishlist);
        } catch (e) {
          console.error("Failed to parse wishlist from localStorage:", e);
          this.wishlistItems = [];
        }
      } else {
        this.wishlistItems = [];
      }
    },
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
  },
  mounted() {
    this.loadWishlist();
  },
};
</script>
