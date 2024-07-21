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
<style lang="scss" scoped></style>
