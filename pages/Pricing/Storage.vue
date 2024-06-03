<template>
  <Header />
  <BreadCrumbs :title="$t('pricing.breadCrumbs.parent')" :items="[
    { label: $t('pricing.breadCrumbs.overview'), href: '/pricing/overview', current: false },
    { label: $t('pricing.breadCrumbs.cdn'), href: '/pricing/cdn', current: false },
    { label: $t('pricing.breadCrumbs.stream'), href: '/pricing/stream', current: false },
    { label: $t('pricing.breadCrumbs.storage'), href: '/pricing/storage', current: true },
    { label: $t('pricing.breadCrumbs.optimizer'), href: '/pricing/optimizer', current: false },
    { label: $t('pricing.breadCrumbs.dns'), href: '/pricing/dns', current: false },
  ]" />

  <CommonHeader1 :pre-title="$t('pricing.storage.header.preTitle')" :title="$t('pricing.storage.header.title')"
    :content="$t('pricing.storage.header.content')" pic="/images/pricing/storage/Pricing_Storage_banner_graph.png"
    pic-width="464px" pic-height="324px" :show-foot="false" />

  <div class="price-1-container">
    <PricingTable :content="$tm('pricing.storage.pricingTable')" />
  </div>

  <PricingMap />

  <CommonList1 :title1="$t('pricing.overview.title1')" :title2="$t('pricing.overview.title2')"
    :items="$tm('pricing.overview.list1')" />
  <PricingCalculate1 />
  <PricingSupportPlan />
  <PricingHop />
  <PricingSaveMoney />
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
  background: #FFFFFF;
  box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
  border-radius: 24px;
  box-sizing: border-box;
  padding: 20px;
}
</style>