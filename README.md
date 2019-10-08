# supermall

## 一. 项目简介

### 该项目是vue + vue/cli3 + webpack做出的一个手机端的商店项目，本次项目使用vue的全家桶，用vue-router做路由，做成页面的跳转效果，用vuex做全局的状态管理，但是本项目是用axios来完成网络请求。

## 二. 文件介绍

### 目录
 - dist ： webpack打包后的文件，也是用于上线的文件
 - public : 存放index.html和favicon.ico
 - serve : 使用nodejs写的一个简单的服务器（不属于vue项目原有的文件，可以移除）
 - src : 编程文件
 	+ assets : 存放资源的文件
 	+ common : 存放一些公共的js
 	+ components: 存放组件
 	+ network： 存放网络请求的js文件
 	+ router ： 存放路由配置
 	+ store ： 存放公共状态的文件夹(vuex)
 	+ views ： 页面的Vue文件
 	+ App.vue ： 页面文件入口
 	+ main.js : 程序入口文件，是初始化vue实例并使用需要的插件,加载各种公共组件.
 - .browserslistrc : 指定了项目的目标浏览器的范围
 - .editorconfig : 项目规范
 - .gitignore ： 配置使用git的时候忽略指定的文件
 - babel.config.js ： 配置Babel 。
 - package-lock.json ： 项目依赖的实际版本
 - package.json ： 项目的依赖以及一些脚本配置
 - postcss.config.js ： 将px转发为其它单位
 - vue.config.js ： 项目配置

## 三. 项目运行

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
