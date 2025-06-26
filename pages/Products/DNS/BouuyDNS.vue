<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.DNS.breadCrumbs.DNS')"
    :items="[
      {
        label: $t('products.DNS.breadCrumbs.overview'),
        href: '/Products/DNS/BouuyDNS',
        current: true
      },
      {
        label: $t('products.DNS.breadCrumbs.pricing'),
        href: '/Pricing/Overview',
        current: false
      },
      {
        label: $t('products.DNS.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('products.DNS.multiDRM.header.preTitle')"
    :title="$t('products.DNS.multiDRM.header.title')"
    :content="$t('products.DNS.multiDRM.header.content')"
    :btn="$t('products.DNS.multiDRM.header.btn')"
    href="/forgot"
    :pic="{
      src: '/images/products/DNS/stream_transcribe_banner_graph@2x.png',
      w: '346px',
      h: '361px',

      msrc: '/images/products/DNS/stream_transcribe_banner_graph@2x.png',
      mw: '31rem',
      mh: '30.56rem'
    }"
  />
  <LgOnly>
    <ProductsNeverHit :isShowTitle="true" :neverHit="i18ntext.neverHit" />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList :isShowTitle="true" :neverHit="i18ntext.neverHit" />
  </XsOnly>
  <ProductsDNStitleAndimg :dnsCustomer="i18ntext.dnsCustomer" />
  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="/forgot"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <CommonList1 v-bind="i18ntext.list1" />
  <CommonSuperCharge v-bind="i18ntext.doNotLeave" />
  <div class="topimg-container">
    <div class="page-container directly">
      <div class="title">{{ $t('products.cdn.BouuyDNS.title') }}</div>
      <img
        v-if="!$device.isMobile"
        class="img"
        width="1242px"
        src="/images/products/DNS/Take Full control of your DNS@2x.png"
      />
      <img
        v-if="$device.isMobile"
        class="img"
        width="100%"
        src="/images/products/DNS/Take Full control of your DNS@2x.png"
      />
    </div>
  </div>
  <ProductsDRMCustomers
    class="BouuyDNS-ProductsDRMCustomers"
    :drmCustomer="i18ntext.drmCustomer"
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
    neverHit: {
      title: t('WJHmAMsXmlojmRDHcQ_OG'),
      subTitle: t('fRdFfyFHIXit1g4MS3mtt'),
      items: [
        {
          icon: '/images/products/cdn/perma-cache/media_simple_ic_1@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('1CVuVjmUdquGG22hYgaum'),
          content: t('5TC1fx7C4DmF0CPhY2xPC')
        },
        {
          icon: '/images/products/cdn/perma-cache/media_simple_ic_2@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('XHnKKeCyYPYFCVAgSO6_9'),
          content: t('PvAjfdCLqkDq9UiVREY70')
        },
        {
          icon: '/images/products/cdn/perma-cache/media_simple_ic_3@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('sFUQCUTWE-506BF7mhHcs'),
          content: t('y-hSUbi0MvnOjTNTr-NKv')
        }
      ]
    },
    dnsCustomer: {
      title: t('RrhuU5NcDv5v12JsrWEns'),
      subTitle: t('JPda4h1CBSBmwg_rJ4a6y'),
      items: [
        t('MyV9Wv0kRbJBx3TbE3zfC'),
        t('m3R2gqfe2IIcK-MlTzmEe'),
        t('Gmi2fUczSyXKiFpzHwy4z'),
        t('sWcgRSdqOv_WLP1TiQa-C'),
        t('pEkzrY3d0QSsJo_B1JruS'),
        t('rB7xy6rXKM-P-2UgGETyb')
      ],
      contentImg: '/images/products/DNS/cdnfeatures_reporting_img@2x.png',
      imgw: '400px',
      imgh: '400px',
      mimgw: '25rem',
      mimgh: '25rem'
    },
    list1: {
      title1: t('8arwySvMnx7W-eJJ8Z4wl'),
      title2: t('t-ktFd-1h8YBJSicLc96b'),
      items: [
        {
          icon: '/images/products/DNS/Network_DDoS_card_ic_2@2x.png',
          title: t('5SPf0ynl57zByfg7yIbIx'),
          content: t('FrkcgvBtzXmx04IJzbb9A')
        },
        {
          icon: '/images/products/DNS/Network_DDoS_card_ic_5@2x.png',
          title: t('sIawGX7yaW1HwDm2TAQv7'),
          content: t('bELjCuJ_qp_0JvwztDEeP')
        },
        {
          icon: '/images/products/DNS/cdn_overview_bulid_ic_6@2x.png',
          title: t('b5LkG8zD6L78RYVMjmh3D'),
          content: t('_1KU6D90IMmbw-p6Wc7N_')
        }
      ]
    },
    doNotLeave: {
      title: t('GGlIuYWgBOiG7sSc4fbde'),
      subTitle: t('bE38HQ4P9HZO7yG05kZMH'),
      tabs: [
        {
          tab: t('6JetIHbuzsX-gcTT9uCfV'),
          title: t('cqoxLSSYJwhLrMwjNhevJ'),
          content: t('n9PeQRJ-8iY0KnSyq2O3O'),
          icon: '/images/products/DNS/cdnfeatures_security_img@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon: '/images/products/DNS/cdnfeatures_security_img@2x.png',
          mIconWidth: '25rem',
          mIconHeight: '25rem'
        },
        {
          tab: t('5lJM-plZzJdKCiVF9JxmE'),
          title: t('kP82qDeKyi_SEC_IX50jX'),
          content: t('85SbuHVxrsfHUep5zYDSV'),
          icon: '/images/network/ddos/Network_DDoS_banner_graph_mil@2x.png',
          iconWidth: '294px',
          iconHeight: '294px',
          mIcon:
            '/mobile-images/network/ddos/Network_DDoS_banner_graph_mil@2x.png',
          mIconWidth: '18.38rem',
          mIconHeight: '18.38rem'
        },
        {
          tab: t('44-lXIykO02GWvsS25cqY'),
          title: t('BADn6wzXcYO1vYMs0RxWd'),
          content: t('AotqB1uZwuX7P6t28qLCc'),
          icon: '/images/network/ddos/Network_DDoS_banner_graph_Upload@2x.png',
          iconWidth: '334px',
          iconHeight: '279px',
          mIcon:
            '/mobile-images/network/ddos/Network_DDoS_banner_graph_Upload@2x.png',
          mIconWidth: '20.88rem',
          mIconHeight: '17.44rem'
        }
      ]
    },
    drmCustomer: {
      title: t('KVG9Mia-x-Zo_lYpWf-1X'),
      contentPre: '',
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: ' ',
      contentP: '',
      contentLink: '',
      contentLast: '',
      isHiddenSubTitle: true,
      faceImg: {
        img: '/images/products/DNS/SmartEdge_evaluate_character@2x.png',
        top: '-3px',
        right: '135px',
        width: '438px',
        height: '300px',
        mtop: '0',
        mright: '0',
        mwidth: '27.38rem',
        mheight: '18.75rem'
      },
      list: {
        title: 'MuslimCentral',
        subTitle: '',
        content: t('v6IIRsugMFA9Gx5mSHkFU')
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
.topimg-container {
  padding: 80px 0;
  width: 100%;
  .directly {
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      text-align: center;
    }
    .img {
      margin-top: 64px;
    }
  }
}
@media (max-width: 767px) {
  .BouuyDNS-ProductsDRMCustomers {
    :deep(.isHiddenSubTitle) {
      padding-bottom: 9rem !important;
    }
  }
  .img {
    margin-top: 16px !important;
  }
}
</style>
