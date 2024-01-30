<script setup>
//import TheWelcome from "../components/TheWelcome.vue";
import Footer from "../components/layout/Footer.vue";
import Header from "../components/layout/Header.vue";
import Card from "../components/cards/Card.vue";
import Musiclist from "../components/Musiclist.vue";
import HeadingWrapper from "../components/HeadingWrapper.vue";
import TopListCard from "../components//cards/TopListCard.vue";
import CircleCard from "../components//cards/CircleCard.vue";
import Popup from "../components/Popup.vue";
import image1 from "@/assets/images/pop01.png";
import image2 from "@/assets/images/pop02.png";
import image3 from "@/assets/images/pop03.png";
import image4 from "@/assets/images/pop04.png";
import image5 from "@/assets/images/pop05.png";
import image6 from "@/assets/images/pop06.png";
import image7 from "@/assets/images/pop07.png";
import image8 from "@/assets/images/pop08.png";
import image9 from "@/assets/images/pop09.png";
import image10 from "@/assets/images/pop10.png";
import image11 from "@/assets/images/pop11.png";
import image12 from "@/assets/images/pop12.png";
import footerimg1 from "@/assets/images/purple.png";
import topimg from "@/assets/images/top100.png";
import musicimg from "@/assets/images/musorlista.png";
import a01 from "@/assets/images/A01.png";
import a02 from "@/assets/images/A02.png";
import a03 from "@/assets/images/A03.png";
import a04 from "@/assets/images/A04.png";
import a05 from "@/assets/images/A05.png";
import a06 from "@/assets/images/A06.png";
import a07 from "@/assets/images/A07.png";

import { onMounted, ref, onBeforeUnmount } from "vue";

const upScroll = ref(false);

const isUpscroll = () => {
  return window.scrollY > 0;
};

const handleScroll = () => {
  upScroll.value = isUpscroll();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const cardItems = [
  {
    id: 1,
    title: "Take What You Want",
    imageUrl: image1,
    author: "Ozzy Osbourne",
    alt: "Ozzy Osbourne - Take What You Want",
  },
  {
    id: 2,
    title: "Unstoppable",
    imageUrl: image2,
    author: "Sia",
    alt: "Unstoppable - Sia",
  },
  {
    id: 3,
    title: "From Paris to Berlin (Chrit Leaf Remix)",
    imageUrl: image3,
    author: "Braaheim, Chrit Leaf",
    alt: "From Paris to Berlin (Chrit Leaf Remix) - Braaheim, Chrit Leaf",
  },
  {
    id: 4,
    title: "Super Shy",
    imageUrl: image4,
    author: "NewJeans",
    alt: "Super Shy - NewJeans",
  },
  {
    id: 5,
    title: "Seperti Kiash",
    imageUrl: image5,
    author: "Rizky Febian",
    alt: "Seperti Kiash - Rizky Febian ",
  },
  {
    id: 6,
    title: "Belly Dancer",
    imageUrl: image6,
    author: "Imanbek, BYOR",
    alt: "Belly Dancer - Imanbek, BYOR",
  },
  {
    id: 7,
    title: "Capula",
    imageUrl: image7,
    author: "JeeCee",
    alt: "Capula - JeeCee",
  },
  {
    id: 8,
    title: "Close to me",
    imageUrl: image8,
    author: "Damo",
    alt: "Close to me - Damo",
  },
  {
    id: 9,
    title: "Need You Tonight",
    imageUrl: image9,
    author: "INXS",
    alt: "Need You Tonight - INXS",
  },
  {
    id: 10,
    title: "Gravity (feat. Laura Korinth) - edit",
    imageUrl: image10,
    author: "Boris Brejcha",
    alt: "Gravity (feat. Laura Korinth) - Boris Brejcha",
  },
  {
    id: 11,
    title: "Crab Rave",
    imageUrl: image11,
    author: "Noisestorm",
    alt: "Crab Rave - Noisestorm",
  },
  {
    id: 12,
    title: "Mr. Saxobeat",
    imageUrl: image12,
    author: "Klaas",
    alt: "Mr. Saxobeat- Klaas",
  },
];

const Top100Hits = [
  {
    id: 1,
    listAuth: "Sial",
    listTitle: "Mahalini • 4:03",
  },
  {
    id: 2,
    listAuth: "Purple Noise",
    listTitle: "Boris Brejcha • 3:36",
  },
  {
    id: 3,
    listAuth: "Jiwa yang Bersedih",
    listTitle: "Ghea Indrawati • 4:38",
  },
  {
    id: 4,
    listAuth: "Komang",
    listTitle: "Raim Laude • 3:42",
  },
];

const MusicListItems = [
  {
    id: 1,
    listAuth: "Seven (feat. Latto) [Explicit] by Jung Kook",
    listTitle: "Jung Kook, Latto • 3:04",
  },
  {
    id: 2,
    listAuth: "Super Shy",
    listTitle: "NewJeans • 2:34",
  },
  {
    id: 3,
    listAuth: "Somebody’s Pleasure",
    listTitle: "Aziz Hedra • 3:44",
  },
  {
    id: 4,
    listAuth: "Tally",
    listTitle: "BLACKPINK • 3:04",
  },
];

const CirlceListItems = [
  {
    id: 1,
    circleUrl: a01,
    circleAlt: "Yura Yunita",
    circleTitle: "Yura Yunita",
  },
  {
    id: 2,
    circleUrl: a02,
    circleAlt: "Tiara Andiri",
    circleTitle: "Tiara Andiri",
  },
  {
    id: 3,
    circleUrl: a03,
    circleAlt: "Ziva Magnolya",
    circleTitle: "Ziva Magnolya",
  },
  {
    id: 4,
    circleUrl: a04,
    circleAlt: "Jennyfer Lopez",
    circleTitle: "Jennyfer Lopez",
  },
  {
    id: 5,
    circleUrl: a05,
    circleAlt: "Rizky Febian",
    circleTitle: "Rizky Febian",
  },
  {
    id: 6,
    circleUrl: a06,
    circleAlt: "Lyodra",
    circleTitle: "Lyodra",
  },
  {
    id: 7,
    circleUrl: a07,
    circleAlt: "Eminem",
    circleTitle: "Eminem",
  },
];
</script>

<template>
  <main class="container h-screen relative">
    <section class="popular">
      <HeadingWrapper headingText="Népszerű zeneszámok" linkHref="#" linkText="Összes" />
      <div
        class="flex justify-between md:justify-center xl:justify-between items-start align-self-stretch flex-wrap gap-4"
      >
        <Card v-for="card in cardItems" :key="card.id" :cardItem="card" />
      </div>
    </section>
    <section class="toplist">
      <HeadingWrapper headingText="Toplista" linkHref="#" linkText="Összes" />
      <div
        class="top-grid grid grid-cols-1 justify-center items-center gap-4 sm:grid-cols-[minmax(0,604px),minmax(0,604px)]"
      >
        <TopListCard
          :topListCardUrl="topimg"
          topListCardAlt="100 TOP Hits"
          :playList="Top100Hits"
        />
        <TopListCard
          :topListCardUrl="musicimg"
          topListCardAlt="Műsorlista"
          :playList="MusicListItems"
        />
      </div>
    </section>
    <section class="authors pb-24">
      <HeadingWrapper headingText="Előadók" linkHref="#" linkText="View all" />
      <div class="flex items-start gap-4 flex-wrap justify-center xl:justify-between">
        <CircleCard
          v-for="item in CirlceListItems"
          :key="item.id"
          :circleElement="item"
        />
      </div>
    </section>

    <Footer :class="{ show: upScroll, hidden: !upScroll }" />

  
  
  </main>
</template>
