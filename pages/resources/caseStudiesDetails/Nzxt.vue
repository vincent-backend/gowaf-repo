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
    :logo="$t('resources.caseStudiesDetailsNzxt.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsNzxt.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsNzxt.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsNzxt.header.title')"
    :content="$t('resources.caseStudiesDetailsNzxt.header.content')"
    :btn="$t('resources.caseStudiesDetailsNzxt.header.btn')"
    href="#"
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
<script setup lang="ts">
definePageMeta({
  title: 'Resources'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: 'Fewer',
        label2: ' downloads',
        content: 'in various regions worldwide'
      },
      {
        label: 'Better',
        label2: 'price',
        content: 'on bandwidth and storage'
      },
      {
        label: '24/7',
        label2: 'support',
        content: 'access via private Slack'
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-nzxt/Resources_Case_Studies_details_nzxt_graph_1_2x.png',
        title: 'About NZXT',
        content:
          'NZXT is a leading manufacturer in the gaming hardware industry, specializing in high-performance gaming PCs and essential peripherals such as mice, keyboards, and microphones. We’re huge fans. Some of the Gowaf team own more than two NZXT gaming rigs.',
        content2:
          'So why does a PC manufacturer use Gowaf? To keep those cool gaming rigs spinning, NZXT delivers monthly optimization updates to their 1 million users using their CAM software. NZXT came to Gowaf in early 2023 looking for a better monthly distribution rate, but got so much more.',
        width: '368px',
        height: '300px',
        mwidth: '23rem',
        mheight: '18.75rem'
      },
      {
        pic: '/images/resources/case-studies-details-nzxt/Resources_Case_Studies_details_nzxt_graph_2_2x.png',
        title: 'The Challenges',
        content:
          'To keep those cool custom gaming rigs running crisp, lag-free games, NZXT releases monthly software updates to users around the globe. These deployments became expensive under their old CDN. NZXT needed to deploy 30-100 megabytes of data per installer. That amounted to more than 30 terabytes of data every month.',
        content2:
          'NZXT first reduced the bandwidth load, deploying differential updates - or only updating the differences between the new and old versions - but even with reduced bandwidth, deployment costs remained a significant issue. Despite the costs, the NZXT team wasn’t willing to sacrifice their product’s quality to cut costs.',
        content3:
          'Whatever change NZXT made, they needed something that could handle the traffic and wouldn’t affect customer experience.',
        width: '346px',
        height: '288px',
        mwidth: '21.63rem',
        mheight: '18rem'
      },
      {
        pic: '/images/resources/case-studies-details-nzxt/Resources_Case_Studies_details_nzxt_graph_3_2x.png',
        title: 'The Solution',
        content:
          'NZXT came to Gowaf in 2023. We made the switch easy for them. Once they switched, the NZXT team was pleased by how easy our dashboard was to use. Integrating Gowaf with their update platform was so easy that NZXT configured Gowaf CDN in a few minutes.',
        content2:
          'Plus, our dashboard helped them level up their deployments with useful metrics that NZXT incorporated into their deployment validation. NZXT rarely had an issue that required a call to tech support, but our Super Gowaf support stayed on standby to make the switch even easier.',
        content3: '',
        width: '340px',
        height: '333px',
        mwidth: '21.25rem',
        mheight: '20.81rem'
      },
      {
        pic: '/images/resources/case-studies-details-nzxt/Resources_Case_Studies_details_graph_4_2x.png',
        title: 'The Results',
        content:
          'NZXT came to Gowaf to save on monthly overhead and stayed for the great service. NZXT could have integrated Gowaf CDN and forgotten about it. Instead, they found a cool new power-up: our dashboard became a useful monitoring tool, helping the NZXT team to verify the success of each deployment.',
        content2:
          'Now, in addition to delivering software updates, they use us to track their beta releases. We impressed them with our service, and, of course, we saved them more than 50% on monthly fees.',
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
          title: 'HOW NEXUS MODS IMPROVED DOWNLOAD SPEEDS AND STABILITY',
          subTitle: '',
          icon: '/images/resources/case-studies-details-nzxt/Resources_CaseStudies_pic_4_2x.png',
          icon2:
            '/images/resources/case-studies-details-nzxt/Resources_CaseStudies_card_logo_ne_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW PARROTSEC IMPROVED THEIR SECURITY AND RELIABILITY',
          subTitle: '',
          icon: '/images/resources/case-studies-details-nzxt/Resources_CaseStudies_pic_9_2x.png',
          icon2:
            '/images/resources/case-studies-details-nzxt/Resources_CaseStudies_card_logo_pa_2x.png',
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
        title: 'Bernhard Schrader',
        subTitle: 'Lead Sys Admin',
        content:
          '"I like that Gowaf CDN\'s support works with real people, in a real chat, with quick solutions. It’s important to know that a human has looked at the problem."'
      },
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
