<script lang="ts" setup>
const props = defineProps({
  title: String,
  subTitle: String,
  pic: String,
  picHeight: String,
});
</script>

<template>
  <div class="chart1-container">
    <div class="chart1 page-container">
      <div class="title" v-if="props.title">{{ props.title }}</div>
      <div class="sub-title" v-if="props.subTitle">{{ props.subTitle }}</div>
      <div class="pic" :style="{
        backgroundImage: `url(${props.pic})`,
        height: props.picHeight,
      }"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.chart1-container {
  margin-top: 120px;

  .chart1 {
    >.title {
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

    >.pic {
      margin-top: 80px;

      width: 1200px;
      box-shadow: 0px 10px 30px 0px rgba(173, 173, 173, 0.14);
      border-radius: 14px;
    }
  }
}
</style>