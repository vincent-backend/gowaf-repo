<template>
  <Header />
  <BreadCrumbs
    :title="$t('resources.breadCrumbs.parent')"
    :items="[
      {
        label: $t('resources.breadCrumbs.about'),
        href: '/resources/about',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.story'),
        href: '/resources/story',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.careers'),
        href: '/resources/careers',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.caseStudies'),
        href: '/resources/caseStudiesDetails',
        current: true
      },
      {
        label: $t('resources.breadCrumbs.contact'),
        href: '/resources/contact',
        current: false
      }
    ]"
  />
  <CommonHeader1
    logo="/images/resources/case-studies-details-younity/Resources_CaseStudies_card_logo_yo_2x.png"
    logoHeight="42px"
    logoWidth="123px"
    :title="$t('resources.caseStudiesDetailsYounity.header.title')"
    :content="$t('resources.caseStudiesDetailsYounity.header.content')"
    :btn="$t('resources.caseStudiesDetailsYounity.header.btn')"
    href="/ContactSales"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsYounity.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_banner_graph_2x.png',
      w: '466px',
      h: '342px',

      msrc: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_banner_graph_2x.png',
      mw: '29.13rem',
      mh: '21.38rem'
    }"
  />
  <CommonNumbers
    is-row
    style="margin-top: 60px"
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsYounity.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template v-for="(item, index) in i18ntext.items" :key="index">
      <SolutionsAd2
        :title="item.title"
        :content="item?.content"
        :content2="item?.content2"
        :content3="item?.content3"
        :pic="item.pic"
        :pic-width="item.width"
        :pic-height="item.height"
        :m-pic="item.pic"
        :m-pic-width="item.mwidth"
        :m-pic-height="item.mheight"
        :reverse="isMobile ? true : index % 2 === 0"
      />
    </template>
  </div>
  <CommonList4 v-bind="i18ntext.list" />
  <ProductsDRMCustomers
    class="Eskimi-products-customers"
    :drmCustomer="i18ntext.drmCustomer"
  />
  <Footer />
</template>
<style lang="less" scoped>
.Eskimi-products-customers {
  // margin-top: 12.5rem;
  // margin-bottom: 6.25rem;
}
</style>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Resources'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: t('DwvSslnuKTfQ7pVyqDBaB'),
        label2: 'network',
        content: t('kaxylTM8WsnZRDAo-y4U8')
      },
      {
        label: t('MGcR-FgpfeGIFr8pyM3HK'),
        label2: 'support',
        content: t('enVaqi4U9IZqCus6YiWAH')
      },
      {
        label: '66%',
        label2: t('N4J-ikTHwvkmdhSH6Q-kN'),
        content: t('5zIDoM0_4FmpQHU1TQ4N1')
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_graph_1_2x.png',
        title: t('ckb1WnA3Cv-t1NXOR2AMD'),
        content: t('cuIb36AC5s1I2pOz8Ewfu'),
        content2: t('62kb_UhofiOTD2W68Jtsa'),
        width: '336px',
        height: '252px',
        mwidth: '21rem',
        mheight: '15.75rem'
      },
      {
        pic: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_graph_2_2x.png',
        title: t('4TyOIjs-7w2mFWI5-KHX0'),
        content: t('t3bIVO-BgFOJmGc9hZZTG'),
        content2: t('2LO4TcVk0zPzqxYZ000FF'),
        content3: '',
        width: '350px',
        height: '274px',
        mwidth: '21.88rem',
        mheight: '17.13rem'
      },
      {
        pic: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_graph_3_2x.png',
        title: t('BL0AfQMV8wX85i8gKFgjU'),
        content: t('86ZgVCR-bMbwusaAH7hHo'),
        content2: t('v7yT3xgPMpesJG2PT3n4a'),
        content3: '',
        width: '318px',
        height: '318px',
        mwidth: '19.88rem',
        mheight: '19.88rem'
      },
      {
        pic: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_graph_4_2x.png',
        title: t('g7GEGMogKYzk-eZWZZiWl'),
        content: t('HMaAEwSmL8y5DZJ5de5iI'),
        content2: t('1j4g7xj19iRpzAwKczlny'),
        width: '374px',
        height: '256px',
        mwidth: '23.38rem',
        mheight: '16rem'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: t('JP2jF17Uoo5ZhF84MzRzT'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-younity/Resources_CaseStudies_pic_8_2x.png',
          icon2:
            '/images/resources/case-studies-details-younity/Resources_CaseStudies_card_logo_ot_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: ''
        },
        {
          title: t('ssxqht_qY2s7p8B_-GjDS'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-younity/Resources_CaseStudies_pic_5_2x.png',
          icon2:
            '/images/resources/case-studies-details-younity/Resources_CaseStudies_card_logo_es_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: ''
        }
      ]
    },
    drmCustomer: {
      title: '',
      contentPre: '',
      contentImg: '',
      contentMid: '',
      contentP: '',
      contentLink: '',
      contentLast: '',
      isHiddenSubTitle: true,
      faceImg: {
        img: '/images/resources/case-studies-details-younity/Network_Overview_evaluate_character_2x.png',
        top: '-70px',
        right: '135px',
        width: '438px',
        height: '300px',
        mtop: '0',
        mright: '0',
        mwidth: '27.38rem',
        mheight: '18.75rem'
      },
      list: {
        title: t('1BywE0gMMmHqYbpuYRGyW'),
        subTitle: t('10KCWD0ValnrFobaa19fG'),
        content: t('bqdP31P6kwehm-KZVgWJG')
      }
    }
  };
});
</script>
