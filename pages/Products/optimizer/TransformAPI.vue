<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.optimizer.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.stream.breadCrumbs.overview'),
        href: '/Products/optimizer/overview',
        current: false
      },
      {
        label: $t('products.storage.breadCrumbs.TransformAPI'),
        href: '/Products/optimizer/TransformAPI',
        current: true
      },
      {
        label: $t('products.stream.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />
  <CommonHeader1
    :pre-title="$t('products.optimizer.TransformAPI.header.preTitle')"
    :title="$t('products.optimizer.TransformAPI.header.title')"
    :content="$t('products.optimizer.TransformAPI.header.content')"
    :btn="$t('products.storage.BouuyStorage.header.btn')"
    :hint="$t('products.storage.SSDStorage.header.hint')"
    href="#"
    :pic="{
      src: '/images/products/optimizer/TransformAPI/Network_DDoS_banner_graph_1@2x@2x.png',
      w: '470px',
      h: '470px',

      msrc: '/images/products/optimizer/TransformAPI/Network_DDoS_banner_graph_1@2x.png',
      mw: '31.25rem',
      mh: '26.25rem'
    }"
  />
  <ProductsVerticalCarousel />
  <CommonSuperCharge v-bind="i18ntext.doNotLeave" />
  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="#"
    pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    pic-width="300px"
    pic-height="300px"
    m-pic="/images/products/cdn/overview/Network_Overview_banner_graph@2x.png"
    m-pic-width="18.75rem"
    m-pic-height="18.72rem"
  />

  <SolutionsAd2
    :title="$t('products.optimizer.overview.website.title')"
    :content="$t('products.optimizer.overview.website.content')"
    :list="i18ntext.list"
    :btn="$t('products.optimizer.overview.website.btn')"
    :btnSubtext="$t('products.optimizer.overview.website.btnSubtext')"
    single-rowlist
    href="#"
    pic="/images/products/optimizer/overview/multi_drmprcing_img@2x.png"
    pic-width="582px"
    pic-height="582px"
    m-pic="/images/products/optimizer/overview/multi_drmprcing_img@2x.png"
    m-pic-height="36.38rem"
    m-pic-width="36.38rem"
    :reverse="isMobile"
    class="website"
  >
    <template #title>
      <span class="highlight">$9.5</span>
    </template>
  </SolutionsAd2>
  <SolutionsAd2
    :title="$t('products.optimizer.overview.Minimize.title')"
    :content="$t('products.optimizer.overview.Minimize.content')"
    :content2="$t('products.optimizer.overview.Minimize.content2')"
    href="#"
    pic="/images/products/optimizer/overview/SmartEdge™_graph_1@2x.png"
    pic-width="447px"
    pic-height="302px"
    m-pic="/images/products/optimizer/overview/SmartEdge™_graph_1@2x.png"
    m-pic-height="18.88rem"
    m-pic-width="27.94rem"
    reverse
    class="Minimize"
  >
    <div class="percentage">
      <div class="percentage-item">
        <div class="num">
          <span class="numt">12%</span>
          <span class="numic"></span>
        </div>
        <div class="sub-title">{{ $t('7D4DGDH9D5LoMEYKbu-rW') }}</div>
      </div>
      <div class="percentage-item">
        <div class="num yellow">
          <span class="numt">80%</span>
          <span class="numic"></span>
        </div>
        <div class="sub-title">{{ $t('1eXREt5ktD5HhGhrl4nUN') }}</div>
      </div>
    </div>
  </SolutionsAd2>
  <ProductsDRMCustomers :drmCustomer="i18ntext.drmCustomer" />

  <Footer />
</template>
<script setup lang="ts">
const { t } = useI18n();
definePageMeta({
  title: 'Products'
});
const i18ntext = computed<any>(() => {
  return {
    doNotLeave: {
      title: t('Gq9v0fAY2Sat5Cx5yqTYl'),
      subTitle: t('Q5DsNDLJR3jI7kEr7r7t_'),
      tabs: [
        {
          tab: t('cPpznBwOVqhCn2S8IsrCf'),
          title: t('r74FZL1HCsl4Q0_ykG9hn'),
          content: t('1f7EJA1BX9s44DNRwWI9D'),
          icon: '/images/products/optimizer/TransformAPI/optimizer_transformapi_3_img01@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/optimizer/TransformAPI/optimizer_transformapi_3_img01@2x.png',
          mIconWidth: '25rem',
          mIconHeight: '25rem'
        },
        {
          tab: t('f9jihTXqjExCV65PwD3kM'),
          title: t('y-T00230YfBk98DWZb3hs'),
          content: t('J_okZ_adtd8hbTuvq8PEe'),
          icon: '/images/products/optimizer/TransformAPI/optimizer_transformapi_3_img02@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/optimizer/TransformAPI/optimizer_transformapi_3_img02@2x.png',
          mIconWidth: '25rem',
          mIconHeight: '25rem'
        },
        {
          tab: t('CjT50E2EmUQSe8C727MEl'),
          title: t('PnSIhuroMnQjdZzfpETkx'),
          content: t('5WYX1wfZdgFa_g3_TUFMr'),
          icon: '/images/products/optimizer/TransformAPI/optimizer_transformapi_3_img03@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/optimizer/TransformAPI/optimizer_transformapi_3_img03@2x.png',
          mIconWidth: '25rem',
          mIconHeight: '25rem'
        },
        {
          tab: t('0lH-zxqdk88pC91zP47rl'),
          title: t('Mpwyj_jGI6PWK4CA2Zs48'),
          content: t('nEOHAHwLSsGi0mc3bkQcf'),
          icon: '/images/products/optimizer/TransformAPI/optimizer_transformapi_3_img04@2x.png',
          iconWidth: '400px',
          iconHeight: '400px',
          mIcon:
            '/images/products/optimizer/TransformAPI/optimizer_transformapi_3_img04@2x.png',
          mIconWidth: '25rem',
          mIconHeight: '25rem'
        }
      ]
    },
    list: [
      t('nwKVtAfLhgvsDIimpKg3T'),
      t('H4TCHfibhmWX94jV2iHEq'),
      t('Q6943t0hb3eNqXYGK1bJ1')
    ],
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
<style lang="scss" scoped>
.Minimize {
  margin-bottom: 120px;

  .percentage {
    display: flex;
    gap: 30px;
    margin-top: 40px;

    &-item {
      display: flex;
      flex-direction: column;
    }

    .num {
      display: flex;
      align-items: center;
      gap: 10px;

      .numt {
        font-family: Mont, Mont;
        font-weight: 600;
        font-size: 48px;
        line-height: 64px;
        background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .numic {
        width: 40px;
        height: 40px;
        background-image: url('/images/products/optimizer/overview/SmartEdge™_ic_rise@2x.png');
      }
    }

    .yellow {
      .numt {
        background: linear-gradient(0deg, #f9c22f 0%, #fa6e4a 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .numic {
        width: 40px;
        height: 40px;
        background-image: url('/images/products/optimizer/overview/SmartEdge™_ic_descend@2x.png');
      }
    }

    .sub-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
}

.Boost {
  margin-bottom: 120px;
}

.highlight {
  font-family: PingFangSC, PingFang SC;
  font-weight: 500;
  font-size: 50px;
  color: #000000;
  line-height: 70px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  background: linear-gradient(41.5494227786465deg, #46cf3a 0%, #36cfbc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@media (max-width: 767px) {
  .Minimize {
    margin-bottom: 6.25rem;
    .percentage {
      display: flex;
      gap: 1.88rem;
      margin-top: 1.25rem;

      &-item {
        display: flex;
        flex-direction: column;
      }

      .num {
        display: flex;
        align-items: center;
        gap: 0.63rem;

        .numt {
          font-family: Mont, Mont;
          font-weight: 600;
          font-size: 3rem;
          color: #000000;
          line-height: 4rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
          background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .numic {
          width: 2.5rem;
          height: 2.5rem;
          background-image: url('/images/products/optimizer/overview/SmartEdge™_ic_rise@2x.png');
        }
      }

      .yellow {
        .numt {
          background: linear-gradient(0deg, #f9c22f 0%, #fa6e4a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .numic {
          width: 2.5rem;
          height: 2.5rem;
          background-image: url('/images/products/optimizer/overview/SmartEdge™_ic_descend@2x.png');
        }
      }

      .sub-title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1rem;
        color: #4e4e4e;
        line-height: 1.5rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
  }
  .highlight {
    font-family: Mont, Mont;
    font-weight: 500;
    font-size: 3.13rem;
    color: #000000;
    line-height: 4.13rem;
    text-align: left;
    font-style: normal;
    text-transform: none;
    background: linear-gradient(41.5494227786465deg, #46cf3a 0%, #36cfbc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .Boost {
    margin-bottom: 6.25rem;
  }
}
</style>
