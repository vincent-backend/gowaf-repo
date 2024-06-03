<template>
  <div class="perfect-solution-container">
    <div class="perfect-solution page-container">
      <div class="left">
        <div class="title">{{ $t('products.stream.mediaCage.perfectSolution.title') }}</div>
        <div class="content">{{ $t('products.stream.mediaCage.perfectSolution.content') }}</div>
        <div class="list">
          <div class="item" v-for="item in $tm('products.stream.mediaCage.perfectSolution.items')">
            <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
            <div class="right">
              <div class="title">{{ item.title }}</div>
              <div class="content">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="pic"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.perfect-solution-container {
  margin-top: 120px;

  .perfect-solution {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    >.left {
      >.title {
        width: 249px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 30px;
        color: #000000;
        line-height: 42px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      >.content {
        margin-top: 18px;

        width: 569px;
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
        margin-top: 50px;

        display: flex;
        flex-direction: column;
        gap: 52px;

        >.item {
          display: flex;

          >.icon {
            width: 60px;
            height: 60px;
          }

          >.right {
            margin-left: 26px;

            >.title {
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: 16px;
              color: #000000;
              line-height: 22px;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }

            >.content {
              margin-top: 6px;

              width: 395px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 14px;
              color: #4E4E4E;
              line-height: 20px;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
        }
      }
    }

    >.right {
      padding-top: 101px;

      >.pic {
        width: 460px;
        height: 480px;
        background-image: url(/public/images/products/stream/media-cage/media_perfect_img@2x.png);
      }
    }
  }
}
</style>