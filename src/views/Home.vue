<template>
  <main v-scroll-spy class="container main">
    <section v-for="category in app.getCategories()" :key="category.id" class="category-section">
      <h2 class="category-section__title">{{ category.name }}</h2>
      <product-grid :products="app.getProducts().filter(item => item.category_id === category.id)"/>
    </section>
  </main>

</template>

<script setup>
import ProductGrid from "@/components/ProductGrid.vue";
import {onMounted} from "vue";
import {useAppStore} from "@/store/app.js";
const app = useAppStore();


onMounted(() => {
  const hash = window.location.hash;
  if (hash) {
    const element = document.getElementById(hash);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
});
</script>