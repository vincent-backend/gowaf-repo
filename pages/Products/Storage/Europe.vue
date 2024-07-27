<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />

  <CommonHeader1
    :pre-title="$t('products.storage.Europe.header.preTitle')"
    :title="$t('products.storage.Europe.header.title')"
    :content="$t('products.storage.Europe.header.content')"
    :btn="$t('products.storage.Europe.header.btn')"
    href="#"
    :hint="$t('products.storage.Europe.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :pic="{
      src: '/images/products/storage/europe/Network_Overview_nation_Europe_2x.png',
      w: '524px',
      h: '434px',

      msrc: '/images/products/storage/europe/Network_Overview_nation_Europe_2x.png',
      mw: '32.75rem',
      mh: '27.13rem'
    }"
  />
  <CommonNumbers
    style="margin-top: 80px"
    :items="$tm('products.storage.Europe.numbers')"
  />
  <ProductsExceptionalPerformance
    :title="$t('products.storage.Europe.exceptionalPerformance.title')"
    :content="$t('products.storage.Europe.exceptionalPerformance.content')"
    :markerColor="
      $t('products.storage.Europe.exceptionalPerformance.markerColor')
    "
    :img="$t('products.storage.Europe.exceptionalPerformance.img')"
  />
  <LgOnly>
    <ProductsNeverHit
      :isShowTitle="false"
      :neverHit="$tm('products.storage.Europe.neverHit')"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="false"
      :neverHit="$tm('products.storage.Europe.neverHit')"
    />
  </XsOnly>
  <HomeList1 />
  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <CommonList1
    :title1="$t('products.storage.Europe.list1.title')"
    :title2="$t('products.storage.Europe.list1.subTitle')"
    :items="$tm('products.cdn.overview.list1.items')"
  />
  <ProductsSupportPlan />
  <ProductsCalculate1
    :isShowTitle="false"
    :isShowReplicationPoints="false"
    :itemWidth="'560px'"
    :items="$tm('products.storage.Europe.calculator1.items')"
    :subs="$tm('products.storage.Europe.calculator1.subs')"
  />
  <ProductsStorageSupportPlan />
  <ProductsStorageList1
    :list="$tm('products.storage.Europe.partnerList.imgPcList')"
    :subTitle="$tm('products.storage.Europe.partnerList.subTitle')"
    :title="$tm('products.storage.Europe.partnerList.title')"
  />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.storage.Europe.drmCustomer')"
  />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Products'
});
</script>
<style lang="less" scoped>
@media (max-width: 767px) {
  .asia-join1 {
    margin-top: 0 !important;
  }
}
</style>
