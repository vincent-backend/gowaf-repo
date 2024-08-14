<script lang="ts" setup>
defineProps<{
  tab: {
    title: string;
    content: string;
    btn: string;
    href: string;

    icon: string;
    iconWidth: string;
    iconHeight: string;

    mIcon: string;
    mIconWidth: string;
    mIconHeight: string;
  };
}>();

// tabs
const curTab = ref(0);
</script>

<template>
  <div class="super-charge-container">
    <div class="page-container super-charge">
      <div class="tabs-content">
        <div class="left">
          <div
            class="icon"
            :style="
              $device.isMobile
                ? {
                    backgroundImage: `url(${tab?.mIcon})`,
                    width: tab.mIconWidth,
                    height: tab.mIconHeight
                  }
                : {
                    backgroundImage: `url(${tab.icon})`,
                    width: tab.iconWidth,
                    height: tab.iconHeight
                  }
            "
          ></div>
        </div>
        <div class="right">
          <div class="title">
            {{ tab.title }}
          </div>
          <div class="content">
            <p>{{ tab.content }}</p>
          </div>
          <NuxtLinkLocale v-if="!$device.isMobile && tab.btn" href="#" class="trail-btn">{{
            tab.btn
          }}</NuxtLinkLocale>
          <div v-else class="btn-pic">
            <div
              class="icon"
              :style="{
                backgroundImage: `url(${tab?.mIcon})`,
                width: tab.mIconWidth,
                height: tab.mIconHeight
              }"
            ></div>
            <NuxtLinkLocale href="#" class="trail-btn" v-if="tab.btn">{{ tab.btn }}</NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.super-charge-container {
  margin-top: 120px;

  .super-charge {
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

    > .tabs-content {
      margin: 45px auto 0;

      width: 974px;
      display: flex;
      justify-content: space-between;

      .left {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .icon {
          background-repeat: no-repeat;
          background-position: center;
          object-fit: contain;
        }
      }

      .right {
        margin-left: 112px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        .title {
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          display: flex;
          align-items: center;

          .title-tip {
            margin-left: 10px;

            width: 138px;
            height: 28px;
            background-image: url(/images/solutions/security-cdn/home_card_tag_bg@2x.png);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: PingFang-SC, PingFang-SC;
            font-weight: bold;
            font-size: 18px;
            color: #ffffff;
            line-height: 25px;
          }
        }

        .content {
          margin-top: 20px;

          width: 530px;
          display: flex;
          flex-direction: column;
          gap: 10px;

          p {
            font-size: 16px;
            color: #4e4e4e;
          }
        }

        .trail-btn {
          margin-top: 40px;
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .super-charge-container {
    margin-top: 6.25rem;

    .super-charge {
      > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;

        font-size: 1.75rem;
        line-height: 2.38rem;
        text-align: left;
      }

      > .tabs-content {
        margin-top: 4.25rem;

        width: auto;
        flex-direction: column;

        .left {
          display: none;
        }
        .btn-pic {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          .icon {
            margin: 3.13rem 0;
          }
        }

        .right {
          margin: 0;
          position: relative;

          .title {
            margin-top: 3.75rem;

            font-size: 2.13rem;
            line-height: 3rem;

            .title-tip {
              position: absolute;
              left: 0;
              top: 1.2rem;
              margin-left: 0;
              width: 9.38rem;
              height: 1.88rem;
              background-image: url(/images/solutions/security-cdn/home_card_tag_bg@2x.png);
              background-size: cover;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: PingFang-SC, PingFang-SC;
              font-weight: bold;
              font-size: 1.25rem;
              color: #ffffff;
              line-height: 1.4;
            }
          }

          .content {
            margin-top: 1.25rem;
            width: auto;

            p {
              font-size: 1.63rem;
            }
          }

          .trail-btn {
            margin-top: 2.5rem;
          }
        }
      }
    }
  }
}
</style>
