
import { matchBreadCrumbs } from './utils'

export default function ($t: any, path: string) {

  const items = [
    {
      label: $t('products.cdn.breadCrumbs.overview'),
      href: '/Products/Cdn/Overview',
      current: false
    },
    {
      label: $t('products.cdn.breadCrumbs.features'),
      href: '/Products/Cdn/Features',
      current: false
    },
    {
      label: $t('products.cdn.breadCrumbs.permaCache'),
      href: '/Products/Cdn/PermaCache',
      current: false
    },
    {
      label: $t('products.cdn.breadCrumbs.safehop'),
      href: '/Products/Cdn/SafeHop',
      current: false
    },
    {
      label: $t('products.cdn.breadCrumbs.regions'),
      href: '#',
      current: false,
      children: [
        {
          label: $t('products.cdn.breadCrumbs.Europe'),
          href: '/Products/Storage/Europe',
          current: false
        },
        {
          label: $t('products.cdn.breadCrumbs.North_America'),
          href: '/Products/Storage/NorthAmerica',
          current: false
        },
        {
          label: $t('products.cdn.breadCrumbs.Asia'),
          href: '/Products/Storage/Asia',
          current: false
        },
        {
          label: $t('products.cdn.breadCrumbs.Latin_America'),
          href: '/Products/Storage/LatinAmerica',
          current: false
        },
        {
          label: $t('products.cdn.breadCrumbs.Australia'),
          href: '/Products/Storage/Australia',
          current: false
        },
        {
          label: $t('products.cdn.breadCrumbs.AfriceMiddleEast'),
          href: '/Products/Storage/AfriceMiddleEast',
          current: false
        }
      ]
    },
    {
      label: $t('products.cdn.breadCrumbs.comparison'),
      href: '#',
      current: false,
      children: [
        {
          label: $t('products.cdn.breadCrumbs.AWS'),
          href: '/Products/Cdn/comparison/aws',
          current: false
        },
        {
          label: $t('products.cdn.breadCrumbs.cacheFly'),
          href: '/Products/Cdn/comparison/cacheFly',
          current: false
        },
        {
          label: $t('products.cdn.breadCrumbs.CDN77'),
          href: '/Products/Cdn/comparison/CDN77',
          current: false
        },
        {
          label: $t('products.cdn.breadCrumbs.cloudFlare'),
          href: '/Products/Cdn/comparison/cloudFlare',
          current: false
        },
        {
          label: $t('products.cdn.breadCrumbs.fastly'),
          href: '/Products/Cdn/comparison/fastly',
          current: false
        },
        {
          label: $t('products.cdn.breadCrumbs.vsakamai'),
          href: '/Products/Cdn/comparison/vsakamai',
          current: false
        }
      ]
    },
    {
      label: $t('products.cdn.breadCrumbs.apiDocs'),
      href: '#',
      current: false
    }
  ]
  matchBreadCrumbs(items, path)
  return items
};



