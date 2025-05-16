<script lang="ts" setup>
defineProps<{
  isShowTitle: boolean;
  type?: string;
  neverHit: {
    title: string;
    subTitle: string;
    list?: Partial<{
      icon: string;
      width: string;
      height: string;
      alignType: string;
      title: string;
      content: string;
    }>[];
    items?: Array<
      Partial<{
        num: Number;
        icon: string;
        title: string;
        content: string;
        alignType: string;
        btn?: string;
      }>
    >;
  };
}>();
</script>
<template>
  <div class="never-list page-container">
    <div class="title" v-if="isShowTitle">{{ neverHit.title }}</div>
    <div class="sub-title" v-if="isShowTitle">{{ neverHit.subTitle }}</div>
    <div class="content">
      <div
        class="item"
        v-for="item in neverHit.items"
        :class="{ isNotCard: type }"
        :style="{ alignItems: `${item.alignType}` }"
      >
        <div
          
        >
          <img class="icon" :src="item.icon" />
      </div>
        <div class="text-row">
          <div class="title">{{ item.title }}</div>
          <div class="sub-title">
            {{ item.content }}
          </div>
          <div v-if="item.btn" class="btn">
            {{ item.btn }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.never-list {
  width: 100%;
  margin: 6.5rem 0 3.5rem 0;
  padding: 0 1.88rem;
  box-sizing: border-box;
  > .title {
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 3.5rem;
    text-align: left;
  }

  > .sub-title {
    margin-top: 1rem;
    font-size: 1.75rem;
    line-height: 2.38rem;
    text-align: left;
    margin-bottom: 3.13rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 2.55rem;
    .item {
      display: flex;
      align-items: center;
      &.isNotCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .text-row {
          width: 33.81rem;
          gap: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .sub-title {
            text-align: center;
          }
          .btn {
            margin-top: 2rem;
            background: #ffffff;
            border-radius: 2.34rem;
            border: 0.13rem solid rgba(70, 207, 58, 1);
            padding: 1.25rem 1.88rem;
            font-family: Mont, Mont;
            font-weight: 600;
            font-size: 1.63rem;
            color: #000000;
            line-height: 2.13rem;
            font-style: normal;
            text-transform: none;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .icon {
        width: 9.38rem;
        height: 9.38rem;
        flex-shrink: 0;
      }
      .text-row {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1.25rem;
        .title {
          font-weight: 500;
          font-size: 2.13rem;
          color: #000000;
          line-height: 3rem;
          text-align: left;
        }
        .sub-title {
          font-weight: 400;
          font-size: 1.5rem;
          color: #4e4e4e;
          line-height: 2.19rem;
          text-align: left;
        }
      }
    }
  }
}
</style>
