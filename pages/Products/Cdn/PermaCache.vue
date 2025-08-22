<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="CDNenu($t, $route.path)"
  />
  <CommonHeader1
    :pre-title="$t('products.cdn.permaCache.header.preTitle')"
    :title="$t('products.cdn.permaCache.header.title')"
    :content="$t('products.cdn.permaCache.header.content')"
    :btn="$t('products.cdn.permaCache.header.btn')"
    href="/forgot"
    :hint="$t('products.cdn.permaCache.header.hint')"
    :show-foot="false"
    :pic="{
      src: '/images/products/cdn/perma-cache/cdn_permacache_banner_img@2x.png',
      w: '374px',
      h: '402px',
      msrc: '/images/products/cdn/perma-cache/cdn_permacache_banner_img@2x.png',
      mw: '20.78rem',
      mh: '22.33rem'
    }"
  />

  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="i18ntext.numbers"
  />

  <ProductsNeverHit :isShowTitle="true" :neverHit="i18ntext.neverHit" />

  <CommonSuperCharge v-bind="i18ntext.superCharge" />

  <SolutionsAd1
    :title="$t('products.cdn.permaCache.ad1.title')"
    :sub-title="$t('products.cdn.permaCache.ad1.subTitle')"
    :btn="$t('products.cdn.permaCache.ad1.btn')"
    href="/forgot"
    pic="/images/products/cdn/perma-cache/Network_Overview_banner_graph@2x.png"
    m-pic="/images/products/cdn/perma-cache/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic-width="22.22rem"
    m-pic-height="22.22rem"
  />

  <SolutionsChart1
    :title="$t('products.cdn.permaCache.chart1.title')"
    :sub-title="$t('products.cdn.permaCache.chart1.subTitle')"
    pic="/images/products/cdn/perma-cache/chart-1@2x.png"
    mPic="/images/products/cdn/perma-cache/chart-1@2x.png"
    pic-height="432px"
    mPicHeight="fit-content"
  />

  <NetworkJoin1
    v-bind="{
      ...i18ntext.join1,
      avatar:
        '/images/products/cdn/perma-cache/Network_ddos_evaluate_character@2x.png',
      mAvatar:
        '/images/products/cdn/perma-cache/Network_ddos_evaluate_character@2x.png'
    }"
  />

  <Footer />
</template>

<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Products'
});
const i18ntext = computed<any>(() => {
  return {
    numbers: [
      {
        label: '14',
        content: t('o71Q2Zf35IBMtNKNLlUoZ')
      },
      {
        label: t('7fTQhbYbj7Oj38yMHUtoH'),
        content: t('C_CVNQDyeqTEDdxyicU9G')
      },
      {
        label: '90%+',
        content: t('T335Sf0D1kS3b9OfS2o_E')
      },
      {
        label: t('z8H7o0qW48Ans4JSHx813'),
        content: t('CpWTflTXUJ2WObLQ8PWYJ')
      }
    ],
    neverHit: {
      title: t('tqA9tM3WudJ_zOi3gg6uV'),
      subTitle: t('3BL5RppaAEV0sCREu-bWk'),
      items: [
        {
          icon: '/images/products/cdn/perma-cache/media_simple_ic_1@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: 'CDN',
          content: t('9Ph1dSnwOknhqaG0CD5bR')
        },
        {
          icon: '/images/products/cdn/perma-cache/media_simple_ic_2@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: 'Perma-Cache',
          content: t('d4Pe44itYVnHQfYKi7AhY')
        },
        {
          icon: '/images/products/cdn/perma-cache/media_simple_ic_3@2x.png',
          width: '80px',
          height: '80px',
          alignType: 'center',
          title: t('GcZzFwiBUGnTfDSUpRpTH'),
          content: t('oD5Y2vqdvnUmTM8UW_LO6')
        }
      ]
    },
    superCharge: {
      title: t('IlAO7QiByLkLpSl_4TIp8'),
      subTitle: t('aWX7R14-2pEPDJOiU51Fu'),
      tabs: [
        {
          tab: t('X7Wg7oRcDNYE16Jxa8nJ_'),
          subTitle: t('products.cdn.overview.intuitivePanels.subTitle'),
          title: t('BoujQJH0ec-bGz8d6ix3J'),
          content: t('a1TJ5sMVHgUtNdsrzHoQf'),
          icon: '/images/products/cdn/perma-cache/cdn_permacache_graph_Maximize.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/cdn/perma-cache/cdn_permacache_graph_Maximize.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        },
        {
          tab: t('ZuTIgnFaTgUR_gFGn5b2x'),
          subTitle: t('products.cdn.overview.intuitivePanels.subTitle'),
          title: t('QFJFAKIiVa_HPE9d0kh3x'),
          content: t('QMsKAQAcOykobjHg_3FCC'),
          icon: '/images/products/cdn/perma-cache/cdn_permacache_graph_Maximizedd.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/cdn/perma-cache/cdn_permacache_graph_Maximizedd.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        },
        {
          tab: t('UegTq88bPEGus_-tQgzG6'),
          subTitle: t('products.cdn.overview.intuitivePanels.subTitle'),
          title: t('oQX7kR4FWTBkisi10MGby'),
          content: t('_IlRm7s-EC6vRD5mg8Z8M'),
          icon: '/images/products/cdn/perma-cache/cdn_permacache_graph_Improve@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/cdn/perma-cache/cdn_permacache_graph_Improve@2x.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        },
        {
          tab: t('o4WB5pqJqswsZQhERQQP7'),
          subTitle: t('products.cdn.overview.intuitivePanels.subTitle'),
          title: t('vVU1neFY52IssKwvMRQyr'),
          content: t('htWvYoJ1KV-NUsKCHXCSx'),
          icon: '/images/products/cdn/perma-cache/cdn_permacache_graph_store@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/cdn/perma-cache/cdn_permacache_graph_store@2x.png',
          mIconWidth: '22.22rem',
          mIconHeight: '22.22rem'
        }
      ]
    },
    join1: {
      title: t('O3X1IOZm6-KlH1N74XLo3'),
      person: {
        name: t('6YXncMQRwii8ofZw6I7zu'),
        title: t('SoGw4y79_hLJBGeIlu_vm'),
        content: t('G0_N_-Z_TIkrK4n6jTtBQ')
      }
    }
  };
});
</script>
