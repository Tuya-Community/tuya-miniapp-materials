import { I18n } from '@ray-js/mini-game-sdk'

const { ccclass, property } = cc._decorator

@ccclass
export class GameOver extends cc.Component {
  @property(cc.Label)
  private labelText: cc.Label = null
  @property(cc.Node)
  private btnRestart: cc.Node = null

  public show(score: number, cb, target?: any) {
    this.node.active = true
    this.labelText.string = I18n.t('game.score', { defaultValue: 'Score: ' }) + score
    this.btnRestart.once(cc.Node.EventType.TOUCH_END, cb, target)
  }

  public hide() {
    this.node.active = false
  }
}
