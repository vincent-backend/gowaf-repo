<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />

  <CommonHeader1
    :pre-title="$t('products.cdn.safeHop.header.preTitle')"
    :title="$t('products.cdn.safeHop.header.title')"
    :content="$t('products.cdn.safeHop.header.content')"
    :btn="$t('products.cdn.safeHop.header.btn')"
    href="#"
    :hint="$t('products.cdn.safeHop.header.hint')"
    :pic="{
      src: '/images/products/cdn/safe-hop/cdnsafehop_banner_graph@2x.png',
      w: '390px',
      h: '359px',
      msrc: '/images/products/cdn/safe-hop/cdnsafehop_banner_graph@2x.png',
      mw: '21.67rem',
      mh: '19.94rem'
    }"
  />

  <ProductsReduceError />

  <CommonSuperCharge v-bind="i18ntext.safeHop" />

  <NetworkJoin1
    v-bind="{
      ...i18ntext.safeHop.join1,
      avatar:
        '/images/products/cdn/safe-hop/Network_ddos_evaluate_character@2x.png',
      mAvatar:
        '/images/products/cdn/safe-hop/Network_ddos_evaluate_character@2x.png'
    }"
  />

  <Footer />
</template>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Products'
});
const i18ntext = computed<any>(() => {
  return {
    safeHop: {
      header: {
        preTitle: t('Gia40aoRdVSGCcErYFbLd'),
        title: t('LNpEOyIL0-eKWQjaW0n3O'),
        content: t('v_zpIp8lAUGMl6lM9eJlb'),
        btn: t('solutions.securityCdn.ad1.btn'),
        hint: t('solutions.securityCdn.header.hint')
      },
      reduceError: {
        title: t('TMJaokFXMwUGXGHMs9Xne'),
        subTitle: t('FM0mdlS6Iekj7iYz3Iaqm'),
        picL: {
          title: 'CDN',
          content: t('Ufmpf1_cbCWT-bQ14I5lh')
        },
        picRT: {
          title: t('NZC2X8xxar0BjJx357fb0'),
          content: t('Q7A3xk5WCclIog1SurB_B')
        },
        picRB: {
          title: t('LJaqt5mptUslZKk6Cnn_2'),
          content: t('Ci89qa6ZLlKOab3a5PcfJ')
        },
        hint: t('WytoBo2Hamit6anAsjl2M')
      },
      goFaster: {
        title: t('-vd5RV7OSIIq3cazybRsw'),
        subTitle: t('zz366p82L8ZI-aTXpyZX-'),
        tabs: [
          {
            tab: t('YlOgzt1rcl-xSfFGHEmKl'),
            title: t('Ee7QcKzfvlJg0aIaMmldV'),
            content: t('F1IhSEE44_CcFrlB1x_0P'),
            icon: '/images/products/cdn/safe-hop/cdnsafehop_save_img1@2x.png',
            iconWidth: '400px',
            iconHeight: '400px',
            mIcon: '/images/products/cdn/safe-hop/cdnsafehop_save_img1@2x.png',
            mIconWidth: '22.22rem',
            mIconHeight: '22.22rem'
          },
          {
            tab: t('n4M6S0vrjMWerjayKihSn'),
            title: t('CZNANDz3Lq5utMEAweILb'),
            content: t('HrycskULB2hiFLKSzSDDJ'),
            icon: '/images/products/cdn/safe-hop/cdnsafehop_save_img2@2x.png',
            iconWidth: '400px',
            iconHeight: '400px',
            mIcon: '/images/products/cdn/safe-hop/cdnsafehop_save_img2@2x.png',
            mIconWidth: '22.22rem',
            mIconHeight: '22.22rem'
          },
          {
            tab: t('IuX_smb11VEeaZ6rUqYLA'),
            title: t('CZNANDz3Lq5utMEAweILb'),
            content: t('HrycskULB2hiFLKSzSDDJ'),
            icon: '/images/products/cdn/safe-hop/cdnsafehop_save_img@2x.png',
            iconWidth: '400px',
            iconHeight: '400px',
            mIcon: '/images/products/cdn/safe-hop/cdnsafehop_save_img@2x.png',
            mIconWidth: '22.22rem',
            mIconHeight: '22.22rem'
          },
          {
            tab: t('DEXG2EHxynCynnHX6nJMa'),
            title: t('bHo6C5WWjlSxPZzVLaKG_'),
            content: t('NOwctDqZnzGsM6SvGeNtW'),
            icon: '/images/products/cdn/safe-hop/cdnsafehop_save_img@2x.png',
            iconWidth: '400px',
            iconHeight: '400px',
            mIcon: '/images/products/cdn/safe-hop/cdnsafehop_save_img@2x.png',
            mIconWidth: '22.22rem',
            mIconHeight: '22.22rem'
          }
        ]
      },
      join1: {
        title: t('KVG9Mia-x-Zo_lYpWf-1X'),
        person: {
          name: t('8zdIc4rPP1IPedTA08Vyc'),
          title: 'Schaken-Mods',
          content: t('I4fVNlHklluhjTwDOFuzb')
        }
      }
    }
  };
});
</script>
