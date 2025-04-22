import { I18n } from '@ray-js/mini-game-sdk'
import { G } from './G'
import { GameOver } from './GameOver'
import { GameStage } from './GameStage'
import { PlayerDieEvent } from './events/PlayerDieEvent'
import { PlayerJumpSuccessEvent } from './events/PlayerJumpSuccessEvent'

const { ccclass, property } = cc._decorator

@ccclass
export class GameController extends cc.Component {
  @property(GameStage)
  private gameStage: GameStage = null
  @property(cc.Label)
  private scoreLabel = null
  @property(GameOver)
  private gameOver: GameOver = null

  private score = 0

  onLoad() {
    if (cc.sys.isMobile) {
      cc.find('Canvas').getComponent(cc.Canvas).fitHeight = false
      cc.find('Canvas').getComponent(cc.Canvas).fitWidth = true
    }
  }

  start() {
    this.addListeners()
    this.startGame()
  }

  startGame() {
    this.gameStage.reset()
    this.gameStage.enableTouch()
  }

  onPlayerJumpSuccess(event: PlayerJumpSuccessEvent) {
    let score = event.score
    this.addSocre(score)
    this.gameStage.updateStage(() => {
      this.gameStage.addBlock()
    })
  }

  addSocre(s) {
    this.score += s
    this.scoreLabel.string = I18n.t('game.score', { defaultValue: 'Score: ' }) + this.score
  }

  onOver() {
    this.gameStage.disableTouch()
    setTimeout(() => {
      this.gameOver.show(this.score, this.onRestart, this)
    }, 500)
  }

  onRestart() {
    this.gameOver.hide()
    cc.director.loadScene('game')
  }

  addListeners() {
    G.on(PlayerDieEvent.NAME, this.onOver, this)
    G.on(PlayerJumpSuccessEvent.NAME, this.onPlayerJumpSuccess, this)
  }

  removeListeners() {
    G.off(PlayerDieEvent.NAME, this.onOver, this)
    G.off(PlayerJumpSuccessEvent.NAME, this.onPlayerJumpSuccess, this)
  }

  backToHome() {
    cc.director.loadScene('menu')
  }
}
