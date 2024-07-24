<template>
  <Header />
  <NetworkToolsBenner
    :title="$t('home.SupportHUB.title')"
    :sub-width="'auto'"
    :sub-title="$t('home.SupportHUB.subtitle')"
  >
    <div class="inputBox">
      <el-input
        v-model="input"
        placeholder="Search the bunny.net knowledge base"
        :prefix-icon="Search"
        class="input-with-select"
      >
      </el-input>
    </div>
  </NetworkToolsBenner>
  <div class="page-container fold">
    <div
      class="row"
      v-for="(item, index) in $tm('home.SupportHUB.list')"
      :key="index"
    >
      <div class="title">{{ item.title }}</div>
      <div class="subtitle">{{ item.subtitle }}</div>
      <div class="box">
        <div class="box-item" v-for="(d, i) in item.items" :key="i">
          <HomeCollapse :list="[d]"></HomeCollapse>
        </div>
      </div>
    </div>
  </div>
  <Footer :is-show-banner="true" />
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
const input = ref('');
</script>
<style lang="scss" scoped>
.input-with-select {
  height: 66px;
  :deep(.el-input__inner) {
    height: 66px;
    width: 690px;
  }
  :deep(.el-input__wrapper) {
    box-sizing: border-box;
    border-radius: 12px;
  }
}
.fold {
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
  .row {
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .subtitle {
      margin: 16px 0 32px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px 32px;
      .box-item {
        /* flex: 1; */
        :deep(.el-collapse-item__header) {
          background: linear-gradient(0deg, #46CF3A 0%, #36CFBC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}
</style>
