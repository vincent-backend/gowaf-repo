<template>
  <div class="never-hit-container">
    <div class="never-hit page-container">
      <div class="title">{{ $t('products.cdn.permaCache.neverHit.title') }}</div>
      <div class="sub-title">{{ $t('products.cdn.permaCache.neverHit.subTitle') }}</div>
      <div class="content">
        <div class="item" v-for="item in $tm('products.cdn.permaCache.neverHit.items')">
          <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>

        <div class="icon icon-1"></div>
        <div class="icon icon-2"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.never-hit-container {
  margin-top: 120px;

  .never-hit {
    width: 894px;

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

    >.content {
      margin-top: 60px;
      position: relative;
      display: flex;
      justify-content: space-between;

      >.item {
        width: 180px;

        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
          width: 80px;
          height: 80px;
        }

        .title {
          margin-top: 22px;

          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 26px;
          color: #000000;
          line-height: 35px;
          text-align: center;
          font-style: normal;
          text-transform: none;
        }

        .content {
          margin-top: 8px;

          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #4E4E4E;
          line-height: 24px;
          text-align: center;
          font-style: normal;
          text-transform: none;
        }
      }

      >.icon {
        position: absolute;

        &.icon-1 {}

        &.icon-2 {}
      }
    }
  }
}
</style>