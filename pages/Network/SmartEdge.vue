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
    href="/forgot"
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
  <CommonNumbers is-row is-two-row :items="i18ntext.numbers" />

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
const { t } = useI18n();
definePageMeta({
  title: 'Network'
});

const i18ntext = computed<any>(() => {
  return {
    numbers: [
      {
        label: '1.000.000+',
        content: t('ailUpetGngG-Iu1SAPP1Z')
      },
      {
        label: '123',
        content: t('BiENYYMJiCVxIk4uYqDTW')
      },
      {
        label: t('zL_N5pvniQimxTom0ni_7'),
        content: t('42XfFYOriwEO3d5a0USlJ')
      },
      {
        label: '40,000+',
        content: t('DqXjS0SA1aWVzOjBF1X1f')
      }
    ],
    yourNeeds: {
      title: t('9ibS-GKVn9uPte8F0Ih4i'),
      subTitle: t('Z5bK5LIEsl82cw1MXpBZr'),
      items: [
        {
          title: t('uQwLZVMoto0b1Rgevjq6f'),
          content: t('lsaSRAESuNk_Ad20attKx'),
          icon: '/images/network/smart-edge/SmartEdge™_ic_cache.png',
          mIcon: ''
        },
        {
          title: t('-aJDxMbRyYuDfa23Et8OD'),
          content: t('LUdbHNncl4JMqN_uJSxoS'),
          icon: '/images/network/smart-edge/SmartEdge™_ic_Monitoring.png',
          mIcon: ''
        },
        {
          title: t('Zx6On0tWC7wQIwEEQnbqn'),
          content: t('A33GELU4QS0S3xs7A_hsV'),
          icon: '/images/network/smart-edge/SmartEdge™_ic_engine.png',
          mIcon: ''
        }
      ]
    },
    join1: {
      title: t('home.join2.title'),
      person: {
        name: t('PDEs3nnGBfog1j0r5jgw9'),
        title: 'ShortPixel',
        content: t('fbmZzb76944f7qay46lDB')
      }
    },
    maxPerformance: {
      title: t('WyFlKMEvY5fxY4a9FXN0o'),
      content: t('kGU9I5u8KwkuvxDXvxlxh'),
      numberHint1: t('7D4DGDH9D5LoMEYKbu-rW'),
      numberHint2: t('1eXREt5ktD5HhGhrl4nUN')
    }
  };
});
</script>
