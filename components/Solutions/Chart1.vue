<script lang="ts" setup>
const props = defineProps({
  title: String,
  subTitle: String,
  pic: String,
  picHeight: String,
  mPic: String,
  mPicHeight: String
});
</script>

<template>
  <div class="chart1-container">
    <div class="chart1 page-container">
      <div class="title" v-if="props.title">{{ props.title }}</div>
      <div class="sub-title" v-if="props.subTitle">{{ props.subTitle }}</div>
      <div>
        <img class="pic" v-if="isMobile()" :height="mPicHeight" :src="mPic" />
        <img class="pic" v-if="!isMobile()" :height="picHeight" :src="pic" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.chart1-container {
  margin-top: 120px;

  .chart1 {
    > .title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
      text-align: center;
    }

    > .sub-title {
      margin-top: 20px;
      font-size: 16px;
      color: #4e4e4e;
      text-align: center;
    }

    > .pic {
      margin-top: 80px;
      width: 1200px;
      box-shadow: 0px 10px 30px 0px rgba(173, 173, 173, 0.14);
      border-radius: 14px;
    }
  }
}
// For mobile devices
@media (max-width: 767px) {
  .chart1-container {
    margin-top: 6.25rem;

    .chart1 {
      > .title {
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 1.5;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;
        font-size: 1.75rem;
        color: #4e4e4e;
        text-align: left;
        border-bottom: 0.06rem solid #e6e6e6;
        padding-bottom: 1.88rem;
      }

      > div > .pic {
        margin: 3.8rem 0;
        background-size: 40.63rem 37rem !important;
        background-color: #fff;
        background-position: center center;
        background-repeat: no-repeat;
        box-shadow: 0rem 0.63rem 1.88rem 0rem rgba(173, 173, 173, 0.14);
        border-radius: 0.88rem;
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
