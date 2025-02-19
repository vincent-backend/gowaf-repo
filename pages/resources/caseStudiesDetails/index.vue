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
    :pre-title="$t('resources.caseStudies.header.preTitle')"
    :title="$t('resources.caseStudies.header.title')"
    :content="$t('resources.caseStudies.header.content')"
    href="#"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :isHidenLinkHit="false"
    :pic="{
      src: '/images/resources/case-studies/Resources_Case_Studies_banner_graph_2x.png',
      w: '416px',
      h: '348px',
      msrc: '/images/resources/case-studies/Resources_Case_Studies_banner_graph_2x.png',
      mw: '26rem',
      mh: '21.75rem'
    }"
  />
  <!-- <CommonHeader1
    :pre-title="$t('resources.caseStudies.header.preTitle')"
    :title="$t('resources.caseStudies.header.title')"
    :content="$t('resources.caseStudies.header.content')"
    :btn="$t('resources.caseStudies.header.btn')"
    href="#"
    :hint="$t('resources.caseStudies.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :isHidenLinkHit="true"
    :inputPlaceholder="$t('resources.caseStudies.header.inputPlaceholder')"
    :pic="{
      src: '/images/resources/case-studies/Resources_Case_Studies_banner_graph_2x.png',
      w: '416px',
      h: '348px',
      msrc: '/images/resources/case-studies/Resources_Case_Studies_banner_graph_2x.png',
      mw: '26rem',
      mh: '21.75rem'
    }"
  /> -->
  <HomeList1
    :list="i18ntext.logoIconList"
    :isHidenTile="true"
    class="caseStudies-HomeList1"
    bgColor="#fff"
    :btText="$t('resources.caseStudies.logoIconListBtText')"
  />
  <CommonList4
    class="caseStudies-CommonList4"
    v-bind="i18ntext.list"
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
    logoIconList: [
      '/images/resources/case-studies/Resources_CaseStudies_logo_nz_2x.png',
      '/images/resources/case-studies/Resources_CaseStudies_logo_in_2x.png',
      '/images/resources/case-studies/Resources_CaseStudies_logo_va_2x.png',
      '/images/resources/case-studies/Resources_CaseStudies_logo_pa_2x.png',
      '/images/resources/case-studies/Resources_CaseStudies_logo_yo_2x.png',
      '/images/resources/case-studies/Resources_CaseStudies_logo_ne_2x.png'
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: t('ku6UdeyhcsiarrIkFc3f3'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_1_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_logo_nz_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/Nzxt'
        },
        {
          title: t('YL_xWZKCbWP8CvYQ2yYis'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_2_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_logo_in_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/InnoGames'
        },
        {
          title: t('GTiRsKcTRW--Qxcx7BBRh'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_3_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_logo_yo_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/Younity'
        },
        {
          title: t('gKGDRGbI5hC7TAgjznT9G'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_4_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_logo_ne_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/Nexusmods'
        },
        {
          title: t('ssxqht_qY2s7p8B_-GjDS'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_5_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_es_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/Eskimi'
        },
        {
          title: t('fjLt025Xl02MMSD2wv3kv'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_6_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_ti_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/Timbo'
        },
        {
          title: t('7wLJAGYMPrZTh81b5WsPY'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_7_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_logo_va_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/Valnet'
        },
        {
          title: t('JP2jF17Uoo5ZhF84MzRzT'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_8_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_ot_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/OTT'
        },
        {
          title: t('LowpLxaH6sYUxTF2Oc8Rd'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_9_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_logo_pa_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/ParrotSec'
        },
        {
          title: t('6WABPi6NTfLwpxrxYQhoa'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_10_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_pu_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
        },
        {
          title: t('5kGGRVwrgqIDMEOCy2tFe'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_11_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_la_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: ''
        },
        {
          title:
            t('gZMN04hAzHGjyfnfHwY7U'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_12_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_dd_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: ''
        },
        {
          title: t('ppE5wlTXkXcl737cFB86U'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_13_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_sa_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: ''
        },
        {
          title: t('ENl3GOc0HfgJMQ57bCh2e'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_14_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_Case_card_logo_innogames_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: ''
        },
        {
          title:
            t('PpaZUmbkZNryu6Tdwx21g'),
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_15_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_fi_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: ''
        }
      ]
    }
  };
});
</script>
<style lang="less" scoped>
.caseStudies-CommonList4 {
  margin-top: 0;
}
</style>
