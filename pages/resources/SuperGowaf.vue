<template>
  <Header />
  <CommonHeader1
    :pre-title="$t('resources.SuperGowaf.header.preTitle')"
    :title="$t('resources.SuperGowaf.header.title')"
    :content="$t('resources.SuperGowaf.header.description')"
    :pic="{
      src: '/images/resources/SuperGowaf/supergowaf_banner_graph.png',
      w: '423px',
      h: '466px',
      msrc: '/images/resources/SuperGowaf/supergowaf_banner_graph@2x.png',
      mw: '26.43rem',
      mh: '29.12rem'
    }"
  />

  <SolutionsAccelerate
    :title="$t('resources.SuperGowaf.accelerate.title')"
    :content="$t('resources.SuperGowaf.accelerate.content')"
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
    href="/forgot"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
  />

  <CommonList1 v-bind="i18ntext.slist1" />

  <ResourcesLeftImgRightTransform />
  <ResourcesAuthor />
  <ProductsDRMCustomers :drmCustomer="i18ntext.drmCustomer" />
  <Footer />
</template>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Resources'
});

const i18ntext = computed(() => {
  return {
    list1: [
      t('1PAn6q6oGb2yDA5_-NNHC'),
      t('0dASCDVnoxeN349jndbZW'),
      t('pzPvCjcfwlmfJozUo3XEj'),
      t('MdTBmkryojIaLeSywUfiZ')
    ],
    list2: [
      {
        icon: '/images/resources/SuperPolyfill/polyfill_noneed_icon1_nor@2x.png',
        iconActive:
          '/images/resources/SuperPolyfill/polyfill_noneed_icon1@2x.png',
        title: t('resources.SuperGowaf.accelerate.list.available.title'),
        content: t('resources.SuperGowaf.accelerate.list.available.content')
      },
      {
        icon: '/images/resources/SuperPolyfill/polyfill_noneed_icon2_nor@2x.png',
        iconActive:
          '/images/resources/SuperPolyfill/polyfill_noneed_icon2_sel@2x.png',
          title: t('resources.SuperGowaf.accelerate.list.knowledgeable.title'),
        content: t('resources.SuperGowaf.accelerate.list.knowledgeable.content')
      },
      {
        icon: '/images/resources/SuperPolyfill/polyfill_noneed_icon3_nor@2x.png',
        iconActive:
          '/images/resources/SuperPolyfill/polyfill_noneed_icon3_sel@2x.png',
          title: t('resources.SuperGowaf.accelerate.list.responsive.title'),
        content: t('resources.SuperGowaf.accelerate.list.responsive.content')
      },
      {
        icon: '/images/resources/SuperPolyfill/polyfill_noneed_icon4_nor@2x.png',
        iconActive:
          '/images/resources/SuperPolyfill/polyfill_noneed_icon4_sel@2x.png',
        title: t('resources.SuperGowaf.accelerate.list.effective.title'),
        content: t('resources.SuperGowaf.accelerate.list.effective.content')
      }
    ],
    numbers: [
      {
        label: '24/7',
        content: t('N6q23-6o1-_wZ6EsI9DmX')
      },
      {
        label: t('home.forgot.subhead'),
        content: t('qXTYUxueibXi2FVxrSn04')
      },
      {
        label: t('6IL0aWNQ8k0YAVCNiLYac'),
        content: t('C0R9iBokmttSjybT9qb1x')
      },
      {
        label: '100.000+',
        content: t('E-lBL1n4xs0zFonX_KBAs')
      }
    ],
    goFaster: {
      title: t('ZLpj88oY9O9p-Tf3fZOT7'),
      subTitle: t('0gPRAMGgH7Ji_v8sZt4Wc'),
      tabs: [
        {
          tab: t('TGXk5iNE1qJcd9p89IF1-'),
          title: t('a2P_clQ6hvkeUueExxab-'),
          content: t('ALSFXBnwgqaktRBjEobpR'),
          icon: '/images/resources/SuperPolyfill/super_polyfill_truearound_img1@2x.png',
          iconWidth: '360px',
          iconHeight: '360px',
          mIcon:
            '/images/resources/SuperPolyfill/super_polyfill_truearound_img1@2x.png',
          mIconWidth: '22.5rem',
          mIconHeight: '22.5rem'
        },
        {
          tab: t('Rp4f1YswXcxeV-TD7JLjN'),
          title: t('IeXpVFnK1ZvlC3hRu19sl'),
          content: t('Zx21tsbworl9vdhuUH5BL'),
          icon: '/images/resources/SuperPolyfill/super_polyfill_truearound_img2.png',
          iconWidth: '360px',
          iconHeight: '360px',
          mIcon:
            '/images/resources/SuperPolyfill/super_polyfill_truearound_img2.png',
          mIconWidth: '22.5rem',
          mIconHeight: '22.5rem'
        },
        {
          tab: t('NB_PlIRPrgkUAMPJLaypI'),
          title: t('GYNmK6UMGcszNRyH12R4e'),
          content: t('hxHlxIC5DlozfTMF-GW6d'),
          icon: '/images/resources/SuperPolyfill/super_polyfill_truearound_img3.png',
          iconWidth: '360px',
          iconHeight: '360px',
          mIcon:
            '/images/resources/SuperPolyfill/super_polyfill_truearound_img3.png',
          mIconWidth: '22.5rem',
          mIconHeight: '22.5rem'
        },
        {
          tab: t('2nC0G209ckvKEjWkx-STh'),
          title: t('mmAl-_o2i76I7CEN1c-D9'),
          content: t('cmSb5BrgVWHiOhvZ5Yw2u'),
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
      title1: t('0tD47NSrug99g6xaWtq1r'),
      title2: t('kPm7Bf_ES93flFpvYcHIU'),
      items: [
        {
          icon: '/images/resources/SuperPolyfill/polyfill_knowledge_img1@2x.png',
          title: t('3kl0FglXxLti4w6lNs80V'),
          content: t('6fgKkwjS7tDhc1FI4-rnQ')
        },
        {
          icon: '/images/resources/SuperPolyfill/polyfill_knowledge_img2@2x.png',
          title: t('_0PiRSQb6j-WZdBheStVS'),
          content: t('mRbmZDUtIGGlhHL3DYh4n')
        },
        {
          icon: '/images/resources/SuperPolyfill/polyfill_knowledge_img3@2x.png',
          title: t('Tl5Ua8_mlOwS9TiUnudzk'),
          content: t('7_KzKMPufyAXmPOzghBfH')
        }
      ]
    },
    drmCustomer: {
      title: t('home.join2.title'),
      contentPre: t('home.header.bottom.weAreRated'),
      contentImg: '/images/products/stream/multi-drm/home_title_star2x.png',
      contentMid: t('home.join2.subTitle3'),
      contentP: t('home.join2.subTitle4'),
      contentLink: t('home.join2.subTitle5'),
      contentLast: t('home.join2.subTitle6'),
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
        title: t('PDEs3nnGBfog1j0r5jgw9'),
        subTitle: 'ShortPixel',
        content: t('W4FDTntcVs2yotM9mfnuj')
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
