<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.storage.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.storage.breadCrumbs.overview'),
        href: '#',
        current: true
      },
      {
        label: $t('products.storage.breadCrumbs.player'),
        href: '#',
        current: false
      },
      {
        label: $t('products.storage.breadCrumbs.mediaCage'),
        href: '#',
        current: false
      },
      {
        label: $t('products.storage.breadCrumbs.multiDRM'),
        href: '#',
        current: false
      },
      {
        label: $t('products.storage.breadCrumbs.transcribeAI'),
        href: '#',
        current: false
      },
      {
        label: $t('products.storage.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('products.storage.LatinAmerica.header.preTitle')"
    :title="$t('products.storage.LatinAmerica.header.title')"
    :content="$t('products.storage.LatinAmerica.header.content')"
    :btn="$t('products.storage.LatinAmerica.header.btn')"
    href="#"
    :hint="$t('products.storage.LatinAmerica.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :pic="{
      src: '/images/products/storage/latinamerica/Network_Overview_nation_Europe_2x.png',
      w: '524px',
      h: '474px',

      msrc: '/images/products/storage/latinamerica/Network_Overview_nation_Europe_2x.png',
      mw: '32.75rem',
      mh: '29.63rem'
    }"
  />
  <CommonNumbers
    style="margin-top: 80px"
    :items="$tm('products.storage.LatinAmerica.numbers')"
  />
  <ProductsExceptionalPerformance
    :title="$t('products.storage.LatinAmerica.exceptionalPerformance.title')"
    :content="
      $t('products.storage.LatinAmerica.exceptionalPerformance.content')
    "
    :markerColor="
      $t('products.storage.LatinAmerica.exceptionalPerformance.markerColor')
    "
    :img="$t('products.storage.LatinAmerica.exceptionalPerformance.img')"
  />
  <LgOnly>
    <ProductsNeverHit
      :isShowTitle="false"
      :neverHit="$tm('products.storage.LatinAmerica.neverHit')"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="false"
      :neverHit="$tm('products.storage.LatinAmerica.neverHit')"
    />
  </XsOnly>
  <HomeList1 />
  <SolutionsAd1
    :title="$t('products.storage.LatinAmerica.HopList.title')"
    :sub-title="$t('products.storage.LatinAmerica.HopList.subTitle')"
    :btn="$t('products.storage.LatinAmerica.HopList.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <CommonList1
    :title1="$t('products.storage.LatinAmerica.list1.title')"
    :title2="$t('products.storage.LatinAmerica.list1.subTitle')"
    :items="$tm('products.storage.LatinAmerica.list1.items')"
  />
  <ProductsSupportPlan
    :title="$t('products.storage.LatinAmerica.supportPlan.content.title')"
  />
  <ProductsCalculate1
    :isShowTitle="false"
    :isShowReplicationPoints="false"
    :itemWidth="'560px'"
    :items="$tm('products.storage.LatinAmerica.calculator1.items')"
    :subs="$tm('products.storage.LatinAmerica.calculator1.subs')"
  />
  <ProductsStorageSupportPlan />
  <ProductsStorageList1
    :subTitle="$tm('products.storage.LatinAmerica.partnerList.subTitle')"
    :title="$tm('products.storage.LatinAmerica.partnerList.title')"
    :list="$tm('products.storage.LatinAmerica.partnerList.imgPcList')"
  />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.storage.LatinAmerica.drmCustomer')"
  />
  <Footer />
</template>
<style lang="less" scoped>
@media (max-width: 767px) {
  .asia-join1 {
    margin-top: 0 !important;
  }
}
</style>
