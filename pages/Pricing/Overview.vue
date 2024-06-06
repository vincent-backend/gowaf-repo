<template>
  <Header />
  <BreadCrumbs :title="$t('pricing.breadCrumbs.parent')" :items="[
    { label: $t('pricing.breadCrumbs.overview'), href: '/pricing/overview', current: true },
    { label: $t('pricing.breadCrumbs.cdn'), href: '/pricing/cdn', current: false },
    { label: $t('pricing.breadCrumbs.stream'), href: '/pricing/stream', current: false },
    { label: $t('pricing.breadCrumbs.storage'), href: '/pricing/storage', current: false },
    { label: $t('pricing.breadCrumbs.optimizer'), href: '/pricing/optimizer', current: false },
    { label: $t('pricing.breadCrumbs.dns'), href: '/pricing/dns', current: false },
  ]" />

  <CommonHeader1 :pre-title="$t('pricing.overview.header.preTitle')" :title="$t('pricing.overview.header.title')"
    :content="$t('pricing.overview.header.content')" :show-foot="false" :pic="{
    src: '/images/pricing/overview/Pricing_Overview_banner_graph@2x.png',
    w: '450px',
    h: '366px',

    msrc: '/mobile-images/pricing/overview/Pricing_Overview_banner_graph@2x.png',
    mw: '28.13rem',
    mh: '22.88rem',
  }" />

  <PricingPricing1 />

  <CommonList1 v-bind="$tm('pricing.overview.list1')" />

  <PricingSaveMoney />

  <NetworkJoin1 v-bind="{
    ...$tm('pricing.overview.join1'),
    avatar: '/images/pricing/overview/SmartEdge™__evaluate_character@2x.png',
    mAvatar: '',
    showScores: false,
  }" />

  <Footer />
</template>
