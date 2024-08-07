<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.stream.breadCrumbs.parent')"
    :items="StreamMenu($t, $route.path)"
  />
  <CommonHeader1
    :pre-title="$t('products.stream.mediaCage.header.preTitle')"
    :title="$t('products.stream.mediaCage.header.title')"
    :content="$t('products.stream.mediaCage.header.content')"
    :btn="$t('products.stream.mediaCage.header.btn')"
    href="/forgot"
    :hint="$t('products.stream.mediaCage.header.hint')"
    :pic="{
      src: '/images/products/stream/media-cage/stream_media_banner_graph@2x.png',
      w: '360px',
      h: '336px',
      msrc: '/images/products/stream/media-cage/stream_media_banner_graph@2x.png',
      mw: '28.5rem',
      mh: '17.38rem'
    }"
  />

  <ProductsEasyPowerful />
  <ProductsProtectYourVideos />

  <SolutionsAd1
    :title="$t('products.stream.mediaCage.ad1.title')"
    :sub-title="$t('products.stream.mediaCage.ad1.subTitle')"
    :btn="$t('products.stream.mediaCage.ad1.btn')"
    href="/forgot"
    pic="/images/products/stream/media-cage/video_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/stream/media-cage/video_banner_graph@2x.png"
    m-pic-height="18.75rem"
    m-pic-width="18.75rem"
  />

  <CommonList1 v-bind="i18ntext.list1" />

  <ProductsPerfectSolution
    :title="$t('products.stream.mediaCage.perfectSolution.title')"
    :titleWidth="'249px'"
    :content="$t('products.stream.mediaCage.perfectSolution.content')"
    :items="[
      {
        icon: '/images/products/stream/media-cage/media_perfect_ic_1@2x.png',
        title: 'Prevent downloads',
        content:
          'Stop losing subscribers to piracy and stream media content on your terms.'
      },
      {
        icon: '/images/products/stream/media-cage/media_perfect_ic_2@2x.png',
        title: 'Online Courses',
        content:
          'Take complete control of our content and limit access to courses or specific videos as you see fit.'
      },
      {
        icon: '/images/products/stream/media-cage/media_perfect_ic_3@2x.png',
        title: 'Sporting Events',
        content:
          'Stop piracy before it happens and ensure your content stays available only to your subscribers.'
      }
    ]"
    :pic="{
      url: '/images/products/stream/media-cage/media_perfect_img@2x.png',
      width: 460,
      height: 480
    }"
  />

  <ProductsPlayerVideo />

  <ProductsDRMCustomers :drmCustomer="i18ntext.drmCustomer" />
  <Footer />
</template>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Products'
});

const i18ntext = computed(() => {
  return {
    list1: {
      title1: t('BD0pwFvU4enBVbBIUEm28'),
      title2: t('2V0w8uGIRgRwb4z56QDgD'),
      items: [
        {
          icon: '/images/products/stream/media-cage/media_poerful_ic_1@3x.png',
          title: t('1UQyb2cFLB-Dk1pWpQ6bf'),
          content: t('1vBlFpjzHo6d5pyyyxXKY')
        },
        {
          icon: '/images/products/stream/media-cage/media_poerful_ic_2@3x.png',
          title: t('3B6AXLe3xNI5DLH3ES7W1'),
          content: t('B4qHRHWkUnPYCfTz5pcy8')
        },
        {
          icon: '/images/products/stream/media-cage/media_poerful_ic_3@3x.png',
          title: t('SzQCfuB6Hd-YQA7-ItdkA'),
          content: t('AdV3X_h8HKGxoLrzksjEI')
        }
      ]
    },
    drmCustomer: {
      title: t('home.join2.title'),
      contentPre: t('home.header.bottom.weAreRated'),
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: t('home.join2.subTitle3'),
      contentP: t('home.join2.subTitle4'),
      contentLink: t('home.join2.subTitle5'),
      contentLast: t('home.join2.subTitle6'),
      isHiddenSubTitle: false,
      faceImg: {
        img: '/images/products/storage/asia/SmartEdge™__evaluate_character_2x.png',
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
        title: t('PDEs3nnGBfog1j0r5jgw9'),
        subTitle: 'ShortPixel',
        content: t('W4FDTntcVs2yotM9mfnuj')
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
