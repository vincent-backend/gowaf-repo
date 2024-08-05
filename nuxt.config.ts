import { fileURLToPath, URL } from 'url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/common.css', '~/assets/css/global.less'],
  modules: ['@nuxtjs/i18n', '@element-plus/nuxt', '@vueuse/nuxt',],
  alias: {
    '@types': fileURLToPath(new URL('./types', import.meta.url))
  },

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
    icon: 'ElIcon',
    importStyle: 'scss',
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  app: {
    head: {
      title: 'Gowaf Cloud'
    }
  },

  compatibilityDate: '2024-07-09',
  nitro: {
    output: {
      publicDir: "./dist/public",
      dir: "./dist",
      serverDir: "./dist/server",
    },
  }
});