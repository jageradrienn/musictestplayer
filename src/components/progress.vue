<script setup>
const props = defineProps(["percent"]);
</script>

<template>
  <div class="h-[4px] w-[90%] bg-gray-300 rounded-sm">
    <!-- <div class="h-[4px] w-[`${{percent}}%`] bg-purple rounded-sm"></div> -->
    <div :style="{ width: percent + '%' }" class="h-[4px] bg-purple rounded-sm"></div>
  </div>
</template>
