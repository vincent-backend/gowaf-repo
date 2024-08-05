<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />

  <CommonHeader1
    :pre-title="$t('products.storage.AfriceMiddleEast.header.preTitle')"
    :title="$t('products.storage.AfriceMiddleEast.header.title')"
    :content="$t('products.storage.AfriceMiddleEast.header.content')"
    :btn="$t('products.storage.AfriceMiddleEast.header.btn')"
    href="#"
    :hint="$t('products.storage.AfriceMiddleEast.header.hint')"
    :rightStyle="{ 'margin-top': '30px', 'margin-right': '90px' }"
    :containerStyle="{ height: '590px' }"
    :showFoot="false"
    :pic="{
      src: '/images/products/storage/AfriceMiddleEast/Network_Overview_nation_Europe_2x.png',
      w: '524px',
      h: '434px',

      msrc: '/images/products/storage/AfriceMiddleEast/Network_Overview_nation_Europe_2x.png',
      mw: '32.75rem',
      mh: '27.13rem'
    }"
  />
  <CommonNumbers
    style="margin-top: 80px"
    :items="i18ntext.numbers"
  />
  <ProductsExceptionalPerformance
    :title="
      $t('products.storage.AfriceMiddleEast.exceptionalPerformance.title')
    "
    :content="
      $t('products.storage.AfriceMiddleEast.exceptionalPerformance.content')
    "
    :markerColor="
      $t('products.storage.AfriceMiddleEast.exceptionalPerformance.markerColor')
    "
    :img="$t('products.storage.AfriceMiddleEast.exceptionalPerformance.img')"
  />
  <LgOnly>
    <ProductsNeverHit
      :isShowTitle="false"
      :neverHit="i18ntext.neverHit"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="false"
      :neverHit="i18ntext.neverHit"
    />
  </XsOnly>
  <HomeList1 />
  <SolutionsAd1
    :title="$t('products.storage.AfriceMiddleEast.HopList.title')"
    :sub-title="$t('products.storage.AfriceMiddleEast.HopList.subTitle')"
    :btn="$t('products.storage.AfriceMiddleEast.HopList.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />
  <CommonList1
    :title1="$t('products.storage.AfriceMiddleEast.list1.title')"
    :title2="$t('products.storage.AfriceMiddleEast.list1.subTitle')"
    :items="i18ntext.listitems"
  />
  <ProductsSupportPlan />
  <ProductsCalculate1
    :isShowTitle="false"
    :isShowReplicationPoints="false"
    :itemWidth="'560px'"
    :items="i18ntext.c1items"
    :subs="i18ntext.c1subs"
  />
  <ProductsStorageSupportPlan />
  <ProductsStorageList1
    :subTitle="$t('products.storage.AfriceMiddleEast.partnerList.subTitle')"
    :title="$t('products.storage.AfriceMiddleEast.partnerList.title')"
    :list="i18ntext.imgPcList"
  />
  <ProductsDRMCustomers
    :drmCustomer="i18ntext.drmCustomer"
  />
  <Footer />
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Products'
});
const i18ntext = computed<any>(() => {
  return {
    numbers: [
      {
        label: '13',
        content: 'PoPs'
      },
      {
        label: '73 ms',
        content: 'Avg Latency'
      },
      {
        label: '7',
        content: 'Transit Providers'
      },
      {
        label: '4.700',
        content: 'Peak Request/Second'
      }
    ],
    neverHit: {
      title: 'Never hit your origin again',
      subTitle:
        'Minimize traffic to your origin and lower costs by serving files directly from Perma-Cache. Gowaf keeps your infrastructure hopping, regardless of scale or traffic spikes.',
      items: [
        {
          icon: '/images/products/storage/europe/SmartEdge™_ic_engine_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Scalable by Design',
          content: 'Maximize your growth and delivery all across Oceania.',
          contentAlign: 'left'
        },
        {
          icon: '/images/products/storage/europe/SmartEdge™_ic_Monitoring_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: '24/7 Support',
          content: 'Available 24 hours a day, every day of the week.',
          contentAlign: 'left'
        },
        {
          icon: '/images/products/storage/europe/home_list_ic_network_2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: 'Transparent Pricing',
          content: 'Only pay for the bandwidth you use and cancel anytime.',
          contentAlign: 'left'
        }
      ]
    },
    listitems: [
      {
        icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_1@2x.png',
        title: "Easy Let's Encrypt SSL",
        content:
          'Take advantage of a free SSL certificate with a single click of a button.'
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_2@2x.png',
        title: 'Instant Cache Purging',
        content:
          'Clearing cache has never been so easy and fast. Keep your content always up to date.'
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_3@2x.png',
        title: 'Real-Time Log Forwarding',
        content:
          'Gain complete visibility into your content and make data-driven business decisions.'
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_4@2x.png',
        title: 'Real-Time Monitoring',
        content:
          'Make use of the next-generation real-time monitoring dashboard and get full traffic insights.'
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_5@2x.png',
        title: 'Edge Rules',
        content:
          'Define custom rules to control delivery, security, routing, and much more directly on the edge.'
      },
      {
        icon: '/images/products/cdn/overview/cdn_overview_bulid_ic_6@2x.png',
        title: 'Powerful Security',
        content:
          'Stay protected from any and all attacks with state-of-the-art DoS mitigation security.'
      }
    ],
    c1items: [
      {
        title: 'ME & Africa',
        value: '200 GB',
        percent: 45
      }
    ],
    c1subs: [
      {
        title: 'Standard Tier',
        value: '$12/month'
      },
      {
        title: 'Volume Tier',
        value: '$1/month'
      }
    ],
    imgPcList: [
      '/images/products/storage/africemiddleeast/home_logo_1_2x.png',
      '/images/products/storage/africemiddleeast/home_logo_2_2x.png',
      '/images/products/storage/africemiddleeast/home_logo_3_2x.png',
      '/images/products/storage/africemiddleeast/home_logo_4_2x.png',
      '/images/products/storage/africemiddleeast/home_logo_5_2x.png'
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
