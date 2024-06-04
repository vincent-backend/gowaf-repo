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

      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;


    }

    >.sub-title {
      margin-top: 20px;



      font-size: 16px;
      color: #4E4E4E;

      text-align: center;


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