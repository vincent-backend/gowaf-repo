// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/common.css',
    '~/assets/css/global.less',
  ],
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  app: {
    head: {
      title: 'Polyfill Cloud',
    },
  },
});