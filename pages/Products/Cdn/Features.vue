<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />
  <LgOnly>
    <CommonHeader1
      :pre-title="$t('products.cdn.features.header.preTitle')"
      :title="$t('products.cdn.features.header.title')"
      :content="$t('products.cdn.features.header.content')"
      :show-foot="false"
      :pic="{
        src: '/images/products/cdn/features/cdn_features_banner_graph@2x.png',
        w: '440px',
        h: '368px',
        msrc: '/mobile-images/products/cdn/features/cdn_features_banner_graph@2x.png',
        mw: '24.44rem',
        mh: '20.44rem'
      }"
    />
  </LgOnly>
  <XsOnly>
    <CommonHeader1
      :pre-title="$t('products.cdn.features.header.preTitle')"
      :title="$t('products.cdn.features.header.title')"
      :content="$t('products.cdn.features.header.content')"
      :btn="$t('products.cdn.overview.header.btn')"
      href="#"
      :hint="$t('products.cdn.overview.header.hint')"
      :show-foot="false"
      :pic="{
        src: '/images/products/cdn/features/cdn_features_banner_graph@2x.png',
        w: '440px',
        h: '368px',
        msrc: '/mobile-images/products/cdn/features/cdn_features_banner_graph@2x.png',
        mw: '24.44rem',
        mh: '20.44rem'
      }"
    />
  </XsOnly>

  <div class="ad2-container">
    <div class="title">
      {{ $t('products.cdn.features.ad2Container.title') }}
    </div>
    <div class="sub-title">
      {{ $t('products.cdn.features.ad2Container.subTitle') }}
    </div>

    <template
      v-for="(item, index) in i18ntext.items"
    >
      <SolutionsAd2
        :title="item.title"
        :content="item.content"
        :list="item.list"
        :pic="item.pic"
        :m-pic="item.pic"
        pic-width="400px"
        pic-height="400px"
        m-pic-width="22.22rem"
        m-pic-height="22.22rem"
        :reverse="index % 2 === 0"
      />
    </template>
  </div>

  <ProductsIntuitivePanels />

  <Footer />
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Products'
});
const i18ntext = computed<any>(() => {
  return {
    items: [
      {
        pic: '/images/products/cdn/features/cdnfeatures_performance_img@2x.png',
        title: 'Performance',
        content:
          "Performance matters, and it's our goal to take it to the next level. bunny.net helps you supercharge your web presence with powerful features designed for efficient global caching and content optimization to squeezeout every last millisecond of performance.",
        list: [
          'Edge Rules',
          'Image Optimization',
          'Request Coalescing',
          'perma-Cache',
          'Customizable Caching'
        ]
      },
      {
        pic: '/images/products/cdn/features/cdnfeatures_network_img@2x.png',
        title: 'Network',
        content:
          "Not all networks are crafted the same. Gowaf gives you a direct line to one of the fastest networks in the world, designed for a true planet-scale reach that's always just a hop away from your users.",
        list: [
          '150 Tbps+ Backbone',
          '123 PoPs',
          'Real-Time Monitoring',
          'Automatic-Healing',
          'SmartHop Engine',
          '3000+ PNIs'
        ]
      },
      {
        pic: '/images/products/cdn/features/cdnfeatures_security_img@2x.png',
        title: 'Security',
        content:
          'Take advantage of robust security features that allow you to control who, when, and for how long end-user can access your content. Stop bad bots and block attacks before they ever reach your server. bunny.net helps you stay safe at all times.',
        list: [
          'GEO Blocking',
          'WAF (Coming Soon)',
          'Network Limits',
          'DoS Protection',
          'Token Authentication',
          'Hotlinking Protection'
        ]
      },
      {
        pic: '/images/products/cdn/features/cdnfeatures_reporting_img@2x.png',
        title: 'Reporting',
        content:
          'Get the full insights into your traffic with a live monitoring map, real-time statistics, full logging, and reporting tools. Polyfll helps you spot bottlenecks, connectivity, or server issues and keep your infrastructure running smoothly at all times.',
        list: [
          'Live-Monitoring',
          'Performance Metrics',
          'Full Raw Logging',
          'Real-Time Statistics',
          'Traffic Reporting'
        ]
      }
    ]
  };
});
</script>

<style lang="less" scoped>
.ad2-container {
  margin-top: 80px;

  > .title {
    font-weight: 500;
    font-size: 30px;

    line-height: 42px;
    text-align: center;
  }

  > .sub-title {
    margin-top: 20px;

    font-size: 16px;
    color: #4e4e4e;

    text-align: center;
  }
}
@media (max-width: 767px) {
  .ad2-container {
    margin-top: 5.5rem;
    > .title {
      font-size: 2.22rem;
      line-height: 3.11rem;
    }

    > .sub-title {
      text-align: left;
      width: 38.33rem;
      margin: 0 auto;
      margin-top: 0.89rem;
      font-size: 1.56rem;
      line-height: 2.11rem;
    }
  }
}
</style>
