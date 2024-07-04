<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.stream.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.stream.breadCrumbs.overview'),
        href: '#',
        current: true
      },
      {
        label: $t('products.stream.breadCrumbs.player'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.mediaCage'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.multiDRM'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.transcribeAI'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('products.stream.overview.header.preTitle')"
    :title="$t('products.stream.overview.header.title')"
    :content="$t('products.stream.overview.header.content')"
    :btn="$t('products.stream.overview.header.btn')"
    href="#"
    :hint="$t('products.stream.overview.header.hint')"
    :pic="{
      src: '/images/products/stream/overview/stream_overview_banner_graph@2x.png',
      w: '456px',
      h: '278px',

      msrc: '',
      mw: '',
      mh: ''
    }"
  />

  <NetworkAlwaysSafe v-bind="$tm('products.stream.overview.alwaysSafe')" />

  <CommonNumbers
    style="margin-top: 40px"
    :items="$tm('products.stream.overview.numbers')"
  />

  <CommonSuperCharge v-bind="$tm('products.stream.overview.doNotLeave')" />

  <ProductsSimplifiedPricing />
  <ProductsCalculate1
    :items="$tm('products.stream.overview.Calculate.list')"
    :subs="$tm('pricing.cdn.calculator1.subs')"
  />

  <ProductsPackedFeatures />

  <SolutionsAd2
    :title="$t('products.stream.overview.ad2.title')"
    :content="$t('products.stream.overview.ad2.content')"
    :list="$tm('products.stream.overview.ad2.list')"
    :btn="$t('products.stream.overview.ad2.btn')"
    href="#"
    pic="/images/products/stream/overview/stream_overview_upload_img@2x.png"
    pic-width="527px"
    pic-height="408px"
    reverse
  />

  <ProductsHowStreamWorks />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.stream.multiDRM.drmCustomer')"
  />

  <Footer />
</template>
