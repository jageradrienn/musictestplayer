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
    <nav class="p-6">
      <ul
        class="flex justify-center items-center gap-5 flex-col sm:flex-wrap, sm:flex-row"
      >
        <li>
          <RouterLink
            to="/"
            class="nav-item activebtn flex justify-center items-center gap-1"
          >
            <Home />
            Főoldal
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/faq"
            class="nav-item inactivebtn flex justify-center items-center gap-1"
          >
            <Live />
            FAQ
          </RouterLink>
        </li>
        <li class="nav-item flex justify-center items-center gap-1" id="contact">
          <RouterLink
            to="/faq"
            class="nav-item inactivebtn flex justify-center items-center gap-1"
          >
            <Message />
            Kapcsolat
          </RouterLink>
        </li>
      </ul>

      <!--   <button
        class="nav-item activebtn flex justify-center items-center gap-1"
        type="button"
      ></button>
      <button
        class="nav-item flex justify-center items-center gap-1"
        type="button"
      ></button>
      <button
        class="nav-item flex justify-center items-center gap-1"
        type="button"
        id="contact"
      ></button> -->
    </nav>
  </header>
</template>
