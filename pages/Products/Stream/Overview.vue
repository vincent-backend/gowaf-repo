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
      msrc: '/images/products/stream/overview/stream_overview_banner_graph@2x.png',
      mw: '28.5rem',
      mh: '17.38rem'
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

  <LgOnly>
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
  </LgOnly>

  <ProductsHowStreamWorks />
  <LgOnly>
    <ProductsDRMCustomers
      :drmCustomer="$tm('products.stream.multiDRM.drmCustomer')"
    />
  </LgOnly>
  <XsOnly>
    <NetworkJoin1
      v-bind="{
        ...$tm('products.stream.multiDRM.drmCustomernetword'),
        avatar:
          '/images/products/stream/multi-drm/Network_Overview_evaluate_character_2x.png',
        mAvatar:
          '/images/products/stream/multi-drm/Network_Overview_evaluate_character_2x.png'
      }"
    />
    <div style="margin-bottom: 6.25rem;"></div>
  </XsOnly>
  <Footer />
</template>
