Page({
  data: {
    focus: false,
    height: '100vh',
    inputValue:
      I18n.t('label_name') + I18n.t('label_name') + I18n.t('label_name'),
  },
  onBack() {
    ty.navigateBack()
  },
  onInputFocus() {
    const { height } = this.data
    if (height === '100vh') {
      const sys = ty.getSystemInfoSync()
      const useable = sys.useableWindowHeight
      if (useable) this.setData({ height: useable + 'px' })
    }
    this.setData({ focus: true })
  },
  onInputBlur() {
    this.setData({ focus: false })
  },
  onTouchMove() {
    if (this.data.focus) this.setData({ focus: false })
  },
})
