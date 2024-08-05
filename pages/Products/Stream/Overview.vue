<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.stream.breadCrumbs.parent')"
    :items="StreamMenu($t, $route.path)"
  />

  <CommonHeader1
    :pre-title="$t('products.stream.overview.header.preTitle')"
    :title="$t('products.stream.overview.header.title')"
    :content="$t('products.stream.overview.header.content')"
    :btn="$t('products.stream.overview.header.btn')"
    href="#"
    :hint="$t('products.stream.overview.header.hint')"
    :pic="{
      src: '/images/products/stream/overview/stream_overview_banner_graph@2x.png',
      w: '456px',
      h: '278px',
      msrc: '/images/products/stream/overview/stream_overview_banner_graph@2x.png',
      mw: '28.5rem',
      mh: '17.38rem'
    }"
  />

  <NetworkAlwaysSafe v-bind="i18ntext.alwaysSafe" />

  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 40px"
    :items="i18ntext.numbers"
  />

  <CommonSuperCharge v-bind="i18ntext.doNotLeave" />

  <ProductsSimplifiedPricing />
  <ProductsCalculate1
    :items="i18ntext.list"
    :subs="i18ntext.subs"
  />

  <ProductsPackedFeatures />

  <LgOnly>
    <SolutionsAd2
      :title="$t('products.stream.overview.ad2.title')"
      :content="$t('products.stream.overview.ad2.content')"
      :list="i18ntext.adlist"
      :btn="$t('products.stream.overview.ad2.btn')"
      href="#"
      pic="/images/products/stream/overview/stream_overview_upload_img@2x.png"
      pic-width="527px"
      pic-height="408px"
      reverse
    />
  </LgOnly>

  <ProductsHowStreamWorks />
  <ProductsDRMCustomers
    :drmCustomer="i18ntext.drmCustomer"
  />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Products'
});

const i18ntext = computed(() => {
  return {
    alwaysSafe: {
      title: 'Simplified workflow. Complete control.',
      subTitle:
        'Reduce the complexity of video delivery without sacrificing features or security.',
      rows: [
        [
          {
            icon: '/images/products/stream/overview/stream_overview_ic_upload@2x.png',
            title: 'Upload',
            content: 'Upload your files using our API or the web video manager.'
          },
          {
            icon: '/images/products/stream/overview/stream_overview_ic_transcode@2x.png',
            title: 'Transcode',
            content: 'The videos are transcoded into multiple resolutions.'
          }
        ],
        [
          {
            icon: '/images/products/stream/overview/stream_overview_ic_replicate@2x.png',
            title: 'Replicate',
            content: 'Automatically replicate your files all around the world.'
          },
          {
            icon: '/images/products/stream/overview/stream_overview_ic_supercharge@2x.png',
            title: 'Supercharge',
            content: 'Supercharge your files with our global load balancer.'
          }
        ]
      ]
    },
    numbers: [
      {
        label: '150 Tbps+',
        content: 'Network Backbone'
      },
      {
        label: '650.000+',
        content: 'Requests Per Second'
      },
      {
        label: '123',
        content: 'Global PoPs'
      },
      {
        label: '40.000+',
        content: 'Satisfied Customers'
      }
    ],
    doNotLeave: {
      title: 'Supercharge your internet presence',
      subTitle: 'Next-Generation Solutions. Next-Level Performance.',
      tabs: [
        {
          tab: 'Built for performance',
          title: 'Amazing performance and unparalleled reliability',
          content:
            'Deliver unparalleled performance and reliability to your users by powering your video with a state-of-the-art CDN system. With a network backbone of 150 Tbps+ and 123+ global PoPs, Bunny Streams ensures that your customers get an excellent experience for every request. Every time.',
          icon: '/images/products/stream/overview/stream_overview_supercharge_img1@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/stream/overview/stream_overview_supercharge_img1@2x.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        },
        {
          tab: 'Globallv scalable',
          title: 'Deliver true planet-scale scalability',
          content:
            'Stop being bogged down by slow, centralized storage that only allows good performance in a single region. Deliver true global scalability with Bunny Stream. Powered by our worldwide replicated storage, you can deliver an exceptional experience no matter where your users are.',
          icon: '/images/products/stream/overview/stream_overview_supercharge_img2@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/stream/overview/stream_overview_supercharge_img2@2x.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        },
        {
          tab: 'Content Protection',
          title: 'Ideal protection. For any Polyfill.',
          content:
            'Stop losing revenue to users downloading and sharing your content. Push your protection strategy to the next level with an enterprise-grade multi-DRM system. Prevent downloads, screen recording, or even screenshots. Reduce costs and development time with a simplified workflow.',
          icon: '/images/products/stream/overview/stream_overview_supercharge_img3@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/stream/overview/stream_overview_supercharge_img3@2x.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        },
        {
          tab: 'Customizable Media Player',
          title: 'Tailor your player for your brand',
          content:
            'Push your branding to the next level with a player that is truly your own. Bunny Stream allows you to easily customize the controls, colors, language, or use your CSS to make your player perfectly fit your brand. You can even use your own player entirely with the provided HLS files.',
          icon: '/images/products/stream/overview/stream_overview_supercharge_img4@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/stream/overview/stream_overview_supercharge_img4@2x.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        }
      ]
    },
    list: [
      {
        title: 'Upload video size',
        num: '300GB',
        percent: 45
      },
      {
        title: 'Monthly Traffic',
        num: '50GB',
        percent: 15
      }
    ],
    subs: [
      {
        title: 'Standard Tier',
        value: '$3.5/month'
      },
      {
        title: 'Volume Tier',
        value: '$1.25/month'
      }
    ],
    adlist: [
      'TUS Resumable Uploads',
      'Get started in seconds',
      'API First Approach',
      'Complete Control'
    ],
    drmCustomer: {
      title: 'Trusted by 40.000+ global customers',
      contentPre: "We're rated ",
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: ' Excellent 4.8',
      contentP: 'out of 5 on',
      contentLink: 'Trustpilot',
      contentLast: ' - Based on 600+ reviews',
      faceImg: {
        img: '/images/products/stream/multi-drm/Network_Overview_evaluate_character_2x.png',
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
        title: 'Matthias Mauch',
        subTitle: 'Younity',
        content:
          '"We had a flow! summit without a single complaint. I think, overall, bunny.net is just a very complete solution. Handling videos is so easy with Bunny - you don\'t need a lot of training.It\'s very streamlined."'
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
