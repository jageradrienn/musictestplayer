<script setup>
import LogoIpsum from "@/components/icons/logo.vue";
import { onMounted, ref } from "vue";

// Home oldal aktív-e
/* onMounted(() => {
  const changeMenu = (ev) => {
    var wasActive = false;
    let homeLink = document.querySelector("#home-link");
    let faqLink = document.querySelector("#faq-link");
    let contactLink = document.querySelector("#contact-link");

    if (ev.target.innerText === "Főoldal") {
      wasActive = homeLink.classList.contains("active-btn");

      if (!wasActive) {
        homeLink.classList.replace("inactive-btn", "active-btn");
        faqLink.classList.replace("active-btn", "inactive-btn");
        contactLink.classList.replace("active-btn", "inactive-btn");
      }
    } else if (ev.target.innerText === "FAQ") {
      wasActive = faqLink.classList.contains("active-btn");

      if (!wasActive) {
        faqLink.classList.replace("inactive-btn", "active-btn");
        homeLink.classList.replace("active-btn", "inactive-btn");
        contactLink.classList.replace("active-btn", "inactive-btn");
      }
    } else if (ev.target.innerText === "Kapcsolat") {
      wasActive = contactLink.classList.contains("active-btn");

      if (!wasActive) {
        contactLink.classList.replace("inactive-btn", "active-btn");
        homeLink.classList.replace("active-btn", "inactive-btn");
        faqLink.classList.replace("active-btn", "inactive-btn");
      }
    }
  };

  menu.addEventListener("click", changeMenu);
}); */
</script>

<template>
  <header class="header-wrapper">
    <div>
      <LogoIpsum class="mx-auto" />
    </div>
    <nav class="p-6" id="menu">
      <ul
        class="flex justify-center items-center gap-5 flex-col sm:flex-wrap, sm:flex-row"
      >
        <li
          id="home-link"
          :class="{ 'activebtn-home': isHomeActive, 'inactivebtn-home': !isHomeActive }"
          class="nav-item flex justify-center items-center gap-1"
        >
          <RouterLink to="/" class="nav-item flex justify-center items-center gap-1">
            <img src="../icons/home.svg" alt="home" />
            Főoldal
          </RouterLink>
        </li>
        <li
          id="faq-link"
          :class="{ 'activebtn-faq': isHomeActive, 'inactivebtn-faq': !isHomeActive }"
          class="nav-item flex justify-center items-center gap-1"
        >
          <RouterLink to="/faq" class="nav-item flex justify-center items-center gap-1">
            <img src="../icons/question.svg" alt="question" />
            FAQ
          </RouterLink>
        </li>
        <li
          id="contact-link"
          :class="{
            'activebtn-contact': isHomeActive,
            'inactivebtn-contact': !isHomeActive,
          }"
          class="nav-item flex justify-center items-center gap-1"
        >
          <RouterLink to="#" class="nav-item flex justify-center items-center gap-1">
            <img src="../icons/live.svg" alt="message" />
            Kapcsolat
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
