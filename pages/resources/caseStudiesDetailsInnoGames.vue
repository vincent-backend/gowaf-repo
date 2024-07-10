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
    :pre-title="$t('resources.caseStudiesDetailsInnoGames.header.preTitle')"
    :logo="$t('resources.caseStudiesDetailsInnoGames.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsInnoGames.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsInnoGames.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsInnoGames.header.title')"
    :content="$t('resources.caseStudiesDetailsInnoGames.header.content')"
    :btn="$t('resources.caseStudiesDetailsInnoGames.header.btn')"
    href="#"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsInnoGames.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_banner_graph_2x.png',
      w: '386px',
      h: '366px',

      msrc: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_banner_graph_2x.png',
      mw: '24.13rem',
      mh: '22.88rem'
    }"
  />

  <CommonNumbers
    style="margin-top: 60px"
    is-row
    :items="$tm('resources.caseStudiesDetailsInnoGames.numbers')"
    :numbersTitle="$t('resources.caseStudiesDetailsInnoGames.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template
      v-for="(item, index) in $tm(
        'resources.caseStudiesDetailsInnoGames.ad2Container.items'
      )"
      :key="index"
    >
      <SolutionsAd2
        :title="item.title"
        :content="item.content"
        :content2="item.content2"
        :pic="item.pic"
        :m-pic="item.pic"
        :pic-width="item.width"
        :pic-height="item.height"
        :m-pic-width="item.mwidth"
        :m-pic-height="item.mheight"
        :reverse="isMobile ? true : index % 2 === 0"
      />
    </template>
  </div>
  <CommonList4 v-bind="$tm('resources.caseStudiesDetailsInnoGames.list')" />
  <ProductsDRMCustomers
    class="Eskimi-products-customers"
    :drmCustomer="$tm('resources.caseStudiesDetailsInnoGames.drmCustomer')"
  />
  <Footer />
</template>
<style lang="less" scoped>
// .Eskimi-products-customers {
//   margin-top: 12.5rem;
//   margin-bottom: 6.25rem;
// }
</style>
