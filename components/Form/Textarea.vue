<script lang="ts" setup>
const props = defineProps({
  name: String,
  placeholder: String
});
</script>

<template>
  <div class="textarea-container">
    <textarea
      class="textarea"
      :name="props.name"
      :placeholder="props.placeholder"
    ></textarea>
  </div>
</template>

<style lang="less" scoped>
.textarea-container {
  width: 100%;

  .textarea {
    display: block;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    min-height: 120px;
    outline: none;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    font-size: 16px;
    color: #000;
    padding: 16px;
    box-sizing: border-box;

    &:focus {
      border-color: #46cf3a;
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .textarea-container {
    .textarea {
      min-height: 8.75rem;
      border-radius: 0.5rem;
      font-size: 1.75rem;
      padding: 1.25rem;

      &:focus {
      }
    }
  }
}
</style>
