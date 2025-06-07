<template>
  <div class="hero-section">
    <div
      class="relative w-full max-w-xl mx-auto hero-image-container"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @mouseenter="pauseAutoSlide"
      @mouseleave="resumeAutoSlide"
    >
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        ref="slider"
      >
        <div v-for="(img, i) in images" :key="i" class="w-full flex-shrink-0">
          <img
            :src="img"
            class="hero-image select-none pointer-events-none"
            draggable="false"
          />
        </div>
      </div>
      <div class="image-fade"></div>
      <!-- Dots -->
      <!-- <div
        class="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30"
      >
        <button
          v-for="(img, idx) in images"
          :key="idx"
          class="w-2 h-2 rounded-full focus:outline-none"
          :class="
            currentIndex === idx ? 'bg-purple-500' : 'bg-purple-200 opacity-70'
          "
          @click="goToSlide(idx)"
        />
      </div> -->
    </div>
    <!-- <div class="hero-image-container">
      <img src="@/assets/images/pic.jpg" class="hero-image" />
    </div> -->

    <div class="hero-caption-container">
      <div class="hero-caption">"Ovunque tu sarai, io sarò"</div>
    </div>

    <div class="torn">
      <img src="@/assets/images/torn.png" class="w-full h-full object-cover" />
    </div>

    <div class="stamp">
      <img src="@/assets/images/stamp.png" class="stamp-img object-cover" />
    </div>
  </div>
</template>

<script>
import c0 from "@/assets/carousel/c0.jpeg";
import c1 from "@/assets/carousel/c1.jpeg";
import c2 from "@/assets/carousel/c2.jpeg";
import c3 from "@/assets/carousel/c3.jpeg";
import c4 from "@/assets/carousel/c4.jpeg";
import c5 from "@/assets/carousel/c5.jpeg";
import c6 from "@/assets/carousel/c6.jpeg";
import c7 from "@/assets/carousel/c7.jpeg";
import c8 from "@/assets/carousel/c8.jpeg";
import c9 from "@/assets/carousel/c9.jpeg";
import c10 from "@/assets/carousel/c10.jpeg";
// import c11 from "@/assets/carousel/c11.jpeg";
// import c12 from "@/assets/carousel/c12.jpeg";
// import c13 from "@/assets/carousel/c13.jpeg";

export default {
  name: "AutoCarousel",
  props: {
    autoSlide: {
      type: Boolean,
      default: true,
    },
    autoSlideInterval: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      images: [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10], //, c11, c12, c13],
      currentIndex: 0,
      intervalId: null,
      touchStartX: 0,
      touchDeltaX: 0,
      isSwiping: false,
    };
  },
  computed: {
    realIndex() {
      // Map currentIndex (with clones) to real slide index for dots
      if (this.currentIndex === 0) return this.images.length - 1;
      if (this.currentIndex === this.images.length + 1) return 0;
      return this.currentIndex - 1;
    },
    displayImagesCount() {
      // Images + 2 clones
      return this.images.length + 2;
    },
  },
  mounted() {
    if (this.autoSlide) {
      this.startAutoSlide();
    }
  },
  beforeDestroy() {
    this.clearAutoSlide();
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    goTo(index) {
      this.currentIndex = index;
    },
    startAutoSlide() {
      this.clearAutoSlide();
      this.intervalId = setInterval(this.next, this.autoSlideInterval);
    },
    clearAutoSlide() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    pauseAutoSlide() {
      this.clearAutoSlide();
    },
    resumeAutoSlide() {
      if (this.autoSlide) {
        this.startAutoSlide();
      }
    },
    onTouchStart(e) {
      this.isSwiping = true;
      this.touchStartX = e.touches[0].clientX;
      this.touchDeltaX = 0;
      this.pauseAutoSlide();
    },
    onTouchMove(e) {
      if (!this.isSwiping) return;
      this.touchDeltaX = e.touches[0].clientX - this.touchStartX;
    },
    onTouchEnd() {
      if (!this.isSwiping) return;
      const threshold = 50; // Minimum px to count as swipe
      if (this.touchDeltaX > threshold) {
        this.prev();
      } else if (this.touchDeltaX < -threshold) {
        this.next();
      }
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this.isSwiping = false;
      this.resumeAutoSlide();
    },
  },
};
</script>

<style scoped>
/* Hide scrollbar for slider */
::-webkit-scrollbar {
  display: none;
}

.torn {
  bottom: -0rem;
  position: absolute;
  width: 100%;
  height: auto;
}

@media (min-width: 240px) {
  .torn {
    bottom: -1rem;
  }
}

@media (min-width: 360px) {
  .torn {
    bottom: -2rem;
  }
}

@media (min-width: 480px) {
  .torn {
    bottom: -3rem;
  }
}

.stamp {
  position: absolute;
  width: 100%;
  height: auto;
}

.stamp-img {
  position: absolute;
  bottom: -3rem;
  right: 1rem;
  width: 7rem;
  height: auto;
}

@media (min-width: 34rem) {
  .stamp {
    display: none;
  }
}

.hero-section {
  position: relative;
  width: 100%;
  /* max-height: 50vh; */
}

.hero-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 50vh;

  object-fit: cover;
  object-position: center;
}

.image-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 1) 95%
  );
  pointer-events: none;
}

.hero-caption-container {
  display: flex;
  /* align-items: end; */
  position: absolute;
  bottom: 3rem;
  width: 100%;
}

.hero-caption {
  /* position: absolute; */
  /* bottom: 15%; */
  /* left: -20%; */
  /* width: 100%; */
  text-align: center;
  color: white;
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding: 0 2rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    /* height: 80vh; */
  }

  .hero-caption {
    font-size: 1rem;
    /* bottom: 20px; */
  }
}

@media (max-width: 480px) {
  .hero-caption {
    font-size: 0.9rem;
  }

  .image-fade {
    height: 80%;
  }
}
</style>
