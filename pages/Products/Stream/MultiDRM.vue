<template>
  <Header />
  <BreadCrumbs :title="$t('products.stream.breadCrumbs.parent')" :items="[
    { label: $t('products.stream.breadCrumbs.overview'), href: '#', current: false },
    { label: $t('products.stream.breadCrumbs.player'), href: '#', current: false },
    { label: $t('products.stream.breadCrumbs.mediaCage'), href: '#', current: false },
    { label: $t('products.stream.breadCrumbs.multiDRM'), href: '#', current: true },
    { label: $t('products.stream.breadCrumbs.transcribeAI'), href: '#', current: false },
    { label: $t('products.stream.breadCrumbs.apiDocs'), href: '#', current: false },
  ]" />
  <CommonHeader1 :pre-title="$t('products.stream.multiDRM.header.preTitle')"
    :title="$t('products.stream.multiDRM.header.title')" :content="$t('products.stream.multiDRM.header.content')"
    :btn="$t('products.stream.multiDRM.header.btn')" href="#" :pic="{
    src: '/images/products/stream/multi-drm/stream_multi_banner_graph@2x.png',
    w: '346px',
    h: '361px',

    msrc: '',
    mw: '',
    mh: '',
  }" />

  <ProductsEasyPowerful />
  <ProductsProtectYourVideos />

  <ProductsEndlessSecurity />
  <ProductsDRMTable />
  <ProductsDRMPricing />
  <ProductsDRMCustomers />
  <ProductsDRMEmail />

  <Footer />
</template>