Page({
  jump(e) {
    const url = e.currentTarget.dataset.url
    if (url) ty.navigateTo({ url })
  },
})
