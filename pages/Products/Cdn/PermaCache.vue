<template>
  <Header />
  <BreadCrumbs :title="$t('products.cdn.breadCrumbs.parent')" :items="[
    { label: $t('products.cdn.breadCrumbs.overview'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.features'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.permaCache'), href: '#', current: true },
    { label: $t('products.cdn.breadCrumbs.safehop'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.regions'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.comparison'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.apiDocs'), href: '#', current: false },
  ]" />

  <CommonHeader1 :pre-title="$t('products.cdn.permaCache.header.preTitle')"
    :title="$t('products.cdn.permaCache.header.title')" :content="$t('products.cdn.permaCache.header.content')"
    :btn="$t('products.cdn.permaCache.header.btn')" href="#" :hint="$t('products.cdn.permaCache.header.hint')"
    :show-foot="false" :pic="{
    src: '/images/products/cdn/perma-cache/cdn_permacache_banner_img@2x.png',
    w: '374px',
    h: '402px',

    msrc: '',
    mw: '',
    mh: '',
  }" />

  <CommonNumbers style="margin-top: 80px;" :items="$tm('products.cdn.permaCache.numbers')" />

  <ProductsNeverHit :isShowTitle="true" :neverHit="$tm('products.cdn.permaCache.neverHit')" />

  <CommonSuperCharge v-bind="$tm('products.cdn.permaCache.superCharge')" />

  <SolutionsAd1 :title="$t('products.cdn.permaCache.ad1.title')" :sub-title="$t('products.cdn.permaCache.ad1.subTitle')"
    :btn="$t('products.cdn.permaCache.ad1.btn')" href="#"
    pic="/images/products/cdn/perma-cache/Network_Overview_banner_graph@2x.png" pic-width="300px" pic-height="300px" />

  <SolutionsChart1 :title="$t('products.cdn.permaCache.chart1.title')"
    :sub-title="$t('products.cdn.permaCache.chart1.subTitle')" pic="/images/products/cdn/perma-cache/chart-1@2x.png"
    pic-height="432px" />

  <NetworkJoin1 v-bind="{
    ...$tm('products.cdn.permaCache.join1'),
    avatar: '/images/products/cdn/perma-cache/Network_ddos_evaluate_character@2x.png',
    mAvatar: '',
  }" />

  <Footer />
</template>