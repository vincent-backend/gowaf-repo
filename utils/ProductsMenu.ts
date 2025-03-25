import { matchBreadCrumbs } from './utils'

export default function ($t: any, path: string) {

  var items = [
    [
      {
        label: $t('products.cdn.breadCrumbs.parent'),
        href: '#',
        current: false,
        icon: '/images/home/nav_products_pop_icon_cdn_default.png',
        children: [
          {
            label: $t('products.cdn.breadCrumbs.gowaf'),
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
            label: $t('pricing.breadCrumbs.parent'),
            href: '/Pricing/Cdn',
            current: false
          }
        ]
      },
      {
        label: $t('products.stream.breadCrumbs.parent'),
        href: '#',
        current: false,
        icon: '/images/home/nav_products_pop_icon_stream_default.png',
        children: [
          {
            label: $t('products.cdn.breadCrumbs.overview'),
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
          }, {
            label: $t('products.stream.breadCrumbs.multiDRM'),
            href: '/Products/Stream/MultiDRM',
            current: false
          },
          {
            label: $t('products.stream.breadCrumbs.transcribeAI'),
            href: '/Products/Stream/TranscribeAl',
            current: false
          }, {
            label: $t('pricing.breadCrumbs.parent'),
            href: '/Pricing/Cdn',
            current: false
          }
        ]
      },
      {
        label: $t('products.storage.breadCrumbs.parent'),
        href: '#',
        current: false,
        icon: '/images/home/nav_products_pop_icon_storage_default.png',
        children: [
          {
            label: $t('products.stream.breadCrumbs.overview'),
            href: '/Products/Storage/BouuyStorage',
            current: true
          },
          {
            label: $t('products.storage.breadCrumbs.SSDStorage'),
            href: '/Products/Storage/SSDStorage',
            current: false
          }, {
            label: $t('pricing.breadCrumbs.parent'),
            href: '/Pricing/Cdn',
            current: false
          }
        ]
      }
    ],
    [
      {
        label: $t('products.optimizer.breadCrumbs.parent'),
        href: '#',
        current: false,
        icon: '/images/home/nav_products_pop_icon_optimizer_default.png',
        children: [
          {
            label: $t('products.stream.breadCrumbs.overview'),
            href: '/Products/optimizer/overview',
            current: true
          },
          {
            label: $t('products.storage.breadCrumbs.TransformAPI'),
            href: '/Products/optimizer/TransformAPI',
            current: false
          },
        ]
      },
      {
        label: $t('products.cdn.breadCrumbs.dns'),
        href: '#',
        current: false,
        icon: '/images/home/nav_products_pop_icon_dns_default.png',
        children: [
          {
            label: $t('products.cdn.breadCrumbs.overview'),
            href: '/Products/DNS/BouuyDNS',
            current: false
          }
        ]
      },
      {
        label: $t('products.fonts.breadCrumbs.parent'),
        href: '#',
        current: false,
        icon: '/images/home/nav_products_pop_icon_font_default.png',
        children: [
          {
            label: $t('products.cdn.breadCrumbs.overview'),
            href: '/Products/DNS/BouuyDNS',
            current: false
          }
        ]
      }
    ]
  ]

  items = items.map((subItems: any) => {
    matchBreadCrumbs(subItems, path)
    return subItems;
  });

  return items
};



