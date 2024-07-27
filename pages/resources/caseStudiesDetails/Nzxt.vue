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
        href: '/resources/caseStudies',
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
    :pre-title="$t('resources.caseStudiesDetailsNzxt.header.preTitle')"
    :logo="$t('resources.caseStudiesDetailsNzxt.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsNzxt.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsNzxt.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsNzxt.header.title')"
    :content="$t('resources.caseStudiesDetailsNzxt.header.content')"
    :btn="$t('resources.caseStudiesDetailsNzxt.header.btn')"
    href="#"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsNzxt.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-nzxt/Resources_Case_Studies_details_nzxt_banner_graph_2x.png',
      w: '446px',
      h: '366px',

      msrc: '/images/resources/case-studies-details-nzxt/Resources_Case_Studies_details_nzxt_banner_graph_2x.png',
      mw: '24.63rem',
      mh: '20.63rem'
    }"
  />
  <CommonNumbers
    style="margin-top: 60px"
    is-row
    :items="$tm('resources.caseStudiesDetailsNzxt.numbers')"
    :numbersTitle="$t('resources.caseStudiesDetailsNzxt.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template
      v-for="(item, index) in $tm(
        'resources.caseStudiesDetailsNzxt.ad2Container.items'
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
        :m-pic="item.pic"
        :m-pic-width="item.mwidth"
        :m-pic-height="item.mheight"
        :reverse="isMobile ? true : index % 2 === 0"
      />
    </template>
  </div>
  <CommonList4 v-bind="$tm('resources.caseStudiesDetailsNzxt.list')" />
  <ProductsDRMCustomers
    class="Eskimi-products-customers"
    :drmCustomer="$tm('resources.caseStudiesDetailsNzxt.drmCustomer')"
  />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Resources'
});
</script>
<style lang="less" scoped>
.Eskimi-products-customers {
  // margin-top: 12.5rem;
  // margin-bottom: 6.25rem;
}
</style>
