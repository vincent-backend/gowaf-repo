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
        current: true
      },
      {
        label: $t('network.breadCrumbs.HTTPTest'),
        href: '/Network/Tools/HTTPTest',
        current: false
      },
      {
        label: $t('network.breadCrumbs.Traceroute'),
        href: '/Network/Tools/Traceroute',
        current: false
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
        placeholder="Gowaf.net"
        :prefix-icon="CommonInputsubfix"
        class="input-with-select"
      >
        <template #append>
          <LgOnly>
            <el-button>
              <img
                class="btn"
                src="/public/images/network/WebTools/common_link_more@2x.png"
                alt=""
                srcset=""
              />
            </el-button>
          </LgOnly>
        </template>
      </el-input>
      <XsOnly>
        <el-button class="xs-btn">
          <img
            class="btn"
            src="/public/images/network/WebTools/common_link_more@2x.png"
            alt=""
            srcset=""
          />
        </el-button>
      </XsOnly>
    </div>
  </NetworkToolsBenner>
  <div class="map">
    <img
      class="img"
      src="/public/images/network/WebTools/dnslookuptest_earth_img@2x.png"
      alt=""
    />
  </div>
  <div class="page-container NationalFlagList">
    <div class="column">
      <NetworkNationalFlagList
        :title="$t('network.WebTools.DNSLookur.title')"
        :list="$tm('nationalFlag.North_America')"
      ></NetworkNationalFlagList>
      <NetworkNationalFlagList
        :title="$t('nationalFlag.continentName[2]')"
        :list="$tm('nationalFlag.Asia')"
      ></NetworkNationalFlagList>
      <NetworkNationalFlagList
        :title="$t('nationalFlag.continentName[5]')"
        :list="$tm('nationalFlag.Middle_East&Africa')"
      ></NetworkNationalFlagList>
    </div>
    <div class="column">
      <NetworkNationalFlagList
        :title="$t('nationalFlag.continentName[1]')"
        :list="$tm('nationalFlag.Europe')"
      ></NetworkNationalFlagList>
      <NetworkNationalFlagList
        :title="$t('nationalFlag.continentName[3]')"
        :list="$tm('nationalFlag.Oceania')"
      ></NetworkNationalFlagList>
      <NetworkNationalFlagList
        :title="$t('nationalFlag.continentName[4]')"
        :list="$tm('nationalFlag.South_America')"
      ></NetworkNationalFlagList>
    </div>
  </div>
  <Footer :is-show-banner="false" />
</template>

<script setup lang="ts">
import { CommonIconDropDown, CommonInputsubfix } from '#components';
const input = ref('');
const select = ref('1');
definePageMeta({
  title: 'Web Tools'
});
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
.NationalFlagList {
  display: flex;
  gap: 80px;
  background: #fafafa;
  margin-bottom: 100px;
}
@media (max-width: 767px) {
  .NationalFlagList {
    display: flex;
    gap: 6.25rem;
    padding: 6.25rem 0;
    box-sizing: border-box;
    background: #fafafa;
    margin-bottom: 0;
    flex-direction: column;
  }
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6.25rem;
  }
  .map {
    width: 100%;
    height: 39.81rem;
    background: #cad6d7;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      width: 100%;
      height: 27.25rem;
    }
  }
  .input-with-select {
    height: 4.13rem;
    :deep(.el-input__inner) {
      width: 31.13rem;
      height: 4.13rem;
    }
    :deep(.el-input__wrapper) {
      box-sizing: border-box;
      padding-left: 0;
      border-radius: 0.75rem 0.75rem;
    }
    :deep(.el-input__prefix-inner) {
      width: fit-content;
      .el-input__icon {
        width: fit-content;
      }
    }
    :deep(.el-input-group__append) {
      background: #ffffff;
      display: none;
      align-items: center;
      flex-shrink: 0;
      justify-content: center;
      width: 66px;
      height: 66px;
      box-sizing: border-box;
      border-radius: 0px 0.75rem 0.75rem 0px;
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
      width: 4rem;
      padding: 0;
      height: 4.13rem;
      border-radius: 0.75rem 0px 0px 0.75rem;
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
  .inputBox {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .xs-btn {
    margin: 0 auto;
    width: 7.5rem;
    height: 4.13rem;
    background: #ffffff;
    border-radius: 0.75rem;
    .btn {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
