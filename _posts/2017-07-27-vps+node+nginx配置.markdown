---
layout: post
title:  "vps+nodejs+nginx配置"
date:   2017-07-27 12:00:00 +0800
categories: centos6
---

**记录在vps上如何配置nginx**
* 安装nginx，直接yum安装即可
* 新建nginx配置文件
	```
	cd /etc/nginx/conf.d
	vi site.conf
	```
	输入配置信息
	```
	server {
		listen 80;
		server_name www.myarki.com;

		location / {
			proxy_pass: http://localhost:9090;
		}
	}
	```
	保存退出
* 重启nginx
	```
	service nginx restart
	```
* 还可以将nginx服务设置为默认开启
	```
	chkconfig --level 2345 nginx on
	```
	执行以下命令查看：
	```
	chkconfig --list
	```
	重启vps
	```
	reboot
	```
	查看nginx服务是否开启
	```
	netstat --apn
	```
