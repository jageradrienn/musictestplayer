<template>
  <header class="relative">
    <div>
      <LogoIpsum class="mx-auto" />
    </div>
    <nav class="p-6 relative z-40" id="menu">
      <ul class="flex justify-center items-center gap-1 sm:gap-5">
        <li
          id="home"
          class="nav-item active-btn flex justify-center items-center gap-1"
          @click="
            {
              toggleMenu('home');
            }
          "
        >
          <RouterLink to="/" class="nav-item flex justify-center items-center gap-1">
            <HomeIcon :alt="home" />
            Főoldal
          </RouterLink>
        </li>
        <li
          id="faq"
          class="nav-item inactive-btn flex justify-center items-center gap-1"
          @click="
            {
              toggleMenu('faq');
            }
          "
        >
          <RouterLink to="/faq" class="nav-item flex justify-center items-center gap-1">
            <QuestionIcon :alt="question" />
            FAQ
          </RouterLink>
        </li>
        <li
          id="contact"
          class="nav-item inactive-btn flex justify-center items-center gap-1"
          @click="
            {
              toggleMenu('contact');
              showModal = true;
            }
          "
        >
          <RouterLink to="#" class="nav-item flex justify-center items-center gap-1">
            <MessageIcon :alt="message" />
            Kapcsolat
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div>
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
import MessageIcon from "@/components/icons/live.vue";
import { onMounted, ref } from "vue";

const showModal = ref(false);
const modalTitle = "Kapcsolat";

const toggleMenu = (activeId) => {
  const MenuItems = document.querySelectorAll(".nav-item");
  MenuItems.forEach((item) => {
    item.classList.contains("active-btn") && item.id !== activeId
      ? item.classList.replace("active-btn", "inactive-btn")
      : null;
    item.id === activeId ? item.classList.replace("inactive-btn", "active-btn") : null;
  });
};
</script>
