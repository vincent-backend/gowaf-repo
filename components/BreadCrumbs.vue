<script lang="ts" setup>
defineProps<{
  title: string;
  items: {
    label: string;
    href: string;
    current: boolean;
  }[];
}>();
</script>

<template>
  <div class="bread-crumbs-container">
    <div class="page-container bread-crumbs">
      <span class="title">
        {{ title }}
      </span>
      <span class="separator"></span>
      <div class="links">
        <a :href="item.href" v-for="item in items" :class="{ current: item.current }">
          {{ item.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bread-crumbs-container {
  background: #FFFFFF;
  box-shadow: inset 0px 1px 0px 0px rgba(226, 226, 226, 0.5);
  height: 60px;

  .bread-crumbs {
    height: 100%;
    display: flex;
    align-items: center;

    .title {}

    .separator {
      width: 2px;
      height: 20px;
      background: #F0F0F0;
      margin: 0 34px;
    }

    .links {
      display: flex;
      gap: 34px;

      a {



        color: #4E4E4E;
        line-height: 18px;



        &.current {

          font-weight: 500;


          line-height: 18px;


          background: linear-gradient(41.5494227786465deg, #46CF3A 0%, #36CFBC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}
</style>