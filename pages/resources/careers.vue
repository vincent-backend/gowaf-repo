<template>
  <Header />
  <BreadCrumbs :title="$t('products.storage.breadCrumbs.parent')" :items="[
    { label: $t('products.storage.breadCrumbs.overview'), href: '#', current: true },
    { label: $t('products.storage.breadCrumbs.player'), href: '#', current: false },
    { label: $t('products.storage.breadCrumbs.mediaCage'), href: '#', current: false },
    { label: $t('products.storage.breadCrumbs.multiDRM'), href: '#', current: false },
    { label: $t('products.storage.breadCrumbs.transcribeAI'), href: '#', current: false },
    { label: $t('products.storage.breadCrumbs.apiDocs'), href: '#', current: false },
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
  <ResourcesWorkingPolyfill 
    :tab="$tm('resources.about.superCharge')"
  />
  <ProductsNeverHit :isShowTitle="true" :neverHit="$tm('resources.careers.neverHit')" />
  <CommonSuperCharge 
    v-bind="$tm('resources.careers.currentJob')" 
    isList="true"
  />

  <ProductsDRMCustomers 
    :drmCustomer="$tm('resources.careers.drmCustomer')" 
   />
  <Footer />
</template>