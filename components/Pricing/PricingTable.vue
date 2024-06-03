<script lang="ts" setup>
const props = defineProps({
  header: String,
  content: Array<any>,
});
</script>

<template>
  <div class="pricing-table">
    <div class="header" v-if="props.header">
      {{ props.header }}
    </div>
    <div class="content">
      <div class="content-item" v-for="item in props.content">
        <div class="content-item-top">
          <div class="left">
            <div class="title">
              {{ item.title }}
              <span class="em" v-if="item.titleEm">
                {{ item.titleEm }}
              </span>
            </div>
            <div class="sub-title">
              {{ item.subTitle }}
            </div>
            <Line top="30px" />
            <div class="content">
              {{ item.content }}
            </div>
            <div>
              <a :href="item.href" class="trail-btn" style="margin-top: 40px;">{{ item.btn }}</a>
            </div>
          </div>
          <div class="right">
            <div class="list">
              <div class="item" v-for="a in item.items">
                <div class="text">{{ a.text }}</div>
                <div class="hint">{{ a.hint }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-item-bottom-list">
          <div class="item" v-for="a in item.bottomList">
            {{ a }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pricing-table {
  margin-top: 24px;

  >.header {
    height: 54px;
    background: linear-gradient(316deg, #3475F5 0%, #12E599 100%);
    border-radius: 14px 14px 0px 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 22px;
    color: #FFFFFF;
    line-height: 30px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }

  >.content {
    display: flex;
    flex-direction: column;
    gap: 10px;

    >.content-item {
      background: linear-gradient(312deg, #E9F8FC 0%, #FFFBF0 100%);
      border-radius: 14px;
      padding: 26px 30px 26px 50px;

      &:first-child {
        border-radius: 0 0 14px 14px;
      }

      >.content-item-top {
        display: flex;
        justify-content: space-between;

        .left {
          flex: 1;

          .title {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 24px;
            color: #000000;
            line-height: 33px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            display: flex;
            align-items: center;

            .em {
              margin-left: 10px;
              width: 106px;
              height: 28px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: url(/public/images/pricing/overview/home_card_tag_bg.png);
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

          .sub-title {
            margin-top: 10px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #4E4E4E;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }

          .content {
            margin-top: 20px;

            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 16px;
            color: #000000;
            line-height: 22px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }

        .right {
          margin-left: 106px;
          width: 554px;

          .list {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;

            .item {
              width: 270px;
              height: 122px;
              background: #FFFFFF;
              border-radius: 14px;

              display: flex;
              flex-direction: column;
              justify-content: center;
              box-sizing: border-box;
              padding: 24px;

              .text {
                font-family: Mont, Mont;
                font-weight: 600;
                font-size: 30px;
                color: #000000;
                line-height: 40px;
                text-align: left;
                font-style: normal;
                text-transform: none;
                background: linear-gradient(0deg, #46CF3A 0%, #36CFBC 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              .hint {
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

      >.content-item-bottom-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        gap: 30px;
        justify-content: flex-start;

        .item {
          display: flex;
          align-items: center;

          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 14px;
          color: #000000;
          line-height: 20px;
          text-align: left;
          font-style: normal;
          text-transform: none;

          &::before {
            content: '';
            margin-right: 8px;

            width: 18px;
            height: 18px;

            background: url(/public/images/pricing/storage/home_Text_list_ic_tick.png);
          }
        }
      }
    }
  }
}
</style>