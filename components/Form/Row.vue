<script lang="ts" setup>
const props = defineProps({
  gap: {
    type: String,
    default: '16px',
  },
});
</script>

<template>
  <div class="form-form-row-container" :style="{ gap: props.gap }">
    <slot />
  </div>
</template>

<style lang="less">
.form-form-row-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  >* {
    flex: 1;
  }
}
</style>