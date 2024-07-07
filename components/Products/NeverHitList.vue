<script lang="ts" setup>
defineProps<{
  isShowTitle: boolean;
  neverHit: {
    title: string;
    subTitle: string;
    list: {
      icon: string;
      width: string;
      height: string;
      alignType: string;
      title: string;
      content: string;
    }[];
    items: Array<{
      num: Number;
      icon: string;
    }>;
  }[];
}>();
</script>
<template>
  <div class="never-list page-container">
    <div class="content">
      <div
        class="item"
        v-for="item in neverHit.items"
        :style="{ alignItems: `${item.alignType}` }"
      >
        <div
          class="icon"
          :style="{
            backgroundImage: `url(${item.icon})`
          }"
        ></div>
        <div class="text-row">
          <div class="title">{{ item.title }}</div>
          <div class="sub-title">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.never-list {
  width: 100%;
  margin: 6.5rem 0 3.5rem 0;
  padding: 0 1.88rem;
  box-sizing: border-box;
  .content {
    display: flex;
    flex-direction: column;
    gap: 2.55rem;
    .item {
      display: flex;
      align-items: center;
      .icon {
        width: 9.38rem;
        height: 9.38rem;
      }
      .text-row {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1.25rem;
        .title {
          font-weight: 500;
          font-size: 2.13rem;
          color: #000000;
          line-height: 3rem;
          text-align: left;
        }
        .sub-title {
          font-weight: 400;
          font-size: 1.5rem;
          color: #4e4e4e;
          line-height: 2.19rem;
          text-align: left;
        }
      }
    }
  }
}
</style>
