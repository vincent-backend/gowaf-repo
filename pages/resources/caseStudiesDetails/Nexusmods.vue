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
    logo="/images/resources/case-studies-details-nexusmods/Resources_CaseStudies_card_logo_ne_2x.png"
    logoHeight="42px"
    logoWidth="176px"
    :title="$t('resources.caseStudiesDetailsNexusmods.header.title')"
    :content="$t('resources.caseStudiesDetailsNexusmods.header.content')"
    :btn="$t('resources.caseStudiesDetailsNexusmods.header.btn')"
    href="/ContactSales"
    hint="1"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsNexusmods.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-nexusmods/Resources_Case_Studies_details_nexusmods_banner_graph_2x.png',
      w: '394px',
      h: '330px',

      msrc: '',
      mw: '',
      mh: ''
    }"
  />
  <CommonNumbers
    style="margin-top: 60px"
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsNexusmods.numbersTitle')"
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
        :reverse="index % 2 === 0"
      />
    </template>
  </div>
  <CommonList4 v-bind="i18ntext.list" />
  <ProductsDRMCustomers :drmCustomer="i18ntext.drmCustomer" />
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
        label: t('64kaGo8Q-IMrLXSnfhEAV'),
        label2: 'delivery',
        content: t('tGPYDajiw_v19NoTuLLWr')
      },
      {
        label: t('MBGRzF6t3ObMODssFdXOz'),
        label2: 'UX',
        content: t('V9oHNFRO59r-4Z0QLhkx5')
      },
      {
        label: '30%',
        label2: t('WiMrDBg9yHpiOGu2LLWSP'),
        content: t('EAN8XJjWOR7XWvHEmn3S-')
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-nexusmods/Resources_Case_Studies_details_nexusmods_graph_1_2x.png',
        title: t('22s3dW9qMQdvUd71NXF4m'),
        content: t('Rc1HBpTMs9MONl8ivQi8r'),
        content2: t('-0FzboFI1PStgMKrVsa1G'),
        width: '389px',
        height: '258px',
        mwidth: '21.63rem',
        mheight: '18.25rem'
      },
      {
        pic: '/images/resources/case-studies-details-nexusmods/Resources_Case_Studies_details_nexusmods_graph_2_2x.png',
        title: t('4TyOIjs-7w2mFWI5-KHX0'),
        content: t('lh3qrnIWhbR4bVpFpsclu'),
        content2: t('2vqxogg6BndAZW3yigv6_'),
        width: '358px',
        height: '334px',
        mwidth: '21.63rem',
        mheight: '18.25rem'
      },
      {
        pic: '/images/resources/case-studies-details-nexusmods/Resources_Case_Studies_details_nexusmods_graph_3_2x.png',
        title: t('BL0AfQMV8wX85i8gKFgjU'),
        content: t('ShbqWVfcI1wt5_KcLMIhQ'),
        content2: t('snqQ-vrkD9jb5LNxq_vNa'),
        content3: t('uWkaDMMn_kcpK_WcmXGbi'),
        width: '340px',
        height: '296px',
        mwidth: '21.63rem',
        mheight: '18.25rem'
      },
      {
        pic: '/images/resources/case-studies-details-nexusmods/Resources_Case_Studies_details_nexusmods_graph_4_2x.png',
        title: t('g7GEGMogKYzk-eZWZZiWl'),
        content: t('JA0ZC2ZWwwpuLiDz1ZHLh'),
        content2: t('LCjPEKBbSCn7skFnzWX-g'),
        width: '396px',
        height: '292px',
        mwidth: '21.63rem',
        mheight: '18.25rem'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: t('YL_xWZKCbWP8CvYQ2yYis'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-nexusmods/Resources_CaseStudies_pic_2_2x.png',
          icon2:
            '/images/resources/case-studies-details-nexusmods/Resources_CaseStudies_card_logo_in_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/InnoGames'
        },
        {
          title: t('fjLt025Xl02MMSD2wv3kv'),
          subTitle: '',
          icon: '/images/resources/case-studies-details-nexusmods/Resources_CaseStudies_pic_6_2x.png',
          icon2:
            '/images/resources/case-studies-details-nexusmods/Resources_CaseStudies_card_logo_ti_2x.png',
          content1: t('EUGThsatAhT5WnoupuXm8'),
          content2: '',
          link: '/resources/caseStudiesDetails/Timbo'
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
        img: '/images/resources/case-studies-details-nexusmods/Network_Overview_evaluate_character_2x.png',
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
        title: t('ZeeSZ52uudWny1Fk6BsKG'),
        subTitle: t('OZQ4MIAhrEJcp3Bb0QdPf'),
        content: t('OmSew8mun8sNwyQTiAUuz')
      }
    }
  };
});
</script>
