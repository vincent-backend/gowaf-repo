<script lang="ts" setup>
withDefaults(
  defineProps<{
    title: string;
    person: {
      name: string;
      title: string;
      content: string;
    };
    avatar: string;
    mAvatar: string;
    showScores?: boolean;
  }>(),
  {
    showScores: true
  }
);
const { t } = useI18n();
const i18ntext = computed(() => {
  return {
    subTitle: [
      t('home.header.bottom.weAreRated'),
      '',
      t('home.join2.subTitle3'),
      t('home.join2.subTitle4'),
      t('home.join2.subTitle5'),
      t('home.join2.subTitle6')
    ],
    ranks: [
      {
        score: '4.8',
        icon: 'Network_Overview_mark_logo_1'
      },
      {
        score: '4.4',
        icon: 'Network_Overview_mark_logo_2'
      },
      {
        score: '4.8',
        icon: 'Network_Overview_mark_logo_3'
      },
      {
        score: '4.8',
        icon: 'Network_Overview_mark_logo_4'
      }
    ]
  };
});
</script>

<template>
  <div class="join1-container" :class="{ 'no-ranks': !showScores }">
    <div class="join1 page-container">
      <div class="title">{{ title }}</div>
      <div class="sub-title">
        <span class="s0">{{ i18ntext.subTitle[0] }}</span>
        <span class="s1"></span>
        <span class="s2">{{ i18ntext.subTitle[2] }}</span>
        <span class="s3">{{ i18ntext.subTitle[3] }}</span>
        <NuxtLinkLocale class="s4">{{ i18ntext.subTitle[4] }}</NuxtLinkLocale>
        <span class="s5">{{ i18ntext.subTitle[5] }}</span>
      </div>
      <div class="comment">
        <div class="decoration-1"></div>
        <div class="name">{{ person.name }}</div>
        <div class="title">{{ person.title }}</div>
        <div class="avatar-container">
          <img class="avatar" :src="obeyDevice(avatar, mAvatar).value" />
        </div>
        <Line calss="separate-line" top="20px" />
        <div class="content">{{ person.content }}</div>
      </div>
      <div class="ranks-container" v-if="showScores">
        <div class="rank" v-for="item in i18ntext.ranks">
          <div class="star-container">
            <div class="star"></div>
            <div class="score">
              {{ item.score }}
            </div>
          </div>
          <div class="icon">
            <img :src="`/images/network/${item.icon}.png`" width="100%"/>
          </div>
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

    > .title {
      width: 600px;
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
    }

    > .sub-title {
      margin-top: 20px;
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #4e4e4e;
      z-index: 1;

      .s0 {
      }

      .s1 {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(/images/network/home_title_star.png);
        margin: 0 6px;
      }

      .s2 {
        color: #fa9b3b;
        margin: 0 6px;
      }

      .s3 {
      }

      .s4 {
        color: #0ebf6a;
        text-decoration: underline;
        margin: 0 6px;
      }

      .s5 {
      }
    }

    > .comment {
      width: 100%;
      position: relative;
      background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);
      border-radius: 24px;
      box-sizing: border-box;
      padding: 30px;

      .avatar {
        width: 438px;
        height: 300px;
        position: absolute;
        right: 48px;
        top: -191px;
      }

      .decoration-1 {
        width: 148px;
        height: 70px;
        position: absolute;
        background: url(/images/network/Network_Overview_evaluate_bg_point_1.png);
        left: -93px;
        top: -42px;
      }

      .separate-line {
        margin-top: 1.88rem;
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
          background: linear-gradient(180deg, #46cf3a 0%, #36cfbc 100%);
          margin-right: 14px;
        }
      }

      .title {
        font-size: 16px;
        color: #4e4e4e;
      }

      .content {
        margin-top: 30px;

        font-size: 16px;
        color: #4e4e4e;
      }
    }

    > .ranks-container {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;

      .rank {
        width: 282px;
        height: 230px;
        background: #ffffff;
        border-radius: 24px;
        border: 1px solid #e6e6e6;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .star-container {
          width: 128px;
          height: 128px;
          background: linear-gradient(#ffffff 0%, #fffbf0 100%);
          border-radius: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .star {
            width: 36px;
            height: 36px;
            background: url(/images/network/Network_Overview_ic_star.png);
          }

          .score {
            margin-top: 8px;
            font-family: Mont, Mont;
            font-weight: 600;
            font-size: 30px;
            line-height: 40px;
            background: linear-gradient(
              66.90432699443122deg,
              #f9c22f 0%,
              #fa6e4a 100%
            );
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
    width: 100%;
    padding: 0 1.88rem;
    box-sizing: border-box;
    height: auto;

    &.no-ranks {
      height: auto;
    }

    .join1 {
      display: block;

      > .title {
        width: auto;
        font-size: 2.5rem;
        line-height: 3.5rem;
        margin-top: 2.6rem;
      }

      > .sub-title {
        margin-top: 1rem;
        margin-bottom: 2.6rem;
        display: block;
        font-size: 1.75rem;
        line-height: 2.38rem;

        .s0 {
        }

        .s1 {
          margin: 0 1px;
          width: 1.67rem;
          height: 1.67rem;
        }

        .s2 {
          margin: 0;
        }

        .s3 {
        }

        .s4 {
        }

        .s5 {
        }
      }

      > .comment {
        border-radius: 0.88rem;
        padding: 1.87rem;
        position: static;

        .avatar-container {
          text-align: center;
          display: flex;
          justify-content: center;
        }

        .avatar {
          position: static;
          width: 27.38rem;
          height: 18.75rem;
          right: -0.63rem;
          top: -9.63rem;
        }

        .decoration-1 {
          width: 9.25rem;
          height: 4.38rem;
        }

        .separate-line {
          margin-top: 0;
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

      > .ranks-container {
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

            width: 100px;
            height: 25px;
          }
        }
      }
    }
  }
}
</style>
