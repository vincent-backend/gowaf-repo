<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.storage.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.stream.breadCrumbs.overview'),
        href: '/Products/Storage/BouuyStorage',
        current: true
      },
      {
        label: $t('products.storage.breadCrumbs.SSDStorage'),
        href: '/Products/Storage/SSDStorage',
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
    :pre-title="$t('products.storage.BouuyStorage.header.preTitle')"
    :title="$t('products.storage.BouuyStorage.header.title')"
    :content="$t('products.storage.BouuyStorage.header.content')"
    :btn="$t('products.storage.BouuyStorage.header.btn')"
    :hint="$t('products.storage.SSDStorage.header.hint')"
    href="#"
    :pic="{
      src: '/images/products/storage/BouuyStorage/stream_transcribe_banner_graph@2x.png',
      w: '346px',
      h: '361px',

      msrc: '/images/products/storage/BouuyStorage/stream_transcribe_banner_graph@2x.png',
      mw: '31rem',
      mh: '22rem'
    }"
  />

  <ProductsEasyPowerful
    :title="$t('products.storage.BouuyStorage.EasyPowerful.title')"
    :sub-title="$t('products.storage.BouuyStorage.EasyPowerful.subTitle')"
    :ful-items="$tm('products.storage.BouuyStorage.EasyPowerful.items')"
  />
  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="$tm('products.storage.SSDStorage.numbers')"
  />
  <CommonSuperCharge
    class="BouuyStorage-CommonSuperCharge"
    v-bind="$tm('products.DNS.doNotLeave')"
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
  <PricingMap
    :content="{
      title: $t('resources.about.map.title'),
      subTitle: $t('resources.about.map.subTitle')
    }"
  />
  <div class="price-1-container page-container">
    <div class="title-box">
      <div class="title">
        {{ $t('products.storage.BouuyStorage.PricingTable.title') }}
      </div>
      <div class="sub-title">
        {{ $t('products.storage.BouuyStorage.PricingTable.subtitle') }}
      </div>
    </div>
    <PricingTable :content="$tm('pricing.cdn.pricingTable')" />
  </div>
  <ProductsCalculate1
    :items="$tm('products.stream.overview.Calculate.list')"
    :subs="$tm('pricing.cdn.calculator1.subs')"
  />
  <CommonList1 v-bind="$tm('products.storage.BouuyStorage.list1')" />
  <PricingSaveMoney
    :title="$t('products.storage.BouuyStorage.SaveMoney.title')"
    :sub-title="$t('products.storage.BouuyStorage.SaveMoney.subTitle')"
    :f-items="$tm('products.storage.BouuyStorage.SaveMoney.fitem')"
    :hint="$t('products.storage.BouuyStorage.SaveMoney.hint')"
  />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.storage.BouuyStorage.drmCustomer')"
  />

  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Products'
});
</script>

<style lang="scss" scoped>
.price-1-container {
  margin-top: 120px;
  width: 1200px;
  height: 845px;
  background: #ffffff;
  box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
  border-radius: 24px;
  padding: 20px;
  box-sizing: border-box;
  .title-box {
    width: 1160px;
    height: 116px;
    background: linear-gradient(316deg, #3475f5 0%, #12e599 100%);
    border-radius: 14px 14px 0px 0px;
    filter: blur(0px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 26px;
      color: #ffffff;
      line-height: 37px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .sub-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 16px;
      color: #ffffff;
      line-height: 22px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  :deep(.pricing-table) {
    margin-top: 0;
  }
}
@media (max-width: 767px) {
  .BouuyStorage-CommonSuperCharge {
    margin-bottom: 6.25rem;
  }
  .price-1-container {
    margin-top: 6.25rem;
    width: 100%;
    height: fit-content;
    background: #ffffff;
    box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
    border-radius: 1.5rem;
    padding: 1.25rem;
    box-sizing: border-box;
    .title-box {
      width: 100%;
      height: 9.75rem;
      background: linear-gradient(316deg, #3475f5 0%, #12e599 100%);
      border-radius: 0.88rem 0.88rem 0rem 0rem;
      filter: blur(0px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      .title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 2rem;
        color: #ffffff;
        line-height: 2.81rem;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }
      .sub-title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.38rem;
        color: #ffffff;
        line-height: 1.88rem;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }
    }
    :deep(.pricing-table) {
      margin-top: 0;
    }
  }
}
</style>
