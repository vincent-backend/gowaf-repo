<template>
  <Header />
  <BreadCrumbs
    :title="$t('pricing.breadCrumbs.parent')"
    :items="[
      {
        label: $t('pricing.breadCrumbs.overview'),
        href: '/pricing/overview',
        current: true
      },
      {
        label: $t('pricing.breadCrumbs.cdn'),
        href: '/pricing/cdn',
        current: false
      },
      {
        label: $t('pricing.breadCrumbs.stream'),
        href: '/pricing/stream',
        current: false
      },
      {
        label: $t('pricing.breadCrumbs.storage'),
        href: '/pricing/storage',
        current: false
      },
      {
        label: $t('pricing.breadCrumbs.optimizer'),
        href: '/pricing/optimizer',
        current: false
      },
      {
        label: $t('pricing.breadCrumbs.dns'),
        href: '/pricing/dns',
        current: false
      }
    ]"
  />

  <CommonHeader1
    :pre-title="$t('pricing.overview.header.preTitle')"
    :title="$t('pricing.overview.header.title')"
    :content="$t('pricing.overview.header.content')"
    :show-foot="false"
    :pic="{
      src: '/images/pricing/overview/Pricing_Overview_banner_graph@2x.png',
      w: '450px',
      h: '366px',

      msrc: '/mobile-images/pricing/overview/Pricing_Overview_banner_graph@2x.png',
      mw: '28.13rem',
      mh: '22.88rem'
    }"
  />

  <PricingPricing1 />

  <CommonList1 v-bind="i18ntext.list1" />

  <PricingSaveMoney />

  <NetworkJoin1
    v-bind="{
      ...i18ntext.join1,
      avatar: '/images/pricing/overview/SmartEdge™__evaluate_character@2x.png',
      mAvatar:
        '/mobile-images/pricing/overview/SmartEdge™__evaluate_character@2x.png',
      showScores: false
    }"
  />

  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Pricing'
});
const i18ntext = computed<any>(() => {
  return {
    list1: {
      title1: 'Powerful features. Amazing performance.',
      title2:
        'Get lightning fast-performance, robust security, and unlimited scalability. Everything you need to hop faster.',
      items: [
        {
          icon: '/images/pricing/overview/Pricing_Overview_card_ic_1.png',
          title: '$1 Monthly Minimum',
          content: 'All features included for as little as $1 per month.'
        },
        {
          icon: '/images/pricing/overview/Pricing_Overview_card_ic_2.png',
          title: 'Toggle Zones ON/OFF',
          content: 'Enable and disable regions with a click of a button.'
        },
        {
          icon: '/images/pricing/overview/Pricing_Overview_card_ic_3.png',
          title: 'No Request Fees',
          content: 'Only pay for the bandwidth you actually use.'
        },
        {
          icon: '/images/pricing/overview/Pricing_Overview_card_ic_4.png',
          title: 'Multiple Payment Options',
          content: 'Pay with PayPal, majority of credit cards as well as BTC.'
        },
        {
          icon: '/images/pricing/overview/Pricing_Overview_card_ic_5.png',
          title: 'All Features Included',
          content: 'Use all of our unique features without any extra charges.'
        },
        {
          icon: '/images/pricing/overview/Pricing_Overview_card_ic_6.png',
          title: 'Overcharge Protection',
          content: 'Protect your account with monthly bandwidth limits.'
        }
      ]
    },
    join1: {
      title: 'Join over 40.000+ happy customers',
      subTitle: [
        "We're rated",
        '',
        'Excellent 4.8',
        ' out of 5 on ',
        'Trustpilot',
        ' - Based on 600+ reviews'
      ],
      person: {
        name: 'Jerry Caloroso',
        title: 'Chief Streaming Officer, OneStudio',
        content:
          '"Finding Gowaf CDN is like finding a gold mine! It\'s like is this real? "'
      },
      ranks: [
        {
          score: '4.8',
          icon: 'Network_Overview_mark_logo_1'
        },
        {
          score: '4.4',
          icon: 'Network_Overview_mark_logo_2'
        },
        {
          score: '4.8',
          icon: 'Network_Overview_mark_logo_3'
        },
        {
          score: '4.8',
          icon: 'Network_Overview_mark_logo_4'
        }
      ]
    }
  };
});
</script>
