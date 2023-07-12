<template>
  <div class="navbar-menu" v-scroll-spy-active v-scroll-spy-link>
    <router-link
        v-for="category in app.getCategories()" :key="category.slug"
        :to="{ path: '/', hash: '#' + category.slug }"
        :class="'navbar-menu__item'"
    >
      {{ category.name }}
    </router-link>
  </div>
</template>

<script setup>
import {useAppStore} from "@/store/app.js";

const app = useAppStore();
</script>