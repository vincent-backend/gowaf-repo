
import Vue3CountryFlag from 'vue3-country-flag';
// let flagFilePath = require.context(
//   'vue3-country-intl/lib/country-flag-svgs',
//   true,
//   /\.svg$/
// );
const modules: any = import.meta.glob(`/public/flags/*.svg`, { query: '?url', eager: true });

// let svgs = require.context(
//   '../public/flags',
//   false,
//   /\.svg$/
// );
// 获取svg文件名称正则
// let reg = /(\w+)(\.\w*)*\.svg$/;
// // 获取svg文件路径
// const svgPathList = typeof svgs === 'function' ? svgs.keys().map((item: any) => svgs(item)) : svgs;
// // 将svg路径转换成对象
// const svgPathObj = svgPathList.reduce((res: any, svgPath: any) => {
//   let pathIsString = typeof svgPath === 'string';
//   let matched = pathIsString ? svgPath.match(reg) : svgPath.default.match(reg);
//   if (matched) {
//     res[matched[1]] = pathIsString ? svgPath : svgPath.default;
//   }
//   return res;
// }, {});
const list: any = []

for (const path in modules) {
  list.push(modules[path])
}
// console.log(svgPathObj);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Vue3CountryFlag, list);
})
