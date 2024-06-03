<script lang="ts" setup>
</script>

<template>
  <div class="list2-container">
    <div class="page-container list2">
      <div class="title">
        {{ $t('home.list2.title') }}
      </div>
      <div class="sub-title">
        {{ $t('home.list2.subTitle') }}
      </div>
      <CommonNumbers style="margin-top: 60px;" :items="$tm('home.list2.numbers')" />
      <div class="features">
        <div class="feature" v-for="item in $tm('home.list2.features')">
          <div class="left">
            <div class="icon" :style="{
          backgroundImage: `url(/images/home/${item.icon}.png)`,
        }"></div>
          </div>
          <div class="right">
            <div class="title">
              {{ item.title }}
              <span class="coming-soon" v-if="item.comingSoon">
                Coming Soon
              </span>
            </div>
            <div class="content">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list2-container {
  padding-top: 150px;

  .list2 {
    >.title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #000000;
      line-height: 42px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    >.sub-title {
      margin-top: 20px;

      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4E4E4E;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    >.features {
      margin-top: 60px;
      display: flex;
      flex-wrap: wrap;

      >.feature {
        width: 400px;
        height: 162px;
        border: 1px solid #E6E6E6;
        box-sizing: border-box;
        position: relative;
        left: -1px;
        top: -1px;

        display: flex;
        padding: 31px 40px;

        >.left {
          .icon {
            width: 44px;
            height: 44px;

          }
        }

        >.right {
          margin-left: 20px;

          >.title {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 20px;
            color: #000000;
            line-height: 28px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            display: flex;
            align-items: center;

            .coming-soon {
              width: 100px;
              height: 24px;
              background: url(/public/images/home/home_card_tag_bg.png) no-repeat;
              background-size: 100%;
              display: flex;
              align-items: center;
              justify-content: center;

              font-family: PingFang-SC, PingFang-SC;
              font-weight: bold;
              font-size: 12px;
              color: #FFFFFF;
              line-height: 17px;
              text-align: left;
              font-style: normal;
              text-transform: none;

              margin-left: 10px;
            }
          }

          >.content {
            margin-top: 10px;

            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #000000;
            line-height: 22px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
  }
}
</style>