<template>
  <!-- Second Section -->
  <section :class="getClass()" :style="getStyle()">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-center">{{ title }}</h2>
    </div>
    <div :class="getSlotClass()">
      <slot />
    </div>
    <!-- <div class="w-4/5">
            <img src="@/assets/images/sep.svg" class="w-full h-full object-cover">
        </div> -->
  </section>
</template>

<script>
export default {
  name: "SectionInfo",

  props: {
    specialBg: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },

  methods: {
    getClass() {
      var tClass =
        "min-h-screen p-12 flex flex-col items-center justify-center cream-bg";
      if (this.specialBg)
        tClass +=
          " bg-cover bg-center [background-image:linear-gradient(to_bottom,transparent_0%,transparent_80%,#fffcf0_95%),url('~/assets/images/front-bg.jpg')]";
      return tClass;
    },

    getSlotClass() {
      var tClass = "flex flex-col flex-auto w-full";
      if (this.center) tClass += " justify-center";
      return tClass;
    },

    getStyle() {
      return this.specialBg ? "" : "";
    },
  },
};
</script>
