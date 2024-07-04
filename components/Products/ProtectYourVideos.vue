<template>
  <div class="protect-your-videos-container">
    <div class="protect-your-videos page-container">
      <div class="title">
        {{ $t('products.stream.mediaCage.protectYourVideos.title') }}
      </div>
      <div class="sub-title">
        {{ $t('products.stream.mediaCage.protectYourVideos.subTitle') }}
      </div>
      <div class="content">
        <div
          class="item"
          v-for="item in $tm(
            'products.stream.mediaCage.protectYourVideos.items'
          )"
        >
          <div class="head">
            <div
              class="icon"
              :style="{ backgroundImage: `url(${item.icon})` }"
            ></div>
            <div class="tip" v-if="item.tip">{{ item.tip }}</div>
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.protect-your-videos-container {
  margin-top: 120px;

  .protect-your-videos {
    width: 1000px;

    > .title {
      font-weight: 500;
      font-size: 30px;

      line-height: 42px;
      text-align: center;
    }

    > .sub-title {
      margin-top: 18px;

      font-size: 16px;
      color: #4e4e4e;

      text-align: center;
    }

    > .content {
      margin-top: 60px;
      display: flex;
      justify-content: space-between;

      > .item {
        width: 260px;

        > .head {
          display: flex;
          align-items: center;

          .icon {
            width: 44px;
            height: 44px;
          }

          .tip {
            margin-left: 16px;

            width: 126px;
            height: 31px;
            background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
            border-radius: 25px;

            display: flex;
            align-items: center;
            justify-content: center;

            color: #ffffff;
            line-height: 20px;
          }
        }

        > .title {
          margin-top: 20px;

          font-weight: 500;
          font-size: 16px;

          line-height: 22px;
        }

        > .content {
          margin-top: 14px;

          color: #4e4e4e;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
