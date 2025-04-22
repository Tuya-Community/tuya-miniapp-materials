App({
  onLaunch() {
    ty.onAppEvent((res) => {
      if (res.key === 'nativeDisabled') {
        ty.nativeDisabled(true)
      } else if (res.key === 'nativeEnabled') {
        ty.nativeDisabled(false)
        ty.ToastInfo('nativeEnabled')
      }
    })
  },
})
