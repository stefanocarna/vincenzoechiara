<template>
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
        <!-- Video background with online placeholder -->
        <video autoplay muted loop class="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover">
            <source src="https://2050today.org/wp-content/uploads/2020/07/Video-Placeholder.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        <!-- Content -->
        <div class="relative z-20 text-center text-white px-4 pt-[rem]">
            <h1 class="text-9xl mb-4 tracking-wider font-sans">
                Vincenzo <span class="text-rose-200">&</span> Chiara
            </h1>
            <p class="text-6xl mb-8">6 Agosto 2025</p>
            <p class="text-6xl mb-8">16:30</p>
            <p class="text-6xl mb-8">Roccella Jonica</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'WeddingHeader'
}
</script>