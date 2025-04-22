[English](./README.md) | 简体中文

# 小游戏模板

## 介绍

本项目是使用涂鸦智能小程序开发的小游戏的模板项目，让开发者能够快速构建一个运行在智能小程序的小游戏应用。

基于涂鸦智能小程序离线 [webview 站点](https://developer.tuya.com/cn/miniapp/develop/miniapp/guide/webview)，Cocos 作为小游戏开发框架（开发者也可以选择其他小程序开发框架），可以引入`@ray-js/mini-game-sdk` 让开发者在 webview 层调用小程序 API 以及完成与小程序容器通讯。

## 预览

扫描下方智能小程序二维码，体验组件库示例。

<img src="https://images.tuyacn.com/smart/ui_design_pkg_icon/non-session-user/1744275003fe0ee00031c.png" width="200" height="200">

## 使用之前

使用之前，请确保你已经学习过智能小程序官方的 [智能小程序快速开始](https://developer.tuya.com/cn/miniapp/develop/miniapp/guide/start/smart) 和 Cocos官方的 [Cocos Creator用户手册](https://docs.cocos.com/creator/3.8/manual/zh/getting-started/install/)

## 开发与部署

- 步骤 1：下载 Cocos Creator
  - 并导入“./cocos-project”

- 步骤 2：进行 Cocos游戏开发

- 步骤 3：通过 Cocos 游戏构建
  - 项目 - 构建发布 - 发布平台: Web Mobile

- 步骤 4：在 IDE 中运行调试
  - 打开 [Tuya MiniApp Tools](https://developer.tuya.com/cn/miniapp/devtools/tools)，导入该项目就可以预览示例了。

> ⚠️ 注意：当前 IDE (v0.8.1) 暂不支持移动端 touch 事件（我们将尽快支持），请使用真机调试.

## 版本依赖

- Tuya MiniApp IDE >= 0.5.10
- 基础库版本 >= 2.14.2
- 容器版本 >= 3.12.0
- @ray-js/mini-game-sdk >= 0.0.3

## 开源协议

本项目基于 [ISC](https://zh.wikipedia.org/wiki/ISC%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
