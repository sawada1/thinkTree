// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [// "@nuxtjs/google-fonts",
    '@nuxtjs/tailwindcss', "nuxt-swiper", '@nuxtjs/critters' , "nuxt-aos", 'nuxt-lazy-load', "@nuxtjs/i18n", "@nuxt/image", "@primevue/nuxt-module", "@nuxtjs/sitemap", "nuxt-gtag", "@nuxtjs/seo"],
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
          darkModeSelector: '.my-app-dark',
          cssLayer: false
        }
      }
    },

  },

  critical: {
    inline: true,
    dimensions: [
      { width: 375, height: 667 }, // mobile
      { width: 1920, height: 1080 }, // desktop
    ],
    config: {
      // Default: 'media'
      preload: 'swap',
    },
  },

  render: {
    static: {
      maxAge: '1y', // Cache assets for 1 year
    },
  },

  image: {
    quality: 80,
    formats: ['webp', 'avif'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  // lazyLoad: {
  //   // These are the default values
  //   images: true,
  //   videos: true,
  //   audios: true,
  //   iframes: true,
  //   native: false,
  //   directiveOnly: false,

  //   // Default image must be in the public folder
  //   defaultImage: '/images/default-image.jpg',

  //   // To remove class set value to false
  //   loadingClass: 'isLoading',
  //   loadedClass: 'isLoaded',
  //   appendClass: 'lazyLoad',

  //   observerConfig: {
  //     // See IntersectionObserver documentation
  //   }
  // },
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
    legacy: false,

    detectBrowserLanguage: {
      useCookie: true, // Enable cookie usage
      cookieKey: "preferredLang", // Name of the cookie
      redirectOn: "root", // Redirect only on the root path
      alwaysRedirect: false, // Disable to avoid redirecting every visit
    },
  },
  app: {
    head: {
      title: "think tree",
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
      meta:[
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, height=device-height, initial-scale=1.0, user-scalable=no;user-scalable=0;'
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'thinkTree home - thinkTree' },
        { name: 'twitter:description', content: 'thinkTree is the best website to learn chess' },
      ],
      link: [
        // { rel: "icon", type: "image/svg", href: "/favicon.svg" },
      ],
      script: [

      ],
    },
  },
  plugins: ['~/plugins/Vue3Marquee.client.ts'],

  css: [
    "~/assets/styles/main.scss"
  ]
})