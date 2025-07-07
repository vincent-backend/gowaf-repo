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
    logo="/images/resources/case-studies-details-parrotsec/Resources_CaseStudies_card_logo_pa_2x.png"
    logoHeight="42px"
    logoWidth="224px"
    :title="$t('resources.caseStudiesDetailsParrotSec.header.title')"
    :content="$t('resources.caseStudiesDetailsParrotSec.header.content')"
    :btn="$t('resources.caseStudiesDetailsParrotSec.header.btn')"
    href="/ContactSales"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsParrotSec.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-parrotsec/Resources_Case_Studies_details_ParrotSec_banner_graph_2x.png',
      w: '398px',
      h: '368px',

      msrc: '/images/resources/case-studies-details-parrotsec/Resources_Case_Studies_details_ParrotSec_banner_graph_2x.png',
      mw: '24.88rem',
      mh: '23rem'
    }"
  />
  <CommonNumbers
    is-row
    style="margin-top: 60px"
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsParrotSec.numbersTitle')"
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
<style lang="less" scoped>
.Eskimi-products-customers {
  // margin-top: 12.5rem;
  // margin-bottom: 6.25rem;
}
</style>
<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: t('bGE-kMPuEL9XXFVX0YF3V'),
        label2: ' security',
        content: t('W90ZhOTYA6jEZEwOIYBiZ')
      },
      {
        label: t('MBGRzF6t3ObMODssFdXOz'),
        label2: 'performance',
        content: t('dQQ5XWkPUlsLhzTQ6eMHI')
      },
      {
        label: '80%',
        label2: t('WiMrDBg9yHpiOGu2LLWSP'),
        content: t('D_FMjj-BbCJbChrLe6OBH')
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-parrotsec/Resources_Case_Studies_details_ParrotSec_graph_1_2x.png',
        title: t('qmm5oOyXiNaMM3otnAIwq'),
        content: t('zu7BVO-bGj-n94kBdAEh1'),
        content2: t('oajJxX0E9RApFezpSSP0M'),
        width: '386px',
        height: '318px',
        mwidth: '24.13rem',
        mheight: '19.88rem'
      },
      {
        pic: '/images/resources/case-studies-details-parrotsec/Resources_Case_Studies_details_ParrotSec_graph_2_2x.png',
        title: t('4TyOIjs-7w2mFWI5-KHX0'),
        content: t('FEgY_ny5IuVY_0y8ZBeQa'),
        content2: t('dwuRKBJ6Uh5U06uWiqnbV'),
        width: '368px',
        height: '312px',
        mwidth: '23rem',
        mheight: '19.5rem'
      },
      {
        pic: '/images/resources/case-studies-details-parrotsec/Resources_Case_Studies_details_ParrotSec_graph_3_2x.png',
        title: t('BL0AfQMV8wX85i8gKFgjU'),
        content: t('Mv2IT3J5shRvZPHC7_ECI'),
        content2: t('1xdJk9ni8uvNWU0cvKi2y'),
        content3: '',
        width: '422px',
        height: '324px',
        mwidth: '26.38rem',
        mheight: '20.25rem'
      },
      {
        pic: '/images/resources/case-studies-details-parrotsec/Resources_Case_Studies_details_ParrotSec_graph_4_2x.png',
        title: t('g7GEGMogKYzk-eZWZZiWl'),
        content: t('-vuFa3qJ-RsaBzUMWnuBV'),
        content2: t('l5wrlIvNDzGR3rHtnPIsa'),
        width: '378px',
        height: '322px',
        mwidth: '23.63rem',
        mheight: '20.13rem'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: t('ku6UdeyhcsiarrIkFc3f3'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-parrotsec/Resources_CaseStudies_pic_1_2x.png',
          icon2:
            '/images/resources/case-studies-details-parrotsec/Resources_CaseStudies_card_logo_nz_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/Nzxt'
        },
        // {
        //   title: t('5kGGRVwrgqIDMEOCy2tFe'),
        //   subTitle: '',
        //   icon: '/images/resources/case-studies-details-parrotsec/Resources_CaseStudies_pic_11_2x.png',
        //   icon2:
        //     '/images/resources/case-studies-details-parrotsec/Resources_CaseStudies_card_logo_la_2x.png',
        //   content1: t('EUGThsatAhT5WnoupuXm8'),
        //   content2: '',
        //   link: '/resources/caseStudiesDetails/ParrotSec'
        // }
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
        img: '/images/resources/case-studies-details-parrotsec/Network_Overview_evaluate_character_2x.png',
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
        title: t('slC1dTteLCeaA7xERJn-K'),
        subTitle: 'CEO',
        content: t('JlDpy2j6XveEWp-HAJDm3')
      }
    }
  };
});
</script>
