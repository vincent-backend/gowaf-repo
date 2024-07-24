<template>
  <Header />
  <CommonHeader1
    :pre-title="$t('home.AffiliateProgram.preTitle')"
    :title="$t('home.AffiliateProgram.title')"
    :content="$t('home.AffiliateProgram.content')"
    :show-foot="false"
    :btn="$t('home.AffiliateProgram.btn')"
    :hint="$t('home.AffiliateProgram.hint')"
    href="#"
    :pic="{
      src: '/images/home/affiliate_program_banner_graph@2x.png',
      w: '559px',
      h: '453px',

      msrc: '/images/home/affiliate_program_banner_graph@2x.png',
      mw: '26.5rem',
      mh: '29.13rem'
    }"
  />
  <ProductsEasyPowerful
    :show-next="false"
    v-bind="$tm('home.AffiliateProgram.neverHit')"
  />
  <VSpace h="100px" mh="6.25rem"></VSpace>
  <CommonList1 v-bind="$tm('home.AffiliateProgram.list1')" />
  <div class="btn-row page-container">
    <div class="btn">
      {{ $t('home.AffiliateProgram.listBtn') }}
    </div>
  </div>
  <VSpace h="100px" mh="6.25rem"></VSpace>
  <div class="page-container Marketing">
    <div class="mk-title">{{ $t('home.AffiliateProgram.mktitle') }}</div>
    <div class="mk-subtitle">{{ $t('home.AffiliateProgram.mksubtitle') }}</div>
    <div class="mkt-img" v-if="!isMobile">
      <img
        class="mkt-img"
        src="/public/images/home/编组_178@2x.png"
        alt=""
        srcset=""
      />
    </div>
  </div>
  <XsOnly>
    <Footer :showbot-foot="false" />
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
    <VSpace h="100px" mh="3.75rem" bg="#fff"></VSpace>
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
  </XsOnly>
  <LgOnly>
    <VSpace h="40px" mh="6.25rem"></VSpace>
    <div class="btn-row page-container">
      <div class="btn">
        {{ $t('home.AffiliateProgram.listBtn') }}
      </div>
    </div>
  </LgOnly>
  <VSpace h="100px" mh="3.25rem"></VSpace>
  <div class="page-container">
    <HomeCollapse
      :title="$t('home.AffiliateProgram.Collapse.title')"
      :subtitle="$t('home.AffiliateProgram.Collapse.subtitle')"
      :list="$tm('home.AffiliateProgram.Collapse.list')"
    ></HomeCollapse>
  </div>
  <VSpace h="100px" mh="6.25rem"></VSpace>
  <Footer />
</template>

<script setup lang="ts">
import VSpace from './../components/VSpace.vue';
const formLabelAlign = reactive({
  name: '',
  Email: '',
  Password: '',
  Company: '',
  Website: '',
  Phone: '',
  link: '',
  Message: '',
  checked: false
});
const activt = ref(0);
const list = ref([
  'Content Delivery',
  'Content Delivery',
  'Content Delivery',
  'Online Storage',
  'Software Distribution',
  'DoS Protection'
]);
</script>
<style lang="scss" scoped>
.btn-row {
  width: 100%;
  display: flex;
  justify-content: center;
  .btn {
    width: 240px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid rgba(70, 207, 58, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Mont, Mont;
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    line-height: 21px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}
.Marketing {
  .mk-title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
  .mk-subtitle {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #4e4e4e;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin: 20px 0 40px 0;
  }
  .mkt-img {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .btn-row {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
    .btn {
      width: 22.88rem;
      height: 4.63rem;
      background: #ffffff;
      border-radius: 2.34rem;
      border: 0.13rem solid rgba(70, 207, 58, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Mont, Mont;
      font-weight: 600;
      font-size: 1.63rem;
      color: #000000;
      line-height: 2.13rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
  .Marketing {
    .mk-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 2.5rem;
      color: #000000;
      line-height: 3.5rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .mk-subtitle {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.75rem;
      color: #4e4e4e;
      line-height: 2.38rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin: 1rem 0 2rem 0;
    }
    .mkt-img {
      width: 100%;
    }
  }
}
</style>
