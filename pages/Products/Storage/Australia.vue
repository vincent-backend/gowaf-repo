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
    :pre-title="$t('products.storage.Australia.header.preTitle')"
    :title="$t('products.storage.Australia.header.title')"
    :content="$t('products.storage.Australia.header.content')"
    :btn="$t('products.storage.Australia.header.btn')"
    href="#"
    :hint="$t('products.storage.Australia.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :pic="{
      src: '/images/products/storage/Australia/Network_Overview_nation_Australia_2x.png',
      w: '524px',
      h: '434px',

      msrc: '',
      mw: '',
      mh: ''
    }"
  />
  <CommonNumbers
    style="margin-top: 80px"
    :items="$tm('products.storage.Australia.numbers')"
  />
  <ProductsExceptionalPerformance
    :title="$t('products.storage.Australia.exceptionalPerformance.title')"
    :content="$t('products.storage.Australia.exceptionalPerformance.content')"
    :markerColor="
      $t('products.storage.Australia.exceptionalPerformance.markerColor')
    "
    :img="$t('products.storage.Australia.exceptionalPerformance.img')"
  />
  <ProductsNeverHit
    :isShowTitle="false"
    :neverHit="$tm('products.storage.Australia.neverHit')"
  />
  <HomeList1 />
  <SolutionsAd1
    :title="$t('products.storage.Australia.HopList.title')"
    :sub-title="$t('products.storage.Australia.HopList.subTitle')"
    :btn="$t('products.storage.Australia.HopList.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
  />
  <CommonList1
    :title1="$t('products.storage.Australia.list1.title')"
    :title2="$t('products.storage.Australia.list1.subTitle')"
    :items="$tm('products.storage.Australia.list1.items')"
  />
  <ProductsSupportPlan />
  <ProductsCalculate1
    :isShowTitle="false"
    :isShowReplicationPoints="false"
    :itemWidth="'560px'"
    :items="$tm('products.storage.Australia.calculator1.items')"
    :subs="$tm('products.storage.Australia.calculator1.subs')"
  />
  <ProductsStorageSupportPlan />
  <ProductsStorageList1
    :subTitle="$tm('products.storage.Australia.partnerList.subTitle')"
    :title="$tm('products.storage.Australia.partnerList.title')"
    :list="$tm('products.storage.Australia.partnerList.imgPcList')"
  />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.storage.Australia.drmCustomer')"
  />
  <Footer />
</template>
