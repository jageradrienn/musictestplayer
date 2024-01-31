<template>
  <article class="card">
    <div class="card-wrapper">
      <img
        id="card-img"
        class="w-full aspect-ratio rounded-xl"
        :src="cardItem.imageUrl"
        :alt="cardItem.alt"
      />
      <button class="card-play">
        <CardPlay />
      </button>
      <div class="overlay"></div>
    </div>
    <div class="truncate">
      <h4 class="list-items-title truncate text-center md:text-left">
        {{ cardItem.title }}
      </h4>
      <p class="list-items-desc">{{ cardItem.author }}</p>
    </div>
  </article>
</template>
<script setup>
const props = defineProps(["cardItem"]);
import CardPlay from "../icons/CardPlay.vue";
</script>
