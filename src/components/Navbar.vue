<template>
  <nav class="navbar">
    <div class="navbar__container container">
      <navbar-brand>Vue Pizza</navbar-brand>
      <navbar-menu/>
      <router-link :to="'/checkout'" :class="'navbar-cart'">
          🛒 {{ app.cartAmount }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import NavbarMenu from './NavbarMenu';
import NavbarBrand from './NavbarBrand';
import {useAppStore} from "@/store/app.js";
const app = useAppStore();
</script>