<script setup>
import LogoIpsum from "@/components/icons/logo.vue";
import Home from "@/components/icons/home.vue";
import Live from "@/components/icons/livesupport.vue";
import Message from "@/components/icons/message.vue";
</script>

<template>
  <header class="header-wrapper">
    <div>
      <LogoIpsum class="mx-auto" />
    </div>
    <nav
      class="flex justify-center items-center gap-5 flex-col sm:flex-wrap, sm:flex-row"
    >
      <button class="nav-item activebtn" type="button">
        <Home />
        <RouterLink to="/">Főoldal</RouterLink>
      </button>
      <button class="nav-item" type="button">
        <Live />
        <RouterLink to="/faq">FAQ</RouterLink>
      </button>
      <button class="nav-item" type="button" id="contact">
        <Message />
        <span>Kapcsolat</span>
      </button>
    </nav>
  </header>
</template>
