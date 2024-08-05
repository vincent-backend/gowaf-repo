<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.storage.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.stream.breadCrumbs.overview'),
        href: '/Products/Storage/BouuyStorage',
        current: false
      },
      {
        label: $t('products.storage.breadCrumbs.SSDStorage'),
        href: '/Products/Storage/SSDStorage',
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
    :items="i18ntext.numbers"
  />
  <PricingSaveMoney
    :title="$t('products.storage.SSDStorage.SaveMoney.title')"
    :sub-title="$t('products.storage.SSDStorage.SaveMoney.subTitle')"
    :f-items="i18ntext.fitem"
    hint=""
  />
  <ProductsCalculate1
    :items="i18ntext.list"
    :subs="i18ntext.subs"
  />
  <CommonList1 v-bind="i18ntext.list1" />
  <CommonSuperCharge v-bind="i18ntext.doNotLeave" />
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
    :drmCustomer="i18ntext.drmCustomer"
  />

  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Products'
});

const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: '15',
        content: 'Storage Regions'
      },
      {
        label: '150 Tbps+',
        content: 'Network Backbone'
      },
      {
        label: '<5ms',
        content: 'Disk Latency'
      },
      {
        label: '99.99%',
        content: 'Availability SLA'
      }
    ],
    fitem: [
      {
        title: 'Median Global TTFB',
        subTitle: '(Milliseconds - Lower is better)',
        items: [
          {
            label: 'Bunny Edge Tier (15 regions)',
            value: '26',
            width: '21.25%'
          },
          {
            label: 'Bunny Standard Tier (8 regions)',
            value: '45',
            width: '31.875%'
          },
          {
            label: 'Bunny Storage SSD (London)',
            value: '127',
            width: '40%'
          },
          {
            label: 'Azure Hot (Amsterdam)',
            value: '135',
            width: '50%'
          },
          {
            label: 'Google Object Storage (London)',
            value: '187',
            width: '80%'
          },
          {
            label: 'Digital Ocean Storage (Frankfurt)',
            value: '226',
            width: '90%'
          },
          {
            label: 'AWS S3 (London)',
            value: '261',
            width: '100%'
          }
        ]
      },
      {
        title: '99 Percentile Global TTFB',
        subTitle: '(Milliseconds - Lower is better)',
        items: [
          {
            label: 'Bunny Edge Tier (15 regions)',
            value: '193',
            width: '21.25%'
          },
          {
            label: 'Bunny Standard Tier (8 regions)',
            value: '349',
            width: '31.875%'
          },
          {
            label: 'Bunny Storage SSD (London)',
            value: '500',
            width: '40%'
          },
          {
            label: 'Azure Hot (Amsterdam)',
            value: '648',
            width: '50%'
          },
          {
            label: 'Google Object Storage (London)',
            value: '1002',
            width: '80%'
          },
          {
            label: 'Digital Ocean Storage (Frankfurt)',
            value: '1054',
            width: '90%'
          },
          {
            label: 'AWS S3 (London)',
            value: '1166',
            width: '100%'
          }
        ]
      }
    ],
    list: [
      {
        title: 'Upload video size',
        num: '300GB',
        percent: 45
      },
      {
        title: 'Monthly Traffic',
        num: '50GB',
        percent: 15
      }
    ],
    subs: [
      {
        title: 'Standard Tier',
        value: '$3.5/month'
      },
      {
        title: 'Volume Tier',
        value: '$1.25/month'
      }
    ],
    list1: {
      title1: 'No charges for API egress or requests',
      title2Width: '574px',
      title2:
        'Your data is your own. Stop paying for accessing and managing your files. Enjoy free API egress and request fees and only pay for the CDN delivery.',
      items: [
        {
          icon: '/images/products/storage/BouuyStorage/Network_DDoS_card_ic_1@2x.png',
          title: 'No Minimums',
          content:
            'Pay only for what you use with no monthly minimums or data retention policies.'
        },
        {
          icon: '/images/products/storage/BouuyStorage/Pricing_Overview_card_ic_3@2x.png',
          title: 'No Egress Charges',
          content:
            'Stop paying to access your files. Only get charged when delivering files through the CDN.'
        },
        {
          icon: '/images/products/storage/BouuyStorage/Beautiful_Video_Player@2x.png',
          title: 'No API Request Charges',
          content:
            'Manage your files without worries or extra costs with FREE API request charges.'
        }
      ]
    },
    doNotLeave: {
      title: 'Key features designed to help you hop ahead',
      subTitle: 'DNS packed with powerful solutions.',
      tabs: [
        {
          tab: 'Custom Nameservers',
          title: 'Keep your brand in your own hands',
          content:
            'Keep your brand in the spotlight on every step of your web presence. Easily set up custom nameservers on your own custom domain with just a few clicks and no extra cost. Unlock internal delegations for administrative benefits without managing your network.',
          icon: '/images/products/DNS/cdnfeatures_security_img@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon: '/images/products/DNS/cdnfeatures_security_img@2x.png',
          mIconWidth: '25rem',
          mIconHeight: '25rem'
        },
        {
          tab: 'mil Real-Time Monitoring',
          title: 'Hop smoother with real-time threat monitoring',
          content:
            'Never worry about threats again thanks to an automatic real-time monitoring and alerting system. Gain complete visibility into your security to stay safe and stop attackers from ever reaching your servers. We help you with detection so that you never need the cure.',
          icon: '/images/network/ddos/Network_DDoS_banner_graph_mil@2x.png',
          iconWidth: '294px',
          iconHeight: '294px',
          mIcon:
            '/mobile-images/network/ddos/Network_DDoS_banner_graph_mil@2x.png',
          mIconWidth: '18.38rem',
          mIconHeight: '18.38rem'
        },
        {
          tab: 'Upload Protection',
          title: 'Stop inappropriate content and help keep internet safe',
          content:
            "Keep the internet friendlier by stopping inappropriate uploads with smart edge upload filtering powered by machine learning and a real-time block list. We help you control users' malicious, abusive and inappropriate uploads, so you don't have to lose time removing them.",
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
    drmCustomer: {
      title: 'Join over 40.000+ happy customers',
      contentPre: "We're rated ",
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: ' Excellent 4.8',
      contentP: 'out of 5 on',
      contentLink: 'Trustpilot',
      contentLast: ' - Based on 700+ reviews',
      isHiddenSubTitle: false,
      faceImg: {
        img: '/images/products/storage/BouuyStorage/Network_Overview_evaluate_character@2x.png',
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
        title: 'Tom Mason',
        subTitle: 'Nexus Mods',
        content:
          '"Working with Gowaf has been a breath of fresh air. Their team has been helpful, responsive, and knowledgeable. The service exceeded our expectations every step of the way."'
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
    }
  };
});
</script>
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
