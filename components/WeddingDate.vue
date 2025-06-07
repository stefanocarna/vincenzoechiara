<template>
  <div class="wedding-date z-20">
    <div class="day">6</div>
    <div class="month-year">
      <div class="month">Agosto</div>
      <div class="year">2025</div>
    </div>
  </div>
</template>

<style scoped>
.wedding-date {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Playfair Display", serif; /* Elegant font for weddings */
  color: #333; /* Or your wedding color scheme */
}

.day {
  font-size: 5rem; /* Large day number */
  font-weight: bold;
  margin-right: 1rem;
  line-height: 1;
}

.month-year {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.month {
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.year {
  font-size: 1.2rem;
  color: #666; /* Slightly lighter than the main color */
}

/* Optional: Add some decorative elements */
/* .wedding-date::before,
.wedding-date::after {
  content: "•";
  margin: 0 0.5rem;
  color: #d4af37;
} */
</style>
