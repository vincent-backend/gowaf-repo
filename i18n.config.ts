import en from '~/assets/langs/en';
import zh from '~/assets/langs/zh';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    zh,
  }
}))
