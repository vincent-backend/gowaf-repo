import { fileURLToPath, URL } from 'url';
import ViteRequireContext from '@originjs/vite-plugin-require-context';
import path from 'path';

const isPord = process.env.NUXT_ENVIRONMENT === 'production'
console.log("当前环境是否为 Pord", isPord)
const publicAssets = isPord ? [
  {
    baseURL: "images",
    dir: "public/images",
    maxAge: 3600, // 7 days
  },
  {
    baseURL: "_nuxt",
    dir: "public/_nuxt",
    maxAge: 3600, // 7 days
  },
] : []
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/common.css', '~/assets/css/global.less'],
  modules: ['@nuxtjs/i18n', '@element-plus/nuxt', '@vueuse/nuxt',],
  alias: {
    '@types': fileURLToPath(new URL('./types', import.meta.url)),
    'vue3-country-flag': path.resolve(__dirname, 'node_modules/vue3-country-intl/lib/vue3CountryFlag.esm.min.js'),
  },
  // experimental: {
  //   scanPageMeta: true,
  // },
  i18n: {
    strategy: 'prefix_except_default',
    // strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      'de',
      'en-au',
      'en-ca',
      'en-gb',
      'en-in',
      'en',
      "es-la",
      'es',
      'fr',
      'it',
      'ja',
      'ko',
      'pl',
      'pt-br',
      'ru',
      'zh-tw',
      'zh'
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
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
    plugins: [
      ViteRequireContext(),
    ],
    build: {
      assetsInlineLimit:  0,
    },
    resolve: {
      alias: {
        // 添加别名，将导入路径映射到实际路径
        'vue3-country-flag': path.resolve(__dirname, 'node_modules/vue3-country-intl/lib/vue3CountryFlag.esm.min.js'),
      }
    }
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
      title: 'Gowaf Cloud',
      viewport: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'
    }
  },
  devServer: {
    port: 8004,
    host: '0.0.0.0',
  },
  compatibilityDate: '2024-07-09',
  // routeRules: {
  //   '/_nuxt/*': { cache: { maxAge: 60 * 60 } }
  // },
  nitro: {
    output: {
      publicDir: "./dist/public",
      dir: "./dist",
      serverDir: "./dist/server",
    },
    compressPublicAssets: true,
    publicAssets: publicAssets
  }
});