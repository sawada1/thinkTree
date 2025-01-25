// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [// "@nuxtjs/google-fonts",
    '@nuxtjs/tailwindcss', "nuxt-swiper", '@nuxtjs/critters', "nuxt-aos", 'nuxt-lazy-load', "@nuxtjs/i18n", "@nuxt/image", "@primevue/nuxt-module", "@nuxtjs/sitemap", "nuxt-gtag", "@nuxtjs/seo"],
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
    provider: "none",
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
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, height=device-height, initial-scale=1.0, user-scalable=no;user-scalable=0;'
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'thinkTree home - thinkTree' },
        { name: 'twitter:description', content: 'thinkTree is the best website to learn chess' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        // { rel: "icon", type: "image/svg", href: "/favicon.svg" },
      ],
      script: [
        {
          async: true,
          innerHTML: `
        !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1214734386356861');
fbq('track', 'PageView');
        `,
        },
        {
          async: true,
          innerHTML: `
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1214734386356861&ev=PageView&noscript=1"
/></noscript>
        `,
          
        },
      ],
    },
  },
  plugins: ['~/plugins/Vue3Marquee.client.ts'],

  css: [
    "~/assets/styles/main.scss"
  ]
})