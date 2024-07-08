<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps<{
  numbersTitle: string;
  items: {
    label: string;
    label2: string;
    content: string;
  }[];
  type?: string;
  isRow?: boolean;
}>();

const leftText = (index: number) => {
  return props.items.length === 3
    ? index * 37 + '%'
    : props.items.length === 2
    ? { left: index * 50 + '%' }
    : '';
};
</script>

<template>
  <div class="numbers-container">
    <h3 v-if="numbersTitle">{{ numbersTitle }}</h3>
    <template v-if="!isRow">
      <div
        class="numbers page-container"
        :class="{ aboutType: type ? true : false }"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="['number', 'n-' + index]"
          :style="isMobile ? '' : leftText(index)"
        >
          <div class="number-title">
            <h5>{{ item.label }}</h5>
            <span v-if="item.label2">{{ item.label2 }}</span>
          </div>
          <div class="number-content">{{ item.content }}</div>
        </div>
      </div>
    </template>
    <div class="rowList" v-else>
      <div v-for="(item, index) in items" :key="index" class="row-item">
        <div class="number-title">
          <h5>{{ item.label }}</h5>
          <span v-if="item.label2">{{ item.label2 }}</span>
        </div>
        <div class="number-content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
h3 {
  font-weight: 500;
  font-size: 30px;
  color: #000000;
  line-height: 42px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin: 60px auto 20px;
  width: 1200px;
}
.numbers {
  height: 128px;
  position: relative;

  .n-0,
  .n-2 {
    &::before {
      content: '';
      position: absolute;
      width: 50px;
      height: 6px;
      background: #ececec;
      bottom: 0;
      left: 0;
    }
  }
  .n-1,
  .n-3 {
    &::before {
      content: '';
      position: absolute;
      width: 50px;
      height: 6px;
      background: #ececec;
      top: 0;
      left: 0;
    }
  }
  .number {
    position: absolute;
    height: 128px;
    .number-title {
      display: flex;
      align-items: center;
      position: relative;
      h5 {
        font-family: Mont, Mont;
        font-weight: 600;
        font-size: 48px;
        line-height: 64px;
        background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      span {
        font-weight: 600;
        font-size: 20px;
        color: #46cf3a;
        line-height: 26px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding-left: 10px;
      }
    }

    .number-content {
      font-size: 16px;
      color: #4e4e4e;
      white-space: pre-wrap;
    }
  }

  .n-0 {
    left: 0;
    top: 0;
  }

  .n-1 {
    left: 271px;
    padding-top: 36px;
  }

  .n-2 {
    left: 622px;
    top: 0;
  }

  .n-3 {
    left: 966px;
    padding-top: 36px;
  }
  &.aboutType {
    .n-1 {
      left: 435px;
    }

    .n-2 {
      left: 915px;
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  h3 {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 2.5rem;
    color: #000000;
    width: 100%;
    box-sizing: border-box;
    line-height: 3.5rem;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin: 6.25rem auto 2.5rem;
  }
  .numbers-container {
    padding: 0 1.88rem;
  }
  .numbers {
    height: 20.81rem;
    .n-0,
    .n-2 {
      &::before {
        content: '';
        position: absolute;
        width: 3.13rem;
        height: 0.38rem;
        background: #ececec;
        bottom: 0;
        left: 0;
      }
    }
    .n-1,
    .n-3 {
      &::before {
        content: '';
        position: absolute;
        width: 3.13rem;
        height: 0.38rem;
        background: #ececec;
        top: 0;
        left: 0;
      }
    }
    .number {
      height: 8.44rem;
      .number-title {
        font-size: 2.78rem;
        line-height: 4.13rem;
        h5 {
          font-size: 2.78rem;
          line-height: 4.13rem;
        }
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
      top: 0rem;
      padding-top: 2rem;
    }

    .n-2 {
      left: 0;
      top: 12.19rem;
    }

    .n-3 {
      left: 21.56rem;
      top: 12.63rem;
      padding-top: 2rem;
    }
  }
  .rowList {
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
    .row-item {
      display: flex;
      flex-direction: column;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 3.13rem;
        height: 0.38rem;
        background: #ececec;
        bottom: 0;
        left: 0;
      }
      .number-title {
        display: flex;
        align-items: center;
        gap: 0.63rem;
        h5 {
          font-family: Mont, Mont;
          font-weight: 600;
          font-size: 3.13rem;
          color: #000000;
          line-height: 4.13rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
          background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        span {
          font-family: Mont, Mont;
          font-weight: 600;
          font-size: 1.5rem;
          color: #000000;
          line-height: 2rem;
          text-align: left;
          font-style: normal;
          text-transform: none;
          background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .number-content {
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 1.5rem;
        color: #4e4e4e;
        line-height: 2.06rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding-bottom: 2.25rem;
      }
    }
  }
}
</style>
