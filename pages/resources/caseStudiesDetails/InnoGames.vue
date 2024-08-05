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
    :logo="$t('resources.caseStudiesDetailsInnoGames.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsInnoGames.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsInnoGames.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsInnoGames.header.title')"
    :content="$t('resources.caseStudiesDetailsInnoGames.header.content')"
    :btn="$t('resources.caseStudiesDetailsInnoGames.header.btn')"
    href="#"
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
    <template
      v-for="(item, index) in i18ntext.items"
      :key="index"
    >
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
definePageMeta({
  title: 'Resources'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: 'Fewer',
        label2: 'errors',
        content: 'at comparable speeds'
      },
      {
        label: 'More',
        label2: 'cost-effective',
        content: 'price with no commitment'
      },
      {
        label: '24/7',
        label2: 'support',
        content: 'access via private Slack'
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_graph_1_2x.png',
        title: 'About InnoGames',
        content:
          'InnoGames was founded in 2007, when a little browser game called Tribal Wars, a hobby project conceived by three young guys in 2003, evolved into a full-fledged game studio. Now, the Hamburg-based developer is a heavy hitter in the online gaming world, crafting award-winning free-to-play titles for gamers around the globe. They’re best known for titles like Tribal Wars, Elvenar, and Forge of Empires - the last of which grossed over 1 billion EUR in lifetime revenue.',
        content2:
          'The most recent additions to the InnoGames portfolio were Rise of Cultures and Sunrise Village, two mobile-first games that were released in early 2022. Whether its strategy-based builders or cozy farming sims, InnoGames has carved out the frontier of mobile gaming.',
        width: '320px',
        height: '320px',
        mwidth: '19.98rem',
        mheight: '19.98rem'
      },
      {
        pic: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_graph_2_2x.png',
        title: 'The Challenges',
        content:
          'Although InnoGames wanted to do as much in-house as possible, there were some things they couldn’t do. InnoGames needed to distribute updates for 10 different games in countries all over the world, with a localized version of each game in every country. This amounted to over 500 terabytes per month of bandwidth.',
        content2:
          'InnoGames needed a CDN. But their first CDN provider had some issues: A confusing pricing plan that required InnoGames to purchase a minimum bandwidth commitment - or pay extra. A support ticket system that left InnoGames waiting days for answers.',
        width: '346px',
        height: '288px',
        mwidth: '21.63rem',
        mheight: '18rem'
      },
      {
        pic: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_graph_3_2x.png',
        title: 'The Solution',
        content:
          'After investigating a few different CDN providers, InnoGames eventually chose Gowaf. Aside from the technical features, they said they liked the name. Us too. Once they started using Gowaf, they saw improvements right away. We didn’t require InnoGames to commit to a certain bandwidth just to get a fair price. We set them up with a pricing and bandwidth plan that fit their needs right out the gate.',
        content2:
          'Finally, we gave them 24/7 access to our Super Gowaf support and set up a private Slack channel. InnoGames was already using Slack, so they loved the convenience. InnoGames wanted to switch from their previous CDN because the support was too slow. Our Super Gowaf never kept them waiting. Whenever they had a question, we answered fast - usually the same day.',
        width: '400px',
        height: '334px',
        mwidth: '25rem',
        mheight: '20.88rem'
      },
      {
        pic: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_graph_4_2x.png',
        title: 'The Results',
        content:
          'Although InnoGames came for the cute name, Gowaf quickly impressed them with our offerings. Gowaf CDN spoke for itself, with PoPs all over the world granting high speeds. The Super Gowaf never left InnoGames waiting more than a day for answers - so the InnoGames team enjoyed friendly service right when they needed it.',
        content2:
          'Our pricing was clear from the start, free of microtransactions and hidden fees. InnoGames paid just for what they needed, no more. Not to mention, they saved by switching to Gowaf.',
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
          title: 'HOW NEXUS MODS IMPROVED DOWNLOAD SPEEDS AND STABILITY',
          subTitle: '',
          icon: '/images/resources/case-studies-details-inno-games/Resources_CaseStudies_pic_4_2x.png',
          icon2:
            '/images/resources/case-studies-details-inno-games/Resources_CaseStudies_card_logo_ne_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW TIMBO JIMBO SCALED THEIR GAME TO 4 MILLION PLAYERS',
          subTitle: '',
          icon: '/images/resources/case-studies-details-inno-games/Resources_CaseStudies_pic_6_2x.png',
          icon2:
            '/images/resources/case-studies-details-inno-games/Resources_CaseStudies_card_logo_ti_2x.png',
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
        title: 'Bernhard Schrader',
        subTitle: 'Lead Sys Admin',
        content:
          "I like that Gowaf CDN's support works with real people, in a real chat, with quick solutions. It’s important to know that a human has looked at the problem."
      },
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
