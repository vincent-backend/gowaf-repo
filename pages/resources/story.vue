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
        current: true
      },
      {
        label: $t('resources.breadCrumbs.careers'),
        href: '/resources/careers',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.caseStudies'),
        href: '/resources/caseStudies',
        current: false
      },
      {
        label: $t('resources.breadCrumbs.contact'),
        href: '/resources/contact',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('resources.story.header.preTitle')"
    :title="$t('resources.story.header.title')"
    :content="$t('resources.story.header.content')"
    btn=""
    href="#"
    hint=""
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :pic="{
      src: '/images/resources/story/Resources_Story_banner_graph_2x.png',
      w: '524px',
      h: '434px',

      msrc: '',
      mw: '',
      mh: ''
    }"
  />
  <CommonList3
    title1=""
    title2=""
    :layoutType="isMobile ? 'full' : ''"
    :items="i18ntext.list"
  >
    <template #full="{ item }">
      <div class="title">
        <h4>{{ item.title }}</h4>
        <h5>{{ item.subTitle }}</h5>
      </div>
      <div class="content">
        <p>{{ item.content1 }}</p>
        <p>{{ item.content2 }}</p>
      </div>
    </template>
  </CommonList3>

  <ProductsDRMCustomers :drmCustomer="i18ntext.drmCustomer" />
  <ProductsSupportPlan
    :bigtitle="$t('resources.story.listPolyfill.title')"
    :subTitle="$t('resources.story.listPolyfill.subTitle')"
    :title="$t('resources.story.listPolyfill.items.title')"
    :itemsContent="$t('resources.story.listPolyfill.items.content')"
    :itemsContent1="$t('resources.story.listPolyfill.items.content1')"
    :icon="$t('resources.story.listPolyfill.icon')"
    isHidenList
  />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Resources'
});
const i18ntext = computed(() => {
  return {
    list: [
      {
        title: '2012',
        subTitle: 'It all started with a simple problem',
        icon: '/images/resources/story/Resources_Story_card_bg_2x.png',
        content1:
          'In 2012 Dejan Grofelnik Pelzel faced a big problem - he had a website he was working on that was causing an ever-increasing traffic bill. A few terabytes of CDN costs were almost as high as his monthly paycheck, but he could never understand why.',
        content2:
          'Why were CDNs so expensive when network infrastructure was so affordable? CDNs were either grossly overpriced or didn’t work, but Dejan didn’t let that stop him. He always loved a challenge, and the solution was obvious.'
      },
      {
        title: '2013',
        subTitle: 'First concept of in-house CDN',
        content1:
          "Dejan went into action, and a few sleepless nights later, the first concept of a CDN with just 3 servers was born. He solved a problem and gave himself a pat on the back. As he was monitoring his website's performance, a light turned on in his head - “If I need this, surely there are others with the exact same problem!”.",
        content2:
          'The CDN market was a giant enterprise dinosaur focused on profits - not on creating value. Since Dejan always loved solving problems, he took it into his hands to build something extraordinary and fix the Content Delivery Network landscape for other developers.'
      },
      {
        title: '2015',
        subTitle: 'Gowaf CDN was born!',
        content1:
          'Before he knew it, Dejan became obsessed with building a service to disrupt the overpriced content delivery market. He focused on a product available to everyone - not just large enterprises.',
        content2:
          'Every beginning is hard, but that did not stop him - quite the opposite. It fueled his passion and dedication to building a world-class product and changing how people view content delivery. Without funding or a large team, the project grew, and finally, in 2015, Gowaf CDN was born with 8 PoPs worldwide and a strong focus on reducing content delivery costs.'
      },
      {
        title: '2018',
        subTitle: 'The first Gowaf Office opened',
        content1:
          'Developed as a side-project by a single person without any funding, it took a few years for the service to take off. But it was in 2018 when things turned - Gowaf CDN started growing rapidly! ',
        content2:
          "Thousands of new users every month began aligning with the service's vision and were fed up with the overpriced CDN market.With some help from his friends, Dejan could finally quit his job, focus full time on building the company and even open the first Gowaf Office.With more time on his hands, Dejan started focusing on bringing value and developing advanced features under a very simple interface that users really loved."
      },
      {
        title: '2021',
        subTitle: 'The start of a new vision',
        content1:
          'The year 2021 is the year everything changed. After seeing the impact that Gowaf CDN had on the world and how many new problems it could solve, a much loftier goal was born in Dejan’s mind: to push the company and the internet itself to the next level. This marked the end of Gowaf CDN and the start of Gowaf with an ambitious new vision of truly making the internet a better place, focusing on relentless innovation, and making complex problems at scale as simple as a few clicks.',
        content2:
          "Today, our team of experts is working to help solve some of the most complex global challenges and help shape and power the internet of tomorrow. In short and simple: we're making the internet hop faster!"
      }
    ],
    drmCustomer: {
      title: 'Together we will build a better tomorrow',
      contentPre: '',
      contentImg: '',
      contentMid: '',
      contentP: '',
      contentLink: '',
      contentLast: '',
      isHiddenSubTitle: true,
      faceImg: {
        img: '/images/resources/story/Network_Overview_evaluate_character_2x.png',
        top: '-54px',
        right: '135px',
        width: '438px',
        height: '352px',
        mtop: '6.81rem',
        mright: '0',
        mwidth: '27.38rem',
        mheight: '18.75rem'
      },
      list: {
        title: 'Dejan Grofelnik Pelzel',
        subTitle: 'Founder & CEO of Gowaf',
        content:
          'What started with trying to build a great CDN has grown into a passion to speed up the internet and really innovate the market.'
      },
      items: null
    }
  };
});
</script>
<style lang="scss" scoped>
.title {
  position: relative;
  &::before {
    position: absolute;
    top: -2rem;
    left: -2rem;
    content: '';
    display: block;
    width: 15.38rem;
    height: 9rem;
    background: url(/public/images/resources/story/Resources_Story_card_bg_2x.png);
    background-size: 100% 100%;
  }
  h4 {
    font-family: Mont, Mont;
    font-weight: 600;
    font-size: 3rem;
    color: #000000;
    line-height: 4rem;
    text-align: left;
    font-style: normal;
    text-transform: none;
    background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  h5 {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 2.13rem;
    color: #000000;
    line-height: 2.13rem;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin: 1.25rem 0;
  }
  .content {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    p {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.5rem;
      color: #4e4e4e;
      line-height: 2.13rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
}
</style>
