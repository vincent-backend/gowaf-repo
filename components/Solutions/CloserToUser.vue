<script lang="ts" setup>
const props = defineProps({
  title: String,
  subTitle: String,
});
</script>

<template>
  <div class="closer-to-user-container">
    <div class="closer-to-user page-container">
      <div class="title" v-if="props.title">{{ props.title }}</div>
      <div class="sub-title" v-if="props.subTitle">{{ props.subTitle }}</div>
      <div class="list">
        <div class="item" :class="[`item-${index}`]"
          v-for="item, index in $tm('solutions.websiteAcceleration.closerToUser.items')">
          <div class="header">{{ item.header }}</div>
          <div class="head">
            <div class="icon-1" :style="{ backgroundImage: `url(${item.icon1})` }"></div>
            <div class="time-container">
              <div class="time">{{ item.number }}</div>
              <div class="right">
                <div class="unit">{{ item.unit }}</div>
                <div class="label">{{ item.label }}</div>
              </div>
            </div>
            <div class="icon-2" :style="{ backgroundImage: `url(${item.icon2})` }"></div>
          </div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.closer-to-user-container {
  margin-top: 120px;

  .closer-to-user {
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

    >.list {
      margin-top: 80px;

      display: flex;
      gap: 20px;

      background: #FFFFFF;
      box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
      border-radius: 24px;

      box-sizing: border-box;
      padding: 20px;

      >.item {
        height: 360px;
        background: linear-gradient(312deg, #F6F6F6 0%, #FAFAFA 100%);
        border-radius: 14px;
        box-sizing: border-box;
        position: relative;
        padding: 20px;
        padding-top: 74px;

        .header {
          position: absolute;
          height: 54px;
          width: 100%;
          left: 0;
          top: 0;
          border-radius: 14px 14px 0px 0px;

          display: flex;
          align-items: center;
          justify-content: center;


          font-weight: 500;
          font-size: 22px;
          color: #FFFFFF;
          line-height: 30px;



        }

        .head {
          width: 530px;
          height: 122px;
          background: #FFFFFF;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          align-items: center;

          .icon-1 {
            margin-left: 14px;
            width: 60px;
            height: 60px;
          }

          .time-container {
            margin-left: 16px;
            flex: 1;
            display: flex;
            align-items: center;

            .time {
              font-family: Mont, Mont;
              font-weight: 600;
              font-size: 48px;

              line-height: 64px;



            }

            .right {
              margin-left: 15px;
              display: flex;
              flex-direction: column;
              justify-content: center;

              .unit {

                font-weight: 500;
                font-size: 24px;

                line-height: 33px;



              }

              .label {


                font-size: 16px;
                color: #4E4E4E;




              }
            }
          }

          .icon-2 {
            width: 144px;
            height: 122px;
          }
        }

        .content {
          margin-top: 20px;
          padding-right: 30px;



          font-size: 16px;
          color: #4E4E4E;




        }

        &.item-0 {
          background: linear-gradient(312deg, #F6F6F6 0%, #FAFAFA 100%);

          .header {
            background: #292929;
          }
        }

        &.item-1 {
          background: linear-gradient(312deg, #E9F8FC 0%, #FFFBF0 100%);

          .header {
            background: linear-gradient(316deg, #3475F5 0%, #12E599 100%);
          }
        }
      }
    }
  }
}
</style>