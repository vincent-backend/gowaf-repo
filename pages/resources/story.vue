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
  <CommonHeader1 :pre-title="$t('resources.story.header.preTitle')"
    :title="$t('resources.story.header.title')" :content="$t('resources.story.header.content')"
    btn="" href="#" 
    hint=""
    :rightStyle="{'margin-top': '30px', 'margin-right': '90px'}" 
    :containerStyle="{'height': '590px'}" 
    :showFoot="false"
    :pic="{
      src: '/images/resources/story/Resources_Story_banner_graph_2x.png',
      w: '524px',
      h: '434px',

      msrc: '',
      mw: '',
      mh: '',
    }"
  />
  <CommonList3 
    title1="" 
    title2=""
    :items="$tm('resources.story.list.list')" 
  /> 
  
  <ProductsDRMCustomers 
    :drmCustomer="$tm('resources.story.drmCustomer')" 
   />
  <ProductsSupportPlan 
    :bigtitle="$t('resources.story.listPolyfill.title')"
    :subTitle="$t('resources.story.listPolyfill.subTitle')"
    :title="$t('resources.story.listPolyfill.items.title')" 
    :itemsContent="$t('resources.story.listPolyfill.items.content')" 
    :itemsContent1="$t('resources.story.listPolyfill.items.content1')" 
    :icon="$t('resources.story.listPolyfill.icon')"
    isHidenList="true"
  />
  <Footer />
</template>