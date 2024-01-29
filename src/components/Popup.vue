<script setup></script>

<template>
  <div id="contact-popup" class="popupDiv relative">
    <div class="flex justify-center items-start">
      <h2 class="h2-heading pb-6">Kapcsolat</h2>
      <span class="absolute right-7 md:right-[3.75rem]"
        ><img src="../components/icons/close.svg" alt=""
      /></span>
    </div>
    <form class="w-full">
      <div class="mb-6">
        <label for="name">Név</label>
        <input
          type="text"
          name="name"
          class="bg-popupinput rounded-2xl w-full h-[40px] mt-2 md:h-[57px]"
        />
      </div>
      <div class="mb-6">
        <label for="e-mail">Email</label>
        <input
          type="email"
          name="e-mail"
          class="bg-popupinput rounded-2xl w-full h-[40px] mt-2 md:h-[57px]"
        />
      </div>
      <div class="mb-6">
        <label for="message">Üzenet</label>
        <input
          type="text"
          name="message"
          class="bg-popupinput rounded-2xl w-full h-60 mt-2 md:h-[210px]"
        />
      </div>
      <button type="submit" class="submit-btn">
        <span><img src="../../src/components/icons/sms.svg" alt="Sms" /></span>
        <span>Küldés</span>
      </button>
    </form>
  </div>
</template>
