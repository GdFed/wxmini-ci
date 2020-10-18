let codeLoadingStatus = false
export default {
  getLocation() {
    return new Promise((resolve, reject) => {
      my.getLocation({
        type: 1,
        success(res) {
          resolve(res)
          my.setStorageSync({key:'location', data: res})
        },
        fail(err) {
          my.removeStorageSync({key:'location'})
          resolve(err)
        }
      })
    })
  },
  getAuthCode(scopes = 'auth_base') {
    if (codeLoadingStatus) return false
    codeLoadingStatus = true
    return new Promise((resolve, reject) => {
      my.getAuthCode({
        scopes,
        success(res = {}) {
          codeLoadingStatus = false
          resolve(res.authCode)
        },
        fail(err) {
          codeLoadingStatus = false
          resolve()
        }
      })
    })
  },
}