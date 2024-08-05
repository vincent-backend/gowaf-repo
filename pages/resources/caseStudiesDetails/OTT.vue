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
    :logo="$t('resources.caseStudiesDetailsOTT.header.logo')"
    :logoWidth="$t('resources.caseStudiesDetailsOTT.header.logoWidth')"
    :logoHeight="$t('resources.caseStudiesDetailsOTT.header.logoHeight')"
    :title="$t('resources.caseStudiesDetailsOTT.header.title')"
    :content="$t('resources.caseStudiesDetailsOTT.header.content')"
    :btn="$t('resources.caseStudiesDetailsOTT.header.btn')"
    href="#"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :btn2="$t('resources.caseStudiesDetailsOTT.header.btn2')"
    :btn2BorderColor="'#000'"
    :pic="{
      src: '/images/resources/case-studies-details-ott/Resources_Case_Studies_details_OTT_banner_graph_2x.png',
      w: '417px',
      h: '397px',

      msrc: '/images/resources/case-studies-details-ott/Resources_Case_Studies_details_OTT_banner_graph_2x.png',
      mw: '26.06rem',
      mh: '24.81rem'
    }"
  />
  <CommonNumbers
    style="margin-top: 60px"
    is-row
    :items="i18ntext.numbers"
    :numbersTitle="$t('resources.caseStudiesDetailsOTT.numbersTitle')"
  />
  <div class="ad2-container" style="margin-bottom: 90px">
    <template
      v-for="(item, index) in i18ntext.items"
      :key="index"
    >
      <SolutionsAd2
        :title="item.title"
        :content="item?.content"
        :content2="item?.content2"
        :content3="item?.content3"
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
  <CommonList4 v-bind="i18ntext.list" />
  <ProductsDRMCustomers
    class="Eskimi-products-customers"
    :drmCustomer="i18ntext.drmCustomer"
  />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Resources'
});
const i18ntext = computed(() => {
  return {
    numbers: [
      {
        label: 'Improved',
        label2: ' delivery',
        content:
          'improving the storage, stability and \nfetching of assets from the origin'
      },
      {
        label: 'Easy',
        label2: 'setup',
        content: 'an intuitive dashboard and \nstraightforward documentation'
      },
      {
        label: 'Happier',
        label2: 'customers',
        content:
          'eliminated buffering, increased download \nspeeds, and improved reliability'
      }
    ],
    items: [
      {
        pic: '/images/resources/case-studies-details-ott/Resources_Case_Studies_details_OTT_graph_1_2x.png',
        title: 'About OTT Solutions',
        content:
          'OTT Solutions builds turnkey Live TV and VOD streaming solutions for telecommunication and broadcasting service providers worldwide. They make streaming services possible for Vodafone, Telefonica, Telekom Srbija, Eurosport, beIN SPORTS, euronews, and Bloomberg, to name a few.',
        content2:
          'In addition to providing an easy-to-use streaming platform with a clean user interface, they help service providers protect their content with robust security features. OTT Solutions promises and delivers a reliable and stable network that service providers trust to stream content to millions of end users.',
        width: '420px',
        height: '314px',
        mwidth: '26.25rem',
        mheight: '19.63rem'
      },
      {
        pic: '/images/resources/case-studies-details-ott/Resources_Case_Studies_details_OTT_graph_2_2x.png',
        title: 'The Challenges',
        content:
          'Although OTT Solutions had a trustworthy, reliable network, they needed a strong architecture to keep it that way. They needed a CDN to boost network reliability and bolster their network backbone. OTT Solutions used other CDNs, but these other networks lagged behind their standards. Thousands of customers in the Balkans couldn’t even watch sports during peak hours without buffering caused by network bottlenecks.',
        content2:
          'Even a few minutes of downtime rippled to customers’ customers, so OTT Solutions needed a stable network that wouldn’t go down - not for even a minute. Their other CDN providers weren’t supplying enough stability. OTT Solutions needed someone to lighten the load - so they came to Gowaf.',
        width: '372px',
        height: '302px',
        mwidth: '23.25rem',
        mheight: '18.88rem'
      },
      {
        pic: '/images/resources/case-studies-details-ott/Resources_Case_Studies_details_OTT_graph_3_2x.png',
        title: 'The Solution',
        content:
          'The Gowaf team didn’t disappoint. We set up a network that provided a fast, reliable connection with a peer-to-peer backup network that eliminated buffering during peak hours. OTT Solutions also noticed that Gowaf was faster than their other CDNs in some regions. Implementing Gowaf CDN was as quick as a Gowaf hop, thanks to our support library.',
        content2:
          'We gave OTT Solutions 24/7 access to our Super Gowaf support team, but they were pleased to say they barely needed them. They felt empowered to resolve most issues themselves, with the Super Gowaf on standby for backup.',
        content3: '',
        width: '430px',
        height: '348px',
        mwidth: '26.88rem',
        mheight: '21.75rem'
      },
      {
        pic: '/images/resources/case-studies-details-ott/Resources_Case_Studies_details_OTT_graph_4_2x.png',
        title: 'The Results',
        content:
          'We improved availability by providing additional points of presence, with peer-to-peer backup to prevent outages. Our supercharged speeds kept customers right in the action. Plus, we impressed them with our fantastic support and customer service.',
        content2:
          'With fewer network bottlenecks and improved reliability, OTT Solutions can keep their networks hopping.',
        width: '394px',
        height: '258px',
        mwidth: '24.63rem',
        mheight: '16.13rem'
      }
    ],
    list: {
      title: '',
      subTitle: '',
      items: [
        {
          title: 'HOW YOUNITY STREAMED flow! summit TO 200,000 VIEWERS',
          subTitle: '',
          icon: '/images/resources/case-studies-details-ott/Resources_CaseStudies_pic_3_2x.png',
          icon2:
            '/images/resources/case-studies-details-ott/Resources_CaseStudies_card_logo_yo_2x.png',
          content1: 'Read the case study',
          content2: ''
        },
        {
          title: 'HOW VALNET SCALED 250% WHILE SAVING',
          subTitle: '',
          icon: '/images/resources/case-studies-details-ott/Resources_CaseStudies_pic_7_2x.png',
          icon2:
            '/images/resources/case-studies-details-ott/Resources_CaseStudies_card_logo_va_2x.png',
          content1: 'Read the case study',
          content2: ''
        }
      ]
    },
    drmCustomer: {
      title: '',
      contentPre: '',
      contentImg: '',
      contentMid: '',
      contentP: '',
      contentLink: '',
      contentLast: '',
      isHiddenSubTitle: true,
      faceImg: {
        img: '/images/resources/case-studies-details-ott/Network_Overview_evaluate_character_2x.png',
        top: '-70px',
        right: '135px',
        width: '438px',
        height: '300px',
        mtop: '0',
        mright: '0',
        mwidth: '27.38rem',
        mheight: '18.75rem'
      },
      list: {
        title: 'Sasa Zurkic',
        subTitle: 'CEO',
        content:
          '"Gowaf adds a line of defense to our other CDN providers.I’m happy with the service - everything works."'
      },
    }
  };
});
</script>
<style lang="less" scoped>
.Eskimi-products-customers {
  // margin-top: 12.5rem;
  // margin-bottom: 6.25rem;
}
</style>
