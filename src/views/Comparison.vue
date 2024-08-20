<template>
    <div class="container mx-auto my-8">
      <h1 class="text-2xl font-bold mb-4">Comparison List</h1>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 rounded-tl-lg">Product</th>
              <th
                v-for="product in comparisonList"
                :key="product.id"
                class="py-2 border-r border-gray-300 last:border-none rounded-tr-lg"
              >
                <img
                  :src="product.image"
                  alt="Product image"
                  class="h-16 mx-auto"
                />
                <p class="font-bold">{{ product.title }}</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-b border-gray-200">
              <td class="py-2 rounded-l-lg">Price</td>
              <td
                v-for="product in comparisonList"
                :key="product.id"
                class="py-2 border-r border-gray-300 last:border-none"
              >
                ${{ product.price }}
              </td>
            </tr>
            <tr class="border-t border-b border-gray-200">
              <td class="py-2 rounded-l-lg">Description</td>
              <td
                v-for="product in comparisonList"
                :key="product.id"
                class="py-2 border-r border-gray-300 last:border-none"
              >
                {{ product.description }}
              </td>
            </tr>
            <tr class="border-t border-b border-gray-200">
              <td class="py-2 rounded-l-lg">Rating</td>
              <td
                v-for="product in comparisonList"
                :key="product.id"
                class="py-2 border-r border-gray-300 last:border-none"
              >
                {{ product.rating.rate }}
              </td>
            </tr>
            <tr class="border-t border-b border-gray-200">
              <td class="py-2 rounded-l-lg">Actions</td>
              <td
                v-for="product in comparisonList"
                :key="product.id"
                class="py-2 border-r border-gray-300 last:border-none"
              >
                <button
                  @click="removeFromComparison(product.id)"
                  class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        @click="clearComparisonList"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mt-4"
      >
        Clear Comparison List
      </button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      comparisonList() {
        return this.$store.getters.comparisonList;
      },
    },
    methods: {
      removeFromComparison(productId) {
        this.$store.dispatch("removeFromComparison", productId);
      },
      clearComparisonList() {
        this.$store.dispatch("clearComparisonList");
      },
    },
  };
  </script>