<template>
  <div class="stay-protect-always-container">
    <div class="stay-protect-always page-container">
      <div class="left">
        <div class="title">{{ $t('network.ddos.stayProtectAlways.title') }}</div>
        <div class="sub-title">{{ $t('network.ddos.stayProtectAlways.subTitle') }}</div>
        <div class="btn-container">
          <a href="#" class="trail-btn" style="margin-top: 40px;">{{ $t('network.ddos.stayProtectAlways.btn') }}</a>
        </div>
      </div>
      <div class="right">
        <div class="pic"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.stay-protect-always-container {
  margin-top: 120px;
  background: linear-gradient(180deg, #E6EDFC 0%, #FFFFFF 100%);
  height: 330px;

  .stay-protect-always {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      .title {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 30px;
        color: #000000;
        line-height: 42px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      .sub-title {
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

      .btn-container {}
    }

    .right {
      .pic {
        width: 238px;
        height: 242px;
        background: url(/public/images/network/ddos/Network_DDoS_banner_graph_2.png);
      }
    }
  }
}
</style>