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
    :logo="$t('resources.caseStudiesDetailsYounity.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsYounity.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsYounity.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsYounity.header.title')"
    :content="$t('resources.caseStudiesDetailsYounity.header.content')"
    :btn="$t('resources.caseStudiesDetailsYounity.header.btn')"
    href="#"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsYounity.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_banner_graph_2x.png',
      w: '466px',
      h: '342px',

      msrc: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_banner_graph_2x.png',
      mw: '29.13rem',
      mh: '21.38rem'
    }"
  />
  <CommonNumbers
    is-row
    style="margin-top: 60px"
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsYounity.numbersTitle')"
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
definePageMeta({
  title: 'Resources'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: 'Bigger',
        label2: 'network',
        content: 'powered by 120+ PoPs and 80 Tbps backbone'
      },
      {
        label: 'Super',
        label2: 'support',
        content: 'working with them 24/7 during the event'
      },
      {
        label: '66%',
        label2: 'cost saved',
        content: 'compared to their original provider'
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_graph_1_2x.png',
        title: 'About Younity',
        content:
          'With a vision to empower people to find fulfillment, Younity wanted to bring topics like self-development and mental health to a broader audience. In 2015, Younity set out on a journey as an online company, building its own spirituality and coaching platform and running online events like flow! summit to connect viewers with a renowned network of speakers and experts.',
        content2:
          'They host lectures and seminars about personal growth, self-development, meditation, and much more. Since its foundation, Younity has made growth content accessible to anyone, anywhere since they launched flow! summit in 2017, viewers have tuned in from all over the world to listen and learn. These days, Younity hosts virtual events in more than 15 languages.',
        width: '336px',
        height: '252px',
        mwidth: '21rem',
        mheight: '15.75rem'
      },
      {
        pic: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_graph_2_2x.png',
        title: 'The Challenges',
        content:
          'To host online courses and lectures, Younity needed a virtual streaming platform. But once they started hosting summits, they had nothing but problems. The old platform couldn’t handle the traffic. Viewers complained about frequent crashes, and the crashes prevented the Younity team from seeing their analytics.',
        content2:
          'Even worse, their old provider’s support couldn’t answer their questions before tech issues ruined the viewer experience. Plus, Younity’s last streaming service closed their account without warning, had trouble processing payments, and was difficult to contact. At such a high price and with such unreliable service, the old provider was more of an obstacle to flow! summit than a facilitator.',
        content3: '',
        width: '350px',
        height: '274px',
        mwidth: '21.88rem',
        mheight: '17.13rem'
      },
      {
        pic: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_graph_3_2x.png',
        title: 'The Solution',
        content:
          "Younity stumbled upon Gowaf by chance. They realized Gowaf offered more than just basic streaming solutions. Gowaf Stream's captioning and translation features instantly caught their attention.Younity immediately saw the potential to ease access for its international audience.",
        content2:
          'So Younity decided to give Gowaf a try. The Gowaf Stream video player delivered a seamless live stream - free of buffering and crashes. We knew Younity needed quick answers to keep flow! summit running smoothly, so we gave them rapid-fire, 24/7 Slack support to support them every step of the way. Lastly, Younity moved their websites to Gowaf CDN to improve image quality and reduce page load times.',
        content3: '',
        width: '318px',
        height: '318px',
        mwidth: '19.88rem',
        mheight: '19.88rem'
      },
      {
        pic: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_graph_4_2x.png',
        title: 'The Results',
        content:
          'For the first time since launching flow! summit in 2017, Younity held the event with zero crashes. Every year prior, viewers left comments on videos saying something wasn’t working. In the March 2023 flow! summit, there were no complaints at all.',
        content2:
          'Integrating Gowaf was easy: the transition and preparation for the summit took less than a month. Younity was so happy with our service that they decided to use BunnyCDN to speed up their website as well.',
        width: '374px',
        height: '256px',
        mwidth: '23.38rem',
        mheight: '16rem'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: 'HOW OTT SOLUTIONS BOOSTED SPEED AND AVAILABILITY',
          subTitle: '',
          icon: '/images/resources/case-studies-details-younity/Resources_CaseStudies_pic_8_2x.png',
          icon2:
            '/images/resources/case-studies-details-younity/Resources_CaseStudies_card_logo_ot_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW ESKIMI EXPANDED WITH Gowaf CDN',
          subTitle: '',
          icon: '/images/resources/case-studies-details-younity/Resources_CaseStudies_pic_5_2x.png',
          icon2:
            '/images/resources/case-studies-details-younity/Resources_CaseStudies_card_logo_es_2x.png',
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
        img: '/images/resources/case-studies-details-younity/Network_Overview_evaluate_character_2x.png',
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
        title: 'Matthias Mauch',
        subTitle: 'Younity',
        content:
          '"We had a flow! summit without a single complaint.I think, overall, bunny.net is just a very complete solution.Handling videos is so easy with Bunny - you don\'t need a lot of training. It\'s very streamlined."'
      },
    }
  };
});
</script>
