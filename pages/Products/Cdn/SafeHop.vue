<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="[
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
        current: true
      },
      {
        label: $t('products.cdn.breadCrumbs.regions'),
        href: '#',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.comparison'),
        href: '/Products/Cdn/comparison/aws',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />

  <CommonHeader1
    :pre-title="$t('products.cdn.safeHop.header.preTitle')"
    :title="$t('products.cdn.safeHop.header.title')"
    :content="$t('products.cdn.safeHop.header.content')"
    :btn="$t('products.cdn.safeHop.header.btn')"
    href="#"
    :hint="$t('products.cdn.safeHop.header.hint')"
    :pic="{
      src: '/images/products/cdn/safe-hop/cdnsafehop_banner_graph@2x.png',
      w: '390px',
      h: '359px',
      msrc: '/images/products/cdn/safe-hop/cdnsafehop_banner_graph@2x.png',
      mw: '21.67rem',
      mh: '19.94rem'
    }"
  />

  <ProductsReduceError />

  <CommonSuperCharge v-bind="$tm('products.cdn.safeHop.goFaster')" />

  <NetworkJoin1
    v-bind="{
      ...$tm('products.cdn.safeHop.join1'),
      avatar:
        '/images/products/cdn/safe-hop/Network_ddos_evaluate_character@2x.png',
      mAvatar: '/images/products/cdn/safe-hop/Network_ddos_evaluate_character@2x.png'
    }"
  />

  <Footer />
</template>
