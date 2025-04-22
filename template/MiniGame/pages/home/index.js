import {
  setWebViewContext,
  onMessageFromWebView,
  postMessageToWebView,
} from '@ray-js/mini-game-sdk'

Page({
  data: {
    src: '',
    syncData: {},
    i18n: {
      language: '',
      locales: {},
    },
  },
  async onLoad() {
    ty.hideNavigationBarLoading()

    // 处理同步方法，在webview内支持同步调用
    const syncData = this.handleSync()

    // 等待必要数据加载完成后，在渲染webview
    const locales = await new Promise((resolve, reject) => {
      ty.getLangContent({
        success: (res) => resolve(res.langContent),
        fail: reject,
      })
    })

    console.log('locales', locales)

    const language = syncData.getSystemInfoSync.language
    console.log('languageKey', language)

    const base = `webview://cocos-project/build/web-mobile/index.html?param1=123&language=${language}`
    this.setData({
      src: base,
      syncData,
      i18n: {
        language,
        locales,
      },
    })
  },
  onReady() {
    this.webviewContext = ty.createWebviewContext('webviewContainer')
    setWebViewContext(this.webviewContext)
  },
  handleSync() {
    // SystemInfo
    const systemInfo = ty.getSystemInfoSync()
    const isDevtool = systemInfo.brand === 'devtools'

    // IDE 没有 AccountInfo 数据，mock了一个
    const accountInfo = isDevtool
      ? {
          miniProgram: {
            appId: 'appId',
            envVersion: 'develop',
            version: '1.0.0',
          },
        }
      : ty.getAccountInfoSync()

    return {
      getSystemInfoSync: systemInfo,
      getAccountInfoSync: accountInfo,
      getEnterOptionsSync: ty.getEnterOptionsSync(),
      getLaunchOptionsSync: ty.getLaunchOptionsSync(),
    }
  },
  onMessageFromWebView(e) {
    let data = null
    try {
      data = JSON.parse(e.detail.data)
    } catch (e) {
      console.error(e)
    }

    if (data.type === 'myCustomMsgType') {
      // custom postMessage
      console.log('get custom message: ', data)
    } else {
      // handle message by sdk
      onMessageFromWebView(e)
    }
  },
  onWebViewLoad() {
    postMessageToWebView({
      type: 'tyReady',
      data: {
        syncData: this.data.syncData,
        language: this.data.i18n.language,
        locales: this.data.i18n.locales,
      },
    })
  },
  onWebViewError(err) {
    console.log('webview error: ', err)
  },
})
