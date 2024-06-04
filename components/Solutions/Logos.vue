<script lang="ts" setup>
const props = defineProps({
  title: String,
  subTitle: String,
  imgs: Array<any>,
  btn: String,
  href: String,
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
        <a :href="props.href" class="trail-btn">{{ props.btn }}</a>
      </div>
    </div>
  </div>
</template>

<style>
.logos-container {
  padding-top: 40px;
  padding-bottom: 40px;
  background: #FFF;

  .logos {
    >.title {
      margin: 0 auto;
      width: 738px;

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

    >.list {
      margin-top: 60px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      gap: 60px 0;

      >.item {
        width: 33%;
        height: 48px;
        display: flex;
        justify-content: center;

        >img {
          display: block;
          height: 100%;
        }
      }
    }

    >.btn-container {
      margin-top: 60px;
      text-align: center;
    }
  }
}
</style>