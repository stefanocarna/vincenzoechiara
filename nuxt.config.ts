// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    server: {
      allowedHosts: ["7e12-2a01-827-245f-f700-c590-621-c893-3558.ngrok-free.app"],
    },
  },

  // plugins: [
  //   { src: '~/plugins/aos.js', mode: 'client' }
  // ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lugrasimo&family=Meow+Script&display=swap',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'"
        },
        // Second font family
        {
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Lugrasimo&family=Meow+Script&display=swap',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'"
        },
        // Second font family
        {
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Meow+Script&family=Passions+Conflict&family=Great+Vibes&family=Delius&family=Cormorant+Garamond&family=WindSong:wght@300;400;500;600&display=swap',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'"
        }
      ]
    }
  },

  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },

  modules: ['nuxt-aos']
})