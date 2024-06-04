<script lang="ts" setup>
import { isMobile } from '#imports';

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

const top = isMobile() ? props.mTop : props.top;
</script>

<template>
  <div class="line" :style="{
    marginTop: top,
    background: props.color,
    height: props.height,
  }"></div>
</template>
