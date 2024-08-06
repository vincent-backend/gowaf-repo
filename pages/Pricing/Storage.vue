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
const { t } = useI18n();
definePageMeta({
  title: 'Pricing'
});
const i18ntext = computed<any>(() => {
  return {
    pricingTable: [
      {
        title: t('pjO0SL6mKVQoWvd1QsWNv'),
        titleEm: 'HDD',
        subTitle: t('b3at__Jw1vs1ZNTyWnFMz'),
        content: t('oj7yQuZ4WMCFmyyZHFi4s'),
        btn: t('vCyatgYi22iOeAKniCizq'),
        href: '#',
        items: [
          {
            text: '$0.01/GB',
            hint: t('kq75-qn-tLF5pB0G9eyBO')
          },
          {
            text: '$0.02/GB',
            hint: t('lHyG0f_acNtivER5KyJpS')
          },
          {
            text: '$0.025/GB',
            hint: t('0Qu0t80LoAeCv9evsNe6D')
          },
          {
            text: '+$0.005/GB',
            hint: t('vyAl3W-j1UGhIGMTAjN2F')
          }
        ],
        bottomList: [
          t('4pt5tyLGNQp5FIlTgTvDu'),
          t('-JIMxMV5mP5YTkoE1MK4W'),
          t('hLuaGmDFFCnuRTMGA2FxO'),
          t('jQDZ5OEAJiY17zjnuoh1z'),
          t('JqmOlz7w0iQYQOzSputiR')
        ]
      },
      {
        title: t('GC3jHHiOVraz_2lYG7nUX'),
        titleEm: 'SSD',
        subTitle: t('CCKDinWPUMGQMvwBgqdlX'),
        content: t('3kxEw7odatuVDPym3DtmZ'),
        btn: t('vCyatgYi22iOeAKniCizq'),
        href: '#',
        items: [
          {
            text: '$0.02/GB',
            hint: t('TEZlazu6G6F6SFqBln0ty')
          },
          {
            text: '+$0.02/GB',
            hint: t('pqxtDBY44jmwt1A5fsKqY')
          }
        ],
        bottomList: [
          t('mWsYKvqZ10cqekcsra6eq'),
          t('-JIMxMV5mP5YTkoE1MK4W'),
          t('XZhL1rlR1e6SeAK8UGzWZ'),
          t('OL5ABcsqtoZs5uIKOKRdd'),
          t('dDOql7MbgjflmgO_4bcfX')
        ]
      }
    ],
    list1: {
      title1: t('_jbsQ3YagWjE8dP8_twAD'),
      title2: t('xDSG8IL6DGm5dHgQ74eyH'),
      items: [
        {
          icon: '/images/pricing/overview/Pricing_Overview_card_ic_1.png',
          title: t('-JIMxMV5mP5YTkoE1MK4W'),
          content: t('iLkw-MtVvaYcZPpvQZvCL')
        },
        {
          icon: '/images/pricing/overview/Pricing_Overview_card_ic_2.png',
          title: t('DES-6GlDV7vlKF9Zvqqei'),
          content: t('nu0OPuoV5iaFC6q7AJwlx')
        },
        {
          icon: '/images/pricing/overview/Pricing_Overview_card_ic_3.png',
          title: t('GcclDblqwcyIvh3-1XsM5'),
          content: t('LuQgxsbvPltPrVzPVlwIW')
        },
        {
          icon: '/images/pricing/overview/Pricing_Overview_card_ic_4.png',
          title: t('S2WPugMYPn7ok2pZ7KlvC'),
          content: t('bEL9MzgceVXxpdWMwB2MT')
        },
        {
          icon: '/images/pricing/overview/Pricing_Overview_card_ic_5.png',
          title: t('6Dn0HsX6tOsS6PHaG2drl'),
          content: t('h6dA06N7k-iQLuThPWBCm')
        },
        {
          icon: '/images/pricing/overview/Pricing_Overview_card_ic_6.png',
          title: t('pgzzkYeXmnRHksXr2ivIX'),
          content: t('ThmmgWXys6Lcgkq-UEfua')
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
