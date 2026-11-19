Page({
  data: {
    show: false,
    duration: 300,
    position: 'right',
    round: false,
    overlay: true,
    overlayStyle: '',
  },
  onLoad: function () {},
  onShow() {},

  popup(e) {
    const position = e.currentTarget.dataset.position
    this.setData({ position, show: true })
  },

  changeRound() {
    this.setData({ round: !this.data.round })
  },

  changeOverlay() {
    this.setData({ overlay: !this.data.overlay, show: true })
  },

  changeOverlayStyle(e) {
    let overlayStyle = ''
    const type = e.currentTarget.dataset.type
    switch (type) {
      case 'black':
        overlayStyle = 'background-color: rgba(0, 0, 0, 0.7)'
        break
      case 'white':
        overlayStyle = 'background-color: rgba(255, 255, 255, 0.7)'
        break
      case 'blur':
        overlayStyle = 'background-color: rgba(0, 0, 0, 0.7); filter: blur(4px);'
    }
    this.setData({ overlayStyle, show: true })
  },

  exit() {
    this.setData({ show: false })
    // wx.navigateBack()
  },

  onBeforeEnter(res) {
    console.log(res)
  },
  onEnter(res) {
    console.log(res)
  },
  onAfterEnter(res) {
    console.log(res)
  },
  onBeforeLeave(res) {
    console.log(res)
  },
  onLeave(res) {
    console.log(res)
  },
  onAfterLeave(res) {
    console.log(res)
  },

  onClickOverlay(res) {
    this.setData({
      show: false,
    })
  },
})
