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
  <footer class="main-footer bp-blur">
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,305px),minmax(0,787px),minmax(0,232px)] mx-auto place-content-center"
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
