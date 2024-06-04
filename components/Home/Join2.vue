<template>
  <div class="join2-container">
    <div class="page-container join2">
      <div class="title">
        {{ $t('home.join2.title') }}
      </div>
      <div class="sub-title">
        <span class="s-1">{{ $t('home.join2.subTitle1') }}</span>
        <span class="s-2"></span>
        <span class="s-3">{{ $t('home.join2.subTitle3') }}</span>
        <span class="s-4">{{ $t('home.join2.subTitle4') }}</span>
        <a href="#" class="s-5">{{ $t('home.join2.subTitle5') }}</a>
        <span class="s-6">{{ $t('home.join2.subTitle6') }}</span>
      </div>
      <div class="list">
        <div class="item" v-for="item in $tm('home.join2.list')">
          <div class="person">
            <div class="left">
              <div class="avatar" :style="{
          backgroundImage: `url(/images/home/${item.avatar}.png)`,
        }"></div>
            </div>
            <div class="right">
              <div class="name">
                {{ item.name }}
              </div>
              <div class="date">
                {{ item.date }}
              </div>
            </div>
          </div>
          <div class="rank">
            <div class="rank-item"></div>
            <div class="rank-item"></div>
            <div class="rank-item"></div>
            <div class="rank-item"></div>
            <div class="rank-item"></div>
          </div>
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
</template>

<style lang="less" scoped>
.join2-container {
  margin-top: 150px;

  .join2 {
    >.title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
      text-align: center;
    }

    >.sub-title {
      margin-top: 20px;

      font-size: 16px;
      color: #4E4E4E;
      display: flex;
      align-items: center;
      justify-content: center;

      .s-1 {}

      .s-2 {
        display: block;
        width: 20px;
        height: 20px;
        background: url(/public/images/home/home_title_star.png) no-repeat;
        margin: 0 10px;
      }

      .s-3 {
        color: #FA9B3B;
        margin-right: 10px;
      }

      .s-4 {}

      .s-5 {
        color: #0EBF6A;
        text-decoration: underline;
        margin: 0 10px;
      }

      .s-6 {}
    }

    >.list {
      margin-top: 60px;

      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      >.item {
        box-sizing: border-box;
        width: 386px;
        height: 410px;
        padding: 30px;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px 0px #F1F1F1;
        border-radius: 14px;
        border: 1px solid #E6E6E6;
        display: flex;
        flex-direction: column;

        .person {
          display: flex;

          .left {
            .avatar {
              width: 60px;
              height: 60px;
            }
          }

          .right {
            margin-left: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .name {
              font-weight: 500;
              font-size: 20px;
              line-height: 28px;
            }

            .date {
              font-size: 16px;
              color: #4E4E4E;
            }
          }
        }

        .rank {
          margin-top: 20px;
          display: flex;
          justify-content: flex-start;
          gap: 8px;

          .rank-item {
            width: 28px;
            height: 28px;
            border-radius: 4px;
            background: rgba(255, 252, 235, 0.7);
            box-shadow: inset 0px 1px 0px 0px #FFFFFF;
            border-radius: 4px;
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;

            &::before {
              content: '';
              width: 16px;
              height: 16px;
              background: url(/public/images/home/home_title_star.png) no-repeat;
              background-size: 100%;
            }
          }
        }

        .title {
          margin-top: 20px;

          font-weight: 500;
          font-size: 24px;
          line-height: 33px;
        }

        .content {
          margin-top: 10px;

          font-size: 16px;
          color: #4E4E4E;
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .join2-container {
    margin-top: 6.25rem;

    .join2 {
      >.title {
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      >.sub-title {
        margin-top: 1rem;

        display: block;

        .s-1 {}

        .s-2 {
          display: inline-block;
          width: 1.88rem;
          height: 1.88rem;
          margin: 0.5rem;
          position: relative;
          top: 0.7rem;
        }

        .s-3 {}

        .s-4 {}

        .s-5 {}

        .s-6 {}
      }

      >.list {
        margin-top: 3.13rem;
        gap: 1.25rem;

        >.item {
          width: 100%;
          height: auto;
          padding: 1.88rem;

          .person {
            .left {
              .avatar {
                width: 5.63rem;
                height: 5.63rem;
              }
            }

            .right {
              margin-left: 1.25rem;

              .name {
                font-size: 1.88rem;
                line-height: 2.63rem;
              }

              .date {
                font-size: 1.38rem;
                line-height: 1.88rem;
              }
            }
          }

          .rank {
            margin-top: 2rem;
            gap: 0.75rem;

            .rank-item {
              width: 2.63rem;
              height: 2.63rem;

              &::before {}
            }
          }

          .title {
            margin-top: 1.25rem;

            font-size: 2.25rem;
            line-height: 3.13rem;
          }

          .content {
            margin-top: 0.63rem;

            font-size: 1.63rem;
            line-height: 2.38rem;
          }
        }
      }
    }
  }
}
</style>