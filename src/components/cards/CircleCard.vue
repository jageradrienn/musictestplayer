<script setup>
const props = defineProps(["circleElement"]);
</script>

<template>
  <article class="circle-item flex flex-col items-center gap-1">
    <img
      class="w-[100px] sm:w-[150px]"
      :src="circleElement.circleUrl"
      :alt="circleElement.circleAlt"
    />
    <p class="list-items-title">{{ circleElement.circleTitle }}</p>
  </article>
</template>
