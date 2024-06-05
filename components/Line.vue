<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: '#E6E6E6',
  },
  height: {
    type: String,
    default: '1px',
  },
  top: String,
  mTop: String,
});
</script>

<template>
  <div class="line" :style="{
    marginTop: obeyDevice(top, mTop).value,
    background: color,
    height: height,
  }"></div>
</template>
