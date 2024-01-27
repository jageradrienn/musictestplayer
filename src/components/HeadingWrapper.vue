<script setup>
const props = defineProps(["headingText", "linkHref", "linkText"]);
</script>

<template>
  <div class="heading-wrapper">
    <h2 class="h2-heading">{{ headingText }}</h2>
    <a :href="linkHref" class="links">{{ linkText }}</a>
  </div>
</template>
