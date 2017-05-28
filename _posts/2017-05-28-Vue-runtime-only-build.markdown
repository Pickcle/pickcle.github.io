---
layout: post
title:  "Vue warn: You are using the runtime-only build of Vue"
date:   2017-05-28 14:59:24 +0800
categories: vue
---
Vue warn: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.

解决方案：

node_modules中vue的package.json中可以看到，真正导出的是main指向的vue.runtime.common.js，所以如果直接import vue from 'vue'的话，引用的是vue.runtime.common.js，而vue其实是rumtime+compile两部分组成的，所以我们需要在webpack中设置个vue的别名，alias中添加一行'vue': 'vue/dist/vue.js'，然后项目中正常使用就可以了
