<script lang="ts" setup>
const props = defineProps({
  title: String,
  subTitle: String,
  btn: String,
  href: String,
  pic: String,
  picWidth: String,
  picHeight: String,
});
</script>

<template>
  <div class="ad1-container">
    <div class="ad1 page-container">
      <div class="left">
        <div class="title">{{ props.title }}</div>
        <div class="sub-title">{{ props.subTitle }}</div>
        <div class="btn-container">
          <a :href="props.href" class="trail-btn" v-if="props.btn">{{ props.btn }}</a>
        </div>
      </div>
      <div class="right">
        <div class="pic" :style="{
          backgroundImage: `url(${props.pic})`,
          width: props.picWidth,
          height: props.picHeight,
        }"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ad1-container {
  margin-top: 120px;

  height: 330px;
  background: linear-gradient(180deg, #E6EDFC 0%, #FFFFFF 100%);

  .ad1 {
    width: 1090px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >.left {
      .title {

        font-weight: 500;
        font-size: 30px;

        line-height: 42px;



      }

      .sub-title {
        margin-top: 10px;



        font-size: 16px;
        color: #4E4E4E;




      }

      .btn-container {
        margin-top: 40px;
      }
    }

    >.right {
      .pic {}
    }
  }
}
</style>