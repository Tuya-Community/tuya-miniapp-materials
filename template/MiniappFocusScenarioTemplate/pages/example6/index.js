Page({
  data: {
    height: '100vh',
    activeTab: '1',
    textareaValue: new Array(110).fill(I18n.t('test')).join(' '),
  },
  onBack() {
    ty.navigateBack()
  },
  onTextareaFocus() {
    let { height } = this.data
    if (height === '100vh') {
      const sys = ty.getSystemInfoSync()
      if (sys.useableWindowHeight)
        height = sys.useableWindowHeight + 'px'
      this.setData({ height })
    }
    if (ty.enablePageScroll) {
      ty.enablePageScroll({ scrollEnable: false })
    }
  },
})
