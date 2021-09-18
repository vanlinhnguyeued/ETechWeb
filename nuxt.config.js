export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ETech Game',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/styles/index.scss',
    '~/assets/fonts/Montserrat.scss',
    '~/assets/fonts/PlayfairDisplay.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vue-slick-carousel.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'vi-vn', iso: 'vi-vn', file: 'vi.js' },
      { code: 'en-us', iso: 'en-us', file: 'en.js' },
    ],
    lazy: true,
    langDir: 'i18n/',
    defaultLocale: 'en-us',
    vueI18nLoader: true,
    detectBrowserLanguage: false,
    strategy: 'prefix',
    vueI18n: {
      fallbackLocale: 'en-us',
      fallbackRoot: true,
      silentFallbackWarn: true,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: ['~/assets/scss/_variables.scss', '~/assets/scss/_mixins.scss'],
  },

  loading: '~/components/loading/index.vue',
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white',
  },
  target: 'static',
  server: {
    host: '0.0.0.0',
  },
}
