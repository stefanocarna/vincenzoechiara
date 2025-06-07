<template>
  <div class="donation-tag-container">
    <div class="flower flower-violet-4">
      <img
        src="@/assets/images/flowers/gpink4.png"
        classs="w-full h-full object-cover"
      />
    </div>
    <div class="flower flower-rose-4">
      <img
        src="@/assets/images/flowers/wrose1.png"
        classs="w-full h-full object-cover"
      />
    </div>
    <div class="donation-tag bg-purple-200 w-full m-2">
      <div class="detail-row">
        <span class="detail-label text-lg text-gray-600">Iban</span>
        <span class="detail-value text-xl text-purple-800"
          >IT1234567890123456</span
        >
      </div>
      <div class="detail-row">
        <span class="detail-label text-lg text-gray-600">Intestatario</span>
        <span class="detail-value text-xl text-purple-800">Chiara Carna'</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.donation-tag-container {
  position: relative;

  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: linear-gradient(to right, #f3e9ff, #d1b6e1);
  border-radius: 1rem;
  box-shadow: 0 4px 1rem rgba(122, 78, 139, 0.2);
}

.donation-tag {
  position: relative;
  /* background: #6a437a;
  background-image: url("@/assets/images/flower-large.svg"); */
  background-repeat: no-repeat;
  background-size: 50% auto;
  background-position: bottom 15% center;
  /* background: #d1b6e1; */
  /* border-radius: 8px; */
  padding: 1.5rem 1rem;
  box-shadow: 0 10px 30px rgba(122, 78, 139, 0.2);
  border: 1px solid #e8d5f2;
  font-family: "Montserrat", sans-serif;
  min-height: 10rem;
  max-width: 70%;

  border-radius: 30%;
}

@media (max-width: 400px) {
  .donation-tag {
    max-width: 80%;
    padding: 1rem 0.5rem;
  }
}

.envelope-flap {
  position: absolute;
  top: -10px;
  right: 20px;
  width: 60px;
  height: 20px;
  background: #f3e9ff;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
  border: 1px solid #e8d5f2;
  border-bottom: none;
  z-index: 2;
}

.tag-title {
  font-family: "Playfair Display", serif;
  color: #d1b6e1;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 15px;
  font-weight: 500;
}

.divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #d4af37, transparent);
  margin: 10px 0 20px;
}

.account-details {
  background: white;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.detail-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.detail-row:last-child {
  margin-bottom: 0;
}

/* Animation on hover */
/* .donation-tag:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(122, 78, 139, 0.3);
  transition: all 0.3s ease;
} */
</style>
