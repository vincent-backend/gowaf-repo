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
});
</script>

<template>
  <div class="line" :style="{
    marginTop: props.top,
    background: props.color,
    height: props.height,
  }"></div>
</template>
