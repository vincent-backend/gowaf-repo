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
    href="#"
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
    href="#"
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
  <ProductsIntuitivePanels />

  <SolutionsAd1
    style="margin-top: 0"
    :title="$t('products.cdn.overview.ad1_2.title')"
    :sub-title="$t('products.cdn.overview.ad1_2.subTitle')"
    :btn="$t('products.cdn.overview.ad1_2.btn')"
    href="#"
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
definePageMeta({
  title: 'Products'
});
const i18ntext = computed<any>(() => {
  return {
    list1: [
      '24/7 Customer Support',
      'Flexible Pricing',
      'Advanced Caching',
      'Real-Time Monitoring',
      'Edge Rules',
      'Optimized for Video'
    ],
    list2: [
      {
        icon: '/images/products/cdn/overview/cdn_overview_never_ic_1_nor@2x.png',
        iconActive:
          '/images/products/cdn/overview/cdn_overview_never_ic_1_sele@2x.png',
        title: 'Scalable By Design',
        content:
          'Maximize your growth and expansion without care with a 150 Tbps+ network.'
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_never_ic_2_nor@2x.png',
        iconActive:
          '/images/products/cdn/overview/cdn_overview_never_ic_2_sele@2x.png',
        title: 'Tier 1 Global Network',
        content:
          'Connect directly to your users with over 3000 ISPs and 14 Tier 1 transit providers. Anywhere.'
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_never_ic_3_nor@2x.png',
        iconActive:
          '/images/products/cdn/overview/cdn_overview_never_ic_3_sele@2x.png',
        title: 'NVMe+ SSD Servers',
        content:
          'Optimize delivery and reduce latency with top of the line AMD and NVMe hardware.'
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_never_ic_4_nor@2x.png',
        iconActive:
          '/images/products/cdn/overview/cdn_overview_never_ic_4_sele@2x.png',
        title: 'Stay Protected',
        content:
          'Stay safe and focused with a built-in next-generation DoS protection that just works.'
      }
    ],
    list3: {
      title1: 'Build faster with a toolbox on the edge',
      title2: 'Hop ahead of the technology curve.',
      items: [
        {
          icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_1@2x.png',
          title: "Easy Let's Encrypt SSL",
          content:
            'Take advantage of a free SSL certificate with a single click of a button.'
        },
        {
          icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_2@2x.png',
          title: 'Instant Cache Purging',
          content:
            'Clearing cache has never been so easy and fast. Keep your content always up to date.'
        },
        {
          icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_3@2x.png',
          title: 'Real-Time Log Forwarding',
          content:
            'Gain complete visibility into your content and make data-driven business decisions.'
        },
        {
          icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_4@2x.png',
          title: 'Real-Time Monitoring',
          content:
            'Reach your customer in less than 24 ms in most areas anywhere in the world.'
        },
        {
          icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_5@2x.png',
          title: 'Edge Rules',
          content:
            'Define custom rules to control delivery, security, routing, and much more directly on the edge.'
        },
        {
          icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_6@2x.png',
          title: 'Powerful Security',
          content:
            'Stay protected from any and all attacks with state-of-the-art DoS mitigation security.'
        }
      ]
    },
    numbers: [
      {
        label: '123',
        content: 'Global PoPs'
      },
      {
        label: '150 Tbps+',
        content: 'Network Capacity'
      },
      {
        label: '24 ms',
        content: 'Avg. Global Latency'
      },
      {
        label: '40.000+',
        content: 'Satisfied Customers'
      }
    ],
    goFaster: {
      title: 'Supercharged with powerful features',
      subTitle:
        'Gain a competitive advantage with next-generation features at no additional cost.',
      tabs: [
        {
          tab: 'Perma-Cache',
          title: 'Deliver your content faster than ever before',
          content:
            'Store your files permanently on Edge Storage and take advantage of the 100% cache HIT ratio.Supercharge your web delivery speed worldwide.',
          icon: '/images/products/cdn/overview/cdn_overview_supercharged_img@2x.png',
          iconWidth: '305px',
          iconHeight: '314px',
          btn: 'Start Caching Now',
          href: '#'
        },
        {
          tab: 'SmartEdge™',
          title: 'Bring your users to the closest server',
          content:
            'Take advantage of real-time analytics to deliver your users to the most optimal locations. Maximize performance and minimize latency!',
          icon: '/images/products/cdn/overview/cdn_overview_supercharged2_img@2x.png',
          iconWidth: '360px',
          iconHeight: '360px',
          btn: 'Improve Routing System',
          href: '#'
        },
        {
          tab: 'DoS Protection',
          title: 'Quality DDoS protection. For quality service.',
          content:
            'Protect yourself from DDoS attacks. Ensure flawless uptime and never go down again. We take care of DDoS mitigation so you can focus on your product!',
          icon: '/images/products/cdn/overview/cdn_overview_supercharged3_img@2x.png',
          iconWidth: '360px',
          iconHeight: '360px',
          btn: 'Protect Your Website',
          href: '#'
        },
        {
          tab: 'SafeHop™',
          title: 'Reduce origin errors and maximize uptime!',
          content:
            'Protect yourself from DDoS attacks. Ensure flawless uptime and never go down again. We take care of DDoS mitigation so you can focus on your product!',
          icon: '/images/products/cdn/overview/cdn_overview_supercharged4_img@2x.png',
          iconWidth: '360px',
          iconHeight: '360px',
          btn: 'Protect Your Website',
          href: '#'
        }
      ]
    }
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
</style>
