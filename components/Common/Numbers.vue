<script lang="ts" setup>
defineProps<{
  numbersTitle: string;
  items: {
    label: string;
    label2: string;
    content: string;
  }[];
  type?: string;
}>();
</script>

<template>
  <div>
    <h3 v-if="numbersTitle">{{ numbersTitle }}</h3>
    <div class="numbers page-container" 
      :class="{ aboutType: type ? true: false }">
      <div v-for="(item, index) in items" :key="index"
        :class="['number', 'n-' + index]" 
        :style="items.length === 3 
          ? {left: (index * 38) + '%'} 
          : (items.length === 2) ? {left: (index * 50) + '%'} : ''">
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
h3{
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
  
  .n-0, .n-2 {
    &::before{
      content: '';
      position: absolute;
      width: 50px;
      height: 6px;
      background: #ECECEC;
      bottom: 0;
      left:0;
    }
  }
  .n-1, .n-3 {
    &::before{
      content: '';
      position: absolute;
      width: 50px;
      height: 6px;
      background: #ECECEC;
      top: 0;
      left:0;
    }
  }
  .number {
    position: absolute;
    height: 128px;
    .number-title {
      display: flex;
      align-items: center;
      position: relative;
      h5{
        font-family: Mont, Mont;
        font-weight: 600;
        font-size: 48px;
        line-height: 64px;
        background: linear-gradient(0deg, #46CF3A 0%, #36CFBC 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      span{
        font-weight: 600;
        font-size: 20px;
        color: #46CF3A;
        line-height: 26px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding-left: 10px;
      }
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
  .numbers {
    height: 20.81rem;
    .n-0, .n-2 {
      &::before{
        content: '';
        position: absolute;
        width: 3.13rem;
        height: 0.38rem;
        background: #ECECEC;
        bottom: 0;
        left:0;
      }
    }
    .n-1, .n-3 {
      &::before{
        content: '';
        position: absolute;
        width: 3.13rem;
        height: 0.38rem;
        background: #ECECEC;
        top: 0;
        left:0;
      }
    }
    .number {
      height: 8.44rem;
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

}
</style>