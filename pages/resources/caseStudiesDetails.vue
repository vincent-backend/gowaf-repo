<template>
  <Header />
  <BreadCrumbs :title="$t('resources.breadCrumbs.parent')" :items="[
    { label: $t('resources.breadCrumbs.about'), href: '/resources/about', current: false },
    { label: $t('resources.breadCrumbs.story'), href: '/resources/story', current: false },
    { label: $t('resources.breadCrumbs.careers'), href: '/resources/careers', current: false },
    { label: $t('resources.breadCrumbs.caseStudies'), href: '/resources/caseStudies', current: true },
    { label: $t('resources.breadCrumbs.contact'), href: '/resources/contact', current: false },
  ]" />
  <CommonHeader1 
    :pre-title="$t('resources.caseStudiesDetails.header.preTitle')"
    :logo="$t('resources.caseStudiesDetails.header.logo')"
    :title="$t('resources.caseStudiesDetails.header.title')" :content="$t('resources.caseStudiesDetails.header.content')"
    :btn="$t('resources.caseStudiesDetails.header.btn')" href="#" 
    :hint="$t('resources.caseStudiesDetails.header.hint')"
    :rightStyle="{'margin-top': '30px', 'margin-right': '90px'}" 
    :containerStyle="{'height': '590px'}" 
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetails.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/caseStudiesDetails/Resources_Case_Studies_details_banner_graph_2x.png',
      w: '386px',
      h: '366px',

      msrc: '',
      mw: '',
      mh: '',
    }"
  />

  <CommonNumbers style="margin-top: 60px;" 
    :items="$tm('resources.caseStudiesDetails.numbers')"
    :numbersTitle="$t('resources.caseStudiesDetails.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px;">
    <template v-for="(item, index) in $tm('resources.caseStudiesDetails.ad2Container.items')" :key="index">
      <SolutionsAd2 
        :title="item.title" 
        :content="item.content" 
        :content2="item.content2" 
        :pic="item.pic" 
        :pic-width="item.width"
        :pic-height="item.height" 
        :reverse="index % 2 === 0"
       />
    </template>
  </div>
    <CommonList4 
    v-bind="$tm('resources.caseStudiesDetails.list')"
  />
  <Footer />
</template>