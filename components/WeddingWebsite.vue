<template>
    <div class="min-h-screen bg-rose-50">
        <!-- Header -->
        <header class="bg-white shadow-sm py-4">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-serif text-center text-rose-600">Sarah & Michael</h1>
                <p class="text-center text-rose-400">June 15, 2024</p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto px-4 py-8">
            <!-- Desktop Layout (side by side) -->
            <div class="hidden md:flex h-[calc(100vh-180px)] gap-6">
                <!-- Carousel (3/5 width) -->
                <div class="w-3/5 h-full rounded-lg overflow-hidden shadow-lg relative">
                    <!-- Carousel Images -->
                    <div class="h-full w-full flex transition-transform duration-300 ease-in-out"
                        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <div v-for="(slide, index) in slides" :key="index" class="h-full w-full flex-shrink-0">
                            <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover" />
                        </div>
                    </div>

                    <!-- Carousel Controls -->
                    <button @click="prevSlide"
                        class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-white">
                        &lt;
                    </button>
                    <button @click="nextSlide"
                        class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-white">
                        &gt;
                    </button>

                    <!-- Carousel Indicators -->
                    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        <button v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)"
                            class="w-3 h-3 rounded-full transition-all" :class="{
                                'bg-white w-6': currentSlide === index,
                                'bg-white/50': currentSlide !== index
                            }"></button>
                    </div>
                </div>

                <!-- Scrollable Sections (2/5 width) -->
                <div class="w-2/5 h-full overflow-y-auto space-y-6 scroll-smooth">
                    <section v-for="(section, index) in sections" :key="index" :id="'section-' + index"
                        class="bg-white p-6 rounded-lg shadow-md h-[calc((100vh-180px)/3)] flex flex-col justify-center">
                        <h2 class="text-2xl font-serif text-rose-600 mb-4">{{ section.title }}</h2>
                        <div v-html="section.content" class="text-gray-700"></div>
                    </section>
                </div>
            </div>

            <!-- Mobile Layout (stacked) -->
            <div class="md:hidden space-y-6">
                <!-- Carousel (full width) -->
                <div class="w-full h-64 rounded-lg overflow-hidden shadow-lg relative">
                    <!-- Carousel Images -->
                    <div class="h-full w-full flex transition-transform duration-300 ease-in-out"
                        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <div v-for="(slide, index) in slides" :key="index" class="h-full w-full flex-shrink-0">
                            <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover" />
                        </div>
                    </div>

                    <!-- Carousel Controls -->
                    <button @click="prevSlide"
                        class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-white text-sm">
                        &lt;
                    </button>
                    <button @click="nextSlide"
                        class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-white text-sm">
                        &gt;
                    </button>

                    <!-- Carousel Indicators -->
                    <div class="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                        <button v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)"
                            class="w-2 h-2 rounded-full transition-all" :class="{
                                'bg-white w-4': currentSlide === index,
                                'bg-white/50': currentSlide !== index
                            }"></button>
                    </div>
                </div>

                <!-- Sections (full width) -->
                <div class="space-y-6">
                    <section v-for="(section, index) in sections" :key="index" :id="'section-mobile-' + index"
                        class="bg-white p-6 rounded-lg shadow-md min-h-64 flex flex-col justify-center">
                        <h2 class="text-2xl font-serif text-rose-600 mb-4">{{ section.title }}</h2>
                        <div v-html="section.content" class="text-gray-700"></div>
                    </section>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-white py-4 mt-8">
            <div class="container mx-auto px-4 text-center text-gray-500">
                <p>We can't wait to celebrate with you!</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentSlide: 0,
            // Sample images - replace with your actual images
            slides: [
                {
                    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
                    alt: 'Engagement photo'
                },
                {
                    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                    alt: 'Couple at beach'
                },
                {
                    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
                    alt: 'Proposal moment'
                }
            ],
            sections: [
                {
                    title: 'Our Story',
                    content: `
              <p>We met in college during a mutual friend's birthday party. Michael spilled his drink on Sarah's dress, 
              and instead of getting mad, she laughed it off. That was the moment he knew she was special.</p>
              <p class="mt-2">After 5 years of dating, Michael proposed during a sunset hike at our favorite spot.</p>
            `
                },
                {
                    title: 'Wedding Details',
                    content: `
              <p><strong>Date:</strong> June 15, 2024</p>
              <p><strong>Time:</strong> 4:00 PM</p>
              <p><strong>Location:</strong> Rosewood Gardens, 1234 Love Lane</p>
              <p><strong>Attire:</strong> Semi-formal garden party</p>
            `
                },
                {
                    title: 'Registry',
                    content: `
              <p>Your presence at our wedding is the greatest gift of all. However, if you wish to contribute 
              to our new life together, we've registered at the following places:</p>
              <ul class="list-disc pl-5 mt-2">
                <li>Bed Bath & Beyond</li>
                <li>Amazon</li>
                <li>Honeymoon Fund</li>
              </ul>
            `
                }
            ],
            autoPlayInterval: null
        }
    },
    methods: {
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.resetAutoPlay();
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.resetAutoPlay();
        },
        goToSlide(index) {
            this.currentSlide = index;
            this.resetAutoPlay();
        },
        resetAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
            }
            this.startAutoPlay();
        },
        startAutoPlay() {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, 3000);
        }
    },
    mounted() {
        this.startAutoPlay();
    },
    beforeUnmount() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}
</script>

<style>
/* Custom scrollbar for sections */
.scrollable-sections::-webkit-scrollbar {
    width: 6px;
}

.scrollable-sections::-webkit-scrollbar-track {
    background: #fecdd3;
    border-radius: 10px;
}

.scrollable-sections::-webkit-scrollbar-thumb {
    background: #fb7185;
    border-radius: 10px;
}
</style>