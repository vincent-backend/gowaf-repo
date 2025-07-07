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
    logo="/images/resources/case-studies-details-timbo/Resources_CaseStudies_card_logo_ti_2x.png"
    logoHeight="42px"
    logoWidth="77px"
    :title="$t('resources.caseStudiesDetailsTimbo.header.title')"
    :content="$t('resources.caseStudiesDetailsTimbo.header.content')"
    :btn="$t('resources.caseStudiesDetailsTimbo.header.btn')"
    href="/ContactSales"
    :hint="$t('resources.caseStudiesDetailsTimbo.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsTimbo.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-timbo/Resources_Case_Studies_details_Timbo_banner_graph_2x.png',
      w: '434px',
      h: '400px',

      msrc: '/images/resources/case-studies-details-timbo/Resources_Case_Studies_details_Timbo_banner_graph_2x.png',
      mw: '27.13rem',
      mh: '25rem'
    }"
  />
  <CommonNumbers
    is-row
    style="margin-top: 60px"
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsTimbo.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template v-for="(item, index) in i18ntext.items" :key="index">
      <SolutionsAd2
        :title="item.title"
        :content="item?.content"
        :content2="item?.content2"
        :content3="item?.content3"
        :content4="item?.content4"
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
        label: t('bGE-kMPuEL9XXFVX0YF3V'),
        label2: 'distribution',
        content: t('XtaMjKXj2xYZtysE_gVYf')
      },
      {
        label: t('upu4FATCc3Co5coASNZjg'),
        label2: 'downloads',
        content: t('9WRQ-H_ECOJ4e4RHTbOq0')
      },
      {
        label: t('R_3mgQqyjradvGS1Zgqzr'),
        label2: 'price',
        content: t('cQkiI_-5L_MlyxE33f11w')
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-timbo/Resources_Case_Studies_details_Timbo_graph_1_2x.png',
        title: t('X_oJH2g3hDgszGL-VO1rV'),
        content: t('wkpL2fI1sHomuZgx_MbWK'),
        content2: t('DhFqfYWsWTiQ5dEZQ38Q-'),
        width: '384px',
        height: '280px',
        mwidth: '24rem',
        mheight: '17.5rem'
      },
      {
        pic: '/images/resources/case-studies-details-timbo/Resources_Case_Studies_details_Timbo_graph_2_2x.png',
        title: t('4TyOIjs-7w2mFWI5-KHX0'),
        content: t('4kneoHwR4qoEBHI6LKhpG'),
        content2: t('fo8zJEBHTBRPYK6qdlVS-'),
        content3: '',
        width: '334px',
        height: '320px',
        mwidth: '20.88rem',
        mheight: '20rem'
      },
      {
        pic: '/images/resources/case-studies-details-timbo/Resources_Case_Studies_details_Timbo_graph_3_2x.png',
        title: t('BL0AfQMV8wX85i8gKFgjU'),
        content: t('gfkFHBhD3RNZl-4C31N2D'),
        content2: t('jkcHtT_P2vCOwQT8Vlf0F'),
        content3: '',
        width: '346px',
        height: '292px',
        mwidth: '21.63rem',
        mheight: '18.25rem'
      },
      {
        pic: '/images/resources/case-studies-details-timbo/Resources_Case_Studies_details_Timbo_graph_4_2x.png',
        title: t('g7GEGMogKYzk-eZWZZiWl'),
        content: t('hRh8DtkzLCT80okinhCXT'),
        content2: t('bjDUhyzYiE17GMCzItvNE'),
        width: '342px',
        height: '252px',
        mwidth: '21.38rem',
        mheight: '15.75rem'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: t('YL_xWZKCbWP8CvYQ2yYis'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-timbo/Resources_CaseStudies_pic_2_2x.png',
          icon2:
            '/images/resources/case-studies-details-timbo/Resources_CaseStudies_card_logo_in_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/InnoGames'
        },
        {
          title: t('gKGDRGbI5hC7TAgjznT9G'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-timbo/Resources_CaseStudies_pic_4_2x.png',
          icon2:
            '/images/resources/case-studies-details-timbo/Resources_CaseStudies_card_logo_ne_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/Nexusmods'
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
        img: '/images/resources/case-studies-details-timbo/Network_Overview_evaluate_character_2x.png',
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
        title: t('baQ-iVTmttK2CEgWDZR7X'),
        subTitle: t('31_UcPg3ilClBzZQgtBdF'),
        content: t('re9LxJaspziMjcSxJjsH4')
      }
    }
  };
});
</script>
