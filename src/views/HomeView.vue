<script setup>
//import TheWelcome from "../components/TheWelcome.vue";
import Footer from "../components/layout/Footer.vue";
import Card from "../components/cards/Card.vue";
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

const headingPop = "Népszerű zeneszámok";
const headingTop = "Toplista";
const headingAuth = "Előadók";
</script>

<template>
  <section class="popular">
    <div class="heading-wrapper">
      <h2 class="h2-heading">{{ headingPop }}</h2>
      <a href="#" class="links">Összes</a>
    </div>

    <div class="flex justify-between flex-wrap gap-2">
      <Card v-for="cardItem in cardItems" :key="cardItem.id" :cardItem="cardItem" />
    </div>
  </section>
</template>
