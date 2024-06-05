<script lang="ts" setup>
const props = defineProps({
  items: Array<any>,
});
</script>

<template>
  <div class="numbers page-container">
    <div v-for="item, index in items" :class="['number', 'n-' + index]">
      <div class="number-title">{{ item.label }}</div>
      <div class="number-content">{{ item.content }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.numbers {
  height: 128px;
  position: relative;

  .number {
    position: absolute;

    .number-title {
      font-family: Mont, Mont;
      font-weight: 600;
      font-size: 48px;
      line-height: 64px;
      background: linear-gradient(0deg, #46CF3A 0%, #36CFBC 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .number-content {
      font-size: 16px;
      color: #4E4E4E;
    }
  }

  .n-0 {
    left: 0;
    top: 0;
  }

  .n-1 {
    left: 271px;
    top: 36px;
  }

  .n-2 {
    left: 622px;
    top: 0;
  }

  .n-3 {
    left: 976px;
    top: 36px;
  }
}

// For mobile devices
@media (max-width: 767px) {
  .numbers {
    height: 20.81rem;

    .number {
      .number-title {
        font-size: 3.13rem;
        line-height: 4.13rem;
      }

      .number-content {
        font-size: 1.5rem;
        line-height: 2.06rem;
      }
    }

    .n-0 {
      left: 0;
      top: 0;
    }

    .n-1 {
      left: 21.56rem;
      top: 2.25rem;
    }

    .n-2 {
      left: 0;
      top: 12.19rem;
    }

    .n-3 {
      left: 21.56rem;
      top: 14.63rem;
    }
  }

}
</style>