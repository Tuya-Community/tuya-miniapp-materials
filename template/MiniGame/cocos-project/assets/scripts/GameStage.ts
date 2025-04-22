import { G } from './G'
import { GamePlayer } from './GamePlayer'
import { GameBlock } from './GameBlock'
import { PlayerDieEvent } from './events/PlayerDieEvent'
import { PlayerJumpSuccessEvent } from './events/PlayerJumpSuccessEvent'

const { ccclass, property } = cc._decorator

@ccclass
export class GameStage extends cc.Component {
  @property(GamePlayer)
  private player: GamePlayer = null

  @property(cc.Vec3)
  public leftOrigin: cc.Vec3 = cc.v3()
  @property(cc.Vec3)
  public rightOrigin: cc.Vec3 = cc.v3()
  @property(cc.Node)
  public blockLayer: cc.Node = null
  @property(cc.Float)
  public arrayRatio: number = 0.556047197640118

  @property([cc.Prefab])
  private blockList: Array<cc.Prefab> = []

  private currBlock: GameBlock = null
  private nextBlock: GameBlock = null

  public reset() {
    this.blockLayer.removeAllChildren()

    // 添加第一个方块
    let blockNode = cc.instantiate(this.blockList[0])
    this.blockLayer.addChild(blockNode)
    let block = blockNode.getComponent(GameBlock)
    blockNode.setPosition(this.blockLayer.parent.convertToNodeSpaceAR(this.leftOrigin))

    this.currBlock = block
    this.nextBlock = block
    this.player.node.setPosition(
      this.node.parent.convertToNodeSpaceAR(this.currBlock.getCenterPosition())
    )

    this.addBlock()
  }

  public enableTouch() {
    cc.find('Canvas').on(cc.Node.EventType.TOUCH_START, this.onReadyJump, this)
    cc.find('Canvas').on(cc.Node.EventType.TOUCH_END, this.onJump, this)
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
  }

  public disableTouch() {
    cc.find('Canvas').targetOff(this)
    cc.systemEvent.targetOff(this)
  }

  private onKeyDown(event) {
    if (event.keyCode === cc.macro.KEY.space) {
      this.onReadyJump()
    }
  }

  private onKeyUp(event) {
    if (event.keyCode === cc.macro.KEY.space) {
      this.onJump()
    }
  }

  private onReadyJump() {
    this.player.readyJump()
  }

  private onJump() {
    let jumpDistance = this.player.jumpDistance
    let dir = this.player.direction
    let targetPos = cc.v2(
      this.player.node.x + jumpDistance * dir,
      this.player.node.y + jumpDistance * this.arrayRatio
    )
    let targetWorldPos = this.player.node.parent.convertToWorldSpaceAR(targetPos)
    let formatPos = this.nextBlock.getAnchorLocation(targetWorldPos, dir)
    let formatPosCurr = this.currBlock.getAnchorLocation(targetWorldPos, dir)

    if (formatPos !== null) {
      this.player.jumpTo({ worldPos: formatPos, sameBlock: false }, () => {
        this.currBlock = this.nextBlock
        this.currBlock.playScoreAnim()
        G.dispatchEvent(new PlayerJumpSuccessEvent(this.currBlock.score))
      })
    }
    // else if (formatPosCurr !== null) {
    //   this.player.jumpTo({ worldPos: formatPosCurr, sameBlock: false }, () => {})
    // }
    else {
      this.player.jumpTo({ worldPos: targetWorldPos, sameBlock: false }, () => {
        G.dispatchEvent(new PlayerDieEvent())
      })
    }
  }

  public addBlock() {
    let n = Math.floor(Math.random() * this.blockList.length)
    let blockNode = cc.instantiate(this.blockList[n])
    this.blockLayer.addChild(blockNode)
    let block = blockNode.getComponent(GameBlock)
    let scale = block.minScale + Math.random() * (block.maxScale - block.minScale)
    let distance = block.minDistance + Math.random() * (block.maxDistance - block.minDistance)
    blockNode.scale = scale
    if (this.player.direction > 0) {
      blockNode.x = this.currBlock.node.x + distance
      blockNode.y = this.currBlock.node.y + distance * this.arrayRatio
    } else {
      blockNode.x = this.currBlock.node.x - distance
      blockNode.y = this.currBlock.node.y + distance * this.arrayRatio
    }
    this.currBlock = this.nextBlock
    this.nextBlock = block
    return block
  }

  public removeBlock() {}

  public checkOver(): boolean {
    let dis = this.player.node.position.sub(this.currBlock.node.position).mag()
    return dis > (this.currBlock.node.width / 2) * this.currBlock.node.scale
  }

  public updateStage(cb: Function, cbTarget?: any) {
    let moveVector
    let playerWorldPos = this.player.node.parent.convertToWorldSpaceAR(this.player.node.position)
    if (this.player.direction > 0) {
      moveVector = playerWorldPos.sub(this.leftOrigin)
    } else {
      moveVector = playerWorldPos.sub(this.rightOrigin)
    }
    let finished = cc.callFunc(cb, cbTarget)
    let tmp = this.node.position.sub(moveVector)
    let action = cc.sequence(cc.moveTo(0.5, cc.v2(tmp.x, tmp.y)), finished)
    this.node.runAction(action)
  }
}
