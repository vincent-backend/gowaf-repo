<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />

  <CommonHeader1
    :pre-title="$t('products.storage.Asia.header.preTitle')"
    :title="$t('products.storage.Asia.header.title')"
    :content="$t('products.storage.Asia.header.content')"
    :btn="$t('products.storage.Asia.header.btn')"
    href="#"
    :hint="$t('products.storage.Asia.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :pic="{
      src: '/images/products/storage/Asia/Network_Overview_nation_Europe_2x.png',
      w: '524px',
      h: '434px',

      msrc: '/images/products/storage/Asia/Network_Overview_nation_Europe_2x.png',
      mw: '32.75rem',
      mh: '27.13rem'
    }"
  />
  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="$tm('products.storage.Asia.numbers')"
  />
  <ProductsExceptionalPerformance
    :title="$t('products.storage.Asia.exceptionalPerformance.title')"
    :content="$t('products.storage.Asia.exceptionalPerformance.content')"
    :markerColor="
      $t('products.storage.Asia.exceptionalPerformance.markerColor')
    "
    :img="$t('products.storage.Asia.exceptionalPerformance.img')"
  />
  <LgOnly>
    <ProductsNeverHit
      :isShowTitle="false"
      :neverHit="$tm('products.storage.Asia.neverHit')"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="false"
      :neverHit="$tm('products.storage.Asia.neverHit')"
    />
  </XsOnly>
  <HomeList1 />
  <SolutionsAd1
    :title="$t('products.storage.Asia.HopList.title')"
    :sub-title="$t('products.storage.Asia.HopList.subTitle')"
    :btn="$t('products.storage.Asia.HopList.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <CommonList1
    :title1="$t('products.storage.Asia.list1.title')"
    :title2="$t('products.storage.Asia.list1.subTitle')"
    :items="$tm('products.storage.Asia.list1.items')"
  />
  <ProductsSupportPlan />
  <ProductsCalculate1
    :isShowTitle="false"
    :isShowReplicationPoints="false"
    :itemWidth="'560px'"
    :items="$tm('products.storage.Asia.calculator1.items')"
    :subs="$tm('products.storage.Asia.calculator1.subs')"
  />
  <ProductsStorageSupportPlan />
  <ProductsStorageList1
    :subTitle="$tm('products.storage.Asia.partnerList.subTitle')"
    :title="$tm('products.storage.Asia.partnerList.title')"
    :list="$tm('products.storage.Asia.partnerList.imgPcList')"
  />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.storage.Asia.drmCustomer')"
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
