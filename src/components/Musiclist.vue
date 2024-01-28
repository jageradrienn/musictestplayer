<script setup>
/* const props = defineProps(["id", "url", "listAuth", "listTitle"]); */
const props = defineProps(["musicElement"]);
</script>

<template>
  <div
    class="music-list-class flex justify-start items-center md:pl-4 max-w-[300px] sm:max-w-[150px] lg:max-w-[300px]"
  >
    <p id="playlistID" class="p-4 text-xl font-medium">{{ musicElement.id }}</p>
    <div class="flex-col truncate">
      <p class="list-items-title">{{ musicElement.listAuth }}</p>
      <p class="list-items-desc">{{ musicElement.listTitle }}</p>
    </div>
  </div>
</template>
