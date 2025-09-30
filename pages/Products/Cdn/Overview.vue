<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />

  <CommonHeader1
    :pre-title="$t('products.cdn.overview.header.preTitle')"
    :title="$t('products.cdn.overview.header.title')"
    :content="$t('products.cdn.overview.header.content')"
    :btn="$t('products.cdn.overview.header.btn')"
    href="/forgot"
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
    :list1="i18ntext.list1"
    :list2="i18ntext.list2"
  />

  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="i18ntext.numbers"
  />

  <CommonSuperCharge v-bind="i18ntext.goFaster" />

  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="/forgot"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
  />

  <CommonList1 v-bind="i18ntext.list3" />

  <ProductsList1 />
  <PricingCalculate1 />

  <div class="map-container">
    <div class="title">{{ $t('products.cdn.overview.map.title') }}</div>
    <div class="sub-title">{{ $t('products.cdn.overview.map.subTitle') }}</div>
    <NetworkBanner class="map-container" />
  </div>

  <ProductsReadyToHop />
  <ProductsIntuitivePanels :list="intuitivePanelsList" />

  <SolutionsAd1
    style="margin-top: 0"
    :title="$t('products.cdn.overview.ad1_2.title')"
    :sub-title="$t('products.cdn.overview.ad1_2.subTitle')"
    :btn="$t('products.cdn.overview.ad1_2.btn')"
    href="/forgot"
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

<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Products'
});
const i18ntext = computed<any>(() => {
  return {
    list1: [
      t('1PAn6q6oGb2yDA5_-NNHC'),
      t('fb2mCvcpcC7_M-DK0hIt7'),
      t('gxZpkAWdQ53ujsKcAeARU'),
      t('uRao7VE1b0JinEkTtLiy9'),
      t('IYJQsg9Hd3Q4FKJACLC5Z'),
      t('TXNWhrx6PIBqZnrUkhmZN')
    ],
    list2: [
      {
        icon: '/images/products/cdn/overview/cdn_overview_never_ic_1_nor@2x.png',
        iconActive:
          '/images/products/cdn/overview/cdn_overview_never_ic_1_sele@2x.png',
        title: t('wSBlPFt1ZYzF5piinJo8-'),
        content: t('fpuwe-Puowa7fKh2uOvLN')
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_never_ic_2_nor@2x.png',
        iconActive:
          '/images/products/cdn/overview/cdn_overview_never_ic_2_sele@2x.png',
        title: t('2VSWM5fA9jcXRtLFnvGl6'),
        content: t('jFljO5tXwK84zrW6Zl5Hl')
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_never_ic_3_nor@2x.png',
        iconActive:
          '/images/products/cdn/overview/cdn_overview_never_ic_3_sele@2x.png',
        title: t('saVbtL2cUjd5F2Al1K0Hf'),
        content: t('2Ld9EoNBSDa-XPRDw7c1o')
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_never_ic_4_nor@2x.png',
        iconActive:
          '/images/products/cdn/overview/cdn_overview_never_ic_4_sele@2x.png',
        title: t('09wUFOVxktQu_onbJaRqA'),
        content: t('-jUfNg7g1yNifTfR4KwA6')
      }
    ],
    list3: {
      title1: t('2LoHMPVMBXgMetMUiQJh9'),
      title2: t('products.storage.AfriceMiddleEast.list1.subTitle'),
      items: [
        {
          icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_1@2x.png',
          title: t('053LltWUAiQWo44G-qciW'),
          content: t('oS8i8X6PgBlY6DHf6uVzZ')
        },
        {
          icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_2@2x.png',
          title: t('hC-unQx-5bnwrQemWAq2h'),
          content: t('LhgzkM8jkivVfzRqHMJdE')
        },
        {
          icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_3@2x.png',
          title: t('a9Mv9dtLYM0n_adNbbyjt'),
          content: t('1iDB7T5Sz7kTjro2oN7EY')
        },
        {
          icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_4@2x.png',
          title: t('uRao7VE1b0JinEkTtLiy9'),
          content: t('9Rq3LrZInXYj8Cw2gYFZa')
        },
        {
          icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_5@2x.png',
          title: t('IYJQsg9Hd3Q4FKJACLC5Z'),
          content: t('HssgPf8qStJZTKqs_aJle')
        },
        {
          icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_6@2x.png',
          title: t('tI0-aRMh-hmf3-kaL5dCL'),
          content: t('mp0dUZFG6uyPEsUofdQGZ')
        }
      ]
    },
    numbers: [
      {
        label: '123',
        content: t('BiENYYMJiCVxIk4uYqDTW')
      },
      {
        label: t('PEUMLcb-JhVhbuvaFkWuP'),
        content: t('home.NetworkCapacity')
      },
      {
        label: t('q1ufRx9wOX_bkNPJGQmN1'),
        content: t('RDF-FK0HEbcFR8RsEIV6H')
      },
      {
        label: '40.000+',
        content: t('DqXjS0SA1aWVzOjBF1X1f')
      }
    ],
    goFaster: {
      title: t('7l0O9Lt7dsbXZe4DG56cA'),
      subTitle: t('tI4sLKkIYy_DwVzlztI2C'),
      tabs: [
        {
          tab: 'Perma-Cache',
          title: t('NDbhLim71QNaIXOte9ulQ'),
          content: t('QNNyCsg_vuBomcptrbWiq'),
          icon: '/images/products/cdn/overview/cdn_overview_supercharged_img@2x.png',
          iconWidth: '305px',
          iconHeight: '314px',
          mIcon: '/images/products/cdn/overview/cdn_overview_supercharged_img@2x.png',
          mIconWidth: '19.06rem',
          mIconHeight: '19.63rem',
          btn: t('VEjyXC8EDvcupdbfuONz4'),
          href: '#'
        },
        {
          tab: 'SmartEdge™',
          title: t('xXZVbIrb4TgUhywFYezl2'),
          content: t('KVwMXAZvPYH0_-I_TSNMD'),
          icon: '/images/products/cdn/overview/cdn_overview_supercharged2_img@2x.png',
          iconWidth: '360px',
          iconHeight: '360px',
          mIcon: '/images/products/cdn/overview/cdn_overview_supercharged_img@2x.png',
          mIconWidth: '19.06rem',
          mIconHeight: '19.63rem',
          btn: t('_3NlIECsW-_UbHPOLU-_-'),
          href: '#'
        },
        {
          tab: t('MiD8TA8CBSTQcgl2doZJo'),
          title: t('LK4bq0cZLdvWewzjM1kil'),
          content: t('aH7DYlEg8sXK4g3iobd1O'),
          icon: '/images/products/cdn/overview/cdn_overview_supercharged3_img@2x.png',
          iconWidth: '360px',
          iconHeight: '360px',
          btn: t('cJ9ot_IVA01sygSCEAroy'),
          mIcon: '/images/products/cdn/overview/cdn_overview_supercharged_img@2x.png',
          mIconWidth: '19.06rem',
          mIconHeight: '19.63rem',
          href: '#'
        },
        {
          tab: 'SafeHop™',
          title: t('DB5Kb_VS2xW0yaeS4E-RC'),
          content: t('hMP2244AATW07Xill9Nnk'),
          icon: '/images/products/cdn/overview/cdn_overview_supercharged4_img@2x.png',
          iconWidth: '360px',
          iconHeight: '360px',
          mIcon: '/images/products/cdn/overview/cdn_overview_supercharged_img@2x.png',
          mIconWidth: '19.06rem',
          mIconHeight: '19.63rem',
          btn: t('Gzq0MUUSheXojnRdz0wkE'),
          href: '#'
        }
      ]
    }
  };
});

const intuitivePanelsList = computed<any>(() => {
  return [
    {
      tab: t('uKR96V7fJQ9hdwTxe338u'),
      content: t('Y43wQu1zLlL_sjReUkI9R'),
      pic: '/images/products/cdn/features/cdn_features_mockup@2x.png',
      picWidth: '760px',
      picHeight: '480px',
      mpicWidth: '38.72rem',
      mpicHeight: '24.44rem'
    },
    {
      tab: t('gzfSWwGIJzFT-bIUZoEtQ'),
      content: t('0buAGSOd1EtlxA7uG6y3c'),
      pic: '/images/products/cdn/features/cdn_features_mockup_2@2x.png',
      picWidth: '760px',
      picHeight: '480px',
      mpicWidth: '38.72rem',
      mpicHeight: '24.44rem'
    },
    {
      tab: t('mC_E6AGWntvPccYLCjx0U'),
      content: t('X91ca7DJZbrsuNCF0KKAP'),
      pic: '/images/products/cdn/features/cdn_features_mockup@2x.png',
      picWidth: '760px',
      picHeight: '480px',
      mpicWidth: '38.72rem',
      mpicHeight: '24.44rem'
    },
    {
      tab: t('7vxHpe4sfv4-cvDaS0NpM'),
      content: t('nfrCpiIosotDhPh4vad7e'),
      pic: '/images/products/cdn/features/cdn_features_mockup@2x.png',
      picWidth: '760px',
      picHeight: '480px',
      mpicWidth: '38.72rem',
      mpicHeight: '24.44rem'
    }
  ];
});
</script>

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
    width: 100%;
    font-size: 16px;
    color: #4e4e4e;
    text-align: center;
  }

  .map-container {
    margin-top: 40px;
  }
}
@media (max-width: 767px) {
  .map-container {
    width: 100%;
    margin-top: 6.25rem;

    > .title {
      width: 100%;
      max-width: 43rem;
      margin: 0 auto;
      box-sizing: border-box;
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 2.5rem;
      color: #000000;
      line-height: 3.5rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    > .sub-title {
      box-sizing: border-box;
      width: 100%;
      max-width: 43rem;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.75rem;
      color: #4e4e4e;
      line-height: 2.38rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .map-container {
      margin-top: 2rem;
    }
  }
}
</style>
