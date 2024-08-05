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
    :logo="$t('resources.caseStudiesDetailsParrotSec.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsParrotSec.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsParrotSec.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsParrotSec.header.title')"
    :content="$t('resources.caseStudiesDetailsParrotSec.header.content')"
    :btn="$t('resources.caseStudiesDetailsParrotSec.header.btn')"
    href="#"
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
    <template
      v-for="(item, index) in i18ntext.items"
      :key="index"
    >
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
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: 'Better',
        label2: ' security',
        content: 'by ditching their old mirror network'
      },
      {
        label: 'Improved',
        label2: 'performance',
        content: 'by accelerating asset fetching'
      },
      {
        label: '80%',
        label2: 'lower costs',
        content: 'by setting up a unique pricing model'
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-parrotsec/Resources_Case_Studies_details_ParrotSec_graph_1_2x.png',
        title: 'About ParrotSec',
        content:
          "Parrot Security OS is a free, open-source GNU/Linux distribution based on Debian, designed for security experts, developers, and privacy-aware people. It's a practical toolkit for cybersecurity specialists and a friendly companion for people who want to get closer to the cybersecurity world.",
        content2:
          'Unlike similar operating systems, it comes pre-installed with coding tools and regularly updates to support popular software. The project started in 2013 as a small, homemade OS, but it quickly saw its base skyrocket to over 200 thousand users.',
        width: '386px',
        height: '318px',
        mwidth: '24.13rem',
        mheight: '19.88rem'
      },
      {
        pic: '/images/resources/case-studies-details-parrotsec/Resources_Case_Studies_details_ParrotSec_graph_2_2x.png',
        title: 'The Challenges',
        content:
          'Parrot needed to support 9000+ downloads – over 102 gigabytes. At first, Parrot relied on volunteer mirror providers to increase their availability. But the mirror provider system created security problems: third parties could overwrite any download, and the Parrot team couldn’t do anything to stop it. Parrot’s bandwidth issue had evolved into a security issue.',
        content2:
          'Parrot decided to use a CDN, but their early attempts were unsatisfactory. Traditional CDNs were expensive and inefficient. Some couldn’t comply with GDPR. Parrot needed a solution that wouldn’t lock them into costly enterprise pricing while still providing secure, fast, efficient downloads.',
        width: '368px',
        height: '312px',
        mwidth: '23rem',
        mheight: '19.5rem'
      },
      {
        pic: '/images/resources/case-studies-details-parrotsec/Resources_Case_Studies_details_ParrotSec_graph_3_2x.png',
        title: 'The Solution',
        content:
          'Enter Gowaf! We worked with ParrotSec to build an affordable platform to host all of their architectures. With our custom pricing model, ParrotSec saved 80% on delivery costs. Other CDN networks tried to charge ParrotSec enterprise rates for features they didn’t use, but Gowaf offered them a plan built for their unique circumstances at an affordable rate.',
        content2:
          'ParrotSec needed to host 5 different versions of ParrotOS, so we switched them over to Gowaf CDN and Gowaf Storage. We put them on a pay-as-you-go rate and only charged them for the service they used. Finally, we created a private Slack channel to give ParrotSec direct 24/7 access to our Super Gowaf support team to make sure their service really flew.',
        content3: '',
        width: '422px',
        height: '324px',
        mwidth: '26.38rem',
        mheight: '20.25rem'
      },
      {
        pic: '/images/resources/case-studies-details-parrotsec/Resources_Case_Studies_details_ParrotSec_graph_4_2x.png',
        title: 'The Results',
        content:
          'Once Parrot switched to Gowaf, the team never looked back. Their users quickly noticed improved service and faster downloads. Complaints about security risks dropped off.',
        content2:
          'We surprised ParrotSec with faster service on a single Gowaf server than their previous CDN gave them on six. At a fraction of the price. ParrotSec wasn’t being served by major providers - so Gowaf stepped in to fill the gap.',
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
          title: 'HOW NZXT IMPROVED UPDATE DEPLOYMENT AND SAVED ON COSTS',
          subTitle: '',
          icon: '/images/resources/case-studies-details-parrotsec/Resources_CaseStudies_pic_1_2x.png',
          icon2:
            '/images/resources/case-studies-details-parrotsec/Resources_CaseStudies_card_logo_nz_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW LAUNCH CDN BOOSTED SERVICE AND SAVED ON COSTS',
          subTitle: '',
          icon: '/images/resources/case-studies-details-parrotsec/Resources_CaseStudies_pic_11_2x.png',
          icon2:
            '/images/resources/case-studies-details-parrotsec/Resources_CaseStudies_card_logo_la_2x.png',
          content1: 'Read the case study',
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
        title: 'Lorenzo Faletra',
        subTitle: 'CEO',
        content:
          '"We tried several CDN providers before, and although they were more expensive, they didn\'t offer the same performance and reliability. After the switch to Gowaf, our users immediately noticed how fast and reliable the downloads became."'
      },
    }
  };
});
</script>
