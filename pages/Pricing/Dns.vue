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
        current: true
      }
    ]"
  />

  <CommonHeader1
    :pre-title="$t('pricing.dns.header.preTitle')"
    :title="$t('pricing.dns.header.title')"
    :content="$t('pricing.dns.header.content')"
    :show-foot="false"
    :pic="{
      src: '/images/pricing/dns/Pricing_DNS_banner_graph@2x.png',
      w: '476px',
      h: '350px',

      msrc: '/mobile-images/pricing/dns/Pricing_DNS_banner_graph@2x.png',
      mw: '29.75rem',
      mh: '21.88rem'
    }"
  />

  <div class="price-1-container">
    <PricingTable :content="i18ntext.pricingTable" />
  </div>

  <CommonList1 v-bind="i18ntext.list1" />
  <PricingSupportPlan />
  <PricingHop />
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
        title: 'Pay per query. No hidden fees.',
        titleEm: '',
        subTitle: 'Simple Pay As You Go pricing with a generous free plan.',
        content: 'Serving more than a billion queries per month?',
        btn: 'Contact sales',
        href: '#',
        items: [
          {
            text: 'FREE',
            hint: 'Standard Queries (First 20 million)'
          },
          {
            text: 'FREE',
            hint: 'Smart Queries (First 1 million)'
          },
          {
            text: '$0.1/million',
            hint: 'Standard Queries (After 20 million)'
          },
          {
            text: '$0.3/million',
            hint: 'Smart Queries (After 1 million)'
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
    padding: 1.25rem;
    border-radius: 1.5rem;
  }
}
</style>
