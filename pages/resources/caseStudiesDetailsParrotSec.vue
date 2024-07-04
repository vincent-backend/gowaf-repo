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
    :pre-title="$t('resources.caseStudiesDetailsParrotSec.header.preTitle')"
    :logo="$t('resources.caseStudiesDetailsParrotSec.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsParrotSec.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsParrotSec.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsParrotSec.header.title')"
    :content="$t('resources.caseStudiesDetailsParrotSec.header.content')"
    :btn="$t('resources.caseStudiesDetailsParrotSec.header.btn')"
    href="#"
    :hint="$t('resources.caseStudiesDetailsParrotSec.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsParrotSec.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-parrotsec/Resources_Case_Studies_details_ParrotSec_banner_graph_2x.png',
      w: '398px',
      h: '368px',

      msrc: '',
      mw: '',
      mh: ''
    }"
  />
  <CommonNumbers
    style="margin-top: 60px"
    :items="$tm('resources.caseStudiesDetailsParrotSec.numbers')"
    :numbersTitle="$t('resources.caseStudiesDetailsParrotSec.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template
      v-for="(item, index) in $tm(
        'resources.caseStudiesDetailsParrotSec.ad2Container.items'
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
  <CommonList4 v-bind="$tm('resources.caseStudiesDetailsParrotSec.list')" />
  <ProductsDRMCustomers
    :drmCustomer="$tm('resources.caseStudiesDetailsParrotSec.drmCustomer')"
  />
  <Footer />
</template>
