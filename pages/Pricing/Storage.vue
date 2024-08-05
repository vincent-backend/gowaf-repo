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
        current: true
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
    :pre-title="$t('pricing.storage.header.preTitle')"
    :title="$t('pricing.storage.header.title')"
    :content="$t('pricing.storage.header.content')"
    :show-foot="false"
    :pic="{
      src: '/images/pricing/storage/Pricing_Storage_banner_graph@2x.png',
      w: '464px',
      h: '324px',

      msrc: '/mobile-images/pricing/storage/Pricing_Storage_banner_graph@2x.png',
      mw: '29rem',
      mh: '20.25rem'
    }"
  />

  <div class="price-1-container">
    <PricingTable :content="i18ntext.pricingTable" />
  </div>

  <PricingMap
    :content="{
      title: $t('pricing.storage.map.title'),
      subTitle: $t('pricing.storage.map.subTitle')
    }"
  />

  <CommonList1 v-bind="i18ntext.list1" />
  <PricingCalculate1 />
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
        title: 'Standard Tier',
        titleEm: 'HDD',
        subTitle:
          '$0.01/GB per storage region for up to two regions. $0.005/GB per additional region. Up to 9 regions.',
        content: 'Storing more than 50TB per month?',
        btn: 'Contact sales',
        href: '#',
        items: [
          {
            text: '$0.01/GB',
            hint: 'Single Region'
          },
          {
            text: '$0.02/GB',
            hint: 'Two Regions'
          },
          {
            text: '$0.025/GB',
            hint: 'Three Regions'
          },
          {
            text: '+$0.005/GB',
            hint: 'Each Additional Region'
          }
        ],
        bottomList: [
          'True Pay As you Go',
          '$1 Monthly Minimum',
          'Free Traffic to Bunny CDN',
          'No API fees',
          'Free API egress'
        ]
      },
      {
        title: 'Edge Tier',
        titleEm: 'SSD',
        subTitle: '$0.02/GB per each storage region. Up to 15 regions.',
        content: 'Storing more than 50TB per month?',
        btn: 'Contact sales',
        href: '#',
        items: [
          {
            text: '$0.02/GB',
            hint: 'Single Region'
          },
          {
            text: '+$0.02/GB',
            hint: 'Each additional Region'
          }
        ],
        bottomList: [
          'True Pay As you Go',
          '$1 Monthly Minimum',
          'Free Traffic to Bunny CDN',
          'No API fees',
          'Free API egress'
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
    position: relative;
    top: -2.32rem;
    border-radius: 1.5rem;
    padding: 1.25rem;
  }
}
</style>
