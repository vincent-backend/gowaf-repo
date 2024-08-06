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
  <ProductsCalculate1 :items="i18ntext.list" :subs="i18ntext.subs" />

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
  <ProductsDRMCustomers :drmCustomer="i18ntext.drmCustomer" />
  <Footer />
</template>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Products'
});

const i18ntext = computed(() => {
  return {
    alwaysSafe: {
      title: t('4FvdO2DrY5xsvB4C_82RT'),
      subTitle: t('FjoLLyFdQNz2Vzp7aJ5QZ'),
      rows: [
        [
          {
            icon: '/images/products/stream/overview/stream_overview_ic_upload@2x.png',
            title: t('Kopqg2Wm-g2B0j4EW4W8q'),
            content: t('QHM6bY7BT3LtOxsShEn63')
          },
          {
            icon: '/images/products/stream/overview/stream_overview_ic_transcode@2x.png',
            title: t(
              'products.stream.multiDRM.endlessSecurity.content.transcode'
            ),
            content: t('CWNs8FXzspBLK3h-0wzUO')
          }
        ],
        [
          {
            icon: '/images/products/stream/overview/stream_overview_ic_replicate@2x.png',
            title: t('IdsX9CfDQRFmPJBPJHr-K'),
            content: t('tDP3aX-HKxarZUQcDCvV2')
          },
          {
            icon: '/images/products/stream/overview/stream_overview_ic_supercharge@2x.png',
            title: t('8Wie1JCZ6Xc-cls3pHHDs'),
            content: t('Kyz5VAcBuW5f3zTRSO4EV')
          }
        ]
      ]
    },
    numbers: [
      {
        label: t('PEUMLcb-JhVhbuvaFkWuP'),
        content: t('x3EHuylv_KnlDWqsBwbDK')
      },
      {
        label: '650.000+',
        content: t('home.requestsPerSecond')
      },
      {
        label: '123',
        content: t('BiENYYMJiCVxIk4uYqDTW')
      },
      {
        label: '40.000+',
        content: t('DqXjS0SA1aWVzOjBF1X1f')
      }
    ],
    doNotLeave: {
      title: t('products.cdn.overview.productsSuperCharge.title'),
      subTitle: t('home.superCharge.subTitle'),
      tabs: [
        {
          tab: t('-smtUc5sAr2VV7VxwVLqk'),
          title: t('kkr1ENX9FjJ8XI6ZVDvDH'),
          content: t('b5-T98I8UvCwHTRmG1239'),
          icon: '/images/products/stream/overview/stream_overview_supercharge_img1@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/stream/overview/stream_overview_supercharge_img1@2x.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        },
        {
          tab: t('YY8esQlQSldY_S9yZDZD1'),
          title: t('JEhuJ42VArPtocEcEAO3l'),
          content: t('eG_WrM2CKsjUbpIz5COSI'),
          icon: '/images/products/stream/overview/stream_overview_supercharge_img2@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/stream/overview/stream_overview_supercharge_img2@2x.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        },
        {
          tab: t('-WWa2PuPBJpiJlN-cAFax'),
          title: t('pxnX3f4FLuYpCpsPgS5up'),
          content: t('o5e05T9j9npme5dHIUgBK'),
          icon: '/images/products/stream/overview/stream_overview_supercharge_img3@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/stream/overview/stream_overview_supercharge_img3@2x.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        },
        {
          tab: t('QxLw1yVOUKWJvhvG3ATxB'),
          title: t('Gn0junWDYPLC8oSlFNU3G'),
          content: t('UkFrhkJxg-6gH4IspjqdW'),
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
        title: t('sbOiygI3foMFl8zGTpMBq'),
        num: '300GB',
        percent: 45
      },
      {
        title: t('O0LtcVv3bua7bkwommOFs'),
        num: '50GB',
        percent: 15
      }
    ],
    subs: [
      {
        title: t('pjO0SL6mKVQoWvd1QsWNv'),
        value: '$3.5/month'
      },
      {
        title: t('1I8BKYX1kjYtmXOn_E9xF'),
        value: '$1.25/month'
      }
    ],
    adlist: [
      t('UcCNU6shcIavUIf-KOfOU'),
      t('4JgOzjnveEui_aVlllRNU'),
      t('_7OS3j3Nxt6JiJqtzlTyV'),
      t('KZVwy7VEOf98PBD9W77xT')
    ],
    drmCustomer: {
      title: t('g_tXejmNur2f2uDrDvSd-'),
      contentPre: t('home.header.bottom.weAreRated'),
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: t('home.join2.subTitle3'),
      contentP: t('home.join2.subTitle4'),
      contentLink: t('home.join2.subTitle5'),
      contentLast: t('home.join2.subTitle6'),
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
        title: t('1BywE0gMMmHqYbpuYRGyW'),
        subTitle: t('10KCWD0ValnrFobaa19fG'),
        content: t('hVZvyVFQZA1hXV83roW7e')
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
