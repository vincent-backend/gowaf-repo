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

    msrc: '',
    mw: '',
    mh: '',
  }" />

  <PricingPricing1 />

  <CommonList1 :title1="$t('pricing.overview.title1')" :title2="$t('pricing.overview.title2')"
    :items="$tm('pricing.overview.list1')" />

  <PricingSaveMoney />

  <NetworkJoin1 :title="$t('pricing.overview.join1.title')" :person-name="$t('pricing.overview.join1.person.name')"
    :person-title="$t('pricing.overview.join1.person.title')"
    :person-content="$t('pricing.overview.join1.person.content')"
    person-avatar="/images/pricing/overview/SmartEdge™__evaluate_character.png" :show-scores="false" />

  <Footer />
</template>
