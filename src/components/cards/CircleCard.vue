<script setup>
const props = defineProps(["circleElement"]);
</script>

<template>
  <article class="circle-item flex flex-col items-center gap-1">
    <img :src="circleElement.circleUrl" :alt="circleElement.circleAlt" />
    <p class="list-items-title">{{ circleElement.circleTitle }}</p>
  </article>
</template>
