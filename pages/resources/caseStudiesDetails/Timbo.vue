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
    :logo="$t('resources.caseStudiesDetailsTimbo.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsTimbo.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsTimbo.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsTimbo.header.title')"
    :content="$t('resources.caseStudiesDetailsTimbo.header.content')"
    :btn="$t('resources.caseStudiesDetailsTimbo.header.btn')"
    href="#"
    :hint="$t('resources.caseStudiesDetailsTimbo.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsTimbo.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-timbo/Resources_Case_Studies_details_Timbo_banner_graph_2x.png',
      w: '434px',
      h: '400px',

      msrc: '/images/resources/case-studies-details-timbo/Resources_Case_Studies_details_Timbo_banner_graph_2x.png',
      mw: '27.13rem',
      mh: '25rem'
    }"
  />
  <CommonNumbers
    is-row
    style="margin-top: 60px"
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsTimbo.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template v-for="(item, index) in i18ntext.items" :key="index">
      <SolutionsAd2
        :title="item.title"
        :content="item?.content"
        :content2="item?.content2"
        :content3="item?.content3"
        :content4="item?.content4"
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
        label: 'Better',
        label2: 'distribution',
        content: 'with a Network powered by 120+ PoPs'
      },
      {
        label: 'Faster',
        label2: 'downloads',
        content: 'for regular game updates'
      },
      {
        label: 'Fair',
        label2: 'price',
        content: 'that enabled them to scale'
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-timbo/Resources_Case_Studies_details_Timbo_graph_1_2x.png',
        title: 'About Timbo Jimbo',
        content:
          'Meet Timbo Jimbo: the two-man team behind Static Shift Racing. With just a two-person team, they made a seriously cool racing game where players can customize cars, race each other, and explore a vast open world.',
        content2:
          'Static Shift Racing started as a hobby project, but just like Gowaf, Timbo Jimbo’s ambitions grew over time. In January 2023, they launched Static Shift Racing globally to a dedicated global audience. The game raced to the app store front pages, passing 4 million downloads before its first anniversary. The game is available for free on Android and iOS, and if you start the download right now, it’ll be ready to play before you finish reading this case study.',
        width: '384px',
        height: '280px',
        mwidth: '24rem',
        mheight: '17.5rem'
      },
      {
        pic: '/images/resources/case-studies-details-timbo/Resources_Case_Studies_details_Timbo_graph_2_2x.png',
        title: 'The Challenges',
        content:
          'With a 280 MB game file and a global audience, Timbo Jimbo needed to distribute not just their game but regular updates to people all over the world. App stores alone just couldn’t keep up. While the game file was small, Timbo Jimbo’s audience wasn’t. They needed a CDN that could accommodate an overseas audience and frequent updates.',
        content2:
          'Timbo Jimbo couldn’t let downtime slow them down either. To support users across many time zones, Timbo Jimbo needed to distribute updates all day, every day. Timbo Jimbo’s previous CDN would have cost thousands of dollars per day, which would have stalled Static Shift Racing before it ever picked up traction.',
        content3: '',
        width: '334px',
        height: '320px',
        mwidth: '20.88rem',
        mheight: '20rem'
      },
      {
        pic: '/images/resources/case-studies-details-timbo/Resources_Case_Studies_details_Timbo_graph_3_2x.png',
        title: 'The Solution',
        content:
          'While other CDN’s offered pricing that could have stalled the game in its tracks, Gowaf was the spark Timbo Jimbo needed to ignite Static Shift Racing. With enough PoPs to cover every continent, Gowaf CDN’s global network ensured speedy downloads for anyone, anywhere.',
        content2:
          'Setup couldn’t have been easier, thanks to our support. Our Super Gowaf stepped in as Timbo Jimbo’s trusty copilots, steering them to success with fast, accurate answers whenever they needed them. Timbo Jimbo got answers to most questions the same day they asked!',
        content3: '',
        width: '346px',
        height: '292px',
        mwidth: '21.63rem',
        mheight: '18.25rem'
      },
      {
        pic: '/images/resources/case-studies-details-timbo/Resources_Case_Studies_details_Timbo_graph_4_2x.png',
        title: 'The Results',
        content:
          'As a small team, Timbo Jimbo was overlooked by other CDN providers. Gowaf made it possible for them to ignite their passion project. After switching to bunny, Timbo Jimbo raced to the App Store front page.',
        content2:
          'Static Shift Racing passed 1 million downloads before its first month, but Timbo Jimbo didn’t let off the gas. They released more than 60 content updates to keep users coming back. Thanks to our clear pricing model, they don’t have to worry about surprise fees when they do. Thanks to the fans, some hard work, and a little help from Gowaf CDN, the game has been downloaded over 4 million times before its first anniversary.',
        width: '342px',
        height: '252px',
        mwidth: '21.38rem',
        mheight: '15.75rem'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: 'HOW INNOGAMES FORGED A PATH TO SAVINGS',
          subTitle: '',
          icon: '/images/resources/case-studies-details-timbo/Resources_CaseStudies_pic_2_2x.png',
          icon2:
            '/images/resources/case-studies-details-timbo/Resources_CaseStudies_card_logo_in_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW NEXUS MODS IMPROVED DOWNLOAD SPEEDS AND STABILITY',
          subTitle: '',
          icon: '/images/resources/case-studies-details-timbo/Resources_CaseStudies_pic_4_2x.png',
          icon2:
            '/images/resources/case-studies-details-timbo/Resources_CaseStudies_card_logo_ne_2x.png',
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
        img: '/images/resources/case-studies-details-timbo/Network_Overview_evaluate_character_2x.png',
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
        title: 'Tim Aksu',
        subTitle: 'Co-Founder & Game Developer',
        content:
          '"Gowaf just works.We were able to swap out our primary CDN with Bunny in a single afternoon thanks to their Pull Zone functionality with minimal changes to our backend.Gowaf has saved us thousands of dollars compared to our original CDN.We\'re so glad we gave Gowaf a shot!Gowaf'
      },
    }
  };
});
</script>
