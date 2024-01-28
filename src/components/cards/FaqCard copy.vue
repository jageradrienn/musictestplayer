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
      <p style="padding-bottom: 1rem">
        Az összefoglalódat a Musictest mobilalkalmazásában találod.
      </p>
      <ol type="1" start="1" style="padding-left: 2rem">
        <li>Koppints a Főoldal ikonra.</li>
        <li>Válaszd ki az összefoglaló falát.</li>
        <li>
          Az összefoglalód történeteit Az összefoglalód opcióra koppintva tekintheted meg.
        </li>
      </ol>

      <p style="padding-top: 1rem; padding-bottom: 1rem">
        Megjegyzés: Győződj meg arról, hogy a Musictest alkalmazás legfrissebb verzióját
        használod.
      </p>
      <p style="padding-bottom: 1rem">
        Ha inkább az asztali alkalmazást vagy a webes verziót használod szívesebben, lépj
        a musictest.hu/wrapped oldalra, és tudd meg, mit árul el rólad, hogy miket
        hallgattál ebben az évben.
      </p>
      <p style="padding-bottom: 1rem">
        Ha nem jelenik meg az összefoglalód, olvasd el ezt a topikot a közösségi
        fórumunkon.
      </p>
    </div>
  </article>
</template>
