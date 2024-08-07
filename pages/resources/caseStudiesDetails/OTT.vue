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
    logo="/images/resources/case-studies-details-ott/Resources_CaseStudies_card_logo_ot_2x.png"
    logoHeight="42px"
    logoWidth="110px"
    :title="$t('resources.caseStudiesDetailsOTT.header.title')"
    :content="$t('resources.caseStudiesDetailsOTT.header.content')"
    :btn="$t('resources.caseStudiesDetailsOTT.header.btn')"
    href="/ContactSales"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsOTT.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-ott/Resources_Case_Studies_details_OTT_banner_graph_2x.png',
      w: '417px',
      h: '397px',

      msrc: '/images/resources/case-studies-details-ott/Resources_Case_Studies_details_OTT_banner_graph_2x.png',
      mw: '26.06rem',
      mh: '24.81rem'
    }"
  />
  <CommonNumbers
    style="margin-top: 60px"
    is-row
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsOTT.numbersTitle')"
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
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Resources'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: t('MBGRzF6t3ObMODssFdXOz'),
        label2: ' delivery',
        content: t('ooI3rTRE62NZQTCmzfeBB')
      },
      {
        label: t('0WWcf35Swj-Tyx6rEGzKC'),
        label2: 'setup',
        content: t('yoB7LwqS6GGNf_kLySKlt')
      },
      {
        label: t('PI8Tiq2Oo9CGGB-2-4ygD'),
        label2: 'customers',
        content: t('O6QIAzqvAhkCbE4HF5VG4')
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-ott/Resources_Case_Studies_details_OTT_graph_1_2x.png',
        title: t('I5nlsvbCIop03IKvyqk5U'),
        content: t('8dR0T6L9KevJ38er0xLYP'),
        content2: t('5ewdsLW-dPQuRIqbZEZRQ'),
        width: '420px',
        height: '314px',
        mwidth: '26.25rem',
        mheight: '19.63rem'
      },
      {
        pic: '/images/resources/case-studies-details-ott/Resources_Case_Studies_details_OTT_graph_2_2x.png',
        title: t('4TyOIjs-7w2mFWI5-KHX0'),
        content: t('29En7YabOVpS0Y9O5StDR'),
        content2: t('e448_bsDJd45oNAUi1mYa'),
        width: '372px',
        height: '302px',
        mwidth: '23.25rem',
        mheight: '18.88rem'
      },
      {
        pic: '/images/resources/case-studies-details-ott/Resources_Case_Studies_details_OTT_graph_3_2x.png',
        title: t('BL0AfQMV8wX85i8gKFgjU'),
        content: t('_AQtApLT79qgBUfLu40Sk'),
        content2: t('3ts0vzWS_z_-88OH9jyY-'),
        content3: '',
        width: '430px',
        height: '348px',
        mwidth: '26.88rem',
        mheight: '21.75rem'
      },
      {
        pic: '/images/resources/case-studies-details-ott/Resources_Case_Studies_details_OTT_graph_4_2x.png',
        title: t('g7GEGMogKYzk-eZWZZiWl'),
        content: t('1PkvlglqS-jG5ojMJNyLH'),
        content2: t('M8NuNU6enGqvaTBFhewXg'),
        width: '394px',
        height: '258px',
        mwidth: '24.63rem',
        mheight: '16.13rem'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: t('GTiRsKcTRW--Qxcx7BBRh'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-ott/Resources_CaseStudies_pic_3_2x.png',
          icon2:
            '/images/resources/case-studies-details-ott/Resources_CaseStudies_card_logo_yo_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: ''
        },
        {
          title: t('7wLJAGYMPrZTh81b5WsPY'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-ott/Resources_CaseStudies_pic_7_2x.png',
          icon2:
            '/images/resources/case-studies-details-ott/Resources_CaseStudies_card_logo_va_2x.png',
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
        img: '/images/resources/case-studies-details-ott/Network_Overview_evaluate_character_2x.png',
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
        title: t('Ho-fe0HZG8dOM5THUYVwC'),
        subTitle: 'CEO',
        content: t('tStNT22BuIaNkViI4qLmJ')
      }
    }
  };
});
</script>
<style lang="less" scoped>
.Eskimi-products-customers {
  // margin-top: 12.5rem;
  // margin-bottom: 6.25rem;
}
</style>
