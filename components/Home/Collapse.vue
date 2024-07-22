<template>
  <div class="home-Collapse page-container">
    <div class="title">{{ title }}</div>
    <div class="sub-title">{{ subtitle }}</div>
    <el-collapse class="collapse" v-model="activeNames">
      <el-collapse-item
        class="collapse-item"
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :name="index"
      >
        <template #title>
          {{ item.title }}
          <img
            class="header-icon"
            src="/public/images/home/common_up_nor@2x.png"
            alt=""
            srcset=""
          />
        </template>
        <div class="text">
          {{ item.subtitle }}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue';
withDefaults(
  defineProps<{
    title?: boolean;
    subtitle?: string;
    list: Array<{
      title: string;
      subtitle: string;
    }>;
  }>(),
  {}
);
const activeNames = ref(['1']);
</script>
<style lang="scss" scoped>
.home-Collapse {
  .title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
  .sub-title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #4e4e4e;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin: 20px 0 40px;
  }
  .collapse {
    width: 1112px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .collapse-item {
      background: #ffffff;
      min-height: 120px;
      box-shadow: 0px 4px 10px 0px #f1f1f1;
      border-radius: 14px;
      border: 1px solid #e6e6e6;
      padding: 0 20px;
      :deep(.el-collapse-item__header) {
        height: 120px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 30px;
        color: #000000;
        line-height: 42px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        .el-collapse-item__arrow{
          display: none;
        }
        &.is-active {
          border-bottom: 1px solid #d8d8d8;
          .header-icon {
            transform: rotate(180deg);
          }
        }
        .header-icon {
          width: 34px;
          height: 34px;
          margin-left: auto;
          transition: all .3s;
        }
      }
      .text {
        padding: 36px 0;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 24px;
        color: #4e4e4e;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
  }
}
</style>
