<template>
  <Header />

  <CommonHeader1
    :pre-title="$t('solutions.videoDelivery.header.preTitle')"
    :title="$t('solutions.videoDelivery.header.title')"
    :content="$t('solutions.videoDelivery.header.content')"
    :btn="$t('solutions.videoDelivery.header.btn')"
    href="#"
    :hint="$t('solutions.videoDelivery.header.hint')"
    :show-foot="false"
    :pic="{
      src: '/images/solutions/video-delivery/Solutions_Video_Delivery_banner_graph_1@2x.png',
      w: '362px',
      h: '338px',

      msrc: '/mobile-images/solutions/video-delivery/Solutions_Video_Delivery_banner_graph_1@2x.png',
      mw: '22.63rem',
      mh: '21.13rem'
    }"
  />

  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 60px"
    :items="i18ntext.numbers"
  />

  <CommonSuperCharge v-bind="i18ntext.superCharge" />

  <SolutionsAd1
    v-bind="{
      title: $t('solutions.videoDelivery.ad1.title'),
      subTitle: $t('solutions.videoDelivery.ad1.subTitle'),
      btn: $t('solutions.videoDelivery.ad1.btn'),
      href: '#',
      pic: '/images/solutions/video-delivery/Solutions_Video_Delivery_banner_graph_2@2x.png',
      picWidth: '300px',
      picHeight: '264px',
      mPic: '/mobile-images/solutions/video-delivery/Solutions_Video_Delivery_banner_graph_2@2x.png',
      mPicWidth: '18.75rem',
      mPicHeight: '16.5rem'
    }"
  />

  <CommonList2 v-bind="i18ntext.list2" />

  <div class="map-container">
    <div class="title">{{ $t('solutions.videoDelivery.map.title') }}</div>
    <div class="sub-title">
      {{ $t('solutions.videoDelivery.map.subTitle') }}
    </div>
    <NetworkBanner class="map-container" />
  </div>

  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="i18ntext.numbers2"
  />

  <SolutionsFeatureList1 :items="i18ntext.features" />

  <ProductsCalculate1 :items="i18ntext.list" :subs="i18ntext.subs" />

  <SolutionsSupportPlan />

  <NetworkJoin1
    v-bind="{
      ...i18ntext.join1,
      avatar:
        '/images/solutions/video-delivery/Network_Overview_evaluate_character@2x.png',
      mAvatar:
        '/mobile-images/solutions/video-delivery/Network_Overview_evaluate_character@2x.png'
    }"
  />

  <Footer />
</template>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Solutions'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: '1.000.000+',
        content: t('ailUpetGngG-Iu1SAPP1Z')
      },
      {
        label: t('zL_N5pvniQimxTom0ni_7'),
        content: t('42XfFYOriwEO3d5a0USlJ')
      },
      {
        label: '123',
        content: t('BiENYYMJiCVxIk4uYqDTW')
      },
      {
        label: '$1/month',
        content: t('23Ew9lfpb1dymnhr6h363')
      }
    ],
    superCharge: {
      title: t('L91LhQcRe7PJIq9NYLFeB'),
      subTitle: t('-fWw-gpzgYeOZ-b3mZpi3'),
      tabs: [
        {
          tab: t('S4vwJiH864rdMjOWiYn6r'),
          title: t('sMWQ-yVPtmI9VCu6_vvqU'),
          content: t('3EvUgtbKhsp8L-WaE3mxY'),
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery_graph_Extreme@2x.png',
          iconWidth: '334px',
          iconHeight: '276px',
          btn: '',
          href: '#',
          mIcon:
            '/mobile-images/solutions/video-delivery/Solutions_Video_Delivery_graph_Extreme@2x.png',
          mIconWidth: '20.88rem',
          mIconHeight: '17.25rem'
        },
        {
          tab: t('KB2o5qPgAWHfaaxMj0NAA'),
          title: t('is4cEGRTs7H1BGTueHdfd'),
          content: t('ijlEWLgd26EspQzkP6OAy'),
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery_graph_Distruptive@2x.png',
          iconWidth: '274px',
          iconHeight: '268px',
          btn: '',
          href: '#',
          mIcon:
            '/mobile-images/solutions/video-delivery/Solutions_Video_Delivery_graph_Distruptive@2x.png',
          mIconWidth: '17.13rem',
          mIconHeight: '16.75rem'
        },
        {
          tab: 'Perma-Cache',
          title: t('zLirF4FLhdthkSGao07n5'),
          content: t('3AtqNGJcatrduTOxPNrXp'),
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery_graph_Perma@2x.png',
          iconWidth: '316px',
          iconHeight: '246px',
          btn: '',
          href: '#',
          mIcon:
            '/mobile-images/solutions/video-delivery/Solutions_Video_Delivery_graph_Perma@2x.png',
          mIconWidth: '19.75rem',
          mIconHeight: '15.38rem'
        },
        {
          tab: t('uaCI9u0EUz8YLN_rifW0M'),
          title: t('ph07x1Ill1L7f67V-RYR1'),
          content: t('yS4VAkK_64Wo2KguR0JEo'),
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery_graph_Media@2x.png',
          iconWidth: '300px',
          iconHeight: '243px',
          btn: '',
          href: '#',
          mIcon:
            '/mobile-images/solutions/video-delivery/Solutions_Video_Delivery_graph_Media@2x.png',
          mIconWidth: '18.75rem',
          mIconHeight: '15.19rem'
        }
      ]
    },
    list2: {
      title1: t('products.stream.overview.packedFeatures.title'),
      title2: t('cvHPsOhIl4Z4snu0uMHrt'),
      items: [
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_1.png',
          title: t('aDZVh0hBbHvyzr0RO8wNn')
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_2.png',
          title: t('0QElMptG4qUTaM1ye3cge')
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_3.png',
          title: t('clYAYTqj82UHJoHFnPqKx')
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_4.png',
          title: t('W_6o7EfGL09HJjuazh2My')
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_5.png',
          title: t('PVuK0XsZri8h-6ZKXJvG_')
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_6.png',
          title: t('feQGdTJI4u6AoECQxK1bI')
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_7.png',
          title: t('f--l29ErsBRnGZ2u1ZOtE')
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_8.png',
          title: t('44_Xddy0jUer9Jtahmvy-')
        }
      ]
    },
    features: [
      {
        icon: '/images/solutions/video-delivery/Solutions_Video_Delivery_ic_Replicated.png',
        title: t('sGF6iy7TuyAE92V4ku5qX'),
        content: t('oyP5qoWX82XybIYRofh2L')
      },
      {
        icon: '/images/solutions/video-delivery/Solutions_Video_Delivery_ic_Redundant.png',
        title: t('home.home.SLAtitle1'),
        content: t('GI8Rnu0qiRfm02_y5cqtN')
      },
      {
        icon: '/images/solutions/video-delivery/Solutions_Video_Delivery_ic_NVMe.png',
        title: t('pWyG81JLneSvfg99OFxPt'),
        content: t('ZnEshUMJAWS6OMwMS_1OT')
      }
    ],
    list: [
      {
        title: t('sbOiygI3foMFl8zGTpMBq'),
        value: '300GB',
        percent: 45
      },
      {
        title: t('O0LtcVv3bua7bkwommOFs'),
        value: '50GB',
        percent: 15
      }
    ],
    subs: [
      {
        title: t('pjO0SL6mKVQoWvd1QsWNv'),
        value: '$4.5/month'
      },
      {
        title: t('1I8BKYX1kjYtmXOn_E9xF'),
        value: '$3.25/month'
      }
    ],
    join1: {
      title: t('g_tXejmNur2f2uDrDvSd-'),
      person: {
        name: t('1BywE0gMMmHqYbpuYRGyW'),
        title: t('10KCWD0ValnrFobaa19fG'),
        content: t('hVZvyVFQZA1hXV83roW7e')
      }
    },
    numbers2: [
      {
        label: '123',
        content: t('home.Locations')
      },
      {
        label: '650.000+',
        content: t('home.requestsPerSecond')
      },
      {
        label: t('PEUMLcb-JhVhbuvaFkWuP'),
        content: t('home.NetworkCapacity')
      },
      {
        label: t('q1ufRx9wOX_bkNPJGQmN1'),
        content: t('RDF-FK0HEbcFR8RsEIV6H')
      }
    ]
  };
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

    width: 912px;
    font-size: 16px;
    color: #4e4e4e;
    text-align: center;
  }

  .map-container {
    margin-top: 40px;
  }
}

// For mobile devices
@media (max-width: 767px) {
  .map-container {
    margin-top: 6.25rem;

    > .title {
      font-size: 2.5rem;
      line-height: 3.5rem;
      text-align: left;
      padding-left: 1.87rem;
    }

    > .sub-title {
      margin-top: 1rem;

      width: auto;
      font-size: 1.75rem;
      line-height: 2.38rem;
      text-align: left;
      padding-left: 1.87rem;
    }

    .map-container {
      margin-top: 3.13rem;
    }
  }
}
</style>
