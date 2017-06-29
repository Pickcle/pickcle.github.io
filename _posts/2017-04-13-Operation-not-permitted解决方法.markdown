---
layout: post
title:  "Operation not permitted解决方法"
date:   2017-04-13 15:20:24 +0800
categories: jekyll osx
---
使用sudo gem install jekyll bundler安装jekyll时发生错误:

{% highlight ruby %}
ERROR: While executing gem ... (Errno::EPERM)
Operation not permitted - /usr/bin/jekyll
{% endhighlight %}

解决方法:

sudo gem install -n /usr/local/bin/ jekyll

默认安装目录是/usr/bin，将安装目录改成/usr/local/bin，可以绕过SIP检测

参考链接: [http://stackoverflow.com/questions/31567029/how-can-i-install-jekyll-on-osx-10-11](http://stackoverflow.com/questions/31567029/how-can-i-install-jekyll-on-osx-10-11)
