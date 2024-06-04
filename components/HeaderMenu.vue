<script lang="ts" setup>
const openedMenu = ref('');

let menuTimer: ReturnType<typeof setTimeout>;
function openMenu(key: string) {
  clearTimeout(menuTimer);

  menuTimer = setTimeout(() => {
    openedMenu.value = key;
  }, 200);
}
function closeMenu() {
  clearTimeout(menuTimer);

  menuTimer = setTimeout(() => {
    openedMenu.value = '';
  }, 200);
}
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
    <div class="menu-item">
      <a href="#">{{ $t('header.menus.products') }}</a>
      <i class="icon"></i>
    </div>

    <!-- Solutions -->
    <div class="menu-item" :class="{ open: openedMenu === 'solutions' }" @mouseenter="openMenu('solutions')"
      @mouseleave="closeMenu()">
      <a href="#">{{ $t('header.menus.solutions') }}</a>
      <i class="icon"></i>

      <div class="sub-menu solutions-sub-menu">
        <div class="content">
          <template v-for="item, index in [
        $tm('header.solutionsMenu.solutions'),
        '|',
        $tm('header.solutionsMenu.byNeed'),
        '|',
        $tm('header.solutionsMenu.videoAndStreaming'),
      ]">
            <div class="separator" v-if="item === '|'"></div>
            <div class="column" :class="['column-' + index]" v-else>
              <div class="title">
                {{ item.title }}
              </div>
              <div class="list">
                <template v-for="item2 in item.items">
                  <a href="#" class="item-with-icon" v-if="item2.icon">
                    <div class="icon" :style="{ backgroundImage: `url(${item2.icon})` }"></div>
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
    </div>

    <!-- Resources -->
    <div class="menu-item">
      <a href="#">{{ $t('header.menus.resources') }}</a>
      <i class="icon"></i>
    </div>
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



      color: #4E4E4E;
      line-height: 18px;


    }

    .icon {
      margin-left: 4px;

      width: 14px;
      height: 14px;
      background: url(/public/images/home/nav_ic_arrow_an.png);
    }

    .sub-menu {
      display: none;

      position: absolute;
      left: 0;
      top: 40px;

      &.solutions-sub-menu {
        left: -160px;
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid #E6E6E6;

        padding: 20px 16px 10px;

        >.content {
          display: flex;

          >.column {
            &.column-0 {
              min-width: 144px;
            }

            &.column-2 {
              min-width: 212px;
            }

            &.column-4 {
              min-width: 192px;
            }

            >.title {

              font-weight: 600;


              line-height: 16px;


              text-transform: uppercase;
            }

            >.list {
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
                    color: #46CF3A;
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
                  color: #4E4E4E;
                  line-height: 14px;


                }

                &:hover {
                  background: rgba(70, 207, 58, 0.06);

                  .title {
                    font-weight: 500;
                    color: #46CF3A;
                  }
                }
              }
            }
          }

          >.separator {
            width: 1px;
            background: #E6E6E6;
            margin: 0 16px;
          }
        }

        >.footer {
          margin-top: 17px;
        }
      }
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
</style>