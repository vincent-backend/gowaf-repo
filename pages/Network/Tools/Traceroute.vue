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
    :title="$t('network.WebTools.Traceroute.title')"
    :sub-width="'658px'"
    :class="{ maxheight: show }"
    :sub-title="$t('network.WebTools.DNSLookur.subtitle')"
  >
    <div class="inputBox">
      <el-input
        v-model="input"
        placeholder="Gowaf.net"
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
    <div class="BennerList" v-if="!show">
      <div
        class="item"
        v-for="(item, index) in $tm('nationalFlag.BennerList')"
        :key="index"
      >
        <img class="nationalFlag" :src="item.img" alt="" />
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
    <transition name="fade">
      <div class="allNations" v-if="show">
        <div class="column" v-for="(item, index) in columnlist" :key="index">
          <NetworkNationalFlagList
            v-for="(n, indexs) in item"
            :key="indexs"
            type="transparent"
            :title="n.title"
            :list="n.list"
          ></NetworkNationalFlagList>
        </div>
      </div>
    </transition>
    <div class="more" :class="{ rotate: !show }" @click="show = !show">
      show all
      <el-icon class="icon" color="#fff" ize="16"><DArrowRight /></el-icon>
    </div>
  </NetworkToolsBenner>
  <div class="page-container article">
    <div class="article-nav">
      <div class="left">
        <div class="item">{{ $t('network.WebTools.Traceroute.Host') }}</div>
        <div class="item">
          {{ $t('network.WebTools.Traceroute.PacketLoss') }}
        </div>
      </div>
      <div class="right">
        <div class="item">{{ $t('network.WebTools.Traceroute.Average') }}</div>
        <div class="item">{{ $t('network.WebTools.Traceroute.Best') }}</div>
        <div class="item">{{ $t('network.WebTools.Traceroute.Worst') }}</div>
      </div>
    </div>
    <div class="list">
      <div class="column">
        <div
          class="article-item"
          v-for="(item, index) in $tm('network.WebTools.Traceroute.article1')"
          :key="index"
        >
          <div class="title">{{ item.title }}</div>
          <div class="content">
            <p v-for="(content, index) in item.content" :key="index">
              {{ content }}
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div
          class="article-item"
          v-for="(item, index) in $tm('network.WebTools.Traceroute.article2')"
          :key="index"
        >
          <div class="title">{{ item.title }}</div>
          <div class="content">
            <p v-for="(content, index) in item.content" :key="index">
              {{ content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer :is-show-banner="false" />
</template>

<script setup lang="ts">
import { DArrowRight } from '@element-plus/icons-vue';
import { CommonIconDropDown, CommonInputsubfix } from '#components';
const { t, tm } = useI18n();
const input = ref('');
const show = ref(false);
definePageMeta({
  title: 'Web Tools'
});

const columnlist = [
  [
    {
      title: t('nationalFlag.continentName[1]'),
      list: tm('nationalFlag.Europe') as any
    }
  ],
  [
    {
      title: t('nationalFlag.continentName[0]'),
      list: tm('nationalFlag.North_America') as any
    }
  ],
  [
    {
      title: t('nationalFlag.continentName[2]'),
      list: tm('nationalFlag.Asia') as any
    }
  ],
  [
    {
      title: t('nationalFlag.continentName[3]'),
      list: tm('nationalFlag.Oceania') as any
    },
    {
      title: t('nationalFlag.continentName[4]'),
      list: tm('nationalFlag.South_America') as any
    },
    {
      title: t('nationalFlag.continentName[5]'),
      list: tm('nationalFlag.Middle_East&Africa') as any
    }
  ]
];
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
.BennerList {
  display: flex;
  margin-top: 40px;
  gap: 40px;
  .item {
    display: flex;
    align-items: center;
    gap: 20px;
    .nationalFlag {
      width: 40px;
      height: 40px;
    }
    .name {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 20px;
      color: #ffffff;
      line-height: 28px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
}
.more {
  cursor: pointer;
  font-family: PingFangSC, PingFang SC;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 10px;
  .icon {
    transform: rotate(270deg);
    :deep(path) {
      color: #ffffff !important;
    }
  }
  &.rotate {
    .icon {
      transform: rotate(90deg);
    }
  }
}
.allNations {
  margin-top: 120px;
  width: 100%;
  display: flex;
  gap: 50px;
  .column {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.maxheight {
  padding: 100px 0 62px 0;
  /* transition: all 0.3s; */
  height: fit-content;
  background: linear-gradient(316deg, #3475f5 0%, #12e599 100%);
}
.article {
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  background: #fafafa;
  .article-nav {
    display: flex;
    padding: 24px 80px;
    border-bottom: 1px solid #d8d8d8;
    .left {
      margin-right: auto;
      display: flex;
      gap: 80px;
      .item {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 30px;
        color: #000000;
        line-height: 42px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
    .right {
      margin-left: auto;
      display: flex;
      gap: 80px;
      .item {
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 30px;
        color: #000000;
        line-height: 42px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
  }
  .list {
    margin-top: 100px;
    display: flex;
    gap: 80px;
    .column {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 80px;
      .article-item {
        flex-direction: column;
        gap: 16px;
        display: flex;
        .title {
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 30px;
          color: #000000;
          line-height: 42px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        .content {
          display: flex;
          gap: 16px;
          flex-direction: column;
          p {
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #4e4e4e;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
  }
}
</style>
