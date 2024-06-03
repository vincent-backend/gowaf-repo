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
    pic="/images/products/cdn/perma-cache/cdn_permacache_banner_img@2x.png" pic-width="374px" pic-height="402px"
    :show-foot="false" />

  <CommonNumbers style="margin-top: 80px;" :items="$tm('products.cdn.permaCache.numbers')" />

  <ProductsNeverHit />

  <CommonSuperCharge :title="$t('products.cdn.permaCache.superCharge.title')"
    :sub-title="$t('products.cdn.permaCache.superCharge.subTitle')"
    :tabs="$tm('products.cdn.permaCache.superCharge.tabs')" />

  <SolutionsAd1 :title="$t('products.cdn.permaCache.ad1.title')" :sub-title="$t('products.cdn.permaCache.ad1.subTitle')"
    :btn="$t('products.cdn.permaCache.ad1.btn')" href="#"
    pic="/images/products/cdn/perma-cache/Network_Overview_banner_graph@2x.png" pic-width="300px" pic-height="300px" />

  <SolutionsChart1 :title="$t('products.cdn.permaCache.chart1.title')"
    :sub-title="$t('products.cdn.permaCache.chart1.subTitle')" pic="/images/products/cdn/perma-cache/chart-1@2x.png"
    pic-height="432px" />

  <NetworkJoin1 :title="$t('products.cdn.permaCache.join1.title')"
    :person-name="$t('products.cdn.permaCache.join1.person.name')"
    :person-title="$t('products.cdn.permaCache.join1.person.title')"
    :person-content="$t('products.cdn.permaCache.join1.person.content')"
    person-avatar="/images/products/cdn/perma-cache/Network_ddos_evaluate_character@2x.png" />

  <Footer />
</template>