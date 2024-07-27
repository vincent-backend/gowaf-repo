<script lang="ts" setup>
import { ref, unref } from 'vue';
const ProductsRef = ref();
const solutionsRef = ref();
const ProductsPopoverRef = ref();
const solutionsPopoverRef = ref();
const ResourcesRef = ref();
const ResourcesPopoverRef = ref();
const Product = ref<any>({});
const Resources = ref<any>({});

const mouseover = (type: string, obj: any) => {
  if (type == 'Product') {
    Product.value = obj;
  } else {
    Resources.value = obj;
  }
};
</script>

<template>
  <div class="menu">
    <!-- Network -->
    <div class="menu-item">
      <a href="/network/overview">{{ $t('header.menus.network') }}</a>
    </div>

    <!-- Pricing -->
    <div class="menu-item">
      <a href="/pricing/overview">{{ $t('header.menus.pricing') }}</a>
    </div>

    <!-- Products -->
    <div class="menu-item" ref="ProductsRef">
      <a href="#">{{ $t('header.menus.products') }}</a>
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
      <div class="menu-level-1">
        <div class="ul-menu">
          <div class="submenu-title">{{ $t('header.menus.products') }}</div>
          <a
            class="item-level-1"
            v-for="(item, index) in ProductsMenu($t, $route.path)"
            :key="index"
            @mouseover="mouseover('Product', item)"
            :class="{ 'is-active': item.label == Product.label }"
            href="#"
          >
            {{ item.label }}
            <div class="arrow-icon"></div>
          </a>
        </div>
        <div class="current-menu">
          <div class="submenu-title">{{ Product.label }}</div>
          <a
            v-for="(p, index) in Product.children"
            :key="index"
            :href="p.href"
            class="item-level-1"
          >
            {{ p.label }}
          </a>
        </div>
      </div>
    </el-popover>

    <!-- Solutions -->
    <div class="menu-item" ref="solutionsRef">
      <a href="#">{{ $t('header.menus.solutions') }}</a>
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
      <div class="sub-menu solutions-sub-menu">
        <div class="content">
          <template
            v-for="(item, index) in [
              $tm('header.solutionsMenu.solutions'),
              '|',
              $tm('header.solutionsMenu.byNeed'),
              '|',
              $tm('header.solutionsMenu.videoAndStreaming')
            ]"
          >
            <div class="separator" v-if="item === '|'"></div>
            <div class="column" :class="['column-' + index]" v-else>
              <div class="title">
                {{ item.title }}
              </div>
              <div class="list">
                <template v-for="item2 in item.items">
                  <a href="#" class="item-with-icon" v-if="item2.icon">
                    <div
                      class="icon"
                      :style="{ backgroundImage: `url(${item2.icon})` }"
                    ></div>
                    <div class="title">
                      {{ item2.title }}
                    </div>
                    <div class="arrow-icon"></div>
                  </a>
                  <a href="#" class="item-without-icon" v-else>
                    <div class="title">
                      {{ item2.title }}
                    </div>
                    <div class="sub-title">
                      {{ item2.subTitle }}
                    </div>
                  </a>
                </template>
              </div>
            </div>
          </template>
        </div>
        <div class="footer">
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
    </el-popover>

    <!-- Resources -->
    <div class="menu-item" ref="ResourcesRef">
      <a href="#">{{ $t('header.menus.resources') }}</a>
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
          <a
            class="item-level-1"
            v-for="(item, index) in ResourcesMenu($t, $route.path)"
            :key="index"
            @mouseover="mouseover('Resources', item)"
            :class="{ 'is-active': item.label == Resources.label }"
            :href="item.href"
          >
            {{ item.label }}
            <div class="arrow-icon"></div>
          </a>
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
    }

    .icon {
      margin-left: 4px;

      width: 14px;
      height: 14px;
      background: url(/public/images/home/nav_ic_arrow_an.png);
    }

    &.open {
      a {
        font-weight: 500;
      }

      .icon {
        background: url(/public/images/home/nav_ic_arrow_up.png);
      }

      .sub-menu {
        display: block;
      }
    }
  }
}
.sub-menu {
  width: fit-content;
  // display: none;
  // position: absolute;
  // left: 0;
  // top: 40px;

  &.solutions-sub-menu {
    left: -160px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #e6e6e6;

    padding: 20px 16px 10px;

    > .content {
      display: flex;

      > .column {
        &.column-0 {
          min-width: 144px;
        }

        &.column-2 {
          min-width: 212px;
        }

        &.column-4 {
          min-width: 192px;
        }

        > .title {
          font-weight: 600;

          line-height: 16px;

          text-transform: uppercase;
        }

        > .list {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;

          .item-with-icon {
            border-radius: 4px;

            display: flex;
            align-items: center;
            padding: 4px 6px 4px 10px;

            .icon {
              width: 24px;
              height: 24px;
            }

            .title {
              margin-left: 6px;
              flex: 1;

              font-size: 12px;

              line-height: 16px;
            }

            .arrow-icon {
              width: 14px;
              height: 14px;
              background: url(/public/images/home/nav_ic_arrow_right_nor.png);
            }

            &:hover {
              background: rgba(70, 207, 58, 0.06);

              .title {
                font-weight: 500;
                color: #46cf3a;
              }

              .arrow-icon {
                background: url(/public/images/home/nav_ic_arrow_right_sel.png);
              }
            }
          }

          .item-without-icon {
            border-radius: 4px;
            padding: 10px;

            .title {
              font-size: 12px;
              color: #2c1717;
              line-height: 18px;
            }

            .sub-title {
              font-size: 10px;
              color: #4e4e4e;
              line-height: 14px;
            }

            &:hover {
              background: rgba(70, 207, 58, 0.06);

              .title {
                font-weight: 500;
                color: #46cf3a;
              }
            }
          }
        }
      }

      > .separator {
        width: 1px;
        background: #e6e6e6;
        margin: 0 16px;
      }
    }

    > .footer {
      margin-top: 17px;
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
  &.menu-level-2{
    .ul-menu{
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
        background: url(/public/images/home/nav_ic_arrow_right_nor.png);
      }
      &:hover {
        background: rgba(70, 207, 58, 0.06);
        font-weight: 500;
        color: #46cf3a;
        .arrow-icon {
          background: url(/public/images/home/nav_ic_arrow_right_sel.png);
        }
      }
      &.is-active {
        background: rgba(70, 207, 58, 0.06);
        font-weight: 500;
        color: #46cf3a;

        .arrow-icon {
          background: url(/public/images/home/nav_ic_arrow_right_sel.png);
        }
      }
    }
  }
}
</style>
<style lang="scss">
.popper-menu {
  padding: 0 !important;
  border-radius: 8px !important;
}
</style>
