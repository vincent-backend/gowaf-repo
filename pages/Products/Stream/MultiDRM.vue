<template>
  <Header />
  <BreadCrumbs :title="$t('products.stream.breadCrumbs.parent')" :items="StreamMenu($t,$route.path)" />

  <CommonHeader1
    :pre-title="$t('products.stream.multiDRM.header.preTitle')"
    :title="$t('products.stream.multiDRM.header.title')"
    :content="$t('products.stream.multiDRM.header.content')"
    :btn="$t('products.stream.multiDRM.header.btn')"
    href="#"
    :pic="{
      src: '/images/products/stream/multi-drm/stream_multi_banner_graph@2x.png',
      w: '346px',
      h: '361px',

      msrc: '',
      mw: '',
      mh: ''
    }"
  />

  <ProductsEasyPowerful />
  <ProductsProtectYourVideos />

  <ProductsEndlessSecurity />
  <ProductsDRMTable />
  <ProductsDRMPricing />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.stream.multiDRM.drmCustomer')"
  />
  <ProductsDRMEmail />

  <Footer :is-show-banner="false" />
</template>
