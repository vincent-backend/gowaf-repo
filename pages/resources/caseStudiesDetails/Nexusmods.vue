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
    :items="$tm('resources.caseStudiesDetailsNexusmods.numbers')"
    :numbersTitle="$t('resources.caseStudiesDetailsNexusmods.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template
      v-for="(item, index) in $tm(
        'resources.caseStudiesDetailsNexusmods.ad2Container.items'
      )"
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
  <CommonList4 v-bind="$tm('resources.caseStudiesDetailsNexusmods.list')" />
  <ProductsDRMCustomers
    :drmCustomer="$tm('resources.caseStudiesDetailsNexusmods.drmCustomer')"
  />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Resources'
});
</script>
