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

export function matchBreadCrumbs(breadcrumbs: any, path: any) {
  const localePath = useLocalePath();
  const locpath = localePath(path)
  for (let i = 0; i < breadcrumbs.length; i++) {
    const item = breadcrumbs[i];
    let isMatch = localePath(item.href) === locpath;

    // 如果当前项匹配，或者在子项中找到匹配项，则设置 current 为 true
    if (isMatch || (item.children && item.children.some((child: any) => localePath(child.href) === locpath))) {
      item.current = true;
      if (item.children) {
        item.children.forEach((i: any) => {
          if (localePath(i.href) === locpath) {
            i.current = true
          }
        });
      }

      // 寻找父级项并设置 current 为 true
      let parentItem = item;
      while (parentItem && parentItem.current !== true) {
        parentItem.current = true;
        parentItem = getParentItem(breadcrumbs, parentItem);
      }
    } else if (item.children) {
      // 如果当前项不匹配，但有子项，则递归检查子项
      matchBreadCrumbs(item.children, path);
    }
  }
}

export function getParentItem(breadcrumbs: any, item: any) {
  // 通过面包屑数组查找父级项
  for (let i = 0; i < breadcrumbs.length; i++) {
    if (breadcrumbs[i].children && breadcrumbs[i].children.includes(item)) {
      return breadcrumbs[i];
    }
  }
  return null;
}