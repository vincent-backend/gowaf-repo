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
  <div class="tabs-container">
    <div class="tabs">
      <a v-for="tab, index in tabs" href="#" class="tab" :class="{ current: index === curTab }"
        @click.prevent="$emit('update:curTab', index)">
        {{ tab.tab }}
      </a>
    </div>
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

    font-weight: 500;
    font-size: 16px;

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

// For mobile devices
@media (max-width: 767px) {
  .tabs {
    margin-top: 2.5rem;

    flex-wrap: wrap;
    gap: 0.63rem;

    .tab {
      padding: 0.81rem 1.25rem;
      font-size: 1.5rem;
      line-height: 2.06rem;

      word-break: keep-all;

      &.current {}
    }
  }
}
</style>