import { unref } from 'vue'

export function mergeWithDefaults(obj: any, tager: any) {
  const unrefObj = unref(obj)
  const unreftTager = unref(tager)
  // new 一个 set 对象用于存储所有可枚举属性
  const keys = new Set(Object.keys(unrefObj).concat(Object.keys(unreftTager)));
  const mergeObj: any = {};
  // 遍历所有属性
  for (const key of keys) {
    // 如果 tager 对象中存在该属性，则直接使用 tager 中的值
    if (unreftTager[key] !== undefined) {
      mergeObj[key] = unreftTager[key];
    } else {
      // 如果 unreftTager 中不存在该属性，则使用默认值
      mergeObj[key] = unrefObj[key];
    }
  }
  return mergeObj;
}