---
layout: post
title:  "webpack打包报错TypeError: $export is not a function"
date:   2017-05-27 12:00:00 +0800
categories: webpack babel
---
**webpack打包时报错TypeError: $export is not a function**

**解决方案：**
* webpack.config.js中,loaders中的babel-loader需要加一行exclude: /node_modules/
