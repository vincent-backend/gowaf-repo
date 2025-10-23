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
    href="/forgot"
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
    :ful-items="i18ntext.items"
  />
  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="i18ntext.numbers"
  />
  <CommonSuperCharge
    class="BouuyStorage-CommonSuperCharge"
    v-bind="i18ntext.doNotLeave"
  />
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
    <PricingTable :content="i18ntext.pricingTable" />
  </div>
  <ProductsCalculate1 :items="i18ntext.list" :subs="i18ntext.subs" class="mb-60"/>
  <CommonList1 v-bind="i18ntext.list1" />
  <PricingSaveMoney
    :title="$t('products.storage.BouuyStorage.SaveMoney.title')"
    :sub-title="$t('products.storage.BouuyStorage.SaveMoney.subTitle')"
    :f-items="i18ntext.fitem"
    :hint="$t('products.storage.BouuyStorage.SaveMoney.hint')"
  />
  <ProductsDRMCustomers :drmCustomer="i18ntext.drmCustomer" />

  <Footer />
</template>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Products'
});

const i18ntext = computed(() => {
  return {
    items: [
      {
        icon: '/images/products/storage/BouuyStorage/media_simple_ic_1@2x.png',
        title: 'Upload',
        content:
          'Upload your media files using an HTTP API or web file manager.'
      },
      {
        icon: '/images/products/storage/BouuyStorage/transcribe_1_ic_2@2x.png',
        title: 'Deliver',
        content: 'Access your data worldwide without waiting for replication.'
      },
      {
        icon: '/images/products/storage/BouuyStorage/stream_overview_ic_replicate@2x.png',
        title: 'Replicate',
        content: 'Automatically replicate around the world in the background.'
      },
      {
        icon: '/images/products/storage/BouuyStorage/stream_overview_ic_supercharge@2x.png',
        title: 'Supercharge',
        content: 'Supercharge your files with our global CDN.'
      }
    ],
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
    pricingTable: [
      {
        title: 'Standard Network',
        titleEm: '123 PoPs',
        subTitle:
          'Hop on a lighting fast global network with region-based pricing.',
        content: 'Serving more than 100TB per month?',
        btn: 'Contact sales',
        href: '#',
        items: [
          {
            text: '$0.01 /GB',
            hint: 'Europe & North America'
          },
          {
            text: '$0.03 /GB',
            hint: 'Asia & Oceania'
          },
          {
            text: '$0.045 /GB',
            hint: 'South America'
          },
          {
            text: '$0.06 /GB',
            hint: 'Middle East & Africa'
          }
        ]
      },
      {
        title: 'Volume Network',
        titleEm: '10 PoPs',
        subTitle:
          "Take advantage of the world's most cost-effective pricing for high bandwidth projects with a single global rate.",
        content: 'Serving more than 1PB per month?',
        btn: 'Contact sales',
        href: '#',
        items: [
          {
            text: '$0.005 /GB',
            hint: 'First 500TB'
          },
          {
            text: '$0.004 /GB',
            hint: 'From 500TB-1PB'
          },
          {
            text: '$0.002 /GB',
            hint: 'From 1PB-2PB'
          },
          {
            text: 'Contact Us',
            hint: 'From 2PB+'
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
    fitem: [
      {
        title: 'Average Global Latency',
        subTitle: '(Milliseconds - Lower is better)',
        items: [
          {
            label: 'Gowaf',
            value: '41 ms',
            width: '21.25%'
          },
          {
            label: 'AWS S3 (EU Central)',
            value: '131 ms',
            width: '31.875%'
          },
          {
            label: 'DigitalOcean (Frankfurt)',
            value: '136 ms',
            width: '100%'
          },
          {
            label: 'Wasabi (EU Central)',
            value: '129 ms',
            width: '100%'
          },
          {
            label: 'BackBlaze',
            value: '133 ms',
            width: '100%'
          }
        ]
      },
      {
        title: 'Average Global Throughput',
        subTitle: '(MB/s - Higher is better)',
        items: [
          {
            label: 'Gowaf',
            value: '58.3 MB/s',
            width: '100%'
          },
          {
            label: 'AWS S3 (EU Central)',
            value: '31.42 MB/s',
            width: '50.875%'
          },
          {
            label: 'DigitalOcean (Frankfurt)',
            value: '29.8 MB/s',
            width: '50%'
          },
          {
            label: 'Wasabi (EU Central)',
            value: '28.13 MB/s',
            width: '50%'
          },
          {
            label: 'BackBlaze',
            value: '26.23 MB/s',
            width: '50%'
          }
        ]
      }
    ],
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
.price-1-container {
  margin-top: 120px;
  max-width: 1200px;
  min-height: 845px;
  background: #ffffff;
  box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
  border-radius: 24px;
  padding: 20px;
  box-sizing: border-box;
  .title-box {
    width: 100%;
    max-width: 1160px;
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
      padding: 0 2rem;
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
    margin: 6.25rem auto 0;
    width: 43rem;
    padding: 1.25rem;
    height: fit-content;
    background: #ffffff;
    box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
    border-radius: 1.5rem;
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
