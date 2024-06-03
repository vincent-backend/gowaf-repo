<script lang="ts" setup>
const curTab = ref(0);
</script>

<template>
  <div class="pricing1-container">
    <div class="pricing1 page-container">
      <CommonTabs :tabs="$tm('pricing.overview.pricingTab')" v-model:cur-tab="curTab" style="margin-top: 0;" />
      <template v-for="tab, index in $tm('pricing.overview.pricingTab')">
        <PricingTable v-if="index === curTab" :header="tab.header" :content="tab.content" />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pricing1-container {
  position: relative;
  z-index: 2;
  margin-top: -60px;

  .pricing1 {
    z-index: 2;

    background: #FFFFFF;
    box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
    border-radius: 24px;

    box-sizing: border-box;
    padding: 20px;
  }
}
</style>