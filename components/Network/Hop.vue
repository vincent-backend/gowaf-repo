<template>
  <div class="hop-container">
    <div class="hop page-container">
      <div class="left">
        <div class="title">
          {{ $t('network.overview.hop.title') }}
        </div>
        <div class="sub-title">
          {{ $t('network.overview.hop.subTitle') }}
        </div>
        <div>
          <a href="#" class="trail-btn" style="margin-top: 40px;">
            {{ $t('network.overview.hop.btn') }}
          </a>
        </div>
      </div>
      <div class="right">
        <div class="pic"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.hop-container {
  margin-top: 80px;

  height: 330px;
  background: linear-gradient(180deg, #E6EDFC 0%, #FFFFFF 100%);

  .hop {
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
    }

    .right {
      .pic {
        width: 300px;
        height: 300px;
        background: url(/public/images/network/Network_Overview_banner_graph.png);
      }
    }
  }
}
</style>