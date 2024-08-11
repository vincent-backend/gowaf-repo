// declare module "vue3-country-intl" {
//   export const nema: string;
//   export const someValue: number;
// };

declare module 'vue3-country-flag' {
  import { defineComponent, Component } from 'vue';

  // 定义组件的props接口
  interface Vue3CountryFlagProps {
    value: string;
    type: 'phone' | 'country';
    iso2?: string;
    useTitle?: boolean;
  }

  // 定义组件的slot接口
  interface Vue3CountryFlagSlot {
    country: {
      name: string;
      // 这里可以添加更多country对象的属性
    };
  }

  // 定义组件接口
  interface Vue3CountryFlagComponent extends Component {
    props: Vue3CountryFlagProps;
    methods: {
      getCountry: (code: string) => object; // 假设getCountry返回一个对象
    };
  }

  // 声明组件
  const Vue3CountryFlag: Vue3CountryFlagComponent;

  export default Vue3CountryFlag;
}

declare module Window {
  export const __vue3_country_flag_files_path_obj: any;
}