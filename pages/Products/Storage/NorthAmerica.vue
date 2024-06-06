<template>
  <Header />
  <BreadCrumbs :title="$t('products.storage.breadCrumbs.parent')" :items="[
    { label: $t('products.storage.breadCrumbs.overview'), href: '#', current: true },
    { label: $t('products.storage.breadCrumbs.player'), href: '#', current: false },
    { label: $t('products.storage.breadCrumbs.mediaCage'), href: '#', current: false },
    { label: $t('products.storage.breadCrumbs.multiDRM'), href: '#', current: false },
    { label: $t('products.storage.breadCrumbs.transcribeAI'), href: '#', current: false },
    { label: $t('products.storage.breadCrumbs.apiDocs'), href: '#', current: false },
  ]" />
  <CommonHeader1 :pre-title="$t('products.storage.NorthAmerica.header.preTitle')"
    :title="$t('products.storage.NorthAmerica.header.title')" :content="$t('products.storage.NorthAmerica.header.content')"
    :btn="$t('products.storage.NorthAmerica.header.btn')" href="#" 
    :hint="$t('products.storage.NorthAmerica.header.hint')"
    :rightStyle="{'margin-top': '30px', 'margin-right': '90px'}" 
    :containerStyle="{'height': '590px'}" 
    :showFoot="false"
    :pic="{
      src: '/images/products/storage/northamerica/Network_Overview_nation_Europe_2x.png',
      w: '524px',
      h: '434px',

      msrc: '',
      mw: '',
      mh: '',
    }"
  />
  <CommonNumbers style="margin-top: 80px;" :items="$tm('products.storage.NorthAmerica.numbers')" />
  <ProductsExceptionalPerformance 
    :title="$t('products.storage.NorthAmerica.exceptionalPerformance.title')"
    :content="$t('products.storage.NorthAmerica.exceptionalPerformance.content')"
    :markerColor="$t('products.storage.NorthAmerica.exceptionalPerformance.markerColor')"

   />
  <ProductsNeverHit :isShowTitle="false" :neverHit="$tm('products.storage.NorthAmerica.neverHit')" />
  <HomeList1 />
  <SolutionsAd1 :title="$t('products.storage.NorthAmerica.HopList.title')" :sub-title="$t('products.storage.NorthAmerica.HopList.subTitle')"
    :btn="$t('products.storage.NorthAmerica.HopList.btn')" href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png" pic-width="300px" pic-height="300px" />
  <CommonList1 
    :title1="$t('products.storage.NorthAmerica.list1.title')" 
    :title2="$t('products.storage.NorthAmerica.list1.subTitle')"
    :items="$tm('products.storage.NorthAmerica.list1.items')" />    
  <ProductsSupportPlan />
  <ProductsCalculate1 
    :isShowTitle="false" 
    :isShowReplicationPoints="false" 
    :itemWidth="'560px'"
    :items="$tm('products.storage.NorthAmerica.calculator1.items')"
    :subs="$tm('products.storage.NorthAmerica.calculator1.subs')"
    />
  <ProductsStorageSupportPlan />
  <ProductsStorageList1 
    :list="$tm('products.storage.NorthAmerica.partnerList.imgPcList')"
  />
  <ProductsDRMCustomers :drmCustomer="$tm('products.storage.NorthAmerica.drmCustomer')" />
  <Footer />
</template>