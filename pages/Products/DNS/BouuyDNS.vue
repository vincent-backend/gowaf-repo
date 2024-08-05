<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.DNS.breadCrumbs.DNS')"
    :items="[
      {
        label: $t('products.DNS.breadCrumbs.overview'),
        href: '#',
        current: true
      },
      {
        label: $t('products.DNS.breadCrumbs.pricing'),
        href: '#',
        current: false
      },
      {
        label: $t('products.DNS.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('products.DNS.multiDRM.header.preTitle')"
    :title="$t('products.DNS.multiDRM.header.title')"
    :content="$t('products.DNS.multiDRM.header.content')"
    :btn="$t('products.DNS.multiDRM.header.btn')"
    href="#"
    :pic="{
      src: '/images/products/DNS/stream_transcribe_banner_graph@2x.png',
      w: '346px',
      h: '361px',

      msrc: '/images/products/DNS/stream_transcribe_banner_graph@2x.png',
      mw: '31rem',
      mh: '30.56rem'
    }"
  />
  <LgOnly>
    <ProductsNeverHit
      :isShowTitle="true"
      :neverHit="i18ntext.neverHit"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="true"
      :neverHit="i18ntext.neverHit"
    />
  </XsOnly>
  <ProductsDNStitleAndimg :dnsCustomer="i18ntext.dnsCustomer" />
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
  <CommonList1 v-bind="i18ntext.list1" />
  <CommonSuperCharge v-bind="i18ntext.doNotLeave" />
  <div class="topimg-container">
    <div class="page-container directly">
      <div class="title">{{ $t('products.cdn.BouuyDNS.title') }}</div>
      <div class="img"></div>
    </div>
  </div>
  <ProductsDRMCustomers
    class="BouuyDNS-ProductsDRMCustomers"
    :drmCustomer="i18ntext.drmCustomer"
  />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Products'
});
const i18ntext = computed<any>(() => {
  return {
    neverHit: {
      title: 'Build faster. Hop faster.',
      subTitle:
        'Get started in less than 5 minutes and take your web presence to the next level.',
      items: [
        {
          icon: '/images/products/cdn/perma-cache/media_simple_ic_1@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Simplify CDN Integration',
          content:
            'Connect your domains to Gowaf CDN with a click of a button to supercharge and protect your applications in seconds.'
        },
        {
          icon: '/images/products/cdn/perma-cache/media_simple_ic_2@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Script Your Way Around Complexity',
          content:
            'Simplify deployments, deliver complex global logic, or automate your infrastructure with scriptable DNS records.'
        },
        {
          icon: '/images/products/cdn/perma-cache/media_simple_ic_3@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Massive Scalability',
          content:
            'Power projects at scale without worry with a DNS system that already backs one of the busiest CDN platforms on the planet.'
        }
      ]
    },
    dnsCustomer: {
      title: 'DNS platform for the next-gen of web apps',
      subTitle:
        'Make intelligent routing decisions and build smart network services with just a few lines of code. Interconnect your applications and get complete control of your network behavior.',
      items: [
        'Load Balancing',
        'Domain Mapping',
        'SEO Optimization',
        'Multi-Cloud Solutions',
        'Service Discovery',
        'Geographical Routing'
      ],
      contentImg: '/images/products/DNS/cdnfeatures_reporting_img@2x.png',
      imgw: '400px',
      imgh: '400px',
      mimgw: '25rem',
      mimgh: '25rem'
    },
    list1: {
      title1: 'Stay online. Stay fast.',
      title2:
        'Leverage a massively redundant global infrastructure engineered for 100% uptime and lightning-fast performance.',
      items: [
        {
          icon: '/images/products/DNS/Network_DDoS_card_ic_2@2x.png',
          title: 'Global Anycast',
          content:
            'Keep latency to users below 20ms in most regions worldwide, thanks to 36+ global DNS PoPs.'
        },
        {
          icon: '/images/products/DNS/Network_DDoS_card_ic_5@2x.png',
          title: 'Redundant Networks',
          content:
            'Stay online thanks to a redundant network that prevents single points of failure.'
        },
        {
          icon: '/images/products/DNS/cdn_overview_bulid_ic_6@2x.png',
          title: 'Powerful DDoS Protection',
          content:
            'Keep peace of mind with built-in security features and DDoS protection.'
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
      title: 'Trusted by over 40.000+ Customers',
      contentPre: '',
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: ' ',
      contentP: '',
      contentLink: '',
      contentLast: '',
      isHiddenSubTitle: true,
      faceImg: {
        img: '/images/products/DNS/SmartEdge_evaluate_character@2x.png',
        top: '-3px',
        right: '135px',
        width: '438px',
        height: '300px',
        mtop: '0',
        mright: '0',
        mwidth: '27.38rem',
        mheight: '18.75rem'
      },
      list: {
        title: 'MuslimCentral',
        subTitle: '',
        content:
          '"We find the bunny.net service to be resplendent. The excellent user interface, well priced, and superb support turnaround times. One of the best online service providers we dealt with."'
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
<style lang="less" scoped>
.topimg-container {
  padding: 80px 0;
  width: 100%;
  .directly {
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      text-align: center;
    }
    .img {
      margin-top: 64px;
      width: 1242px;
      height: 766px;
      background: url(/images/products/DNS/Take full control of your DNS@2x.png);
      background-size: 1242px 766px;
    }
  }
}
@media (max-width: 767px) {
  .BouuyDNS-ProductsDRMCustomers {
    :deep(.isHiddenSubTitle) {
      padding-bottom: 9rem !important;
    }
  }
}
</style>
