<script setup>
/* const props = defineProps(["id", "url", "listAuth", "listTitle"]); */
const props = defineProps(["musicElement"]);
</script>

<template>
  <div class="music-list-class flex justify-start items-center pl-4">
    <p id="playlistID" class="p-4 text-xl font-medium">{{ musicElement.id }}</p>
    <div class="flex-col">
      <p class="list-items-title">{{ musicElement.listAuth }}</p>
      <p class="list-items-desc">{{ musicElement.listTitle }}</p>
    </div>
  </div>
</template>
