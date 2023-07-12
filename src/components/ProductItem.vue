<template>
  <div class="product-item" :class="app.cartItems[product.id] ? 'active' : ''">
    <img class="product-item__img" :src="product.image" :alt="product.name">
    <h3 class="product-item__name">{{ product.name }}</h3>
    <div class="product-item__footer">
      <div class="product-item__price">{{ product.price }}</div>
      <button v-if="!app.cartItems[product.id]" @click="app.addToCart(product)"
              class="product-item__cart-button">➕🛒
      </button>
      <div class="product-item__controls" v-if="app.cartItems[product.id]">
        <button @click="app.dropFromCart(product.id)">➖</button>
        {{ app.cartItems[product.id].amount }}
        <button @click="app.addToCart(product)">➕</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useAppStore} from "@/store/app.js";

const app = useAppStore();
defineProps(['product']);
</script>