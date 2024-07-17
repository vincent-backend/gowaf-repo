<template>
  <Header />
  <BreadCrumbs
    :title="$t('products.cdn.breadCrumbs.parent')"
    :items="[
      {
        label: $t('products.cdn.breadCrumbs.overview'),
        href: '#',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.features'),
        href: '#',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.permaCache'),
        href: '#',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.safehop'),
        href: '#',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.regions'),
        href: '#',
        current: false
      },
      {
        label: $t('products.cdn.breadCrumbs.comparison'),
        href: '#',
        current: true
      },
      {
        label: $t('products.cdn.breadCrumbs.apiDocs'),
        href: '#',
        current: false
      }
    ]"
  />
  <CommonHeader2
    :title="$t('products.cdn.comparison.header.title') + contrastName"
    :sub-title="
      $t('products.cdn.comparison.header.subTitle') +
      contrastName +
      $t('products.cdn.comparison.header.subRightTitle')
    "
    :content="$t('products.cdn.comparison.header.content')"
    href="#"
  />
  <ProductsDNScomparisonList
    :ptlist="comparisonList"
  ></ProductsDNScomparisonList>
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
  <ProductsStorageSupportPlan
    :title="$t('products.cdn.comparison.SupportPlan.title')"
    :sub-title="$t('products.cdn.comparison.SupportPlan.subTitle')"
    :btn-text="$t('products.cdn.comparison.SupportPlan.btnText')"
    :btnsub-text="$t('products.cdn.comparison.SupportPlan.btnsubText')"
  >
    <div class="Planlist">
      <div
        class="row-item"
        v-for="item in $tm('products.cdn.comparison.SupportPlan.list')"
      >
        <div class="left-title">
          {{ item.title }}
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </ProductsStorageSupportPlan>
  <SolutionsAd2
    :title="$t('products.cdn.comparison.ad2.title')"
    :content="$t('products.cdn.comparison.ad2.content')"
    href="#"
    pic="/images/products/cdn/comparison/cdn_overview_supercharged_img@2x.png"
    pic-width="363px"
    pic-height="376px"
    m-pic="/images/products/cdn/comparison/cdn_overview_supercharged_img@2x.png"
    m-pic-width="22.19rem"
    m-pic-height="23.25rem"
    :reverse="isMobile"
  >
    <div class="percentage">
      <div class="percentage-item">
        <div class="num">40%</div>
        <div class="sub-title">FASTER LOAD TIME</div>
      </div>
      <div class="percentage-item">
        <div class="num">80%</div>
        <div class="sub-title">IMAGE SIZE REDUCTION</div>
      </div>
    </div>
  </SolutionsAd2>
  <CommonNumbers
    is-row
    is-two-row
    class="comparison-CommonNumbers"
    :items="$tm('products.stream.overview.numbers')"
  />
  <NetworkAlwaysSafe
    class="comparison-NetworkAlwaysSafe"
    v-bind="$tm('products.cdn.comparison.alwaysSafe')"
  />

  <CommonSuperCharge v-bind="$tm('products.DNS.doNotLeave')" />
  <ProductsDRMCustomers
    :drmCustomer="$tm('products.cdn.comparison.drmCustomer')"
  />
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
  <Footer />
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const { tm } = useI18n();

const NameMap: any = {
  aws: 'CloudFront AWS',
  cacheFly: 'CacheFly',
  CDN77: 'CDN77',
  cloudFlare: 'CloudFlare',
  fastly: 'Fastly',
  vsakamai: 'Akamai'
};
onMounted(() => {
  console.log('route.params.name', route.params.name);
  if (!route.params.name || !NameMap[route.params.name as any]) {
    router.replace({ path: '/Products/Cdn/comparison/aws' });
  }
});

const contrastName = computed(() => {
  /*
  CDN-comparison-AWS
  CDN-comparison-CacheFly
  CDN-comparison-CDN77
  CDN-comparison-CloudFlare
  CDN-comparison-Fastly
  CDN-comparison-vsakamai
  */
  return NameMap[route.params.name as any];
});

const comparisonList = computed(() => {
  return tm('products.cdn.comparison.comparisonList').filter(el => {
    return (
      el.key ==
      (contrastName.value === 'CloudFront AWS' ? 'AWS' : contrastName.value)
    );
  });
});
</script>

<style lang="scss" scoped>
.percentage {
  display: flex;
  gap: 70px;
  margin-top: 70px;
  &-item {
    display: flex;
    flex-direction: column;
  }
  .num {
    font-family: Mont, Mont;
    font-weight: 600;
    font-size: 48px;
    color: #000000;
    line-height: 64px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
.comparison-CommonNumbers {
  margin: 175px 0 150px 0;
}
.Planlist {
  display: flex;
  flex-direction: column;
  gap: 30px;
  .row-item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e6e6e6;
    gap: 20px;
    padding-bottom: 20px;
    .left-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 24px;
      color: #000000;
      line-height: 33px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .content {
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
.comparison-NetworkAlwaysSafe {
  :deep(.always-safe > .title) {
    text-align: center;
  }
  :deep(.always-safe > .sub-title) {
    text-align: center;
  }
}
@media (max-width: 767px) {
  .percentage {
    display: flex;
    gap: 7rem;
    margin-top: 3.13rem;
    &-item {
      display: flex;
      flex-direction: column;
    }
    .num {
      font-family: Mont, Mont;
      font-weight: 600;
      font-size: 3.13rem;
      color: #000000;
      line-height: 4.13rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
      background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .sub-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.5rem;
      color: #4e4e4e;
      line-height: 2.06rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .comparison-CommonNumbers {
    margin: 3.13rem 0 6.25rem 0;
  }
}
</style>
