<script lang="ts" setup>
const props = defineProps({
  tabs: Array<any>,
});

const curTab = defineModel('curTab', {
  type: Number,
  default: 0,
});
</script>

<template>
  <div class="tabs">
    <a v-for="tab, index in props.tabs" href="#" class="tab" :class="{ current: index === curTab }"
      @click.prevent="$emit('update:curTab', index)">
      {{ tab.tab }}
    </a>
  </div>
</template>

<style lang="less" scoped>
.tabs {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .tab {
    background: #FFFFFF;
    border-radius: 20px;
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    line-height: 22px;
    padding: 9px 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    &.current {
      background: #000000;
      color: #FFF;
    }
  }
}
</style>