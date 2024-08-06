<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.stream.breadCrumbs.parent')"
    :items="StreamMenu($t, $route.path)"
  />

  <CommonHeader1
    :pre-title="$t('products.stream.multiDRM.header.preTitle')"
    :title="$t('products.stream.multiDRM.header.title')"
    :content="$t('products.stream.multiDRM.header.content')"
    :btn="$t('products.stream.multiDRM.header.btn')"
    href="#"
    :pic="{
      src: '/images/products/stream/multi-drm/stream_multi_banner_graph@2x.png',
      w: '346px',
      h: '361px',

      msrc: '',
      mw: '',
      mh: ''
    }"
  />

  <ProductsEasyPowerful />
  <ProductsProtectYourVideos />

  <ProductsEndlessSecurity />
  <ProductsDRMTable />
  <ProductsDRMPricing />
  <ProductsDRMCustomers :drmCustomer="i18ntext.drmCustomer" />
  <ProductsDRMEmail />

  <Footer :is-show-banner="false" />
</template>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Products'
});
const i18ntext = computed(() => {
  return {
    drmCustomer: {
      title: t('g_tXejmNur2f2uDrDvSd-'),
      contentPre: t('home.header.bottom.weAreRated'),
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: t('home.join2.subTitle3'),
      contentP: t('home.join2.subTitle4'),
      contentLink: t('home.join2.subTitle5'),
      contentLast: t('home.join2.subTitle6'),
      faceImg: {
        img: '/images/products/stream/multi-drm/Network_Overview_evaluate_character_2x.png',
        top: '-3px',
        right: '135px',
        width: '438px',
        height: '300px',
        mtop: '11.81rem',
        mright: '0',
        mwidth: '27.38rem',
        mheight: '18.75rem'
      },
      list: {
        title: t('1BywE0gMMmHqYbpuYRGyW'),
        subTitle: t('10KCWD0ValnrFobaa19fG'),
        content: t('hVZvyVFQZA1hXV83roW7e')
      },
      items: [
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_1_2x.png'
        },
        {
          num: 4.4,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_2_2x.png'
        },
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_3_2x.png'
        },
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_4_2x.png'
        }
      ]
    }
  };
});
</script>
