<script lang="ts" setup>
defineProps<{
  h: string;
  mh: string;
  bg?: string;
}>();
</script>

<template>
  <div
    :style="{
      height: obeyDevice(h, mh).value,
      background: bg
    }"
  ></div>
</template>
