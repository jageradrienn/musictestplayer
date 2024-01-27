<script setup>
import Musiclist from "../Musiclist.vue";
import Shuffle from "../icons/shuffle.vue";
import VolumeHigh from "../icons/volume-high.vue";
import RepeateOne from "../icons/repeate-one.vue";
import Previous from "../icons/previous.vue";
import Pause from "../icons/pause.vue";
import Next from "../icons/next.vue";
import Maximize from "../icons/maximize.vue";
import Heart from "../icons/heart.vue";
import Progress from "../progress.vue";
</script>

<template>
  <footer
    class="bg-white/40 bp-blur w-full fixed bottom-0 min-h-[105px] md:h-[105px] px-[1.875rem] py-[1.25rem]"
  >
    <div
      class="fixed-footer grid grid-cols-1 md:grid-cols-[minmax(0,305px),minmax(0,747px),minmax(0,232px)] row-auto"
    >
      <section class="footer-music">
        <div class="flex justify-start items-center gap-4">
          <img src="@/assets/images/purple.png" alt="purple" class="rounded-full" />
          <ul class="list-none">
            <li class="list-items-title">Purple Noise</li>
            <li class="list-items-desc">Boris Brejcha</li>
          </ul>

          <!-- <Musiclist /> -->
        </div>
      </section>
      <section class="footer-player">
        <div class="controllers flex justify-center items-center gap-5">
          <Shuffle />
          <Previous />
          <Pause />
          <Next />
          <RepeateOne />
        </div>
        <div class="progress flex justify-between items-center">
          <p class="pr-3">1:29</p>
          <Progress :percent="70" />
          <p class="pl-3">3:36</p>
        </div>
      </section>
      <section class="footer-favourit ml-5 pt-3 px-4">
        <div class="flex items-center gap-4">
          <Heart />
          <VolumeHigh />
          <Progress class="w-20" :percent="70" />
          <Maximize />
        </div>
      </section>
    </div>
  </footer>
</template>
