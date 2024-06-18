<template>
  <Header />
  <BreadCrumbs :title="$t('resources.breadCrumbs.parent')" :items="[
    { label: $t('resources.breadCrumbs.about'), href: '/resources/about', current: false },
    { label: $t('resources.breadCrumbs.story'), href: '/resources/story', current: false },
    { label: $t('resources.breadCrumbs.careers'), href: '/resources/careers', current: true },
    { label: $t('resources.breadCrumbs.caseStudies'), href: '/resources/caseStudies', current: false },
    { label: $t('resources.breadCrumbs.contact'), href: '/resources/contact', current: false },
  ]" />
  <CommonHeader1 :pre-title="$t('resources.careers.header.preTitle')"
    :title="$t('resources.careers.header.title')" :content="$t('resources.careers.header.content')"
    :btn="$t('resources.careers.header.title')" href="#" 
    hint=""
    :rightStyle="{'margin-top': '30px', 'margin-right': '90px'}" 
    :containerStyle="{'height': '590px'}" 
    :showFoot="false"
    :pic="{
      src: '/images/resources/careers/Resources_Careers_banner_graph_2x.png',
      w: '424px',
      h: '346px',

      msrc: '',
      mw: '',
      mh: '',
    }"
  />
  <CommonList2 v-bind="$tm('resources.careers.list1')" />
  <ResourcesWorkingPolyfill />
  <ProductsNeverHit :isShowTitle="true" :neverHit="$tm('resources.careers.neverHit')" />
  <CommonSuperCharge 
    v-bind="$tm('resources.careers.currentJob')" 
    :isList="true"
  />

  <ProductsDRMCustomers 
    :drmCustomer="$tm('resources.careers.drmCustomer')" 
   />
  <Footer />
</template>