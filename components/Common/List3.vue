<script lang="ts" setup>
defineProps<{
  title1: string;
  title2: string;
  title2Width: string;
  layoutType: string;
  items: {
    icon: string;
    title: string;
    subTitle: string;
    content1: string;
    content2: string;
  }[];
}>();

const slotfull = !!useSlots().full;
</script>

<template>
  <div
    class="list1-container"
    :style="layoutType === 'full' ? 'background: #FAFAFA;' : ''"
  >
    <div class="list1 page-container">
      <div class="title1" v-if="title1">{{ title1 }}</div>
      <div class="title2" v-if="title2">{{ title2 }}</div>
      <div class="full-list" v-if="layoutType === 'full'">
        <div class="full-item" v-for="item in items">
          <template v-if="!slotfull">
            <div class="title">
              <h4>
                <span>{{ item.title }}</span> <label>{{ item.content2 }}</label>
              </h4>
              <h5>{{ item.subTitle }}</h5>
            </div>
            <div class="content">
              <p>{{ item.content1 }}</p>
              <p></p>
            </div>
          </template>
          <slot name="full" :item="item"> </slot>
        </div>
      </div>
      <div class="list" v-else>
        <div class="item" v-for="item in items">
          <div class="title">
            <h4>{{ item.title }}</h4>
            <h5>{{ item.subTitle }}</h5>
          </div>
          <div class="content">
            <p>{{ item.content1 }}</p>
            <p>{{ item.content2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list1-container {
  background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
  overflow: hidden;
  margin-bottom: 120px;

  .title1 {
    margin-top: 120px;

    font-weight: 500;
    font-size: 30px;
    line-height: 42px;
    text-align: center;
  }

  .title2 {
    margin: 18px auto 80px;

    width: 612px;
    font-size: 16px;
    color: #4e4e4e;
    text-align: center;
  }

  .list1 {
    margin-top: 80px;
    width: 1200px;

    > .list {
      margin-top: 80px;
      width: 1200px;
      overflow: hidden;

      // display: flex;
      // flex-wrap: wrap;
      // justify-content: space-between;
      // align-items: flex-start;
      // gap: 50px;

      // display: flex;
      // flex-wrap: wrap;
      // justify-content: space-between;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 60px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        // width: 4px;
        // border-left:2px dashed #E6E6E6;
        background: repeating-linear-gradient(
          to bottom,
          #ccc,
          #ccc 2px,
          transparent 10px,
          transparent 20px
        ); /* 创建一条虚线背景 */
        height: calc(100% - 478px); /* 设置元素的高度为1像素 */
        width: 1px; /* 设置元素的宽度为100% */
      }

      .item {
        // flex-basis: 561px; /* 设置你希望的图片宽度 */
        // margin-bottom: 100px; /* 设置图片之间的间隔 */
        float: left;
        clear: both;
        width: 561px;
        height: auto;
        background: url(/public/images/resources/story/Resources_Story_card_bg_2x.png)
            no-repeat left top,
          #ffffff;
        background-size: 246px 144px !important;
        box-shadow: 0px 0px 30px 0px rgba(173, 173, 173, 0.14);
        border-radius: 24px;
        box-sizing: border-box;
        padding: 30px;
        // margin-bottom: 100px;
        &:nth-of-type(2) {
          margin-top: -190px !important;
        }
        &:nth-of-type(3) {
          margin-top: -140px !important;
        }
        &:nth-of-type(4) {
          margin-top: -170px !important;
        }
        &:nth-of-type(5) {
          margin-top: -165px !important;
        }
        &:nth-child(2n) {
          float: right;
          .title {
            &::before {
              left: -78px;
            }
          }
        }
        .title {
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            width: 18px;
            height: 18px;
            top: 50%;
            right: -78px;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            background: #fafafa
              url(/public/images/resources/story/Resources_Story_node_2x.png)
              no-repeat left 0;
            background-size: 18px 18px !important;
            margin-top: -25px;
          }
          h4 {
            font-family: Mont, Mont;
            font-weight: 600;
            font-size: 48px;
            color: #46cf3a;
            line-height: 64px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          h5 {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 30px;
            color: #000000;
            line-height: 42px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            padding-bottom: 10px;
          }
        }

        .content {
          p {
            margin-top: 10px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #4e4e4e;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
    > .full-list {
      margin-top: 80px;
      padding-left: 88px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 90px;
        left: 40px;
        // width: 4px;
        // border-left:2px dashed #E6E6E6;
        background: repeating-linear-gradient(
          to bottom,
          #ccc,
          #ccc 2px,
          transparent 10px,
          transparent 20px
        ); /* 创建一条虚线背景 */
        height: calc(100% - 478px); /* 设置元素的高度为1像素 */
        width: 1px; /* 设置元素的宽度为100% */
      }
      .full-item {
        width: 1112px;
        height: 196px;
        background: #ffffff;
        box-shadow: 0px 4px 10px 0px #f1f1f1;
        border-radius: 14px;
        border: 1px solid #e6e6e6;
        padding: 30px;
        margin-bottom: 10px;
        box-sizing: border-box;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          width: 18px;
          height: 18px;
          top: 50%;
          left: -57px;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          background: #fafafa
            url(/public/images/resources/story/Resources_Story_node_2x.png)
            no-repeat left 0;
          background-size: 18px 18px !important;
        }
        h4 {
          display: flex;
          justify-content: flex-start;
          span {
            font-weight: 500;
            font-size: 24px;
            color: #000000;
            line-height: 34px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          label {
            width: 134px;
            height: 28px;
            background: url(/images/resources/careers/home_card_tag_bg_2x.png)
              no-repeat 0 0;
            background-size: cover;
            margin-top: 5px;
            margin-left: 14px;
            font-weight: bold;
            font-size: 18px;
            color: #ffffff;
            line-height: 25px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            text-align: center;
          }
        }
        h5 {
          font-weight: 500;
          font-size: 20px;
          color: #000000;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          margin-top: 16px;
        }
        .content {
          margin-top: 10px;
          p {
            font-weight: 400;
            font-size: 16px;
            color: #4e4e4e;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .list1-container {
    .title1 {
      margin-top: 1.25rem;
      font-size: 2.5rem;
      line-height: 3.5rem;
      text-align: left;
    }

    .title2 {
      margin: 0;
      margin-top: 1rem;
      width: 100%;
      font-size: 1.75rem;
      line-height: 2.38rem;
      text-align: left;
    }

    .list1 {
      margin-top: 3.13rem;
      width: 100%;
      padding: 0 1.88rem;

      > .list {
        margin-top: 3.13rem;
        box-sizing: border-box;
        gap: 1.25rem 0;

        .item {
          width: 20.94rem;
          height: auto;
          background-size: 20.94rem 12.5rem !important;
          padding: 0.63rem 1.25rem 2rem;

          .icon {
            width: 8.25rem;
            height: 8.25rem;
          }

          .title {
            margin-top: 1.87rem;
            font-size: 2.13rem;
            line-height: 3.13rem;
          }

          .content {
            margin-top: 1.25rem;

            font-size: 1.5rem;
            line-height: 2.13rem;
          }
        }
      }
      .full-list {
        margin-top: 2.88rem;
        padding-left: 2.88rem;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 10.88rem;
          left: 0.2rem;
          // width: 4px;
          // border-left:2px dashed #E6E6E6;
          background: repeating-linear-gradient(
            to bottom,
            #ccc,
            #ccc 2px,
            transparent 10px,
            transparent 20px
          );
          height: calc(100% - 20rem); /* 设置元素的高度为1像素 */
          width: 1px; /* 设置元素的宽度为100% */
        }
        .full-item {
          width: 40.75rem;
          height: fit-content;
          background: #ffffff;
          box-shadow: 0rem 0.25rem 0.63rem 0rem #f1f1f1;
          border-radius: 0.88rem;
          border: 0.06rem solid #e6e6e6;
          padding: 1.88rem;
          margin-bottom: 1.25rem;
          box-sizing: border-box;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            width: 1.13rem;
            height: 1.13rem;
            top: 50%;
            left: -3.25rem;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            background: #fafafa
              url(/public/images/resources/story/Resources_Story_node_2x.png)
              no-repeat left 0;
            background-size: 1.13rem 1.13rem !important;
          }
          h4 {
            display: flex;
            justify-content: flex-start;
            span {
              font-weight: 500;
              font-size: 2.13rem;
              color: #000000;
              line-height: 2.13rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
            label {
              width: 9.25rem;
              height: 1.75rem;
              background: url(/images/resources/careers/home_card_tag_bg_2x.png)
                no-repeat 0 0;
              background-size: cover;
              margin-top: 0;
              margin-left: 1.38rem;
              font-weight: bold;
              font-size: 1.25rem;
              color: #ffffff;
              line-height: 1.75rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
              text-align: center;
            }
          }
          h5 {
            font-weight: 500;
            font-size: 1.88rem;
            color: #000000;
            line-height: 2.63rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-top: 1rem;
          }
          .content {
            margin-top: 1.25rem;
            p {
              font-weight: 400;
              font-size: 1.5rem;
              color: #4e4e4e;
              line-height: 2.13rem;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
        }
      }
    }
  }
}
</style>
