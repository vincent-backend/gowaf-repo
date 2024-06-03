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
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 14px;
    color: #000000;
    line-height: 20px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }

  .control-container {
    margin-top: 10px;
  }
}
</style>