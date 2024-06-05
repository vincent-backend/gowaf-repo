<script lang="ts" setup>
defineProps<{
  title1: string;
  title2: string;
  items: {
    icon: string,
    title: string,
    content?: string,
  }[];
}>();
</script>

<template>
  <div class="list1-container">
    <div class="title1" v-if="title1">{{ title1 }}</div>
    <div class="title2" v-if="title2">{{ title2 }}</div>
    <div class="list1 page-container">
      <div class="title"></div>
      <div class="sub-title"></div>
      <div class="list">
        <div class="item" v-for="item in items">
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


    font-weight: 500;
    font-size: 30px;

    line-height: 42px;
    text-align: center;


  }

  .title2 {
    margin: 18px auto 0;

    width: 612px;


    font-size: 16px;
    color: #4E4E4E;

    text-align: center;


  }

  .list1 {
    margin-top: 80px;
    width: 1090px;

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

          font-weight: 500;
          font-size: 20px;

          line-height: 28px;



        }

        .content {
          margin-top: 10px;


          font-size: 16px;
          color: #4E4E4E;




        }
      }
    }
  }
}
</style>