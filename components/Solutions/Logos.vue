<script lang="ts" setup>
const props = defineProps({
  title: String,
  subTitle: String,
  imgs: Array<any>,
  btn: String,
  href: String
});
</script>

<template>
  <div class="logos-container">
    <div class="logos page-container">
      <div class="title">{{ props.title }}</div>
      <div class="sub-title">{{ props.subTitle }}</div>
      <div class="list">
        <div class="item" v-for="img in props.imgs">
          <img :src="img" />
        </div>
      </div>
      <div class="btn-container" v-if="props.btn">
        <NuxtLinkLocale :to="props.href" class="trail-btn">{{ props.btn }}</NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.logos-container {
  padding-top: 40px;
  padding-bottom: 40px;
  background: #fff;

  .logos {
    > .title {
      margin: 0 auto;
      width: 738px;

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

    > .list {
      margin-top: 60px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      gap: 60px 0;

      > .item {
        width: 33%;
        height: 48px;
        display: flex;
        justify-content: center;

        > img {
          display: block;
          height: 100%;
        }
      }
    }

    > .btn-container {
      margin-top: 60px;
      text-align: center;
    }
  }
}
@media (max-width: 767px) {
  .logos-container {
    padding-top: 4.8rem;
    padding-bottom: 2.6rem;
    background: #fff;

    .logos {
      > .title {
        margin: 0 auto;
        width: auto;

        font-weight: 500;
        font-size: 2.5rem;

        line-height: 1.6;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;
        font-size: 1.75rem;
        color: #4e4e4e;
        text-align: left;
      }

      > .list {
        margin-top: 3.13rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        gap: 2.4rem 0;

        > .item {
          width: 33%;
          height: 3rem;
          display: flex;
          justify-content: center;

          > img {
            display: block;
            height: 3rem;
            padding-right: 1rem;
          }
        }
      }

      > .btn-container {
        margin-top: 3.13rem;
        text-align: center;
      }
    }
  }
}
</style>
