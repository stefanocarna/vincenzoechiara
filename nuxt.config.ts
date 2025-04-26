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
          href: 'https://fonts.googleapis.com/css2?family=Lovers+Quarrel&family=Lugrasimo&family=Meow+Script&display=swap',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'"
        },
        // Second font family
        {
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:wght@300;400;500;600&display=swap',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'"
        }
      ]
    }
  }
})
