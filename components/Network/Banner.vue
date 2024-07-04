<script lang="ts" setup>
const curTab = ref(0);
</script>

<template>
  <div class="banner-container">
    <div class="page-container banner">
      <div class="tabs">
        <a
          href="#"
          v-for="(tab, index) in $tm('network.overview.tabs')"
          :class="{ current: index === curTab }"
          @click.prevent="curTab = index"
        >
          {{ tab }}
        </a>
      </div>
      <div class="content">
        <div class="title-0">
          {{ $t('network.overview.title0') }}
        </div>
        <div class="title-1">
          {{ $t('network.overview.title1') }}
        </div>
        <div class="title-2">
          {{ $t('network.overview.title2') }}
        </div>
      </div>
      <div class="dots">
        <div class="dot dot-blue"></div>
        <div class="dot dot-cyanogen"></div>
        <div class="dot dot-orange"></div>
        <div class="dot dot-green"></div>
        <div class="dot dot-yellow"></div>
        <div class="dot dot-pink"></div>
      </div>
      <div class="legend-container">
        <div class="legend-item">
          <div class="icon icon-blue"></div>
          <div class="text">
            Europe
            <span class="count">(35)</span>
          </div>
        </div>

        <div class="legend-item">
          <div class="icon icon-cyanogen"></div>
          <div class="text">
            Europe
            <span class="count">(35)</span>
          </div>
        </div>

        <div class="legend-item">
          <div class="icon icon-orange"></div>
          <div class="text">
            Europe
            <span class="count">(35)</span>
          </div>
        </div>

        <div class="legend-item">
          <div class="icon icon-green"></div>
          <div class="text">
            Europe
            <span class="count">(35)</span>
          </div>
        </div>

        <div class="legend-item">
          <div class="icon icon-yellow"></div>
          <div class="text">
            Europe
            <span class="count">(35)</span>
          </div>
        </div>

        <div class="legend-item">
          <div class="icon icon-pink"></div>
          <div class="text">
            Middle East & Africa
            <span class="count">(35)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.banner-container {
  height: 840px;
  min-width: 1200px;
  background: url(/public/images/network/Network_Overview_map.png) no-repeat
    center;
  background-size: 1920px 840px;

  .banner {
    overflow: hidden;
    position: relative;
    height: 100%;

    > .tabs {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      gap: 10px;

      a {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        border: 1px solid #ffffff;
        padding: 9px 16px;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;

        &.current {
          background: #000;
          border-color: #000;
          color: #fff;
        }
      }
    }

    > .content {
      margin-top: 40px;

      .title-0 {
        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 30px;
        line-height: 40px;
      }

      .title-1 {
        margin-top: 8px;

        font-family: Mont, Mont;
        font-weight: bold;
        font-size: 50px;
        line-height: 70px;
      }

      .title-2 {
        margin-top: 20px;

        color: #4e4e4e;
      }
    }

    > .dots {
      position: absolute;
      left: 187px;
      top: 277px;

      .dot {
        position: absolute;
        width: 26px;
        height: 26px;

        &.dot-blue {
          background: url(/public/images/network/Network_Overview_banner_map_Europe.png)
            no-repeat;
        }

        &.dot-cyanogen {
          background: url(/public/images/network/Network_Overview_banner_map_LATAM.png)
            no-repeat;
        }

        &.dot-orange {
          background: url(/public/images/network/Network_Overview_banner_map_Oceania.png)
            no-repeat;
        }

        &.dot-green {
          background: url(/public/images/network/Network_Overview_banner_map_Asia.png)
            no-repeat;
        }

        &.dot-yellow {
          background: url(/public/images/network/Network_Overview_banner_map_North.png)
            no-repeat;
        }

        &.dot-pink {
          background: url(/public/images/network/Network_Overview_banner_map_Middle.png)
            no-repeat;
        }
      }
    }

    > .legend-container {
      position: absolute;
      left: 0;
      bottom: 20px;

      box-sizing: border-box;
      padding: 20px;
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 0px 14px 20px 0px #c9d8da;
      border-radius: 14px;
      backdrop-filter: blur(5px);
      display: flex;
      flex-direction: column;
      gap: 16px;

      .legend-item {
        display: flex;
        align-items: center;

        .icon {
          width: 14px;
          height: 14px;

          &.icon-blue {
            background: url(/public/images/network/Network_Overview_banner_node_Europe.png);
          }

          &.icon-cyanogen {
            background: url(/public/images/network/Network_Overview_banner_node_LATAM.png);
          }

          &.icon-orange {
            background: url(/public/images/network/Network_Overview_banner_node_Oceania.png);
          }

          &.icon-green {
            background: url(/public/images/network/Network_Overview_banner_node_Asia.png);
          }

          &.icon-yellow {
            background: url(/public/images/network/Network_Overview_banner_node_North.png);
          }

          &.icon-pink {
            background: url(/public/images/network/Network_Overview_banner_node_Middle.png);
          }
        }

        .text {
          margin-left: 12px;

          font-size: 16px;
          color: #4e4e4e;

          .count {
            color: #4e4e4e;
            opacity: 0.5;
          }
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .banner-container {
    height: 53.13rem;
    min-width: auto;
    background: url(/public/mobile-images/network/overview/map@2x.png);

    .banner {
      overflow: visible;

      > .tabs {
        padding-top: 1.87rem;
        justify-content: space-between;
        gap: 0;

        a {
          padding: 0.81rem 1.1rem;
          font-size: 1.5rem;
          line-height: 2.06rem;

          &.current {
          }
        }
      }

      > .content {
        margin-top: 1.88rem;

        .title-0 {
          font-size: 1.88rem;
          line-height: 4rem;
        }

        .title-1 {
          margin-top: 0.5rem;

          font-size: 3.13rem;
          line-height: 4.38rem;
        }

        .title-2 {
          margin-top: 0.63rem;

          font-size: 1.75rem;
          line-height: 2.81rem;
        }
      }

      > .dots {
        .dot {
          &.dot-blue {
            background: url(/public/images/network/Network_Overview_banner_map_Europe.png)
              no-repeat;
          }

          &.dot-cyanogen {
            background: url(/public/images/network/Network_Overview_banner_map_LATAM.png)
              no-repeat;
          }

          &.dot-orange {
            background: url(/public/images/network/Network_Overview_banner_map_Oceania.png)
              no-repeat;
          }

          &.dot-green {
            background: url(/public/images/network/Network_Overview_banner_map_Asia.png)
              no-repeat;
          }

          &.dot-yellow {
            background: url(/public/images/network/Network_Overview_banner_map_North.png)
              no-repeat;
          }

          &.dot-pink {
            background: url(/public/images/network/Network_Overview_banner_map_Middle.png)
              no-repeat;
          }
        }
      }

      > .legend-container {
        bottom: -8.81rem;

        width: 43.13rem;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 1.25rem 0;

        .legend-item {
          width: 50%;

          font-size: 1.63rem;
          line-height: 2.31rem;
          white-space: nowrap;

          .icon {
            width: 1.31rem;
            height: 1.31rem;
            min-width: 1.31rem;

            &.icon-blue {
              background: url(/public/images/network/Network_Overview_banner_node_Europe.png);
            }

            &.icon-cyanogen {
              background: url(/public/images/network/Network_Overview_banner_node_LATAM.png);
            }

            &.icon-orange {
              background: url(/public/images/network/Network_Overview_banner_node_Oceania.png);
            }

            &.icon-green {
              background: url(/public/images/network/Network_Overview_banner_node_Asia.png);
            }

            &.icon-yellow {
              background: url(/public/images/network/Network_Overview_banner_node_North.png);
            }

            &.icon-pink {
              background: url(/public/images/network/Network_Overview_banner_node_Middle.png);
            }
          }

          .text {
            font-size: 1.63rem;
            margin-left: 0.5rem;
            .count {
            }
          }
        }
      }
    }
  }
}
</style>
