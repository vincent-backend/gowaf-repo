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
const { t } = useI18n();
definePageMeta({
  title: 'Pricing'
});
const i18ntext = computed<any>(() => {
  return {
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
    },
    join1: {
      title: t('home.join2.title'),
      subTitle: [
        t('home.header.bottom.weAreRated'),
        '',
        t('home.join2.subTitle3'),
        t('home.join2.subTitle4'),
        t('home.join2.subTitle5'),
        t('home.join2.subTitle6')
      ],
      person: {
        name: t('ZKkMV4DOuwXM2oIbSQ376'),
        title: t('nKW0THu6D57T52EAqvke4'),
        content: t('exNQEWWBs2CoPXFgG2vVd')
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
