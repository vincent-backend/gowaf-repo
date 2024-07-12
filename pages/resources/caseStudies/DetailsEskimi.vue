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
    :pre-title="$t('resources.caseStudiesDetailsEskimi.header.preTitle')"
    :logo="$t('resources.caseStudiesDetailsEskimi.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsEskimi.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsEskimi.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsEskimi.header.title')"
    :content="$t('resources.caseStudiesDetailsEskimi.header.content')"
    :btn="$t('resources.caseStudiesDetailsEskimi.header.btn')"
    href="#"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsEskimi.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_banner_graph_2x.png',
      w: '406px',
      h: '368px',

      msrc: '/images/resources/case-studies-details-eskimi/Resources_Case_Studies_details_Eskimi_banner_graph_2x.png',
      mw: '25.38rem',
      mh: '23rem'
    }"
  />
  <CommonNumbers
    style="margin-top: 60px"
    is-row
    :items="$tm('resources.caseStudiesDetailsEskimi.numbers')"
    :numbersTitle="$t('resources.caseStudiesDetailsEskimi.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template
      v-for="(item, index) in $tm(
        'resources.caseStudiesDetailsEskimi.ad2Container.items'
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
        :m-pic="item.pic"
        :pic-width="item.width"
        :pic-height="item.height"
        m-pic-width="24.75rem"
        m-pic-height="20.25rem"
        :reverse="isMobile ? true : index % 2 === 0"
      />
    </template>
  </div>
  <CommonList4 v-bind="$tm('resources.caseStudiesDetailsEskimi.list')" />
  <ProductsDRMCustomers
    class="Eskimi-products-customers"
    :drmCustomer="$tm('resources.caseStudiesDetailsEskimi.drmCustomer')"
  />
  <Footer />
</template>
<style lang="less" scoped>
.Eskimi-products-customers {
  // margin-top: 12.5rem;
}
</style>
