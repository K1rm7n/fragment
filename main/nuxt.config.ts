// import eslint from 'vite-plugin-eslint'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://devtools.nuxtjs.org/guide
    '@nuxt/devtools', // https://vueuse.org/functions.html
    '@vueuse/nuxt', // https://tailwindcss.com/docs/installation
    '@nuxtjs/tailwindcss', // https://github.com/nuxt-community/device-module
    '@nuxtjs/device', // https://vite-pwa-org.netlify.app/frameworks/nuxt.html
    '@vite-pwa/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt', // https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
    '@pinia-plugin-persistedstate/nuxt', // 'nuxt-security', // https://nuxt-security.vercel.app/getting-started/setup
    // https://github.com/nuxt-modules/icon
    'nuxt-icon', // https://image.nuxt.com/get-started/installation
    '@nuxt/image', // '@nuxtseo/module', // https://nuxtseo.com/nuxt-seo/getting-started/installation
    /* packages */
    // https://v8.i18n.nuxtjs.org/getting-started/setup
    '@nuxtjs/i18n' /* modules */,
    // https://github.com/P4sca1/nuxt-headlessui
    'nuxt-headlessui', // https://github.com/cpreston321/nuxt-swiper
    'nuxt-swiper',
    '@nuxtjs/seo',
  ],
  compatibilityDate: '2024-07-29',
  ssr: true, // if app for mobile or desktop set to false
  devtools: {
    timeline: {
      enabled: true,
    },

    enabled: true,
  },
  site: {
    splash: false,
    // url: 'https://example.com', // set url for sitemap generation
    titleSeparator: '|',
    name: 'Fragment Studio',
    description:
      'Fragment Studio specializes in high-quality dubbing and voice-over services for films, TV series, anime, and video games. Our expert team offers comprehensive audio solutions, including editing, mixing, and sound design, ensuring a perfect sound experience tailored to international audiences. Explore our services and let us bring your project to life with professional sound and exceptional talent.',
    defaultLocale: 'en',
  },
  spaLoadingTemplate: false,
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL ? process.env.API_URL : 'http://0.0.0.0:8055', // get from environment
      cookieMaxAge: 60 * 24 * 60 * 60 * 1000, // REFRESH_TOKEN_TTL in .env
      devtools: true,
    },
  },
  image: {
    directus: {
      baseURL: process.env.API_URL
        ? process.env.API_URL + '/assets'
        : 'http://0.0.0.0:8055' + '/assets', // get api from environment
    },
  },
  // security: {
  //   headers: {
  //     crossOriginEmbedderPolicy: false, // No needed
  //     contentSecurityPolicy: false, // No needed
  //   },
  //   /* secirity options */
  //   hidePoweredBy: true,
  // },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: '%pageTitle %siteName — Professional voiceover studio',
    },
    // rootId: 'nexus',
  },
  tailwindcss: {
    configPath: 'tailwind.config',
  },

  i18n: {
    /* language settings */
    locales: [
      /* locales */
      { file: 'en.json', iso: 'en-GB', name: 'en', code: 'en' },
      { file: 'ua.json', iso: 'uk-UA', name: 'ua', code: 'ua' },
    ],
    detectBrowserLanguage: {
      fallbackLocale: 'en',
      cookieKey: 'locale',
      useCookie: true,
    },
    strategy: 'prefix_except_default',
    /* language vue settings */
    vueI18n: './i18n.config.ts', // vue config
    langDir: 'locales/',
    defaultLocale: 'en',
    lazy: true,
  },

  swiper: {
    /* swiper options */
    prefix: 'Swiper',
    styleLang: 'css',
  },

  headlessui: {
    prefix: '',
  },

  pwa: {
    /* pwa options */
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        // moduleResolution: 'Node16',
      },
    },
    typeCheck: false,
  },
  nitro: {
    prerender: {
      ignore: ['/protected'], // ignore protected route
    },
  },
  vite: {
    // plugins: [eslint()],
  },
})
