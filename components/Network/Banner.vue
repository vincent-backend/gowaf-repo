<script lang="ts" setup>
const { t: $t } = useI18n();
const props = defineProps<{
  title0?: string;
  title1?: string;
  subtitle?: string;
  list?: Array<{
    img: string;
    name: string;
  }>;
}>();

const localizedDefaults: any = computed(() => {
  const obj = {
    title0: $t('network.overview.title0'),
    title1: $t('network.overview.title1'),
    subtitle: $t('network.overview.title2'),
    list: [
      {
        icon: 'icon-blue',
        name: 'Europe',
        num: '35'
      },
      {
        icon: 'icon-cyanogen',
        name: 'LATAM',
        num: '16'
      },
      {
        icon: 'icon-orange',
        name: 'Oceania',
        num: '7'
      },
      {
        icon: 'icon-green',
        name: 'Asia',
        num: '29'
      },
      {
        icon: 'icon-yellow',
        name: 'North America',
        num: '22'
      },
      {
        icon: 'icon-pink',
        name: 'Middle East & Africa',
        num: '12'
      }
    ]
  };
  return mergeWithDefaults(obj, props);
});
const curTab = ref(0);
const dotlist = computed(() => {
  const arr: any = {
    0: [
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Amsterdam '
        },
        popStyle: 'top: 17.5%; left: 45%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Athens '
        },
        popStyle: 'top: 29.6%; left: 52%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Belgrade '
        },
        popStyle: 'top: 23%; left: 51.5%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Berlin '
        },
        popStyle: 'top: 18%; left: 47.7%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Brussels '
        },
        popStyle: 'top: 19.4%; left: 44.4%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Budapest '
        },
        popStyle: 'top: 21.1%; left: 50.5%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Bucharest '
        },
        popStyle: 'top: 24.5%; left: 53.9%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Chisinau '
        },
        popStyle: 'top: 21.5%; left: 54.1%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Copenhagen '
        },
        popStyle: 'top: 15%; left: 47.7%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Dublin '
        },
        popStyle: 'top: 17.4%; left: 41.7%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Frankfurt (Volume)'
        },
        popStyle: 'top: 19.7%; left: 46.4%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Helsinki '
        },
        popStyle: 'top: 12.5%; left: 50.3%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Keflavik '
        },
        popStyle: 'top: 10.1%; left: 38.5%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Kyiv '
        },
        popStyle: 'top: 18%; left: 54.2%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Lisbon '
        },
        popStyle: 'top: 28%; left: 40.8%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Ljubljana '
        },
        popStyle: 'top: 22.5%; left: 48.3%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'London '
        },
        popStyle: 'top: 18.4%; left: 43.3%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Luxembourg '
        },
        popStyle: 'top: 20.3%; left: 45.5%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Madrid '
        },
        popStyle: 'top: 27%; left: 42.5%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Marseille '
        },
        popStyle: 'top: 25%; left: 45%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Milan '
        },
        popStyle: 'top: 22.5%; left: 46%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Moscow '
        },
        popStyle: 'top: 13.2%; left: 56%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Novi Travnik '
        },
        popStyle: 'top: 24%; left: 50%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Oslo '
        },
        popStyle: 'top: 13%; left: 47%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Paris (Volume)'
        },
        popStyle: 'top: 21%; left: 44.4%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Prague '
        },
        popStyle: 'top: 18.9%; left: 48.7%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Riga '
        },
        popStyle: 'top: 16%; left: 49.4%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Sofia '
        },
        popStyle: 'top: 26%; left: 52.4%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Stockholm '
        },
        popStyle: 'top: 12.9%; left: 48.5%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Vienna '
        },
        popStyle: 'top: 20.9%; left: 49.3%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Vilnius '
        },
        popStyle: 'top: 14.7%; left: 51.3%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Warsaw '
        },
        popStyle: 'top: 17.2%; left: 51%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Zagreb '
        },
        popStyle: 'top: 22.5%; left: 49.5%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Zurich '
        },
        popStyle: 'top: 21.5%; left: 45.7%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Ashburn '
        },
        popStyle: 'top: 29%; left: 18.5%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Atlanta '
        },
        popStyle: 'top: 32%; left: 16%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Boston '
        },
        popStyle: 'top: 25.5%; left: 21.5%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Charlotte '
        },
        popStyle: 'top: 31.5%; left: 17.6%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Chicago (Volume)'
        },
        popStyle: 'top: 23.5%; left: 18%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Dallas (Volume)'
        },
        popStyle: 'top: 31%; left: 12.5%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Denver '
        },
        popStyle: 'top: 27.5%; left: 12%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Honolulu '
        },
        popStyle: 'top: 38.5%; left: 1.5%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Houston '
        },
        popStyle: 'top: 34%; left: 13.2%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Kansas City '
        },
        popStyle: 'top: 27%; left: 13.7%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Los Angeles  (Volume)'
        },
        popStyle: 'top: 30.5%; left: 5.5%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Miami  (Volume)'
        },
        popStyle: 'top: 36.6%; left: 17.4%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Minneapolis '
        },
        popStyle: 'top: 20%; left: 17%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Montreal '
        },
        popStyle: 'top: 20.5%; left: 22%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'New York '
        },
        popStyle: 'top: 28%; left: 20.2%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Ogden '
        },
        popStyle: 'top: 26.5%; left: 9%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Phoenix '
        },
        popStyle: 'top: 32.5%; left: 8%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Pittsburgh '
        },
        popStyle: 'top: 26.5%; left: 18.2%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'San Jose '
        },
        popStyle: 'top: 27%; left: 5.5%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Seattle '
        },
        popStyle: 'top: 23%; left: 7%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Toronto '
        },
        popStyle: 'top: 22%; left: 20%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Vancouver '
        },
        popStyle: 'top: 19.5%; left: 7%;'
      },
      {
        label: {
          style: 'rgb(149, 251, 253)',
          text: 'Adelaide '
        },
        popStyle: 'top: 83%; left: 87.5%;'
      },
      {
        label: {
          style: 'rgb(149, 251, 253)',
          text: 'Auckland '
        },
        popStyle: 'top: 84%; left: 98.2%;'
      },
      {
        label: {
          style: 'rgb(149, 251, 253)',
          text: 'Brisbane '
        },
        popStyle: 'top: 76%; left: 93.2%;'
      },
      {
        label: {
          style: 'rgb(149, 251, 253)',
          text: 'Hagatna '
        },
        popStyle: 'top: 45%; left: 90%;'
      },
      {
        label: {
          style: 'rgb(149, 251, 253)',
          text: 'Melbourne '
        },
        popStyle: 'top: 84.8%; left: 89%;'
      },
      {
        label: {
          style: 'rgb(149, 251, 253)',
          text: 'Perth '
        },
        popStyle: 'top: 81%; left: 80.5%;'
      },
      {
        label: {
          style: 'rgb(149, 251, 253)',
          text: 'Sydney '
        },
        popStyle: 'top: 82%; left: 91.2%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Almaty '
        },
        popStyle: 'top: 26.5%; left: 66%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Baku '
        },
        popStyle: 'top: 30%; left: 59%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Bangkok '
        },
        popStyle: 'top: 48%; left: 77%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Bangalore '
        },
        popStyle: 'top: 47.3%; left: 69%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Chennai '
        },
        popStyle: 'top: 46.9%; left: 70.1%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Dhaka '
        },
        popStyle: 'top: 38.5%; left: 73%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Hong Kong (Volume)'
        },
        popStyle: 'top: 40.6%; left: 80.8%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Ho Chi Minh '
        },
        popStyle: 'top: 49%; left: 79.1%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Istanbul '
        },
        popStyle: 'top: 29.3%; left: 53.7%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Jakarta '
        },
        popStyle: 'top: 62%; left: 80%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Karachi '
        },
        popStyle: 'top: 38%; left: 65%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Kathmandu '
        },
        popStyle: 'top: 38%; left: 70.8%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Kolkata '
        },
        popStyle: 'top: 40%; left: 72%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Kuala Lumpur '
        },
        popStyle: 'top: 53.3%; left: 76.8%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Manila '
        },
        popStyle: 'top: 44.5%; left: 83.3%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Mumbai '
        },
        popStyle: 'top: 43.5%; left: 67.4%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Nicosia '
        },
        popStyle: 'top: 31.5%; left: 54%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'New Delhi '
        },
        popStyle: 'top: 39%; left: 68.7%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Osaka '
        },
        popStyle: 'top: 32%; left: 86%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Phnom Penh '
        },
        popStyle: 'top: 48.4%; left: 78.1%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Seoul '
        },
        popStyle: 'top: 29.6%; left: 83.3%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Singapore (Volume)'
        },
        popStyle: 'top: 54.7%; left: 77.9%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Taipei '
        },
        popStyle: 'top: 38.7%; left: 83.1%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Tbilisi '
        },
        popStyle: 'top: 29%; left: 57%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Tokyo (Volume)'
        },
        popStyle: 'top: 30.5%; left: 87.5%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Ulaanbaatar '
        },
        popStyle: 'top: 25%; left: 77%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Yangon '
        },
        popStyle: 'top: 44%; left: 75.2%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Yerevan '
        },
        popStyle: 'top: 31%; left: 57%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Bogota '
        },
        popStyle: 'top: 52.6%; left: 19%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Buenos Aires '
        },
        popStyle: 'top: 83%; left: 25.5%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Curitiba '
        },
        popStyle: 'top: 75.4%; left: 27.2%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Fortaleza '
        },
        popStyle: 'top: 60%; left: 31%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Guatemala '
        },
        popStyle: 'top: 46%; left: 13.5%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'La Paz '
        },
        popStyle: 'top: 69%; left: 21%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Lima '
        },
        popStyle: 'top: 67%; left: 18%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Mexico City '
        },
        popStyle: 'top: 41.6%; left: 10.4%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Porto Alegre '
        },
        popStyle: 'top: 78%; left: 27%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Rio de Janeiro '
        },
        popStyle: 'top: 73%; left: 29.5%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Salvador '
        },
        popStyle: 'top: 66.5%; left: 30.4%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'San Juan '
        },
        popStyle: 'top: 43.5%; left: 20.8%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'San Pedro '
        },
        popStyle: 'top: 48.5%; left: 15%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Santiago '
        },
        popStyle: 'top: 85%; left: 21.2%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Sao Paulo (Volume)'
        },
        popStyle: 'top: 74%; left: 28%;'
      },
      {
        label: {
          style: 'rgb(132, 252, 187)',
          text: 'Cairo '
        },
        popStyle: 'top: 35%; left: 53.4%;'
      },
      {
        label: {
          style: 'rgb(132, 252, 187)',
          text: 'Cape Town '
        },
        popStyle: 'top: 82.5%; left: 49.5%;'
      },
      {
        label: {
          style: 'rgb(132, 252, 187)',
          text: 'Baghdad (ISP)'
        },
        popStyle: 'top: 36%; left: 57%;'
      },
      {
        label: {
          style: 'rgb(132, 252, 187)',
          text: 'Bahrain '
        },
        popStyle: 'top: 38%; left: 60.4%;'
      },
      {
        label: {
          style: 'rgb(132, 252, 187)',
          text: 'Dubai '
        },
        popStyle: 'top: 38.5%; left: 61.6%;'
      },
      {
        label: {
          style: 'rgb(132, 252, 187)',
          text: 'Fujairah '
        },
        popStyle: 'top: 39.5%; left: 62.5%;'
      },
      {
        label: {
          style: 'rgb(132, 252, 187)',
          text: 'Johannesburg '
        },
        popStyle: 'top: 75%; left: 53.5%;'
      },
      {
        label: {
          style: 'rgb(132, 252, 187)',
          text: 'Lagos '
        },
        popStyle: 'top: 52%; left: 43.5%;'
      },
      {
        label: {
          style: 'rgb(132, 252, 187)',
          text: 'Luanda '
        },
        popStyle: 'top: 61%; left: 47%;'
      },
      {
        label: {
          style: 'rgb(132, 252, 187)',
          text: 'Riyadh '
        },
        popStyle: 'top: 39%; left: 59%;'
      }
    ],
    1: [
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Frankfurt (Volume)'
        },
        popStyle: 'top: 19.7%; left: 46.4%;'
      },
      {
        label: {
          style: 'rgb(254, 198, 62)',
          text: 'Paris (Volume)'
        },
        popStyle: 'top: 21%; left: 44.4%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Chicago (Volume)'
        },
        popStyle: 'top: 23.5%; left: 18%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Dallas (Volume)'
        },
        popStyle: 'top: 31%; left: 12.5%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Los Angeles  (Volume)'
        },
        popStyle: 'top: 30.5%; left: 5.5%;'
      },
      {
        label: {
          style: 'rgb(242, 32, 136)',
          text: 'Miami  (Volume)'
        },
        popStyle: 'top: 36.6%; left: 17.4%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Hong Kong (Volume)'
        },
        popStyle: 'top: 40.6%; left: 80.8%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Singapore (Volume)'
        },
        popStyle: 'top: 54.7%; left: 77.9%;'
      },
      {
        label: {
          style: 'rgb(241, 138, 217)',
          text: 'Tokyo (Volume)'
        },
        popStyle: 'top: 30.5%; left: 87.5%;'
      },
      {
        label: {
          style: 'rgb(255, 157, 100)',
          text: 'Sao Paulo (Volume)'
        },
        popStyle: 'top: 74%; left: 28%;'
      }
    ],
    2: [
      {
        label: {
          style: 'rgb(132, 252, 187)',
          text: 'Baghdad (ISP)'
        },
        popStyle: 'top: 36%; left: 57%;'
      }
    ]
  };
  return arr[curTab.value];
});

const { t } = useI18n();
const i18ntext = computed(() => {
  return [
    t('jX2VH-xj0sza5eQJ7y2X0'),
    t('yfjfFQ5dHd72oOu_hc0lM'),
    t('ZAFDdK2x6AncqyhphDH9w')
  ];
});
</script>

<template>
  <div class="banner-container">
    <div class="page-container banner">
      <div class="tabs">
        <a
          href="#"
          v-for="(tab, index) in i18ntext"
          :class="{ current: index === curTab }"
          @click.prevent="curTab = index"
        >
          {{ tab }}
        </a>
      </div>
      <div class="content">
        <div class="title-0">
          {{ localizedDefaults.title0 }}
        </div>
        <div class="title-1">
          {{ localizedDefaults.title1 }}
        </div>
        <div class="title-2">
          {{ localizedDefaults.subtitle }}
        </div>
      </div>
      <div class="dots">
        <div
          class="dot"
          v-for="item in dotlist"
          :style="item.popStyle"
          :class="{
            'dot-blue': item.label.style == 'rgb(254, 198, 62)',
            'dot-cyanogen': item.label.style == 'rgb(255, 157, 100)',
            'dot-green': item.label.style == 'rgb(241, 138, 217)',
            'dot-yellow': item.label.style == 'rgb(242, 32, 136)',
            'dot-orange': item.label.style == 'rgb(149, 251, 253)',
            'dot-pink': item.label.style == 'rgb(132, 252, 187)'
          }"
        ></div>
        <!-- <div class="dot dot-cyanogen"></div>
        <div class="dot dot-orange"></div>
        <div class="dot dot-green"></div>
        <div class="dot dot-yellow"></div>
        <div class="dot dot-pink"></div> -->
      </div>
      <div class="legend-container">
        <div
          class="legend-item"
          v-for="(item, index) in localizedDefaults.list"
          :key="index"
        >
          <div class="icon" :class="[item.icon]"></div>
          <div class="text">
            {{ item.name }}
            <span class="count">({{ item.num }})</span>
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
      position: relative;
      top: 76px;
      left: 168px;
      width: 84%;
      height: 56%;
      .dot {
        position: absolute;
        width: 26px;
        height: 26px;
        color: rgb(242, 32, 136);

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
        margin-top: 0;
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
