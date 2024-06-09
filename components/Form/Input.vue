<script lang="ts" setup>
const props = defineProps({
  name: String,
  placeholder: String,
});
</script>

<template>
  <div class="input-container">
    <input :name="props.name" :placeholder="props.placeholder" />
  </div>
</template>

<style lang="less" scoped>
.input-container {
  position: relative;

  input {
    display: block;
    width: 100%;
    height: 54px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #E6E6E6;
    font-size: 16px;
    color: #000;
    padding-left: 20px;
    box-sizing: border-box;
    outline: none;

    &:focus {
      border-color: #46CF3A;
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .input-container {
    input {
      height: 5rem;
      border-radius: 0.5rem;
      font-size: 1.75rem;
      padding-left: 1.25rem;

      &:focus {}
    }
  }
}
</style>