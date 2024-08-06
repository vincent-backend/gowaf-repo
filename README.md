# Gowaf 官网项目说明

## 开发依赖

```
"@nuxtjs/i18n": "^8.3.1",
"@nuxtjs/style-resources": "^1.2.2",
"autoprefixer": "^10.4.19",
"element-plus": "^2.7.6",
"nuxt": "^3.11.2",
"postcss": "^8.4.38",
"sass": "^1.77.6",
"tailwindcss": "^3.4.3",
"less": "^4.2.0",
"vue": "^3.4.27",
"vue-router": "^4.3.2"
```

## 国际化说明

1. 配合vscode插件 i18n ally 使用，开发本项目前先安装对应的vscode扩展。
2. 约定 /assets/langs 目录下的json文件为各国语言 请不要创建其他的除json外的文件, 一个语言一个json
3. 新增语言的操作方式-> 1.新增语言json 2.打开扩展 找到对应识别出来的语言 点击缺失文案进行翻译
4. 使用插件的翻译需要翻墙 被封IP需要更新dns https://github.com/Ponderfly/GoogleTranslateIpCheck