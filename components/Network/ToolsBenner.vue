<template>
  <div class="benner">
    <div class="page-container">
      <div class="benner-title">
        {{ localizedDefaults.title }}
      </div>
      <div class="benner-subtitle" :style="{ width: subWidth }">
        {{ localizedDefaults.subTitle }}
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t } = useI18n();
const props = withDefaults(
  defineProps<{
    title?: string;
    subTitle?: string;
    subWidth?: string;
  }>(),
  {}
);
const slotDefault = !!useSlots().default;
const localizedDefaults: any = computed(() => {
  const obj = {
    title: $t('network.WebTools.bennerTitle'),
    subTitle: $t('network.WebTools.bennerSubTitle')
  };
  return mergeWithDefaults(obj, props);
});
</script>
<style lang="scss" scoped>
.benner {
  width: 100%;
  height: 411px;
  background: linear-gradient(322deg, #207af7 0%, #12e599 100%);
  .page-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  .benner-title {
    font-family: Mont, Mont;
    font-weight: bold;
    font-size: 50px;
    color: #ffffff;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
  .benner-subtitle {
    width: 552px;
    max-width: 100%;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
}
@media (max-width: 767px) {
  .benner {
    width: 100%;
    height: 45.13rem;
    background: linear-gradient(322deg, #207af7 0%, #12e599 100%);
    .page-container {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
    }
    .benner-title {
      font-family: Mont, Mont;
      font-weight: bold;
      font-size: 3.5rem;
      color: #ffffff;
      line-height: 5rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .benner-subtitle {
      width: 100%;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 1.75rem;
      color: #ffffff;
      line-height: 2.81rem;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
}
</style>
