<script setup>
import LogoIpsum from "@/components/icons/logo.vue";
import { onMounted, defineComponent, onBeforeUnmount } from "vue";

/* const contactClick = ref(false);
const isUpscroll = () => {
  return window.scrollY > 0;
};

const handleScroll = () => {
  upScroll.value = isUpscroll();
};

onMounted(() => {
  contact - link.addEventListener("click", ContactClick);
});

onBeforeUnmount(() => {
  contact - link.removeEventListener("scroll", handleScroll);
}); */

onMounted(() => {
  const changeMenu = (ev) => {
    var wasActive = false;
    let homeLink = document.querySelector("#home-link");
    let faqLink = document.querySelector("#faq-link");
    let contactLink = document.querySelector("#contact-link");

    if (ev.target.innerText === "Főoldal") {
      wasActive = homeLink.classList.contains("active-btn");

      if (!wasActive) {
        homeLink.classList.replace("inactive-btn", "active-btn");
        // imgHome.setAttribute("src", "./src/components/icons/home2.svg");
        faqLink.classList.replace("active-btn", "inactive-btn");
        contactLink.classList.replace("active-btn", "inactive-btn");
      }
    } else if (ev.target.innerText === "FAQ") {
      wasActive = faqLink.classList.contains("active-btn");

      if (!wasActive) {
        faqLink.classList.replace("inactive-btn", "active-btn");
        //  imgFaq.setAttribute("src", "./src/components/icons/question2.svg");
        homeLink.classList.replace("active-btn", "inactive-btn");
        //  imgHome.setAttribute("src", "./src/components/icons/home2.svg");
        contactLink.classList.replace("active-btn", "inactive-btn");
        // imgContact.setAttribute("src", "./src/components/icons/contact.svg");
      }
    } else if (ev.target.innerText === "Kapcsolat") {
      wasActive = contactLink.classList.contains("active-btn");

      if (!wasActive) {
        contactLink.classList.replace("inactive-btn", "active-btn");
        //   imgContact.setAttribute("src", "./src/components/icons/contact.svg");
        homeLink.classList.replace("active-btn", "inactive-btn");
        //   imgHome.setAttribute("src", "./src/components/icons/home2.svg");
        faqLink.classList.replace("active-btn", "inactive-btn");
      }
    }
  };

  menu.addEventListener("click", changeMenu);
});
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
          class="nav-item active-btn flex justify-center items-center gap-1"
        >
          <RouterLink to="/" class="nav-item flex justify-center items-center gap-1">
            <img src="../icons/home.svg" alt="home" id="imgHome" />
            Főoldal
          </RouterLink>
        </li>
        <li
          id="faq-link"
          class="nav-item inactive-btn flex justify-center items-center gap-1"
        >
          <RouterLink to="/faq" class="nav-item flex justify-center items-center gap-1">
            <img src="../icons/question.svg" alt="question" id="imgFaq" />
            FAQ
          </RouterLink>
        </li>
        <li
          id="contact-link"
          class="nav-item inactive-btn flex justify-center items-center gap-1"
        >
          <RouterLink to="#" class="nav-item flex justify-center items-center gap-1">
            <img src="../icons/contact.svg" alt="message" id="imgContact" />
            Kapcsolat
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
