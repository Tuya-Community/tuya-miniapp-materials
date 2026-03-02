Page({
  data: {
    height: '100vh',
    textareaValue1: new Array(20).fill(I18n.t('test')).join(' '),
    textareaValue2: new Array(200).fill(I18n.t('test')).join(' '),
    autosize1: { maxHeight: '436rpx', minHeight: '80rpx' },
    autosize2: { maxHeight: '436rpx', minHeight: '80rpx' },
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
  },
})
