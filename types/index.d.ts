declare module 'vue3-country-intl' {
  import Vue, { VNodeChildren, VNode } from 'vue';

  type SchemaType = 'input' | 'popover' | 'modal';
  type ValueType = 'phone' | 'country';

  interface Vue3CountryIntlProps {
    schema?: SchemaType;
    type?: ValueType;
    placeholder?: string;
    searchAble?: boolean;
    disabled?: boolean;
    showAreaCode?: boolean;
    showLabelImg?: boolean;
    onlyValue?: boolean;
    listZIndex?: number;
    maxHeight?: number;
    selectedText?: string;
    showSelectedText?: boolean;
    readonly?: boolean;
    offsetTop?: number;
    popoverClass?: string;
    searchInputPlaceholder?: string;
    modalClass?: string;
    visible?: boolean;
    cancelText?: string;
    disableCountry?: string | string[];
    onlyCountry?: string | string[];
    noDataText?: string;
    iosMobileReadonly?: boolean;
    useChinese?: boolean;
    static?: boolean;
    transitionName?: string;
    offset?: [number, number];
    rightOffset?: number;
    iso2?: string;
  }

  interface Vue3CountryIntlMethods {
    show(): void;
    hide(): void;
    getSelected(): any; // 需要具体化返回类型
    getCountryInfo(countryCodeOrAreaCode: string, type: ValueType, iso2?: string): any; // 需要具体化返回类型
  }

  interface Vue3CountryIntlSlots {
    vueCountryNoData?: VNodeChildren;
  }

  interface Vue3CountryIntlEvents {
    onChange(selected: any, value: any): void; // 需要具体化参数类型
  }

  class Vue3CountryIntl extends Vue {
    $props: Vue3CountryIntlProps;
    $methods: Vue3CountryIntlMethods;
    $slots: Vue3CountryIntlSlots;
    $emit: (event: string, ...args: any[]) => void;
  }

  export default Vue3CountryIntl;
}

declare module 'vue3-country-flag' {
  import { defineComponent, ComponentPublicInstance, VNode } from 'vue';

  // 定义组件的 props 类型
  interface Vue3CountryFlagProps {
    value: string; // 国籍代码或手机区号值
    type?: 'phone' | 'country'; // 值类型，默认为 'country'
    iso2?: string; // 当 type 为 'phone' 时必须传递的国籍代码
    useTitle?: boolean; // 是否给元素添加 title 属性
  }

  // 定义组件的 emits 类型
  interface Vue3CountryFlagEmits {
    (e: 'click', payload: { country: CountryInfo }): void;
  }

  // 定义组件的 slots 类型
  interface Vue3CountryFlagSlots {
    default: {
      country: CountryInfo;
    };
  }

  // 定义国家信息的接口
  interface CountryInfo {
    name: string; // 国家名称
    // 其他可能的国家信息字段...
  }

  // 定义组件类型声明
  declare module 'vue' {
    interface Vue3CountryFlagComponent extends ComponentPublicInstance, Vue3CountryFlagProps {
      getCountry: () => CountryInfo;
    }

    interface GlobalComponents {
      Vue3CountryFlag: defineComponent<Vue3CountryFlagProps, {}, {}, Vue3CountryFlagEmits, Vue3CountryFlagSlots>;
    }
  }

  // 组件的 TypeScript 声明
  declare const Vue3CountryFlag: defineComponent<Vue3CountryFlagProps, {}, {}, Vue3CountryFlagEmits, Vue3CountryFlagSlots>;

  export default Vue3CountryFlag;
}

declare module Window {
  export const __vue3_country_flag_files_path_obj: any;
}