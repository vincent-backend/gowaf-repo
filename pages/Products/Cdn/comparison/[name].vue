<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />

  <CommonHeader2
    :title="$t('products.cdn.comparison.header.title') + contrastName"
    :sub-title="
      $t('products.cdn.comparison.header.subTitle') +
      contrastName +
      $t('products.cdn.comparison.header.subRightTitle')
    "
    :content="$t('products.cdn.comparison.header.content')"
    href="#"
  />
  <ProductsDNScomparisonList
    :ptlist="comparisonList"
  ></ProductsDNScomparisonList>
  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="/forgot"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <ProductsStorageSupportPlan
    :title="$t('k-nZkJYyPG4n2wJkwfWa3')"
    :sub-title="$t('uGl5Gn6wQT0HB1zHyhERe')"
    :btn-text="$t('a9f1rhEwslTmRosGmC1YS')"
    :btnsub-text="$t('gEhA0iwr2mZJG_nBmI--A')"
  >
    <div class="Planlist">
      <div class="row-item" v-for="item in i18ntext.list">
        <div class="left-title">
          {{ item.title }}
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </ProductsStorageSupportPlan>
  <SolutionsAd2
    :title="$t('products.cdn.comparison.ad2.title')"
    :content="$t('products.cdn.comparison.ad2.content')"
    href="#"
    pic="/images/products/cdn/comparison/cdn_overview_supercharged_img@2x.png"
    pic-width="363px"
    pic-height="376px"
    m-pic="/images/products/cdn/comparison/cdn_overview_supercharged_img@2x.png"
    m-pic-width="22.19rem"
    m-pic-height="23.25rem"
    :reverse="isMobile()"
  >
    <div class="percentage">
      <div class="percentage-item">
        <div class="num">40%</div>
        <div class="sub-title">{{ $t('ohid8KwORcR1vZawcZDM_') }}</div>
      </div>
      <div class="percentage-item">
        <div class="num">80%</div>
        <div class="sub-title">{{ $t('UnvrBD6XoGKaWae32rPHd') }}</div>
      </div>
    </div>
  </SolutionsAd2>
  <CommonNumbers
    is-row
    is-two-row
    class="comparison-CommonNumbers"
    :items="i18ntext.numbers"
  />
  <NetworkAlwaysSafe
    class="comparison-NetworkAlwaysSafe"
    v-bind="i18ntext.alwaysSafe"
  />

  <CommonSuperCharge v-bind="i18ntext.doNotLeave" />
  <ProductsDRMCustomers :drmCustomer="i18ntext.drmCustomer" />
  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="/forgot"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <Footer />
</template>

<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const router = useRouter();
definePageMeta({
  title: 'Products'
});
const i18ntext = computed(() => {
  return {
    list: [
      {
        title: t('-2QZljReuuOeRLOEqvJJE'),
        content: t('bITZwiXtgQvS-QUUWqfse')
      },
      {
        title: t('ZCQkLwIg0F29avPuu3dRC'),
        content: t('kcvRkBuOq5CgaWZ0Yo01Z')
      }
    ],
    numbers: [
      {
        label: t('PEUMLcb-JhVhbuvaFkWuP'),
        content: t('x3EHuylv_KnlDWqsBwbDK')
      },
      {
        label: '650.000+',
        content: t('home.requestsPerSecond')
      },
      {
        label: '123',
        content: t('BiENYYMJiCVxIk4uYqDTW')
      },
      {
        label: '40.000+',
        content: t('DqXjS0SA1aWVzOjBF1X1f')
      }
    ],
    alwaysSafe: {
      title: t('f-_IELZFCmaPz_aNGdBw3'),
      subTitle: t('r1LMEZHLEo5jRNjMd4Oju'),
      rows: [
        [
          {
            icon: '/images/products/stream/overview/stream_overview_ic_upload@2x.png',
            title: t('solutions.websiteAcceleration.header.preTitle'),
            content: t('-lZ6RpmClevC2t9pCL1mN')
          },
          {
            icon: '/images/products/stream/overview/stream_overview_ic_transcode@2x.png',
            title: t('solutions.storageSoftware.header.preTitle'),
            content: t('j7PnM8ntL5BA1hp2iyfIQ')
          }
        ],
        [
          {
            icon: '/images/products/stream/overview/stream_overview_ic_replicate@2x.png',
            title: t('X4O7ksNH2UIMXKz5ss0oG'),
            content: t('gx28gj_npWa5AjwLVYe3C')
          },
          {
            icon: '/images/products/stream/overview/stream_overview_ic_supercharge@2x.png',
            title: t('network.breadCrumbs.ddosProtection'),
            content: t('eb_uUVoAWHDLff4bwkmfI')
          }
        ],
        [
          {
            icon: '/images/products/stream/overview/stream_overview_ic_replicate@2x.png',
            title: t('home.superCharge.text2'),
            content: t('N33mLUc5Udca12SF0ep1M')
          },
          {
            icon: '/images/products/stream/overview/stream_overview_ic_supercharge@2x.png',
            title: 'Perma-Cache',
            content: t('home.featuresContent6')
          }
        ]
      ]
    },
    doNotLeave: {
      title: t('GGlIuYWgBOiG7sSc4fbde'),
      subTitle: t('bE38HQ4P9HZO7yG05kZMH'),
      tabs: [
        {
          tab: t('6JetIHbuzsX-gcTT9uCfV'),
          title: t('cqoxLSSYJwhLrMwjNhevJ'),
          content: t('n9PeQRJ-8iY0KnSyq2O3O'),
          icon: '/images/products/DNS/cdnfeatures_security_img@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon: '/images/products/DNS/cdnfeatures_security_img@2x.png',
          mIconWidth: '25rem',
          mIconHeight: '25rem'
        },
        {
          tab: t('5lJM-plZzJdKCiVF9JxmE'),
          title: t('kP82qDeKyi_SEC_IX50jX'),
          content: t('85SbuHVxrsfHUep5zYDSV'),
          icon: '/images/network/ddos/Network_DDoS_banner_graph_mil@2x.png',
          iconWidth: '294px',
          iconHeight: '294px',
          mIcon:
            '/mobile-images/network/ddos/Network_DDoS_banner_graph_mil@2x.png',
          mIconWidth: '18.38rem',
          mIconHeight: '18.38rem'
        },
        {
          tab: t('44-lXIykO02GWvsS25cqY'),
          title: t('BADn6wzXcYO1vYMs0RxWd'),
          content: t('AotqB1uZwuX7P6t28qLCc'),
          icon: '/images/network/ddos/Network_DDoS_banner_graph_Upload@2x.png',
          iconWidth: '334px',
          iconHeight: '279px',
          mIcon:
            '/mobile-images/network/ddos/Network_DDoS_banner_graph_Upload@2x.png',
          mIconWidth: '20.88rem',
          mIconHeight: '17.44rem'
        }
      ]
    },
    dnsCustomer: {
      title: t('RrhuU5NcDv5v12JsrWEns'),
      subTitle: t('JPda4h1CBSBmwg_rJ4a6y'),
      items: [
        t('MyV9Wv0kRbJBx3TbE3zfC'),
        t('m3R2gqfe2IIcK-MlTzmEe'),
        t('Gmi2fUczSyXKiFpzHwy4z'),
        t('sWcgRSdqOv_WLP1TiQa-C'),
        t('pEkzrY3d0QSsJo_B1JruS'),
        t('rB7xy6rXKM-P-2UgGETyb')
      ],
      contentImg: '/images/products/DNS/cdnfeatures_reporting_img@2x.png',
      imgw: '400px',
      imgh: '400px',
      mimgw: '25rem',
      mimgh: '25rem'
    },
    drmCustomer: {
      title: t('home.join2.title'),
      contentPre: t('home.header.bottom.weAreRated'),
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: t('home.join2.subTitle3'),
      contentP: t('home.join2.subTitle4'),
      contentLink: t('home.join2.subTitle5'),
      contentLast: t('wQfx4yskPcy47o87qpB6j'),
      isHiddenSubTitle: false,
      faceImg: {
        img: '/images/products/cdn/comparison/Network_ddos_evaluate_character@2x.png',
        top: '-3px',
        right: '135px',
        width: '438px',
        height: '300px',
        mtop: '11.81rem',
        mright: '0',
        mwidth: '27.38rem',
        mheight: '18.75rem'
      },
      list: {
        title: t('slC1dTteLCeaA7xERJn-K'),
        subTitle: t('Jp0_APSokfXIEsGQOaNym'),
        content: t('6Vx2TaI6GYZewcSwEzy2u')
      },
      items: [
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_1_2x.png'
        },
        {
          num: 4.4,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_2_2x.png'
        },
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_3_2x.png'
        },
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_4_2x.png'
        }
      ]
    },
    comparisonList: [
      {
        key: 'CacheFly',
        comparisonIcon: '/images/products/cdn/comparison/CacheFly_logo@2x.png',
        items: [
          '64',
          '29ms',
          t('d0riLfwxNjGrnKKqKHNav'),
          '100%',
          [true, t('Dc3fCUkW_oaCKAcSa5a50')],
          [true],
          [true, t('FyQvjI7xav4zhP49V1Y3m')],
          [true],
          [true],
          [false],
          [true],
          [true],
          [false],
          [true],
          [true],
          [true],
          [true],
          [true],
          [false],
          [true],
          t('cpa89BoatqE7NdxxlcB3g')
        ]
      },
      {
        key: 'AWS',
        comparisonIcon:
          '/images/products/cdn/comparison/CloudFront_logo@2x.png',
        items: [
          '310+',
          '27ms',
          '$425',
          '100%',
          [true, t('uxV9j-9FlBu60BP-NIrrA')],
          [true],
          [true, t('-2btkHSHL3vfor5ICE04I')],
          [true],
          [true, t('ICFmALr60Q5k7pQ-XP53t')],
          [true],
          [true],
          [true],
          [true],
          [true],
          [true],
          [true],
          [false],
          [true],
          [false],
          [false],
          t('zLd6n4A8P8Uqtk_9sqwGC')
        ]
      },
      {
        key: 'CDN77',
        comparisonIcon: '/images/products/cdn/comparison/CDN77_logo@2x.png',
        items: [
          '48',
          '31ms',
          '$165',
          '99.99%',
          [true, t('8KdjRa-q-5mB-FSMoPV9w')],
          [true],
          [true, t('pjZMjBx6u_xLAT8zb09kd')],
          [true],
          [true, t('2LsOtWLQXkXCcTONfchIe')],
          [true],
          [true],
          [true],
          [true],
          [true],
          [true],
          [true],
          [false],
          [true],
          [false],
          [true],
          t('ygzU9ETzHNK3iBqXGx7og')
        ]
      },
      {
        key: 'CloudFlare',
        comparisonIcon:
          '/images/products/cdn/comparison/CloudFlare_logo@2x.png',
        items: [
          '270+',
          '28ms',
          '$2000+',
          t('x_CzUcbrfLoMzLHLN_2dP'),
          [true, t('27XtoYTd8rQGpFqzh6Xkp')],
          [true],
          [true, t('rCZ4mwRhc0e4t39jfk2zr')],
          [true],
          [true, t('XqiQHdK1YbTenfDq9eGaf')],
          [true],
          [true],
          [true],
          [true],
          [true],
          [true],
          [true],
          [false],
          [true],
          [false],
          [true],
          t('0Ph-qJsPCXAg4p9JbveN4')
        ]
      },
      {
        key: t('products.cdn.breadCrumbs.fastly'),
        comparisonIcon: '/images/products/cdn/comparison/Fastly_logo@2x.png',
        items: [
          '98',
          '29ms',
          '$600+',
          '99.99%',
          [true, t('LqrVY7I6V_6tQobTY1fUl')],
          [true],
          [true, t('WBJe3pMejW1VAJCka26Bn')],
          [true],
          [true, t('qWoFrXHtGZ2LClCSmmuFA')],
          [true],
          [true],
          [false],
          [true],
          [true],
          [true],
          [true],
          [false],
          [true],
          [false],
          [true],
          t('p1tYg4UQh4XIHQi_tNXs3')
        ]
      },
      {
        key: t('products.cdn.breadCrumbs.vsakamai'),
        comparisonIcon: '/images/products/cdn/comparison/akamai_logo@2x.png',
        items: [
          '135',
          '29ms',
          t('iBkvbrOt1Rsmuz7owRarZ'),
          '100%',
          [true, t('7VR8ogzy7t_FPWygIByKA')],
          [true],
          [true, t('L3UOjB8d3CwlKqzN0UpEK')],
          [true],
          [true, t('4jJP8-kWbSqD2ybSlwHNC')],
          [true],
          [true],
          [true],
          [true],
          [true],
          [true],
          [true],
          [false],
          [true],
          [false],
          [true],
          t('V3uuMs1bgB8XVpX9jNBFJ')
        ]
      }
    ]
  };
});

const NameMap: any = {
  aws: 'CloudFront AWS',
  cacheFly: 'CacheFly',
  CDN77: 'CDN77',
  cloudFlare: 'CloudFlare',
  fastly: 'Fastly',
  vsakamai: 'Akamai'
};
onMounted(() => {
  console.log('route.params.name', route.params.name);
  if (!route.params.name || !NameMap[route.params.name as any]) {
    router.replace({ path: '/Products/Cdn/comparison/aws' });
  }
});

const contrastName = computed(() => {
  /*
  CDN-comparison-AWS
  CDN-comparison-CacheFly
  CDN-comparison-CDN77
  CDN-comparison-CloudFlare
  CDN-comparison-Fastly
  CDN-comparison-vsakamai
  */
  return NameMap[route.params.name as any];
});

const comparisonList = computed(() => {
  return i18ntext.value.comparisonList.filter(el => {
    return (
      el.key ==
      (contrastName.value === 'CloudFront AWS' ? 'AWS' : contrastName.value)
    );
  });
});
</script>

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
  margin: 175px 0 150px 0;
}
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
}
.comparison-NetworkAlwaysSafe {
  :deep(.always-safe > .title) {
    text-align: center;
  }
  :deep(.always-safe > .sub-title) {
    text-align: center;
  }
}
@media (max-width: 767px) {
  .percentage {
    display: flex;
    gap: 7rem;
    margin-top: 3.13rem;
    &-item {
      display: flex;
      flex-direction: column;
    }
    .num {
      font-family: Mont, Mont;
      font-weight: 600;
      font-size: 3.13rem;
      color: #000000;
      line-height: 4.13rem;
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
      font-size: 1.5rem;
      color: #4e4e4e;
      line-height: 2.06rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .comparison-CommonNumbers {
    margin: 3.13rem 0 6.25rem 0;
  }
}
</style>
