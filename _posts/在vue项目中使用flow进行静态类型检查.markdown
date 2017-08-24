---
layout: post
title:  "在vue项目中使用flow进行静态类型检查"
date:   2017-08-23 12:00:00 +0800
categories: vue flow
---

**方案步骤**
* 安装相关依赖库：  
* babel-plugin-syntax-flow
* babel-plugin-transform-class-properties
* babel-plugin-transform-flow-strip-types
* eslint
* babel-eslint
* eslint-plugin-html
* eslint-plugin-flowtype-errors
* eslint-plugin-vue
* eslint-config-vue
* flow-bin
* 修改.babelrc
  ```
  {
    ...
    "plugins": [
      "babel-plugin-transform-class-properties",
      "babel-plugin-syntax-flow",
      "babel-plugin-transform-flow-strip-types"
    ]
  }
  ```
* 修改.eslintrc
  ```
  {
    "parser": "babel-eslint",

    "plugins": [
      "html",
      "flowtype-errors"
    ],

    "extends": [
      "vue"
    ],

    "rules": {
      "flowtype-errors/show-errors": 2
    }
  }
  ```
* 创建.flowconfig文件，可以为空
* 现在可以在.vue的script中使用静态类型检测了
