---
layout: post
title:  "npm发布包步骤"
date:   2017-06-28 12:00:00 +0800
categories: npm publish github
---

最近在学习怎么在npm上发布包，过程也不算容易，因此写这篇文章分享一下

Step.1 既然要在npm上发布，首先当然需要一个npm账号。[【npm】](https://www.npmjs.com/)

Step.2 在自己的github上新建个仓库，本例中仓库名是arios，如果没有github账号，先注册一个。[【github】](https://github.com/)

Step.3 将Step2中新建的仓库clone到本地。

Step.4 在项目目录下npm init，自己填入信息生成package.json文件。

Step.5 根据package.json中main对应的文件名，新建相应文件。比如main是index.js，则新建index.js，内容先随便写写
```
module.exports = exports = {
  name: 'arios'
}
```

Step.6 准备提交代码到github，并打上tag，tag的版本号需要跟package.json中的version保持一致
```
git add .
git commit -m 'first commit'
git tag v1.0.0
git push
git push origin --tags
```

Step.7 将仓库发布到npm，只需要一个简单的命令就行了
```
npm publish
```
如果是第一次publish，需要输入npm账号密码邮箱，以后就不需要了。

发布完成后，npm会以刚才tag的版本作为最新版本。

这样一个发布过程就完成了，要使用的时候，使用npm install arios，就会安装最新版本的包。

<br>

如果之后需要发布新版本，也很简单。

Step.1 修改源文件后，将package.json中的version递增，版本号遵循semver规范。[【semver规范】](https://gist.github.com/smallnest/666c88d3dc06774f5498)

Step.2 为本次提交打上版本tag，假设新版本号为1.0.1
```
git add .
git commit -m 'sceond commit'
git tag v1.0.1
git push
git push origin --tags
```

Step.3 发布到npm
```
npm publish
```

<br>

还可以为npm包做travis-CI来保持可靠性

Step.1 在github上fork[【travis-broken-example】](https://github.com/plaindocs/travis-broken-example)这个库

Step.2 用github关联登录[travis CI](https://travis-ci.org/auth)，允许授权

Step.3 在arios文件目录下新建.travis.yml文件，

```
language: node_js

node_js:
  - "4"
```
上述文件表示使用node环境，用4.x版本进行build

Step.4 在[travis-ci](https://travis-ci.org/)官网上管理要build的仓库，在左边的My Repositories中进行管理。比如本例中将arios仓库的开关打开。

Step.5 在arios项目的package.json中，修改script中test命令，本例中直接删除`&& exit 1`，并push到github中

Step.6 travis重新build，成功，点击build passing图标，会出现一个弹窗，复制最下面的链接`https://travis-ci.org/Pickcle/arios.svg`

Step.7 在readme中添加`[![build status](https://travis-ci.org/Pickcle/arios.svg)](https://travis-ci.org/Pickcle/arios)`，push到github，现在再看readme，就能看到build passing的图标了

<br>

过程中遇到的问题：

npm publish --tag v1.0.0 时报错：Tag name must not be a valid SemVer range: 1.0.0

这个报错是因为publish会自动将github仓库中的tag作为version，如果tag也使用v1.0.0，会导致冲突

npm publish时报错you do not have permission to publish "arios". Are you logged in as the correct user?

这个报错很可能是因为arios这个包已经存在了，所以得换一个包名字再npm publish
