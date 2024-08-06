<template>
  <div class="container mx-auto p-4">
    <div v-if="loading" class="text-center">Loading...</div>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  methods: {
    fetchProducts() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
          this.loading = false;
        });
    },
  },
};
</script>
