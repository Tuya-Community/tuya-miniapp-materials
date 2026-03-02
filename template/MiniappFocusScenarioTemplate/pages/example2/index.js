Page({
  data: {
    cardList: [1, 2, 3, 4, 5, 6, 7],
    inputValue:
      I18n.t('label_name') + I18n.t('label_name') + I18n.t('label_name'),
  },
  onBack() {
    ty.navigateBack()
  },
})
