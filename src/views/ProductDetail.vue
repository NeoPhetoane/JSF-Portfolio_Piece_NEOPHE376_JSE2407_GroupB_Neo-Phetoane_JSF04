<template>
  <div class="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-4xl">
    <!-- Back Button -->
    <button 
      @click="goBack" 
      class="mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-200"
    >
      Back to Products
    </button>
    <div v-if="loading" class="flex items-center justify-center h-screen">
      <div class="text-lg text-gray-500">Loading...</div>
    </div>

    <!-- Detail Card -->
    <div v-else class="flex flex-col md:flex-row gap-6">
      <img 
        class="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-md"
        :src="product.image" 
        :alt="product.title" 
      />
      <div class="flex-1">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ product.title }}</h1>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
        <p class="text-xl font-semibold text-blue-600 mb-2">Price: ${{ product.price }}</p>
        <p class="text-gray-700 mb-2">Category: {{ product.category }}</p>
        <p class="text-gray-600">Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        product: {},
        loading: true,
      };
    },
    methods: {
      fetchProduct() {
        const productId = this.$route.params.id;
        fetch(`https://fakestoreapi.com/products/${productId}`)
          .then(response => response.json())
          .then(data => {
            this.product = data;
            this.loading = false;
          });
      },
      goBack() {
        this.$router.push('/');
      },
    },
    mounted() {
      this.fetchProduct();
    },
  };
  </script>