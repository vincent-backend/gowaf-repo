<script lang="ts" setup>
const props = defineProps({
  label: String,
});
</script>

<template>
  <div class="form-item">
    <label>
      <div class="label-title" v-if="props.label">{{ props.label }}</div>
      <div class="control-container">
        <slot />
      </div>
    </label>
  </div>
</template>

<style lang="less" scoped>
.form-item {
  .label-title {
    font-weight: 500;
    line-height: 20px;
  }

  .control-container {
    margin-top: 10px;
  }
}

@media (max-width: 767px) {
  .form-item {
    width: 100%;

    .label-title {
      font-size: 1.63rem;
      line-height: 2.31rem;
    }

    .control-container {
      margin-top: 0.63rem;
    }
  }
}
</style>