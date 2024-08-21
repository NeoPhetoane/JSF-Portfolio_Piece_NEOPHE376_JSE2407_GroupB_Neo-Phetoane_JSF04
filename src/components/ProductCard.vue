<template>
  <div :class="['component-root', themeClass]"> 
  <div
    class=" flex flex-col max-h-[36rem] cursor-pointer w-full md:max-w-sm transform hover:translate-y-2 hover:scale-105 transition-all duration-300 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl"
  >
    <router-link :to="`/product/${product.id}`" class="flex flex-col h-full">
      <!-- Product Image -->
      <img
        :src="product.image"
        alt="Product image"
        class="object-cover h-48 md:h-56 lg:h-64 mt-2 mx-auto transition-transform duration-300 hover:scale-110"
      />

      <!-- Product Details -->
      <div class="flex-1 flex flex-col p-4 space-y-2">
        <!-- Product Title -->
        <header class="mb-1">
          <h2 class="text-lg md:text-xl font-bold leading-tight text-gray-800 line-clamp-2">
            {{ product.title }}
          </h2>
        </header>

        <!-- Product Rating and Reviews -->
        <div class="flex items-center gap-2 text-sm md:text-base text-gray-600">
          <svg
            v-if="product.rating"
            class="h-5 w-5 md:h-6 md:w-6 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 15l-3.092 1.623 0.591-3.443-2.52-2.453 3.461-0.502 1.56-3.15 1.56 3.15 3.461 0.502-2.52 2.453 0.591 3.443L10 15z"
            />
          </svg>
          <div>{{ product.rating ? product.rating.rate : 'No Rating' }}</div>
          <div class="ml-1">• Reviews: <span>{{ product.rating ? product.rating.count : 'N/A' }}</span></div>
        </div>

        <!-- Product Price -->
        <div class="text-lg md:text-xl font-bold text-gray-700 mt-2">
          ${{ product.price }}
        </div>

        <!-- Product Category -->
        <div class="flex mt-2">
          <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs md:text-sm font-medium text-blue-800">
            {{ product.category }}
          </span>
        </div>
      </div>
    </router-link>

    <!-- Action Buttons -->
    <div class="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-100">
      <button @click="addToWishlist(product)"class="text-gray-400 hover:text-red-600 transition-colors duration-300 transform hover:scale-125">
        <svg
          class="h-6 w-6 md:h-7 md:w-7"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
          />
        </svg>
      </button>
      <button @click="addToComparison(product)" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110">
        <p>Add to Compare</p>
      </button>

      <button @click="addToCart(product)" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110">
        <p>Add to Cart</p>
      </button>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['product'],

  computed: {
    ...mapGetters(['theme']),
    themeClass() {
      return this.theme === 'light' ? 'light-mode' : 'dark-mode';
  },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
    addToWishlist(product) {
      this.$store.dispatch('addToWishlist', product);
    },
    addToComparison(product) {
      this.$store.dispatch('addToComparison', product);
    },

  },
};
</script>