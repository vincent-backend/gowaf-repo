<script lang="ts" setup>
defineProps<{
  title: string;
  subTitle: string;
  rows: {
    icon: string;
    title: string;
    content: string;
  }[][];
}>();
</script>

<template>
  <div class="always-safe-container">
    <div class="always-safe page-container">
      <div class="title" v-if="title">{{ title }}</div>
      <div class="sub-title" v-if="subTitle">{{ subTitle }}</div>
      <div class="content-container">
        <div class="row" v-for="row in rows">
          <div class="content-item" v-for="item in row">
            <div
              class="icon"
              :style="{ backgroundImage: `url(${item.icon})` }"
            ></div>
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.always-safe-container {
  margin-top: 80px;

  .always-safe {
    > .title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
    }

    > .sub-title {
      margin-top: 20px;

      font-size: 16px;
      color: #4e4e4e;
    }

    > .content-container {
      margin-top: 50px;

      display: flex;
      flex-direction: column;
      height: 535px;
      gap: 20px;
      background: url(/images/network/ddos/Network_DDoS_graph_2@2x.png)
        no-repeat bottom center;

      > .row {
        display: flex;
        justify-content: space-between;

        .content-item {
          width: 350px;
          min-height: 210px;
          background: #ffffff;
          box-shadow: 0px 4px 10px 0px #f1f1f1;
          border-radius: 14px;
          border: 1px solid #e6e6e6;
          box-sizing: border-box;
          padding: 20px;

          .icon {
            width: 68px;
            height: 68px;
          }

          .title {
            margin-top: 10px;

            font-weight: 500;
            font-size: 24px;
            line-height: 33px;
          }

          .content {
            margin-top: 10px;

            font-size: 16px;
            color: #4e4e4e;
          }
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .always-safe-container {
    margin-top: 6.25rem;

    .always-safe {
      > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
      }

      > .sub-title {
        margin-top: 1rem;

        font-size: 1.75rem;
        line-height: 2.38rem;
      }

      > .content-container {
        margin-top: 3.13rem;
        height: auto;
        gap: 1rem;
        padding-bottom: 25.4rem;
        background-image: url(/public/mobile-images/network/ddos/Network_DDoS_graph_2@2x.png);
        background-size: 46.88rem 33.13rem !important;

        > .row {
          .content-item {
            width: 20.94rem;
            min-height: auto;
            padding: 1.25rem;
            padding-bottom: 3.44rem;

            .icon {
              width: 4.25rem;
              height: 4.25rem;
            }

            .title {
              margin-top: 1.87rem;

              font-size: 2.25rem;
              line-height: 3.13rem;
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
</style>
