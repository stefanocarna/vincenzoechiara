<template>
  <div class="oblique-section-wrap">
    <div class="oblique-section">
      <slot />
    </div>
    <div class="oblique-section-border"></div>
  </div>
</template>

<style>
.oblique-section {
  width: 100%;
  min-height: 300px;
  padding: 2rem;
  box-sizing: border-box;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* SVG background for the shape */
  background-image: url("@/assets/images/wpage-border.svg");
  background-repeat: no-repeat;
  background-position: right top; /* Touches right corner */

  /* Calculate height based on SVG aspect ratio */
  width: 100%;
  padding-bottom: 56.25%; /* Example: 16:9 aspect ratio (adjust based on your SVG) */

  /* Alternative if you know exact dimensions */
  /* height: calc(100vw * [svg-height]/[svg-width]); */

  background-size: 100% auto; /* Ensures full SVG is visible */

  filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.3));
}
</style>
