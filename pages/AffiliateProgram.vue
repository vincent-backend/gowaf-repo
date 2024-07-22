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
  <VSpace h="100px"></VSpace>
  <CommonList1 v-bind="$tm('home.AffiliateProgram.list1')" />
  <div class="btn-row page-container">
    <div class="btn">
      {{ $t('home.AffiliateProgram.listBtn') }}
    </div>
  </div>
  <VSpace h="100px"></VSpace>
  <div class="page-container Marketing">
    <div class="mk-title">{{ $t('home.AffiliateProgram.mktitle') }}</div>
    <div class="mk-subtitle">{{ $t('home.AffiliateProgram.mksubtitle') }}</div>
    <div class="mkt-img">
      <img
        class="mkt-img"
        src="/public/images/home/编组_178@2x.png"
        alt=""
        srcset=""
      />
    </div>
  </div>
  <VSpace h="40px"></VSpace>
  <div class="btn-row page-container">
    <div class="btn">
      {{ $t('home.AffiliateProgram.listBtn') }}
    </div>
  </div>
  <VSpace h="100px"></VSpace>
  <HomeCollapse
    :title="$t('home.AffiliateProgram.Collapse.title')"
    :subtitle="$t('home.AffiliateProgram.Collapse.subtitle')"
    :list="$tm('home.AffiliateProgram.Collapse.list')"
  ></HomeCollapse>
  <VSpace h="100px"></VSpace>
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
</style>
