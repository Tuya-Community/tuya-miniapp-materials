Page({
  data: {
    showPopup: true,
    cardList: [1, 2, 3, 4, 5, 6, 7],
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
})
