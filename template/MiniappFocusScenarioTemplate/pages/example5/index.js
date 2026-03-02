const DialogModule = require('@tuya-miniapp/smart-ui/lib/dialog/dialog')
const Dialog = DialogModule.default || DialogModule

Page({
  data: {},
  onLoad() {
    this.showDialog()
  },
  onBack() {
    ty.navigateBack()
  },
  showDialog() {
    Dialog.input({
      title: I18n.t('dialog_title'),
      value: '123',
      placeholder: I18n.t('placeholder_enter'),
      selector: '#custom',
      cancelButtonText: I18n.t('cancel'),
      confirmButtonText: I18n.t('confirm'),
    })
      .then((res) => {
        console.log(res, '--res')
      })
      .catch((err) => {
        console.log(err, '--err')
      })
  },
  onShowDialog() {
    this.showDialog()
  },
})
