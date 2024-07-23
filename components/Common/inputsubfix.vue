<template>
  <!-- input输入框icon 可替换 -->
  <div class="sub-icon">
    <img class="img" :src="src" alt="" />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    src?: string;
  }>(),
  {
    src: '/images/network/WebTools/common_link@2x.png'
  }
);
</script>
<style lang="scss" scoped>
.sub-icon {
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  border-right: 1px solid #d8d8d8;
  .img {
    width: 32px;
    height: 32px;
  }
}
</style>
