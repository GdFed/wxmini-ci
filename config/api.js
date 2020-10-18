import httpFetch from '/util/http'
const host = 'https://api.huishoubao.com'   //正式环境

const common = `${host}/api/common/`
const xianyu = `${host}/api/xianyu/`
const AlipayMini = `${host}/api/AlipayMini/`
const XianYuZfbMini = `${host}/v5/XianYuZfbMini/`
const PrizeWheels0818 = `${host}/act/PrizeWheels0818/`;
const PrizeCash0918 = `${host}/act/PrizeCash0918/`;
export default {
  // 静态登录
  authBaseLogin (params) {
    return httpFetch(`${XianYuZfbMini}authBaseLogin`, params)
  },
  getIndexStoreInfo (params) {
    return httpFetch(`${XianYuZfbMini}getIndexStoreInfo`, params)
  },
  getHotProductList (params) {
    return httpFetch(`${XianYuZfbMini}getHotProductList`, params)
  },
  getCityList (params) {
    return httpFetch(`${xianyu}getCityList`, params)
  },
  getStoreList (params) {
    return httpFetch(`${xianyu}getStoreList`, params)
  },
  getStoreInfo (params) {
    return httpFetch(`${xianyu}getStoreInfo`, params)
  },
  getPositionBannerList (params) {
    return httpFetch(`${common}getPositionBannerList`, params)
  },
  saveFormId (params) {
    return httpFetch(`${AlipayMini}saveFormId`, params)
  },
  prizeWheelsIndex (params) {
    return httpFetch(`${PrizeWheels0818}index`, params)
  },
  prizeWheelsGetTaskInfo (params) {
    return httpFetch(`${PrizeWheels0818}getTaskInfo`, params)
  },
  prizeWheelsGetMyPrizeList (params) {
    return httpFetch(`${PrizeWheels0818}getMyPrizeList`, params)
  },
  prizeWheelsTaskAction (params) {
    return httpFetch(`${PrizeWheels0818}taskAction`, params)
  },
  prizeWheelsDrawPrize (params) {
    return httpFetch(`${PrizeWheels0818}drawPrize`, params)
  },
  prizeWheelsGetMyNumLogs (params) {
    return httpFetch(`${PrizeWheels0818}getMyNumLogs`, params)
  },
  prizeWheelsGetPrizeList (params) {
    return httpFetch(`${PrizeWheels0818}getPrizeList`, params)
  },
  prizeCashIndex(params) {
    return httpFetch(`${PrizeCash0918}index`, params)
  },
  prizeCashGetTaskInfo (params) {
    return httpFetch(`${PrizeCash0918}getTaskInfo`, params)
  },
  prizeCashGetMyPrizeList (params) {
    return httpFetch(`${PrizeCash0918}getMyPrizeList`, params)
  },
  prizeCashTaskAction (params) {
    return httpFetch(`${PrizeCash0918}taskAction`, params)
  },
  prizeCashDrawPrize (params) {
    return httpFetch(`${PrizeCash0918}drawPrize`, params)
  },
  prizeCashGetMyNumLogs (params) {
    return httpFetch(`${PrizeCash0918}getMyNumLogs`, params)
  },
  prizeCashGetPrizeList (params) {
    return httpFetch(`${PrizeCash0918}getPrizeList`, params)
  },
}