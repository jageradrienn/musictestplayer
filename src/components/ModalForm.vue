<template>
  <form class="w-full">
    <div class="mb-6">
      <label for="name">Név</label>
      <input
        type="text"
        name="name"
        class="bg-popupinput form-input"
        required
        placeholder="Boris Brejcha"
      />
    </div>
    <div class="mb-6">
      <label for="e-mail">Email</label>
      <input
        type="email"
        name="e-mail"
        class="bg-popupinput form-input"
        required
        placeholder="boris.brejcha@gmail.com"
      />
    </div>
    <div class="mb-6">
      <label for="message">Üzenet</label>
      <textarea
        id="message"
        placeholder="Üzenet"
        class="bg-popupinput form-text-area"
        rows="8"
        required
      ></textarea>
    </div>
    <button
      type="submit"
      class="submit-btn hover:bg-gradient-to-r from-linearGreen to-linearPurple hover:drop-shadow-xl"
    >
      <span>
        <SmsIcon :alt="Sms" />
      </span>
      <span>Küldés</span>
    </button>
  </form>
</template>

<script setup>
import SmsIcon from "@/components/icons/sms.vue";
</script>
