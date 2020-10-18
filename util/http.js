import {sha1} from './sha1'

const apiBase = 'https://api.huishoubao.com'
const timeout = 10000

// 接口上报
const logreport = function (config) {
  const success = config.success
  const fail = config.fail
  config.success = res => {
    // console.log('http2:logreport -->'+config.url)
    success(res)
    config.endTime = +new Date()
    let requestTime = config.endTime - config.startTime
    if (requestTime > timeout) {
      res.data._errStr = 'oHo，网络出小差了~'
      res.data._errCode = '1'
      res.data._data = ''
      requestTime = timeout
    }
    const reportUri = 'https://logreport.huishoubao.com/hjxapps/?1='
    config.affix = parseInt(config.endTime/1000)
    config.affix += '=hsbXyAlipayApp==HsbApiAgent=119.29.42.78='
    let errCode = res.data._errCode
    if (+res.data._bizErrCode!==0&&+res.data._errCode!==0) {
      errCode = 0
    }
    config.affix += `${config.routePath}=${errCode}=${requestTime}`
    config.affix += `=${res.data._bizErrCode||0}`
    // 可用性上报
    if (my.getRunScene) {
      my.getRunScene({
        success (result) {
          if (result.envVersion == 'release') {
            if(my.request){
              my.request({ url: reportUri + config.affix })
            }else{
              my.httpRequest({ url: reportUri + config.affix })
            }
          } else {
            console.log(config.affix)
          }
        },
        fail (err) {
          if(my.request){
            my.request({ url: reportUri + config.affix })
          }else{
            my.httpRequest({ url: reportUri + config.affix })
          }
        }
      })
    } else {
      if(my.request){
        my.request({ url: reportUri + config.affix })
      }else{
        my.httpRequest({ url: reportUri + config.affix })
      }
    }
  }
  config.fail = res => {
    fail(res)
    let noReportApi = ['/api/AlipayMini/saveFormId']
    if (noReportApi.some(item => item === config.routePath)) return
    config.endTime = +new Date()
    let requestTime = config.endTime - config.startTime
    if (requestTime > timeout) return
    const reportUri = 'https://logreport.huishoubao.com/hjxapps/?1='
    config.affix = parseInt(config.endTime/1000)
    config.affix += '=hsbXyAlipayApp==HsbApiAgent=119.29.42.78='
    config.affix += `${config.routePath}=${res.status}_${res.error}=${requestTime}`
    // 可用性上报
    if (my.getRunScene) { 
      my.getRunScene({
        success (result) {
          if (result.envVersion == 'release') {
            if(my.request){
              my.request({ url: reportUri + config.affix })
            }else{
              my.httpRequest({ url: reportUri + config.affix })
            }
          } else {
            console.log(config.affix)
          }
        },
        fail (err) {
          if(my.request){
            my.request({ url: reportUri + config.affix })
          }else{
            my.httpRequest({ url: reportUri + config.affix })
          }
        }
      })
    } else {
      if(my.request){
        my.request({ url: reportUri + config.affix })
      }else{
        my.httpRequest({ url: reportUri + config.affix })
      }
    }
  }
}

// 数字签名
const sign = function (params) {
  let objKeys = Object.keys(params)
  objKeys = objKeys.filter(item => item !== 'sign' && params[item] !== undefined && params[item] !== null)
  objKeys = objKeys.sort()
  let sign = objKeys.reduce((a,b) => a + b + params[b], '')
  sign += 'b7cab12b2b81385dd2cccb8ce67e4998'
  sign = sha1(sign)
  return sign
}

// token报错200000
const tokenErrHandle = function (config) {
  const success = config.success
  config.success = async function(res) {
    // console.log('http3:tokenErrHandle -->'+config.url)
    if (res.data && +res.data._errCode === 200000) {
      my.removeStorageSync({
        key: 'token',
      })
      my.removeStorageSync({
        key: 'tokenKeepTime',
      })
      my.getAuthCode({
        scopes: 'auth_base',
        success(res) {
          if(res.authCode){
            let data = {
              pid: config.data.pid,
              platform: config.data.platform,
              version: config.data.version,
              timestamp: +new Date(),
              path: config.routePath,
              code: res.authCode
            }
            data.sign = sign(data)
            my.request({
              url: apiBase+'/v5/XianYuZfbMini/authBaseLogin',
              data,
              success (ret) {
                if (ret.data && +ret.data._errCode===0) {
                  my.setStorageSync({
                    key: 'token',
                    data: ret.data._data && ret.data._data.token
                  })
                  my.setStorageSync({
                    key: 'tokenKeepTime',
                    data: +new Date()
                  })
                  // 继续请求接口
                  if (ret.data._data && ret.data._data.token) {
                    // 重置success，避免嵌套
                    config.success = success
                    http(config)
                  }
                } else {
                  my.alert({
                    content: '当前用户登录失败，请稍后重试!'
                  })
                }
              },
              fail (err) {
                my.alert({
                  content: '当前用户登录失败，请稍后重试~'
                })
              }
            })
          } else {
            my.alert({
              content: '当前用户授权失败，请稍后重试!'
            })
          }
        },
        fail (err) {
          my.alert({
            content: '当前用户授权失败，请稍后重试~'
          })
        }
      })
    } else {
      success(res)
    }
  }
}

function http(config) {
  // console.log('http1:http -->'+config.url)
  try {
    let app = getApp()
    let pid = app.globalData.pid
    let platform = app.globalData.platform
    let version = app.globalData.version

    let token = my.getStorageSync({key: 'token'}).data || ''
    let timestamp = +new Date()
    //公共参数
    let args = {
      version,
      pid,
      platform,
      token,
      timestamp
    }
    //合并请求参数
    config.data = Object.assign({}, config.data, args)
    config.data.sign = sign(config.data)
    config.routePath = config.url.split('.com')[1].split('?')[0]
    config.startTime = +new Date()
    
    // 先处理接口上报，后处理20000报错
    tokenErrHandle(config)
    if (config.url.indexOf(apiBase) !== -1) {
      config.timeout = timeout
      logreport(config)
    }

    if(my.request){
      config.headers = Object.assign({...config.headers}, {'content-type':'application/x-www-form-urlencoded'})
      // config.headers = Object.assign({...config.headers}, {'group-header':'9'})
      my.request(config)
    } else {
      my.alert({
        content: '请升级您的sdk版本！'
      })
    }
  } catch (error) {
    console.log(error)
  }
}
export default function (url, data, method='POST') {
  return new Promise((resolve, reject) => {
    http({
      url,
      data,
      method,
      success (res) {
        // console.log('http4:function -->'+url)
        resolve(res.data)
      },
      fail (err) {
        reject(err)
      }
    })
  })
}

