<template>
  <Header />
  <BreadCrumbs :title="$t('pricing.breadCrumbs.parent')" :items="[
    { label: $t('pricing.breadCrumbs.overview'), href: '/pricing/overview', current: false },
    { label: $t('pricing.breadCrumbs.cdn'), href: '/pricing/cdn', current: false },
    { label: $t('pricing.breadCrumbs.stream'), href: '/pricing/stream', current: true },
    { label: $t('pricing.breadCrumbs.storage'), href: '/pricing/storage', current: false },
    { label: $t('pricing.breadCrumbs.optimizer'), href: '/pricing/optimizer', current: false },
    { label: $t('pricing.breadCrumbs.dns'), href: '/pricing/dns', current: false },
  ]" />

  <CommonHeader1 :pre-title="$t('pricing.stream.header.preTitle')" :title="$t('pricing.stream.header.title')"
    :content="$t('pricing.stream.header.content')" :show-foot="false" :pic="{
    src: '/images/pricing/stream/Pricing_Stream_banner_graph@2x.png',
    w: '466px',
    h: '428px',

    msrc: '',
    mw: '',
    mh: '',
  }" />

  <PricingTable2 />

  <CommonList1 v-bind="$tm('pricing.overview.list1')" />

  <PricingCalculate1 />
  <PricingSupportPlan />
  <PricingHop />

  <PricingGetInTouch />

  <Footer />
</template>
