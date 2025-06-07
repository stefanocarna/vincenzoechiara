<template>
  <div class="wedding-names-card bg-ivory">
    <div class="names-container">
      <div class="bride-name font-bold font-serif text-center text-6xl">
        Vincenzo
      </div>
      <div class="font-bold font-serif text-center text-2xl">&</div>
      <div class="groom-name font-bold font-serif text-center text-6xl">
        Chiara
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeddingNamesCard",
  props: {
    brideName: {
      type: String,
      default: "Sarah",
    },
    groomName: {
      type: String,
      default: "James",
    },
    subtext: {
      type: String,
      default: "Together forever • June 12, 2024",
    },
  },
};
</script>

<style scoped>
.wedding-names-card {
  padding-top: 3rem;
  padding-bottom: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  /* text-align: center; */
  font-family: "Playfair Display", serif;
  color: #5e454b;
  border-radius: 4px;
  max-width: 600px;
  margin: 0 auto;

  /* background-image: url("@/assets/images/torn.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top 0%; */
}

.names-container {
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  /* background-image: url("@/assets/images/amp.svg");
  background-repeat: no-repeat;
  background-size: 10%;
  background-position: center; */
}

.bride-name,
.groom-name {
  line-height: 1;
  font-weight: 400;
  letter-spacing: 1px;
}

.subtext {
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  color: #7a5c5c;
  border-top: 1px solid #e0d0c0;
  padding-top: 1rem;
  margin-top: 1rem;
  text-align: center;
}

/* Responsive adjustments */
/* @media (max-width: 768px) {
  .bride-name,
  .groom-name {
    font-size: 2.5rem;
  }

  .and-symbol {
    font-size: 1.5rem;
  }

  .subtext {
    font-size: 1rem;
  }
} */
</style>
