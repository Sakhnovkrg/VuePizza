<template>
  <div class="product-grid">
    <product-item v-for="product in products" :key="product.id" :product="product"></product-item>
  </div>
</template>

<script setup>
import ProductItem from "@/components/ProductItem.vue";

defineProps(['products']);
</script>