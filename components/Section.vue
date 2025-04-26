<template>
    <div
        class="h-full section-bg-image p-8 flex flex-col rounded-xl shadow-md border border-rose-100 transform transition hover:scale-[1.02] hover:shadow-lg">
        <div v-if="decoratedLeft" class="absolute md:-top-14 md:-left-8 -top-10 -left-6 w-32 h-32 md:w-48 md:h-48 z-10">
            <img src="@/assets/images/flowers.svg" alt="Floral decoration" class="w-full h-full object-contain">
        </div>

        <div v-if="decoratedRight"
            class="absolute md:-top-14 md:-right-8 -top-10 -right-6 w-32 h-32 md:w-48 md:h-48 z-10 scale-x-[-1]">
            <img src="@/assets/images/flowers.svg" alt="Floral decoration" class="w-full h-full object-contain">
        </div>

        <div v-if="topImage" class="absolute top-5 left-0 w-24 h-24 md:w-24 md:h-24 z-10">
            <img :src="topImage" alt="Leaf decoration" class="w-full h-full object-contain">
        </div>

        <div class="text-center m-12">
            <h2 class="text-4xl font-serif font-bold x-text-purple">{{ title }}</h2>
        </div>

        <slot />

        <!-- Bottom-right decorative image (inside corner) -->
        <div v-if="bottomImage" class="absolute bottom-5 right-5 w-24 h-24 md:w-24 md:h-24 z-10">
            <img :src="bottomImage" alt="Leaf decoration" class="w-full h-full object-contain">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section',

    props: {
        decoratedLeft: {
            type: Boolean,
            default: true
        },
        decoratedRight: {
            type: Boolean,
            default: false
        },
        bottomImage: {
            type: String,
            default: ''
        },
        topImage: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
    }
}
</script>