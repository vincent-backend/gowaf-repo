<template>
  <Header />
  <BreadCrumbs :title="$t('products.cdn.breadCrumbs.parent')" :items="[
    { label: $t('products.cdn.breadCrumbs.overview'), href: '#', current: true },
    { label: $t('products.cdn.breadCrumbs.features'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.permaCache'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.safehop'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.regions'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.comparison'), href: '#', current: false },
    { label: $t('products.cdn.breadCrumbs.apiDocs'), href: '#', current: false },
  ]" />

  <CommonHeader1 :pre-title="$t('products.cdn.overview.header.preTitle')"
    :title="$t('products.cdn.overview.header.title')" :content="$t('products.cdn.overview.header.content')"
    :btn="$t('products.cdn.overview.header.btn')" href="#" :hint="$t('products.cdn.overview.header.hint')"
    pic="/images/products/cdn/overview/cdn_overview_banner_graph@2x.png" pic-width="381px" pic-height="371px" />

  <SolutionsAccelerate :title="$t('products.cdn.overview.accelerate.title')"
    :content="$t('products.cdn.overview.accelerate.content')" :list1="$tm('products.cdn.overview.accelerate.list1')"
    :list2="$tm('products.cdn.overview.accelerate.list2')" />

  <CommonNumbers style="margin-top: 80px;" :items="$tm('products.cdn.overview.numbers')" />

  <CommonSuperCharge :title="$t('products.cdn.overview.goFaster.title')"
    :sub-title="$t('products.cdn.overview.goFaster.subTitle')" :tabs="$tm('products.cdn.overview.goFaster.tabs')" />

  <SolutionsAd1 :title="$t('products.cdn.overview.ad1.title')" :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')" href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png" pic-width="300px" pic-height="300px" />

  <CommonList1 :title1="$t('products.cdn.overview.list1.title')" :title2="$t('products.cdn.overview.list1.subTitle')"
    :items="$tm('products.cdn.overview.list1.items')" />

  <ProductsList1 />
  <PricingCalculate1 />

  <div class="map-container">
    <div class="title">{{ $t('products.cdn.overview.map.title') }}</div>
    <div class="sub-title">{{ $t('products.cdn.overview.map.subTitle') }}</div>
    <NetworkBanner class="map-container" />
  </div>

  <ProductsReadyToHop />
  <ProductsIntuitivePanels />

  <SolutionsAd1 style="margin-top: 0;" :title="$t('products.cdn.overview.ad1_2.title')"
    :sub-title="$t('products.cdn.overview.ad1_2.subTitle')" :btn="$t('products.cdn.overview.ad1_2.btn')" href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png" pic-width="300px" pic-height="300px" />

  <ProductsSuperCharge />

  <ProductsConnectDirectly />

  <HomeJoin2 />
  <HomeList1 />

  <Footer />
</template>

<style lang="less" scoped>
.map-container {
  margin-top: 120px;

  >.title {

    font-weight: 500;
    font-size: 30px;

    line-height: 42px;
    text-align: center;


  }

  >.sub-title {
    margin: 20px auto 0;

    width: 912px;


    font-size: 16px;
    color: #4E4E4E;

    text-align: center;


  }

  .map-container {
    margin-top: 40px;
  }
}
</style>