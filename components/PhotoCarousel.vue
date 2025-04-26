<template>
    <div class="h-full md:w-full relative bg-black">
        <!-- Carousel container with full size -->
        <div class="absolute inset-0 overflow-hidden">
            <!-- Carousel images -->
            <div v-for="(photo, index) in photos" :key="index" class="absolute inset-0 transition-opacity duration-500"
                :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }">
                <img :src="photo.src" :alt="photo.alt" class="w-full h-full object-cover">
            </div>
        </div>

        <!-- Navigation controls -->
        <button @click="prev"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition">
            &larr;
        </button>
        <button @click="next"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition">
            &rarr;
        </button>

        <!-- Indicators -->
        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            <button v-for="(photo, index) in photos" :key="'indicator-' + index" @click="currentIndex = index"
                class="w-3 h-3 rounded-full transition-all"
                :class="currentIndex === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'">
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import image0 from '@/assets/carousel/c0.jpeg'
import image1 from '@/assets/carousel/c1.jpeg'
import image2 from '@/assets/carousel/c2.jpeg'
import image3 from '@/assets/carousel/c3.jpeg'
import image4 from '@/assets/carousel/c4.jpeg'

const photos = [
    { src: image0, alt: 'Description 0' },
    { src: image1, alt: 'Description 1' },
    { src: image2, alt: 'Description 2' },
    { src: image3, alt: 'Description 3' },
    { src: image4, alt: 'Description 4' },
    // Add more photos
]

const currentIndex = ref(0)

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % photos.length
}

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + photos.length) % photos.length
}

// Auto-advance carousel (optional)
onMounted(() => {
    setInterval(next, 5000)
})
</script>

<style scoped>
/* Ensure no gaps around the image */
img {
    min-width: 100%;
    min-height: 100%;
}
</style>