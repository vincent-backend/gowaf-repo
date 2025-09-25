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
    class="mb-60"
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
const { t } = useI18n();
definePageMeta({
  title: 'Pricing'
});
const i18ntext = computed<any>(() => {
  return {
    pricingTable: [
      {
        title: t('86gYMIwtitK4qCc9qFhN2'),
        titleEm: t('jfz7nyYwHDI2EGBQSfYaI'),
        subTitle: t('ZMnHhcZ9_sCx3p0Hps14R'),
        content: t('KV7WJ2klCpERjTKZgf2MV'),
        btn: t('vCyatgYi22iOeAKniCizq'),
        href: '#',
        items: [
          {
            text: '$0.01 /GB',
            hint: t('TXHZSBcsKkFAG_y-tqYdK')
          },
          {
            text: '$0.03 /GB',
            hint: t('5RI4Xp0hmpyXxpwOR9R-H')
          },
          {
            text: '$0.045 /GB',
            hint: t('nationalFlag.continentName5')
          },
          {
            text: '$0.06 /GB',
            hint: t('eZQYGIi05MT2RTOFaHD6n')
          }
        ]
      },
      {
        title: t('yfjfFQ5dHd72oOu_hc0lM'),
        titleEm: t('Tie1pPniQdN-d0GNf1w7x'),
        subTitle: t('P3E9iwgU2bZ3gJE1oyTva'),
        content: t('gEuc1uFeP_PSprdd06wor'),
        btn: t('xRaKd_mBKE6hQHRxQBAia'),
        href: '#',
        items: [
          {
            text: '$0.005 /GB',
            hint: t('ggziNIgX5vxUd8flQ2dn0')
          },
          {
            text: '$0.004 /GB',
            hint: t('yKvIrNrh2glyW9v0y3UTs')
          },
          {
            text: '$0.002 /GB',
            hint: t('ZRzt7XiKMI4sjX5rITk3m')
          },
          {
            text: 'Contact Us',
            hint: t('_bf7TLQyQvr-tR93vqtql')
          }
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
  width: calc(100% - 60px);
  max-width: 1200px;
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

.mb-60 {
  margin-bottom: 60px;
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
