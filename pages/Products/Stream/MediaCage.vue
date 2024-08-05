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
    href="#"
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
    href="#"
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

  <ProductsDRMCustomers
    :drmCustomer="i18ntext.drmCustomer"
  />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Products'
});

const i18ntext = computed(() => {
  return {
    list1: {
      title1: 'Powerful security. On any device.',
      title2:
        'Get secure playback on any device with a powerful multi-DRM system just a click away.',
      items: [
        {
          icon: '/images/products/stream/media-cage/media_poerful_ic_1@3x.png',
          title: 'AES-128 Encryption',
          content:
            'Keep content safe with powerful AES-128 encryption and rotating keys.'
        },
        {
          icon: '/images/products/stream/media-cage/media_poerful_ic_2@3x.png',
          title: 'Widevine + FairPlay',
          content:
            'Simplify cross-device security with a multi-DRM solution built into a single platform.'
        },
        {
          icon: '/images/products/stream/media-cage/media_poerful_ic_3@3x.png',
          title: 'Beautiful Video Player',
          content:
            'Easily integrate MediaCage with a beautiful built-in plaver or integrate directly using HLS.'
        }
      ]
    },
    drmCustomer: {
      title: 'Join over 40.000+ happy customers',
      contentPre: "We're rated ",
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: ' Excellent 4.8',
      contentP: 'out of 5 on',
      contentLink: 'Trustpilot',
      contentLast: ' - Based on 600+ reviews',
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
        title: 'Pedro Dobrescu',
        subTitle: 'ShortPixel',
        content:
          '"It is a pleasure to work with the bunny.net team! Even before we switched to their excellent CDN network, they added some features we needed for the transition. And after that, they were so quick to add new features or solve any problem we had! A true long-term partner that we really appreciate!"'
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
