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
    logo="/images/resources/case-studies-details-nzxt/Resources_CaseStudies_card_logo_nz_2x.png"
    logoHeight="42px"
    logoWidth="120px"
    :title="$t('resources.caseStudiesDetailsNzxt.header.title')"
    :content="$t('resources.caseStudiesDetailsNzxt.header.content')"
    :btn="$t('resources.caseStudiesDetailsNzxt.header.btn')"
    href="/ContactSales"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsNzxt.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-nzxt/Resources_Case_Studies_details_nzxt_banner_graph_2x.png',
      w: '446px',
      h: '366px',

      msrc: '/images/resources/case-studies-details-nzxt/Resources_Case_Studies_details_nzxt_banner_graph_2x.png',
      mw: '24.63rem',
      mh: '20.63rem'
    }"
  />
  <CommonNumbers
    style="margin-top: 60px"
    is-row
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsNzxt.numbersTitle')"
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
        :reverse="isMobile() ? true : index % 2 === 0"
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
        label: t('4ydN16Cw6v0bq0jaOKoWy'),
        label2: ' downloads',
        content: t('kSO101FnARb7zC9M8weZj')
      },
      {
        label: t('bGE-kMPuEL9XXFVX0YF3V'),
        label2: 'price',
        content: t('XqBTV_vfr3JqwrS3v6LY9')
      },
      {
        label: '24/7',
        label2: 'support',
        content: t('bdi63-Fdu1BggHT3XA6z8')
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-nzxt/Resources_Case_Studies_details_nzxt_graph_1_2x.png',
        title: t('26U3siaxID0c-Wak7QnMr'),
        content: t('NSy91tav1UoXMECW_aDxd'),
        content2: t('aQEJxqzMMh5E7t0GXixMY'),
        width: '368px',
        height: '300px',
        mwidth: '23rem',
        mheight: '18.75rem'
      },
      {
        pic: '/images/resources/case-studies-details-nzxt/Resources_Case_Studies_details_nzxt_graph_2_2x.png',
        title: t('4TyOIjs-7w2mFWI5-KHX0'),
        content: t('oGrB9Q0hGS9VMkhgRiYnl'),
        content2: t('t6OdkK0t62aCbitiHBxph'),
        content3: t('cgtBrsv9lAuQIDYMjpQiL'),
        width: '346px',
        height: '288px',
        mwidth: '21.63rem',
        mheight: '18rem'
      },
      {
        pic: '/images/resources/case-studies-details-nzxt/Resources_Case_Studies_details_nzxt_graph_3_2x.png',
        title: t('BL0AfQMV8wX85i8gKFgjU'),
        content: t('qaaCZSpj9zaQcLXH93GRm'),
        content2: t('2cbN2_PlTvAmhvG-CDRxZ'),
        content3: '',
        width: '340px',
        height: '333px',
        mwidth: '21.25rem',
        mheight: '20.81rem'
      },
      {
        pic: '/images/resources/case-studies-details-nzxt/Resources_Case_Studies_details_graph_4_2x.png',
        title: t('g7GEGMogKYzk-eZWZZiWl'),
        content: t('TSMsbvOv2nWSQYQ8Phbkb'),
        content2: t('4Bv7Z6APjfibMBN-BiLKo'),
        width: '364px',
        height: '270px',
        mwidth: '22.75rem',
        mheight: '16.88rem'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: t('gKGDRGbI5hC7TAgjznT9G'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-nzxt/Resources_CaseStudies_pic_4_2x.png',
          icon2:
            '/images/resources/case-studies-details-nzxt/Resources_CaseStudies_card_logo_ne_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/Nexusmods'
        },
        {
          title: t('LowpLxaH6sYUxTF2Oc8Rd'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-nzxt/Resources_CaseStudies_pic_9_2x.png',
          icon2:
            '/images/resources/case-studies-details-nzxt/Resources_CaseStudies_card_logo_pa_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/ParrotSec'
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
        img: '/images/resources/case-studies-details-nzxt/Network_Overview_evaluate_character_2x.png',
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
        title: t('P7bp6JcQC_JniuXmywCB8'),
        subTitle: t('_wkprpSwTc2oeQbKoEmEo'),
        content: t('SrFA7UxBrpoD0x2Wfz9-l')
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
