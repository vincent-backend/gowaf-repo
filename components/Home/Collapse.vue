<template>
  <div class="home-Collapse">
    <div class="title" v-if="title">{{ title }}</div>
    <div class="sub-title" v-if="subtitle">{{ subtitle }}</div>
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
          <NuxtImg
            class="header-icon"
            src="/images/home/common_up_nor@2x.png"
            alt=""
            srcset=""
          />
        </template>
        <template v-if="typeof item.subtitle === 'string'">
          <div class="text">
            {{ item.subtitle }}
          </div>
        </template>
        <template v-else>
          <div
            class="text-arr"
            v-for="(items, index) in item.subtitle"
            :key="index"
          >
            {{ items }}
          </div>
        </template>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
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
  width: 100%;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    border: none;
    gap: 20px;
    .collapse-item {
      background: #ffffff;
      min-height: 120px;
      box-shadow: 0px 4px 10px 0px #f1f1f1;
      border-radius: 14px;
      border: none;
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
        .el-collapse-item__arrow {
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
          transition: all 0.3s;
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
      .text-arr {
        padding: 20px 0;
        border-bottom: 1px solid #eaeaea;
      }
    }
  }
}
@media (max-width: 767px) {
  .home-Collapse {
    width: 100%;
    .title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 2.5rem;
      color: #000000;
      line-height: 3.5rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .sub-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.75rem;
      color: #4e4e4e;
      line-height: 2.38rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .collapse {
      width: 100%;
      display: flex;
      flex-direction: column;
      border: none;
      gap: 20px;
      .collapse-item {
        background: #ffffff;
        min-height: 7.75rem;
        box-shadow: 0rem 0.25rem 0.63rem 0rem #f1f1f1;
        border-radius: 0.88rem;
        border: none;
        padding: 0 1.25rem;
        :deep(.el-collapse-item__content) {
          padding: 0;
        }
        :deep(.el-collapse-item__header) {
          height: 7.75rem;
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 1.88rem;
          color: #000000;
          line-height: 2.63rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
          .el-collapse-item__arrow {
            display: none;
          }
          &.is-active {
            border-bottom: 1px solid #d8d8d8;
            .header-icon {
              transform: rotate(180deg);
            }
          }
          .header-icon {
            width: 2.13rem;
            height: 2.13rem;
            margin-left: auto;
            transition: all 0.3s;
          }
        }
        .text {
          padding: 1.25rem 0;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 1.5rem;
          color: #4e4e4e;
          line-height: 2.06rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .text-arr {
          padding: 1.25rem 0;
          border-bottom: 1px solid #eaeaea;
        }
      }
    }
  }
}
</style>
