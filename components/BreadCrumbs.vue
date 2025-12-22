<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue';
defineProps<{
  title: string;
  items: {
    label: string;
    href: string;
    current: boolean;
    children?: Array<{
      label: string;
      href: string;
      current: boolean;
    }>;
  }[];
}>();
// const router = useRouter()
// const all = router.getRoutes()
// console.log("all", all)
</script>

<template>
  <div class="bread-crumbs-container">
    <div class="page-container bread-crumbs">
      <LgOnly>
        <span class="title">
          {{ title }}
        </span>
        <span class="separator"></span>
      </LgOnly>
      <div class="links">
        <template v-for="item in items">
          <NuxtLinkLocale
            v-if="!item.children"
            :to="item.href"
            :class="{ dropdownCurrent: item.current }"
          >
            {{ item.label }}
          </NuxtLinkLocale>
          <el-dropdown v-else>
            <NuxtLinkLocale class="dropdown-link" :class="{ dropdownCurrent: item.current }">
              {{ item.label }} <el-icon size="12"><ArrowDown /></el-icon>
            </NuxtLinkLocale>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="(d, i) in item.children" :key="i">
                  <NuxtLinkLocale :to="d.href" :class="{ dropdownCurrent: d.current }">
                    {{ d.label }}
                  </NuxtLinkLocale>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bread-crumbs-container {  
  background: #ffffff;
  box-shadow: inset 0px 1px 0px 0px rgba(226, 226, 226, 0.5);
  height: 60px;
  overflow-y: hidden;

  .bread-crumbs {
    height: 100%;
    display: flex;
    align-items: center;
    .title {
    }

    .separator {
      width: 2px;
      height: 20px;
      background: #f0f0f0;
      margin: 0 34px;
    }

    .links {
      display: flex;
      gap: 34px;
      .dropdown-link {
        outline: none;
        display: flex;
        cursor: pointer;
        align-items: center;
        gap: 5px;
      }

      a {
        color: #4e4e4e;
        line-height: 18px;
        white-space: nowrap;
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .bread-crumbs-container {
    height: 5.63rem;

    .bread-crumbs {
      justify-content: space-around;
      .links {
        gap: 3.13rem;
        overflow-x: scroll;
        overflow-y: hidden;

        a {
          font-size: 1.75rem;

          &.dropdownCurrent {
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.dropdownCurrent {
  font-weight: 500;
  line-height: 18px;
  background: linear-gradient(41.5494227786465deg, #46cf3a 0%, #36cfbc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
