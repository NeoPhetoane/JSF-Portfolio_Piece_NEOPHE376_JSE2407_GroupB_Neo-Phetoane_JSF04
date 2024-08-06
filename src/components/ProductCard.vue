<template>
    <div class="border p-4 rounded-lg">
      <router-link :to="`/product/${product.id}`">
        <img :src="product.image" alt="Product image" class="w-full" />
        <h2 class="text-lg">{{ product.title }}</h2>
        <p>Price: ${{ product.price }}</p>
        <p>Category: {{ product.category }}</p>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: ['product'],
  };
  </script>