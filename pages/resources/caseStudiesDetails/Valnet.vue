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
    logo="/images/resources/case-studies-details-valnet/Resources_CaseStudies_card_logo_va_2x.png"
    logoHeight="42px"
    logoWidth="168px"
    :title="$t('resources.caseStudiesDetailsValnet.header.title')"
    :content="$t('resources.caseStudiesDetailsValnet.header.content')"
    :btn="$t('resources.caseStudiesDetailsValnet.header.btn')"
    href="#"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsValnet.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-valnet/Resources_Case_Studies_details_Valnet_banner_graph_2x.png',
      w: '426px',
      h: '352px',

      msrc: '/images/resources/case-studies-details-valnet/Resources_Case_Studies_details_Valnet_banner_graph_2x.png',
      mw: '26.63rem',
      mh: '22rem'
    }"
  />
  <CommonNumbers
    is-row
    style="margin-top: 60px"
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsValnet.numbersTitle')"
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
        label: t('XrVJYMHLH4RjtlcWg1hyG'),
        label2: 'migration',
        content: t('u_ylKsZJ4rwuTxtqr0JDI')
      },
      {
        label: t('YfbUDxgRaZvXlAj7ayM1b'),
        label2: 'savings',
        content: t('RmZVoEzmJMg8N6eKvKXrQ')
      },
      {
        label: t('0ddzNPRJBdy9-yY9hEZ89'),
        label2: 'delivery',
        content: t('fld-WA-6KGqACqkeH0XmI')
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-valnet/Resources_Case_Studies_details_Valnet_graph_1_2x.png',
        title: t('Z5TBaWVfObIc9y6qZvU3g'),
        content: t('sNu2378eaq8VvryijFGmD'),
        content2: t('818C-G4jWw-Po4uCOYOG3'),
        width: '440px',
        height: '322px',
        mwidth: '27.5rem',
        mheight: '20.13rem'
      },
      {
        pic: '/images/resources/case-studies-details-valnet/Resources_Case_Studies_details_Valnet_graph_2_2x.png',
        title: t('4TyOIjs-7w2mFWI5-KHX0'),
        content: t('yF1Ml4r1xSvIPcPP2IGoF'),
        content2: t('l9qU9TsB8CKdnpb13l9qH'),
        content3: '',
        width: '402px',
        height: '354px',
        mwidth: '25.13rem',
        mheight: '22.13rem'
      },
      {
        pic: '/images/resources/case-studies-details-valnet/Resources_Case_Studies_details_Valnet_graph_3_2x.png',
        title: t('BL0AfQMV8wX85i8gKFgjU'),
        content: t('ULMtgFyuIrpst1orkGVCl'),
        content2: t('mynwnkq_X-2RRXo531CID'),
        content3: '',
        width: '366px',
        height: '316px',
        mwidth: '22.88rem',
        mheight: '19.75rem'
      },
      {
        pic: '/images/resources/case-studies-details-valnet/Resources_Case_Studies_details_Valnet_graph_4_2x.png',
        title: t('g7GEGMogKYzk-eZWZZiWl'),
        content: t('Ut95PVWf3ODO90ncOpEgV'),
        content2: t('52GXWZHd4bhZnbJkLpBY-'),
        width: '406px',
        height: '252px',
        mwidth: '25.38rem',
        mheight: '18rem'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: t('ku6UdeyhcsiarrIkFc3f3'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-valnet/Resources_CaseStudies_pic_1_2x.png',
          icon2:
            '/images/resources/case-studies-details-valnet/Resources_CaseStudies_card_logo_nz_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: ''
        },
        {
          title: t('ssxqht_qY2s7p8B_-GjDS'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-valnet/Resources_CaseStudies_pic_5_2x.png',
          icon2:
            '/images/resources/case-studies-details-valnet/Resources_CaseStudies_card_logo_es_2x.png',
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
        img: '/images/resources/case-studies-details-valnet/Network_Overview_evaluate_character_2x.png',
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
        title: t('wBsXqRNlcWJMLAgt8qiaN'),
        subTitle: t('TO9u9sT-Lh_EhhGZKP5nL'),
        content: t('zDG6G6mQigtXgKAI4T-Cu')
      }
    }
  };
});
</script>
