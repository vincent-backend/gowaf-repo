<script lang="ts" setup>
import type { menuItem } from '~/types/headerMenuItem';
const { t } = useI18n();
import { ref } from 'vue';
const ProductsRef = ref();
const solutionsRef = ref();
const ProductsPopoverRef = ref();
const solutionsPopoverRef = ref();
const ResourcesRef = ref();
const ResourcesPopoverRef = ref();
const Product = ref<any>({});
const Resources = ref<any>({});
const secondIndex = ref('byNeed');
const threeLevelIndex = ref('videoAndStreaming');
const lastatv = ref(0);

const secondLevel = computed<any>(() => {
  return i18ntext.value[secondIndex.value] || {};
});
const threeLevel = computed<any>(() => {
  return i18ntext.value[threeLevelIndex.value] || {};
});

const mouseover = (type: string, obj: any) => {
  if (type == 'Product') {
    Product.value = obj;
  } else {
    Resources.value = obj;
  }
};
const changeNext = async (level: number, key: string, itemIndex: number) => {
  if (level == 0) {
    secondIndex.value = key;
    await nextTick();
    threeLevelIndex.value = secondLevel.value.items[0].key;
    lastatv.value = 0;
  } else if (level == 1) {
    threeLevelIndex.value = key;
    lastatv.value = 0;
  } else {
    lastatv.value = itemIndex;
  }
};
const i18ntext = computed<Record<string, menuItem>>(() => {
  return {
    solutions: {
      title: 'SOLUTIONS',
      items: [
        {
          title: t('vQza8PI2dLkT-pw8XStiv'),
          icon: '/images/home/Solutions_nav_ic_need.png',
          key: 'byNeed',
          items: [
            {
              title: t('uBq4nhvqnT9bU0iYDRonw'),
              icon: '/images/home/Solutions_nav_ic_video.png',
              key: 'videoAndStreaming',
              items: [
                {
                  title: t('home.superCharge.text2'),
                  subTitle: t('phOTUSZQIOZRGvIxbjvFd'),
                  href: '/Solutions/VideoDelivery'
                },
                {
                  title: t('products.stream.breadCrumbs.mediaCage'),
                  subTitle: t('vmmnc0_a4O5hLAszldDtC'),
                  href: '/Products/Stream/MediaCage'
                },
                {
                  title: t('Fp3x4jHcDc0l_hRLTPHhE'),
                  subTitle: t('_XEg-P2n-k25_2Mp6k_04'),
                  href: '/Products/Stream/MultiDRM'
                },
                {
                  title: t('products.Stream.TranscribeAI.header.preTitle'),
                  subTitle: t('wqXBSJgi4VPuxjkT9JLmw'),
                  href: '/Products/Stream/TranscribeAl'
                }
              ]
            },
            {
              title: t('Hgi82bl59NCKKC4ZTU41R'),
              icon: '/images/home/Solutions_nav_ic_Storage.png',
              key: 'storageAndDelivery',
              items: [
                {
                  title: t('E6zQla74VM0bjbV2LHvJR'),
                  subTitle: t('4zdb1OqkQiGrVzdqYf7Uq'),
                  href: '/Solutions/StorageGame'
                },
                {
                  title: t('solutions.storageSoftware.header.preTitle'),
                  subTitle: t('jFcfWlXQeQtI6pPjS0yXS'),
                  href: '/Solutions/StorageSoftware'
                }
              ]
            },
            {
              title: t('LWBf-k4Lfu_Sy6FeMbbet'),
              icon: '/images/home/Solutions_nav_ic_Website.png',
              key: 'websitePerformance',
              items: [
                {
                  title: t('solutions.websiteAcceleration.header.preTitle'),
                  subTitle: t('R_0012db-U-csa-HLM2HF'),
                  href: '/Solutions/WebsiteAcceleration'
                },
                {
                  title: t('KhWElwN6SphgMZHxZ_F3U'),
                  subTitle: t('LDK9urT1thv-G0kXwMwZZ'),
                  href: '/Products/Cdn/PermaCache'
                },
                {
                  title: t('products.optimizer.TransformAPI.header.preTitle'),
                  subTitle: t('Gq9v0fAY2Sat5Cx5yqTYl'),
                  href: '/Products/optimizer/TransformAPI'
                },
                {
                  title: t('ePEhvR4jTK-D1hexokK1R'),
                  subTitle: t('5HbGO-720R94SAgDJoKio'),
                  href: '/Solutions/WebsiteWordpress'
                }
              ]
            },
            {
              title: t('aYoP5UH-vLL9wACCz2Iim'),
              icon: '/images/home/Solutions_nav_ic_Security.png',
              key: 'securityAndProtection',
              items: [
                {
                  title: t('E2GIwsnt9KqNp41nyR3we'),
                  subTitle: t('sb2j1HH1vvhJCgHtQT2Ae'),
                  href: '/Solutions/SecurityCdn'
                },
                {
                  title: t('network.breadCrumbs.ddosProtection'),
                  subTitle: t('B2Wf2gGLTIJp-8raiXieu'),
                  href: '/Network/Ddos'
                }
              ]
            }
          ]
        },
        {
          title: t('F4LoWXNjG-f_XXq5aV2ca'),
          icon: '/images/home/Solutions_nav_ic_Industry.png',
          key: 'byIndustry',
          items: [
            {
              title: t('resources.breadCrumbs.Streaming'),
              icon: '/images/home/Solutions_nav_ic_video.png',
              key: 'Streaming',
              items: [
                {
                  title: t('home.superCharge.text2'),
                  subTitle: t('Pn1Ck3MEQwT-g61zVOtp6'),
                  href: '/Solutions/VideoDelivery'
                },
                {
                  title: t('products.Stream.TranscribeAI.header.preTitle'),
                  subTitle: t('wqXBSJgi4VPuxjkT9JLmw'),
                  href: '/Products/Stream/TranscribeAl'
                }
              ]
            },
            {
              title: t('1lJVE5HeTjURTciDYGuK3'),
              icon: '/images/home/Solutions_nav_ic_Storage.png',
              key: 'Ecommerce',
              items: [
                {
                  title: t('solutions.websiteAcceleration.header.preTitle'),
                  subTitle: t('Qn7K6FrW0nTvnQGy1xHSY'),
                  href: '/Solutions/WebsiteAcceleration'
                },
                {
                  title: t('AK1pQc4KfyFxect6tcZqx'),
                  subTitle: t('l42NSMQ4n5tEY-ccYisZC'),
                  href: '/Products/optimizer/TransformAPI'
                },
                {
                  title: t('solutions.securityCdn.header.preTitle'),
                  subTitle: t('x0Z2-ogDmOyMsKLPlm0O0'),
                  href: '/Solutions/WebsiteWordpress'
                },
                {
                  title: t('D5vgCmCvXQ0jLJIIZIZ08'),
                  subTitle: t('zgbdYFDnlOmzo9cexKai6'),
                  href: '/Solutions/SecurityCdn'
                }
              ]
            },
            {
              title: 'Gaming',
              icon: '/images/home/Solutions_nav_ic_Website.png',
              key: 'Gaming',
              items: [
                {
                  title: t('solutions.storageGame.header.preTitle'),
                  subTitle: t('ODjJHLiW9O4S3pTbdTegM'),
                  href: '/Solutions/StorageGame'
                },
                {
                  title: t('solutions.storageSoftware.header.preTitle'),
                  subTitle: t('al2HMDjHTjtRcfg0mNoZG'),
                  href: '/Solutions/StorageSoftware'
                }
              ]
            }
          ]
        }
      ]
    }
  };
});
</script>

<template>
  <div class="menu">
    <!-- Network -->
    <div class="menu-item">
      <NuxtLinkLocale to="/network/overview">{{
        $t('header.menus.network')
      }}</NuxtLinkLocale>
    </div>

    <!-- Pricing -->
    <div class="menu-item">
      <NuxtLinkLocale to="/pricing/overview">{{
        $t('header.menus.pricing')
      }}</NuxtLinkLocale>
    </div>

    <!-- Products -->
    <div class="menu-item" ref="ProductsRef">
      <NuxtLinkLocale>{{ $t('header.menus.products') }}</NuxtLinkLocale>
      <i class="icon"></i>
    </div>
    <el-popover
      ref="ProductsPopoverRef"
      popper-class="popper-menu"
      :virtual-ref="ProductsRef"
      trigger="hover"
      width="auto"
      :offset="20"
      virtual-triggering
    >
      <div class="menu-products">
        <div
          v-for="(items, index) in ProductsMenu($t, $route.path, 'web')"
          :key="index"
          class="items-row"
        >
          <NuxtLinkLocale
            class="items-group"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="items-group-header">
              <img :src="item.icon"/>
              <div>
                {{ item.label }}
              </div>
            </div>
            <NuxtLinkLocale
              v-for="(p, index) in item.children"
              :key="index"
              :to="p.href"
              @mouseover="mouseover('Product', item)"
              class="items-group-content"
              :class="{ 'is-active': item.label == Product.label }"
            >
              {{ p.label }}
            </NuxtLinkLocale>
          </NuxtLinkLocale>
        </div>
      </div>
    </el-popover>

    <!-- Solutions -->
    <div class="menu-item" ref="solutionsRef">
      <NuxtLinkLocale>{{ $t('header.menus.solutions') }}</NuxtLinkLocale>
      <i class="icon"></i>
    </div>
    <el-popover
      ref="solutionsPopoverRef"
      popper-class="popper-menu"
      :virtual-ref="solutionsRef"
      trigger="hover"
      :offset="20"
      width="auto"
      virtual-triggering
    >
      <div class="menu-solutions">
        <div
          v-for="(firstLevelItem, index) in i18ntext.solutions.items"
          class="menu-solutions-items"
          :key="index"
        >
          <div class="items-title">
            {{firstLevelItem.title}}
          </div>
          <div class="h-separator"/>
          <div class="items-group">
            <div
              v-for="(secondLevelItem, index) in firstLevelItem.items"
              :key="index"
              class="items-sub-group"
            >
              <div class="sub-group-header">
                <img :src="secondLevelItem.icon"/>
                <div>
                  {{ secondLevelItem.title }}
                </div>
              </div>
              <div class="sub-group-content">
                <NuxtLinkLocale
                  v-for="(thirdLevelItem, index) in secondLevelItem.items"
                  :key="index"
                  :to="thirdLevelItem.href"
                  class="item"
                >
                  {{ thirdLevelItem.title }}
                </NuxtLinkLocale>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-popover>

    <!-- Resources -->
    <div class="menu-item" ref="ResourcesRef">
      <NuxtLinkLocale>{{ $t('header.menus.resources') }}</NuxtLinkLocale>
      <i class="icon"></i>
    </div>
    <el-popover
      ref="ResourcesPopoverRef"
      :virtual-ref="ResourcesRef"
      popper-class="popper-menu"
      trigger="hover"
      :offset="20"
      width="auto"
      virtual-triggering
    >
      <div class="menu-level-1 menu-level-2">
        <div class="ul-menu">
          <div class="submenu-title">{{ $t('header.menus.resources') }}</div>
          <NuxtLinkLocale
            class="item-level-1"
            v-for="(item, index) in ResourcesMenu($t, $route.path)"
            :key="index"
            @mouseover="mouseover('Resources', item)"
            :class="{ 'is-active': item.label == Resources.label }"
            :to="item.href"
          >
            {{ item.label }}
          </NuxtLinkLocale>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<style lang="less" scoped>
.menu {
  display: flex;
  align-items: center;
  gap: 34px;

  .menu-item {
    display: flex;
    align-items: center;
    position: relative;

    a {
      color: #4e4e4e;
      line-height: 18px;
      cursor: pointer;
    }

    .icon {
      margin-left: 4px;

      width: 14px;
      height: 14px;
      background: url(/images/home/nav_ic_arrow_an.png);
    }

    &.open {
      a {
        font-weight: 500;
      }

      .icon {
        background: url(/images/home/nav_ic_arrow_up.png);
      }

      .sub-menu {
        display: block;
      }
    }
  }
}
.menu-level-1 {
  width: fit-content;
  display: flex;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 20px 16px 10px;
  gap: 20px;
  .ul-menu {
    border-right: 1px solid #e6e6e6;
    padding-right: 10px;
  }
  &.menu-level-2 {
    .ul-menu {
      border: none;
    }
  }
  .ul-menu,
  .current-menu {
    min-width: 150px;
    display: flex;
    flex-direction: column;
    .submenu-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 14px;
      color: #000000;
      line-height: 16px;
      text-align: left;
      font-style: normal;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .item-level-1 {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 12px;
      color: #000000;
      line-height: 16px;
      text-align: left;
      font-style: normal;
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding: 7px 6px 7px 10px;
      margin-bottom: 6px;
      .arrow-icon {
        width: 14px;
        margin-left: auto;
        height: 14px;
        background: url(/images/home/nav_ic_arrow_right_nor.png);
      }
      &:hover {
        background: rgba(70, 207, 58, 0.06);
        font-weight: 500;
        color: #46cf3a;
        .arrow-icon {
          background: url(/images/home/nav_ic_arrow_right_sel.png);
        }
      }
      &.is-active {
        background: rgba(70, 207, 58, 0.06);
        font-weight: 500;
        color: #46cf3a;

        .arrow-icon {
          background: url(/images/home/nav_ic_arrow_right_sel.png);
        }
      }
    }
  }
}
.menu-products {
  min-width: 582px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #E6E6E6;
  padding: 36px;
  gap: 36px;
  .items-row {
    display: flex;
    flex-direction: row;
    gap:36px;
    width: 100%;
    .items-group-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0px 12px 11px 12px;
    }
    .items-group {
      width: 33.33%;
      margin-bottom: 17px;
      .items-group-content {
        display: flex;
        flex-direction: row;
        padding: 7px 12px;
        font-weight: 400;
        font-size: 12px;
        color: #000000;
        line-height: 16px;
        text-align: left;
        font-style: normal;
        &:hover {
          background: rgba(70, 207, 58, 0.06);
          color: #46cf3a;
          border-radius: 4px;
          font-weight: 500;
        }
      }
    }
  }
}
.menu-solutions {
  display: flex;
  flex-direction: column;
  min-width: 908px;
  padding: 36px;
  gap: 36px;
  .menu-solutions-items {
    width: 100%;
    .items-title {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 14px;
      color: #000000;
      line-height: 16px;
      text-align: left;
      font-style: normal;
      text-transform: uppercase;
    }
    .items-group {
      display: flex;
      flex-direction: row;
      width: 100%;
      .items-sub-group {
        display: flex;
        flex-direction: column;
        width: 25%;
        .sub-group-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0px 12px 11px 12px;
          gap: 12px;
        }
        .sub-group-content {
          display: flex;
          flex-direction: column;
          .item {
            padding: 7px 12px;
            font-weight: 400;
            font-size: 12px;
            color: #000000;
            line-height: 16px;
            text-align: left;
            font-style: normal;
            &:hover {
              background: rgba(70, 207, 58, 0.06);
              color: #46cf3a;
              font-weight: 500;
              border-radius: 4px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .h-separator {
      height: 1px;
      background: #E6E6E6;
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
}

// For tablet devices
@media (min-width: 767px) and (max-width: 1160px) {
  .menu-solutions {
    min-width: 700px;
    width: 730px;
    padding: 3rem 1rem;
  }
}
</style>
<style lang="scss">
.popper-menu {
  padding: 0 !important;
  border-radius: 8px !important;
}
</style>
