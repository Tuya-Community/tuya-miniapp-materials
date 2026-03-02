Page({
  data: {
    showPopup: true,
    focus: true,
    height: '100vh',
    buttonContainerTop: 'calc(100vh - 192rpx - 50px)',
    inputValue:
      I18n.t('label_name') + I18n.t('label_name') + I18n.t('label_name'),
  },
  onLoad() {
    if (ty.hideMenuButton) ty.hideMenuButton()
  },
  onUnload() {
    if (ty.showMenuButton) ty.showMenuButton()
  },
  onBack() {
    ty.navigateBack()
  },
  onShowPopup() {
    this.setData({ showPopup: true })
  },
  onClosePopup() {
    this.setData({ showPopup: false })
  },
  onInputFocus() {
    let { height } = this.data
    if (height === '100vh') {
      const sys = ty.getSystemInfoSync()
      const useable = sys.useableWindowHeight
      if (useable) {
        height = useable + 'px'
        this.setData({
          height,
          focus: true,
          buttonContainerTop: 'calc(' + height + ' - 192rpx - 50px)',
        })
      } else {
        this.setData({ focus: true })
      }
    } else {
      this.setData({ focus: true })
    }
  },
  onInputBlur() {
    this.setData({ focus: false })
  },
  onPopupTouchMove() {
    if (this.data.focus) this.setData({ focus: false })
  },
})
