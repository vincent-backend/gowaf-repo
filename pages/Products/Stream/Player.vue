<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.stream.breadCrumbs.parent')"
    :items="StreamMenu($t, $route.path)"
  />

  <CommonHeader1
    :pre-title="$t('products.stream.player.header.preTitle')"
    :title="$t('products.stream.player.header.title')"
    :content="$t('products.stream.player.header.content')"
    :btn="$t('products.stream.player.header.btn')"
    href="#"
    :hint="$t('products.stream.player.header.hint')"
    :pic="{
      src: '/images/products/stream/player/stream_player_banner_graph@2x.png',
      w: '472px',
      h: '322px',

      msrc: '/images/products/stream/player/stream_player_banner_graph@2x.png',
      mw: '29.5rem',
      mh: '20.13rem'
    }"
  />

  <CommonList1 v-bind="i18ntext.list1" />

  <ProductsPlayerFeatures />

  <SolutionsAd2
    :title="$t('products.stream.player.ad2.title')"
    :content="$t('products.stream.player.ad2.content')"
    :btn="$t('products.stream.player.ad2.btn')"
    href="#"
    pic="/images/products/stream/player/cdnfeatures_security_img@2x.png"
    pic-width="400px"
    pic-height="400px"
    m-pic="/images/products/stream/player/cdnfeatures_security_img@2x.png"
    m-pic-height="25rem"
    m-pic-width="25rem"
    v-bind="
      isMobile
        ? {
            style: {
              marginTop: '6.25rem'
            },
            reverse: true
          }
        : {
            style: {
              marginTop: '163px'
            },
            reverse: true
          }
    "
  />

  <div class="player2-container">
    <div class="title">{{ $t('products.stream.player.player2.title') }}</div>
    <div class="sub-title">
      {{ $t('products.stream.player.player2.subTitle') }}
    </div>
    <div class="pic"></div>
  </div>
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
      title1: t('solutions.videoDelivery.supportPlan.main.title'),
      title2: t('solutions.videoDelivery.supportPlan.main.subTitle'),
      items: [
        {
          icon: '/images/products/stream/player/cdnperma_get_ic_1@2x.png',
          title: t('qx_i_km91v5MZJbiLtulD'),
          content: t('Dg3GgFWWOqNwSns82c1Ua')
        },
        {
          icon: '/images/products/stream/player/stream_player_1_ic_language@2x.png',
          title: t('ptblEMXHNun22eJxjWeX4'),
          content: t('xpiPTwycqE3W9-h2BEdg8')
        },
        {
          icon: '/images/products/stream/player/cdnperma_get_ic_3@2x.png',
          title: t('N281L68l0s1Ahfxks6wOS'),
          content: t('c7cXqsgMXIR6hNMFLExUv')
        }
      ]
    },
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

<style lang="less" scoped>
.player2-container {
  margin-top: 120px;
  margin-bottom: 120px;

  > .title {
    font-weight: 500;
    font-size: 30px;

    line-height: 42px;
    text-align: center;
  }

  > .sub-title {
    margin-top: 18px;

    font-size: 16px;
    color: #4e4e4e;

    text-align: center;
  }

  > .pic {
    margin: 40px auto 0;

    width: 782px;
    height: 440px;
    background: url(/public/images/products/stream/player/player-1@2x.png);
  }
}
@media (max-width: 767px) {
  .player2-container {
    padding: 0 1.88rem;
    box-sizing: border-box;
    margin-top: 6.25rem;
    margin-bottom: 10rem;

    > .title {
      font-weight: 500;
      font-size: 2.5rem;
      line-height: 3.5rem;
      text-align: left;
    }

    > .sub-title {
      margin-top: 1rem;
      font-size: 1.75rem;
      color: #4e4e4e;
      line-height: 2.38rem;
      text-align: left;
    }

    > .pic {
      margin: 2.5rem auto 0;
      width: 100%;
      height: 24.25rem;
      background: url(/public/images/products/stream/player/player-1@2x.png);
    }
  }
}
</style>
