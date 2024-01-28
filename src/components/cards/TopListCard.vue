<script setup>
/* const props = defineProps(["topListCardUrl", "topListCardAlt", "musicElement"]); */
const props = defineProps(["topListCardUrl", "topListCardAlt", "playList"]);
import Musiclist from ".././Musiclist.vue";
</script>

<template>
  <article class="hits-wrapper">
    <div
      class="relative sm:max-w-[170px] w-full max-h-[200px] sm:max-h-[100%] mb-5 sm:mb-0"
    >
      <img
        class="sm:max-w-[170px] w-full max-h-[200px] md:max-h-[100%] object-cover md:object-contain rounded-xl"
        :src="topListCardUrl"
        :alt="topListCardAlt"
      />
      <p class="absolute card-label">
        {{ topListCardAlt }}
      </p>
    </div>

    <div>
      <Musiclist v-for="item in playList" :key="item.id" :musicElement="item" />
    </div>
  </article>
</template>
