<template>
  <Header />
  <BreadCrumbs
    :title="$t('network.breadCrumbs.parent')"
    :items="[
      {
        label: $t('network.breadCrumbs.overview'),
        href: '/network/overview',
        current: false
      },
      {
        label: $t('network.breadCrumbs.ddosProtection'),
        href: '/network/ddos',
        current: false
      },
      {
        label: $t('network.breadCrumbs.smartEdge'),
        href: '/network/smartedge',
        current: true
      }
    ]"
  />

  <CommonHeader1
    :pre-title="$t('network.smartEdge.header.preTitle')"
    :title="$t('network.smartEdge.header.title')"
    :content="$t('network.smartEdge.header.content')"
    :btn="$t('network.smartEdge.header.btn')"
    href="#"
    :hint="$t('network.smartEdge.header.hint')"
    :show-foot="false"
    :pic="{
      src: '/images/network/smart-edge/SmartEdge™_banner_graph_1@2x.png',
      w: '538px',
      h: '350px',

      msrc: '',
      mw: '',
      mh: ''
    }"
  />
  <VSpace h="80px" mh="3.13rem" />
  <CommonNumbers :items="i18ntext.numbers" />

  <NetworkYourNeeds
    v-bind="{
      ...i18ntext.yourNeeds,
      maxPerformance: i18ntext.maxPerformance
    }"
  />

  <NetworkJoin1
    v-bind="{
      ...i18ntext.join1,
      avatar:
        '/images/network/smart-edge/SmartEdge™__evaluate_character@2x.png',
      mAvatar:
        '/mobile-images/network/smart-edge/SmartEdge™__evaluate_character@2x.png'
    }"
  />

  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Network'
});

const i18ntext = computed<any>(() => {
  return {
    numbers: [
      {
        label: '1.000.000+',
        content: 'Powered Websites'
      },
      {
        label: '123',
        content: 'Global PoPs'
      },
      {
        label: 'Up to 5x',
        content: 'Faster Load Times'
      },
      {
        label: '40,000+',
        content: 'Satisfied Customers'
      }
    ],
    yourNeeds: {
      title: 'Global network tailored for your needs',
      subTitle:
        'Stop making compromises when delivering your content. SmartEdge™ consistently tailors a massive global network based on your needs.',
      items: [
        {
          title: 'Unparalleled Caching',
          content:
            'Efficiently deliver content with automatic caching optimizations that ensure the most efficient data distribution around the globe.',
          icon: '/images/network/smart-edge/SmartEdge™_ic_cache.png',
          mIcon: ''
        },
        {
          title: 'Built-in Health Monitoring',
          content:
            'Avoid downtime and prevent revenue loss by utilizing a real-time health monitoring system built directly into the routing system.',
          icon: '/images/network/smart-edge/SmartEdge™_ic_Monitoring.png',
          mIcon: ''
        },
        {
          title: 'Content-Aware Routing Engine',
          content:
            'Enjoy maximum performance for your specific type of content with automatic optimizations based on your files.',
          icon: '/images/network/smart-edge/SmartEdge™_ic_engine.png',
          mIcon: ''
        }
      ]
    },
    join1: {
      title: 'Join over 40.000+ happy customers',
      person: {
        name: 'Pedro Dobrescu',
        title: 'ShortPixel',
        content:
          '“It is a pleasure to work with the bunny.net team! Even before we switched to their excellent CDN network, they added some features we needed for the transition. And after that, they were so quick to add new features or solve any problem we had! A true long-term partner that we really appreciate!”'
      }
    },
    maxPerformance: {
      title: 'Maximize performance with global routing',
      content:
        'Achieve up to 30% improved cache hit rates and a massive boost in global performance thanks to optimized routing based on your specific content. Reduce cache MISS requests that destroy performance and hop ahead of the competition.',
      numberHint1: 'IMPROVED PERFORMANCE',
      numberHint2: 'LOWER ORIGIN TRAFFIC'
    }
  };
});
</script>
