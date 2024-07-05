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
@media (max-width: 767px) {
  .protect-your-videos-container {
    margin-top: 6rem;
    padding: 0 1.88rem;

    .protect-your-videos {
      width: 100%;

      > .title {
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;
        font-size: 1.75rem;
        color: #4e4e4e;
        text-align: left;
      }

      > .content {
        margin-top: 2.94rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, 50%);

        > .item {
          width: 100%;
          box-sizing: border-box;
          padding: 1.25rem;
          border: 1px solid #E6E6E6;
          &:last-child {
            grid-column: 1/4;
          }

          > .head {
            display: flex;
            align-items: center;

            .icon {
              width: 4.13rem;
              height: 4.13rem;
            }

            .tip {
              margin-left: 1.88rem;
              width: 9.38rem;
              height: 1.88rem;
              background: url('/public/mobile-images/products/Stream/MediaCage/home_card_tag_bg@2x.png')
                100% 100%;
              // border-radius: 25px;
              display: flex;
              font-size: 1.25rem;
              white-space: nowrap;
              align-items: center;
              justify-content: center;
              color: #ffffff;
              line-height: 1.88rem;
            }
          }

          > .title {
            margin-top: 1.63rem;
            font-weight: 500;
            font-size: 2.13rem;
            line-height: 3rem;
          }

          > .content {
            margin-top: 0.25rem;
            font-size: 1.5rem;
            color: #4e4e4e;
            line-height: 2.19rem;
          }
        }
      }
    }
  }
}
</style>
