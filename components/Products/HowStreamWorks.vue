<template>
  <div class="how-stream-works-container">
    <div class="how-stream-works page-container">
      <div class="bg"></div>
      <div class="content">
        <div class="title">
          {{ $t('products.stream.overview.howStreamWorks.title') }}
        </div>
        <div class="sub-title">
          {{ $t('products.stream.overview.howStreamWorks.subTitle') }}
        </div>
        <div class="list">
          <div
            class="item"
            v-for="item in $tm('products.stream.overview.howStreamWorks.list')"
          >
            <div class="title">
              <i class="icon"></i>
              {{ item.title }}
            </div>
            <div class="works-items">
              <div
                class="item"
                :class="{ block: item2.block }"
                v-for="item2 in item.items"
              >
                <div class="title">{{ item2.title }}</div>
                <div class="inner-list">
                  <div class="item" v-for="item3 in item2.items">
                    {{ item3 }}
                  </div>
                </div>
              </div>
            </div>
            <div class="sub-list-container" v-if="item.subList">
              <div class="title">{{ item.subList.title }}</div>
              <div class="works-items">
                <div
                  class="item"
                  :class="{ block: item2.block }"
                  v-for="item2 in item.subList.items"
                >
                  <div class="title">{{ item2.title }}</div>
                  <div class="inner-list">
                    <div class="item" v-for="item3 in item2.items">
                      {{ item3 }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.how-stream-works-container {
  margin-top: 120px;

  .how-stream-works {
    padding-top: 80px;
    position: relative;

    > .bg {
      position: absolute;
      left: 50%;
      top: 0;
      margin-left: -860px;
      width: 1720px;
      height: 659px;
      background: linear-gradient(180deg, #e6edfc 0%, #fafafa 100%);
      border-radius: 60px;
    }

    > .content {
      position: relative;
      z-index: 2;

      > .title {
        font-weight: 500;
        font-size: 30px;

        line-height: 42px;
        text-align: center;
      }

      > .sub-title {
        margin-top: 20px;

        font-size: 16px;
        color: #4e4e4e;

        text-align: center;
      }

      > .list {
        > .item {
          margin-top: 40px;

          background: #ffffff;
          box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          box-sizing: border-box;
          padding: 36px;

          > .title {
            display: flex;
            align-items: center;

            i {
              margin-right: 12px;
              width: 44px;
              height: 44px;
              background: url(/public/images/products/stream/overview/stream_overview_ic_media@2x.png);
            }
          }

          .works-items {
            margin-top: 24px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 20px 0;

            > .item {
              background-color: fade(#e6edfc, 50%);
              border-radius: 8px;
              box-sizing: border-box;
              padding: 20px 20px 32px 20px;

              > .title {
                font-weight: 500;
                font-size: 20px;

                line-height: 28px;
              }

              > .inner-list {
                margin-top: 12px;
                display: flex;
                justify-content: flex-start;
                gap: 20px;

                > .item {
                  width: 164px;
                  height: 44px;

                  background: #ffffff;
                  border-radius: 25px;

                  font-size: 16px;
                  color: #4e4e4e;

                  text-align: center;

                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }

              width: 49%;

              &.block {
                width: 100%;
              }
            }
          }

          > .sub-list-container {
            margin-top: 24px;
            border-radius: 8px;
            border: 2px solid #46cf3a;
            padding: 20px;

            > .title {
              font-weight: 500;
              font-size: 20px;
              color: #d8d8d8;
              line-height: 28px;

              background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }
    }
  }
}
</style>
