<template>
  <div class="player2-container">
    <div class="title">{{ localizedDefaults.title }}</div>
    <div class="sub-title">
      {{ localizedDefaults.subTitle }}
    </div>
    <div class="pic"></div>
    <div class="btn-container">
      <a href="#" class="trail-btn">
        {{ localizedDefaults.btnText }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t } = useI18n();
const props = withDefaults(
  defineProps<
    Partial<{
      title: string;
      subTitle: string;
      icon: string;
      btnText: string;
      btnsubText: string;
      isHidenList: boolean;
    }>
  >(),
  {}
);
const slotDefault = !!useSlots().default;
const localizedDefaults: any = computed(() => {
  const obj = {
    title: $t('products.stream.mediaCage.player2.title'),
    subTitle: $t('products.stream.mediaCage.player2.subTitle'),
    btnText: $t('products.stream.mediaCage.player2.btn'),
    icon: '/images/products/stream/player/player-1@2x.png'
  };
  console.log('localizedDefaults:any -> props', props);
  return mergeWithDefaults(obj, props);
});
</script>

<style lang="less" scoped>
.player2-container {
  margin-top: 120px;
  margin-bottom: 120px;

  > .title {
    font-weight: 500;
    font-size: 30px;

    line-height: 42px;
    text-align: center;
  }

  > .sub-title {
    margin-top: 18px;

    font-size: 16px;
    color: #4e4e4e;

    text-align: center;
  }

  > .pic {
    margin: 40px auto 0;

    width: 782px;
    height: 440px;
    background: url(/images/products/stream/player/player-1@2x.png);
  }

  > .btn-container {
    margin-top: 18px;

    display: flex;
    justify-content: center;
    .trail-btn {
      background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
      border-radius: 25px;
      color: #fff;
    }
  }
}
@media (max-width: 767px) {
  .player2-container {
    width: 100%;
    box-sizing: border-box;
    padding: 0 1.88rem;
    margin-top: 6.25rem;

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

    > .pic {
      margin: 3rem auto 0;
      width: 100%;
      height: 24.25rem;
      background: url(/public/images/products/stream/player/player-1@2x.png);
    }

    > .btn-container {
      margin-top: 1.25rem;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
