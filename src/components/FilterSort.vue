
<template>
    <div class="mb-4">
        <label for="category" class="block text-sm font-medium text-gray-700">Filter by Category:</label>
      <select @change="filter($event)" class="mr-4">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
      <label for="sort" class="block text-sm font-medium text-gray-700">Sort by Price:</label>
      <select @change="sort($event)">
        <option value="default">Default</option>
        <option value="lowest">Lowest Price</option>
        <option value="highest">Highest Price</option>
      </select>
    </div>
  </template>


<script>

</script>