<template>
  <article class="faq-article">
    <div class="flex justify-between items-center" @click="handleClick(faqItem.id)">
      <h2 class="h2-heading max-w-[90%]">{{ faqItem.title }}</h2>
      <button type="button" id="arrow" class="close-arrow">
        <img v-if="!faqItem.isOpen" :src="ClosedA" alt="Arrow" />
        <img v-if="faqItem.isOpen" :src="OpenedA" alt="Arrow" />
      </button>
    </div>
    <div :class="{ 'pt-8 pb-4': true, hidden: !faqItem.isOpen }">
      <div v-html="faqItem.slot"></div>
    </div>
  </article>
</template>

<script setup>
import ClosedA from "../icons/closedArrow.svg";
import OpenedA from "../icons/arrowDown.svg";
import { ref, inject, defineProps } from "vue";

const emit = defineEmits(["toggleAnswer"]);
const handleClick = (id) => emit("toggleAnswer", id);

const props = defineProps(["faqItem"]);
</script>
