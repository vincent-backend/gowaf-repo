<template>
  <div class="DNStitleAndimg">
    <div class="page-container content-container">
      <div class="left">
        <div class="title">{{ dnsCustomer.title }}</div>
        <div class="sub-title">{{ dnsCustomer.subTitle }}</div>
        <div class="tick-list">
          <div class="tick-list-item" v-for="item in dnsCustomer.items">
            <div class="icon"></div>
            <div class="text">{{ item }}</div>
          </div>
        </div>
      </div>
      <div class="right">
        <img
          :src="dnsCustomer.contentImg"
          :style="
            obeyDevice(
              {
                width: dnsCustomer.imgw,
                height: dnsCustomer.imgh
              },
              {
                width: dnsCustomer.mimgw,
                height: dnsCustomer.mimgh
              }
            ).value
          "
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  dnsCustomer: {
    title: string;
    subTitle: string;
    contentImg: string;
    imgw: string;
    imgh: string;
    mimgw: string;
    mimgh: string;
    items: Array<string>;
  };
}>();
</script>

<style lang="less" scoped>
.DNStitleAndimg {
  margin: 120px 0;
  .content-container {
    display: flex;
    .right {
      flex-shrink: 0;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 30px;
        color: #000000;
        line-height: 42px;
        text-align: left;
        margin-bottom: 20px;
      }
      .sub-title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #4e4e4e;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .tick-list {
        display: flex;
        width: 632px;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px 35px;
        margin-top: 40px;
        .tick-list-item {
          width: calc(50% - 20px);
          display: flex;
          align-items: center;
          gap: 9px;
          .icon {
            width: 18px;
            height: 18px;
            background: url(/images/home/home_Text_list_ic_tick.png)
              no-repeat;
          }
          .text {
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
      }
    }
  }
}
@media (max-width: 767px) {
  .DNStitleAndimg {
    margin: 6.25rem 0;
    .content-container {
      display: flex;
      flex-direction: column;
      .right {
        flex-shrink: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .left {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 2.5rem;
          color: #000000;
          line-height: 3.5rem;
          text-align: left;
          margin-bottom: 1.19rem;
        }
        .sub-title {
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 1.75rem;
          color: #4e4e4e;
          line-height: 2.38rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .tick-list {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem 0;
          margin: 3.13rem 0;
          .tick-list-item {
            width: 50%;
            display: flex;
            align-items: center;
            gap: 9px;
            .icon {
              width: 1.75rem;
              height: 1.75rem;
              background: url(/images/home/home_Text_list_ic_tick.png)
                no-repeat;
            }
            .text {
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: 1.63rem;
              color: #000000;
              line-height: 2.31rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
        }
      }
    }
  }
}
</style>
