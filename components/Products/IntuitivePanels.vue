<script lang="ts" setup>
const curTab = ref(0);
</script>

<template>
  <div class="intuitive-panels-container">
    <div class="intuitive-panels page-container">
      <div class="title">{{ $t('products.cdn.overview.intuitivePanels.title') }}</div>
      <div class="sub-title">{{ $t('products.cdn.overview.intuitivePanels.subTitle') }}</div>
      <Line top="30px" />
      <CommonTabs :tabs="$tm('products.cdn.overview.intuitivePanels.tabs')" v-model:cur-tab="curTab" />
      <template v-for="tab, index in $tm('products.cdn.overview.intuitivePanels.tabs')">
        <div class="tab-content" v-if="index === curTab">
          <div class="content">{{ tab.content }}</div>
          <div class="pic" :style="{
        backgroundImage: `url(${tab.pic})`,
        width: tab.picWidth,
        height: tab.picHeight,
      }"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.intuitive-panels-container {
  margin-top: 90px;
  background: url(/public/images/products/cdn/overview/cdn_overview_9_bg.png);
  background-size: 1920px 951px;
  height: 951px;

  .intuitive-panels {
    >.title {
      margin-top: 30px;

      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    >.sub-title {
      margin-top: 20px;

      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4E4E4E;
      line-height: 24px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    >.tab-content {
      margin-top: 30px;

      >.content {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #4E4E4E;
        line-height: 24px;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }

      >.pic {
        margin: 50px auto 0;
      }
    }
  }
}
</style>