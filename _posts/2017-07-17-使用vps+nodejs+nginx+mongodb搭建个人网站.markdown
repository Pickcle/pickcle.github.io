---
layout: post
title:  "使用vps+nodejs+nginx+mongodb搭建个人网站"
date:   2017-07-17 12:00:00 +0800
categories: vps nodejs nginx mongodb vue bandwagon blog
---

之前使用LAMP(Linux+Apache+MySql+PHP)搭建了WordPress博客网站，但感觉框架太重，想改css只能用模板，想写博客只能用编辑器，想上传markdown都不允许，不够自由。

这篇文章记录了从零开始搭建一个使用vps+nodejs+nginx的个人网站。

---

准备工作：

**遇到的问题**

**mark一下**
* osx查看端口情况
  ```
  lsof -i tcp
  ```
* osx查看某个端口情况
  ```
  lsof -i:9090
  ```
* 关闭node进程，同时也关闭端口
  ```
  kill -2 [pid]
  ```
* linux查看端口状态
  ```
  netstat -apn
  ```
* linux后台打开mongodb服务器
  ```
  mongod &
  ```
* linux后台打开api服务器
  ```
  node server/apis/index.js &
  ```
