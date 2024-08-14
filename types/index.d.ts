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
declare module 'vue' {
  import Vue, { CreateElement } from 'vue';

  interface Vue {
    $device: any; // 这里定义你的 $device 类型，any 只是一个占位符
  }
}