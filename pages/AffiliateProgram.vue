<template>
  <Header />
  <CommonHeader1
    :pre-title="$t('home.AffiliateProgram.preTitle')"
    :title="$t('home.AffiliateProgram.title')"
    :content="$t('home.AffiliateProgram.content')"
    :show-foot="false"
    :btn="$t('home.AffiliateProgram.btn')"
    :hint="$t('home.AffiliateProgram.hint')"
    href="#"
    :pic="{
      src: '/images/home/affiliate_program_banner_graph@2x.png',
      w: '559px',
      h: '453px',

      msrc: '/images/home/affiliate_program_banner_graph@2x.png',
      mw: '26.5rem',
      mh: '29.13rem'
    }"
  />
  <ProductsEasyPowerful :show-next="false" v-bind="i18ntext.neverHit" />
  <VSpace h="100px" mh="6.25rem"></VSpace>
  <CommonList1 v-bind="i18ntext.list1" />
  <div class="btn-row page-container">
    <div class="btn">
      {{ $t('home.AffiliateProgram.listBtn') }}
    </div>
  </div>
  <VSpace h="100px" mh="6.25rem"></VSpace>
  <div class="page-container Marketing">
    <div class="mk-title">{{ $t('home.AffiliateProgram.mktitle') }}</div>
    <div class="mk-subtitle">{{ $t('home.AffiliateProgram.mksubtitle') }}</div>
    <div class="mkt-img" v-if="!isMobile">
      <img
        class="mkt-img"
        src="/public/images/home/编组_178@2x.png"
        alt=""
        srcset=""
      />
    </div>
  </div>
  <XsOnly>
    <Footer :showbot-foot="false" />
    <SolutionsAd1
      :title="$t('home.AffiliateProgram.fotad1.title')"
      :sub-title="$t('home.AffiliateProgram.fotad1.subTitle')"
      :btn="$t('home.AffiliateProgram.fotad1.btn')"
      href="/ContactSales"
      pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
      pic-width="300px"
      pic-height="300px"
      m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
      m-pic-width="18.75rem"
      m-pic-height="18.72rem"
    />
    <VSpace h="100px" mh="3.75rem" bg="#fff"></VSpace>
    <SolutionsAd1
      :title="$t('home.AffiliateProgram.fotad2.title')"
      :sub-title="$t('home.AffiliateProgram.fotad2.subTitle')"
      :btn="$t('products.cdn.overview.ad1.btn')"
      href="/forgot"
      pic="/images/home/video_banner_graph@2x.png"
      pic-width="300px"
      pic-height="300px"
      m-pic="/images/home/video_banner_graph@2x.png"
      m-pic-width="18.75rem"
      m-pic-height="18.72rem"
    />
    <VSpace h="100px" mh="3.75rem" bg="#fff"></VSpace>
  </XsOnly>
  <LgOnly>
    <VSpace h="40px" mh="6.25rem"></VSpace>
    <div class="btn-row page-container">
      <div class="btn">
        {{ $t('home.AffiliateProgram.listBtn') }}
      </div>
    </div>
  </LgOnly>
  <VSpace h="100px" mh="3.25rem"></VSpace>
  <div class="page-container">
    <HomeCollapse
      :title="$t('home.AffiliateProgram.Collapse.title')"
      :subtitle="$t('home.AffiliateProgram.Collapse.subtitle')"
      :list="i18ntext.list"
    ></HomeCollapse>
  </div>
  <VSpace h="100px" mh="6.25rem"></VSpace>
  <Footer />
</template>
<script setup lang="ts">
import VSpace from './../components/VSpace.vue';
const { t } = useI18n();
definePageMeta({
  title: 'AffiliateProgram'
});
const formLabelAlign = reactive({
  name: '',
  Email: '',
  Password: '',
  Company: '',
  Website: '',
  Phone: '',
  link: '',
  Message: '',
  checked: false
});
const activt = ref(0);
const list = ref([
  t('aBftC0NbhkPUijTrsMnBe'),
  t('aBftC0NbhkPUijTrsMnBe'),
  t('aBftC0NbhkPUijTrsMnBe'),
  t('uLYOzWAiNHHdOADYCEqMl'),
  t('solutions.storageSoftware.header.preTitle'),
  t('MiD8TA8CBSTQcgl2doZJo')
]);

const i18ntext = computed<any>(() => {
  return {
    neverHit: {
      title: t('PccBHTvHxK3lRC1racW2R'),
      subTitle: t('uEPU8EcifF9lNg8jQyYbC'),
      fulItems: [
        {
          icon: '/images/home/affiliate_1_ic_1@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: t('pJ_8Zv6cNrp6egWd9bhPb'),
          content: t('aQp4wlCR46UGTpq-bttzc'),
          contentAlign: 'center'
        },
        {
          icon: '/images/home/affiliate_1_ic_2@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: t('cNmcs6letMxAM2ZMOWLhS'),
          content: t('ULjhWzDk3587GTPFOFueQ'),
          contentAlign: 'center'
        },
        {
          icon: '/images/home/affiliate_1_ic_3@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: t('M5m30wl1mKYbS7ZHpnvO2'),
          content: t('RMtoWMEIRCHXmuRpKsUZW'),
          contentAlign: 'center'
        }
      ]
    },
    list1: {
      title1: t('oz-pRtpd3kGrQi7zgpi49'),
      title2: t('vg6Pv_9yCRssGB9s4hTT9'),
      items: [
        {
          icon: '/images/home/affiliate_2_ic_1@2x.png',
          title: t('sQoVKK1ZNIe38NAQUpBWF'),
          content: t('gLFFsTqpI-cI1tGW1LcXm')
        },
        {
          icon: '/images/home/affiliate_2_ic_2@2x.png',
          title: t('-JIMxMV5mP5YTkoE1MK4W'),
          content: t('xfDW3DuWU9eAZnb9QUKlZ')
        },
        {
          icon: '/images/home/affiliate_2_ic_3@2x.png',
          title: t('6Dn0HsX6tOsS6PHaG2drl'),
          content: t('MGERblUH_TqG5zikZVgbk')
        }
      ]
    },
    list: [
      {
        title: t('9mUnTWb-ERh3qaoibA55F'),
        subtitle: t('-nSt6fpcwhN56IrCz5MGy')
      },
      {
        title: t('rHeiGtFjUDdXqCjXaJ9XU'),
        subtitle: t('VIkO3GosI8TvChwX2gPur')
      },
      {
        title: t('H6LflLcy2c0_UuTyOsBh8'),
        subtitle: t('Cc46_snoC79VqvDpV-d3v')
      },
      {
        title: t('MoD632gtQOm-6a-MazjUe'),
        subtitle: t('ytEIiU3g20E3EhGoEh7uC')
      },
      {
        title: t('39IIb89OuqNoyVWT70y2J'),
        subtitle: t('xuhhXaeMcukdlheazq5g3')
      },
      {
        title: t('78eUxk5VkqMv9mI86132Z'),
        subtitle: t('nFU7aNLJGX1L2St2iXwTJ')
      },
      {
        title: t('GpO2Nt06xw67z2R7XT9We'),
        subtitle: t('GEKglXFurhYZq9nPKB--U')
      }
    ]
  };
});
</script>
<style lang="scss" scoped>
.btn-row {
  width: 100%;
  display: flex;
  justify-content: center;
  .btn {
    width: 240px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid rgba(70, 207, 58, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Mont, Mont;
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    line-height: 21px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}
.Marketing {
  .mk-title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
  .mk-subtitle {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #4e4e4e;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin: 20px 0 40px 0;
  }
  .mkt-img {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .btn-row {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
    .btn {
      width: 22.88rem;
      height: 4.63rem;
      background: #ffffff;
      border-radius: 2.34rem;
      border: 0.13rem solid rgba(70, 207, 58, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Mont, Mont;
      font-weight: 600;
      font-size: 1.63rem;
      color: #000000;
      line-height: 2.13rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .Marketing {
    .mk-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 2.5rem;
      color: #000000;
      line-height: 3.5rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .mk-subtitle {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.75rem;
      color: #4e4e4e;
      line-height: 2.38rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin: 1rem 0 2rem 0;
    }
    .mkt-img {
      width: 100%;
    }
  }
}
</style>
