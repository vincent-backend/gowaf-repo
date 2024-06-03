<script lang="ts" setup>
const props = defineProps({
  name: String,
  value: String,
});

const checked = ref(false);
</script>

<template>
  <div class="checkbox-container">
    <input type="checkbox" :checked="checked" @change="checked = $event.target.checked" :name="props.name"
      :value="props.value" />
    <div class="checkbox" :class="{ checked }"></div>
    <div class="text">
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.checkbox-container {
  display: flex;
  align-items: center;

  input[type=checkbox] {
    display: none;
  }

  .checkbox {
    width: 20px;
    height: 20px;

    background: url(/public/images/pricing/cdn/connection_ic_cb_nor.png);

    &.checked {
      background: url(/public/images/pricing/cdn/connection_ic_cb_sel.png);
    }
  }

  .text {
    margin-left: 10px;

    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: #4E4E4E;
    line-height: 20px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}
</style>