<script lang="ts" setup>
const props = defineProps({
  title1: String,
  title2: String,
  items: Array<any>,
});
</script>

<template>
  <div class="list1-container">
    <div class="title1" v-if="props.title1">{{ props.title1 }}</div>
    <div class="title2" v-if="props.title2">{{ props.title2 }}</div>
    <div class="list1 page-container">
      <div class="title"></div>
      <div class="sub-title"></div>
      <div class="list">
        <div class="item" v-for="item in props.items">
          <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
          <div class="title">
            {{ item.title }}
          </div>
          <div class="content" v-if="item.content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list1-container {
  background: linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%);
  overflow: hidden;

  .title1 {
    margin-top: 120px;

    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 30px;
    color: #000000;
    line-height: 42px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }

  .title2 {
    margin: 18px auto 0;

    width: 612px;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #4E4E4E;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }

  .list1 {
    margin-top: 80px;
    width: 1090px;

    >.title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: center;
    }

    >.sub-title {
      margin-top: 20px;

      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4E4E4E;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    >.list {
      margin-top: 80px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 50px;

      .item {
        width: 330px;
        height: 380px;
        background: url(/public/images/network/Network_DDoS_card_bg.png) no-repeat top,
          #FFFFFF;
        background-size: 330px 200px !important;
        box-shadow: 0px 4px 10px 0px #F1F1F1;
        border-radius: 14px;
        border: 1px solid #E6E6E6;

        box-sizing: border-box;
        padding: 20px;

        .icon {
          // width: 80px;
          // height: 80px;
          width: 88px;
          height: 88px;
          margin: 0 auto;
        }

        .title {
          margin-top: 60px;
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