<template>
  <Header />
  <BreadCrumbs :title="$t('products.cdn.breadCrumbs.parent')" :items="[
    { label: $t('products.cdn.breadCrumbs.overview'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.features'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.permaCache'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.safehop'), href: '#', current: true },
    { label: $t('products.cdn.breadCrumbs.regions'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.comparison'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.apiDocs'), href: '#', current: false },
  ]" />

  <CommonHeader1 :pre-title="$t('products.cdn.safeHop.header.preTitle')"
    :title="$t('products.cdn.safeHop.header.title')" :content="$t('products.cdn.safeHop.header.content')"
    :btn="$t('products.cdn.safeHop.header.btn')" href="#" :hint="$t('products.cdn.safeHop.header.hint')" :pic="{
    src: '/images/products/cdn/safe-hop/cdnsafehop_banner_graph@2x.png',
    w: '390px',
    h: '359px',

    msrc: '',
    mw: '',
    mh: '',
  }" />

  <ProductsReduceError />

  <CommonSuperCharge v-bind="$tm('products.cdn.safeHop.goFaster')" />

  <NetworkJoin1 :title="$t('products.cdn.safeHop.join1.title')"
    :person-name="$t('products.cdn.safeHop.join1.person.name')"
    :person-title="$t('products.cdn.safeHop.join1.person.title')"
    :person-content="$t('products.cdn.safeHop.join1.person.content')"
    person-avatar="/images/products/cdn/safe-hop/Network_ddos_evaluate_character@2x.png" />

  <Footer />
</template>