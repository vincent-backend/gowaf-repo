<script lang="ts" setup>
const props = defineProps({
  title: String,
  subTitle: String,
  items: Array<any>,
});
</script>

<template>
  <div class="always-safe-container">
    <div class="always-safe page-container">
      <div class="title" v-if="props.title">{{ props.title }}</div>
      <div class="sub-title" v-if="props.subTitle">{{ props.subTitle }}</div>
      <div class="content-container">
        <div class="row" v-for="row in props.items">
          <div class="content-item" v-for="item in row">
            <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.always-safe-container {
  margin-top: 80px;

  .always-safe {
    >.title {

      font-weight: 500;
      font-size: 30px;

      line-height: 42px;



    }

    >.sub-title {
      margin-top: 20px;



      font-size: 16px;
      color: #4E4E4E;




    }

    >.content-container {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      height: 535px;
      gap: 20px;
      background: url(/public/images/network/ddos/Network_DDoS_graph_2.png) no-repeat bottom center;

      >.row {
        display: flex;
        justify-content: space-between;

        .content-item {
          width: 350px;
          min-height: 210px;
          background: #FFFFFF;
          box-shadow: 0px 4px 10px 0px #F1F1F1;
          border-radius: 14px;
          border: 1px solid #E6E6E6;
          box-sizing: border-box;
          padding: 20px;

          .icon {
            width: 68px;
            height: 68px;
          }

          .title {
            margin-top: 10px;


            font-weight: 500;
            font-size: 24px;

            line-height: 33px;



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
}
</style>