<template>
  <main class="container">
    <section class="GYIK">
      <h1 class="h1-tag mt-12">Gyakran Ismételt Kérdések</h1>
      <p class="text-center mb-12">
        Reméljük, hogy az alábbi gyakori kérdésekre adott válaszok segítenek abban, hogy
        teljes mértékben át tudd adni magad az összefoglaló élményének. Ha a kérdésedre
        itt nem találsz választ, akkor írj a visszajelzésekről szóló közösségi
        beszélgetésbe.
      </p>
    </section>

    <section class="faq-accordion">
      <FaqCard
        v-for="item in faqs"
        :key="item.id"
        :faqItem="item"
        @toggle-answer="toggleAnswer"
      />
    </section>
  </main>
</template>

<script setup>
import FaqCard from "../components/cards/FaqCard.vue";
import { onMounted, onUnmounted, ref, nextTick } from "vue";

const isHomeActive = ref(true);

const toggleAnswer = (id) => {
  faqs.value = faqs.value.map((faq) =>
    faq.isOpen && faq.id !== id ? { ...faq, isOpen: false } : faq
  );
  faqs.value = faqs.value.map((faq) =>
    faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
  );
};

onMounted(() => {
  document.body.classList.add("bg-faq-page");
});

onUnmounted(() => {
  document.body.classList.remove("bg-faq-page");
});

const faqs = ref([
  {
    id: "1",
    isOpen: false,
    title: "Hol találom az összefoglalómat?",
    slot: `<p style="padding-bottom: 1rem">
        Az összefoglalódat a Musictest mobilalkalmazásában találod.
      </p>
<ol style="padding-left: 1rem; list-style-type: decimal">
          <li style="margin-left: 0.5rem;">Koppints a <b>Főoldal</b> ikonra.</li>
          <li style="margin-left: 0.5rem;">Válaszd ki az összefoglaló falát.</li>
          <li style="margin-left: 0.5rem;">
            Az összefoglalód történeteit Az <b>összefoglalód</b> opcióra koppintva tekintheted
            meg.
          </li>
        </ol>

<p style="padding-top: 1rem; padding-bottom: 1rem">
        Megjegyzés: Győződj meg arról, hogy <u>a Musictest alkalmazás legfrissebb verzióját</u>
        használod.
      </p>
<p style="padding-bottom: 1rem">
        Ha inkább az asztali alkalmazást vagy a webes verziót használod szívesebben, lépj
        a <u>musictest.hu/wrapped</u> oldalra, és tudd meg, mit árul el rólad, hogy miket
        hallgattál ebben az évben.
      </p>
<p style="padding-bottom: 1rem">
        Ha nem jelenik meg az összefoglalód, olvasd el <u> ezt a topikot a közösségi fórumunkon</u>.
      </p>
`,
  },
  {
    id: "2",
    isOpen: false,
    title: "Az összefoglaló a Musictest Lite felületén is elérhető?",
    slot: `<p style="padding-top: 1rem; padding-bottom: 1rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        ac justo vel urna
        vulputate volutpat sed sit
        amet elit. Fusce id libero ut augue bibendum scelerisque. Sed sit amet aliquet orci, at aliquet metus. Vivamus
        consectetur malesuada enim, sit amet euismod eros. Morbi vulputate interdum arcu, eu pellentesque lectus
        tristique vel.</p>`,
  },
  {
    id: "3",
    isOpen: false,
    title: "Nem tartozik fiók az e-mail-címhez?",
    slot: `<p style="padding-top: 1rem; padding-bottom: 1rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        ac justo vel urna
        vulputate volutpat sed sit
        amet elit. Fusce id libero ut augue bibendum scelerisque. Sed sit amet aliquet orci, at aliquet metus. Vivamus
        consectetur malesuada enim, sit amet euismod eros. Morbi vulputate interdum arcu, eu pellentesque lectus
        tristique vel.</p>`,
  },
  {
    id: "4",
    isOpen: false,
    title: "Nem kaptál e-mailt a visszaállításról?",
    slot: `<p style="padding-top: 1rem; padding-bottom: 1rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        ac justo vel urna
        vulputate volutpat sed sit
        amet elit. Fusce id libero ut augue bibendum scelerisque. Sed sit amet aliquet orci, at aliquet metus. Vivamus
        consectetur malesuada enim, sit amet euismod eros. Morbi vulputate interdum arcu, eu pellentesque lectus
        tristique vel.</p>`,
  },
  {
    id: "5",
    isOpen: false,
    title: "Érvénytelen jelszó-visszaállítási hivatkozás?",
    slot: `<p style="padding-top: 1rem; padding-bottom: 1rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        ac justo vel urna
        vulputate volutpat sed sit
        amet elit. Fusce id libero ut augue bibendum scelerisque. Sed sit amet aliquet orci, at aliquet metus. Vivamus
        consectetur malesuada enim, sit amet euismod eros. Morbi vulputate interdum arcu, eu pellentesque lectus
        tristique vel.</p>`,
  },
  {
    id: "6",
    isOpen: false,
    title:
      "A privát zenehallgatás és az offline módban történő lejátszás beleszámít az összefoglalóba?",
    slot: `<p style="padding-top: 1rem; padding-bottom: 1rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        ac justo vel urna
        vulputate volutpat sed sit
        amet elit. Fusce id libero ut augue bibendum scelerisque. Sed sit amet aliquet orci, at aliquet metus. Vivamus
        consectetur malesuada enim, sit amet euismod eros. Morbi vulputate interdum arcu, eu pellentesque lectus
        tristique vel.</p>`,
  },
  {
    id: "7",
    isOpen: false,
    title:
      "Az „A kedvenc dalaid 2023” elnevezésű műsorlistán aszerint vannak sorba rendezve a dalok, hogy melyiket hallgattam a legtöbbet?",
    slot: `<p style="padding-top: 1rem; padding-bottom: 1rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        ac justo vel urna
        vulputate volutpat sed sit
        amet elit. Fusce id libero ut augue bibendum scelerisque. Sed sit amet aliquet orci, at aliquet metus. Vivamus
        consectetur malesuada enim, sit amet euismod eros. Morbi vulputate interdum arcu, eu pellentesque lectus
        tristique vel.</p>`,
  },
  {
    id: "8",
    isOpen: false,
    title: "Megoszthatom az „A kedvenc dalaid 2023” elnevezésű műsorlistámat másokkal?",
    slot: `<p style="padding-top: 1rem; padding-bottom: 1rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        ac justo vel urna
        vulputate volutpat sed sit
        amet elit. Fusce id libero ut augue bibendum scelerisque. Sed sit amet aliquet orci, at aliquet metus. Vivamus
        consectetur malesuada enim, sit amet euismod eros. Morbi vulputate interdum arcu, eu pellentesque lectus
        tristique vel.</p>`,
  },
  {
    id: "9",
    isOpen: false,
    title: "A műsorlisták el fognak tűnni egy adott időpontban?",
    slot: `<p style="padding-top: 1rem; padding-bottom: 1rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        ac justo vel urna
        vulputate volutpat sed sit
        amet elit. Fusce id libero ut augue bibendum scelerisque. Sed sit amet aliquet orci, at aliquet metus. Vivamus
        consectetur malesuada enim, sit amet euismod eros. Morbi vulputate interdum arcu, eu pellentesque lectus
        tristique vel.</p>`,
  },
]);
</script>
