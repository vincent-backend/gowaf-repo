<template>
  <transition name="fade">
    <div class="collapse" v-if="show">
      <div class="menu">
        <div class="menu-item">
          <a href="/network/overview">{{ $t('header.menus.network') }}</a>
        </div>

        <!-- Pricing -->
        <div class="menu-item">
          <a href="/pricing/overview">{{ $t('header.menus.pricing') }}</a>
        </div>

        <!-- Products -->
        <div class="menu-item">
          <div class="name">
            <a href="#">{{ $t('header.menus.products') }}</a>
            <i class="icon"></i>
          </div>
        </div>

        <div
          class="menu-item"
          :class="{ noborder: activation == 'solutions' }"
          @click="activation = activation == 'solutions' ? '' : 'solutions'"
        >
          <div class="name">
            <a href="#">{{ $t('header.menus.solutions') }}</a>
            <i class="icon"></i>
          </div>
        </div>
        <transition name="fade">
          <el-menu
            v-if="activation == 'solutions'"
            class="menu-main"
            router
            unique-opened
            background-color="#fff"
            style="--el-menu-hover-bg-color: 'rgba(70,207,58,0.06)'"
            text-color="#000"
          >
            <MenuItem
              v-for="item in [
                $tm('header.solutionsMenu.solutions'),
                $tm('header.solutionsMenu.byNeed'),
                $tm('header.solutionsMenu.videoAndStreaming')
              ]"
              :item="item"
              :key="item.title"
            />
            <div class="tips">
              <div class="text">
                See how Polyfill helped other companies reach the next leve!
              </div>
              <div class="btn">Polyfill case studies</div>
            </div>
          </el-menu>
        </transition>
        <div class="menu-item">
          <div class="name">
            <a href="#">{{ $t('header.menus.resources') }}</a>
            <i class="icon"></i>
          </div>
        </div>
      </div>
      <div class="btn-row">
        <div class="login">{{ $t('header.login') }}</div>
        <div class="get">{{ $t('header.getStarted') }}</div>
        <div class="language">EN <i class="icon"></i></div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineEmits(['update:show']);
defineModel('show', {
  type: Boolean,
  default: false
});
const activation = ref('');
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
  background: url(/public/images/home/nav_ic_arrow_an.png);
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
        background: url(/public/images/home/nav_ic_arrow_up.png);
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
  position: absolute;
  bottom: 23.18rem;
  left: 0;
  width: 100vw;
  height: 23.18rem;
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
  background: url(/public/images/home/nav_popup_bot_bg@2x.png);
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
