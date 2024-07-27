<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />
  <CommonHeader1
    :pre-title="$t('products.cdn.permaCache.header.preTitle')"
    :title="$t('products.cdn.permaCache.header.title')"
    :content="$t('products.cdn.permaCache.header.content')"
    :btn="$t('products.cdn.permaCache.header.btn')"
    href="#"
    :hint="$t('products.cdn.permaCache.header.hint')"
    :show-foot="false"
    :pic="{
      src: '/images/products/cdn/perma-cache/cdn_permacache_banner_img@2x.png',
      w: '374px',
      h: '402px',
      msrc: '/images/products/cdn/perma-cache/cdn_permacache_banner_img@2x.png',
      mw: '20.78rem',
      mh: '22.33rem'
    }"
  />

  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="$tm('products.cdn.permaCache.numbers')"
  />

  <ProductsNeverHit
    :isShowTitle="true"
    :neverHit="$tm('products.cdn.permaCache.neverHit')"
  />

  <CommonSuperCharge v-bind="$tm('products.cdn.permaCache.superCharge')" />

  <SolutionsAd1
    :title="$t('products.cdn.permaCache.ad1.title')"
    :sub-title="$t('products.cdn.permaCache.ad1.subTitle')"
    :btn="$t('products.cdn.permaCache.ad1.btn')"
    href="#"
    pic="/images/products/cdn/perma-cache/Network_Overview_banner_graph@2x.png"
    m-pic="/images/products/cdn/perma-cache/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic-width="22.22rem"
    m-pic-height="22.22rem"
  />

  <SolutionsChart1
    :title="$t('products.cdn.permaCache.chart1.title')"
    :sub-title="$t('products.cdn.permaCache.chart1.subTitle')"
    pic="/images/products/cdn/perma-cache/chart-1@2x.png"
    mPic="/images/products/cdn/perma-cache/chart-1@2x.png"
    pic-height="432px"
    mPicHeight="24rem"
  />

  <NetworkJoin1
    v-bind="{
      ...$tm('products.cdn.permaCache.join1'),
      avatar:
        '/images/products/cdn/perma-cache/Network_ddos_evaluate_character@2x.png',
      mAvatar:
        '/images/products/cdn/perma-cache/Network_ddos_evaluate_character@2x.png'
    }"
  />

  <Footer />
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Products'
});
</script>
