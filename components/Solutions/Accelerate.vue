<script lang="ts" setup>
const props = defineProps({
  title: String,
  content: String,
  list1: Array,
  upDown: Object,
  list2: Array,
  btn: String,
  href: String,
  mobileListLayoutType: String
});

const hovered = ref(-1);
</script>

<template>
  <div class="accelerate-container">
    <div class="accelerate page-container">
      <div class="left">
        <div class="title">{{ props.title }}</div>
        <div class="content">{{ props.content }}</div>
        <div class="list" v-if="props.list1">
          <div
            class="item"
            v-for="item in props.list1"
            :style="
              mobileListLayoutType === 'wrap'
                ? {
                    width: '50%',
                    float: 'left'
                  }
                : {}
            "
          >
            <div class="icon"></div>
            <div class="title">{{ item }}</div>
          </div>
        </div>

        <div class="up-down" v-if="props.upDown">
          <div class="up">
            <div class="content">
              <div class="value">{{ props.upDown.up.value }}</div>
              <div class="icon"></div>
            </div>
            <div class="title">{{ props.upDown.up.title }}</div>
          </div>
          <div class="down">
            <div class="content">
              <div class="value">{{ props.upDown.down.value }}</div>
              <div class="icon"></div>
            </div>
            <div class="title">{{ props.upDown.down.title }}</div>
          </div>
        </div>

        <div class="btn-container" v-if="props.btn">
          <NuxtLinkLocale :to="props.href" class="trail-btn">{{ props.btn }}</NuxtLinkLocale>
        </div>
      </div>
      <div class="right">
        <div class="list">
          <div
            class="item"
            :class="{ active: index === hovered }"
            v-for="(item, index) in props.list2"
            @mouseenter="hovered = index"
            @mouseleave="hovered = -1"
          >
            <div class="head">
              <div
                class="icon"
                :style="{
                  backgroundImage: `url(${hovered === index ? item.iconActive : item.icon})`
                }"
              ></div>
              <div class="title">{{ item.title }}</div>
            </div>
            <div class="content">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.accelerate-container {
  margin-top: 120px;

  .accelerate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;

    > .left {
      > .title {
        font-weight: 500;
        font-size: 30px;

        line-height: 42px;
      }

      > .content {
        margin-top: 18px;

        width: 520px;

        color: #4e4e4e;
      }

      > .list {
        margin-top: 40px;

        display: flex;
        flex-wrap: wrap;
        gap: 24px 0;

        .item {
          width: 50%;
          display: flex;
          align-items: center;

          .icon {
            width: 18px;
            height: 18px;
            background: url(/images/solutions/storage-game/home_Text_list_ic_tick@2x.png);
          }

          .title {
            margin-left: 8px;

            font-weight: 500;
            font-size: 16px;

            line-height: 22px;
          }
        }
      }

      .up-down {
        margin-top: 40px;

        display: flex;

        .up,
        .down {
          flex: 1;

          > .content {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .value {
              font-family: Mont, Mont;
              font-weight: 600;
              font-size: 48px;

              line-height: 64px;
            }

            .icon {
              margin-left: 10px;
              width: 40px;
              height: 40px;
            }
          }

          .title {
            font-size: 16px;
            color: #4e4e4e;
          }
        }

        .up {
          > .content {
            .value {
              background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .icon {
              background: url(/images/solutions/storage-software/SmartEdge™_ic_rise@2x.png);
            }
          }
        }

        .down {
          > .content {
            .value {
              background: linear-gradient(0deg, #f9c22f 0%, #fa6e4a 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .icon {
              background: url(/images/solutions/storage-software/SmartEdge™_ic_descend@2x.png);
            }
          }
        }
      }

      .btn-container {
        margin-top: 40px;
      }
    }

    > .right {
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

          &.active {
            border: 2px solid #46cf3a;
            // border-image: linear-gradient(90deg, rgba(70, 207, 58, 1), rgba(54, 207, 188, 1)) 2 2;
          }
        }
      }
    }
  }
}
// For mobile devices
@media (max-width: 767px) {
  .accelerate-container {
    margin-top: 5rem;

    .accelerate {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      width: 43.13rem;
      gap: 5rem;

      > .left {
        > .title {
          font-weight: 500;
          font-size: 2.5rem;

          line-height: 1.4;
        }

        > .content {
          margin-top: 1.75rem;

          width: 43.13rem;

          color: #4e4e4e;
        }

        > .list {
          margin-top: 3.13rem;
          display: block;
          .item {
            width: 100%;
            margin-bottom: 1.25rem;
            .icon {
              width: 1.75rem;
              height: 1.75rem;
              background: url(/images/solutions/storage-game/home_Text_list_ic_tick@2x.png);
            }

            .title {
              margin-left: 2.75;

              font-weight: 500;
              font-size: 1.63rem;

              line-height: 1.4;
            }
          }
        }

        .up-down {
          margin-top: 3.13rem;
          display: flex;
          .up,
          .down {
            flex: 1;

            > .content {
              display: flex;
              align-items: center;
              justify-content: flex-start;

              .value {
                font-family: Mont, Mont;
                font-weight: 600;
                font-size: 3.13rem;

                line-height: 1.4;
              }

              .icon {
                margin-left: 0.8rem;
                width: 2.7rem;
                height: 2.7rem;
              }
            }

            .title {
              font-size: 1.5rem;
              color: #4e4e4e;
            }
          }

          .up {
            > .content {
              .value {
                background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              .icon {
                background: url(/images/solutions/storage-software/SmartEdge™_ic_rise@2x.png);
              }
            }
          }

          .down {
            > .content {
              .value {
                background: linear-gradient(0deg, #f9c22f 0%, #fa6e4a 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              .icon {
                background: url(/images/solutions/storage-software/SmartEdge™_ic_descend@2x.png);
              }
            }
          }
        }

        .btn-container {
          margin-top: 2.6rem;
          display: flex;
          justify-content: center;
        }
      }

      > .right {
        .list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1rem;

          .item {
            width: 48.6%;
            height: auto;
            box-sizing: border-box;
            padding: 1rem;

            background: #ffffff;
            border-radius: 14px;

            border: 2px solid #fff;

            .head {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

              .icon {
                width: 5rem;
                height: 5rem;
              }

              .title {
                margin-top: 1.88rem;
                margin-left: 0;

                flex: 1;

                font-weight: 500;
                font-size: 1.63rem;

                line-height: 1.4;
              }
            }

            .content {
              margin-top: 6px;
              font-size: 1.5rem;

              color: #4e4e4e;
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
</style>
