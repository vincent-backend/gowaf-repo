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
    logo="/images/resources/case-studies-details-eskimi/Resources_CaseStudies_card_logo_es_2x.png"
    logoWidth="144px"
    logoHeight="42px"
    :title="$t('resources.caseStudiesDetailsEskimi.header.title')"
    :content="$t('resources.caseStudiesDetailsEskimi.header.content')"
    :btn="$t('resources.caseStudiesDetailsEskimi.header.btn')"
    href="#"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsEskimi.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_banner_graph_2x.png',
      w: '406px',
      h: '368px',

      msrc: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_banner_graph_2x.png',
      mw: '25.38rem',
      mh: '23rem'
    }"
  />
  <CommonNumbers
    style="margin-top: 60px"
    is-row
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsEskimi.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template v-for="(item, index) in i18ntext.items" :key="index">
      <SolutionsAd2
        :title="item.title"
        :content="item?.content"
        :content2="item?.content2"
        :content3="item?.content3"
        :pic="item.pic"
        :m-pic="item.pic"
        :pic-width="item.width"
        :pic-height="item.height"
        m-pic-width="24.75rem"
        m-pic-height="20.25rem"
        :reverse="$device.isMobile ? true : index % 2 === 0"
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
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Resources'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: t('0WWcf35Swj-Tyx6rEGzKC'),
        label2: 'implementation',
        content: t('fN3_s1RDi3O4XirtJTvGO')
      },
      {
        label: '24/7',
        label2: 'support',
        content: t('L_9UDoqMb-BAoq4jvZUEW')
      },
      {
        label: t('R_3mgQqyjradvGS1Zgqzr'),
        label2: 'price',
        content: t('bA54naA4V1davPY3sGuuG')
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_graph_1_2x.png',
        title: t('fK9IpgL4Qms21DCPKmgQT'),
        content: t('prI4vnHajnPbNAsYnHr9i'),
        content2: t('FyvlYxQsIhXFe7Izhli7A'),
        width: '368px',
        height: '290px'
      },
      {
        pic: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_graph_2_2x.png',
        title: t('4TyOIjs-7w2mFWI5-KHX0'),
        content: t('HgpbSfCzmifIBhVktoTxT'),
        content2: t('EZQ9ddP8X0zOT_cDHjFGX'),
        content3: '',
        width: '396px',
        height: '324px'
      },
      {
        pic: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_graph_3_2x.png',
        title: t('BL0AfQMV8wX85i8gKFgjU'),
        content: t('L_3Cb0ywowihUakU69j2D'),
        content2: t('awv0vD1EARXtk-_QnE5EQ'),
        content3: '',
        width: '422px',
        height: '320px'
      },
      {
        pic: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_graph_4_2x.png',
        title: t('g7GEGMogKYzk-eZWZZiWl'),
        content: t('Z_j4eZr6Kky-e_5O6dsou'),
        content2: t('r68orhGaQT2b0LA50pu2i'),
        width: '346px',
        height: '348px'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: t('JP2jF17Uoo5ZhF84MzRzT'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-eskimi/Resources_CaseStudies_pic_8_2x.png',
          icon2:
            '/images/resources/case-studies-details-eskimi/Resources_CaseStudies_card_logo_ot_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: ''
        },
        {
          title: t('7wLJAGYMPrZTh81b5WsPY'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-eskimi/Resources_CaseStudies_pic_7_2x.png',
          icon2:
            '/images/resources/case-studies-details-eskimi/Resources_CaseStudies_card_logo_va_2x.png',
          content1: t('azywX-MWuoZYNq9p-NtOt'),
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
        img: '/images/resources/case-studies-details-eskimi/Network_Overview_evaluate_character_2x.png',
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
        title: t('f111RB0zi-UpLkgYrLF4y'),
        subTitle: t('nRxYFgMpgySnjJuVMyond'),
        content: t('o31B7b4NNUNHnI2x9Rmbx')
      }
    }
  };
});
</script>
<style lang="less" scoped>
.Eskimi-products-customers {
  // margin-top: 12.5rem;
}
</style>
