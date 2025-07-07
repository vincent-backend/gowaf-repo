<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.optimizer.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.stream.breadCrumbs.overview'),
        href: '/Products/optimizer/overview',
        current: true
      },
      {
        label: $t('products.storage.breadCrumbs.TransformAPI'),
        href: '/Products/optimizer/TransformAPI',
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
    :pre-title="$t('products.optimizer.overview.header.preTitle')"
    :title="$t('products.optimizer.overview.header.title')"
    :content="$t('products.optimizer.overview.header.content')"
    :btn="$t('products.storage.BouuyStorage.header.btn')"
    :hint="$t('products.storage.SSDStorage.header.hint')"
    href="/forgot"
    :pic="{
      src: '/images/products/optimizer/overview/cdnfeatures_performance_img@2x.png',
      w: '470px',
      h: '470px',

      msrc: '/images/products/optimizer/overview/cdnfeatures_performance_img@2x.png',
      mw: '29.38rem',
      mh: '29.38rem'
    }"
  />
  <ProductsEasyPowerful
    :title="$t('products.optimizer.overview.EasyPowerful.title')"
    :sub-title="$t('products.optimizer.overview.EasyPowerful.subTitle')"
    :ful-items="i18ntext.items"
  />
  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="i18ntext.numbers"
  />

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
    :reverse="isMobile()"
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

  <SolutionsAd1
    :title="$t('products.cdn.overview.ad1.title')"
    :sub-title="$t('products.cdn.overview.ad1.subTitle')"
    :btn="$t('products.cdn.overview.ad1.btn')"
    href="/forgot"
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
    :reverse="isMobile()"
    class="website"
  >
    <template #title>
      <span class="highlight">$9.5</span>
    </template>
  </SolutionsAd2>
  <LgOnly>
    <ProductsNeverHit :isShowTitle="true" :neverHit="i18ntext.neverHit" />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList :isShowTitle="true" :neverHit="i18ntext.neverHit" />
  </XsOnly>
  <SolutionsAd2
    :title="$t('products.optimizer.overview.Boost.title')"
    :content="$t('products.optimizer.overview.Boost.content')"
    href="#"
    pic="/images/products/optimizer/overview/stream_overview_banner_graph@2x.png"
    pic-width="456px"
    pic-height="278px"
    m-pic="/images/products/optimizer/overview/stream_overview_banner_graph@2x.png"
    m-pic-height="17.38rem"
    m-pic-width="28.5rem"
    :reverse="isMobile()"
    class="Boost"
  >
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
    items: [
      {
        icon: '/images/products/optimizer/overview/media_simple_ic_1@2x.png',
        title: t('HhNVqIvXp1OSNuaXlPmSD'),
        content: t('w_0CTW9td1O55hjl3gkBi')
      },
      {
        icon: '/images/products/optimizer/overview/transcribe_1_ic_2@2x.png',
        title: t('X_AtStB2EM8l87q7hSmrl'),
        content: t('AcAYuiFX_y09QxD_DsBk6')
      },
      {
        icon: '/images/products/optimizer/overview/stream_overview_ic_replicate@2x.png',
        title: t('rayrj03uH-m2vXSngj-Xk'),
        content: t('YyRTZdcmpDkITkRyL_Ioe')
      },
      {
        icon: '/images/products/optimizer/overview/media_simple_ic_3@2x.png',
        title: t('PsY4eSLZYT5QoWo78sD9Z'),
        content: t('f9jKdZapbbi65Pm2x6Whh')
      }
    ],
    numbers: [
      {
        label: t('hUH0ITeVjxgiPVk8N8WXq'),
        content: t('J_5uvUvOXWGTYi3UqBus9')
      },
      {
        label: '97%',
        content: t('lts6C5IiKQaFaZSJrNPlH')
      },
      {
        label: '40.000+',
        content: t('DqXjS0SA1aWVzOjBF1X1f')
      },
      {
        label: t('_OWD39-7wbYUPit83Auv7'),
        content: t('zNmxbvcjfE2RGwp0THvbu')
      }
    ],
    list: [
      t('nwKVtAfLhgvsDIimpKg3T'),
      t('H4TCHfibhmWX94jV2iHEq'),
      t('Q6943t0hb3eNqXYGK1bJ1')
    ],
    neverHit: {
      title: t('9NbZcmz4DXKajeXsQ4Ikk'),
      subTitle: t('yryJ8d5hEobyDD8F6NZYB'),
      items: [
        {
          icon: '/images/products/optimizer/overview/SmartEdge™_ic_cache@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('KSRRbtf6jpMcWCBT-ZYIu'),
          content: t('H_LIKVDkNiJ570oySl7z2'),
          contentAlign: 'left'
        },
        {
          icon: '/images/products/optimizer/overview/SmartEdge™_ic_Monitoring@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('6-3aEVwbIseFo_A95CoPO'),
          content: t('_mt3uU0id58yxeb4UeZJG'),
          contentAlign: 'left'
        },
        {
          icon: '/images/products/optimizer/overview/SmartEdge™_ic_engine@2x.png',
          width: '100px',
          height: '100px',
          alignType: 'flex-start',
          title: t('Qhl7zPLqM3EowEfudf5Ho'),
          content: t('fK6ghPWcKby3NN06KBrxk'),
          contentAlign: 'left'
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
