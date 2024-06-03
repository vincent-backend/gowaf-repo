<script lang="ts" setup>
const props = defineProps({
  title: String,
  subTitle: String,
  tabs: Array<any>,
});

// tabs
const curTab = ref(0);
</script>

<template>
  <div class="super-charge-container">
    <div class="page-container super-charge">
      <div class="title">
        {{ props.title }}
      </div>
      <div class="sub-title">
        {{ props.subTitle }}
      </div>
      <Line top="40px" />

      <CommonTabs :tabs="props.tabs" v-model:cur-tab="curTab" />
      <template v-for="tab, index in tabs">
        <div class="tabs-content" v-if="index === curTab">
          <div class="left">
            <div class="icon" :style="{
          backgroundImage: `url(${tab.icon})`,
          width: tab.iconWidth,
          height: tab.iconHeight,
        }"></div>
          </div>
          <div class="right">
            <div class="title">
              {{ tab.title }}
              <span class="title-tip" v-if="tab.titleTip">{{ tab.titleTip }}</span>
            </div>
            <div class="content">
              <p v-for="text in tab.content.split(/\r\n|\n/)">
                {{ text }}
              </p>
            </div>
            <a href="#" class="trail-btn" style="margin-top: 40px;" v-if="tab.btn">{{ tab.btn }}</a>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.super-charge-container {
  margin-top: 156px;

  .super-charge {
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
      text-align: center;
    }

    >.tabs-content {
      margin: 98px auto 0;

      width: 974px;
      display: flex;
      justify-content: space-between;

      .left {
        .icon {
          background-repeat: no-repeat;
          background-position: center;
          object-fit: contain;
        }
      }

      .right {
        margin-left: 112px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        .title {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 20px;
          color: #000000;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;

          display: flex;
          align-items: center;

          .title-tip {
            margin-left: 10px;

            width: 138px;
            height: 28px;
            background-image: url(/public/images/solutions/security-cdn/home_card_tag_bg@2x.png);
            display: flex;
            align-items: center;
            justify-content: center;

            font-family: PingFang-SC, PingFang-SC;
            font-weight: bold;
            font-size: 18px;
            color: #FFFFFF;
            line-height: 25px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }

        .content {
          margin-top: 20px;

          width: 530px;
          display: flex;
          flex-direction: column;
          gap: 10px;

          p {
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
}
</style>