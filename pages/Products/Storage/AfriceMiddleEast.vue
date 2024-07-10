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
    :pre-title="$t('products.storage.AfriceMiddleEast.header.preTitle')"
    :title="$t('products.storage.AfriceMiddleEast.header.title')"
    :content="$t('products.storage.AfriceMiddleEast.header.content')"
    :btn="$t('products.storage.AfriceMiddleEast.header.btn')"
    href="#"
    :hint="$t('products.storage.AfriceMiddleEast.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :pic="{
      src: '/images/products/storage/AfriceMiddleEast/Network_Overview_nation_Europe_2x.png',
      w: '524px',
      h: '434px',

      msrc: '/images/products/storage/AfriceMiddleEast/Network_Overview_nation_Europe_2x.png',
      mw: '32.75rem',
      mh: '27.13rem'
    }"
  />
  <CommonNumbers
    style="margin-top: 80px"
    :items="$tm('products.storage.AfriceMiddleEast.numbers')"
  />
  <ProductsExceptionalPerformance
    :title="
      $t('products.storage.AfriceMiddleEast.exceptionalPerformance.title')
    "
    :content="
      $t('products.storage.AfriceMiddleEast.exceptionalPerformance.content')
    "
    :markerColor="
      $t('products.storage.AfriceMiddleEast.exceptionalPerformance.markerColor')
    "
    :img="$t('products.storage.AfriceMiddleEast.exceptionalPerformance.img')"
  />
  <LgOnly>
    <ProductsNeverHit
      :isShowTitle="false"
      :neverHit="$tm('products.storage.AfriceMiddleEast.neverHit')"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="false"
      :neverHit="$tm('products.storage.AfriceMiddleEast.neverHit')"
    />
  </XsOnly>
  <HomeList1 />
  <SolutionsAd1
    :title="$t('products.storage.AfriceMiddleEast.HopList.title')"
    :sub-title="$t('products.storage.AfriceMiddleEast.HopList.subTitle')"
    :btn="$t('products.storage.AfriceMiddleEast.HopList.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <CommonList1
    :title1="$t('products.storage.AfriceMiddleEast.list1.title')"
    :title2="$t('products.storage.AfriceMiddleEast.list1.subTitle')"
    :items="$tm('products.storage.AfriceMiddleEast.list1.items')"
  />
  <ProductsSupportPlan />
  <ProductsCalculate1
    :isShowTitle="false"
    :isShowReplicationPoints="false"
    :itemWidth="'560px'"
    :items="$tm('products.storage.AfriceMiddleEast.calculator1.items')"
    :subs="$tm('products.storage.AfriceMiddleEast.calculator1.subs')"
  />
  <ProductsStorageSupportPlan />
  <ProductsStorageList1
    :subTitle="$tm('products.storage.AfriceMiddleEast.partnerList.subTitle')"
    :title="$tm('products.storage.AfriceMiddleEast.partnerList.title')"
    :list="$tm('products.storage.AfriceMiddleEast.partnerList.imgPcList')"
  />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.stream.multiDRM.drmCustomer')"
  />
  <Footer />
</template>
