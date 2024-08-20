<template>
    <div>
      <h2 class="cart-title">Shopping Cart</h2>
      
      <div v-if="cartItems.length > 0" class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.title" class="cart-item-image" />
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.category }}</p>
            <p>{{ formatPrice(item.price) }}</p>
            <div>
              <button (item.id, item.quantity - 1) :disabled="item.quantity === 1">-</button>
              <span>{{ item.quantity }}</span>
              <button>(item.id, item.quantity + 1)">+</button>
            </div>
            <button (item.id)>Remove</button>
          </div>
        </div>
  
        <div>
          <p>Total:</p>
          <button>Clear Cart</button>
        </div>
      </div>
      
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script>
 
  </script>