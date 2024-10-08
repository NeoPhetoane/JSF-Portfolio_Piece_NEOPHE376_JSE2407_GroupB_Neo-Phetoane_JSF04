<template>
  <div class="container mx-auto p-4">
    <!-- Loading and error -->
    <FilterSort @filter="filterProducts" @sort="sortProducts" />
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
        <!-- Applying the styling to the fetched data -->

      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductCard from "../components/ProductCard.vue";
import FilterSort from "../components/FilterSort.vue";

export default {
  components: { ProductCard, FilterSort },
  data() {
    return {
      products: [],
      loading: true,
      error: null,
    };
  },
  computed: {
    ...mapGetters(["selectedCategory", "sortOrder"]),
    filteredProducts() {
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
      return filtered;
    },
  },
  methods: {
    ...mapActions(["updateCategory", "updateSortOrder"]),
    filterProducts(category) {
      this.updateCategory(category);
    },
    sortProducts(order) {
      this.updateSortOrder(order);
    },
    fetchProducts() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
          this.loading = false;
        });
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>
