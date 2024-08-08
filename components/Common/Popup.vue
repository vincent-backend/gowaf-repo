<template>
  <el-drawer
    append-to-body
    size="80%"
    :with-header="false"
    class="CommonPopup"
    custom-class="CommonPopup"
    :model-value="show"
    @close="emit('update:show', false)"
    direction="btt"
  >
    <div class="CommonPopup-body">
      <div class="CommonPopup-title">{{ title }}</div>
      <div class="CommonPopup-content">
        <slot></slot>
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:show']);
const model = defineModel('show', {
  type: Boolean,
  default: true
});
defineProps<{
  title?: string;
}>();
</script>
<style lang="scss">
.CommonPopup {
  background: #ffffff;
  border-radius: 3rem 3rem 0rem 0rem;
  .el-drawer__body {
    padding-bottom: 0 !important;
  }
  .CommonPopup-body {
    width: 100%;
    height: 100%;
    .CommonPopup-title {
      width: 100%;
      height: 7rem;
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 2.25rem;
      color: #4e4e4e;
      text-align: center;
      font-style: normal;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .CommonPopup-content {
      width: 100%;
      height: calc(100% - 7rem);
      overflow-y: auto;
    }
  }
}
</style>
