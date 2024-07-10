// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/common.css', '~/assets/css/global.less'],
  modules: ['@nuxtjs/i18n', '@element-plus/nuxt'],

  i18n: {
    vueI18n: './i18n.config.ts'
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/css/element-variables.scss" as element;`,
        },
      },
    },
  },

  elementPlus: {
    // icon: 'ElIcon',
    importStyle: 'scss',
    // themes: ['dark'],
  },

  app: {
    head: {
      title: 'Polyfill Cloud'
    }
  },

  compatibilityDate: '2024-07-09'
});