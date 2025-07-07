<template>
  <Header />
  <BreadCrumbs
    :title="$t('resources.breadCrumbs.parent')"
    :items="[
      {
        label: $t('resources.breadCrumbs.about'),
        href: '/resources/about',
        current: true
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
        current: false
      },
      {
        label: $t('resources.breadCrumbs.contact'),
        href: '/resources/contact',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('resources.about.header.preTitle')"
    :title="$t('resources.about.header.title')"
    :content="$t('resources.about.header.content')"
    page="resourcesAbout"
    href="#"
    :pic="{
      src: '/images/resources/about/resources_about_banner_graph@2x.png',
      w: '540px',
      h: '340px',

      msrc: '/mobile-images/solutions/security-cdn/Solutions_Security_cdn_banner_graph@2x.png',
      mw: '27.38rem',
      mh: '25rem'
    }"
  />

  <ProductsPerfectSolution
    :title="$t('resources.about.perfectSolution.title')"
    :titleWidth="'550px'"
    pic-position="bottom"
    :content="$t('resources.about.perfectSolution.content')"
    :items="i18ntext.items"
    :pic="{
      url: '/images/resources/about/resources_about_graph_1@2x.png',
      width: 340,
      height: 288,
      mheight: '18rem',
      mwidth: '21.25rem'
    }"
  />

  <ResourcesSuperCharge :tab="i18ntext.superCharge" />
  <CommonNumbers
    is-row
    is-two-row
    class="about-numbers"
    :items="i18ntext.numbers"
  />

  <CommonList2 v-bind="i18ntext.list2" />

  <PricingMap
    :content="{
      title: $t('resources.about.map.title'),
      subTitle: $t('resources.about.map.subTitle')
    }"
  />

  <CommonList3
    title1="Our Gowaf Milestones"
    title2=""
    :items="i18ntext.list"
    layoutType="full"
    class="about-CommonList"
  />
  <ResourcesGetInTouch class="Touch" />
  <Footer
    :type="{
      page: 'about'
    }"
  />
</template>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Resources'
});

const i18ntext = computed(() => {
  return {
    items: [
      {
        icon: '/images/resources/about/resources_about_ic_mission@2x.png',
        title: t('QeNT2zbblwiKP29mOCC_T'),
        content: t('zXurA6wUXJc4H9OB4caqg')
      },
      {
        icon: '/images/resources/about/resources_about_ic_vision@2x.png',
        title: t('OrZy5AGY7lusmuYCSTESD'),
        content: t('muDdQm-82gQmW7XnTYw7Q')
      },
      {
        icon: '/images/resources/about/resources_about_ic_value@2x.png',
        title: t('Z8Q4KQOTYaH6gbiwH6_pJ'),
        content: t('IkAC5PZzuunDZqSOlKS_G')
      }
    ],
    superCharge: {
      tab: t('solutions.websiteAcceleration.header.preTitle'),
      title: t('J1Wqgop6EuP8jmBWrZyIM'),
      content: t('jFXbLUVdmqNta6UUzUrN3'),
      icon: '/images/resources/about/resources_about_graph_2@2x.png',
      iconWidth: '334px',
      iconHeight: '312px',
      btn: t('Z5qnybQpsROXRBzJuDoCd'),
      href: '#',
      mIcon: '/mobile-images/resources/about/Resources_about_graph_2@2x.png',
      mIconWidth: '20.88rem',
      mIconHeight: '19.5rem'
    },
    numbers: [
      {
        label: '40.000+',
        content: t('ajOjrAzouliAAupFa4BKT')
      },
      {
        label: '1.000.000+',
        content: t('ailUpetGngG-Iu1SAPP1Z')
      },
      {
        label: t('mXfERHmd0uc26vAOFwL8o'),
        content: t('-U07cLKDBL8TKel8GLwW-')
      }
    ],
    list2: {
      title1: t('C3J04BNkPwHMBPz2UGt_B'),
      title2: t('VfOq3EQQsmDnSXQnGdTSD'),
      items: [
        {
          icon: '/images/resources/about/resources_about_card_ic_1@2x.png',
          title: t('Rr21xw7EXtF5cgVCViy5s')
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_2@2x.png',
          title: t('FFDN6H37XkEoYsAiMeCJk')
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_3@2x.png',
          title: t('Of4q5G6edu0X3vVWOtcrT')
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_4@2x.png',
          title: t('UMWqIFFjNZPS34wM4Rqy1')
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_5@2x.png',
          title: t('wc5AAkeqEjpC4X_F_RtPz')
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_6@2x.png',
          title: t('lnilk-DDa1Ciyd6-c291I')
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_7@2x.png',
          title: t('Xfg5ZjPl7YjUU9GJ8tFoB')
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_8@2x.png',
          title: t('3fM3a9Ilrm_uKJ4qn-ZDZ')
        },
        {
          icon: '/images/resources/about/resources_about_card_ic_9@2x.png',
          title: t('HzA2dbK98VTmj5EQGFTTa')
        }
      ]
    },
    list: [
      {
        title: t('VN5OPrjZinkM0mxUG3WiS'),
        subTitle: t('qILB_kCYp2_lvQvRw_HmW'),
        icon: '/images/resources/story/Resources_Story_card_bg_2x.png',
        content1: t('qG9i5qykhFlNvOfDcwcFH'),
        content2: t('KeFTdtLFL3kETY8pOz0J9')
      },
      {
        title: t('FZWhtR8W_u4R5YRyJtYg0'),
        subTitle: t('Fv2cvAws6VZEVpITrQ5vA'),
        content1: t('I-89XcO_7UHu8KmoaZ8EB'),
        content2: t('K2InW6rhtLPKeRa5SHR3n')
      },
      {
        title: t('hw6EmgePUAUvvdMFoS2yc'),
        subTitle: t('TOhNHlm5tIWit5OvZ-Ld6'),
        content1: t('Q0Gktvpt93TnMEJsRTKys'),
        content2: t('M_3EM4fm4eXpWUCY86jzy')
      },
      {
        title: t('pyzWDSNU5-pzNRT_GYUa7'),
        subTitle: t('ITvgTJgeWTCV0IAooc9gg'),
        content1: t('IQDdkbWOJCX-Ofm60-X1K'),
        content2: t('oTHizvnPwIx-Rvn0PeZYt')
      },
      {
        title: t('gBK3houTse0mdwSOSrAvJ'),
        subTitle: t('oA9cFHyN3cFk9QpCAIEOD'),
        content1: t('UnXQ8dM78U41E_-F2HB09'),
        content2: t('ZNd7TmONy7xKNnGzD1etg')
      }
    ]
  };
});
</script>

<style lang="less" scoped>
.footer-1-container {
  margin-top: 0 !important;
}
.about-numbers {
  margin-top: 120px;
}
@media (max-width: 767px) {
  .about-numbers {
    margin: 6.25rem 0;
  }
  .about-CommonList {
    margin-bottom: 6.3rem;
  }
  .Touch {
    margin-bottom: 6.25rem;
  }
}
</style>
