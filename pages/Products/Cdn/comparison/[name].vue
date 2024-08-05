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
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <ProductsStorageSupportPlan
    :title="$t('products.cdn.comparison.SupportPlan.title')"
    :sub-title="$t('products.cdn.comparison.SupportPlan.subTitle')"
    :btn-text="$t('products.cdn.comparison.SupportPlan.btnText')"
    :btnsub-text="$t('products.cdn.comparison.SupportPlan.btnsubText')"
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
    :reverse="isMobile"
  >
    <div class="percentage">
      <div class="percentage-item">
        <div class="num">40%</div>
        <div class="sub-title">FASTER LOAD TIME</div>
      </div>
      <div class="percentage-item">
        <div class="num">80%</div>
        <div class="sub-title">IMAGE SIZE REDUCTION</div>
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
    href="#"
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
const route = useRoute();
const router = useRouter();
definePageMeta({
  title: 'Products'
});
const i18ntext = computed(() => {
  return {
    list: [
      {
        title: '100% Customer Focused',
        content:
          'From our affordable pricing and innovative product ecosystem to our industry-leading Super Bunny™ 24/7 technical support. It’s our mission to provide you with the best experience possible at every hop of the way.'
      },
      {
        title: 'Amazing Performance',
        content:
          'We don’t just talk performance. We show it. Bunny network offers unparallel performance with a sub 29 ms average global latency. Forget enterprise plans. With bunny.net, your web applications will hop at the speed of light regardless of your scale.'
      }
    ],
    numbers: [
      {
        label: '150 Tbps+',
        content: 'Network Backbone'
      },
      {
        label: '650.000+',
        content: 'Requests Per Second'
      },
      {
        label: '123',
        content: 'Global PoPs'
      },
      {
        label: '40.000+',
        content: 'Satisfied Customers'
      }
    ],
    alwaysSafe: {
      title: 'Next-generation solutions for today’s problems',
      subTitle: 'Deliver next-generation performance without compromise.',
      rows: [
        [
          {
            icon: '/images/products/stream/overview/stream_overview_ic_upload@2x.png',
            title: 'Website Acceleration',
            content: 'Speed up your website with a single click of a button.'
          },
          {
            icon: '/images/products/stream/overview/stream_overview_ic_transcode@2x.png',
            title: 'Software Distribution',
            content: 'Experience high-throughput and reliable downloads.'
          }
        ],
        [
          {
            icon: '/images/products/stream/overview/stream_overview_ic_replicate@2x.png',
            title: 'Image Processing',
            content: 'Resize, crop, sharpen, and transform images on the fly.'
          },
          {
            icon: '/images/products/stream/overview/stream_overview_ic_supercharge@2x.png',
            title: 'DDoS Protection',
            content:
              'Stay protected by mitigating attacks before they reach you.'
          }
        ],
        [
          {
            icon: '/images/products/stream/overview/stream_overview_ic_replicate@2x.png',
            title: 'Video Delivery',
            content: 'Deliver smooth playback and high-quality VOD streaming.'
          },
          {
            icon: '/images/products/stream/overview/stream_overview_ic_supercharge@2x.png',
            title: 'Perma-Cache',
            content: 'Maximize application performance and scalability.'
          }
        ]
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
        title: 'Lorenzo Faletra',
        subTitle: 'CEO, Parrot Security',
        content:
          '"We tried several CDN providers before, and although being more expensive, they didn\'t offer the same performance and reliability. After the switch to bunny.net, our users immediately noticed how fast and reliable the downloads became."'
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
          'Enterprise Level Pricing',
          '100%',
          [true, 'Email & 9-5 Chat Sup'],
          [true],
          [true, 'Zone, URL & Director'],
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
          'Token Authentication,Geo/IP Blocking & Hotlink protection'
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
          [true, 'Extra Cost'],
          [true],
          [true, 'Zone, URL, Directory & File-type Wildcard'],
          [true],
          [true, 'Globally Replicated'],
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
          'Token Authentication, Geo/IP Blocking & Hotlink protection'
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
          [true, 'Email & 9-5 Chat Sup'],
          [true],
          [true, 'Zone, URL'],
          [true],
          [true, 'Single Location'],
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
          'Token Authentication,Geo/IP Blocking & Hotlink protection'
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
          'Plan Dependent',
          [true, 'Email & Phone'],
          [true],
          [true, 'Zone, URL, Hostname, Tag & Prefix'],
          [true],
          [true, 'Globally Replicated'],
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
          'Token Authentication,Geo/IP Blocking & Hotlink protection'
        ]
      },
      {
        key: 'Fastly',
        comparisonIcon: '/images/products/cdn/comparison/Fastly_logo@2x.png',
        items: [
          '98',
          '29ms',
          '$600+',
          '99.99%',
          [true, 'Email, Ticket, Slack & Phone'],
          [true],
          [true, 'Zone, URL, Regex, Tag & Wildcard'],
          [true],
          [true, 'Globally Replicated'],
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
          'Token Authentication,Geo/IP Blocking & Hotlink protection'
        ]
      },
      {
        key: 'Akamai',
        comparisonIcon: '/images/products/cdn/comparison/akamai_logo@2x.png',
        items: [
          '135',
          '29ms',
          'Enterprise Level Pricing',
          '100%',
          [true, 'Email, Ticket & Phone'],
          [true],
          [true, 'Zone, URL, Hostname, Tag & Prefix'],
          [true],
          [true, 'Globally Replicated'],
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
          'Token Authentication,Geo/IP Blocking & Hotlink protection'
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
