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
    :hint="$t('resources.caseStudiesDetailsInnoGames.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsInnoGames.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-inno-games/Resources_Case_Studies_details_banner_graph_2x.png',
      w: '386px',
      h: '366px',

      msrc: '',
      mw: '',
      mh: ''
    }"
  />

  <CommonNumbers
    style="margin-top: 60px"
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
        :pic-width="item.width"
        :pic-height="item.height"
        :reverse="index % 2 === 0"
      />
    </template>
  </div>
  <CommonList4 v-bind="$tm('resources.caseStudiesDetailsInnoGames.list')" />
  <Footer />
</template>
