<template>
  <Header />
  <BreadCrumbs
    :title="$t('pricing.breadCrumbs.parent')"
    :items="[
      {
        label: $t('pricing.breadCrumbs.overview'),
        href: '/pricing/overview',
        current: false
      },
      {
        label: $t('pricing.breadCrumbs.cdn'),
        href: '/pricing/cdn',
        current: true
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
    :pre-title="$t('pricing.cdn.header.preTitle')"
    :title="$t('pricing.cdn.header.title')"
    :content="$t('pricing.cdn.header.content')"
    :show-foot="false"
    :pic="{
      src: '/images/pricing/cdn/Pricing_CDN_banner_graph@2x.png',
      w: '388px',
      h: '332px',

      msrc: '/mobile-images/pricing/cdn/Pricing_CDN_banner_graph@2x.png',
      mw: '24.25rem',
      mh: '20.75rem'
    }"
  />

  <div class="price-1-container">
    <PricingTable :content="i18ntext.pricingTable" />
  </div>

  <CommonList1 v-bind="i18ntext.list1" />

  <PricingSupportPlan />
  <PricingHop />

  <PricingSaveMoney />

  <PricingGetInTouch />

  <Footer />
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Pricing'
});
const i18ntext = computed<any>(() => {
  return {
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
    }
  };
});
</script>

<style lang="less" scoped>
.price-1-container {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: -60px;
  z-index: 2;
  background: #ffffff;
  box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
  border-radius: 24px;
  box-sizing: border-box;
  padding: 20px;
}

// For mobile devices
@media (max-width: 767px) {
  .price-1-container {
    width: 43.13rem;
    top: -2.25rem;
    border-radius: 1.5rem;
    padding: 1.25rem;
    padding-top: 0;
  }
}
</style>
