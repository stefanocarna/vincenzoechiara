<template>
  <div class="loading-container" :class="{ 'loading-complete': !loading }">
    <div>
      <img
        src="@/assets/images/animation/wedding.gif"
        class="w-44 h-44 object-cover"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    // Wait for both minimum time and page load
    setTimeout(() => {
      this.finishLoading();
    }, 2000);

    window.addEventListener("load", this.finishLoading);
  },
  beforeDestroy() {
    window.removeEventListener("load", this.finishLoading);
  },
  methods: {
    finishLoading() {
      this.loading = false;
      // Optional: remove from DOM after animation
      setTimeout(() => {
        this.$el.remove();
      }, 500);
      this.$emit("loadingDone");
    },
  },
};
</script>

<style>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease;

  margin: 0;
  /* height: 100vh; */
  background: radial-gradient(circle, white 30%, #fdd692 100%);
  background-attachment: fixed;
}

.loading-bar {
  width: 200px;
  height: 3px;
  background: #e0e0e0;
  position: relative;
  overflow: hidden;
}

.loading-bar::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 50%;
  background: #3498db;
  animation: loading 1.5s infinite ease-in-out;
}

.loading-complete {
  opacity: 0;
  pointer-events: none;
}

@keyframes loading {
  0% {
    left: -50%;
  }

  100% {
    left: 100%;
  }
}
</style>
