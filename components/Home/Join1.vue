<template>
  <div class="join-1-container">
    <div class="page-container join-1">
      <div class="title">
        {{ $t('home.join1.title') }}
      </div>
      <a href="#" class="trail-btn">
        {{ $t('home.join1.btn') }}
      </a>
      <div class="sub-title">
        {{ $t('home.join1.subTitle') }}
      </div>
      <div class="pic"></div>
    </div>
    <div class="page-container info-1">
      <div class="left">
        <div class="title">
          {{ $t('home.join1.info1.title') }}
        </div>
        <div class="content">
          {{ $t('home.join1.info1.content') }}
        </div>
        <div class="list">
          <div class="item" v-for="item in i18ntext.leftList">
            <div class="icon"></div>
            <div class="text">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="list">
          <div class="item" v-for="item in i18ntext.rightList">
            <div class="left">
              <div
                class="icon"
                :style="{
                  backgroundImage: `url(/images/home/${item.icon}.png)`
                }"
              ></div>
            </div>
            <div class="right">
              <div class="title">
                {{ item.title }}
              </div>
              <div class="content">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed(() => {
  return {
    leftList: [
      t('home.join1.info1.leftList[0]'),
      t('home.join1.info1.leftList[1]'),
      'Perma-Caching',
      t('home.join1.info1.leftList[3]'),
      t('home.join1.info1.leftList[4]'),
      t('home.join1.info1.leftList[5]')
    ],
    rightList: [
      {
        icon: 'home_list_ic_design',
        title: t('home.join1.info1.rightList[0].title'),
        content: t('home.join1.info1.rightList[0].content')
      },
      {
        icon: 'home_list_ic_Server',
        title: t('home.join1.info1.rightList[1].title'),
        content: t('home.join1.info1.rightList[1].content')
      },
      {
        icon: 'home_list_ic_network',
        title: t('home.join1.info1.rightList[2].title'),
        content: t('home.join1.info1.rightList[2].content')
      },
      {
        icon: 'home_list_ic_Protection',
        title: t('home.join1.info1.rightList[3].title'),
        content: t('home.join1.info1.rightList[3].content')
      }
    ]
  };
});
</script>

<style lang="less" scoped>
.join-1-container {
  margin-top: 150px;
  overflow: hidden;
  background: url(/public/images/home/join1-bg.png) no-repeat top;
  background-size: 1920px 350px;

  .join-1 {
    position: relative;
    padding-top: 100px;

    > .title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
    }

    > .trail-btn {
      margin-top: 40px;
    }

    > .sub-title {
      margin-top: 10px;

      color: #4e4e4e;
      opacity: 0.5;
    }

    > .pic {
      position: absolute;
      width: 950px;
      height: 830px;
      background: url(/public/images/home/home_graph_rocket.png);
      left: 505px;
      top: 22px;
    }
  }

  .info-1 {
    margin-top: 150px;
    display: flex;
    position: relative;
    z-index: 3;

    > .left {
      > .title {
        width: 331px;
        font-weight: 500;
        font-size: 30px;
        line-height: 42px;
      }

      > .content {
        margin-top: 20px;

        width: 490px;
        font-size: 16px;
        color: #4e4e4e;
      }

      > .list {
        margin-top: 104px;
        display: flex;
        flex-wrap: wrap;

        > .item {
          width: 50%;
          display: flex;
          align-items: center;

          .icon {
            width: 18px;
            height: 18px;
            background: url(/public/images/home/home_Text_list_ic_tick.png)
              no-repeat;
          }

          .text {
            margin-left: 8px;

            font-weight: 500;
            line-height: 20px;
          }
        }
      }
    }

    > .right {
      padding-top: 130px;
      margin-left: 164px;

      .list {
        display: flex;
        flex-direction: column;
        gap: 36px;

        .item {
          display: flex;

          .left {
            .icon {
              width: 100px;
              height: 100px;
            }
          }

          .right {
            margin-left: 30px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            .title {
              font-weight: 500;
              font-size: 20px;
              line-height: 28px;
            }

            .content {
              font-size: 16px;
              color: #4e4e4e;
            }
          }
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .join-1-container {
    margin-top: 6.25rem;
    background-size: 46.88rem 26.13rem;

    .join-1 {
      padding-top: 4.38rem;

      > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
      }

      > .trail-btn {
        margin-top: 2.5rem;
      }

      > .sub-title {
        margin-top: 1.19rem;
      }

      > .pic {
        width: 46.88rem;
        height: 51.88rem;
        background-image: url(/public/mobile-images/home/home_graph_rocket@2x.png);
        left: 0;
        top: 25.25rem;
      }
    }

    .info-1 {
      margin-top: 27.87rem;
      flex-direction: column;

      > .left {
        > .title {
          font-size: 2.5rem;
          line-height: 3.5rem;
        }

        > .content {
          margin-top: 1.19rem;

          width: 100%;
          font-size: 1.75rem;
          line-height: 2.38rem;
        }

        > .list {
          margin-top: 3.13rem;

          > .item {
            .icon {
            }

            .text {
            }
          }
        }
      }

      > .right {
        border-top: 0.06rem solid #e6e6e6;
        padding: 0;
        padding-top: 1.88rem;
        margin: 0;
        margin-top: 1.88rem;

        .list {
          gap: 2.5rem;

          .item {
            .left {
              .icon {
                width: 9.38rem;
                height: 9.38rem;
              }
            }

            .right {
              margin-left: 1.25rem;
              justify-content: center;
              gap: 0;

              .title {
                font-size: 2.13rem;
                line-height: 3rem;
              }

              .content {
                margin-top: 0.63rem;

                font-size: 1.5rem;
                line-height: 2.19rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
