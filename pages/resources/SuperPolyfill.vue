<template>
  <Header />
  <CommonHeader1
    :pre-title="$t('products.cdn.overview.header.preTitle')"
    :title="$t('products.cdn.overview.header.title')"
    :content="$t('products.cdn.overview.header.content')"
    :btn="$t('products.cdn.overview.header.btn')"
    href="#"
    :hint="$t('products.cdn.overview.header.hint')"
    :pic="{
      src: '/images/products/cdn/overview/cdn_overview_banner_graph@2x.png',
      w: '381px',
      h: '371px',
      msrc: '/images/products/cdn/overview/cdn_overview_banner_graph@2x.png',
      mw: '23.81rem',
      mh: '23.19rem'
    }"
  />

  <SolutionsAccelerate
    :title="$t('resources.SuperPolyfill.accelerate.title')"
    :content="$t('resources.SuperPolyfill.accelerate.content')"
    :list1="$tm('resources.SuperPolyfill.accelerate.list1')"
    :list2="$tm('resources.SuperPolyfill.accelerate.list2')"
  />

  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="$tm('resources.SuperPolyfill.numbers')"
  />

  <CommonSuperCharge v-bind="$tm('resources.SuperPolyfill.goFaster')" />

  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
  />

  <CommonList1 v-bind="$tm('resources.SuperPolyfill.list1')" />

  <ResourcesLeftImgRightTransform />
  <ResourcesAuthor />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.storage.LatinAmerica.drmCustomer')"
  />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Resources'
});
</script>

<style lang="less" scoped>
.map-container {
  margin-top: 120px;

  > .title {
    font-weight: 500;
    font-size: 30px;

    line-height: 42px;
    text-align: center;
  }

  > .sub-title {
    margin: 20px auto 0;

    width: 912px;

    font-size: 16px;
    color: #4e4e4e;

    text-align: center;
  }

  .map-container {
    margin-top: 40px;
  }
}
</style>
