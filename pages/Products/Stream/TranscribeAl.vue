<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.stream.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.stream.breadCrumbs.overview'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.player'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.mediaCage'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.multiDRM'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.transcribeAI'),
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
    :pre-title="$t('products.Stream.TranscribeAI.header.preTitle')"
    :title="$t('products.Stream.TranscribeAI.header.title')"
    :content="$t('products.Stream.TranscribeAI.header.content')"
    :btn="$t('products.cdn.overview.header.btn')"
    href="#"
    :hint="$t('products.cdn.overview.header.hint')"
    :pic="{
      src: '/images/products/Stream/TranscribeAI/stream_transcribe_banner_graph@2x.png',
      w: '496px',
      h: '369px',
      msrc: '/images/products/Stream/TranscribeAI/stream_transcribe_banner_graph@2x.png',
      mw: '23.81rem',
      mh: '23.19rem'
    }"
  />
  <ProductsEasyPowerful
    :title="$t('products.Stream.TranscribeAI.EasyPowerful.title')"
    :sub-title="$t('products.Stream.TranscribeAI.EasyPowerful.subTitle')"
    :ful-items="$tm('products.Stream.TranscribeAI.EasyPowerful.items')"
  />
  <LgOnly>
    <ProductsNeverHit
      :isShowTitle="true"
      :neverHit="$tm('products.Stream.TranscribeAI.neverHit')"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="true"
      :neverHit="$tm('products.Stream.TranscribeAI.neverHit')"
    />
  </XsOnly>
  <SolutionsAd1
    :title="$t('products.Stream.TranscribeAI.ad1.title')"
    :sub-title="$t('products.Stream.TranscribeAI.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <CommonList1
    :title1="$t('products.Stream.TranscribeAI.list1.title')"
    :title2="$t('products.Stream.TranscribeAI.list1.subTitle')"
    :items="$tm('products.Stream.TranscribeAI.list1.items')"
  />
  <ProductsStorageSupportPlan
    title=""
    sub-title=""
    icon="/images/products/stream/TranscribeAI/Pricing_CDN_card_graph@2x.png"
    :btn-text="$t('products.Stream.TranscribeAI.SupportPlan.btnText')"
    :btnsubText="$t('products.Stream.TranscribeAI.SupportPlan.btnsubText')"
  >
    <div class="Planlist">
      <div
        class="row-item"
        v-for="item in $tm('products.Stream.TranscribeAI.SupportPlan.list')"
      >
        <div class="left-title">
          <span class="hit">{{ item.hin }}</span>
          {{ item.title }}
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
      <div class="included">
        <div class="top-title">
          {{ $t('products.Stream.TranscribeAI.SupportPlan.included.title') }}
        </div>
        <div class="Checklist">
          <div
            class="CheckTheBox"
            v-for="(item, index) in $tm(
              'products.Stream.TranscribeAI.SupportPlan.included.list'
            )"
            :key="index"
          >
            <div class="icon"></div>
            <div class="txt">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </ProductsStorageSupportPlan>
  <CommonSuperCharge v-bind="$tm('products.Stream.TranscribeAI.doNotLeave')" />
  <ProductsPlayerVideo />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.stream.multiDRM.drmCustomer')"
  />
  <Footer />
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.Planlist {
  display: flex;
  flex-direction: column;
  gap: 30px;
  .row-item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e6e6e6;
    gap: 20px;
    padding-bottom: 20px;
    .left-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 24px;
      color: #000000;
      line-height: 33px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      .hit {
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 50px;
        color: #000000;
        line-height: 70px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(0deg, #ff905d 0%, #ffb13e 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .content {
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
  .included {
    display: flex;
    flex-direction: column;
    .top-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 24px;
      color: #000000;
      line-height: 33px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .Checklist {
      width: 440px;
      display: flex;
      flex-wrap: wrap;
      gap: 22px 47px;
      margin-top: 20px;

      .CheckTheBox {
        display: flex;
        align-items: center;
        gap: 10px;
        .icon {
          width: 24px;
          height: 24px;
          background: linear-gradient(147deg, #f9c22f 0%, #fa6e4a 100%);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          &::before {
            display: block;
            content: '';
            width: 14px;
            height: 14px;
            background: url('/images/products/stream/TranscribeAI/home_Text_list_ic_tick@2x.png');
            background-size: 100% 100%;
          }
        }
        .txt {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 16px;
          color: #000000;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}
</style>
