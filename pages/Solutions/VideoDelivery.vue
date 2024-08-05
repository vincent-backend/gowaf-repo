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
definePageMeta({
  title: 'Solutions'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: '1.000.000+',
        content: 'Powered Websites'
      },
      {
        label: 'Up to 5x',
        content: 'Faster Load Times'
      },
      {
        label: '123',
        content: 'Global PoPs'
      },
      {
        label: '$1/month',
        content: 'As low as'
      }
    ],
    superCharge: {
      title: 'Fast network meets unbeatable pricing',
      subTitle:
        'With 123 PoPs worldwide and an 150 Tbps+ network backbone, Gowaf guarantees smooth video playback no matter where your users are.',
      tabs: [
        {
          tab: 'Extreme Performance',
          title: 'No more buffering. Ever again.',
          content:
            'Enjoy smooth playback thanks to one of the fastest global networks backed by NVMe-based hardware and a smart routing engine. Deliver the best video experience by bringing the content just a hop away from your visitors.',
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
          tab: 'Distruptive Pricing',
          title: 'Save up to 80% on your content delivery billing',
          content:
            'Don’t overpay for your Content Delivery ever again. At Gowaf, you’ll always only pay for the bandwidth you use and nothing else. We focus on optimizing our costs and passing the savings down to you!',
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
          title: 'Transform once. Cache and accelerate forever.',
          content:
            'Permanently store videos on the CDN with Perma-Cache to reduce origin egress fees and keep your infrastructure hopping faster. Increase performance and reliability by automatically distributing content worldwide for lightning-fast access times.',
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
          tab: 'Media Protection',
          title: 'Enterprise video protection. At no extra charge.',
          content:
            'Enjoy enterprise-grade DRM security without the massive costs or technical hurdles. Protect your video content from piracy, stop downloads, screenshots, and prevent hotlinking with a single click of a button with Media Cage.',
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
      title1: 'Packed with powerful features',
      title2:
        'Take advantage of powerful features specifically tailored to video delivery. Secure your streams using hotlinking protection and token authentication.',
      items: [
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_1.png',
          title: 'Origin Shield'
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_2.png',
          title: 'Raw Logging'
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_3.png',
          title: 'Edge Storage'
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_4.png',
          title: 'Real Time Statistics'
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_5.png',
          title: 'Hotlinking Protection'
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_6.png',
          title: 'Token Authentication'
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_7.png',
          title: 'Media Optimized Caching'
        },
        {
          icon: '/images/solutions/video-delivery/Solutions_Video_Delivery__card_ic_8.png',
          title: 'Fully Customizable Player'
        }
      ]
    },
    features: [
      {
        icon: '/images/solutions/video-delivery/Solutions_Video_Delivery_ic_Replicated.png',
        title: 'Replicated Cloud Storage',
        content:
          'Replicate your media library around the world with our Geo-Replicated cloud storage for never before seen performance.'
      },
      {
        icon: '/images/solutions/video-delivery/Solutions_Video_Delivery_ic_Redundant.png',
        title: 'Redundant Infrastructure',
        content:
          'Without a single point of failure, Gowaf provides enterprise-level reliability, making sure you always stay online.'
      },
      {
        icon: '/images/solutions/video-delivery/Solutions_Video_Delivery_ic_NVMe.png',
        title: 'NVMe + SSD Powered Servers',
        content:
          'Our servers are powered by NVMe and SSD technology to ensure millisecond latencies when delivering your media files.'
      }
    ],
    list: [
      {
        title: 'Upload video size',
        value: '300GB',
        percent: 45
      },
      {
        title: 'Monthly Traffic',
        value: '50GB',
        percent: 15
      }
    ],
    subs: [
      {
        title: 'Standard Tier',
        value: '$4.5/month'
      },
      {
        title: 'Volume Tier',
        value: '$3.25/month'
      }
    ],
    join1: {
      title: 'Trusted by 40.000+ global customers',
      person: {
        name: 'Matthias Mauch',
        title: 'Younity',
        content:
          '"We had a flow! summit without a single complaint. I think, overall, bunny.net is just a very complete solution. Handling videos is so easy with Bunny - you don\'t need a lot of training.It\'s very streamlined."'
      }
    },
    numbers2: [
      {
        label: '123',
        content: 'Edge Locations'
      },
      {
        label: '650.000+',
        content: 'Requests Per Second'
      },
      {
        label: '150 Tbps+',
        content: 'Network Capacity'
      },
      {
        label: '24 ms',
        content: 'Avg. Global Latency'
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
