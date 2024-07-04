<template>
  <Header />
  <BreadCrumbs
    :title="$t('pricing.breadCrumbs.parent')"
    :items="[
      {
        label: $t('pricing.breadCrumbs.overview'),
        href: '/pricing/overview',
        current: false
      },
      {
        label: $t('pricing.breadCrumbs.cdn'),
        href: '/pricing/cdn',
        current: false
      },
      {
        label: $t('pricing.breadCrumbs.stream'),
        href: '/pricing/stream',
        current: false
      },
      {
        label: $t('pricing.breadCrumbs.storage'),
        href: '/pricing/storage',
        current: false
      },
      {
        label: $t('pricing.breadCrumbs.optimizer'),
        href: '/pricing/optimizer',
        current: true
      },
      {
        label: $t('pricing.breadCrumbs.dns'),
        href: '/pricing/dns',
        current: false
      }
    ]"
  />

  <CommonHeader1
    :pre-title="$t('pricing.optimizer.header.preTitle')"
    :title="$t('pricing.optimizer.header.title')"
    :content="$t('pricing.optimizer.header.content')"
    :show-foot="false"
    :pic="{
      src: '/images/pricing/optimizer/Pricing_Optimizer_banner_graph@2x.png',
      w: '410px',
      h: '366px',

      msrc: '/mobile-images/pricing/optimizer/Pricing_Optimizer_banner_graph@2x.png',
      mw: '25.63rem',
      mh: '22.88rem'
    }"
  />

  <div class="price-1-container">
    <PricingTable :content="$tm('pricing.optimizer.pricingTable')" />
  </div>

  <CommonList1 v-bind="$tm('pricing.overview.list1')" />
  <PricingSupportPlan />
  <PricingHop />

  <PricingGetInTouch />

  <Footer />
</template>

<style lang="less" scoped>
.price-1-container {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: -60px;
  z-index: 2;
  background: #ffffff;
  box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
  border-radius: 24px;
  box-sizing: border-box;
  padding: 20px;
}

// For mobile devices
@media (max-width: 767px) {
  .price-1-container {
    width: 43.13rem;
    top: -2.25rem;
    padding: 1.25rem;
    border-radius: 1.5rem;
  }
}
</style>
