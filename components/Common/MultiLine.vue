<script lang="ts" setup>
withDefaults(defineProps<{
  text?: string;
  space?: string;
}>(), {
  text: '',
  space: '0px',
});
</script>

<template>
  <div class="multi-line-container" :style="{
    gap: space,
  }">
    <p v-for="line in text.split(/\n|\r\n/)">
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