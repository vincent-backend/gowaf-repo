<script lang="ts" setup>
withDefaults(
  defineProps<{
    color?: string;
    height?: string;
    top: string;
    mTop: string;
  }>(),
  {
    color: '#E6E6E6',
    height: '1px'
  }
);
</script>

<template>
  <div
    class="line"
    :style="{
      marginTop: obeyDevice(top, mTop).value,
      background: color,
      height: height
    }"
  ></div>
</template>
