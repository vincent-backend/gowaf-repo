<script lang="ts" setup>

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  space: {
    type: String,
    default: '0px',
  },
});
</script>

<template>
  <div class="multi-line-container" :style="{
    gap: props.space,
  }">
    <p v-for="line in props.text.split(/\n|\r\n/)">
      {{ line }}
    </p>
  </div>
</template>

<style lang="less" scoped>
.multi-line-container {
  display: flex;
  flex-direction: column;
}
</style>