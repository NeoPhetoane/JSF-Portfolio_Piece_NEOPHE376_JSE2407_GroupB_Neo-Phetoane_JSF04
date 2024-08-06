<template>
  <div class="container mx-auto p-4">
    <FilterSort @filter="filterProducts" @sort="sortProducts" />
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import FilterSort from "../components/FilterSort.vue";

export default {
  components: { ProductCard, FilterSort },
  data() {
    return {
      products: [],
      loading: true,
      error: null,
      filteredProducts: [],
      categories: [],
      selectedCategory: "",
      sortOrder: "default",
    };
  },
  methods: {
    fetchProducts() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
          this.applyFiltersAndSorting();
          this.loading = false;
        });
    },
    filterProducts(category) {
      this.selectedCategory = category;
      this.applyFiltersAndSorting();
    },
    sortProducts(order) {
      this.sortOrder = order;
      this.applyFiltersAndSorting();
    },
    applyFiltersAndSorting() {
      let filtered = this.products;
      if (this.selectedCategory) {
        filtered = filtered.filter(
          (product) => product.category === this.selectedCategory
        );
      }
      if (this.sortOrder === "lowest") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (this.sortOrder === "highest") {
        filtered.sort((a, b) => b.price - a.price);
      } else if (this.sortOrder === "default") {
        filtered.sort((a, b) => a.id - b.id);
      }
      this.filteredProducts = filtered;
    },
  },

  mounted() {
    this.fetchProducts();
  },
};
</script>
