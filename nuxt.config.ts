// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [// "@nuxtjs/google-fonts",
  '@nuxtjs/tailwindcss', "nuxt-swiper", "nuxt-aos", "@nuxtjs/i18n", "@nuxt/image", "@primevue/nuxt-module", "@nuxtjs/sitemap", "nuxt-gtag", "@nuxtjs/seo"],
  aos: {
    // Initialize AOS
    once: true, // Animation happens only once
  },
  // sitemap: {
  //   hostname: 'https://www.example.com',
  // },
  // gtag: {
  //   id: 'G-XXXXXXXXXX', // Your Google Analytics ID
  // },
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    },
   
},
    // Google Fonts Configuration
    // googleFonts: {
    //   families: {
    //     "IBM Plex Sans Arabic": {
    //       weight: [400, 500, 600, 700],
    //     },
    //   },
    // },
    i18n: {
      locales: [
        {
          code: "en",
          dir: "ltr",
          name: "English",
          file: "en.json",
        },
        {
          code: "ar",
          dir: "rtl",
          name: "عربي",
          file: "ar.json",
        },
      ],
      defaultLocale: "ar",
      lazy: false,
      langDir: "lang",
      strategy: "prefix",
      legacy:false,
      
      detectBrowserLanguage: {
        useCookie: true, // Enable cookie usage
        cookieKey: "preferredLang", // Name of the cookie
        redirectOn: "root", // Redirect only on the root path
        alwaysRedirect: false, // Disable to avoid redirecting every visit
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