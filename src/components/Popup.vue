<script setup>
const props = defineProps(["popUpItem"]);
</script>

<template>
  <div>
    <!-- Komponens tartalma -->
    <h2>{{ popUpItem.title }}</h2>
    <p>{{ popUpItem.description }}</p>
    <p v-if="popUpItem.label">{{ popUpItem.label }}</p>
    <!-- További tartalom -->
  </div>
</template>
