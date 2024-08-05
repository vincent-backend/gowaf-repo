const langFiles = import.meta.glob('./assets/langs/**/*.json');
// import home from '~/assets/langs/en/home.json'

// 创建一个空对象来存储语言包
const i18nResources: any = {};

// 遍历所有匹配的文件，并导入它们
for (const path in langFiles) {
  // 去除路径中的前缀和扩展名，得到语言代码和文件名
  const match = path.match(/\.\/assets\/langs\/(.+)\/(.+)\.json$/);
  if (match) {
    const [, langCode, fileName] = match;
    // 导入文件内容
    const langData = await langFiles[path]();
    // 将文件内容存储到i18nResources对象中
    if (!i18nResources[langCode]) {
      i18nResources[langCode] = {};
    }
    i18nResources[langCode][fileName] = langData;
  }
}

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: i18nResources
}));
