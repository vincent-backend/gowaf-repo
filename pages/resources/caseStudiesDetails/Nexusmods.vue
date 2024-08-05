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
    :logo="$t('resources.caseStudiesDetailsNexusmods.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsNexusmods.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsNexusmods.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsNexusmods.header.title')"
    :content="$t('resources.caseStudiesDetailsNexusmods.header.content')"
    :btn="$t('resources.caseStudiesDetailsNexusmods.header.btn')"
    href="#"
    :hint="$t('resources.caseStudiesDetailsNexusmods.header.hint')"
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
    <template
      v-for="(item, index) in i18ntext.items"
      :key="index"
    >
      <SolutionsAd2
        :title="item.title"
        :content="item?.content"
        :content2="item?.content2"
        :content3="item?.content3"
        :content4="item?.content4"
        :pic="item.pic"
        :pic-width="item.width"
        :pic-height="item.height"
        :reverse="index % 2 === 0"
      />
    </template>
  </div>
  <CommonList4 v-bind="i18ntext.list" />
  <ProductsDRMCustomers
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
        label: 'Flawless',
        label2: 'delivery',
        content: 'with faster download speeds'
      },
      {
        label: 'Improved',
        label2: 'UX',
        content: "by reducing user's complaints"
      },
      {
        label: '30%',
        label2: 'lower costs',
        content: 'on a monthly basis'
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-nexusmods/Resources_Case_Studies_details_nexusmods_graph_1_2x.png',
        title: 'About NexusMods',
        content:
          'Nexus Mods is not only one of the most highly trafficked UK-based websites but one of the most popular gaming websites out there. For over 19 years, they have made it their mission to provide the best platform for gamers around the world to share their mods and tools, free for everyone to enjoy.',
        content2:
          'Gamers can modify their games repeatedly by downloading mods that other users upload to the website or by using the Nexus Mods desktop app, Vortex, which helps automate the process. Nexus Mods supports a 50-terabyte mod library.',
        width: '389px',
        height: '258px',
        mwidth: '21.63rem',
        mheight: '18.25rem'
      },
      {
        pic: '/images/resources/case-studies-details-nexusmods/Resources_Case_Studies_details_nexusmods_graph_2_2x.png',
        title: 'The Challenges',
        content:
          'The main challenge facing Nexus Mods was delivering files to a global userbase with sufficient speeds. They first built their own CDN with 30+ servers around the world. However, the delivery speeds for users in Australia, East Asia, and South America were subpar, for which they routinely received complaints.',
        content2:
          'Nexus Mods tried working with other CDN solutions, but the pricing model wasn’t realistic. Their last provider employed a 95th percentile pricing model that caused significant overage bills due to weekend traffic spikes. Nexus Mods wanted to maintain its status as a cost-conscious, community-based, and community-funded website. On top of this, their traffic requirements were too high for standard pricing but not high enough for enterprise pricing.',
        width: '358px',
        height: '334px',
        mwidth: '21.63rem',
        mheight: '18.25rem'
      },
      {
        pic: '/images/resources/case-studies-details-nexusmods/Resources_Case_Studies_details_nexusmods_graph_3_2x.png',
        title: 'The Solution',
        content:
          'To help Nexus Mods solve these challenges, we worked together to find a solution that offered excellent performance while adhering to a very tight budget. The most significant factor behind their performance issues was a low cache hit rate. With their massive library of mods, their old CDN struggled to keep files in cache. It had to pull files from cold storage halfway across the world.',
        content2:
          'We helped Nexus Mods migrate their 50 TB content library to our Edge Storage platform as a drop-in replacement. Edge Storage let them seamlessly replicate their files to 5 regions worldwide, guaranteeing consistent excellent performance. Next, we designed a custom CDN plan optimized for the best global efficiency and affordable pricing. We were able to offer significantly reduced pricing compared to their own CDN.',
        content3:
          'Finally, we created a private Slack channel to help Nexus Mods smooth migration and give them direct 24/7 access to our Super Gowaf support team.',
        width: '340px',
        height: '296px',
        mwidth: '21.63rem',
        mheight: '18.25rem'
      },
      {
        pic: '/images/resources/case-studies-details-nexusmods/Resources_Case_Studies_details_nexusmods_graph_4_2x.png',
        title: 'The Results',
        content:
          'The final results of Nexus Mods’ move to Gowaf were fantastic. We supercharged their download speeds, enabling flawless, stable delivery - even in remote places. With better delivery, their user experience and satisfaction improved drastically.',
        content2:
          'Prior to switching to Gowaf, Nexus Mods received up to 10 complaints a day about slow download speed. Post-switch, these complaints disappeared entirely. To top it off, we lowered the total monthly delivery cost by 30%.',
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
          title: 'HOW INNOGAMES FORGED A PATH TO SAVINGS',
          subTitle: '',
          icon: '/images/resources/case-studies-details-nexusmods/Resources_CaseStudies_pic_2_2x.png',
          icon2:
            '/images/resources/case-studies-details-nexusmods/Resources_CaseStudies_card_logo_in_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW TIMBO JIMBO SCALED THEIR GAME TO 4 MILLION PLAYERS',
          subTitle: '',
          icon: '/images/resources/case-studies-details-nexusmods/Resources_CaseStudies_pic_6_2x.png',
          icon2:
            '/images/resources/case-studies-details-nexusmods/Resources_CaseStudies_card_logo_ti_2x.png',
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
        title: 'Tom Mason',
        subTitle: 'Head of Development',
        content:
          '“Working with Gowaf has been a breath of fresh air. Their team has been helpful, responsive, and knowledgeable. The service exceeded our expectations every step of the way.”'
      },
      items: null
    }
  };
});
</script>
