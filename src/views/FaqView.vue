<script setup>
import FaqCard from "../components/cards/FaqCard.vue";

const faqItems = [
  {
    id: "1",
    title: "Hol találom az összefoglalómat?",
    text: `Az összefoglalódat a Musictest mobilalkalmazásában találod.

    1. Koppints a Főoldal ikonra.
    2. Válaszd ki az összefoglaló falát.
    3. Az összefoglalód történeteit Az összefoglalód opcióra koppintva tekintheted meg.

    Megjegyzés: Győződj meg arról, hogy a Musictest alkalmazás legfrissebb verzióját használod.

    Ha inkább az asztali alkalmazást vagy a webes verziót használod szívesebben, lépj a musictest.hu/wrapped oldalra, és tudd meg, mit árul el rólad, hogy miket hallgattál ebben az évben.

    Ha nem jelenik meg az összefoglalód, olvasd el ezt a topikot a közösségi fórumunkon.`,
  },
  {
    id: "2",
    title: "Az összefoglaló a Musictest Lite felületén is elérhető?",
    text: "Lorem Ipsum.....",
  },
  {
    id: "3",
    title: "Nem tartozik fiók az e-mail-címhez?",
    text: "Lorem Ipsum.....",
  },
  {
    id: "4",
    title: "Nem kaptál e-mailt a visszaállításról?",
    text: "Lorem Ipsum.....",
  },
  {
    id: "5",
    title: "Érvénytelen jelszó-visszaállítási hivatkozás?",
    text: "Lorem Ipsum.....",
  },
  {
    id: "6",
    title:
      "A privát zenehallgatás és az offline módban történő lejátszás beleszámít az összefoglalóba?",
    text: "Lorem Ipsum.....",
  },
  {
    id: "7",
    title:
      "Az „A kedvenc dalaid 2023” elnevezésű műsorlistán aszerint vannak sorba rendezve a dalok, hogy melyiket hallgattam a legtöbbet?",
    text: "Lorem Ipsum.....",
  },
  {
    id: "8",
    title: "Megoszthatom az „A kedvenc dalaid 2023” elnevezésű műsorlistámat másokkal?",
    text: "Lorem Ipsum.....",
  },
  {
    id: "9",
    title: "A műsorlisták el fognak tűnni egy adott időpontban?",
    text: "Lorem Ipsum.....",
  },
];

const popUpItem = {
  title: "Cím",
  description: "Leírás",
  label: "Ez egy  label",
  // További adatok
};
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

<style scoped>
faq-body {
  color: white;
}
</style>
