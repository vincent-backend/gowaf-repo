<script lang="ts" setup>
const props = defineProps({
  title: String,
  content: String,
  list: Array<any>,
  btn: String,
  href: String,
  pic: String,
  picWidth: String,
  picHeight: String,

  reverse: Boolean,
});
</script>

<template>
  <div class="ad2-container">
    <div class="ad2 page-container" :class="{ reverse: props.reverse }">
      <div class="left">
        <div class="pic" :style="{
      backgroundImage: `url(${props.pic})`,
      width: props.picWidth,
      height: props.picHeight,
    }"></div>
      </div>
      <div class="right">
        <!-- title -->
        <div class="title">{{ props.title }}</div>

        <!-- content -->
        <div class="content">{{ props.content }}</div>

        <!-- list -->
        <div class="list" v-if="props.list">
          <div class="item" v-for="item in props.list">
            <div class="icon"></div>
            <div class="title">{{ item }}</div>
          </div>
        </div>

        <slot />

        <!-- btn -->
        <div class="btn-container" v-if="props.btn">
          <a :href="props.href" class="trail-btn">{{ props.btn }}</a>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ad2-container {
  margin-top: 120px;

  .ad2 {
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >.left {
      .pic {}
    }

    >.right {
      width: 600px;

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

      >.content {
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

      >.list {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px 0;

        .item {
          width: 50%;
          display: flex;
          align-items: center;

          .icon {
            width: 18px;
            height: 18px;
            background: url(/public/images/solutions/storage-software/home_Text_list_ic_tick@2x.png);
          }

          .title {
            margin-left: 8px;

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
      }

      >.btn-container {
        margin-top: 40px;
      }
    }

    &.reverse {
      flex-direction: row-reverse;
    }
  }
}
</style>