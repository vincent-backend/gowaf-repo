<template>
  <img class="img" :src="src" alt="" />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    src?: string;
  }>(),
  {
    src: '/images/network/WebTools/common_down_gray_nor@2x.png'
  }
);
</script>
<style lang="scss" scoped>
.img {
  width: 24px;
  height: 24px;
}
</style>
