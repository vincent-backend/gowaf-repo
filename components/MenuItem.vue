<template>
  <template v-if="item">
    <el-sub-menu
      :index="item.title || item.label"
      :key="item.title"
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
      <template #title>{{ item.title || item.label }}</template>
    </el-menu-item>
  </template>
</template>
<script setup name="MenuItem">
import { Aim } from '@element-plus/icons-vue';
const router = useRouter();
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
});
const itemClick = item => {
  if (item.href && item.href !== '#') {
    navigateTo(item.href)
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
</style>
<style lang="scss">
.is-opened {
  .el-sub-menu__title {
    background: rgba(70, 207, 58, 0.06);
    border-radius: 0.88rem;
  }
}
</style>
