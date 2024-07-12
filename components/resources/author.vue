<template>
  <div class="author-container">
    <div class="author page-container">
      <div class="title">
        {{ localizedDefaults.title }}
      </div>
      <div class="sub-title">
        {{ localizedDefaults.subTitle }}
      </div>
      <div class="content">
        <div v-for="item in localizedDefaults.list" class="author-item">
          <div class="bg">
            <img :src="item.img" alt="" />
          </div>
          <div class="title-box">
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">{{ item.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t, tm } = useI18n();
const props = withDefaults(
  defineProps<{
    title: string;
    subTitle: string;
    list: Array<{
      img: string;
      title: string;
      subtitle: string;
    }>;
  }>(),
  {}
);
const slotDefault = !!useSlots().default;
const localizedDefaults: any = computed(() => {
  const obj = {
    title: $t('resources.SuperPolyfill.author.title'),
    subTitle: $t('resources.SuperPolyfill.author.subTitle'),
    list: tm('resources.SuperPolyfill.author.list') as any
  };
  return mergeWithDefaults(obj, props);
});
</script>
<style lang="scss" scoped>
.author-container {
  margin-top: 120px;
  margin-bottom: 100px;

  .author {
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
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 24px;
      box-sizing: border-box;
      .author-item {
        width: 280px;
        height: 380px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        .bg {
          width: 100%;
          height: 240px;
          background: linear-gradient(312deg, #e9f8fc 0%, #fffbf0 100%);
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
          border-radius: 12px 12px 0px 0px;
          box-sizing: border-box;
          display: flex;
          align-items: flex-end;
        }
        .title-box {
          box-sizing: border-box;
          width: 100%;
          height: 140px;
          background: #ffffff;
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
          border-radius: 0px 0px 12px 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 8px;
          .title {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 30px;
            color: #000000;
            line-height: 42px;
            text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
            font-style: normal;
            text-transform: none;
          }
          .sub-title {
            font-family: PingFangSC, PingFang SC;
            font-weight: 500;
            font-size: 20px;
            color: #000000;
            line-height: 28px;
            text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .author-container {
    margin-top: 6.25rem;

    .author {
      > .title {
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 3.5rem;
        text-align: left;
      }

      > .sub-title {
        margin-top: 1rem;
        font-size: 1.75rem;
        color: #4e4e4e;
        text-align: left;
      }

      > .content {
      }
    }
  }
}
</style>
