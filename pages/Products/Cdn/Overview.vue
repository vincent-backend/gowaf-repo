<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.cdn.breadCrumbs.overview'),
        href: '/Products/Cdn/Overview',
        current: true
      },
      {
        label: $t('products.cdn.breadCrumbs.features'),
        href: '/Products/Cdn/Features',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.permaCache'),
        href: '/Products/Cdn/PermaCache',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.safehop'),
        href: '/Products/Cdn/SafeHop',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.regions'),
        href: '#',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.comparison'),
        href: '/Products/Cdn/comparison/aws',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />

  <CommonHeader1
    :pre-title="$t('products.cdn.overview.header.preTitle')"
    :title="$t('products.cdn.overview.header.title')"
    :content="$t('products.cdn.overview.header.content')"
    :btn="$t('products.cdn.overview.header.btn')"
    href="#"
    :hint="$t('products.cdn.overview.header.hint')"
    :pic="{
      src: '/images/products/cdn/overview/cdn_overview_banner_graph@2x.png',
      w: '381px',
      h: '371px',
      msrc: '/images/products/cdn/overview/cdn_overview_banner_graph@2x.png',
      mw: '23.81rem',
      mh: '23.19rem'
    }"
  />

  <SolutionsAccelerate
    :title="$t('products.cdn.overview.accelerate.title')"
    :content="$t('products.cdn.overview.accelerate.content')"
    :list1="$tm('products.cdn.overview.accelerate.list1')"
    :list2="$tm('products.cdn.overview.accelerate.list2')"
  />

  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="$tm('products.cdn.overview.numbers')"
  />

  <CommonSuperCharge v-bind="$tm('products.cdn.overview.goFaster')" />

  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
  />

  <CommonList1 v-bind="$tm('products.cdn.overview.list1')" />

  <ProductsList1 />
  <PricingCalculate1 />

  <div class="map-container">
    <div class="title">{{ $t('products.cdn.overview.map.title') }}</div>
    <div class="sub-title">{{ $t('products.cdn.overview.map.subTitle') }}</div>
    <NetworkBanner class="map-container" />
  </div>

  <ProductsReadyToHop />
  <ProductsIntuitivePanels />

  <SolutionsAd1
    style="margin-top: 0"
    :title="$t('products.cdn.overview.ad1_2.title')"
    :sub-title="$t('products.cdn.overview.ad1_2.subTitle')"
    :btn="$t('products.cdn.overview.ad1_2.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
  />

  <ProductsSuperCharge />

  <ProductsConnectDirectly />

  <HomeJoin2 />
  <HomeList1 />

  <Footer />
</template>

<style lang="less" scoped>
.map-container {
  margin-top: 120px;

  > .title {
    font-weight: 500;
    font-size: 30px;

    line-height: 42px;
    text-align: center;
  }

  > .sub-title {
    margin: 20px auto 0;

    width: 912px;

    font-size: 16px;
    color: #4e4e4e;

    text-align: center;
  }

  .map-container {
    margin-top: 40px;
  }
}
</style>
