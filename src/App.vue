<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <Header />
  <RouterView />
</template>
