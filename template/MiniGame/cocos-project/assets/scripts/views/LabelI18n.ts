// Learn TypeScript:
//  - docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:

//  - docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
import { I18n } from '@ray-js/mini-game-sdk'

const { ccclass, property } = cc._decorator

@ccclass
export default class LabelI18n extends cc.Component {
  @property({ tooltip: 'The key to retrieve the language-specific text.' })
  languageKey: string = ''

  @property(cc.Label)
  label: cc.Label | null = null

  // whether to use the default text when the translation is not found
  private _lableTextAsDefault = true

  onLoad() {
    if (!this.label) {
      this.label = this.getComponent(cc.Label)
    }
    this.updateText()
  }

  updateText() {
    // @ts-ignore next-line
    let text: string = I18n.t(this.languageKey)

    console.log('LabelI18n', this.languageKey, text)

    if (this._lableTextAsDefault && (!text || text === this.languageKey)) {
      text = ''
    }
    if (this.label) {
      this.label.string = text || this.label.string
    }
  }
}
