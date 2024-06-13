<script lang="ts" setup>
defineProps<{
  title: string;
  subTitle: string;
  tabs: {
    tab: string;
    title: string;
    titleTip?: string;
    content: string;
    btn: string;
    href: string;

    icon: string;
    iconWidth: string;
    iconHeight: string;

    mIcon: string;
    mIconWidth: string;
    mIconHeight: string;
  }[];
}>();

// tabs
const curTab = ref(0);
</script>

<template>
  <div class="super-charge-container">
    <div class="page-container super-charge">
      <div class="title">{{ title }}</div>
      <div class="sub-title">{{ subTitle }}</div>
      <Line top="40px" m-top="2.5rem" />

      <CommonTabs :tabs="tabs" v-model:cur-tab="curTab" />
      <template v-for="tab, index in tabs">
        <div class="tabs-content" v-if="index === curTab">
          <div class="left">
            <div class="icon" :style="isMobile ? {
        backgroundImage: `url(${tab.mIcon})`,
        width: tab.mIconWidth,
        height: tab.mIconHeight,
      } : {
        backgroundImage: `url(${tab.icon})`,
        width: tab.iconWidth,
        height: tab.iconHeight,
      }"></div>
          </div>
          <div class="right">
            <div class="title">
              {{ tab.title }}
              <span class="title-tip" v-if="tab.titleTip">{{ tab.titleTip }}</span>
            </div>
            <div class="content">
              <p v-for="text in tab.content.split(/\r\n|\n/)">
                {{ text }}
              </p>
            </div>
            <a href="#" class="trail-btn" v-if="tab.btn">{{ tab.btn }}</a>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.super-charge-container {
  margin-top: 156px;

  .super-charge {
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
      text-align: center;
    }

    >.tabs-content {
      margin: 45px auto 0;

      width: 974px;
      display: flex;
      justify-content: space-between;

      .left {
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
            background-image: url(/public/images/solutions/security-cdn/home_card_tag_bg@2x.png);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: PingFang-SC, PingFang-SC;
            font-weight: bold;
            font-size: 18px;
            color: #FFFFFF;
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
            color: #4E4E4E;
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
      >.title {
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      >.sub-title {
        margin-top: 1rem;

        font-size: 1.75rem;
        line-height: 2.38rem;
        text-align: left;
      }

      >.tabs-content {
        margin-top: 4.25rem;

        width: auto;
        flex-direction: column;

        .left {
          display: flex;
          align-items: center;
          justify-content: center;

          .icon {}
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
              left:0;
              top:1.2rem;
              margin-left: 0;
              width: 9.38rem;
              height: 1.88rem;
              background-image: url(/public/images/solutions/security-cdn/home_card_tag_bg@2x.png);
              background-size: cover;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: PingFang-SC, PingFang-SC;
              font-weight: bold;
              font-size: 1.25rem;
              color: #FFFFFF;
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