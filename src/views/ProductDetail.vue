<template>
    <div class="container mx-auto p-4">
      <button @click="goBack" class="mb-4">Back</button>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else>
        <h1 class="text-2xl">{{ product.title }}</h1>
        <img :src="product.image" alt="Product image" class="w-full max-w-sm" />
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        <p>Category: {{ product.category }}</p>
        <p>Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
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