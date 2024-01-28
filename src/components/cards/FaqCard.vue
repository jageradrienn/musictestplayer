<script setup>
import closedA from "../../assets/images/closed-arrow.png";
import openedA from "../../assets/images/purple-arrow.svg";

const props = defineProps(["faqItem"]);
</script>

<template>
  <article class="faq-article">
    <div class="flex justify-between items-center">
      <h2 class="h2-heading">{{ faqItem.title }}</h2>
      <button type="button" id="arrow" class="close-arrow">
        <img src="../../assets/images/closed-arrow.png" alt="Arrow" />
      </button>
    </div>
  </article>
</template>
