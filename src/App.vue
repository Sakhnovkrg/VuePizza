<template>
  <navbar />
  <router-view />
  <site-footer />
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import SiteFooter from "@/components/SiteFooter.vue";
</script>