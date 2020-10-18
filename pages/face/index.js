import {getStoreInfo}  from '/config/api'
import { checkLoginStatus } from '/config/login'
import { formatDistance, formatStore } from '/util/utils'
let ctx, app = getApp()

$global.GioPage({
    data: {
        iphoneX: my.getStorageSync({key: 'iphoneX'}).data || app.globalData.iphoneX,
        storeInfo: {},
    },
    moreStores () {
        my.navigateTo({url: '/pages/face/stores/index?cityId='+ctx.data.storeInfo.cityId})
    },
    gotoEval () {
        app.globalData.navigateToXy({
            url: 'https://market.m.taobao.com/app/idleFish-F2e/recycle/catPick?spm=a211k7.210270.1118298.1.25f34ccdD2xrci&wh_weex=true&catInfo=%5B%7B%22title%22:%22%E6%89%8B%E6%9C%BA%22,%22p%22:%22catId4:126862528%22,%22deep%22:2%7D,%7B%22title%22:%22%E5%B9%B3%E6%9D%BF%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126860614%22,%22deep%22:2%7D,%7B%22title%22:%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126854525%22,%22deep%22:2%7D%5D&sceneType=3C_NEW&supplierId=24633185&channel=HSBexternal&subChannel=xiaozhanxcx&recycleShipType=3'
        })
    },
    callStore () {
        my.makePhoneCall({ number: ctx.data.storeInfo.tel })
    },
    onLoad({storeId}) {
        ctx = this
        ctx.storeId = storeId
        my.removeStorageSync({key: 'currentChoicedStore'})
        checkLoginStatus()
    },
    onShow(){
        let currentChoicedStore = my.getStorageSync({key: 'currentChoicedStore'}).data
        if (currentChoicedStore) {
            ctx.setData({
                storeInfo: currentChoicedStore
            })
        } else {
            ctx.getStoreInfo(ctx.storeId)
        }
    },
    async getStoreInfo (storeId) {
        let res = await getStoreInfo({storeId})
        if (+res._errCode === 0) {
            res._data.store = formatStore(res._data.store)
            res._data.distance = formatDistance(res._data.distance)
            ctx.setData({
                storeInfo: res._data
            })
        }
    },
})
