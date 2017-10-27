# 鉴宝项目

## 项目概述

vue基础框架项目

## 环境介绍

- Vue 2.0+

## 开发环境部署/安装

本项目代码使用 [vue2](http://vue.org/) 进行开发.

### 基本安装

1. 克隆源代码

    将源代码克隆至本地

    > git clone https://git.coding.net/frankyoung/archive-shop.git

2. 准备node环境和npm

    直接去官网 [https://nodejs.org/en/](https://nodejs.org/en/) 下载最新版本即可

3. 安装依赖

    > npm install

4. 运行

    1). 开发环境

      > npm run dev

    2). 生产环境

      > npm run build

在开发环境下，完成以上步骤后浏览器访问 http://localhost:8080/ 即可.

在生成环境下，将生成的dist文件上传至服务器，配置好端口，访问即可.

至此, 安装完成 ^ _ ^

### 说明
* 接口请在src/api中编写，使用 `import API from '@/api'` 直接调用
* 引入了vuex, store文件中，具体方法请看vuex官方文档
* fliter单独提取
