<script lang="ts" setup>
defineProps<{
  gap?: string;
}>();
</script>

<template>
  <div
    class="form-form-row-container"
    :style="{ gap: gap || obeyDevice('16px', '1.87rem').value }"
  >
    <slot />
  </div>
</template>

<style lang="less">
.form-form-row-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > * {
    flex: 1;
  }
}

@media (max-width: 767px) {
  .form-form-row-container {
    flex-direction: column;
    gap: 1.87rem;
  }
}
</style>
