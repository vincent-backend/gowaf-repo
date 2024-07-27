<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.DNS.breadCrumbs.DNS')"
    :items="[
      {
        label: $t('products.DNS.breadCrumbs.overview'),
        href: '#',
        current: true
      },
      {
        label: $t('products.DNS.breadCrumbs.pricing'),
        href: '#',
        current: false
      },
      {
        label: $t('products.DNS.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('products.DNS.multiDRM.header.preTitle')"
    :title="$t('products.DNS.multiDRM.header.title')"
    :content="$t('products.DNS.multiDRM.header.content')"
    :btn="$t('products.DNS.multiDRM.header.btn')"
    href="#"
    :pic="{
      src: '/images/products/DNS/stream_transcribe_banner_graph@2x.png',
      w: '346px',
      h: '361px',

      msrc: '/images/products/DNS/stream_transcribe_banner_graph@2x.png',
      mw: '31rem',
      mh: '30.56rem'
    }"
  />
  <LgOnly>
    <ProductsNeverHit
      :isShowTitle="true"
      :neverHit="$tm('products.DNS.neverHit')"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="true"
      :neverHit="$tm('products.DNS.neverHit')"
    />
  </XsOnly>
  <ProductsDNStitleAndimg :dnsCustomer="$tm('products.DNS.dnsCustomer')" />
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
  <CommonList1 v-bind="$tm('products.DNS.list1')" />
  <CommonSuperCharge v-bind="$tm('products.DNS.doNotLeave')" />
  <div class="topimg-container">
    <div class="page-container directly">
      <div class="title">{{ $t('products.cdn.BouuyDNS.title') }}</div>
      <div class="img"></div>
    </div>
  </div>
  <ProductsDRMCustomers
    class="BouuyDNS-ProductsDRMCustomers"
    :drmCustomer="$tm('products.DNS.multiDRM.drmCustomer')"
  />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Products'
});
</script>
<style lang="less" scoped>
.topimg-container {
  padding: 80px 0;
  width: 100%;
  .directly {
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      text-align: center;
    }
    .img {
      margin-top: 64px;
      width: 1242px;
      height: 766px;
      background: url(/images/products/DNS/Take full control of your DNS@2x.png);
      background-size: 1242px 766px;
    }
  }
}
@media (max-width: 767px) {
  .BouuyDNS-ProductsDRMCustomers {
    :deep(.isHiddenSubTitle) {
      padding-bottom: 9rem !important;
    }
  }
}
</style>
