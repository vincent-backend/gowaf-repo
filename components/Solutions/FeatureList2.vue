<script lang="ts" setup>
const props = defineProps({
  title: String,
  subTitle: String,
  items: Array<any>,
});
</script>

<template>
  <div class="feature-list-container">
    <div class="feature-list page-container">
      <div class="title" v-if="props.title">{{ props.title }}</div>
      <div class="sub-title" v-if="props.subTitle">{{ props.subTitle }}</div>
      <div class="list">
        <div class="item" v-for="item in props.items">
          <div class="header">
            <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
            <div class="tip" v-if="item.tip">{{ item.tip }}</div>
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.feature-list-container {
  margin-top: 80px;

  .feature-list {

    >.title {

      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;


    }

    >.sub-title {
      margin-top: 18px;



      font-size: 16px;
      color: #4E4E4E;

      text-align: center;


    }

    >.list {
      margin-top: 60px;
      display: flex;
      justify-content: space-between;

      .item {
        width: 340px;

        .header {
          display: flex;
          align-items: center;

          .icon {
            width: 44px;
            height: 44px;
          }

          .tip {
            margin-left: 16px;

            padding: 6px 12px;
            background: linear-gradient(132deg, #46CF3A 0%, #36CFBC 100%);
            border-radius: 25px;




            color: #FFFFFF;
            line-height: 20px;



          }
        }

        .title {
          margin-top: 20px;


          font-weight: 500;
          font-size: 16px;

          line-height: 22px;



        }

        .content {
          margin-top: 14px;




          color: #4E4E4E;
          line-height: 20px;



        }
      }
    }
  }
}
</style>