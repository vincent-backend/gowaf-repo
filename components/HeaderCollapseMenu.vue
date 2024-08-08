<template>
  <transition name="fade">
    <div class="collapse" v-if="show" v-click-outside="onClickOutside">
      <div class="menu">
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
        <div
          class="menu-item"
          :class="{ noborder: activation == 'Products' }"
          @click="activation = activation == 'Products' ? '' : 'Products'"
        >
          <div class="name">
            <NuxtLinkLocale>{{ $t('header.menus.products') }}</NuxtLinkLocale>
            <i class="icon"></i>
          </div>
        </div>
        <transition name="fade">
          <el-menu
            v-if="activation == 'Products'"
            class="menu-main"
            index="title"
            unique-opened
            background-color="#fff"
            style="--el-menu-hover-bg-color: 'rgba(70,207,58,0.06)'"
            text-color="#000"
          >
            <MenuItem
              v-for="item in ProductsMenu($t, $route.path)"
              :item="item"
              :key="item.label"
            />
            <div class="tips">
              <div class="text">
                {{ $t('gXCpxTqfzNLZXGiJ8xq2A') }}
              </div>
              <div class="btn">{{ $t('2S7mKWjVBIPvrShcajZNe') }}</div>
            </div>
          </el-menu>
        </transition>

        <div
          class="menu-item"
          :class="{ noborder: activation == 'solutions' }"
          @click="activation = activation == 'solutions' ? '' : 'solutions'"
        >
          <div class="name">
            <NuxtLinkLocale>{{ $t('header.menus.solutions') }}</NuxtLinkLocale>
            <i class="icon"></i>
          </div>
        </div>
        <transition name="fade">
          <el-menu
            v-if="activation == 'solutions'"
            class="menu-main"
            index="title"
            unique-opened
            background-color="#fff"
            style="--el-menu-hover-bg-color: 'rgba(70,207,58,0.06)'"
            text-color="#000"
          >
            <MenuItem v-for="item in i18ntext" :item="item" :key="item.key" />
            <div class="tips">
              <div class="text">
                {{ $t('85rmjeUnWjmARIPLF29xY') }}
              </div>
              <div class="btn">{{ $t('7PxsJ4g1lv634-yp_BnPT') }}</div>
            </div>
          </el-menu>
        </transition>

        <div
          class="menu-item"
          :class="{ noborder: activation == 'resources' }"
          @click="activation = activation == 'resources' ? '' : 'resources'"
        >
          <div class="name">
            <NuxtLinkLocale>{{ $t('header.menus.resources') }}</NuxtLinkLocale>
            <i class="icon"></i>
          </div>
        </div>
        <transition name="fade">
          <el-menu
            v-if="activation == 'resources'"
            class="menu-main"
            index="title"
            unique-opened
            background-color="#fff"
            style="--el-menu-hover-bg-color: 'rgba(70,207,58,0.06)'"
            text-color="#000"
          >
            <MenuItem
              v-for="item in ResourcesMenu($t, $route.path)"
              :item="item"
              :key="item.label"
            />
            <div class="tips">
              <div class="text">
                {{ $t('tPXv_JZFieY9H8lqVM39K') }}
              </div>
              <div class="btn">{{ $t('mOWw2v3WMQVt98uaQ8S05') }}</div>
            </div>
          </el-menu>
        </transition>
      </div>
      <div class="btn-row">
        <div class="login" @click="$router.push({ path: '/login' })">
          {{ $t('header.login') }}
        </div>
        <div class="get" @click="$router.push({ path: '/forgot' })">
          {{ $t('header.getStarted') }}
        </div>
        <div class="language">EN <i class="icon"></i></div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import type { menuItem } from '~/types/headerMenuItem';
import { ClickOutside as vClickOutside } from 'element-plus';
const { t } = useI18n();
const emit = defineEmits(['update:show']);
const model = defineModel('show', {
  type: Boolean,
  default: false
});
const activation = ref('');
const secondIndex = ref('byNeed');
const threeLevelIndex = ref('videoAndStreaming');
const lastatv = ref(0);

const popoverRef = ref();
const onClickOutside = () => {
  emit('update:show', false);
  // unref(popoverRef).popperRef?.delayHide?.()
};

watch(
  () => model.value,
  val => {
    if (val) {
      var mo = function (e: any) {
        e.preventDefault();
      };
      document.body.style.overflow = 'hidden';
      document.addEventListener('touchmove', mo, false); //禁止页面滑动
    } else {
      var mo = function (e: any) {
        e.preventDefault();
      };
      document.body.style.overflow = ''; //出现滚动条
      document.removeEventListener('touchmove', mo, false);
    }
  },
  {
    immediate: true
  }
);

const i18ntext = computed<any>(() => {
  return [
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
  ];
});
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.icon {
  display: block;
  margin-left: 0.63rem;
  width: 1.75rem;
  height: 1.75rem;
  background: url(/images/home/nav_ic_arrow_an.png);
}
.collapse {
  z-index: 100;
  width: 100vw;
  height: calc(100vh - 5.5rem);
  position: fixed;
  overflow-y: auto;
  top: 5.5rem;
  left: 0;
  background: rgba(255, 255, 255, 1);
  padding-bottom: 23.18rem;
  /* backdrop-filter: blur(40px); */
  .menu {
    width: 100%;
    height: calc(100% - 23.18rem);
    overflow-y: auto;
    padding-top: 5rem;
    padding: 5rem 1.88rem 0;
    box-sizing: border-box;
    .menu-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 6.75rem;
      border-bottom: 0.06rem solid #e6e6e6;
      .name {
        display: flex;
        align-items: center;
      }
    }
    .noborder {
      border: none;
      font-weight: 500;
      .icon {
        display: block;
        margin-left: 0.63rem;
        width: 1.75rem;
        height: 1.75rem;
        background: url(/images/home/nav_ic_arrow_up.png);
      }
    }
    .menu-main {
      border-right: none;
      background: #ffffff;
      border-radius: 0.88rem;
      border: 0.06rem solid #e6e6e6;
      padding: 1.25rem;
    }
  }
}
.btn-row {
  width: 100vw;
  height: 23.18rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.88rem;
  .login {
    width: 33.75rem;
    height: 5rem;
    box-sizing: border-box;
    border-radius: 2.5rem;
    border: 0.13rem solid rgba(70, 207, 58, 1);
    color: rgba(70, 207, 58, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .get {
    width: 33.75rem;
    height: 5rem;
    background: linear-gradient(132deg, #46cf3a 0%, #36cfbc 100%);
    border-radius: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }
  .language {
    width: 33.75rem;
    height: 5rem;
    border-radius: 2.5rem;
    border: 0.13rem solid #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.tips {
  width: calc(100% + 2.36rem);
  margin-left: -1.18rem;
  margin-bottom: -1.18rem;
  height: 6.25rem;
  background: url(/images/home/nav_popup_bot_bg@2x.png);
  display: flex;
  background-size: 100% 100%;
  align-items: center;
  padding: 0.18rem 1.25rem;
  box-sizing: border-box;
  .btn {
    width: 16.25rem;
    height: 4.13rem;
    border-radius: 2.31rem;
    border: 0.06rem solid rgba(70, 207, 58, 1);
    color: rgba(70, 207, 58, 1);
    font-size: 1.5rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 1.63rem;
    color: #4e4e4e;
    line-height: 2.31rem;
    text-align: left;
    font-style: normal;
  }
}
</style>
