<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.storage.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.stream.breadCrumbs.overview'),
        href: '#',
        current: false
      },
      {
        label: $t('products.storage.breadCrumbs.edgeTier'),
        href: '#',
        current: true
      },
      {
        label: $t('products.stream.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('products.storage.SSDStorage.header.preTitle')"
    :title="$t('products.storage.SSDStorage.header.title')"
    :content="$t('products.storage.SSDStorage.header.content')"
    :btn="$t('products.storage.BouuyStorage.header.btn')"
    :hint="$t('products.storage.SSDStorage.header.hint')"
    href="#"
    :pic="{
      src: '/images/products/storage/SSDStorage/stream_transcribe_banner_graph@2x.png',
      w: '346px',
      h: '361px',

      msrc: '/images/products/storage/SSDStorage/stream_transcribe_banner_graph@2x.png',
      mw: '23.31rem',
      mh: '20.31rem'
    }"
  />
  <PricingMap
    :content="{
      title: $t('resources.about.map.title'),
      subTitle: $t('resources.about.map.subTitle')
    }"
  />
  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="$tm('products.storage.SSDStorage.numbers')"
  />
  <PricingSaveMoney
    :title="$t('products.storage.SSDStorage.SaveMoney.title')"
    :sub-title="$t('products.storage.SSDStorage.SaveMoney.subTitle')"
    :f-items="$tm('products.storage.SSDStorage.SaveMoney.fitem')"
    hint=""
  />
  <ProductsCalculate1
    :items="$tm('products.stream.overview.Calculate.list')"
    :subs="$tm('pricing.cdn.calculator1.subs')"
  />
  <CommonList1 v-bind="$tm('products.storage.BouuyStorage.list1')" />
  <CommonSuperCharge v-bind="$tm('products.DNS.doNotLeave')" />
  <div class="Latency page-container">
    <div class="title-box">
      <div class="title">
        {{ $t('products.storage.SSDStorage.Latency.title') }}
      </div>
      <div class="sub-title">
        {{ $t('products.storage.SSDStorage.Latency.subtitle') }}
      </div>
    </div>
    <div class="img-bg">
      <XsOnly>
        <img
          class="mimg"
          src="/mobile-images/products/storage/SSDStorage/storage_img@2x.png"
          alt=""
          srcset=""
        />
      </XsOnly>
      <LgOnly>
        <img
          class="img"
          src="/images/products/storage/SSDStorage/Hop Beyond Latency_img@2x.png"
          alt=""
          srcset=""
        />
      </LgOnly>
    </div>
  </div>
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.storage.BouuyStorage.drmCustomer')"
  />

  <Footer />
</template>

<style lang="scss" scoped>
.Latency {
  display: flex;
  margin-top: 120px;
  flex-direction: column;
  .title-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }
    .sub-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }
  }
  .img-bg {
    width: 1200px;
    .img {
      width: 100%;
    }
  }
}
@media (max-width: 767px) {
  .Latency {
    display: flex;
    margin-top: 6.25rem;
    flex-direction: column;
    .title-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      .title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 2.5rem;
        color: #000000;
        line-height: 3.5rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .sub-title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.75rem;
        color: #4e4e4e;
        line-height: 2.38rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
    .img-bg {
      width: 100%;
      .mimg {
        width: 100%;
        height: 91.5rem;
      }
    }
  }
}
</style>
