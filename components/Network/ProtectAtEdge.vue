<template>
  <div class="protect-at-edge-container">
    <div class="protect-at-edge page-container">
      <div class="title">{{ $t('network.ddos.protectAtEdge.title') }}</div>
      <div class="sub-title">{{ $t('network.ddos.protectAtEdge.subTitle') }}</div>
      <div class="pic"></div>
      <div class="features">
        <div class="item" v-for="item in $tm('network.ddos.protectAtEdge.items')">
          <span class="icon"></span>
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.protect-at-edge-container {
  margin-top: 80px;

  .protect-at-edge {
    >.title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    >.sub-title {
      margin-top: 20px;

      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4E4E4E;
      line-height: 24px;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    >.pic {
      margin: 80px auto 0;

      width: 1102px;
      height: 368px;

      background: url(/public/images/network/ddos/Network_DDoS_flow.png) no-repeat;
    }

    >.features {
      margin-top: 80px;
      display: flex;
      justify-content: center;
      gap: 30px;

      .item {
        display: flex;
        align-items: center;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 16px;
        color: #000000;
        line-height: 22px;
        text-align: left;
        font-style: normal;
        text-transform: none;

        .icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;

          background: linear-gradient(147deg, #F9C22F 0%, #FA6E4A 100%);
          border-radius: 12px;
          margin-right: 10px;

          &::before {
            content: '';
            width: 14px;
            height: 14px;

            background: url(/public/images/network/ddos/home_Text_list_ic_tick.png);
          }
        }
      }
    }
  }
}
</style>