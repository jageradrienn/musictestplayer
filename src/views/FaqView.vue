<script setup>
import FaqCard from "../components/cards/FaqCard.vue";
import { onMounted, onUnmounted, ref } from "vue";

const isHomeActive = ref(true);

onMounted(() => {
  document.body.classList.add("bg-faq-page");
});

onUnmounted(() => {
  document.body.classList.remove("bg-faq-page");
});

const faqItems = [
  {
    id: "1",
    title: "Hol találom az összefoglalómat?",
    path: "../components/raws/summary.html",
  },
  {
    id: "2",
    title: "Az összefoglaló a Musictest Lite felületén is elérhető?",
    path: "../components/raws/lorem.html",
  },
  {
    id: "3",
    title: "Nem tartozik fiók az e-mail-címhez?",
    path: "../components/raws/lorem.html",
  },
  {
    id: "4",
    title: "Nem kaptál e-mailt a visszaállításról?",
    path: "../components/raws/lorem.html",
  },
  {
    id: "5",
    title: "Érvénytelen jelszó-visszaállítási hivatkozás?",
    path: "../components/raws/lorem.html",
  },
  {
    id: "6",
    title:
      "A privát zenehallgatás és az offline módban történő lejátszás beleszámít az összefoglalóba?",
    path: "../components/raws/lorem.html",
  },
  {
    id: "7",
    title:
      "Az „A kedvenc dalaid 2023” elnevezésű műsorlistán aszerint vannak sorba rendezve a dalok, hogy melyiket hallgattam a legtöbbet?",
    path: "../components/raws/lorem.html",
  },
  {
    id: "8",
    title: "Megoszthatom az „A kedvenc dalaid 2023” elnevezésű műsorlistámat másokkal?",
    path: "../components/raws/lorem.html",
  },
  {
    id: "9",
    title: "A műsorlisták el fognak tűnni egy adott időpontban?",
    path: "../components/raws/lorem.html",
  },
];

/* const popUpItem = {
  title: "Cím",
  description: "Leírás",
  label: "Ez egy  label",
  // További adatok
}; */
</script>

<template>
  <main class="container">
    <section class="GYIK">
      <h1 class="h1-tag">Gyakran Ismételt Kérdések</h1>
      <p class="text-center pb-6">
        Reméljük, hogy az alábbi gyakori kérdésekre adott válaszok segítenek abban, hogy
        teljes mértékben át tudd adni magad az összefoglaló élményének. Ha a kérdésedre
        itt nem találsz választ, akkor írj a visszajelzésekről szóló közösségi
        beszélgetésbe.
      </p>
    </section>

    <section class="faq-accordion">
      <FaqCard v-for="item in faqItems" :key="item.id" :faqItem="item" />
    </section>

    <!-- <FaqPopup :popUpItem="popUpItem" /> -->
  </main>
</template>
