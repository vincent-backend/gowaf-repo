<template>
  <Header />
  <NetworkToolsBenner
    :title="$t('network.WebTools.DNSLookur.title')"
    :sub-width="'auto'"
    :sub-title="$t('network.WebTools.DNSLookur.subtitle')"
  >
    <div class="inputBox">
      <el-input
        v-model="input"
        placeholder="Search the bunny.net knowledge base"
        :prefix-icon="Search"
        class="input-with-select"
      >
      </el-input>
    </div>
  </NetworkToolsBenner>
  <Footer :is-show-banner="true" />
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
const input = ref('');
</script>
<style lang="scss" scoped>
.input-with-select {
  height: 66px;
  :deep(.el-input__inner) {
    height: 66px;
    width: 690px;
  }
  :deep(.el-input__wrapper) {
    box-sizing: border-box;
    border-radius: 12px;
  }
}
</style>
