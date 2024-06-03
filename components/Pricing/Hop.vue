<template>
  <div class="hop-container">
    <div class="hop page-container">
      <div class="title">{{ $t('pricing.cdn.hop.title') }}</div>
      <div class="sub-title">{{ $t('pricing.cdn.hop.subTitle') }}</div>
      <div class="list">
        <div class="item" v-for="item in $tm('pricing.cdn.hop.list')">
          <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
          <div class="title">{{ item.title }}</div>
          <div class="sub-title">{{ item.subTitle }}</div>
          <div class="btn-container">
            <a :href="item.href" class="trail-btn">{{ item.btn }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.hop-container {
  margin-top: 120px;

  .hop {
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

    >.list {
      margin-top: 80px;
      display: flex;
      justify-content: space-around;

      >.item {
        width: 204px;
        display: flex;
        flex-direction: column;
        align-items: center;

        >.icon {
          width: 100px;
          height: 100px;
        }

        >.title {
          margin-top: 20px;

          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 20px;
          color: #000000;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }

        >.sub-title {
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

        >.btn-container {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>