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
    :logo="$t('resources.caseStudiesDetailsValnet.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsValnet.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsValnet.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsValnet.header.title')"
    :content="$t('resources.caseStudiesDetailsValnet.header.content')"
    :btn="$t('resources.caseStudiesDetailsValnet.header.btn')"
    href="#"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsValnet.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-valnet/Resources_Case_Studies_details_Valnet_banner_graph_2x.png',
      w: '426px',
      h: '352px',

      msrc: '/images/resources/case-studies-details-valnet/Resources_Case_Studies_details_Valnet_banner_graph_2x.png',
      mw: '26.63rem',
      mh: '22rem'
    }"
  />
  <CommonNumbers
    is-row
    style="margin-top: 60px"
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsValnet.numbersTitle')"
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
        label: 'Fast',
        label2: 'migration',
        content: 'taking only a few days'
      },
      {
        label: 'Immediate',
        label2: 'savings',
        content: 'that allowed Valnet to scale'
      },
      {
        label: 'Curated',
        label2: 'delivery',
        content: 'between Volume & Standard Networks'
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-valnet/Resources_Case_Studies_details_Valnet_graph_1_2x.png',
        title: 'About Valnet',
        content:
          'With a varied portfolio, including over 30 renowned brands like Screen Rant, Game Rant, and How-to-Geek, Valnet is one of the leading content investment firms. This media giant serves content to users all over the world. Across their offerings, they receive more than 15 million daily website visits and have an average of more than 30 million hours of watch time per month.',
        content2:
          'In recent years, Valnet has expanded, acquiring additional verticals and building their own AdTech and monetization platforms. Valnet came to Gowaf seeking a scalable solution that would integrate smoothly with their newly developed video platform, and their experience exceeded expectations.',
        width: '440px',
        height: '322px',
        mwidth: '27.5rem',
        mheight: '20.13rem'
      },
      {
        pic: '/images/resources/case-studies-details-valnet/Resources_Case_Studies_details_Valnet_graph_2_2x.png',
        title: 'The Challenges',
        content:
          'Valnet had plans to expand quickly, but a few obstacles prevented them from scaling. Valnet needed a well-rounded technical solution that would fit the unique delivery needs of each of their 30+ verticals. Video content proved expensive to distribute. Valnet’s bandwidth needs were high, surpassing 5,000 terabytes per month. Their options were to build a new CDN from scratch, which would delay their growth, or to find a CDN provider. They chose the latter.',
        content2:
          'Since Valnet was developing their own video platform, it needed a solution that could integrate quickly at a competitive rate. They also needed quick access to data usage metrics so they could chart their expansion. After a bit of research, Gowaf was an obvious choice.',
        content3: '',
        width: '402px',
        height: '354px',
        mwidth: '25.13rem',
        mheight: '22.13rem'
      },
      {
        pic: '/images/resources/case-studies-details-valnet/Resources_Case_Studies_details_Valnet_graph_3_2x.png',
        title: 'The Solution',
        content:
          'Valnet immediately realized that Gowaf could give them the independence they needed to scale. We agreed, so we devised a first-class tech stack that met their needs. Gowaf CDN integrated seamlessly with Valnet’s new video player, with Gowaf Stream acting as a backup to maximize uptime. It also supported every type of content they served right from the dashboard.',
        content2:
          'Reducing the costs of video delivery was a necessity for Valnet, so we devised a two-tier pricing model that made sense for their business. Additionally, our dashboard’s analytics made it easy to track bandwidth usage - without calling a representative. Finally, as usual, our Super Gowaf stood by to support Valnet any time.',
        content3: '',
        width: '366px',
        height: '316px',
        mwidth: '22.88rem',
        mheight: '19.75rem'
      },
      {
        pic: '/images/resources/case-studies-details-valnet/Resources_Case_Studies_details_Valnet_graph_4_2x.png',
        title: 'The Results',
        content:
          'From the moment Valnet found Gowaf, they knew we were the solution. They made us a key part of their growth strategy. Migrating to Gowaf took just a few days, which in turn cut four months from their original deployment schedule.',
        content2:
          'After the switch, Valnet saw an immediate return on investment. Not only did they hit the ground running with a speedy deployment, but they paid a fraction of the price of comparable CDNs. Switching to Gowaf freed a giant up to grow even further. Valnet continued their growth plan and increased distribution by over 250%.',
        width: '406px',
        height: '252px',
        mwidth: '25.38rem',
        mheight: '18rem'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: 'HOW NZXT IMPROVED UPDATE DEPLOYMENT AND SAVED ON COSTS',
          subTitle: '',
          icon: '/images/resources/case-studies-details-valnet/Resources_CaseStudies_pic_1_2x.png',
          icon2:
            '/images/resources/case-studies-details-valnet/Resources_CaseStudies_card_logo_nz_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW ESKIMI EXPANDED WITH Gowaf CDN',
          subTitle: '',
          icon: '/images/resources/case-studies-details-valnet/Resources_CaseStudies_pic_5_2x.png',
          icon2:
            '/images/resources/case-studies-details-valnet/Resources_CaseStudies_card_logo_es_2x.png',
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
        img: '/images/resources/case-studies-details-valnet/Network_Overview_evaluate_character_2x.png',
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
        title: 'Ji Kim',
        subTitle: 'Director of Marketing',
        content:
          '"With our last provider, expansion wasn’t feasible.Switching to Gowaf brought our ROI calculations to the levels we were looking for.We started seeing ROI as soon as we switched over, and the transition was very, very quick.”'
      },
    }
  };
});
</script>
