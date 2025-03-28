
import { matchBreadCrumbs } from './utils'

export default function ($t: any, path: string) {

  const items = [
    {
      label: $t('resources.breadCrumbs.CDN'),
      href: '/resources/academy/cdn',
      current: false
    },
    {
      label: $t('resources.breadCrumbs.DNS'),
      href: '/resources/academy/dns',
      current: false
    },
    {
      label: $t('resources.breadCrumbs.Networking'),
      href: '/resources/academy/networking',
      current: false
    },
    {
      label: $t('resources.breadCrumbs.Security'),
      href: '/resources/academy/security',
      current: false
    },
    {
      label: $t('resources.breadCrumbs.HTTP'),
      href: '/resources/academy/http',
      current: false
    },
    {
      label: $t('resources.breadCrumbs.Streaming'),
      href: '/resources/academy/streaming',
      current: false
    },
    {
      label: $t('resources.breadCrumbs.Computing'),
      href: '/resources/academy/computing',
      current: false
    }
  ]
  matchBreadCrumbs(items, path)
  return items
};

