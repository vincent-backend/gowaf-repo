<script lang="ts" setup>
defineProps<{
  isShowTitle: boolean;
  neverHit: {
    title: string;
    subTitle: string;
    list: {
      icon: string;
      width: string;
      height: string;
      alignType: string;
      title: string;
      content: string;
    }[];
    items: Array<{
      num: Number;
      icon: string;
    }>;
  }[];
}>();
</script>
<template>
  <div class="never-hit-container">
    <div class="never-hit page-container">
      <div class="title" v-if="isShowTitle">{{ neverHit.title }}</div>
      <div class="sub-title" v-if="isShowTitle">{{ neverHit.subTitle }}</div>
      <div class="content">
        <div
          class="item"
          v-for="item in neverHit.items"
          :style="{ alignItems: `${item.alignType}` }"
        >
          <div
            class="icon"
            :style="{
              backgroundImage: `url(${item.icon})`,
              width: `${item.width}`,
              height: `${item.height}`
            }"
          ></div>
          <div class="title">{{ item.title }}</div>
          <div class="content" :style="{ textAlign: `${item.contentAlign}` }">
            {{ item.content }}
          </div>
        </div>

        <div class="icon icon-1"></div>
        <div class="icon icon-2"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.never-hit-container {
  margin-top: 120px;
  margin-bottom: 20px;
  .never-hit {
    width: 1200px;

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
      margin-top: 60px;
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      > .item {
        padding-right: 70px;
        width: 400px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
          width: 80px;
          height: 80px;
        }

        .title {
          margin-top: 22px;

          font-family: Mont, Mont;
          font-weight: bold;
          font-size: 26px;

          line-height: 35px;
          text-align: center;
        }

        .content {
          margin-top: 8px;

          color: #4e4e4e;

          text-align: center;
        }
      }

      > .icon {
        position: absolute;

        &.icon-1 {
        }

        &.icon-2 {
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .never-hit-container {
    margin-top: 10.56rem;
    padding: 0 1.67rem;
    .never-hit {
      width: fit-content;

      > .title {
        font-weight: 500;
        font-size: 2.22rem;
        line-height: 3.11rem;
        text-align: left;
      }

      > .sub-title {
        margin-top: 0.9rem;
        width: 38.33rem;
        font-weight: 400;
        font-size: 1.56rem;
        line-height: 2.11rem;
        text-align: left;
      }

      > .content {
        margin-top: 60px;
        position: relative;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        > .item {
          padding: 0;
          width: 50%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;

          .icon {
            width: 4.44rem;
            height: 4.44rem;
          }

          .title {
            margin-top: 1.2rem;
            font-family: Mont, Mont;
            font-weight: bold;
            font-size: 1.44rem;
            line-height: 1.94rem;
            text-align: center;
          }

          .content {
            margin-top: 0.44rem;
            width: 9.56rem;
            height: 2.67rem;
            font-weight: 400;
            font-size: 0.78rem;
            color: #4e4e4e;
            line-height: 1.33rem;
            margin: 0 auto;
          }
          &:nth-child(1) {
            padding-right: 5rem;
          }
          &:nth-child(2) {
            padding-left: 5rem;
          }
          &:nth-child(3) {
            margin-top: 10rem;
          }
        }

        > .icon {
          position: absolute;

          &.icon-1 {
            width: 7.22rem;
            left: 16.78rem;
            top: 5.5rem;
            height: 2rem;
            background-image: url(/public/mobile-images/products/cdn/perma-cache/guiding_point_nor@2x.png);
          }

          &.icon-2 {
            width: 5.33rem;
            height: 5.33rem;
            right: 9rem;
            top: 19.5rem;
            background-image: url(/public/mobile-images/products/cdn/perma-cache/line_negation_nor@2x.png);
          }
        }
      }
    }
  }
}
</style>
