<script setup>
/* const props = defineProps(["topListCardUrl", "topListCardAlt", "musicElement"]); */
const props = defineProps(["topListCardUrl", "topListCardAlt", "playList"]);
import Musiclist from ".././Musiclist.vue";

</script>

<template>
  <div class="hits-wrapper">
    <div class="relative">
      <img :src="topListCardUrl" :alt="topListCardAlt" />
      <p class="absolute card-label">
        {{ topListCardAlt }}
      </p>
    </div>

    <div>
      <Musiclist v-for="item in playList" :key="item.id" :musicElement="item" />
    </div>
  </div>
</template>
