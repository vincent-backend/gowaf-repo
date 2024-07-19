<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.optimizer.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.stream.breadCrumbs.overview'),
        href: '#',
        current: false
      },
      {
        label: $t('products.storage.breadCrumbs.TransformAPI'),
        href: '#',
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
  <CommonSuperCharge v-bind="$tm('products.DNS.doNotLeave')" />
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
@media (max-width: 767px) {
  .Minimize {
    margin-bottom: 6.25rem;

    .percentage {
      display: flex;
      gap: 5.44rem;
      margin-top: 1.25rem;

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
          font-size: 3rem;
          line-height: 4rem;
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
}
</style>
