<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.stream.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.stream.breadCrumbs.overview'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.player'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.mediaCage'),
        href: '#',
        current: true
      },
      {
        label: $t('products.stream.breadCrumbs.multiDRM'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.transcribeAI'),
        href: '#',
        current: false
      },
      {
        label: $t('products.stream.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('products.stream.mediaCage.header.preTitle')"
    :title="$t('products.stream.mediaCage.header.title')"
    :content="$t('products.stream.mediaCage.header.content')"
    :btn="$t('products.stream.mediaCage.header.btn')"
    href="#"
    :hint="$t('products.stream.mediaCage.header.hint')"
    :pic="{
      src: '/images/products/stream/media-cage/stream_media_banner_graph@2x.png',
      w: '360px',
      h: '336px',
      msrc: '/images/products/stream/media-cage/stream_media_banner_graph@2x.png',
      mw: '28.5rem',
      mh: '17.38rem'
    }"
  />

  <ProductsEasyPowerful />
  <ProductsProtectYourVideos />

  <SolutionsAd1
    :title="$t('products.stream.mediaCage.ad1.title')"
    :sub-title="$t('products.stream.mediaCage.ad1.subTitle')"
    :btn="$t('products.stream.mediaCage.ad1.btn')"
    href="#"
    pic="/images/products/stream/media-cage/video_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/stream/media-cage/video_banner_graph@2x.png"
    m-pic-height="18.75rem"
    m-pic-width="18.75rem"
  />

  <CommonList1 v-bind="$tm('products.stream.mediaCage.list1')" />

  <ProductsPerfectSolution
    :title="$t('products.stream.mediaCage.perfectSolution.title')"
    :titleWidth="'249px'"
    :content="$t('products.stream.mediaCage.perfectSolution.content')"
    :items="[
      {
        icon: '/images/products/stream/media-cage/media_perfect_ic_1@2x.png',
        title: 'Prevent downloads',
        content:
          'Stop losing subscribers to piracy and stream media content on your terms.'
      },
      {
        icon: '/images/products/stream/media-cage/media_perfect_ic_2@2x.png',
        title: 'Online Courses',
        content:
          'Take complete control of our content and limit access to courses or specific videos as you see fit.'
      },
      {
        icon: '/images/products/stream/media-cage/media_perfect_ic_3@2x.png',
        title: 'Sporting Events',
        content:
          'Stop piracy before it happens and ensure your content stays available only to your subscribers.'
      }
    ]"
    :pic="{
      url: '/images/products/stream/media-cage/media_perfect_img@2x.png',
      width: 460,
      height: 480
    }"
  />

  <ProductsPlayerVideo />

  <ProductsDRMCustomers
    :drmCustomer="$tm('products.storage.Asia.drmCustomer')"
  />
  <Footer />
</template>