
import { matchBreadCrumbs } from './utils'

export default function ($t: any, path: string) {

  const items = [
    {
      label: $t('products.stream.breadCrumbs.overview'),
      href: '/Products/Stream/Overview',
      current: false
    },
    {
      label: $t('products.stream.breadCrumbs.player'),
      href: '/Products/Stream/Player',
      current: false
    },
    {
      label: $t('products.stream.breadCrumbs.mediaCage'),
      href: '/Products/Stream/MediaCage',
      current: false
    },
    {
      label: $t('products.stream.breadCrumbs.multiDRM'),
      href: '/Products/Stream/MultiDRM',
      current: false
    },
    {
      label: $t('products.stream.breadCrumbs.transcribeAI'),
      href: '/Products/Stream/TranscribeAl',
      current: false
    },
    {
      label: $t('products.stream.breadCrumbs.apiDocs'),
      href: '#',
      current: false
    }
  ]
  matchBreadCrumbs(items, path)
  return items
};



