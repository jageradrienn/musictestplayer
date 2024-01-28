<script setup>
import closedA from "../../components/icons/closed-arrow.svg";
import openedA from "../../components/icons/purple-arrow.svg";

const props = defineProps(["faqItem"]);
</script>

<template>
  <article class="faq-article">
    <div class="flex justify-between items-center">
      <h2 class="h2-heading">{{ faqItem.title }}</h2>
      <button type="button" id="arrow" class="close-arrow">
        <img :src="closedA" alt="Arrow" />
      </button>
    </div>
    <div class="block pt-8 pb-4" id="gyik-desc">
      <textarea
        v-model="faqItem.formattedText"
        class="w-full"
        style="resize: none; border: none"
      ></textarea>
    </div>
  </article>
</template>
