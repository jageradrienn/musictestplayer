<template>
  <article class="hits-wrapper">
    <div
      class="relative w-full max-h-[200px] mb-5 sm:max-w-[170px] sm:max-h-[100%] sm:mb-0"
    >
      <img
        class="w-full max-h-[200px] object-cover sm:max-w-[170px] md:max-h-[100%] object-contain rounded-xl"
        :src="topListCardUrl"
        :alt="topListCardAlt"
      />
      <p class="absolute card-label">
        {{ topListCardAlt }}
      </p>
    </div>

    <div class="flex flex-col justify-end w-full">
      <Musiclist v-for="item in playList" :key="item.id" :musicElement="item" />
    </div>
  </article>
</template>

<script setup>
const props = defineProps(["topListCardUrl", "topListCardAlt", "playList"]);
import Musiclist from ".././Musiclist.vue";
</script>
