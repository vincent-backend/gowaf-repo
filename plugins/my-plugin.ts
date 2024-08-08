// plugins/my-plugin.ts
export default defineNuxtPlugin((nuxtApp) => {
  // 提供一个全局函数
  nuxtApp.provide('greet', (name: string) => `Hello, ${name}!`);

  // 注册一个钩子
  nuxtApp.hook('page:start', () => {
    console.log('Page is starting...');
  });
  nuxtApp.hook('app:created', (vueApp) => {
    console.log('app:created...');
  });
});
