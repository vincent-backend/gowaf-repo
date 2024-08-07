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
    logo="/images/resources/case-studies-details-inno-games/innogames-colored-logo@2x.png"
    logoWidth="236px"
    logoHeight="30px"
    :title="$t('resources.caseStudiesDetailsInnoGames.header.title')"
    :content="$t('resources.caseStudiesDetailsInnoGames.header.content')"
    :btn="$t('resources.caseStudiesDetailsInnoGames.header.btn')"
    href="/ContactSales"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsInnoGames.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_banner_graph_2x.png',
      w: '386px',
      h: '366px',

      msrc: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_banner_graph_2x.png',
      mw: '24.13rem',
      mh: '22.88rem'
    }"
  />

  <CommonNumbers
    style="margin-top: 60px"
    is-row
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsInnoGames.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template v-for="(item, index) in i18ntext.items" :key="index">
      <SolutionsAd2
        :title="item.title"
        :content="item.content"
        :content2="item.content2"
        :pic="item.pic"
        :m-pic="item.pic"
        :pic-width="item.width"
        :pic-height="item.height"
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
        label: t('4ydN16Cw6v0bq0jaOKoWy'),
        label2: 'errors',
        content: t('HNjSC8t13CuQ837arzY6Z')
      },
      {
        label: t('kz_olIZJA3H_BxQwOsp6I'),
        label2: 'cost-effective',
        content: t('EjpZWeHvy7pZiEHq_bg3o')
      },
      {
        label: '24/7',
        label2: 'support',
        content: t('bdi63-Fdu1BggHT3XA6z8')
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_graph_1_2x.png',
        title: t('rX3V9zO67U92XbOoAQAHG'),
        content: t('LEGPkYiHStWrO-anURWyv'),
        content2: t('SfK0opKjg0p4z9x3pzXnF'),
        width: '320px',
        height: '320px',
        mwidth: '19.98rem',
        mheight: '19.98rem'
      },
      {
        pic: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_graph_2_2x.png',
        title: t('4TyOIjs-7w2mFWI5-KHX0'),
        content: t('R5K8TXRmr3MaFba8uL4q8'),
        content2: t('F3KDjJCV6CRgXoEKYnHlm'),
        width: '346px',
        height: '288px',
        mwidth: '21.63rem',
        mheight: '18rem'
      },
      {
        pic: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_graph_3_2x.png',
        title: t('BL0AfQMV8wX85i8gKFgjU'),
        content: t('4HGUPzJR3flNkmKexVK6D'),
        content2: t('ShdPVZbPJtb-rBkp1u5bB'),
        width: '400px',
        height: '334px',
        mwidth: '25rem',
        mheight: '20.88rem'
      },
      {
        pic: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_graph_4_2x.png',
        title: t('g7GEGMogKYzk-eZWZZiWl'),
        content: t('NZsnTD9r0SW8YD5Hzpkc8'),
        content2: t('Wsk2AgEKw9sxOnadqLNv8'),
        width: '364px',
        height: '269px',
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
          icon: '/images/resources/case-studies-details-inno-games/Resources_CaseStudies_pic_4_2x.png',
          icon2:
            '/images/resources/case-studies-details-inno-games/Resources_CaseStudies_card_logo_ne_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: ''
        },
        {
          title: t('fjLt025Xl02MMSD2wv3kv'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-inno-games/Resources_CaseStudies_pic_6_2x.png',
          icon2:
            '/images/resources/case-studies-details-inno-games/Resources_CaseStudies_card_logo_ti_2x.png',
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
        img: '/images/resources/story/Network_Overview_evaluate_character@2x.png',
        top: '-54px',
        right: '135px',
        width: '438px',
        height: '352px',
        mtop: '0',
        mright: '0',
        mwidth: '27.38rem',
        mheight: '18.75rem'
      },
      list: {
        title: t('P7bp6JcQC_JniuXmywCB8'),
        subTitle: t('_wkprpSwTc2oeQbKoEmEo'),
        content: t('g0aCxm_SZzTIbiq5goK_X')
      }
    }
  };
});
</script>
<style lang="less" scoped>
// .Eskimi-products-customers {
//   margin-top: 12.5rem;
//   margin-bottom: 6.25rem;
// }
</style>
