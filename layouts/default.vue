<template>
  <AppLoader @loadingDone="enableScroll" />
  <!-- Desktop: Split screen layout -->
  <div class="flex md:h-screen w-full">
    <div
      class="hidden md:block md:w-3/5 h-full md:fixed left-0 top-0 overflow-hidden"
    >
      <PhotoCarousel />
    </div>
    <div class="md:w-2/5 md:ml-auto md:overflow-y-auto">
      <slot />
    </div>
  </div>
</template>

<script>
import PhotoCarousel from "@/components/PhotoCarousel.vue";
import AppLoader from "@/components/AppLoader.vue";

export default {
  components: {
    PhotoCarousel,
    AppLoader,
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  methods: {
    disableScroll() {
      // Save current scroll position
      this.scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // Disable scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
    },

    enableScroll() {
      // Re-enable scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      // Restore scroll position
      window.scrollTo(0, this.scrollPosition);
    },
  },

  mounted() {
    this.disableScroll();
  },
};
</script>
