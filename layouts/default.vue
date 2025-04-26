<template>
    <!-- Desktop: Split screen layout -->
    <div class="flex md:h-screen w-full">
        <div class="md:w-3/5 h-full md:fixed left-0 top-0 overflow-hidden">
            <PhotoCarousel />
        </div>
        <div class="md:w-2/5 md:ml-auto md:overflow-y-auto">
            <slot />
        </div>
    </div>
</template>

<script setup>
import PhotoCarousel from '@/components/PhotoCarousel.vue'
</script>