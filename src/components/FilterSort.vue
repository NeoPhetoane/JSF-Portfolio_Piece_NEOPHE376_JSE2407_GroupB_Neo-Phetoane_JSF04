<template>
  <div
    class="flex flex-col space-y-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md"
  >
    <!-- Filter Section -->
    <label for="category" class="block text-sm font-medium text-gray-700"
      >Filter by Category:</label
    >
    <select
      v-model="selectedCategory"
      @change="filter($event)"
      class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
    >
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>

    <!-- Sort Section -->
    <label for="sort" class="block text-sm font-medium text-gray-700"
      >Sort by Price:</label
    >
    <select v-model="sortOrder"
     @change="sort($event)">
      <option value="default">Default</option>
      <option value="lowest">Lowest Price</option>
      <option value="highest">Highest Price</option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      categories: [],
    };
  },

  computed: {
    ...mapState(['selectedCategory', 'sortOrder']), // Bind to Vuex store
  },
  methods: {
    ...mapActions(["updateCategory", "updateSortOrder"]),
    fetchCategories() {
      fetch("https://fakestoreapi.com/products/categories")
        .then((response) => response.json())
        .then((data) => {
          this.categories = data;
        });
    },
    filter(event) {
      this.updateCategory(event.target.value);
    },
    sort(event) {
      this.updateSortOrder(event.target.value);
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>
