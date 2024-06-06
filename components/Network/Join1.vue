<script lang="ts" setup>
withDefaults(defineProps<{
  title: string;
  person: {
    name: string;
    title: string;
    content: string;
  },
  avatar: string;
  mAvatar: string;
  showScores?: boolean;
}>(), {
  showScores: true,
});
</script>

<template>
  <div class="join1-container" :class="{ 'no-ranks': !showScores }">
    <div class="join1 page-container">
      <div class="title">{{ title }}</div>
      <div class="sub-title">
        <span class="s0">{{ $tm('network.overview.join1.subTitle')[0] }}</span>
        <span class="s1"></span>
        <span class="s2">{{ $tm('network.overview.join1.subTitle')[2] }}</span>
        <span class="s3">{{ $tm('network.overview.join1.subTitle')[3] }}</span>
        <a class="s4">{{ $tm('network.overview.join1.subTitle')[4] }}</a>
        <span class="s5">{{ $tm('network.overview.join1.subTitle')[5] }}</span>
      </div>
      <div class="comment">
        <div class="avatar" :style="{ backgroundImage: `url(${obeyDevice(avatar, mAvatar).value})` }"></div>
        <div class="decoration-1"></div>
        <div class="name">{{ person.name }}</div>
        <div class="title">{{ person.title }}</div>
        <Line top="20px" m-top="1.88rem" />
        <div class="content">{{ person.content }}</div>
      </div>
      <div class="ranks-container" v-if="showScores">
        <div class="rank" v-for="item in $tm('network.overview.join1.ranks')">
          <div class="star-container">
            <div class="star"></div>
            <div class="score">
              {{ item.score }}
            </div>
          </div>
          <div class="icon" :style="{ backgroundImage: `url(/images/network/${item.icon}.png)` }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.join1-container {
  height: 846px;

  &.no-ranks {
    height: 521px;
  }

  .join1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    >.title {
      width: 600px;
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
    }

    >.sub-title {
      margin-top: 20px;
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #4E4E4E;

      .s0 {}

      .s1 {
        width: 20px;
        height: 20px;
        background: url(/public/images/network/home_title_star.png);
        margin: 0 6px;
      }

      .s2 {
        color: #FA9B3B;
        margin: 0 6px;
      }

      .s3 {}

      .s4 {
        color: #0EBF6A;
        text-decoration: underline;
        margin: 0 6px;
      }

      .s5 {}
    }

    >.comment {
      width: 100%;
      margin-top: 100px;
      position: relative;
      background: linear-gradient(312deg, #E9F8FC 0%, #FFFBF0 100%);
      border-radius: 24px;
      box-sizing: border-box;
      padding: 30px;

      .avatar {
        width: 438px;
        height: 300px;
        position: absolute;
        right: 48px;
        top: -189px;
      }

      .decoration-1 {
        width: 148px;
        height: 70px;
        position: absolute;
        background: url(/public/images/network/Network_Overview_evaluate_bg_point_1.png);
        left: -93px;
        top: -42px;
      }

      .name {
        font-family: PingFang-SC, PingFang-SC;
        font-weight: bold;
        font-size: 24px;
        line-height: 34px;
        display: flex;
        align-items: center;

        &::before {
          content: '';
          width: 6px;
          height: 22px;
          background: linear-gradient(180deg, #46CF3A 0%, #36CFBC 100%);
          margin-right: 14px;
        }
      }

      .title {
        font-size: 16px;
        color: #4E4E4E;
      }

      .content {
        margin-top: 30px;

        font-size: 16px;
        color: #4E4E4E;
      }
    }

    >.ranks-container {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;

      .rank {
        width: 282px;
        height: 230px;
        background: #FFFFFF;
        border-radius: 24px;
        border: 1px solid #E6E6E6;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .star-container {
          width: 128px;
          height: 128px;
          background: linear-gradient(#FFFFFF 0%, #FFFBF0 100%);
          border-radius: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .star {
            width: 36px;
            height: 36px;
            background: url(/public/images/network/Network_Overview_ic_star.png);
          }

          .score {
            margin-top: 8px;

            font-family: Mont, Mont;
            font-weight: 600;
            font-size: 30px;
            line-height: 40px;
            background: linear-gradient(66.90432699443122deg, #F9C22F 0%, #FA6E4A 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        .icon {
          margin-top: 8px;

          width: 180px;
          height: 50px;
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .join1-container {
    margin-top: 9.38rem;

    height: auto;

    &.no-ranks {}

    .join1 {
      display: block;
      padding-top: 3.13rem;

      >.title {
        width: auto;

        font-size: 2.5rem;
        line-height: 3.5rem;
      }

      >.sub-title {
        margin-top: 1rem;

        display: block;
        font-size: 1.75rem;
        line-height: 2.38rem;

        .s0 {}

        .s1 {}

        .s2 {}

        .s3 {}

        .s4 {}

        .s5 {}
      }

      >.comment {
        margin-top: 13rem;
        border-radius: 0.88rem;
        padding: 1.87rem;

        .avatar {
          width: 27.38rem;
          height: 18.75rem;
          right: -0.63rem;
          top: -9.63rem;
        }

        .decoration-1 {
          width: 9.25rem;
          height: 4.38rem;
        }

        .name {
          font-size: 2.25rem;
          line-height: 3.13rem;

          &::before {
            width: 0.25rem;
            height: 1.75rem;
            margin-right: 1.31rem;
          }
        }

        .title {
          margin-top: 0.38rem;

          font-size: 1.38rem;
          line-height: 1.88rem;
        }

        .content {
          margin-top: 1.88rem;

          font-size: 1.63rem;
          line-height: 2.38rem;
        }
      }

      >.ranks-container {
        margin-top: 2.94rem;
        flex-wrap: wrap;

        gap: 0.5rem 0;

        .rank {
          width: 20.94rem;
          height: 15.19rem;

          border-radius: 1.5rem;

          .star-container {
            width: 9.38rem;
            height: 9.38rem;

            .star {
              width: 2.5rem;
              height: 2.5rem;
            }

            .score {
              margin-top: 0.38rem;

              font-size: 2.5rem;
              line-height: 3.31rem;
            }
          }

          .icon {
            margin-top: 0;

            width: 11.25rem;
            height: 3.13rem;
          }
        }
      }
    }
  }
}
</style>