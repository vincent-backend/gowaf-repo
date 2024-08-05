<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />
  <CommonHeader1
    :pre-title="$t('products.cdn.permaCache.header.preTitle')"
    :title="$t('products.cdn.permaCache.header.title')"
    :content="$t('products.cdn.permaCache.header.content')"
    :btn="$t('products.cdn.permaCache.header.btn')"
    href="#"
    :hint="$t('products.cdn.permaCache.header.hint')"
    :show-foot="false"
    :pic="{
      src: '/images/products/cdn/perma-cache/cdn_permacache_banner_img@2x.png',
      w: '374px',
      h: '402px',
      msrc: '/images/products/cdn/perma-cache/cdn_permacache_banner_img@2x.png',
      mw: '20.78rem',
      mh: '22.33rem'
    }"
  />

  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="i18ntext.numbers"
  />

  <ProductsNeverHit
    :isShowTitle="true"
    :neverHit="i18ntext.neverHit"
  />

  <CommonSuperCharge v-bind="i18ntext.superCharge" />

  <SolutionsAd1
    :title="$t('products.cdn.permaCache.ad1.title')"
    :sub-title="$t('products.cdn.permaCache.ad1.subTitle')"
    :btn="$t('products.cdn.permaCache.ad1.btn')"
    href="#"
    pic="/images/products/cdn/perma-cache/Network_Overview_banner_graph@2x.png"
    m-pic="/images/products/cdn/perma-cache/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic-width="22.22rem"
    m-pic-height="22.22rem"
  />

  <SolutionsChart1
    :title="$t('products.cdn.permaCache.chart1.title')"
    :sub-title="$t('products.cdn.permaCache.chart1.subTitle')"
    pic="/images/products/cdn/perma-cache/chart-1@2x.png"
    mPic="/images/products/cdn/perma-cache/chart-1@2x.png"
    pic-height="432px"
    mPicHeight="24rem"
  />

  <NetworkJoin1
    v-bind="{
      ...i18ntext.join1,
      avatar:
        '/images/products/cdn/perma-cache/Network_ddos_evaluate_character@2x.png',
      mAvatar:
        '/images/products/cdn/perma-cache/Network_ddos_evaluate_character@2x.png'
    }"
  />

  <Footer />
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Products'
});
const i18ntext = computed<any>(() => {
  return {
    numbers: [
      {
        label: '14',
        content: 'Global Regions'
      },
      {
        label: '26 ms',
        content: 'Storage Latency'
      },
      {
        label: '90%+',
        content: 'Lower Origin Traffic'
      },
      {
        label: '10x Faster',
        content: 'Uncached Performance'
      }
    ],
    neverHit: {
      title: 'Never hit your origin again',
      subTitle:
        'Minimize traffic to your origin and lower costs by serving files directly from Perma-Cache. Gowaf keeps your infrastructure hopping, regardless of scale or traffic spikes.',
      items: [
        {
          icon: '/images/products/cdn/perma-cache/media_simple_ic_1@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: 'CDN',
          content: 'Requests an uncached file from the CDN'
        },
        {
          icon: '/images/products/cdn/perma-cache/media_simple_ic_2@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: 'Perma-Cache',
          content: 'Deliver files from the Edge Storage'
        },
        {
          icon: '/images/products/cdn/perma-cache/media_simple_ic_3@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: 'Origin',
          content: 'The request never hits your server.'
        }
      ]
    },
    superCharge: {
      title: 'Save money. Hop faster.',
      subTitle:
        'Leverage next-generation caching to help hop ahead of the competition.',
      tabs: [
        {
          tab: 'Maximize Performance',
          subTitle:
            'Explore our dashboard full of powerful features wrapped in a fantastic user experience.',
          title: 'Make uncached requests feel like cached',
          content:
            'Deliver optimal performance for every request, at all times, by keeping even uncached CDN files distributed up to 14 ultra-fast SSD storage regions. Perma-Cache ensures your users are always just a hop away. Regardless of their location.\nDeliver optimal performance for every request, at all times, by keeping even uncached CDN files distributed up to 14 ultra-fast SSD storage regions. Perma-Cache ensures your users are always just a hop away. Regardless of their location.',
          icon: '/images/products/cdn/perma-cache/cdn_permacache_graph_Maximize.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/cdn/perma-cache/cdn_permacache_graph_Maximize.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        },
        {
          tab: 'Reduce Origin Traffic',
          subTitle:
            'Explore our dashboard full of powerful features wrapped in a fantastic user experience.',
          title: 'Never hit your origin again and lower your bills',
          content:
            'Stop the CDN from slamming your infrastructure with uncached requests. Keep your servers hopping fast and efficient. Drastically reduce bandwidth costs and say goodbye to ridiculous S3 bills while simultaneously improving performance.\nCombine the best of both worlds - minimize load times while maximizing profits. Stop worrying about infrastructure load and focus on your product.',
          icon: '/images/products/cdn/perma-cache/cdn_permacache_graph_Maximizedd.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/cdn/perma-cache/cdn_permacache_graph_Maximizedd.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        },
        {
          tab: 'Improve Reliability',
          subTitle:
            'Explore our dashboard full of powerful features wrapped in a fantastic user experience.',
          title: 'Improve reliability with automatic region failover',
          content:
            'Reduce website downtime and failed requests by up to 80% by utilizing bunny.net region failovers. Stop data center failures from affecting your deliverability or uptime with real-time global replication and instant smart traffic re-routing.\nNever leave uptime to chance again. Edge Storage redundantly replicates your files worldwide and makes sure your content is accessible at all times.',
          icon: '/images/products/cdn/perma-cache/cdn_permacache_graph_Improve@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/cdn/perma-cache/cdn_permacache_graph_Improve@2x.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        },
        {
          tab: 'Store Optimized Files',
          subTitle:
            'Explore our dashboard full of powerful features wrapped in a fantastic user experience.',
          title: 'Optimize images once. Store them forever.',
          content:
            'Connect Bunny Optimizer with Perma-Cache to keep your TTFB low and eliminate dynamic image transformation latency from slowing down your requests. Optimize and transform images once, and permanently store them on the edge.\nCombine the benefits of pre-optimized images with the simplicity and power of dynamic image transformation to hop ahead of the competition.',
          icon: '/images/products/cdn/perma-cache/cdn_permacache_graph_store@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/cdn/perma-cache/cdn_permacache_graph_store@2x.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        }
      ]
    },
    join1: {
      title: 'Join over 40.000+ customers who already put their trust in Gowaf',
      person: {
        name: 'Periklis',
        title: 'VitrinaBox, Senior Software Engineer',
        content:
          '"Gowaf is easy to use, offers competitive pricing, and excellent value for money. Technology is super efficient while new features are introduced every month. Customer-centric while offering a number of growth opportunities for the customers."'
      }
    }
  };
});
</script>
