<script setup>
import FaqPopup from "../components/Popup.vue";

const popUpItem = {
  title: "Cím",
  description: "Leírás",
  label: "Ez egy  label",
  // További adatok
};
</script>

<template>
  <div>
    <!-- <TheWelcome /> -->
    GYIK / accordion popup

    <FaqPopup :popUpItem="popUpItem" />
  </div>
</template>
