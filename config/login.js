import { getAuthCode } from './sdk'
import { authBaseLogin } from './api'

async function login (scopes) {
  let code = await getAuthCode(scopes)
  if (code) {
      let res = await authBaseLogin({code}).catch(console.log)
      if (+res._errCode===0){
        my.setStorageSync({
          key: 'token',
          data: res._data.token
        })
        my.setStorageSync({
          key: 'tokenKeepTime',
          data: +new Date()
        })
      }
  }
}
async function checkLoginStatus(scopes = 'auth_base') {
  let tokenKeepTime = my.getStorageSync({ key: 'tokenKeepTime' }).data
  if (tokenKeepTime && +new Date() > tokenKeepTime + 15 * 24 * 60 * 60 * 1000) {
    my.removeStorageSync({key: 'token'})
  }
  let token = my.getStorageSync({ key: 'token' }).data
  if (!token) {
    await login(scopes)
  }
}
export default {
  checkLoginStatus,
  login
}