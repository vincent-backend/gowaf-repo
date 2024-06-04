<template>
  <div class="join-1-container">
    <div class="page-container join-1">
      <div class="title">
        {{ $t('home.join1.title') }}
      </div>
      <a href="#" class="trail-btn" style="margin-top: 40px;">
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
          <div class="item" v-for="item in $tm('home.join1.info1.leftList')">
            <div class="icon"></div>
            <div class="text">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="list">
          <div class="item" v-for="item in $tm('home.join1.info1.rightList')">
            <div class="left">
              <div class="icon" :style="{
          backgroundImage: `url(/images/home/${item.icon}.png)`,
        }"></div>
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

<style lang="less" scoped>
.join-1-container {
  margin-top: 150px;

  background: url(/public/images/home/join1-bg.png) no-repeat top;
  background-size: 1920px 350px;

  .join-1 {
    position: relative;
    padding-top: 100px;

    .title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
    }

    .sub-title {
      margin-top: 10px;

      color: #4E4E4E;
      opacity: .5;
    }

    .pic {
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

    >.left {
      >.title {
        width: 331px;
        font-weight: 500;
        font-size: 30px;
        line-height: 42px;
      }

      >.content {
        margin-top: 20px;

        width: 490px;
        font-size: 16px;
        color: #4E4E4E;
      }

      >.list {
        margin-top: 104px;
        display: flex;
        flex-wrap: wrap;

        >.item {
          width: 50%;
          display: flex;
          align-items: center;

          .icon {
            width: 18px;
            height: 18px;
            background: url(/public/images/home/home_Text_list_ic_tick.png) no-repeat;
          }

          .text {
            margin-left: 8px;

            font-weight: 500;
            line-height: 20px;
          }
        }
      }
    }

    >.right {
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
              background-size: 100%;
              background-repeat: no-repeat;
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
              color: #4E4E4E;
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
    .join-1 {
      .title {}

      .sub-title {}

      .pic {}
    }

    .info-1 {
      >.left {
        >.title {}

        >.content {}

        >.list {
          >.item {
            .icon {}

            .text {}
          }
        }
      }

      >.right {
        .list {
          .item {
            .left {
              .icon {}
            }

            .right {
              .title {}

              .content {}
            }
          }
        }
      }
    }
  }

}
</style>