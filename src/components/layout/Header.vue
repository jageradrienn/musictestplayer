<template>
  <header class="relative">
    <div>
      <LogoIpsum class="mx-auto" />
    </div>
    <nav class="p-6 relative z-40" id="menu">
      <ul class="flex justify-center items-center gap-1 sm:gap-5">
        <li
          id="home-link"
          class="nav-item active-btn flex justify-center items-center gap-1"
        >
          <RouterLink to="/" class="nav-item flex justify-center items-center gap-1">
            <HomeIcon :alt="home" />
            Főoldal
          </RouterLink>
        </li>
        <li
          id="faq-link"
          class="nav-item inactive-btn flex justify-center items-center gap-1"
        >
          <RouterLink to="/faq" class="nav-item flex justify-center items-center gap-1">
            <QuestionIcon :alt="question" />
            FAQ
          </RouterLink>
        </li>
        <li
          id="contact-link"
          class="nav-item inactive-btn flex justify-center items-center gap-1"
          @click="showModal = true"
        >
          <RouterLink to="#" class="nav-item flex justify-center items-center gap-1">
            <MessageIcon :alt="message" />
            Kapcsolat
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div>
      <!--     <button @click="showModal = true">Modal megnyitása</button> -->
      <Popup
        :title="modalTitle"
        :isShowing="showModal"
        @update:isShowing="showModal = $event"
      >
        <ModalForm />
      </Popup>
    </div>
  </header>
</template>

<script setup>
import LogoIpsum from "@/components/icons/logo.vue";
import Popup from "@/components/Popup.vue";
import ModalForm from "@/components/ModalForm.vue";
import HomeIcon from "@/components/icons/home.vue";
import QuestionIcon from "@/components/icons/question.vue";
import MessageIcon from "@/components/icons/sms.vue";
import { onMounted, defineComponent, onBeforeUnmount, ref } from "vue";

const showModal = ref(false);
const modalTitle = "Kapcsolat";

const contactClick = ref(false);

const activeItem = ref("home");
const setActiveItem = (item) => {
  activeItem.value = item;
};

onMounted(() => {
  const changeMenu = (ev) => {
    var wasActive = false;
    let homeLink = document.querySelector("#home-link");
    let faqLink = document.querySelector("#faq-link");
    let contactLink = document.querySelector("#contact-link");

    if (ev.target.innerText === "Főoldal") {
      setActiveItem("home");
      wasActive = homeLink.classList.contains("active-btn");

      if (!wasActive) {
        homeLink.classList.replace("inactive-btn", "active-btn");
        // imgHome.setAttribute("src", "./src/components/icons/home2.vue");
        faqLink.classList.replace("active-btn", "inactive-btn");
        contactLink.classList.replace("active-btn", "inactive-btn");
      }
    } else if (ev.target.innerText === "FAQ") {
      setActiveItem("faq");
      wasActive = faqLink.classList.contains("active-btn");

      if (!wasActive) {
        faqLink.classList.replace("inactive-btn", "active-btn");
        //  imgFaq.setAttribute("src", "./src/components/icons/question2.vue");
        homeLink.classList.replace("active-btn", "inactive-btn");
        //  imgHome.setAttribute("src", "./src/components/icons/home2.vue");
        contactLink.classList.replace("active-btn", "inactive-btn");
        // imgContact.setAttribute("src", "./src/components/icons/contact.vue");
      }
    } else if (ev.target.innerText === "Kapcsolat") {
      popUpShow(activeItem);
      wasActive = contactLink.classList.contains("active-btn");

      if (!wasActive) {
        contactLink.classList.replace("inactive-btn", "active-btn");
        //   imgContact.setAttribute("src", "./src/components/icons/contact.vue");
        homeLink.classList.replace("active-btn", "inactive-btn");
        //   imgHome.setAttribute("src", "./src/components/icons/home2.vue");
        faqLink.classList.replace("active-btn", "inactive-btn");
      }
    }
  };

  menu.addEventListener("click", changeMenu);
});
</script>
