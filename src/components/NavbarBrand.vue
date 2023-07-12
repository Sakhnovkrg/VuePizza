<template>
  <router-link :to="'/'" :class="'navbar-brand'" @click="handleBrandClick">
    <img class="navbar-brand__img" src="@/assets/img/vue.svg" alt="logo">
    <span class="navbar-brand__name"><slot></slot></span>
  </router-link>
</template>

<script setup>
function handleBrandClick(e) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>