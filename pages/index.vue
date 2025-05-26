<template>
  <div>
    <!-- Hero Section (full viewport height) -->
    <section
      class="md:hidden min-h-svh relative flex items-end justify-center p-8"
    >
      <!-- Background image -->
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="absolute inset-0 -z-10 transition-opacity duration-700"
        :class="{
          'opacity-100': currentIndex === index,
          'opacity-0': currentIndex !== index,
        }"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          class="w-full h-full object-cover"
        />
      </div>

      <div
        class="flex flex-col justify-center items-center w-full inset-0 bg-[radial-gradient(ellipse_at_center,rgba(77,77,77,0.7)_0%,transparent_60%)] text-white py-8"
      >
        <!-- <p class="flex-auto text-5xl text-right">Vincenzo</p>
        <p class="flex-1 text-3xl text-center mx-4">&</p>
        <p class="flex-auto text-5xl text-left">Chiara</p> -->

        <p class="text-5xl text-center">Vincenzo</p>
        <p class="text-2xl text-center mx-4">&</p>
        <p class="text-5xl text-center">Chiara</p>
      </div>
    </section>

    <SectionInfo :specialBg="true" :center="true">
      <div class="text-center max-w-2xl mx-auto x-text-brown font-sans">
        <h1 class="text-3xl md:text-5xl mb-4">Mercoledì, 6 Agosto 2025</h1>
        <h1 class="text-3xl md:text-5xl mb-12">ore 17:30</h1>
        <h1 class="text-3xl md:text-4xl mb-4">
          Santuario Madonna SS delle Grazie
        </h1>
        <h1 class="text-3xl md:text-4xl mb-4">Roccella Ionica</h1>
      </div>
    </SectionInfo>

    <SectionInfo title="Programma">
      <h2 class="font-serif text-2xl font-extrabold mb-8">Evento Primo</h2>
      <p class="font-serif text-xl text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p class="mb-8"></p>

      <h2 class="font-serif text-2xl font-extrabold mb-8">Evento Secondo</h2>
      <p class="font-serif text-xl text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p class="mb-8"></p>

      <h2 class="font-serif text-2xl font-extrabold mb-8">Evento Terzo</h2>
      <p class="font-serif text-xl text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </SectionInfo>

    <SectionInfo title="Partecipazione">
      <p class="font-serif text-xl text-gray-700 text-center">
        Your presence is enough of a present to us! But for those of you who are
        stubborn, we've put together a wish-list to help you out.
      </p>
    </SectionInfo>

    <SectionInfo title="Informazioni Utili">
      <p class="font-serif text-xl text-gray-700 text-center mb-16">
        For all our friends and family who have lots of questions, please check
        out our Q & A first!
      </p>

      <h1 class="font-serif text-xl font-extrabold mb-8">
        Entro quando dare la partecipazione?
      </h1>
      <p class="font-serif text-xl text-gray-700">
        Please RSVP by April 15th, so we can have an accurate headcount. :)
      </p>
    </SectionInfo>
  </div>
</template>

<script setup>
const services = [
  {
    icon: "🚀",
    title: "Fast Delivery",
    description:
      "Get your products faster than ever with our optimized logistics",
  },
  {
    icon: "🛡️",
    title: "Secure Payments",
    description: "100% secure payment processing with end-to-end encryption",
  },
  {
    icon: "🌟",
    title: "Premium Quality",
    description: "Only the highest quality products from trusted suppliers",
  },
];

import { ref, onMounted } from "vue";

import image0 from "@/assets/carousel/c0.jpeg";
import image1 from "@/assets/carousel/c1.jpeg";
import image2 from "@/assets/carousel/c2.jpeg";
import image3 from "@/assets/carousel/c3.jpeg";
import image4 from "@/assets/carousel/c4.jpeg";

const photos = [
  { src: image0, alt: "Description 0" },
  { src: image1, alt: "Description 1" },
  { src: image2, alt: "Description 2" },
  { src: image3, alt: "Description 3" },
  { src: image4, alt: "Description 4" },
  // Add more photos
];

import ItemInfo from "@/components/ItemInfo.vue";
import SectionInfo from "@/components/SectionInfo.vue";

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % photos.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + photos.length) % photos.length;
};

// Auto-advance carousel (optional)
onMounted(() => {
  setInterval(next, 5000);
});
</script>

<style scoped>
/* Ensure hero section is exactly viewport height */
.min-h-screen {
  min-height: 100vh;
}
</style>
