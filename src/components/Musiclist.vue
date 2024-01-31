<template>
  <div
    class="music-list-class"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    :class="{
      'bg-musicpurple rounded-xl transition ease-in-out duration-[0.3s] delay-300': isHovered,
    }"
  >
    <div
      class="flex flex-col px-4 pt-2 mb-4 text-xl font-medium transition ease-in-out duration-[0.3s] delay-300"
    >
      <button class="delayed-icon" v-if="isHovered">
        <Play />
      </button>
      <span v-show="!isHovered">{{ musicElement.id }}</span>
    </div>
    <div class="flex-col truncate">
      <p class="list-items-title">
        {{ musicElement.listAuth }}
      </p>
      <p class="list-items-desc">
        {{ musicElement.listTitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
import Play from "@/components/icons/purpleplay.vue";
import { ref, defineProps } from "vue";

const props = defineProps(["musicElement"]);
const isHovered = ref(false);

const handleMouseOver = () => {
  isHovered.value = true;
};

const handleMouseOut = () => {
  isHovered.value = false;
};
</script>
