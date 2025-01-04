// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/google-fonts", "nuxt-swiper" , "nuxt-aos"],
  aos: {
    // Initialize AOS
    once: true, // Animation happens only once
  },
    // Google Fonts Configuration
    googleFonts: {
      families: {
        "IBM Plex Sans Arabic": {
          weight: [400, 500, 600, 700],
        },
      },
    },
    app: {
      head: {
        title:"think tree",
        htmlAttrs: {
          lang: "ar",
          dir: "rtl",
        },
        link: [
          // { rel: "icon", type: "image/svg", href: "/favicon.svg" },
        ],
        script: [
    
        ],
      },
    },
    plugins:['~/plugins/Vue3Marquee.client.ts'],

  css: [
    "~/assets/styles/main.scss"
  ]
})