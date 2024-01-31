<template>
  <div
    v-if="isShowing"
    class="fixed left-0 right-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full top-0 z-30"
    @click.self="close"
  >
    <transition name="fade">
      <div class="popupDiv" @click.stop>
        <div class="flex justify-center items-center">
          <h2 class="font-medium text-2xl text-dark py-6">
            {{ title }}
          </h2>
          <span
            class="absolute right-7 md:right-[3.75rem] hover:bg-popupinput rounded-full"
            @click="close"
          >
            <img class="p-1" src="../../src/components/icons/close.svg" alt="Sms" />
          </span>
        </div>

        <div class="mt-2 px-2 lg:px-7 py-3 w-full">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: String,
  isShowing: Boolean,
});

const emit = defineEmits();
const close = () => {
  emit("update:isShowing", false);
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
