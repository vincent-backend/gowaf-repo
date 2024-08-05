<template>
  <div class="flags-container">
    <div class="flags page-container">
      <div class="title">
        {{ $t('network.overview.flags.title') }}
      </div>
      <div class="sub-title">
        {{ $t('network.overview.flags.subTitle') }}
      </div>
      <div class="flag-groups">
        <div class="flag-group" v-for="group in i18ntext">
          <div class="title">
            <div
              class="icon"
              :style="{
                backgroundImage: `url(/images/network/${group.icon}@2x.png)`
              }"
            ></div>
            <div class="text">{{ group.region }}</div>
          </div>
          <Line top="16px" m-top="1.25rem" />
          <div class="content">
            <div class="flag" v-for="flag in group.items">
              <div
                class="icon"
                :style="{
                  backgroundImage: `url(/images/network/${flag.img}@2x.png)`
                }"
              ></div>
              <div class="text">{{ flag.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const i18ntext = computed(() => {
  return [
    {
      icon: 'Network_Overview_banner_node_Europe',
      region: 'Europe (35)',
      items: [
        {
          img: 'Network_Overview_Europe_ch',
          label: 'Zurich'
        },
        {
          img: 'Network_Overview_Europe_nl',
          label: 'Amsterdam'
        },
        {
          img: 'Network_Overview_Europe_gr',
          label: 'Athens'
        },
        {
          img: 'Network_Overview_Europe_rs',
          label: 'Belgrade'
        },
        {
          img: 'Network_Overview_Europe_de',
          label: 'Berlin'
        },
        {
          img: 'Network_Overview_Europe_BEL',
          label: 'Brussels'
        },
        {
          img: 'Network_Overview_Europe_hu',
          label: 'Budapest'
        },
        {
          img: 'Network_Overview_Europe_ro',
          label: 'Bucharest'
        },
        {
          img: 'Network_Overview_Europe_md',
          label: 'Chisinau'
        },
        {
          img: 'Network_Overview_Europe_dk',
          label: 'Copenhagen'
        },
        {
          img: 'Network_Overview_Europe_ie',
          label: 'Dublin'
        },
        {
          img: 'Network_Overview_Europe_de',
          label: 'Frankfurt'
        },
        {
          img: 'Network_Overview_Europe_de',
          label: 'Frankfurt 2'
        },
        {
          img: 'Network_Overview_Europe_fi',
          label: 'Helsinki'
        },
        {
          img: 'Network_Overview_Europe_is',
          label: 'Keflavik'
        },
        {
          img: 'Network_Overview_Europe_ua',
          label: 'Kyiv'
        },
        {
          img: 'Network_Overview_Europe_pt',
          label: 'Lisbon'
        },
        {
          img: 'Network_Overview_Europe_si',
          label: 'Ljubljana'
        },
        {
          img: 'Network_Overview_Europe_gb',
          label: 'London'
        },
        {
          img: 'Network_Overview_Europe_lu',
          label: 'Luxembourg'
        },
        {
          img: 'Network_Overview_Europe_es',
          label: 'Madrid'
        },
        {
          img: 'Network_Overview_Europe_fr',
          label: 'Marseille'
        },
        {
          img: 'Network_Overview_Europe_fr',
          label: 'Milan'
        },
        {
          img: 'Network_Overview_Europe_ru',
          label: 'Moscow'
        },
        {
          img: 'Network_Overview_Europe_ba',
          label: 'Novi Travnik'
        },
        {
          img: 'Network_Overview_Europe_no',
          label: 'Oslo'
        },
        {
          img: 'Network_Overview_Europe_fr',
          label: 'Paris'
        },
        {
          img: 'Network_Overview_Europe_cz',
          label: 'Prague'
        },
        {
          img: 'Network_Overview_Europe_lv',
          label: 'Riga'
        },
        {
          img: 'Network_Overview_Europe_bg',
          label: 'Sofia'
        },
        {
          img: 'Network_Overview_Europe_se',
          label: 'Stockholm'
        },
        {
          img: 'Network_Overview_Europe_at',
          label: 'Vienna'
        },
        {
          img: 'Network_Overview_Europe_lt',
          label: 'Vilnius'
        },
        {
          img: 'Network_Overview_Europe_pl',
          label: 'Warsaw'
        },
        {
          img: 'Network_Overview_Europe_hr ',
          label: 'Zagreb'
        }
      ]
    },
    {
      icon: 'Network_Overview_banner_node_LATAM',
      region: 'LATAM (16)',
      items: [
        {
          img: 'Network_Overview_Latam_co',
          label: 'Bogota'
        },
        {
          img: 'Network_Overview_Latam_ar',
          label: 'Buenos Aires'
        },
        {
          img: 'Network_Overview_Latam_br',
          label: 'Curitiba'
        },
        {
          img: 'Network_Overview_Latam_br',
          label: 'Fortaleza'
        },
        {
          img: 'Network_Overview_Latam_gt',
          label: 'Guatemala'
        },
        {
          img: 'Network_Overview_Latam_bo',
          label: 'La Paz'
        },
        {
          img: 'Network_Overview_Latam_pe',
          label: 'Lima'
        },
        {
          img: 'Network_Overview_Latam_mx',
          label: 'Mexico City'
        },
        {
          img: 'Network_Overview_Latam_br',
          label: 'Porto Alegre'
        },
        {
          img: 'Network_Overview_Latam_br',
          label: 'Rio de Janeiro'
        },
        {
          img: 'Network_Overview_Latam_br',
          label: 'Salvador'
        },
        {
          img: 'Network_Overview_Latam_pr',
          label: 'San Juan'
        },
        {
          img: 'Network_Overview_Latam_cr',
          label: 'San Pedro'
        },
        {
          img: 'Network_Overview_Latam_cl',
          label: 'Santiago'
        },
        {
          img: 'Network_Overview_Latam_br',
          label: 'Sao Paulo'
        },
        {
          img: 'Network_Overview_Latam_br',
          label: 'Sao Paulo 2'
        }
      ]
    },
    {
      icon: 'Network_Overview_banner_node_Oceania',
      region: 'Oceania (7)',
      items: [
        {
          img: 'Network_Overview_Oceania_au',
          label: 'Adelaide'
        },
        {
          img: 'Network_Overview_Oceania_au',
          label: 'Auckland'
        },
        {
          img: 'Network_Overview_Oceania_au',
          label: 'Brisbane'
        },
        {
          img: 'Network_Overview_Oceania_us',
          label: 'Hagatna'
        },
        {
          img: 'Network_Overview_Oceania_au',
          label: 'Melbourne'
        },
        {
          img: 'Network_Overview_Oceania_au',
          label: 'Perth'
        },
        {
          img: 'Network_Overview_Oceania_au',
          label: 'Sydney'
        }
      ]
    },
    {
      icon: 'Network_Overview_banner_node_Asia',
      region: 'Asia (29)',
      items: [
        {
          img: 'Network_Overview_Aaia_kz',
          label: 'AlmatyAlmaty'
        },
        {
          img: 'Network_Overview_Aaia_az',
          label: 'Baku'
        },
        {
          img: 'Network_Overview_Aaia_th',
          label: 'Bangkok'
        },
        {
          img: 'Network_Overview_Aaia_in',
          label: 'Bangalore'
        },
        {
          img: 'Network_Overview_Aaia_in',
          label: 'Chennai'
        },
        {
          img: 'Network_Overview_Aaia_bd',
          label: 'DhakaDhaka'
        },
        {
          img: 'Network_Overview_Aaia_hk',
          label: 'Hong Kong'
        },
        {
          img: 'Network_Overview_Aaia_vn',
          label: 'Ho Chi Minh'
        },
        {
          img: 'Network_Overview_Aaia_tr',
          label: 'Istanbul'
        },
        {
          img: 'Network_Overview_Aaia_id',
          label: 'Jakarta'
        },
        {
          img: 'Network_Overview_Aaia_pk',
          label: 'Karachi'
        },
        {
          img: 'Network_Overview_Aaia_np',
          label: 'Kathmandu'
        },
        {
          img: 'Network_Overview_Aaia_in',
          label: 'Kolkata'
        },
        {
          img: 'Network_Overview_Aaia_my',
          label: 'Kuala Lumpur'
        },
        {
          img: 'Network_Overview_Aaia_ph',
          label: 'Manila'
        },
        {
          img: 'Network_Overview_Aaia_in',
          label: 'Mumbai'
        },
        {
          img: 'Network_Overview_Aaia_cy',
          label: 'Nicosia'
        },
        {
          img: 'Network_Overview_Aaia_in',
          label: 'New Delhi'
        },
        {
          img: 'Network_Overview_Aaia_jp',
          label: 'Osaka'
        },
        {
          img: 'Network_Overview_Aaia_kh',
          label: 'Phnom Penh'
        },
        {
          img: 'Network_Overview_Aaia_kr',
          label: 'Seoul'
        },
        {
          img: 'Network_Overview_Aaia_sg',
          label: 'Singapore V'
        },
        {
          img: 'Network_Overview_Aaia_sg',
          label: 'Singapore 2'
        },
        {
          img: 'Network_Overview_Aaia_tw',
          label: 'Taipei'
        },
        {
          img: 'Network_Overview_Aaia_ge',
          label: 'Tbilisi'
        },
        {
          img: 'Network_Overview_Aaia_jp',
          label: 'Tokyo'
        },
        {
          img: 'Network_Overview_Aaia_mn',
          label: 'Ulaanbaatar'
        },
        {
          img: 'Network_Overview_Aaia_mm',
          label: 'Yangon'
        },
        {
          img: 'Network_Overview_Aaia_am',
          label: 'Yerevan'
        }
      ]
    },
    {
      icon: 'Network_Overview_banner_node_North',
      region: 'North America (22)',
      items: [
        {
          img: 'Network_Overview_North_us',
          label: 'Ashburn'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Atlanta'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Boston'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Charlotte'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Chicago'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Dallas'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Denver'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Honolulu'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Houston'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Kansas City'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Los Angeles'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Miami'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Minneapolis'
        },
        {
          img: 'Network_Overview_North_ca',
          label: 'Montreal'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'New York'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Ogden'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Phoenix'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Pittsburgh'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'San Jose'
        },
        {
          img: 'Network_Overview_North_us',
          label: 'Seattle'
        },
        {
          img: 'Network_Overview_North_ca',
          label: 'Toronto'
        },
        {
          img: 'Network_Overview_North_ca',
          label: 'Vancouver'
        }
      ]
    },
    {
      icon: 'Network_Overview_banner_node_Middle',
      region: 'Middle East & Africa (12)',
      items: [
        {
          img: 'Network_Overview_Middle_eg',
          label: 'Cairo'
        },
        {
          img: 'Network_Overview_Middle_eg',
          label: 'Cairo 2'
        },
        {
          img: 'Network_Overview_Middle_za',
          label: 'Cape Town'
        },
        {
          img: 'Network_Overview_Middle_iq',
          label: 'Baghdad'
        },
        {
          img: 'Network_Overview_Middle_iq',
          label: 'Baghdad 2'
        },
        {
          img: 'Network_Overview_Middle_bh',
          label: 'Bahrain'
        },
        {
          img: 'Network_Overview_Middle_ae',
          label: 'Dubai'
        },
        {
          img: 'Network_Overview_Middle_ae',
          label: 'Fujairah'
        },
        {
          img: 'Network_Overview_Middle_za',
          label: 'Johannesburg'
        },
        {
          img: 'Network_Overview_Middle_ng',
          label: 'Lagos'
        },
        {
          img: 'Network_Overview_Middle_ao',
          label: 'Luanda'
        },
        {
          img: 'Network_Overview_Middle_sa',
          label: 'Riyadh'
        }
      ]
    }
  ];
});
</script>

<style lang="less" scoped>
.flags-container {
  margin-top: 80px;

  > .flags {
    > .title {
      font-weight: 500;
      font-size: 30px;
      line-height: 42px;
    }

    > .sub-title {
      margin-top: 20px;

      font-size: 16px;
      color: #4e4e4e;
    }

    > .flag-groups {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .flag-group {
        padding: 16px 30px 32px;
        background: #ffffff;
        border-radius: 24px;

        > .title {
          height: 60px;
          display: flex;
          align-items: center;

          .icon {
            width: 14px;
            height: 14px;
          }

          .text {
            margin-left: 12px;

            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
          }
        }

        > .content {
          margin-top: 32px;

          display: flex;
          flex-wrap: wrap;
          gap: 30px;

          .flag {
            width: 14%;
            display: flex;
            align-items: center;

            .icon {
              width: 30px;
              height: 20px;
            }

            .text {
              margin-left: 10px;

              font-size: 16px;
              line-height: 22px;
            }
          }
        }
      }
    }
  }
}

// For mobile devices
@media (max-width: 767px) {
  .flags-container {
    margin-top: 6.25rem;

    > .flags {
      > .title {
        font-size: 2.5rem;
        line-height: 3.5rem;
      }

      > .sub-title {
        margin-top: 1rem;

        font-size: 1.75rem;
        line-height: 2.38rem;
      }

      > .flag-groups {
        margin-top: 3.13rem;

        .flag-group {
          padding: 1.25rem;
          padding-bottom: 3.13rem;
          border-radius: 1.5rem;

          > .title {
            height: 5.13rem;

            .icon {
              width: 1.25rem;
              height: 1.25rem;
            }

            .text {
              margin-left: 0.63rem;

              font-size: 1.88rem;
              line-height: 2.63rem;
            }
          }

          > .content {
            margin-top: 3.13rem;
            gap: 4.38rem 0;

            .flag {
              width: 33.3%;

              .icon {
                width: 2.88rem;
                height: 1.88rem;
              }

              .text {
                margin-left: 0.5rem;

                font-size: 1.38rem;
                line-height: 1.88rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
