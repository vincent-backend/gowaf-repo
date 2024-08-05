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
  />
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
          title: 'HOW NZXT IMPROVED UPDATE DEPLOYMENT AND SAVED ON COSTS',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_1_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_logo_nz_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW INNOGAMES FORGED A PATH TO SAVINGS',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_2_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_logo_in_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW YOUNITY STREAMED flow! summit TO 200,000 VIEWERS',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_3_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_logo_yo_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW NEXUS MODS IMPROVED DOWNLOAD SPEEDS AND STABILITY',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_4_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_logo_ne_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW ESKIMI EXPANDED WITH Gowaf CDN',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_5_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_es_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW TIMBO JIMBO SCALED THEIR GAME TO 4 MILLION PLAYERS',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_6_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_ti_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW VALNET SCALED 250% WHILE SAVING',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_7_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_logo_va_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW OTT SOLUTIONS BOOSTED SPEED AND AVAILABILITY',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_8_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_ot_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW PARROTSEC IMPROVED THEIR SECURITY AND RELIABILITY',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_9_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_logo_pa_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW PULSE BOOSTED SERVICE AND IMPROVED USER EXPERIENCE',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_10_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_pu_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW LAUNCH CDN BOOSTED SERVICE AND SAVED ON COSTS',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_11_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_la_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title:
            'HOW REDD.TUBE GREW FROM A FEW THOUSAND TO SEVERAL MILLION USERS',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_12_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_dd_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW SAMSUNG FOOD UTILIZED 5-STAR IMAGE OPTIMIZATION',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_13_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_sa_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW SYSTEM76 STREAMLINED THEIR GLOBAL CONTENT DELIVERY',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_14_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_Case_card_logo_innogames_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title:
            'HOW FILMMUSIC.IO PARTNERED WITH Gowaf TO SHARE MUSIC WITH THE WORLD',
          subTitle: '',
          icon: '/images/resources/case-studies/Resources_CaseStudies_pic_15_2x.png',
          icon2:
            '/images/resources/case-studies/Resources_CaseStudies_card_logo_fi_2x.png',
          content1: 'Read the case study',
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
