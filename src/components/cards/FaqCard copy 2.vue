<script setup>
import closedA from "../../components/icons/closed-arrow.svg";
import openedA from "../../components/icons/purple-arrow.svg";
import { ref, inject, defineProps } from "vue";

const isOpen = inject("isOpen");

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};

const props = defineProps(["faqItem"]);
</script>

<template>
  <article class="faq-article">
    <div class="flex justify-between items-center" @click="toggleAccordion">
      <h2 class="h2-heading">{{ faqItem.title }}</h2>
      <button type="button" id="arrow" class="close-arrow">
        <img :src="closedA" alt="Arrow" />
      </button>
    </div>
    <div v-if="isOpen" class="block pt-8 pb-4" id="gyik-desc">
      <div v-html="faqItem.slot"></div>
    </div>
  </article>
</template>

<!-- const isOpen = ref(false); const props = defineProps(["faqItem"]);

<template>
  <article class="faq-article">
    <div class="flex justify-between items-center" @click="isOpen = !isOpen">
      <h2 class="h2-heading">{{ faqItem.title }}</h2>
      <button type="button" id="arrow" class="close-arrow">
        <img :src="closedA" alt="Arrow" />
      </button>
    </div>
    <div v-if="isOpen" class="block pt-8 pb-4" id="gyik-desc">
      <div v-html="faqItem.slot"></div>
    </div>
  </article>
</template>
-->
