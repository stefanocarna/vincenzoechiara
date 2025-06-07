<template>
  <div
    class="fixed w-full h-full scontainer shadow-lg overflow-hidden -z-20"
  ></div>

  <div class="min-h-screen overflow-hidden relative">
    <!-- Animated gradient background -->
    <!-- <div
      class="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient -z-20"
    ></div> -->

    <!-- Main content container -->
    <div class="relative mx-auto min-h-screen mcontainer bg-white">
      <!-- Your mobile content -->
      <div class="bg-ivory pb-8 overflow-hidden">
        <HeroSection />

        <WeddingNamesCard
          brideName="Vincenzo"
          groomName="e Chiara"
          subtext="vi invitano al loro matrimonio"
        />

        <p class="text-xl text-center my-8 px-4">
          vi invitano al loro matrimonio
        </p>

        <div class="relative overflow-visible z-10">
          <div
            class="flower flower-violet-1"
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-duration="600"
          >
            <img
              src="@/assets/images/flowers/gpink3.png"
              classs="w-full h-full object-cover"
            />
          </div>
          <div
            class="flower flower-rose-1"
            data-aos="zoom-in"
            data-aos-delay="150"
            data-aos-duration="600"
          >
            <img
              src="@/assets/images/flowers/wrose2.png"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="page-section page-section-left text-center text-xl">
          <WeddingDate />

          <p class="my-8 font-bold z-20">ore 16:30</p>

          <p class="text-xl">Santuario Madonna SS delle Grazie</p>

          <div class="location px-2">
            <img
              src="@/assets/images/church.jpg"
              alt="Description"
              class="rounded-md shadow-xl mb-4 mt-2"
            />
          </div>

          <a
            class="elegant-purple-btn z-20"
            href="https://www.google.com/maps/dir/?api=1&destination=Santuario+Madonna+SS+delle+Grazie&travelmode=driving"
            target="_blank"
          >
            Indicazioni
          </a>
        </div>

        <div class="relative overflow-visible z-10">
          <div class="flower flower-violet-2">
            <img
              src="@/assets/images/flowers/gpink1.png"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flower flower-rose-2">
            <img
              src="@/assets/images/flowers/wrose5.png"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <br />
        <br />

        <div class="page-section page-section-right text-xl">
          <!-- <WeddingDate /> -->

          <p class="text-center font-bold my-8">ore 19:30</p>
          <p class="text-center">seguiranno i festeggiamenti presso</p>
          <br />
          <p class="text-2xl">La Cascina 1899</p>

          <div class="location px-2">
            <img
              src="@/assets/images/cascina.jpg"
              alt="Description"
              class="rounded-md shadow-xl mb-4 mt-2"
            />
          </div>

          <a
            class="elegant-purple-btn z-20"
            href="https://www.google.com/maps/dir/?api=1&destination=38.310719, 16.372643&travelmode=driving"
            target="_blank"
          >
            Indicazioni
          </a>
        </div>

        <div class="relative overflow-visible z-10">
          <div class="flower flower-rose-3">
            <img
              src="@/assets/images/flowers/wrose3.png"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flower flower-violet-3">
            <img
              src="@/assets/images/flowers/gpink2.png"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <br />
        <br />

        <div class="flex flex-col items-center">
          <p class="text-xl text-center mt-24 mb-12 px-8">
            La vostra presenza al nostro matrimonio e' il dono piu' bello.
            Tuttavia se desiderate contribuire alla nostra nuova vita insieme un
            pensiero in busta sara' per noi un geso prezioso.
          </p>

          <DonationTag />

          <p class="text-xl text-center mt-24 mb-8 px-8">
            Abbiano scelto l'applicazione
            <span class="font-bold text-purple-800">WedShoot</span> per
            raccogliere tutti i momenti speciali del nostro matrimonio. Potete
            scaricarla gratuitamente e unirvi a noi per condividere foto e video
            della giornata. Per caricare le foto, utilizzate il codice evento:
          </p>
          <p class="mb-8">
            <span class="font-bold text-xl text-purple-800"
              >VINCENZOCHIARA2025</span
            >
          </p>

          <a
            v-if="isAndroid"
            href="https://play.google.com/store/search?q=wedshoot&c=apps"
            class="download-btn download-btn-android first-letter:bg-cover bg-center text-white font-bold py-4 px-10 rounded-lg shadow-md relative overflow-hidden group"
          >
          </a>
          <a
            v-if="isIOS"
            href="https://apps.apple.com/it/app/wedshoots/id660256196"
            class="download-btn download-btn-ios first-letter:bg-cover bg-center text-white font-bold py-4 px-10 rounded-lg shadow-md relative overflow-hidden group"
          >
          </a>

          <div
            class="w-full h-64 mt-24 mb-12 fade-container"
            data-aos="fade-in"
            data-aos-delay="150"
            data-aos-duration="600"
          >
            <img
              src="@/assets/images/hands.jpeg"
              class="w-full h-full object-cover fade-image"
            />
          </div>

          <p class="text-xl text-center mt-8 mb-4 px-8">
            Vi chiediamo di confermare la vostra presenza e il numero dei
            partecipanti entro il
          </p>
          <p class="text-xl text-center mb-8 px-8 font-bold text-purple-800">
            01 luglio 2025
          </p>

          <a
            class="elegant-purple-btn z-20"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfZ05dAQfAGg0IN6JRMaz86pt4qL0DtnLY00NxQJNqBTB_gqA/viewform?usp=header"
            target="_blank"
            >Conferma</a
          >

          <div class="bottom-space"></div>
        </div>
      </div>

      <div class="envelope fixed bottom-0 left-0 right-0 justify-center z-40">
        <div class="envelope-top mx-auto">
          <img
            src="@/assets/images/envelope-top.svg"
            alt="Fixed bottom image"
            class="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div class="stamp">
        <img src="@/assets/images/stamp.png" class="stamp-img object-cover" />
      </div>

      <div class="envelope fixed bottom-0 left-0 right-0 justify-center -z-10">
        <div class="envelope-bottom mx-auto">
          <img
            src="@/assets/images/envelope-bottom.svg"
            alt="Fixed bottom image"
            class="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DonationTag from "@/components/DonationTag.vue";
import HeroSection from "@/components/HeroSection.vue";
import WeddingDate from "@/components/WeddingDate.vue";
import WeddingNamesCard from "@/components/WeddingNamesCard.vue";

export default {
  components: {
    DonationTag,
    HeroSection,
    WeddingDate,
    WeddingNamesCard,
  },
  data() {
    return {
      isAndroid: false,
      isIOS: false,
    };
  },
  mounted() {
    this.detectOS();
  },
  methods: {
    detectOS() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Android detection
      if (/android/i.test(userAgent)) {
        this.isAndroid = true;
      }

      // iOS detection
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        this.isIOS = true;
      }
    },
    doAndroidAction() {
      alert("Redirecting to Google Play Store...");
      // Replace with your actual Android app download link or action
    },
    doIOSAction() {
      alert("Redirecting to Apple App Store...");
      // Replace with your actual iOS app download link or action
    },
  },
};
</script>

<style scoped>
/* Add this to your CSS file or style tag */
.animate-gradient {
  background-size: 300% 300%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.mcontainer {
  max-width: 34rem;
}

.scontainer {
  display: none;
  background-image: url("~/assets/images/bg/infinite-1.jpg");
  background-size: contain;
  background-repeat: repeat;
}

.location {
  -webkit-mask-image: radial-gradient(
    circle at 50% 60%,
    black 50%,
    rgba(0, 0, 0, 0.6) 50%
  );
  mask-image: radial-gradient(
    circle at 50% 60%,
    black 50%,
    rgba(0, 0, 0, 0.6) 50%
  );

  margin: 1rem auto;
  width: 100%;
}

.envelope {
  display: none;
}

@media (min-width: 34rem) {
  .scontainer {
    display: block;
  }

  .mcontainer {
    @apply rounded-lg;
    @apply p-4;
    @apply bg-purple-300;
  }

  .envelope {
    display: block;
  }
}

.envelope-top {
  width: 100%;
  max-width: 40rem;
}

.envelope-bottom {
  width: 100%;
  max-width: 40rem;
}

.stamp {
  display: none;
}

.stamp-img {
  width: 7rem;
  height: auto;
}

.bottom-space {
  width: 100%;
  height: 2rem;
}

@media (min-width: 34rem) {
  .stamp {
    z-index: 50;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 7rem;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
  }

  .bottom-space {
    height: 16rem;
  }
}
</style>
