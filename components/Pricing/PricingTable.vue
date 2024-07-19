<script lang="ts" setup>
defineProps<{
  header?: string;
  content: {
    title: string;
    titleEm?: string;
    subTitle: string;
    content: string;
    btn: string;
    href: string;
    items: {
      text: string;
      hint: string;
    }[];
    bottomList: string[];
  }[];
}>();
</script>

<template>
  <div class="pricing-table">
    <div class="header" v-if="header">{{ header }}</div>
    <div class="content">
      <div class="content-item" v-for="item in content">
        <div class="content-item-top">
          <div class="left">
            <div class="title">
              {{ item.title }}
              <span class="em" v-if="item.titleEm">
                {{ item.titleEm }}
              </span>
            </div>
            <div class="sub-title">
              {{ item.subTitle }}
            </div>
            <Line top="30px" m-top="1.88rem" />
            <div class="content">
              {{ item.content }}
            </div>
            <div class="btn-container">
              <a :href="item.href" class="trail-btn">{{ item.btn }}</a>
            </div>
          </div>
          <div class="right">
            <div class="list">
              <div class="item" v-for="a in item.items">
                <div class="text">{{ a.text }}</div>
                <div class="hint">{{ a.hint }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-item-bottom-list">
          <div class="item" v-for="a in item.bottomList">
            <span>{{ a }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pricing-table {
  margin-top: 24px;

  > .header {
    height: 54px;
    background: linear-gradient(316deg, #3475f5 0%, #12e599 100%);
    border-radius: 14px 14px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 22px;
    color: #ffffff;
    line-height: 30px;
  }

  > .content {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > .content-item {
      background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);
      border-radius: 14px;
      padding: 26px 30px 26px 50px;

      &:first-child {
        border-radius: 0 0 14px 14px;
      }

      > .content-item-top {
        display: flex;
        justify-content: space-between;

        .left {
          flex: 1;

          .title {
            font-weight: 500;
            font-size: 24px;
            line-height: 33px;
            display: flex;
            align-items: center;

            .em {
              margin-left: 10px;
              width: 106px;
              height: 28px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: url(/public/images/pricing/overview/home_card_tag_bg.png);
              font-family: PingFang-SC, PingFang-SC;
              font-weight: bold;
              font-size: 18px;
              color: #ffffff;
              line-height: 25px;
            }
          }

          .sub-title {
            margin-top: 10px;

            color: #4e4e4e;
          }

          .content {
            margin-top: 20px;

            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
          }

          .btn-container {
            margin-top: 40px;
          }
        }

        .right {
          margin-left: 106px;
          width: 554px;

          .list {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;

            .item {
              width: 270px;
              height: 122px;
              background: #ffffff;
              border-radius: 14px;

              display: flex;
              flex-direction: column;
              justify-content: center;
              box-sizing: border-box;
              padding: 24px;

              .text {
                font-family: Mont, Mont;
                font-weight: 600;
                font-size: 30px;
                line-height: 40px;
                background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              .hint {
                margin-top: 10px;

                font-size: 16px;
                color: #4e4e4e;
              }
            }
          }
        }
      }

      > .content-item-bottom-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        gap: 30px;
        justify-content: flex-start;

        .item {
          display: flex;
          align-items: center;
          font-weight: 500;
          line-height: 20px;

          &::before {
            content: '';
            margin-right: 8px;

            width: 18px;
            height: 18px;
            background-image: url(/public/images/pricing/storage/home_Text_list_ic_tick.png);
          }
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .pricing-table {
    margin-top: 1.88rem;

    > .header {
      height: 4.13rem;

      font-size: 2rem;
      line-height: 2.81rem;
    }

    > .content {
      gap: 1.25rem;

      > .content-item {
        border-radius: 0.88rem;
        padding: 1.88rem 1.25rem 1.25rem;

        &:first-child {
          border-radius: 0 0 0.88rem 0.88rem;
        }

        > .content-item-top {
          flex-direction: column;
          justify-content: flex-start;

          .left {
            flex: auto;

            .title {
              font-size: 2.13rem;
              line-height: 3rem;

              .em {
                margin-left: 0.63rem;
                width: 7rem;
                height: 1.88rem;
                background: url(/public/mobile-images/pricing/overview/home_card_tag_bg@2x.png);
                font-size: 1.25rem;
                line-height: 1.75rem;
              }
            }

            .sub-title {
              margin-top: 0.44rem;
            }

            .content {
              margin-top: 1rem;

              font-size: 1.63rem;
              line-height: 2.31rem;
            }

            .btn-container {
              margin-top: 1rem;
            }
          }

          .right {
            width: auto;
            margin-top: 2.5rem;
            margin-left: 0;

            .list {
              justify-content: space-between;
              gap: 0.63rem 0;

              .item {
                width: 50%;
                height: 8.63rem;

                .text {
                  white-space: nowrap;
                  font-size: 2.5rem;
                  line-height: 3.31rem;
                }

                .hint {
                  margin-top: 0.44rem;

                  font-size: 1.38rem;
                  line-height: 1.88rem;
                }
              }
            }
          }
        }

        > .content-item-bottom-list {
          margin-top: 1.69rem;
          flex-direction: column;
          gap: 1.25rem;

          .item {
            font-size: 1.63rem;
            line-height: 2.31rem;
            word-break: keep-all;

            &::before {
              width: 1.75rem;
              height: 1.75rem;

              background-size: 1.75rem 1.75rem;
            }

            span {
              flex: 1;
            }
          }
        }
      }
    }
  }
}
</style>
