<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.stream.breadCrumbs.parent')"
    :items="StreamMenu($t, $route.path)"
  />

  <CommonHeader1
    :pre-title="$t('products.Stream.TranscribeAI.header.preTitle')"
    :title="$t('products.Stream.TranscribeAI.header.title')"
    :content="$t('products.Stream.TranscribeAI.header.content')"
    :btn="$t('products.cdn.overview.header.btn')"
    href="#"
    :hint="$t('products.cdn.overview.header.hint')"
    :pic="{
      src: '/images/products/Stream/TranscribeAI/stream_transcribe_banner_graph@2x.png',
      w: '496px',
      h: '369px',
      msrc: '/images/products/Stream/TranscribeAI/stream_transcribe_banner_graph@2x.png',
      mw: '23.81rem',
      mh: '23.19rem'
    }"
  />
  <ProductsEasyPowerful
    :title="$t('products.Stream.TranscribeAI.EasyPowerful.title')"
    :sub-title="$t('products.Stream.TranscribeAI.EasyPowerful.subTitle')"
    :ful-items="i18ntext.items"
  />
  <LgOnly>
    <ProductsNeverHit :isShowTitle="true" :neverHit="i18ntext.neverHit" />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList :isShowTitle="true" :neverHit="i18ntext.neverHit" />
  </XsOnly>
  <SolutionsAd1
    :title="$t('products.Stream.TranscribeAI.ad1.title')"
    :sub-title="$t('products.Stream.TranscribeAI.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <CommonList1
    :title1="$t('products.Stream.TranscribeAI.list1.title')"
    :title2="$t('products.Stream.TranscribeAI.list1.subTitle')"
    :items="i18ntext.items1"
  />
  <ProductsStorageSupportPlan
    title=""
    sub-title=""
    icon="/images/products/stream/TranscribeAI/Pricing_CDN_card_graph@2x.png"
    :btn-text="$t('products.Stream.TranscribeAI.SupportPlan.btnText')"
    :btnsubText="$t('products.Stream.TranscribeAI.SupportPlan.btnsubText')"
  >
    <div class="Planlist">
      <div class="row-item" v-for="item in i18ntext.list">
        <div class="left-title">
          <span class="hit">{{ item.hin }}</span>
          {{ item.title }}
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
      <div class="included">
        <div class="top-title">
          {{ $t('products.Stream.TranscribeAI.SupportPlan.included.title') }}
        </div>
        <div class="Checklist">
          <div
            class="CheckTheBox"
            v-for="(item, index) in i18ntext.list1"
            :key="index"
          >
            <div class="icon"></div>
            <div class="txt">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </ProductsStorageSupportPlan>
  <CommonSuperCharge v-bind="i18ntext.doNotLeave" />
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
    items: [
      {
        icon: '/images/products/stream/TranscribeAI/media_simple_ic_1@2x.png',
        title: t('Kopqg2Wm-g2B0j4EW4W8q'),
        content: t('AEF85-2gFBZU1qxwBCAEh')
      },
      {
        icon: '/images/products/stream/TranscribeAI/transcribe_1_ic_2@2x.png',
        title: t('jXnhnTw6oRhbClwq0ET6y'),
        content: t('YkHnJRq3AcoWAUhZClp-j')
      },
      {
        icon: '/images/products/stream/TranscribeAI/transcribe_1_ic_3@2x.png',
        title: t('y1ykhQuV88bn8q8Y4-3gO'),
        content: t('-v3qp9g_j4QTkmtm42mN7')
      }
    ],
    neverHit: {
      title: t('dHE0rxLhyh-Z5sd14dTwZ'),
      subTitle: t('lWK1ZvCIuVOiVPvhJIkOJ'),
      items: [
        {
          icon: '/images/products/stream/TranscribeAI/transcribe_2_ic_1@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: t('R4tgeoCb8a3Yqut3AX5cq'),
          content: t('eAVA4bTn_t_rfSDrnfsRZ')
        },
        {
          icon: '/images/products/stream/TranscribeAI/transcribe_2_ic_2@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: t('ARHzbRZdh2enM9EYeuy4P'),
          content: t('lTyq24tSCXSUkFKctoVGu')
        },
        {
          icon: '/images/products/stream/TranscribeAI/transcribe_2_ic_3@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: t('FbSGkUqHrCFtjmLgh42fs'),
          content: t('5cdTCyR--9mUIhGd0k622')
        }
      ]
    },
    items1: [
      {
        icon: '/images/products/stream/TranscribeAI/Pricing_Overview_card_ic_4@2x.png',
        title: t('sQoVKK1ZNIe38NAQUpBWF'),
        content: t('gLFFsTqpI-cI1tGW1LcXm')
      },
      {
        icon: '/images/products/stream/TranscribeAI/Pricing_Overview_card_ic_1@2x.png',
        title: t('-JIMxMV5mP5YTkoE1MK4W'),
        content: t('xfDW3DuWU9eAZnb9QUKlZ')
      },
      {
        icon: '/images/products/stream/TranscribeAI/Beautiful_Video_Player@2x.png',
        title: t('6Dn0HsX6tOsS6PHaG2drl'),
        content: t('MGERblUH_TqG5zikZVgbk')
      }
    ],
    list: [
      {
        title: t('bT3myQXncy-vTSXFI2Cpr'),
        hin: '$0.1',
        content: t('jrYy7qwj6Tfq0UtL2nMNH')
      }
    ],
    list1: [
      t('PmmcVhjSe0ixIVOISCW2b'),
      t('aT0yUcJjL1Qo6GT1TfQl9'),
      t('bC5YEbjm90dkv5RI-lAaX')
    ],
    doNotLeave: {
      title: t('Q-eWZocC4ddu6dZGNhWFr'),
      subTitle: t('m3PJqjKlrrExPCI9ZiHl8'),
      tabs: [
        {
          tab: t('IrtXr-7Z0F9aV8Ez05Fjm'),
          title: t('Rb3Rh-IHGvUiNEBesqDaa'),
          content: t('rY42Su00-RZnCjeWnAlf4'),
          icon: '/images/products/stream/TranscribeAI/cdnsafehop_save_img@2x.png',
          iconWidth: '378px',
          iconHeight: '389px',
          mIcon:
            '/images/products/stream/TranscribeAI/cdnsafehop_save_img@2x.png',
          mIconWidth: '23.63rem',
          mIconHeight: '24.31rem'
        },
        {
          tab: t('h65iQSDjOfejf_nYJhAlA'),
          title: t('kkr1ENX9FjJ8XI6ZVDvDH'),
          content: t('b5-T98I8UvCwHTRmG1239'),
          icon: '/images/products/stream/TranscribeAI/cdnsafehop_save_img@2x.png',
          iconWidth: '378px',
          iconHeight: '389px',
          mIcon:
            '/images/products/stream/TranscribeAI/cdnsafehop_save_img@2x.png',
          mIconWidth: '23.63rem',
          mIconHeight: '24.31rem'
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
<style lang="scss" scoped>
.Planlist {
  display: flex;
  flex-direction: column;
  gap: 30px;
  .row-item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e6e6e6;
    gap: 20px;
    padding-bottom: 20px;
    .left-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 24px;
      color: #000000;
      line-height: 33px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      .hit {
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 50px;
        color: #000000;
        line-height: 70px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        background: linear-gradient(0deg, #ff905d 0%, #ffb13e 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .content {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .included {
    display: flex;
    flex-direction: column;
    .top-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 24px;
      color: #000000;
      line-height: 33px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .Checklist {
      width: 440px;
      display: flex;
      flex-wrap: wrap;
      gap: 22px 47px;
      margin-top: 20px;

      .CheckTheBox {
        display: flex;
        align-items: center;
        gap: 10px;
        .icon {
          width: 24px;
          height: 24px;
          background: linear-gradient(147deg, #f9c22f 0%, #fa6e4a 100%);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          &::before {
            display: block;
            content: '';
            width: 14px;
            height: 14px;
            background: url('/images/products/stream/TranscribeAI/home_Text_list_ic_tick@2x.png');
            background-size: 100% 100%;
          }
        }
        .txt {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 16px;
          color: #000000;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}
</style>
