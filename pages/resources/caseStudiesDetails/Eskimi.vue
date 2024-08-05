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
    :logo="$t('resources.caseStudiesDetailsEskimi.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsEskimi.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsEskimi.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsEskimi.header.title')"
    :content="$t('resources.caseStudiesDetailsEskimi.header.content')"
    :btn="$t('resources.caseStudiesDetailsEskimi.header.btn')"
    href="#"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsEskimi.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_banner_graph_2x.png',
      w: '406px',
      h: '368px',

      msrc: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_banner_graph_2x.png',
      mw: '25.38rem',
      mh: '23rem'
    }"
  />
  <CommonNumbers
    style="margin-top: 60px"
    is-row
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsEskimi.numbersTitle')"
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
        :m-pic="item.pic"
        :pic-width="item.width"
        :pic-height="item.height"
        m-pic-width="24.75rem"
        m-pic-height="20.25rem"
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
        label: 'Easy',
        label2: 'implementation',
        content: 'with Gowaf products'
      },
      {
        label: '24/7',
        label2: 'support',
        content: 'with fast and quality responses'
      },
      {
        label: 'Fair',
        label2: 'price',
        content: 'with pay-as-you-go pricing model'
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_graph_1_2x.png',
        title: 'About Eskimi',
        content:
          'Eskimi is a supply-side service AdTech provider that serves advertisements to audiences all over the world. They distribute hundreds of thousands of media requests options in seconds and determine which ads to show to end users when they visit a website.',
        content2:
          'Eskimi serves static and dynamic content, including image and video content. In just 100 milliseconds, Eskimi’s platform receives a request, matches it with the most relevant ads, and responds. Although their data centers are located in Europe, they serve ads all over the world. To Eskimi, a fast CDN is a vital part of their business.',
        width: '368px',
        height: '290px'
      },
      {
        pic: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_graph_2_2x.png',
        title: 'The Challenges',
        content:
          'In the fast-paced AdTech world, every millisecond counts. To get ads in view of potential customers, Eskimi needs to process and serve requests as fast as possible. Eskimi receives multiple requests every time a customer lands on a site using their platform, which creates an unexpected expense. Other CDNs charged by the number of requests served, which inflated their in addition to the unreasonably high price, Eskimi couldn’t afford delays from a slow network.',
        content2:
          'Even a few seconds of downtime meant customers’ ads wouldn’t be seen. Eskimi needed to keep their platform spinning out ads 24/7, at top speeds. Eskimi’s last CDN provider had servers in just two regions to distribute traffic around the world. It wasn’t enough to support their client base.',
        content3: '',
        width: '396px',
        height: '324px'
      },
      {
        pic: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_graph_3_2x.png',
        title: 'The Solution',
        content:
          'Eskimi read about Gowaf in an article in Hacker News. They liked what they heard, and decided to give us a try. First, we had to settle the pricing. The per-request fee structure other CDNs had offered Eskimi wasn’t feasible for their business, so we devised a pricing model that met their needs. Thanks to Gowaf CDN’s wider network, Eskimi gained access to more PoPs around the world.Through their internal reports, Eskimi promptly noticed latency and network errors drop off.',
        content2:
          'Lastly, we supported Eskimi through every network hop. Our Super Gowaf support answered Eskimi’s support tickets in no time flat: usually the same day they were submitted. We blew Eskimi away with our delivery speeds, intuitive user interface, and Super Gowaf support.',
        content3: '',
        width: '422px',
        height: '320px'
      },
      {
        pic: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_graph_4_2x.png',
        title: 'The Results',
        content:
          'Switching to Gowaf was a game-changer for Eskimi. Their old provider nearly locked them down with an expensive pricing plan, but our custom pricing plan slashed monthly overhead. Not only did we cut costs, but Gowaf CDN kept Eskimi’s platform spinning out ads without delay. From the moment they moved their platform, they saw errors and latency fall, further increasing revenue. Eskimi didn’t just cut costs - they grew.',
        content2:
          'The Eskimi team watched in real-time as Gowaf CDN served requests all over the globe, thanks to our dashboard’s traffic map. We gave them the reliable service and high speeds they needed at a price they could afford.',
        width: '346px',
        height: '348px'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: 'HOW OTT SOLUTIONS BOOSTED SPEED AND AVAILABILITY',
          subTitle: '',
          icon: '/images/resources/case-studies-details-eskimi/Resources_CaseStudies_pic_8_2x.png',
          icon2:
            '/images/resources/case-studies-details-eskimi/Resources_CaseStudies_card_logo_ot_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW VALNET SCALED 250% WHILE SAVING',
          subTitle: '',
          icon: '/images/resources/case-studies-details-eskimi/Resources_CaseStudies_pic_7_2x.png',
          icon2:
            '/images/resources/case-studies-details-eskimi/Resources_CaseStudies_card_logo_va_2x.png',
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
        img: '/images/resources/case-studies-details-eskimi/Network_Overview_evaluate_character_2x.png',
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
        title: 'Aivaras Voveris',
        subTitle: 'Staff Engineer',
        content:
          '"Try them and use it.It\'s very, very simple: you need a CDN you use a CDN. The pricing and the quality are top notch - I would definitely recommend it as well."'
      },
    }
  };
});
</script>
<style lang="less" scoped>
.Eskimi-products-customers {
  // margin-top: 12.5rem;
}
</style>
