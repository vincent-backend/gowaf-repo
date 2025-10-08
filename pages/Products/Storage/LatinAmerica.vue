<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />

  <CommonHeader1
    :pre-title="$t('products.storage.LatinAmerica.header.preTitle')"
    :title="$t('products.storage.LatinAmerica.header.title')"
    :content="$t('products.storage.LatinAmerica.header.content')"
    :btn="$t('products.storage.LatinAmerica.header.btn')"
    href="/forgot"
    :hint="$t('products.storage.LatinAmerica.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :pic="{
      src: '/images/products/storage/latinamerica/Network_Overview_nation_Europe_2x.png',
      w: '524px',
      h: '474px',

      msrc: '/images/products/storage/latinamerica/Network_Overview_nation_Europe_2x.png',
      mw: '32.75rem',
      mh: '29.63rem'
    }"
  />
  <CommonNumbers style="margin-top: 80px" :items="i18ntext.numbers" />
  <ProductsExceptionalPerformance
    :title="$t('products.storage.LatinAmerica.exceptionalPerformance.title')"
    :content="
      $t('products.storage.LatinAmerica.exceptionalPerformance.content')
    "
    markerColor="#65D2ED"
    img="/images/products/storage/LatinAmerica/map_latinamerica.png"
  />
  <LgOnly>
    <ProductsNeverHit :isShowTitle="false" :neverHit="i18ntext.neverHit" />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList :isShowTitle="false" :neverHit="i18ntext.neverHit" />
  </XsOnly>
  <HomeList1 />
  <SolutionsAd1
    :title="$t('products.storage.LatinAmerica.HopList.title')"
    :sub-title="$t('products.storage.LatinAmerica.HopList.subTitle')"
    :btn="$t('products.storage.LatinAmerica.HopList.btn')"
    href="/forgot"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <CommonList1
    :title1="$t('products.storage.LatinAmerica.list1.title')"
    :title2="$t('products.storage.LatinAmerica.list1.subTitle')"
    :items="i18ntext.items"
  />
  <ProductsSupportPlan />
  <ProductsCalculate1
    :isShowTitle="false"
    :isShowReplicationPoints="false"
    :itemWidth="'560px'"
    :items="i18ntext.citems"
    :subs="i18ntext.csubs"
  />
  <ProductsStorageSupportPlan
    iconw="312px"
    icon="/images/pricing/cdn/Pricing_CDN_card_graph.png"
  />
  <ProductsStorageList1
    :subTitle="$t('products.storage.LatinAmerica.partnerList.subTitle')"
    :title="$t('products.storage.LatinAmerica.partnerList.title')"
    :list="i18ntext.imgPcList"
  />
  <ProductsDRMCustomers :drmCustomer="i18ntext.drmCustomer" />
  <Footer />
</template>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Products'
});

const i18ntext = computed<any>(() => {
  return {
    numbers: [
      {
        label: '17',
        content: 'PoPs'
      },
      {
        label: t('e8eYgjIlcswXKTPtgvmrM'),
        content: t('NQivWCq6kk2EQMOxoKgLv')
      },
      {
        label: '4',
        content: t('D5dV_AMg3Hmcil_zwJmR5')
      },
      {
        label: '21.900',
        content: t('bFwCHK8hg4hqa_z9YzMpf')
      }
    ],
    neverHit: {
      title: t('tqA9tM3WudJ_zOi3gg6uV'),
      subTitle: t('3BL5RppaAEV0sCREu-bWk'),
      items: [
        {
          icon: '/images/products/storage/europe/SmartEdge™_ic_engine_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'center',
          title: t('FOPJ1aRqjYy9kYkHltacY'),
          content: t('lQ6K7zqY2lDJtyoJsDrFC'),
          contentAlign: 'center'
        },
        {
          icon: '/images/products/storage/europe/SmartEdge™_ic_Monitoring_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'center',
          title: t('hwhw48dVM8CgDfWOy1Nlg'),
          content: t('Fu_FQ_Wlh942RX3FuGIfx'),
          contentAlign: 'center'
        },
        {
          icon: '/images/products/storage/europe/home_list_ic_network_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'center',
          title: t('e6ehWsWT_Gfg_VJdwAzFy'),
          content: t('3K7ipdtN9nVg1YXpg69m7'),
          contentAlign: 'center'
        }
      ]
    },
    items: [
      {
        icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_1@2x.png',
        title: t('053LltWUAiQWo44G-qciW'),
        content: t('oS8i8X6PgBlY6DHf6uVzZ')
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_2@2x.png',
        title: t('hC-unQx-5bnwrQemWAq2h'),
        content: t('LhgzkM8jkivVfzRqHMJdE')
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_3@2x.png',
        title: t('a9Mv9dtLYM0n_adNbbyjt'),
        content: t('1iDB7T5Sz7kTjro2oN7EY')
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_4@2x.png',
        title: t('uRao7VE1b0JinEkTtLiy9'),
        content: t('ulPyJg2au7ZojSp6wLSB8')
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_5@2x.png',
        title: t('IYJQsg9Hd3Q4FKJACLC5Z'),
        content: t('HssgPf8qStJZTKqs_aJle')
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_6@2x.png',
        title: t('tI0-aRMh-hmf3-kaL5dCL'),
        content: t('mp0dUZFG6uyPEsUofdQGZ')
      }
    ],
    citems: [
      {
        title: t('nationalFlag.continentName5'),
        value: t('R-G_YQLWg2AyNNdByunix'),
        percent: 45
      }
    ],
    csubs: [
      {
        title: t('pjO0SL6mKVQoWvd1QsWNv'),
        value: '$9/month'
      },
      {
        title: t('1I8BKYX1kjYtmXOn_E9xF'),
        value: '$1/month'
      }
    ],
    imgPcList: [
      '/images/products/storage/latinamerica/home_logo_1_2x.png',
      '/images/products/storage/latinamerica/home_logo_2_2x.png',
      '/images/products/storage/latinamerica/home_logo_3_2x.png',
      '/images/products/storage/latinamerica/home_logo_4_2x.png',
      '/images/products/storage/latinamerica/home_logo_5_2x.png'
    ],
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
        img: '/images/products/storage/latinamerica/Network_ddos_evaluate_character_2x.png',
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
<style lang="less" scoped>
@media (max-width: 767px) {
  .asia-join1 {
    margin-top: 0 !important;
  }
}
</style>
