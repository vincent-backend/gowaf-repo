<template>
  <div class="pricing-map-container">
    <div class="pricing-map page-container">
      <div class="title">{{ $t('pricing.storage.map.title') }}</div>
      <div class="sub-title">{{ $t('pricing.storage.map.subTitle') }}</div>
      <div class="map-container">
        <div class="map">
          <div class="dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pricing-map-container {
  margin-top: 120px;

  .pricing-map {
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

    >.map-container {
      margin-top: 40px;

      width: 1200px;
      height: 589px;
      background: #FFFFFF;
      box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
      border-radius: 24px;

      display: flex;
      align-items: center;
      justify-content: center;

      .map {
        width: 896px;
        height: 512px;
        background: url(/public/images/pricing/storage/home_map.png);
        position: relative;

        .dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(90deg, #46CF3A 0%, #36CFBC 100%);
          border: 4px solid rgba(65, 207, 99, 0.18);
          border-radius: 50%;

          position: absolute;

          left: 300px;
          top: 100px;
        }
      }
    }
  }
}
</style>