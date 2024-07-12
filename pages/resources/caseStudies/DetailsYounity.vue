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
    :pre-title="$t('resources.caseStudiesDetailsYounity.header.preTitle')"
    :logo="$t('resources.caseStudiesDetailsYounity.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsYounity.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsYounity.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsYounity.header.title')"
    :content="$t('resources.caseStudiesDetailsYounity.header.content')"
    :btn="$t('resources.caseStudiesDetailsYounity.header.btn')"
    href="#"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsYounity.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_banner_graph_2x.png',
      w: '466px',
      h: '342px',

      msrc: '/images/resources/case-studies-details-younity/Resources_Case_Studies_details_younity_banner_graph_2x.png',
      mw: '29.13rem',
      mh: '21.38rem'
    }"
  />
  <CommonNumbers
    is-row
    style="margin-top: 60px"
    :items="$tm('resources.caseStudiesDetailsYounity.numbers')"
    :numbersTitle="$t('resources.caseStudiesDetailsYounity.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template
      v-for="(item, index) in $tm(
        'resources.caseStudiesDetailsYounity.ad2Container.items'
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
  <CommonList4 v-bind="$tm('resources.caseStudiesDetailsYounity.list')" />
  <ProductsDRMCustomers
    class="Eskimi-products-customers"
    :drmCustomer="$tm('resources.caseStudiesDetailsYounity.drmCustomer')"
  />
  <Footer />
</template>
<style lang="less" scoped>
.Eskimi-products-customers {
  // margin-top: 12.5rem;
  // margin-bottom: 6.25rem;
}
</style>