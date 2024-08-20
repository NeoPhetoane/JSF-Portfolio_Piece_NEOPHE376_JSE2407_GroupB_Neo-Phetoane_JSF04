<template>
  <div class="container mx-auto my-8">
    <h1 class="text-2xl font-bold mb-4">Comparison List</h1>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2">Product</th>
          <th v-for="product in comparisonList" :key="product.id" class="py-2">
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
        <tr>
          <td class="py-2">Price</td>
          <td v-for="product in comparisonList" :key="product.id" class="py-2">
            ${{ product.price }}
          </td>
        </tr>
        <tr>
          <td class="py-2">Description</td>
          <td v-for="product in comparisonList" :key="product.id" class="py-2">
            {{ product.description }}
          </td>
        </tr>
        <tr>
          <td class="py-2">Rating</td>
          <td v-for="product in comparisonList" :key="product.id" class="py-2">
            {{ product.rating.rate }}
          </td>
        </tr>
        <tr>
          <td class="py-2">Actions</td>
          <td v-for="product in comparisonList" :key="product.id" class="py-2">
            <button
             
              class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button
     
      class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
    >
      Clear Comparison List
    </button>
  </div>
</template>

<script>

</script>
