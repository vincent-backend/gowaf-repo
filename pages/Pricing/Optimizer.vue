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
        current: true
      },
      {
        label: $t('pricing.breadCrumbs.dns'),
        href: '/pricing/dns',
        current: false
      }
    ]"
  />

  <CommonHeader1
    :pre-title="$t('pricing.optimizer.header.preTitle')"
    :title="$t('pricing.optimizer.header.title')"
    :content="$t('pricing.optimizer.header.content')"
    :show-foot="false"
    :pic="{
      src: '/images/pricing/optimizer/Pricing_Optimizer_banner_graph@2x.png',
      w: '410px',
      h: '366px',

      msrc: '/mobile-images/pricing/optimizer/Pricing_Optimizer_banner_graph@2x.png',
      mw: '25.63rem',
      mh: '22.88rem'
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
const { t } = useI18n();
definePageMeta({
  title: 'Pricing'
});
const i18ntext = computed<any>(() => {
  return {
    pricingTable: [
      {
        title: t('qwUQaUzUuuM9oUwoV3B1E'),
        titleEm: '',
        subTitle: t('uLsLJni0W2wsbOIe0slA_'),
        content: t('LpAFMj3g2K1CRilEL3yBi'),
        btn: t('vCyatgYi22iOeAKniCizq'),
        href: '#',
        items: [
          {
            text: 'FREE',
            hint: t('CsUDaUmODj4HijmbXqtpy')
          },
          {
            text: 'FREE',
            hint: t('sJSzj8k3IZilQq_J9tv_P')
          },
          {
            text: 'FREE',
            hint: t('Erkvti6CL9nq-W64rOO-T')
          },
          {
            text: '$9.5/website',
            hint: t('rFQXDg78C9Rz8dvsoHL7i')
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
  width: calc(100% - 40px);
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
