import { checkLoginStatus } from '/config/login'
if (!my.canIUse('plugin') && !my.isIDE) {
  my.ap && my.ap.updateAlipayClient && my.ap.updateAlipayClient()
}

const version = '0.0.17'
var gio = require('/util/gio-alip.js').default;
// version 是你的小程序的版本号
gio('init', 'af08a7a937f6a3a4', '2021001171616271', { version });
App($global.trackApp({
  onLaunch(options) {
    const {model, isIphoneXSeries,windowHeight} = my.getSystemInfoSync()
    let  iphoneX = (model.indexOf('X')!==-1)||isIphoneXSeries||(windowHeight>800)
    this.globalData.iphoneX = iphoneX
    my.setStorageSync({key: 'iphoneX', data: iphoneX})
  },
  onShow(options) {
  },
  globalData: {
    pid: 1777,  //渠道id
    version,
    platform: 3, //平台 => 3 支付宝
    navigateToXy ({url, backParam = ''}) {
      my.navigateToMiniProgram({
        appId: '2018091061255978',   // 闲鱼信用回收的小程序appid
        path: 'pages/webview-redirect/webview-redirect',  // 为了解决不返回信用回收小程序首页的问题
        extraData: {
          flag: true,   // 标识外部小程序跳转
          url, // 真实对应原来跳转不同品类或者单品跳闲鱼的h5地址，确定能访问
          outId: '2021001171616271',  // 对应己方小程序的appid
          backParam,  // 在闲鱼信用回收小程序里如果点返回希望返回第三方小程序带的参数，比如第三方希望跳到指定的页面， 那么就需要第三方小程序自己根据这个参数实现对应的页面跳转，因为闲鱼方调用的是my.navigateBackMiniProgram来实现返回
        },
        complete (res) {
          console.log(res)
        }
      })
    },
    navigate (link) {
      let urlArr = link.split('?')
      if (urlArr[0] === 'othermini') {
        let url = link.replace('othermini?', '')
        let obj = {}
        let objArr = url.split('&')
        for (let i = 0; i < objArr.length; i++) {
          let param = objArr[i].split('=')
          obj[param[0]] = param[1]
        }
        my.navigateToMiniProgram({
          appId: obj.appid,
          path: decodeURIComponent(obj.path)
        })
      } else if (urlArr[0] === 'schema') {
        let url = link.replace('schema?', '')
        let obj = {}
        let objArr = url.split('&')
        for (let i = 0; i < objArr.length; i++) {
          let param = objArr[i].split('=')
          obj[param[0]] = param[1]
        }
        my.ap.navigateToAlipayPage({
          path: decodeURIComponent(obj.path)
        });
      }else if (urlArr[0] === 'xyMini') {
        let url = link.replace('xyMini?', '')
        this.navigateToXy({url})
      } else {
        my.navigateTo({
          url: link
        })
      }
    },
    async realToken () {
      let token = my.getStorageSync({key: 'token'}).data
      if(!token){
          await checkLoginStatus()
          token = my.getStorageSync({key: 'token'}).data
      }
      return token
    },
  }
}))

