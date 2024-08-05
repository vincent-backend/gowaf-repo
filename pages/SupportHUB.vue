<template>
  <Header />
  <NetworkToolsBenner
    :title="$t('home.SupportHUB.title')"
    :sub-width="'auto'"
    :sub-title="$t('home.SupportHUB.subtitle')"
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
  <div class="page-container fold">
    <div
      class="row"
      v-for="(item, index) in i18ntext"
      :key="index"
    >
      <div class="title">{{ item.title }}</div>
      <div class="subtitle">{{ item.subtitle }}</div>
      <div class="box">
        <div class="box-item" v-for="(d, i) in item.items" :key="i">
          <HomeCollapse :list="[d]"></HomeCollapse>
        </div>
      </div>
    </div>
  </div>
  <Footer :is-show-banner="true" />
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
const input = ref('');
definePageMeta({
  title: 'SupportHUB'
});

const i18ntext = computed<any>(() => {
  return [
    {
      title: 'CDN',
      subtitle:
        'Gowaf CDN product documentation, integration guides, and troubleshooting help.',
      items: [
        {
          title: 'Getting Started',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        },
        {
          title: 'Integration Guides',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        },
        {
          title: 'Product Documentatio',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        },
        {
          title: 'Technical Informatio',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        },
        {
          title: 'Troubleshooting',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        },
        {
          title: 'Edge Rules',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        }
      ]
    },
    {
      title: 'DNS',
      subtitle:
        'Gowaf DNS product documentation, integration guides, and troubleshooting help.',
      items: [
        {
          title: 'Getting Started',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        },
        {
          title: 'Product Documentatio',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        }
      ]
    },
    {
      title: 'Storage',
      subtitle:
        'Gowaf DNS product documentation, integration guides, and troubleshooting help.',
      items: [
        {
          title: 'Getting Started',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        },
        {
          title: 'Product Documentatio',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        }
      ]
    },
    {
      title: 'Stream',
      subtitle:
        'Gowaf DNS product documentation, integration guides, and troubleshooting help.',
      items: [
        {
          title: 'Getting Started',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        },
        {
          title: 'Product Documentatio',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        }
      ]
    },
    {
      title: 'Optimizer',
      subtitle:
        'Gowaf DNS product documentation, integration guides, and troubleshooting help.',
      items: [
        {
          title: 'Getting Started',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        },
        {
          title: 'Product Documentatio',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        }
      ]
    },
    {
      title: 'Frequently Asked Questions (FAQ)',
      subtitle:
        'Gowaf DNS product documentation, integration guides, and troubleshooting help.',
      items: [
        {
          title: 'Billing',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        },
        {
          title: 'Pull Zones',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        },
        {
          title: 'Edge Storage',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        },
        {
          title: 'Account',
          subtitle: [
            'How to set up a direct IP origin URL with a custom hostname using Edge Rules',
            'The list of dynamic variables in the Edge Rule redirect URL',
            'How to redirect your b-cdn.net hostname to your custom CDN hostname using edge rules',
            'How to correctly set up the Edge Rule trigger path',
            'How to use Edge Rules to set a custom cache time for a file extension'
          ]
        }
      ]
    }
  ];
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
    border-radius: 12px;
  }
}
.fold {
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
  .row {
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
    .subtitle {
      margin: 16px 0 32px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #4e4e4e;
      line-height: 24px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px 32px;
      .box-item {
        /* flex: 1; */
        :deep(.el-collapse-item__header) {
          background: linear-gradient(0deg, #46cf3a 0%, #36cfbc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}
</style>
