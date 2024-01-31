<template>
  <div
    class="music-list-class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :class="{ 'bg-musicpurple rounded-xl': isHovered }"
  >
    <div class="flex flex-col px-4 pt-2 mb-4 text-xl font-medium">
      <button class="delayed-icon" v-show="isHovered">
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

const handleMouseEnter = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>
