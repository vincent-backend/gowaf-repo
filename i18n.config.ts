import en from './assets/langs/en.json'
import de from './assets/langs/de.json'
import enAu from './assets/langs/en-au.json'
import enCa from './assets/langs/en-ca.json'
import enGb from './assets/langs/en-gb.json'
import enin from './assets/langs/en-in.json'
import es from './assets/langs/es.json'
import esla from './assets/langs/es-la.json'
import fr from './assets/langs/fr.json'
import it from './assets/langs/it.json'
import ja from './assets/langs/ja.json'
import ko from './assets/langs/ko.json'
import pl from './assets/langs/pl.json'
import ptbr from './assets/langs/pt-br.json'
import ru from './assets/langs/ru.json'
import zhtw from './assets/langs/zh-tw.json'
import zh from './assets/langs/zh.json'
import Cookies from 'js-cookie'



export default {
  legacy: false,
  locale: Cookies.get('lang') || 'en',
  fallbackLocale: 'en',
  detectBrowserLanguage: {
    useCookie: true,
    alwaysredirect: false,
  },
  messages: {
    de,
    'en-au': enAu,
    'en-ca': enCa,
    'en-gb': enGb,
    'en-in': enin,
    en,
    "es-la": esla,
    es,
    fr,
    it,
    ja,
    ko,
    pl,
    'pt-br': ptbr,
    ru,
    'zh-tw': zhtw,
    zh
  }
};
