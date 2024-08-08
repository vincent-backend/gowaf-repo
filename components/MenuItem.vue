<template>
  <template v-if="item">
    <el-sub-menu
      :index="item.title || item.label"
      :key="item.key || item.title"
      v-if="item?.items?.length > 0 || item?.children?.length > 0"
    >
      <template #title>
        <div
          v-if="item.icon"
          class="icon"
          :style="{ backgroundImage: `url(${item.icon})` }"
        ></div>
        <span>{{ item.title || item.label }}</span>
      </template>
      <MenuItem
        v-for="child in item.items || item.children"
        :item="child"
        :key="child.title || item.label"
      />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="item.title || item.label"
      @click="itemClick(item)"
    >
      <div
        class="icon"
        v-if="item.icon"
        :style="{ backgroundImage: `url(${item.icon})` }"
      ></div>
      <div class="menu-content">
        <div class="title">{{ item.title || item.label }}</div>
        <div class="subTitle" v-if="item.subTitle">
          {{ item.subTitle }}
        </div>
      </div>
    </el-menu-item>
  </template>
</template>
<script setup name="MenuItem">
// import { Aim } from '@element-plus/icons-vue';
const router = useRouter();
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  },
  pindex: {
    type: Number
  }
});
const itemClick = item => {
  if (item.href && item.href !== '#') {
    navigateTo(item.href);
  }
};
</script>
<style lang="scss" scoped>
.el-menu-item.is-active {
  color: #000000;
  background: #fff;
}
.icon {
  width: 2.25rem;
  height: 2.25rem;
  margin-right: 1.25rem;
}
.menu-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  border-bottom: 0.06rem solid #e6e6e6;
  padding: 1.25rem 0;
  .title {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 1.88rem;
    color: #000000;
    line-height: 2.63rem;
    text-align: left;
    font-style: normal;
  }
  .subTitle {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 1.75rem;
    color: #4e4e4e;
    line-height: 2.5rem;
    text-align: left;
    font-style: normal;
  }
}
</style>
<style lang="scss">
.is-opened {
  .el-sub-menu__title {
    background: rgba(70, 207, 58, 0.06);
    border-radius: 0.88rem;
  }
}
.el-sub-menu{
  margin: 1.25rem 0 !important;
}
.el-menu-item {
  height: auto !important;
  padding: 1.25rem var(--el-menu-base-level-padding) !important;
}
.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container)
  .el-menu-item,
.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container)
  .el-sub-menu__title,
.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container)
  .el-menu-item-group__title {
  padding-left: calc(
    var(--el-menu-base-level-padding) + var(--el-menu-level) *
      var(--el-menu-level-padding)
  ) !important;
}
</style>
