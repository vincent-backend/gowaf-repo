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
      region: t('Q-dHd3pakRbAd48hLfenT'),
      items: [
        {
          img: 'Network_Overview_Europe_ch',
          label: t('Uky0QNsaRW1RVrRT2aOKr')
        },
        {
          img: 'Network_Overview_Europe_nl',
          label: t('FonPgCf2Eu_86aTUbd55_')
        },
        {
          img: 'Network_Overview_Europe_gr',
          label: t('ov5zvvvcRAtIsfGBhEu_2')
        },
        {
          img: 'Network_Overview_Europe_rs',
          label: t('N9ic1rzAe52Vx0QckHSSS')
        },
        {
          img: 'Network_Overview_Europe_de',
          label: t('NCkStV32Sdi-NmlNw793l')
        },
        {
          img: 'Network_Overview_Europe_BEL',
          label: t('476krRWk4HP44pkZ6Aqzx')
        },
        {
          img: 'Network_Overview_Europe_hu',
          label: t('3Od53-u9F-W6-qch9dTPf')
        },
        {
          img: 'Network_Overview_Europe_ro',
          label: t('obZMxVRxnAXrmWuLxb8u9')
        },
        {
          img: 'Network_Overview_Europe_md',
          label: t('jQr0_bAMNLWSI31wgxXWO')
        },
        {
          img: 'Network_Overview_Europe_dk',
          label: t('CVhpjaah-XmgBpOsW5lwf')
        },
        {
          img: 'Network_Overview_Europe_ie',
          label: t('k1_TFBuTq4sM2NZY02Abz')
        },
        {
          img: 'Network_Overview_Europe_de',
          label: t('YosReCsU4dcUdTmho4gQd')
        },
        {
          img: 'Network_Overview_Europe_de',
          label: t('tOyNY_IsGXk4F5puJfyjS')
        },
        {
          img: 'Network_Overview_Europe_fi',
          label: t('H20FWLLr01bSwIwt3oV6I')
        },
        {
          img: 'Network_Overview_Europe_is',
          label: t('6QNL0FtYzqilvrVTqFvGz')
        },
        {
          img: 'Network_Overview_Europe_ua',
          label: t('2Y49ulQk8dldLyRC0X1_Z')
        },
        {
          img: 'Network_Overview_Europe_pt',
          label: t('nK3D9Ic4y7Dmm6b4X_xXO')
        },
        {
          img: 'Network_Overview_Europe_si',
          label: t('6xr2GAmmomBg773QB0sV0')
        },
        {
          img: 'Network_Overview_Europe_gb',
          label: t('GoRZlSSMon7-V3afX4Eeh')
        },
        {
          img: 'Network_Overview_Europe_lu',
          label: t('8Pb8ExMFm0TQXsmNchGA8')
        },
        {
          img: 'Network_Overview_Europe_es',
          label: t('7YcbVZd62JXFbZlWuhl81')
        },
        {
          img: 'Network_Overview_Europe_fr',
          label: t('O30nIwbHGqUb7qwrTaGco')
        },
        {
          img: 'Network_Overview_Europe_fr',
          label: t('n9sk9ftadwZtWLW29Csre')
        },
        {
          img: 'Network_Overview_Europe_ru',
          label: t('0WNJ9bHRVw6Wd5QAYc9vj')
        },
        {
          img: 'Network_Overview_Europe_ba',
          label: t('rGaLYELAjoNPaNXf1SqT-')
        },
        {
          img: 'Network_Overview_Europe_no',
          label: t('pC-nB-u6BpymSv48GEfYv')
        },
        {
          img: 'Network_Overview_Europe_fr',
          label: t('F4nq64VWxNoXijf7I_Dp6')
        },
        {
          img: 'Network_Overview_Europe_cz',
          label: t('v7em0hBk-XrXKzATJ_oxt')
        },
        {
          img: 'Network_Overview_Europe_lv',
          label: t('jgW8hMxXzMtYz8o6PU5Pv')
        },
        {
          img: 'Network_Overview_Europe_bg',
          label: t('cDG-BJ9Fehy3qExdEFjJG')
        },
        {
          img: 'Network_Overview_Europe_se',
          label: t('vyMEtsxi0IYFBMqBXEV2q')
        },
        {
          img: 'Network_Overview_Europe_at',
          label: t('2mAcWoAn3BEx_iwfDAr4c')
        },
        {
          img: 'Network_Overview_Europe_lt',
          label: t('FwKQSva1azVWRk16NS10w')
        },
        {
          img: 'Network_Overview_Europe_pl',
          label: t('N5e9FaPnbDBrxCzw7c59V')
        },
        {
          img: 'Network_Overview_Europe_hr ',
          label: t('WU051Bb9Ra-YUpIyDZ-BG')
        }
      ]
    },
    {
      icon: 'Network_Overview_banner_node_LATAM',
      region: t('ozQe6gS9eYjXLXZLOowIV'),
      items: [
        {
          img: 'Network_Overview_Latam_co',
          label: t('Pv1JpeCag5tUj9GjAcRDD')
        },
        {
          img: 'Network_Overview_Latam_ar',
          label: t('Xr3WGuvQN5upv1AKaatP8')
        },
        {
          img: 'Network_Overview_Latam_br',
          label: t('HtlOA0EKDDJm92ByVdWw0')
        },
        {
          img: 'Network_Overview_Latam_br',
          label: t('cltlmYKhZj9EB71d2t-SO')
        },
        {
          img: 'Network_Overview_Latam_gt',
          label: t('8nsJEm3g7zz7Ajre3CxF5')
        },
        {
          img: 'Network_Overview_Latam_bo',
          label: t('uOVXbN4vMQdtYUQfEn8Yh')
        },
        {
          img: 'Network_Overview_Latam_pe',
          label: t('P8HVHrPLkUBKITwKqJjgi')
        },
        {
          img: 'Network_Overview_Latam_mx',
          label: t('FUAfbk4AqpE4XzNCUHFEp')
        },
        {
          img: 'Network_Overview_Latam_br',
          label: t('tKNLS4T5CdNdsT3wfylhA')
        },
        {
          img: 'Network_Overview_Latam_br',
          label: t('KqC9iul0GU1AcuNX6z4rE')
        },
        {
          img: 'Network_Overview_Latam_br',
          label: t('lSkgiOhiPqO0TjkO_imnm')
        },
        {
          img: 'Network_Overview_Latam_pr',
          label: t('_rnDuUNxpJ93rBleabKYo')
        },
        {
          img: 'Network_Overview_Latam_cr',
          label: t('4byFCHxEximN0Vbf9LCwX')
        },
        {
          img: 'Network_Overview_Latam_cl',
          label: t('kqCvnmSAprvUQwpoVlnyI')
        },
        {
          img: 'Network_Overview_Latam_br',
          label: t('GDLFwuBWNYAzB_K9ELfD_')
        },
        {
          img: 'Network_Overview_Latam_br',
          label: t('jpMXsrsoNSmcYvMAFVNXS')
        }
      ]
    },
    {
      icon: 'Network_Overview_banner_node_Oceania',
      region: t('uMxNU7MI0K0rYlqYHr-OS'),
      items: [
        {
          img: 'Network_Overview_Oceania_au',
          label: t('o0qwsKi8IqS5DGO8qRfGU')
        },
        {
          img: 'Network_Overview_Oceania_au',
          label: t('UMSmezlPzJb18Rja7Dt7k')
        },
        {
          img: 'Network_Overview_Oceania_au',
          label: t('zZGezGlAvjTNoVtLRzoFk')
        },
        {
          img: 'Network_Overview_Oceania_us',
          label: t('m9EZmo0SZT_wr3uZo821u')
        },
        {
          img: 'Network_Overview_Oceania_au',
          label: t('mYz5EWwwXdhDteGsGQEFm')
        },
        {
          img: 'Network_Overview_Oceania_au',
          label: t('PpVibcscip05ZIPHujGds')
        },
        {
          img: 'Network_Overview_Oceania_au',
          label: t('S7a9gmQjDMWRllJiW4gBW')
        }
      ]
    },
    {
      icon: 'Network_Overview_banner_node_Asia',
      region: t('xobXfPGaL8Mr4IWt3FGBO'),
      items: [
        {
          img: 'Network_Overview_Aaia_kz',
          label: 'AlmatyAlmaty'
        },
        {
          img: 'Network_Overview_Aaia_az',
          label: t('14RMsejOIl5S_7FRiKAQO')
        },
        {
          img: 'Network_Overview_Aaia_th',
          label: t('lvXE4IF2GxWWaFWTVHgsA')
        },
        {
          img: 'Network_Overview_Aaia_in',
          label: t('HimCTCazGoiuFe-7d-Xdf')
        },
        {
          img: 'Network_Overview_Aaia_in',
          label: t('5A4A9Oj81j_yy-zmux8dt')
        },
        {
          img: 'Network_Overview_Aaia_bd',
          label: 'DhakaDhaka'
        },
        {
          img: 'Network_Overview_Aaia_hk',
          label: t('TMZeGas54IxQnjnxI-Yzi')
        },
        {
          img: 'Network_Overview_Aaia_vn',
          label: t('H5DMN2D6Rmie-Xbrd8Uf_')
        },
        {
          img: 'Network_Overview_Aaia_tr',
          label: t('yUVGaxkn6TS68obz8rXC7')
        },
        {
          img: 'Network_Overview_Aaia_id',
          label: t('k5GObodth0lZaxGn7cpWI')
        },
        {
          img: 'Network_Overview_Aaia_pk',
          label: t('U2TGBfUY-qc52MAQ2_isx')
        },
        {
          img: 'Network_Overview_Aaia_np',
          label: t('AgVBuyrG2X3QfqYtYEHnU')
        },
        {
          img: 'Network_Overview_Aaia_in',
          label: t('IWtmUsoCpFsOWhdzgM-A7')
        },
        {
          img: 'Network_Overview_Aaia_my',
          label: t('KqdjVtbx8jgXCKVLqDhA1')
        },
        {
          img: 'Network_Overview_Aaia_ph',
          label: t('PJZUyYZ8MAy-5yl8X3LWh')
        },
        {
          img: 'Network_Overview_Aaia_in',
          label: t('A7fYo21KK-LGwbuAOz4GQ')
        },
        {
          img: 'Network_Overview_Aaia_cy',
          label: t('7uf0ugN6v-hG2KHiUvr6B')
        },
        {
          img: 'Network_Overview_Aaia_in',
          label: t('8ioYLjWnVd7dSjxuAYsob')
        },
        {
          img: 'Network_Overview_Aaia_jp',
          label: t('c2kUwWV0AbUIA1yMxGg0X')
        },
        {
          img: 'Network_Overview_Aaia_kh',
          label: t('Xt4vTo2Vvpe5SCYcMuVON')
        },
        {
          img: 'Network_Overview_Aaia_kr',
          label: t('S5HyrUqTdFLfWAj1rjCKH')
        },
        {
          img: 'Network_Overview_Aaia_sg',
          label: t('iwDiY0QWI9NrzwI1TMyJC')
        },
        {
          img: 'Network_Overview_Aaia_sg',
          label: t('GsbHNOjwtK9WkRmsRdsgV')
        },
        {
          img: 'Network_Overview_Aaia_tw',
          label: t('jm6O6qCHFjNERHeRJ1sGS')
        },
        {
          img: 'Network_Overview_Aaia_ge',
          label: t('Z_c09KOpJDLgZqCSLxsb6')
        },
        {
          img: 'Network_Overview_Aaia_jp',
          label: t('J68omSY-Dl-2lbgxpWGN3')
        },
        {
          img: 'Network_Overview_Aaia_mn',
          label: t('bN6olb-VFt5VEQNLs9iMj')
        },
        {
          img: 'Network_Overview_Aaia_mm',
          label: t('zd50sRM_hTHpd2zN6tt8w')
        },
        {
          img: 'Network_Overview_Aaia_am',
          label: t('YZ1VIhzMd0aoIB_Ac1XY7')
        }
      ]
    },
    {
      icon: 'Network_Overview_banner_node_North',
      region: t('vi0Xmk4fultMAgbT4j2gu'),
      items: [
        {
          img: 'Network_Overview_North_us',
          label: t('Y2MV0w98hHBQDXZktk3tG')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('TtIblC8qplvkIsfLPGi5z')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('3m-1EJtV5_kqgetQ0u19k')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('i78lOCiNiw69JCCl22l8o')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('EQpzU8q0a_VeNvxx2mpTr')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('x20xU_Ru4-ibGLnOtkLV_')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('vmIhHhrXcgPG01hCUpjvf')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('pztq7h4gp2KpBOrJotmHR')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('jyC0UOAudJ_DI59eZntnf')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('_W9DyoBZLT_YvGFOvXTFb')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('dfvRNQq2tqct5xE0F8AUm')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('mgpFL6EFlIQJ_IdwuuT6Y')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('NurRddrGw-hcbGB_lJRKM')
        },
        {
          img: 'Network_Overview_North_ca',
          label: t('5RkkJ5cCvgERaUZ56Oaot')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('DWujQ5fELrS4sOeG1yZkr')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('mE_QvXMsNf3QrUhFwwXY7')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('0onqLpibPAYH88CHA-_pA')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('Un2GAWBG5Kw1O0Z9RzJID')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('ETPucdCBPji4zQY9AzurO')
        },
        {
          img: 'Network_Overview_North_us',
          label: t('MGK2l7QM_qLYfnpnI-Ba2')
        },
        {
          img: 'Network_Overview_North_ca',
          label: t('1W85D8_S_SOMEgPqqiuCx')
        },
        {
          img: 'Network_Overview_North_ca',
          label: t('prIqfvNFtVjcKeoWD8OVM')
        }
      ]
    },
    {
      icon: 'Network_Overview_banner_node_Middle',
      region: t('WSTZhwzuBnVC1nCyqX8RE'),
      items: [
        {
          img: 'Network_Overview_Middle_eg',
          label: t('8yUElVZ8ZceOd0XOzPala')
        },
        {
          img: 'Network_Overview_Middle_eg',
          label: t('1_AWWpHy4uLhfurfCUv7h')
        },
        {
          img: 'Network_Overview_Middle_za',
          label: t('Mmu3bcS1joWq6IKaIE8Hd')
        },
        {
          img: 'Network_Overview_Middle_iq',
          label: t('hL-m0cv2kKLpkfOZCAapP')
        },
        {
          img: 'Network_Overview_Middle_iq',
          label: t('m39NgNlk96BocLGiDlYeZ')
        },
        {
          img: 'Network_Overview_Middle_bh',
          label: t('V3uWsmGdNmUGF1iHImeNb')
        },
        {
          img: 'Network_Overview_Middle_ae',
          label: t('7nMeQgfwI5M9pUUhMFe7b')
        },
        {
          img: 'Network_Overview_Middle_ae',
          label: t('_lSPSITFGCruvG-1isGyv')
        },
        {
          img: 'Network_Overview_Middle_za',
          label: t('3b4Ntxw2OzH0oZH2tVU9D')
        },
        {
          img: 'Network_Overview_Middle_ng',
          label: t('TO3GC9EHGD09686dKK2fK')
        },
        {
          img: 'Network_Overview_Middle_ao',
          label: t('TcuBjHCWdNQUllk98_DG5')
        },
        {
          img: 'Network_Overview_Middle_sa',
          label: t('TLFAuP0wcLxVv77zN3PBG')
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
