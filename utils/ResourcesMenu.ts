import { matchBreadCrumbs } from './utils'

export default function ($t: any, path: string) {

  const items = [
    {
      label: $t('resources.breadCrumbs.about'),
      href: '/resources/about',
      current: true
    },
    {
      label: $t('resources.breadCrumbs.story'),
      href: '/resources/story',
      current: false
    },
    {
      label: $t('resources.breadCrumbs.careers'),
      href: '/resources/careers',
      current: false
    },
    {
      label: $t('resources.breadCrumbs.caseStudies'),
      href: '/resources/caseStudies',
      current: false
    },
    {
      label: $t('resources.breadCrumbs.contact'),
      href: '/resources/contact',
      current: false
    }
  ]
  matchBreadCrumbs(items, path)
  return items
};



