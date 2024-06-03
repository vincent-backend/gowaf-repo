<script lang="ts" setup>
const props = defineProps({
  items: Array<any>,
});
</script>

<template>
  <div class="feature-list-container">
    <div class="feature-list page-container">
      <div class="list">
        <div class="item" v-for="item in props.items">
          <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.feature-list-container {
  margin-top: 120px;

  .feature-list {
    .list {
      display: flex;
      gap: 90px;

      .item {
        .icon {
          width: 100px;
          height: 100px;
        }

        .title {
          margin-top: 20px;

          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 20px;
          color: #000000;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }

        .content {
          margin-top: 10px;

          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 16px;
          color: #4E4E4E;
          line-height: 24px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}
</style>