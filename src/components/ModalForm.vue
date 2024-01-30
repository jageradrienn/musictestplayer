<template>
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
    <button
      type="submit"
      class="submit-btn hover:bg-gradient-to-r from-linearGreen to-linearPurple hover:drop-shadow-xl"
    >
      <span><img src="../../src/components/icons/sms.svg" alt="Sms" /></span>
      <span>Küldés</span>
    </button>
  </form>
</template>
