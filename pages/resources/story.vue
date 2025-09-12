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
        href: '/resources/caseStudiesDetails',
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
    :layoutType="isMobile() ? 'full' : ''"
    :items="i18ntext.list"
    class="story-CommonList"
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

  <ProductsDRMCustomers :drmCustomer="i18ntext.drmCustomer" class="hidden-subtitle" />
  <ProductsSupportPlan
    :bigtitle="$t('resources.story.listPolyfill.title')"
    :subTitle="$t('resources.story.listPolyfill.subTitle')"
    :title="$t('resources.story.listPolyfill.items.title')"
    :itemsContent="$t('resources.story.listPolyfill.items.content')"
    :itemsContent1="$t('resources.story.listPolyfill.items.content1')"
    icon="/images/resources/story/Resources_Story_card_graph_2x.png"
    isHidenList
  />
  <Footer />
</template>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Resources'
});
const i18ntext = computed(() => {
  return {
    list: [
      {
        title: '2012',
        subTitle: t('A_kJZpcntyLKOP042ymDw'),
        icon: '/images/resources/story/Resources_Story_card_bg_2x.png',
        content1: t('P5tZ7QdBuj-C3JPR7cGKc'),
        content2: t('gsD-z46GTyG83whKQkwuU')
      },
      {
        title: '2013',
        subTitle: t('VIhtCnAYPxvSXFfMj93dY'),
        content1: t('SgQqqbTrlVfpHwfczWDql'),
        content2: t('x__KNtGKlbXS7cWpjnMhY')
      },
      {
        title: '2015',
        subTitle: t('yWh8-I26KgQzrb8GWcCjZ'),
        content1: t('rwMwIevaWxDNLdaYftwl9'),
        content2: t('7EPCG1ccnA5kGqsf15g1U')
      },
      {
        title: '2018',
        subTitle: t('nYJNSNRIVYxSaEg_YMUFR'),
        content1: t('a1OBu9jADQVZ6OiJc3Ffv'),
        content2: t('5NTwN4g9dcSQnk8NCdATM')
      },
      {
        title: '2021',
        subTitle: t('sH4wWF5cqiruQE3iJyejQ'),
        content1: t('_ozI87QrKlIMUXBTxsBTs'),
        content2: t('wCPCXh7pXw2Sg9sW00FCU')
      }
    ],
    drmCustomer: {
      title: t('JZWX5oGOxo7VjVINny10W'),
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
        title: t('7MgInFSla6IdNnl2mdd4S'),
        subTitle: t('mOpARF2GkJ5m4TG-yNkdE'),
        content: t('tQTcqqGKKd7zyPFwWyNsP')
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
    background: url(/images/resources/story/Resources_Story_card_bg_2x.png);
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

@media (max-width: 767px) {
  .story-CommonList {
    width: 43rem;
    margin: 0 auto 5.5rem;
  }
}
</style>