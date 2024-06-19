<template>
  <Header />
  <BreadCrumbs :title="$t('resources.breadCrumbs.parent')" :items="[
    { label: $t('resources.breadCrumbs.about'), href: '/resources/about', current: false },
    { label: $t('resources.breadCrumbs.story'), href: '/resources/story', current: false },
    { label: $t('resources.breadCrumbs.careers'), href: '/resources/careers', current: false },
    { label: $t('resources.breadCrumbs.caseStudies'), href: '/resources/caseStudies', current: true },
    { label: $t('resources.breadCrumbs.contact'), href: '/resources/contact', current: false },
  ]" />
  <CommonHeader1 :pre-title="$t('resources.caseStudies.header.preTitle')"
    :title="$t('resources.caseStudies.header.title')" :content="$t('resources.caseStudies.header.content')"
    :btn="$t('resources.caseStudies.header.btn')" href="#" 
    :hint="$t('resources.caseStudies.header.hint')"
    :rightStyle="{'margin-top': '30px', 'margin-right': '90px'}" 
    :containerStyle="{'height': '590px'}" 
    :showFoot="false"
    :isHidenLinkHit="true"
    :inputPlaceholder="$t('resources.caseStudies.header.inputPlaceholder')"
    :pic="{
      src: '/images/resources/case-studies/Resources_Case_Studies_banner_graph_2x.png',
      w: '416px',
      h: '348px',

      msrc: '',
      mw: '',
      mh: '',
    }"
  />
  <HomeList1 
    :list="$tm('resources.caseStudies.logoIconList')"
    :isHidenTile="true"
    bgColor="#fff"
    :btText="$tm('resources.caseStudies.logoIconListBtText')"
  />
  <CommonList4 
    v-bind="$tm('resources.caseStudies.list')"
  />
  
  <Footer />
</template>