import { ty } from '@ray-js/mini-game-sdk'
const { ccclass, property } = cc._decorator

@ccclass
export class DebugScene extends cc.Component {
  showToast() {
    ty.showToast({
      icon: 'success',
      title: 'Toast Title',
    })
  }

  navigateTo() {
    ty.navigateTo({
      url: '/pages/foo/index',
    })
  }

  getLaunchOptions() {
    ty.getLaunchOptions({
      success: (res) => {
        ty.showToast({
          icon: null,
          title: JSON.stringify(res),
        })
      },
    })
  }

  getUserInfo() {
    ty.getUserInfo({
      success: (res) => {
        ty.showToast({
          icon: null,
          title: JSON.stringify(res),
        })
      },
    })
  }

  backToHome() {
    cc.director.loadScene('menu')
  }
}
