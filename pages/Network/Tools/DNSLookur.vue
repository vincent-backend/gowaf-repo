<template>
  <Header />
  <BreadCrumbs
    :title="$t('network.breadCrumbs.WebTools')"
    :items="[
      {
        label: $t('network.breadCrumbs.DNSLookur'),
        href: '/Network/Tools/DNSLookur',
        current: true
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
      <client-only>
        <XsOnly>
          <el-select
            v-model="select"
            style="width: 16.25rem"
            placeholder=""
            :suffix-icon="CommonIconDropDown"
          >
            <el-option label="A" value="1" />
            <el-option label="CNAME" value="2" />
            <el-option label="MX" value="3" />
            <el-option label="AAAA" value="4" />
            <el-option label="TXT" value="5" />
            <el-option label="NS" value="6" />
            <el-option label="SRV" value="7" />
          </el-select>
        </XsOnly>
        <el-input
          v-model="domain"
          placeholder="gowaf.com"
          :prefix-icon="CommonInputsubfix"
          class="input-with-select"
        >
          <template #prepend>
            <el-select
              v-model="dnsType"
              :suffix-icon="CommonIconDropDown"
            >
              <el-option label="A" value="A" />
              <el-option label="CNAME" value="CNAME" />
              <el-option label="MX" value="MX" />
              <el-option label="AAAA" value="AAAA" />
              <el-option label="TXT" value="TXT" />
              <el-option label="NS" value="NS" />
              <el-option label="SRV" value="SRV" />
            </el-select>
          </template>
          <template #append>
            <el-button @click="findDns">
              <img
                class="btn"
                src="/images/network/WebTools/common_link_more@2x.png"
                alt=""
                srcset=""
              />
            </el-button>
          </template>
        </el-input>
        <XsOnly>
          <el-button class="xs-btn">
            <img
              class="btn"
              src="/images/network/WebTools/common_link_more@2x.png"
              alt=""
              srcset=""
            />
          </el-button>
        </XsOnly>
      </client-only>
    </div>
  </NetworkToolsBenner>
  <div class="google-map">
    <NetworkGoogleMap :node-list="nodeList"/>
  </div>
  <div class="page-container NationalFlagList">
    <div class="column">
      <NetworkNationalFlagList
        :title="$t('network.WebTools.DNSLookur.title')"
        :list="i18ntext.North_America"
      ></NetworkNationalFlagList>
      <NetworkNationalFlagList
        :title="$t('nationalFlag.continentName2')"
        :list="i18ntext.Asia"
      ></NetworkNationalFlagList>
      <NetworkNationalFlagList
        :title="$t('nationalFlag.continentName5')"
        :list="i18ntext['Middle_East&Africa']"
      ></NetworkNationalFlagList>
    </div>
    <div class="column">
      <NetworkNationalFlagList
        :title="$t('nationalFlag.continentName1')"
        :list="i18ntext.Europe"
      ></NetworkNationalFlagList>
      <NetworkNationalFlagList
        :title="$t('nationalFlag.continentName3')"
        :list="i18ntext.Oceania"
      ></NetworkNationalFlagList>
      <NetworkNationalFlagList
        :title="$t('nationalFlag.continentName4')"
        :list="i18ntext.South_America"
      ></NetworkNationalFlagList>
    </div>
  </div>
  <Footer :is-show-banner="false" />
</template>

<script setup lang="ts">
import { CommonIconDropDown, CommonInputsubfix } from '#components';
import axios from 'axios';
import countryCode from '../../../utils/country.json';
const isp_global = countryCode.map(c=>c.zh).join(',');
const dnsType = ref('A');
const domain = ref('');
const nodeList = ref([]);
definePageMeta({
  title: 'Web Tools'
});
const { t } = useI18n();
const i18ntext = computed(() => {
  return nationalFlag(t);
});

const findDns = async () => {

  const nodesData = await axios.get('https://test.api.aicesu.com/api/node/get_node?type=geolocation');
  const nodes = nodesData.data.data;

  const GLOBAL_PING_BASEURL = "https://test.api.aicesu.com/api/speed/speed_control";
  const dnsPing = await axios.post(GLOBAL_PING_BASEURL, {
    "action": "dns",
    "dns": "8.8.8.8",
    "record": dnsType.value,
    "isp": isp_global,
    "target": domain.value
  })

  if (dnsPing.data.status === false) {
    nodeList.value = [];
  }

  const jobid = dnsPing.data.data.jobid;

  // Wait for 6 seconds
  await new Promise(resolve => setTimeout(resolve, 1000));

  const dnsData = await axios.get(GLOBAL_PING_BASEURL, {
      params: {
      "jobid": jobid,
      "action": "dns",
      "remain_time": 0,
      "target": domain.value
    }
  })

  if (dnsData.data) {
      const measure_result= dnsData.data.data.checkpoints.slice(0, Math.max(parseInt(100), 1)).map(checkpoint => {
        let region = countryCode.find(c => c.zh.includes(checkpoint.node_isp));
        let lat = 0;
        let lng = 0;
        if (nodes !== null) {
          let node = nodes[checkpoint.node_id];
          lat = node.latitude;
          lng = node.longitude;
        }

        if (region) {
          return {...checkpoint, code: region.value.toLowerCase(), lat: lat, lng: lng};
        } else {
          return {...checkpoint, code: "", lat: lat, lng: lng};
        }
      });

      nodeList.value = measure_result;
    }

}
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
.google-map {
  width: 100%;
  height: 500px;
  // background: #cad6d7;
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
  .google-map {
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
      display: none;
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
    justify-content: center;
    align-items: center;
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
