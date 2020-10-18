import {getCityList,getStoreList} from '/config/api'
import { formatDistance, formatStore } from '/util/utils'
let ctx, app = getApp();

$global.GioPage({
    data: {
        choicedIndex: 0,
        cityList: [],
        storeList: [],
        storeListOver: false,
    },
    choiceCity (e) {
        ctx.setData({
            choicedIndex: e.target.dataset.index,
            pageIndex: 1,
            storeList: []
        })
        ctx.getStoreList(ctx.data.cityList[ctx.data.choicedIndex].cityId)
    },
    choicedStore (e) {
        let store = ctx.data.storeList[e.target.dataset.index]
        store.distance = formatDistance(store.distance)
        store.store = formatStore(store.store)
        my.setStorageSync({
            key: 'currentChoicedStore',
            data: store
        })
        my.navigateBack()
    },
    async getCityList () {
        if (ctx.cityLoading) return
        ctx.cityLoading = true
        const {latitude, longitude} = my.getStorageSync({key:'location'}).data||{};
        let res = await getCityList({latitude, longitude}).catch(err=>{
            ctx.cityLoading = false
        })
        ctx.cityLoading = false
        if (+res._errCode===0){
            ctx.setData({
                cityList: res._data.cityList || []
            })
            if (ctx.data.cityList.length){
                ctx.data.cityList.forEach((item, index) => {
                    if (+item.cityId === +ctx.cityId) {
                        ctx.setData({
                            choicedIndex: index
                        })
                    }
                })
                ctx.getStoreList(ctx.data.cityList[ctx.data.choicedIndex].cityId)
            }
        }
    },
    async getStoreList (areaId) {
        if (ctx.storeLoading) return
        ctx.storeLoading = true
        my.showLoading()
        const {latitude, longitude} = my.getStorageSync({key:'location'}).data||{};
        let res = await getStoreList({latitude, longitude, areaId, pageSize: ctx.data.pageSize,pageIndex: ctx.data.pageIndex}).catch(err=>{
            my.hideLoading()
            ctx.storeLoading = false
        })
        my.hideLoading()
        ctx.storeLoading = false
        if (+res._errCode===0){
            ctx.setData({
                storeList: ctx.data.storeList.concat(res._data.storeList || []),
                storeListOver: ctx.data.pageIndex >= res._data.pageInfo.totalPage
            })
        }
    },
    onReachBottom (){
        if(ctx.data.storeListOver) return
        ctx.setData({
            pageIndex: ctx.data.pageIndex + 1
        })
        if(ctx.data.cityList.length) {
            ctx.getStoreList(ctx.data.cityList[ctx.data.choicedIndex].cityId)
        }
    },
    onLoad({cityId}) {
        ctx = this
        ctx.cityId = cityId
        ctx.setData({
            choicedIndex: 0,
            pageIndex: 1
        })
        ctx.getCityList()
    },
    onShow(){
        
    },
})
