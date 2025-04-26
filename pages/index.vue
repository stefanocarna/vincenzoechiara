<template>
    <div>
        <!-- Hero Section (full viewport height) -->
        <section class="md:hidden min-h-screen relative flex items-end justify-center p-8">
            <!-- Background image -->
            <div v-for="(photo, index) in photos" :key="index" class="absolute inset-0 transition-opacity duration-500"
                :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }">
                <img :src="photo.src" :alt="photo.alt" class="w-full h-full object-cover">
            </div>

            <div class="text-white mb-12">
                <h1 class="text-6xl text-center">Vincenzo</h1>
                <h1 class="text-4xl text-center">&</h1>
                <h1 class="text-6xl text-center">Chiara</h1>
            </div>
        </section>

        <section class="min-h-dvh relative flex items-center justify-center p-8">
            <!-- Background image -->
            <div class="absolute inset-0 -z-10">
                <img src="@/assets/images/front-bg.jpg" alt="Background" class="w-full h-full object-cover">
            </div>

            <!-- Centered content -->
            <div class="text-center max-w-2xl mx-auto x-text-brown font-sans">
                <h1 class="text-3xl md:text-5xl mb-4">Mercoledì, 6 Agosto 2025</h1>
                <h1 class="text-3xl md:text-5xl mb-12">ore 17:30</h1>
                <h1 class="text-3xl md:text-4xl mb-4">Santuario Madonna SS delle Grazie</h1>
                <h1 class="text-3xl md:text-4xl mb-4">Roccella Ionica</h1>
                <!-- <p class="text-xl md:text-4xl mb-8">A compelling subheading that describes your value proposition</p> -->
            </div>
        </section>

        <!-- Second Section -->
        <section class="min-h-screen p-12 bg-white flex items-center">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-4xl font-bold mb-12 text-center">Our Services</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="(service, index) in services" :key="index"
                        class="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
                        <div class="text-blue-500 text-4xl mb-4">{{ service.icon }}</div>
                        <h3 class="text-2xl font-semibold mb-3">{{ service.title }}</h3>
                        <p class="text-gray-600">{{ service.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Third Section -->
        <section class="min-h-screen p-12 bg-gray-100 flex items-center">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-8">About Us</h2>
                <p class="text-xl text-gray-700 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit
                    arcu sed erat molestie vehicula.
                </p>
                <div class="flex justify-center space-x-4">
                    <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                        Learn More
                    </button>
                    <button class="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const services = [
    {
        icon: '🚀',
        title: 'Fast Delivery',
        description: 'Get your products faster than ever with our optimized logistics'
    },
    {
        icon: '🛡️',
        title: 'Secure Payments',
        description: '100% secure payment processing with end-to-end encryption'
    },
    {
        icon: '🌟',
        title: 'Premium Quality',
        description: 'Only the highest quality products from trusted suppliers'
    },
]

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
/* Ensure hero section is exactly viewport height */
.min-h-screen {
    min-height: 100vh;
}
</style>