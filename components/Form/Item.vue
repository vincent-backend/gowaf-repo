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
</style>