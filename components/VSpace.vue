<script lang="ts" setup>
defineProps<{
  h: string;
  mh: string;
}>();
</script>

<template>
  <div
    :style="{
      height: obeyDevice(h, mh).value
    }"
  ></div>
</template>
