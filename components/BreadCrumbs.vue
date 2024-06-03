<script lang="ts" setup>
const props = defineProps({
  title: String,
  items: Array<any>,
});
</script>

<template>
  <div class="bread-crumbs-container">
    <div class="page-container bread-crumbs">
      <span class="title">
        {{ props.title }}
      </span>
      <span class="separator"></span>
      <div class="links">
        <a :href="item.href" v-for="item in items" :class="{ current: item.current }">
          {{ item.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bread-crumbs-container {
  background: #FFFFFF;
  box-shadow: inset 0px 1px 0px 0px rgba(226, 226, 226, 0.5);
  height: 60px;

  .bread-crumbs {
    height: 100%;
    display: flex;
    align-items: center;

    .title {}

    .separator {
      width: 2px;
      height: 20px;
      background: #F0F0F0;
      margin: 0 34px;
    }

    .links {
      display: flex;
      gap: 34px;

      a {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #4E4E4E;
        line-height: 18px;
        text-align: left;
        font-style: normal;

        &.current {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 14px;
          color: #000000;
          line-height: 18px;
          text-align: left;
          font-style: normal;
          background: linear-gradient(41.5494227786465deg, #46CF3A 0%, #36CFBC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}
</style>