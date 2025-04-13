// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    "nuxt-swiper",
    "nuxt-aos",
    'nuxt-lazy-load',
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@primevue/nuxt-module",
    "nuxt-gtag",

  ],
  ssr: true,
  aos: {
    // Initialize AOS
    once: true, // Animation happens only once
  },
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true, // Automatically find and prerender linked pages
      failOnError: false, // Prevent build from failing if errors occur during prerendering
    },
  },
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
    strategy: "prefix_and_default",
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
      title: "Thinktree",
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
        { rel: "icon", type: "image/svg", href: "/favicon.ico" },
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
        {
          async: true,
          innerHTML: `
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
  ttq.load('CVRR33JC77U0VMU9BU10');
  ttq.page();
}(window, document, 'ttq');
        `,
          
        },
        {
          async: true,
          innerHTML: `
(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];
u.parentNode.insertBefore(r,u);})(window,document,
'https://sc-static.net/scevent.min.js');
snaptr('init', 'e0a33dd1-375f-434f-bfdb-031e997a5800', {});
snaptr('track', 'PAGE_VIEW');
        `,
          
        },
      ],
    },
  },
  plugins: ['~/plugins/Vue3Marquee.client.ts' , '~/plugins/vue-tel-input.ts'],

  css: [
    "~/assets/styles/main.scss"
  ]
})