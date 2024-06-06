<template>
  <div class="stay-protect-always-container">
    <div class="stay-protect-always page-container">
      <div class="left">
        <div class="title">{{ $t('network.ddos.stayProtectAlways.title') }}</div>
        <div class="sub-title">{{ $t('network.ddos.stayProtectAlways.subTitle') }}</div>
        <div class="btn-container">
          <a href="#" class="trail-btn">{{ $t('network.ddos.stayProtectAlways.btn') }}</a>
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
        font-weight: 500;
        font-size: 30px;
        line-height: 42px;
      }

      .sub-title {
        margin-top: 10px;

        font-size: 16px;
        color: #4E4E4E;
      }

      .btn-container {
        margin-top: 40px;
      }
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

// For mobile devices
@media (max-width: 767px) {
  .stay-protect-always-container {
    .stay-protect-always {
      .left {
        .title {}

        .sub-title {}

        .btn-container {}
      }

      .right {
        .pic {}
      }
    }
  }
}
</style>