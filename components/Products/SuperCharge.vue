<template>
  <div class="products-super-charge">
    <div class="products-super page-container">
      <div class="title">{{ $t('products.cdn.overview.productsSuperCharge.title') }}</div>
      <div class="sub-title">{{ $t('products.cdn.overview.productsSuperCharge.subTitle') }}</div>
      <div class="list">
        <div class="item" v-for="item in $tm('products.cdn.overview.productsSuperCharge.items')">
          <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.products-super-charge {
  margin-top: 87px;

  .products-super {
    >.title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
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
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    >.list {
      margin-top: 64px;
      display: flex;
      flex-wrap: wrap;

      >.item {
        width: 33.3%;
        box-sizing: border-box;
        height: 162px;
        padding-top: 42px;
        padding-left: 44px;
        border: 1px solid #E6E6E6;

        >.icon {
          width: 44px;
          height: 44px;
        }

        >.title {
          margin-top: 14px;

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
</style>