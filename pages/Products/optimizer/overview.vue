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
    href="#"
    :pic="{
      src: '/images/products/optimizer/overview/cdnfeatures_performance_img@2x.png',
      w: '470px',
      h: '470px',

      msrc: '/images/products/optimizer/overview/cdnfeatures_performance_img@2x.png',
      mw: '25.63rem',
      mh: '22.88rem'
    }"
  />
  <ProductsEasyPowerful
    :title="$t('products.optimizer.overview.EasyPowerful.title')"
    :sub-title="$t('products.optimizer.overview.EasyPowerful.subTitle')"
    :ful-items="$tm('products.optimizer.overview.EasyPowerful.items')"
  />
  <CommonNumbers
    is-row
    is-two-row
    style="margin-top: 80px"
    :items="$tm('products.optimizer.overview.numbers')"
  />

  <SolutionsAd2
    :title="$t('products.optimizer.overview.Minimize.title')"
    :content="$t('products.optimizer.overview.Minimize.content')"
    :content2="$t('products.optimizer.overview.Minimize.content2')"
    href="#"
    pic="/images/products/optimizer/overview/SmartEdge™_graph_1@2x.png"
    pic-width="447px"
    pic-height="302px"
    class="Minimize"
  >
    <div class="percentage">
      <div class="percentage-item">
        <div class="num">
          <span class="numt">12%</span>
          <span class="numic"></span>
        </div>
        <div class="sub-title">IMPROVED PERFORMANCE</div>
      </div>
      <div class="percentage-item">
        <div class="num yellow">
          <span class="numt">80%</span>
          <span class="numic"></span>
        </div>
        <div class="sub-title">LOWER ORIGIN TRAFFIC</div>
      </div>
    </div>
  </SolutionsAd2>

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
    :list="$tm('products.optimizer.overview.website.list')"
    :btn="$t('products.optimizer.overview.website.btn')"
    :btnSubtext="$t('products.optimizer.overview.website.btnSubtext')"
    single-rowlist
    href="#"
    pic="/images/products/optimizer/overview/multi_drmprcing_img@2x.png"
    pic-width="582px"
    pic-height="582px"
    class="website"
  >
    <template #title>
      <span class="highlight">$9.5</span>
    </template>
  </SolutionsAd2>
  <LgOnly>
    <ProductsNeverHit
      :isShowTitle="true"
      :neverHit="$tm('products.optimizer.overview.neverHit')"
    />
  </LgOnly>
  <XsOnly>
    <ProductsNeverHitList
      :isShowTitle="true"
      :neverHit="$tm('products.optimizer.overview.neverHit')"
    />
  </XsOnly>
  <SolutionsAd2
    :title="$t('products.optimizer.overview.Boost.title')"
    :content="$t('products.optimizer.overview.Boost.content')"
    href="#"
    pic="/images/products/optimizer/overview/stream_overview_banner_graph@2x.png"
    pic-width="456px"
    pic-height="278px"
    class="Boost"
  >
  </SolutionsAd2>
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.storage.LatinAmerica.drmCustomer')"
  />

  <Footer />
</template>

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
</style>
