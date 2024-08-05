<template>
  <div class="leftImgRightTransform-container">
    <div class="leftImgRightTransform page-container">
      <div class="title">
        {{ localizedDefaults.title }}
      </div>
      <div class="sub-title">
        {{ localizedDefaults.subTitle }}
      </div>
      <div class="content">
        <div class="left">
          <img
            :src="localizedDefaults.img"
            :style="{
              width: localizedDefaults.imgw
            }"
            alt=""
            srcset=""
          />
        </div>
        <div class="right">
          <div class="list">
            <div
              class="item"
              :class="{ active: index === hovered }"
              v-for="(item, index) in localizedDefaults.list"
              @mouseenter="hovered = index"
              @mouseleave="hovered = -1"
            >
              <div class="head">
                <div
                  class="icon"
                  :style="{
                    backgroundImage: `url(${
                      hovered === index ? item.iconActive : item.icon
                    })`
                  }"
                ></div>
                <div class="num-box">
                  <span class="num">
                    {{ item.num }}
                  </span>
                  <span class="company">
                    {{ item.company }}
                  </span>
                </div>
              </div>
              <div class="head-title-box">
                <span class="head-title">{{ item.title }}</span>
                <span class="bold-title">{{ item.boldtitle }}</span>
              </div>
              <div class="content">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t } = useI18n();
const props = withDefaults(
  defineProps<{
    title: string;
    subTitle: string;
    img: string;
    imgw: string;
    list: Array<{
      num: string;
      company: string;
      icon: string;
      iconActive: string;
      title: string;
      boldtitle: string;
      content: string;
    }>;
  }>(),
  {}
);
const slotDefault = !!useSlots().default;
const hovered = ref(0);
const localizedDefaults: any = computed(() => {
  const obj = {
    title: $t('resources.SuperPolyfill.leftImgRightTransform.title'),
    subTitle: $t('resources.SuperPolyfill.leftImgRightTransform.subTitle'),
    img: '/images/resources/SuperPolyfill/super_polyfill_letslook_img@2x.png',
    imgw: '400px',
    list: [
      {
        num: '9',
        company: 'minutes',
        icon: '/images/resources/SuperPolyfill/cdn_overview_never_ic_1_sele@2x.png',
        iconActive:
          '/images/resources/SuperPolyfill/cdn_overview_never_ic_1_sele@2x.png',
        title: 'Time to',
        boldtitle: 'first response',
        content: '(average: August 2023)'
      },
      {
        num: '35.6%',
        company: '',
        icon: '/images/resources/SuperPolyfill/cdn_overview_never_ic_2_nor@2x.png',
        iconActive:
          '/images/resources/SuperPolyfill/cdn_overview_never_ic_2_nor@2x.png',
        title: 'Tickets solved in',
        boldtitle: '1 response',
        content: '(average: August 2023)'
      },
      {
        num: '10',
        company: 'minutes',
        icon: '/images/resources/SuperPolyfill/cdn_overview_never_ic_3_nor@2x.png',
        iconActive:
          '/images/resources/SuperPolyfill/cdn_overview_never_ic_3_nor@2x.png',
        title: 'Time for',
        boldtitle: 'avg. reply',
        content: '(average: August 2023)'
      },
      {
        num: '5.797',
        company: 'tickets',
        icon: '/images/resources/SuperPolyfill/cdn_overview_never_ic_4_nor@2x.png',
        iconActive:
          '/images/resources/SuperPolyfill/cdn_overview_never_ic_4_nor@2x.png',
        title: 'Successfully',
        boldtitle: 'solved',
        content: '(average: August 2023)'
      }
    ]
  };
  return mergeWithDefaults(obj, props);
});
</script>

<style lang="less" scoped>
.leftImgRightTransform-container {
  margin-top: 120px;

  .leftImgRightTransform {
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

    > .content {
      display: flex;
      margin-top: 38px;
      margin-bottom: 100px;
      gap: 100px;
      .left {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .right {
        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;

          .item {
            width: 288px;
            height: 190px;
            box-sizing: border-box;
            padding: 16px;

            background: #ffffff;
            border-radius: 14px;

            border: 2px solid #fff;

            .head {
              display: flex;
              align-items: center;
              .num-box {
                display: flex;
                align-items: flex-end;
                margin-left: 12px;
                gap: 4px;
                .num {
                  font-family: Mont, Mont;
                  font-weight: 600;
                  font-size: 30px;
                  color: #000000;
                  line-height: 40px;
                  text-align: left;
                  font-style: normal;
                  text-transform: none;
                  background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
                .company {
                  font-family: PingFangSC, PingFang SC;
                  font-weight: 500;
                  font-size: 16px;
                  color: #000000;
                  line-height: 22px;
                  text-align: left;
                  font-style: normal;
                  text-transform: none;
                }
              }

              .icon {
                width: 80px;
                height: 80px;
              }

              .title {
                margin-left: 12px;
                flex: 1;
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
              }
            }

            .content {
              margin-top: 6px;
              color: #4e4e4e;
            }
            .head-title-box {
              display: flex;
              margin-top: 16px;
              gap: 4px;
              .head-title {
                font-family: PingFangSC, PingFang SC;
                font-weight: 400;
                font-size: 14px;
                color: #4e4e4e;
                line-height: 24px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
              .bold-title {
                font-family: PingFangSC, PingFang SC;
                font-weight: 600;
                font-size: 14px;
                color: #000000;
                line-height: 24px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
            }

            &.active {
              border: 2px solid #46cf3a;
              // border-image: linear-gradient(90deg, rgba(70, 207, 58, 1), rgba(54, 207, 188, 1)) 2 2;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .leftImgRightTransform-container {
    margin-top: 6.25rem;

    .leftImgRightTransform {
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
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        margin-bottom: 6.25rem;
        gap: 2.5rem;
        .left {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100% !important;
          }
        }
        .right {
          .list {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;

            .item {
              width: 20.94rem;
              height: 18rem;
              box-sizing: border-box;
              padding: 0.88rem;

              background: #ffffff;
              border-radius: 0.88rem;

              border: 0.13rem solid #fff;

              .head {
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                .num-box {
                  display: flex;
                  align-items: flex-end;
                  margin-left: 0;
                  margin-top: 0.88rem;
                  .num {
                    font-family: Mont, Mont;
                    font-weight: 600;
                    font-size: 2.5rem;
                    color: #000000;
                    line-height: 3.31rem;
                    text-align: left;
                    font-style: normal;
                    text-transform: none;
                    background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  }
                  .company {
                    font-family: PingFangSC, PingFang SC;
                    font-weight: 500;
                    font-size: 1.88rem;
                    color: #000000;
                    line-height: 2.63rem;
                    text-align: left;
                    font-style: normal;
                    text-transform: none;
                  }
                }

                .icon {
                  width: 5rem;
                  height: 5rem;
                }
              }

              .content {
                margin-top: 0.75rem;
                color: #4e4e4e;
                font-family: PingFangSC, PingFang SC;
                font-weight: 400;
                font-size: 1.5rem;
                color: #4e4e4e;
                line-height: 2.19rem;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
              .head-title-box {
                display: flex;
                margin-top: 1rem;
                gap: 4px;
                .head-title {
                  font-family: PingFangSC, PingFang SC;
                  font-weight: 400;
                  font-size: 1.5rem;
                  color: #4e4e4e;
                  line-height: 2.19rem;
                  text-align: left;
                  font-style: normal;
                  text-transform: none;
                  white-space: nowrap;
                }
                .bold-title {
                  font-family: PingFangSC, PingFang SC;
                  font-weight: 600;
                  font-size: 1.5rem;
                  color: #000000;
                  line-height: 2.19rem;
                  text-align: left;
                  font-style: normal;
                  white-space: nowrap;
                  text-transform: none;
                }
              }

              &.active {
                border: 0.13rem solid #46cf3a;
                // border-image: linear-gradient(90deg, rgba(70, 207, 58, 1), rgba(54, 207, 188, 1)) 2 2;
              }
            }
          }
        }
      }
    }
  }
}
</style>
