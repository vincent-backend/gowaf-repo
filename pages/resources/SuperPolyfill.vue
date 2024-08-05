<template>
  <Header />
  <CommonHeader1
    :pre-title="$t('products.cdn.overview.header.preTitle')"
    :title="$t('products.cdn.overview.header.title')"
    :content="$t('products.cdn.overview.header.content')"
    :btn="$t('products.cdn.overview.header.btn')"
    href="#"
    :hint="$t('products.cdn.overview.header.hint')"
    :pic="{
      src: '/images/products/cdn/overview/cdn_overview_banner_graph@2x.png',
      w: '381px',
      h: '371px',
      msrc: '/images/products/cdn/overview/cdn_overview_banner_graph@2x.png',
      mw: '23.81rem',
      mh: '23.19rem'
    }"
  />

  <SolutionsAccelerate
    :title="$t('resources.SuperPolyfill.accelerate.title')"
    :content="$t('resources.SuperPolyfill.accelerate.content')"
    :list1="i18ntext.list1"
    :list2="i18ntext.list2"
  />

  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="i18ntext.numbers"
  />

  <CommonSuperCharge v-bind="i18ntext.goFaster" />

  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
  />

  <CommonList1 v-bind="i18ntext.slist1" />

  <ResourcesLeftImgRightTransform />
  <ResourcesAuthor />
  <ProductsDRMCustomers
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
    list1: [
      '24/7 Customer Support',
      'Technically Smart',
      'Customer Management',
      'In-House Team'
    ],
    list2: [
      {
        icon: '/images/resources/SuperPolyfill/polyfill_noneed_icon1_nor@2x.png',
        iconActive:
          '/images/resources/SuperPolyfill/polyfill_noneed_icon1@2x.png',
        title: 'Scalable By Design',
        content:
          'Maximize your growth and expansion without care with a 150 Tbps+ network.'
      },
      {
        icon: '/images/resources/SuperPolyfill/polyfill_noneed_icon2_nor@2x.png',
        iconActive:
          '/images/resources/SuperPolyfill/polyfill_noneed_icon2_sel@2x.png',
        title: 'Tier 1 Global Network',
        content:
          'Connect directly to your users with over 3000 ISPs and 14 Tier 1 transit providers. Anywhere.'
      },
      {
        icon: '/images/resources/SuperPolyfill/polyfill_noneed_icon3_nor@2x.png',
        iconActive:
          '/images/resources/SuperPolyfill/polyfill_noneed_icon3_sel@2x.png',
        title: 'NVMe+ SSD Servers',
        content:
          'Optimize delivery and reduce latency with top of the line AMD and NVMe hardware.'
      },
      {
        icon: '/images/resources/SuperPolyfill/polyfill_noneed_icon4_nor@2x.png',
        iconActive:
          '/images/resources/SuperPolyfill/polyfill_noneed_icon4_sel@2x.png',
        title: 'Stay Protected',
        content:
          'Stay safe and focused with a built-in next-generation DoS protection that just works.'
      }
    ],
    numbers: [
      {
        label: '24/7',
        content: 'Availability'
      },
      {
        label: '5 minutes',
        content: 'Avg. Response Time'
      },
      {
        label: '3 hours',
        content: 'Avg. Solve Time'
      },
      {
        label: '100.000+',
        content: 'Tickets Solved'
      }
    ],
    goFaster: {
      title: 'True around-the-clock support',
      subTitle:
        'No more waiting around for support you need right now! We are here for you 24 hours a day, 7 days a week, 365 days a year!',
      tabs: [
        {
          tab: 'Technically Knowledgeable',
          title: 'Keeping you happy is our priority',
          content:
            "Your problems are our problems. We don't only look at answering your questions; we make sure to solve the problem. Super Bunnies are always doing their best to make your experience as pleasant as possible. Focus on what you do best without being held back by any issues!",
          icon: '/images/resources/SuperPolyfill/super_polyfill_truearound_img1@2x.png',
          iconWidth: '360px',
          iconHeight: '360px',
          mIcon:
            '/images/resources/SuperPolyfill/super_polyfill_truearound_img1@2x.png',
          mIconWidth: '22.5rem',
          mIconHeight: '22.5rem'
        },
        {
          tab: 'Fastest in the Business',
          title: 'Get your issue fixed with the speed of light',
          content:
            'At bunny.net, we live and breathe performance. This extends to the Super Bunny team as well. Our ticket support averages unparalleled sub 5 minutes first response and 3 hours solve time. We are ready and waiting behind the keyboard to help you solve any and all problems!',
          icon: '/images/resources/SuperPolyfill/super_polyfill_truearound_img2.png',
          iconWidth: '360px',
          iconHeight: '360px',
          mIcon:
            '/images/resources/SuperPolyfill/super_polyfill_truearound_img2.png',
          mIconWidth: '22.5rem',
          mIconHeight: '22.5rem'
        },
        {
          tab: 'Impressively Efficient',
          title: 'We aren’t called Super Polyfill for nothing',
          content:
            'It might seem unbelievable, but at bunny.net, our Super Bunnies are ready and waiting to help you 24/7. So no need to worry about much tapping of your fingers and waiting for your issue to be fixed. We’re working around the clock to ensure your experience is as pleasant as possible!',
          icon: '/images/resources/SuperPolyfill/super_polyfill_truearound_img3.png',
          iconWidth: '360px',
          iconHeight: '360px',
          mIcon:
            '/images/resources/SuperPolyfill/super_polyfill_truearound_img3.png',
          mIconWidth: '22.5rem',
          mIconHeight: '22.5rem'
        },
        {
          tab: '99% Customer Satisfaction',
          title: 'Keeping you happy is our priority',
          content:
            "Your problems are our problems. We don't only look at answering your questions; we make sure to solve the problem. Super Bunnies are always doing their best to make your experience as pleasant as possible. Focus on what you do best without being held back by any issues!",
          icon: '/images/resources/SuperPolyfill/super_polyfill_truearound_img4.png',
          iconWidth: '360px',
          iconHeight: '360px',
          mIcon:
            '/images/resources/SuperPolyfill/super_polyfill_truearound_img4.png',
          mIconWidth: '22.5rem',
          mIconHeight: '22.5rem'
        }
      ]
    },
    slist1: {
      title1: 'Gowaf Knowledge Center',
      title2:
        'Just looking for some quick information? Check out our Frequently Asked Questions.',
      items: [
        {
          icon: '/images/resources/SuperPolyfill/polyfill_knowledge_img1@2x.png',
          title: 'Support HUB',
          content:
            'Guides, Troubleshooting, and Support Requests to help you get started with bunny.net.'
        },
        {
          icon: '/images/resources/SuperPolyfill/polyfill_knowledge_img2@2x.png',
          title: 'Developer HUB',
          content:
            'Collection of information and documentation to make configuration as easy as possible.'
        },
        {
          icon: '/images/resources/SuperPolyfill/polyfill_knowledge_img3@2x.png',
          title: 'API Reference',
          content:
            'Learn about everything you can do with the bunny.net account and all other Bunny products.'
        }
      ]
    },
    drmCustomer: {
      title: 'Join over 40.000+ happy customers',
      contentPre: "We're rated ",
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: ' Excellent 4.8',
      contentP: 'out of 5 on',
      contentLink: 'Trustpilot',
      contentLast: ' - Based on 600+ reviews',
      isHiddenSubTitle: false,
      faceImg: {
        img: '/images/products/storage/latinamerica/Network_ddos_evaluate_character_2x.png',
        top: '-3px',
        right: '135px',
        width: '438px',
        height: '300px',
        mtop: '11.81rem',
        mright: '0',
        mwidth: '27.38rem',
        mheight: '18.75rem'
      },
      list: {
        title: 'Pedro Dobrescu',
        subTitle: 'ShortPixel',
        content:
          '"It is a pleasure to work with the bunny.net team! Even before we switched to their excellent CDN network, they added some features we needed for the transition. And after that, they were so quick to add new features or solve any problem we had! A true long-term partner that we really appreciate!"'
      },
      items: [
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_1_2x.png'
        },
        {
          num: 4.4,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_2_2x.png'
        },
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_3_2x.png'
        },
        {
          num: 4.8,
          icon: '/images/products/stream/multi-drm/Network_Overview_mark_logo_4_2x.png'
        }
      ]
    }
  };
});
</script>

<style lang="less" scoped>
.map-container {
  margin-top: 120px;

  > .title {
    font-weight: 500;
    font-size: 30px;

    line-height: 42px;
    text-align: center;
  }

  > .sub-title {
    margin: 20px auto 0;

    width: 912px;

    font-size: 16px;
    color: #4e4e4e;

    text-align: center;
  }

  .map-container {
    margin-top: 40px;
  }
}
</style>
