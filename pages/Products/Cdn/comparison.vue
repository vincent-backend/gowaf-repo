<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.cdn.breadCrumbs.overview'),
        href: '#',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.features'),
        href: '#',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.permaCache'),
        href: '#',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.safehop'),
        href: '#',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.regions'),
        href: '#',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.comparison'),
        href: '#',
        current: true
      },
      {
        label: $t('products.cdn.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />
  <CommonHeader2
    :title="$t('products.cdn.comparison.header.title')"
    :sub-title="$t('products.cdn.comparison.header.subTitle')"
    :content="$t('products.cdn.comparison.header.content')"
    href="#"
  />
  <ProductsDNScomparisonList
    :ptlist="$tm('products.cdn.comparison.comparisonList')"
  ></ProductsDNScomparisonList>
  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <ProductsStorageSupportPlan />
  <SolutionsAd2
    :title="$t('products.stream.overview.ad2.title')"
    :content="$t('products.stream.overview.ad2.content')"
    href="#"
    pic="/images/products/stream/overview/stream_overview_upload_img@2x.png"
    pic-width="339px"
    pic-height="372px"
  >
    <div class="percentage">
      <div class="percentage-item">
        <div class="num">40%</div>
        <div class="sub-title">FASTER LOAD TIME</div>
      </div>
      <div class="percentage-item">
        <div class="num">80%</div>
        <div class="sub-title">IMAGE SIZE REDUCTION</div>
      </div>
    </div>
  </SolutionsAd2>
  <CommonNumbers
    class="comparison-CommonNumbers"
    :items="$tm('products.stream.overview.numbers')"
  />
  <NetworkAlwaysSafe v-bind="$tm('products.stream.overview.alwaysSafe')" />

  <CommonSuperCharge v-bind="$tm('products.DNS.doNotLeave')" />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.storage.Australia.drmCustomer')"
  />
  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <Footer />
</template>

<script setup></script>

<style lang="scss" scoped>
.percentage {
  display: flex;
  gap: 70px;
  margin-top: 70px;
  &-item {
    display: flex;
    flex-direction: column;
  }
  .num {
    font-family: Mont, Mont;
    font-weight: 600;
    font-size: 48px;
    color: #000000;
    line-height: 64px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .sub-title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #4e4e4e;
    line-height: 24px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}
.comparison-CommonNumbers {
  margin:175px 0 150px 0;
}
</style>
