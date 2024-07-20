<script lang="ts" setup>
defineProps<{
  title: string;
  items: {
    label: string;
    href: string;
    current: boolean;
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
        <a
          :href="item.href"
          v-for="item in items"
          :class="{ current: item.current }"
        >
          {{ item.label }}
        </a>
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

      a {
        color: #4e4e4e;
        line-height: 18px;
        white-space: nowrap;

        &.current {
          font-weight: 500;
          line-height: 18px;
          background: linear-gradient(
            41.5494227786465deg,
            #46cf3a 0%,
            #36cfbc 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .bread-crumbs-container {
    height: 5.63rem;

    .bread-crumbs {
      .links {
        gap: 3.13rem;
        overflow-x: scroll;
        overflow-y: hidden;

        a {
          font-size: 1.75rem;

          &.current {
          }
        }
      }
    }
  }
}
</style>
