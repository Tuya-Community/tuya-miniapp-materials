English | [简体中文](./README-zh_CN.md)

# Mini Game Template

## Introduction

This project is a template for developing mini-games using the Tuya Smart Mini Program, enabling developers to quickly build a mini-game application that runs on smart mini-programs.

Based on the Tuya Smart Mini Program offline [webview site](https://developer.tuya.com/en/miniapp/develop/miniapp/guide/webview), Cocos serves as the game development framework (developers can choose other mini-program development frameworks), and can incorporate `@ray-js/mini-game-sdk` allowing developers to call Mini Program APIs and complete communication with the Mini Program container on the webview layer.

## Preview

Scan the smart mini-program QR code below to experience the component library examples.

<img src="https://images.tuyaus.com/smart/ui_design_pkg_icon/non-session-user/1744275003fe0ee00031c.png" width="200" height="200">

## Before Use

Before using, ensure you have studied the official [Tuya Smart Mini Program Quick Start Guide](https://developer.tuya.com/en/miniapp/develop/miniapp/guide/start/smart) and Cocos's official [Cocos Creator User Manual](https://docs.cocos.com/creator/3.8/manual/en/getting-started/install/).

## Development and Deployment

- Step 1: Download Cocos Creator
  - import "./cocos-project"
- Step 2: Develop the Cocos game
- Step 3: Build the Cocos game
  - Project - Build and Release - Publication Platform: Web Mobile
- Step 4: Run and debug in the IDE
  -Open  [Tuya MiniApp Tools](https://developer.tuya.com/en/miniapp/devtools/tools), add the project directory to preview the example.

> ⚠️ Note: The current IDE (v0.8.1) does not support mobile touch events (we will support them soon), please use real device debugging.

## Version Dependencies

- Tuya MiniApp IDE >= 0.5.10
- Base library version >= 2.14.2
- Container version >= 3.12.0
- @ray-js/mini-game-sdk >= 0.0.3

## License

This project is based on the [ISC](https://zh.wikipedia.org/wiki/ISC%E8%A8%B1%E5%8F%AF%E8%AD%89) license, feel free to enjoy and participate in open source.
