import { onMiniEnvReady } from '@ray-js/mini-game-sdk'

const { ccclass, property } = cc._decorator

const miniEnvReadyPromise = new Promise((resolve) => {
  onMiniEnvReady(() => {
    resolve(true)
  })
})

@ccclass
export class MenuScene extends cc.Component {
  @property(cc.Node)
  private nodeLoading: cc.Node = null

  async onLoad() {
    await miniEnvReadyPromise
    console.log('MenuScene onMiniEnvReady')

    if (cc.sys.isMobile) {
      cc.find('Canvas').getComponent(cc.Canvas).fitHeight = false
      cc.find('Canvas').getComponent(cc.Canvas).fitWidth = true
    }
    this.nodeLoading.active = false
  }

  onBtnStart() {
    this.nodeLoading.active = false

    cc.director.loadScene('game')
  }

  onBtnDebug() {
    console.log('onBtnDebug')
    // cc.director.loadScene('debug')
  }
}
