<script lang="ts" setup>
const items = [
  'home_logo_1',
  'home_logo_2',
  'home_logo_3',
  'home_logo_4',
  'home_logo_5',
  'home_logo_6',
  'home_logo_7',
  'home_logo_8',
  'home_logo_9',
  'home_logo_10',
  'home_logo_11',
  'home_logo_12',
  'home_logo_13',
  'home_logo_14',
  'home_logo_15',
  'home_logo_16',
];
</script>

<template>
  <div class="list1-container">
    <div class="page-container list1">
      <div class="title">
        {{ $t('home.list1.title') }}
      </div>
      <div class="list">
        <div class="list-item" v-for="name in items">
          <img :src="`/images/home/${name}@2x.png`" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list1-container {
  padding-top: 60px;

  .list1 {
    .title {

      font-weight: 500;
      font-size: 30px;

      line-height: 42px;



    }

    .list {
      margin-top: 60px;

      display: flex;
      flex-wrap: wrap;
      gap: 12px;

      .list-item {
        width: 190px;
        height: 84px;
        background: #FFFFFF;
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
          display: block;

          height: 40px;
        }
      }
    }
  }
}
</style>