<template>
  <Header />
  <BreadCrumbs
    :title="$t('network.breadCrumbs.WebTools')"
    :items="[
      {
        label: $t('network.breadCrumbs.DNSLookur'),
        href: '/Network/Tools/DNSLookur',
        current: false
      },
      {
        label: $t('network.breadCrumbs.LatencyTest'),
        href: '/Network/Tools/LatencyTest',
        current: false
      },
      {
        label: $t('network.breadCrumbs.HTTPTest'),
        href: '/Network/Tools/HTTPTest',
        current: false
      },
      {
        label: $t('network.breadCrumbs.Traceroute'),
        href: '/Network/Tools/Traceroute',
        current: true
      },
      {
        label: $t('network.breadCrumbs.OtherTools'),
        href: '/Network/Tools/OtherTools',
        current: false
      },
      {
        label: $t('network.breadCrumbs.DiagnosticReport'),
        href: '/Network/Tools/DiagnosticReport',
        current: false
      }
    ]"
  />
  <NetworkToolsBenner
    :title="$t('network.WebTools.DNSLookur.title')"
    :sub-width="'658px'"
    :sub-title="$t('network.WebTools.DNSLookur.subtitle')"
  >
    <div class="inputBox">
      <el-input
        v-model="input"
        placeholder="Polyfill.net"
        :prefix-icon="CommonInputsubfix"
        class="input-with-select"
      >
        <!-- <template #prepend>
          <el-select
            v-model="select"
            placeholder=""
            :suffix-icon="CommonIconDropDown"
          >
            <el-option label="A" value="1" />
            <el-option label="CNAME" value="2" />
            <el-option label="MX" value="3" /
            <el-option label="AAAA" value="4" />
            <el-option label="TXT" value="5" />
            <el-option label="NS" value="6" />
            <el-option label="SRV" value="7" />
          </el-select>
        </template> -->
        <template #append>
          <el-button>
            <img
              class="btn"
              src="/public/images/network/WebTools/common_link_more@2x.png"
              alt=""
              srcset=""
            />
          </el-button>
        </template>
      </el-input>
    </div>
  </NetworkToolsBenner>
  <div class="map">
    <img
      class="img"
      src="/public/images/network/WebTools/dnslookuptest_earth_img@2x.png"
      alt=""
    />
  </div>
  <Footer :is-show-banner="false" />
</template>

<script setup lang="ts">
import { CommonIconDropDown, CommonInputsubfix } from '#components';
const input = ref('');
const select = ref('1');
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
    padding-left: 0;
    border-radius: 12px 0px 0px 12px;
  }
  :deep(.el-input__prefix-inner) {
    width: fit-content;
    .el-input__icon {
      width: fit-content;
    }
  }
  :deep(.el-input-group__append) {
    background: #ffffff;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    width: 66px;
    height: 66px;
    background: #ffffff;
    box-sizing: border-box;
    border-radius: 0px 12px 12px 0px;
    .el-button {
      padding: 0;
      width: fit-content;
      height: fit-content;
      .btn {
        width: 32px;
        height: 32px;
      }
    }
  }
  :deep(.el-input-group__prepend) {
    background: #ffffff;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    box-sizing: border-box;
    width: 120px;
    padding: 0;
    height: 66px;
    border-radius: 12px 0px 0px 12px;
    .el-select {
      width: 100%;
      height: 100%;
    }
    .el-select__wrapper {
      box-shadow: none;
      width: 100%;
      height: 100%;
    }
  }
}
.map {
  width: 100%;
  height: 840px;
  background: #cad6d7;
  display: flex;
  justify-content: center;
  align-items: center;
  .img {
    width: 1075px;
    height: 626px;
  }
}
</style>
