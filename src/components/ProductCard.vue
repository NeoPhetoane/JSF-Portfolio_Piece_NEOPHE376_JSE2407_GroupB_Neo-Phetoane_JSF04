<template>
  <div
    class="flex flex-col max-h-[32rem] cursor-pointer max-w-xs hover:-translate-y-1 hover:scale-105 duration-300 bg-white border border-slate-200 shadow shadow-slate-950/5 rounded-2xl overflow-hidden"
  >
    <router-link :to="`/product/${product.id}`" class="flex flex-col h-full">
      <!-- Product Image -->
      <img
        :src="product.image"
        alt="Product image"
        class="object-contain h-48 mt-3 mx-auto"
      />

      <!-- Product Details -->
      <div class="flex-1 flex flex-col p-4">
        <!-- Product Title -->
        <header class="mb-2">
          <h2 class="text-lg line-clamp-2 font-extrabold leading-snug text-slate-600">
            {{ product.title }}
          </h2>
        </header>

        <!-- Product Rating and Reviews -->
        <div class="flex gap-2">
          <svg
            v-if="product.rating"
            class="inline-block h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 15l-3.092 1.623 0.591-3.443-2.52-2.453 3.461-0.502 1.56-3.15 1.56 3.15 3.461 0.502-2.52 2.453 0.591 3.443L10 15z"
            />
          </svg>
          <div>{{ product.rating ? product.rating.rate : 'No Rating' }}</div>
          <div>Reviews: <span>{{ product.rating ? product.rating.count : 'N/A' }}</span></div>
        </div>

        <!-- Product Price -->
        <div class="text-base font-extrabold text-slate-500 leading-snug mt-2">
          <h2>${{ product.price }}</h2>
        </div>

        <!-- Product Category -->
        <div class="flex mt-2">
          <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            {{ product.category }}
          </span>
        </div>
      </div>
    </router-link>

    <!-- Action Buttons -->
    <div class="flex items-center justify-between p-4 border-t border-slate-200 bg-gray-50">
      <button>
        <svg
          class="h-6 w-6 text-gray-400 hover:text-red-500"
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
      <button @click="addToComparison(product)" class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
        <p>Add to comparison</p>
      </button>

      <button  @click="addToCart(product)" class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
        <p>Add to cart</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],

  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
    addToComparison(product) {
      this.$store.dispatch('addToComparison', product);
    },
  },



};



</script>