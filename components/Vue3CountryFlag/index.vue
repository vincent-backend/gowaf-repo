<template>
  <div
    class="vue3-yn-country-flag"
    :title="useTitle ? eleTitle : null"
    @click="$emit('click', country.value)"
  >
    <img class="country-flag-img" :src="countryFlagPath" :alt="value" />
    <slot :country="country.value"></slot>
  </div>
</template>

<script setup lang="ts">
import { countriesData } from './data';
interface countryData {
  iso2?: string;
  dialCode?: number;
  areaCodes?: string[];
  name?: string;
}
const props = withDefaults(
  defineProps<{
    value: string | Number;
    type?: string;
    iso2?: string;
    useTitle?: boolean;
  }>(),
  {
    type: 'country', // 类型，有两种类型，第一种：选择手机号码区号，值为phone;第二种：选择国家，值为country
    useTitle: true
  }
);
defineEmits(['click']);
let country = reactive<{ value: countryData }>({
  value: {}
});
// 计算选中的国家
let calcSelectedOption = function (
  value: string,
  type: string,
  countryList: any
) {
  if ((value + '').length == 0) {
    return {};
  }
  if ((value + '').charAt(0) === '+') {
    value = value.substr(1);
  }
  let item: any = countryList.filter((item: any) => {
    // console.log('item', item);
    // console.log("item.iso2", item.iso2)
    // // 判断国籍编码是否与value相等
    // let iso2Equal = item.iso2 == value;
    // if (iso2Equal) {
    //   return true;
    // }
    // 判断传递的props里的iso2是否相等
    let propIso2Equal = item.iso2 == props.iso2;
    if (propIso2Equal) {
      return true;
    }
    // // 一个国家只有一个手机区号的情况
    // let dialCodeEqual = item.dialCode == value;
    // if (dialCodeEqual) {
    //   return true;
    // }
    // // 一个国家有多个手机区号的情况
    // let mutipleDialCodeEqual =
    //   item.dialCode == 1 &&
    //   item.areaCodes &&
    //   item.areaCodes.some((areaCode: string) => areaCode == value);
    // if (mutipleDialCodeEqual) {
    //   return true;
    // }
  });
  // console.log("item", item)
  if (!item || item.length === 0) {
    item = {};
  } else {
    item = item[0] || {};
  }
  country.value = item;
  return item;
};

// 计算选中国籍的国旗文件的路径
let countryFlagPath = computed(() => {
  // let svgPathObj = (window || Math).__vue3_country_flag_files_path_obj || {};
  if (!props.value) {
    // 空白
    return `/flags/empty.svg`;
  }
  let country = calcSelectedOption(props.value, props.type, countriesData);
  // console.log('country', country);
  if (country) {
    return `/flags/${country.iso2}.svg`;
  }
  // 未知国家
  return `/flags/unknown.svg`;
});

// 计算dom元素title
let eleTitle = computed(() => {
  let countryInner = country.value;
  let value =
    (props.value + '').charAt(0) == '+' ? props.value.substr(1) : props.value;
  if (props.type.toLowerCase() === 'phone') {
    // let dialCode = country.dialCode;
    // 处理一个国家有多个手机区号的情况
    if (countryInner.dialCode == 1 && countryInner.areaCodes) {
      return `${countryInner.name}(+${value || countryInner.areaCodes[0]})`;
    }
    return countryInner.name + '(+' + countryInner.dialCode + ')';
  } else {
    return countryInner.name;
  }
});
</script>
<style lang="scss" scoped></style>
