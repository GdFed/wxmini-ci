import {
    prizeCashIndex,
    prizeCashGetTaskInfo,
    prizeCashGetMyPrizeList,
    prizeCashTaskAction,
    prizeCashGetPrizeList,
    prizeCashDrawPrize
} from '/config/api'
import { checkLoginStatus } from '/config/login'
import {debounce} from '/util/utils'
let ctx, token, app = getApp();
const actTag = 'PrizeCash20200918'
$global.GioPage({
    data: {
        limitTimeSale: 'https://fleamarket.taobao.com/wow/z/act/default/gumajiajiaquana-copy-copy?spm=a1zfx5.my_create_page.0.0.62f92251R4tRA9&wh_biz=tm',
        highPriceEvalUrl: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22:%22%E6%89%8B%E6%9C%BA%22,%22p%22:%22catId4:126862528%22,%22deep%22:2%7D,%7B%22title%22:%22%E5%B9%B3%E6%9D%BF%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126860614%22,%22deep%22:2%7D,%7B%22title%22:%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126854525%22,%22deep%22:2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5',
        products: [
            {
                productName: 'iPhone 6',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=5'
            },
            {
                productName: 'iPhone 7 Plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10284'
            },
            {
                productName: 'iPhone 7',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=4'
            },
            {
                productName: 'iPhone X',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10287'
            },
            {
                productName: 'iPhone 6s',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10282'
            },
            {
                productName: 'iPhone 6s Plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10275'
            },
        ],
        brands: [
            {
                brandName: '苹果',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%2C%22id%22%3A%2230111%22%2C%22type%22%3A%22keyProp1Id%22%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5'
            },
            {
                brandName: '小米',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E6%89%8B%E6%9C%BA%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%2C%22id%22%3A%22125473192%22%2C%22type%22%3A%22keyProp1Id%22%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5'
            },
            {
                brandName: '华为',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E6%89%8B%E6%9C%BA%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%2C%22id%22%3A%2211813%22%2C%22type%22%3A%22keyProp1Id%22%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5'
            },
            {
                brandName: 'OPPO',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22OPPO%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%2C%22id%22%3A%2228247%22%2C%22type%22%3A%22keyProp1Id%22%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5'
            },
            {
                brandName: 'vivo',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22VIVO%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%2C%22id%22%3A%2291621%22%2C%22type%22%3A%22keyProp1Id%22%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5'
            },
            {
                brandName: '荣耀',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E8%8D%A3%E8%80%80%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%2C%22id%22%3A%22590022244%22%2C%22type%22%3A%22keyProp1Id%22%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5'
            },
        ],
        systemInfo: {},
        prizeVisible: false,
        typeIndex: 1,
        taskList: [],
        prizeList: [],
        prizeHistory: [],
        prizeInfo: {},
        totalNum: 0,
        remainNum: 0,
        scrollTop: 0,
        isCollected: false,
    },
    onDone () {
        ctx.setData({
            prizeVisible: true,
        })
    },
    onRstClose () {
        if (!ctx.data.prizeVisible) return
        ctx.setData({
            prizeVisible: false
        })
    },
    async onStart () {
        if (+ctx.data.remainNum < 1) {
            my.alert({
                content: '快去做任务获取奖励次数吧~',
                success () {
                    ctx.setData({
                        typeIndex: 1
                    })
                    my.createSelectorQuery().select(`.data-list`).boundingClientRect().exec(ret => {
                        my.pageScrollTo({
                            scrollTop: ctx.data.scrollTop + ret[0].top
                        })
                    })
                }
            })
            return
        }
        try {
            my.showLoading({content: '拆奖中...'})
            await ctx.realToken()
            let res = await prizeCashDrawPrize({token, actTag})
            my.hideLoading()
            if (+res._errCode===0) {
                let data = res._data
                data.imgUrl = data.prizeType == 2 ? `https://s1.huishoubao.com/static/m/common/pop_cash_null.png` : `https://s1.huishoubao.com/static/m/common/pop_cash_${data.price}.png`
                ctx.setData({
                    prizeInfo: data,
                    remainNum: data.remainNum || 0
                })
                ctx.onDone()
                ctx.getMyPrizeList(token)
            } else {
                my.alert({
                    content: res._errStr || '系统繁忙~',
                    buttonText: '我知道了'
                });
            }
        } catch (error) {
            my.hideLoading()
        }
    },
    onShareAppMessage(e) {
        return {
            path: 'activity/pages/superCoupon/index?fromId='+ctx.data.id,
        };
    },
    async onLoad({fromId}) {
        ctx = this;
        ctx.firstStatus = true
        ctx.setData({
            systemInfo: my.getSystemInfoSync(),
            fromId,
        })
        ctx.onStart = debounce(ctx.onStart, 600, true)
        await ctx.realToken()
        await ctx.prizeCashIndex(token)
        await ctx.prizeCashGetPrizeList(token)
        await ctx.getTaskInfo(token)
        await ctx.getMyPrizeList(token)
    },
    async onShow () {
        if (ctx.firstStatus) return
        await ctx.realToken()
        await ctx.prizeCashIndex(token)
        await ctx.getTaskInfo(token)
    },
    onHide () {
        ctx.firstStatus = false
    },
    async prizeCashIndex (token) {
        let res = await prizeCashIndex({token, actTag, fromId: ctx.data.fromId||''}).catch(console.log)
        if (+res._errCode===0){
            let data = res._data
            ctx.setData({
                id: data.id,
                totalNum: data.totalNum || 0,
                remainNum: data.remainNum || 0
            })
        }
    },
    async getTaskInfo (token) {
        let res = await prizeCashGetTaskInfo({token, actTag}).catch(console.log)
        if (+res._errCode===0){
            let data = res._data || []
            data.forEach((item,index)=>{
                if (+item.type === 1 && +item.isComplete === 0) {
                    ctx.getCollected(() => {
                        if (ctx.data.isCollected) {
                            ctx.taskAction(1)
                        } 
                    })
                }
            })
            ctx.setData({
                taskList: data
            })
        }
    },
    async prizeCashGetPrizeList (token) {
        let res = await prizeCashGetPrizeList({token, actTag})
        if (+res._errCode===0){
            let data = res._data
            if (!(data instanceof Array)) {
                data = []
            }
            ctx.setData({
                prizeHistory: data
            })
        }
    },
    async getMyPrizeList (token) {
        let res = await prizeCashGetMyPrizeList({token, actTag})
        if (+res._errCode===0){
            let data = res._data
            if (data instanceof Array) {
                data.forEach(item => {
                    item.price = (item.price/100||0).toFixed(2)
                })
            } else {
                data = []
            }
            ctx.setData({
                prizeList: data
            })
        }
    },
    getTask (e) {
        let index = e.target.dataset.index
        let task = ctx.data.taskList[index]
        switch(+task.type){
            case 1:
                if (+task.isComplete !== 1) {
                    my.navigateToMiniProgram({
                        appId: '2018122562686742',
                        path: 'pages/index/index?originAppId=2021001171616271&newUserTemplate=KP20201015000002730881'
                    });
                }
                break;
            case 3:
                my.showSharePanel();
                break;
        }
    },
    getCollected (fn) {
        ctx.only = 0
        if (my.isCollected) {
            my.isCollected({
                success: (res) => {
                    ctx.setData({isCollected: res.isCollected})
                    ctx.only += 1
                    if (+ctx.only === 1) {
                        typeof fn === 'function' && fn()
                    }
                }
            })
        }
        if (my.isFavorite) {
            my.isFavorite({
                success: (res) => {
                    ctx.setData({isCollected: res.isFavorite})
                    ctx.only += 1
                    if (+ctx.only === 1) {
                        typeof fn === 'function' && fn()
                    }
                }
            })
        }
    },
    async taskAction (type, fn) {
        await ctx.realToken()
        let res = await prizeCashTaskAction({token, actTag, type})
        if (+res._errCode===0){
            ctx.getTaskInfo(token)
            ctx.setData({
                remainNum: res._data.remainNum || 0,
                totalNum: res._data.remainNum || 0,
            })
            typeof fn === 'function' && fn(token)
        } else {
            my.alert({
                content: res._errStr || '网络不佳，请稍后再试~',
                buttonText: '我知道了'});
        }
    },
    async realToken (flag) {
        token = my.getStorageSync({key: 'token'}).data
        if(!token || flag){
            await checkLoginStatus()
            token = my.getStorageSync({key: 'token'}).data
        }
    },
    gotoList () {
        my.navigateTo({ url: `/activity/pages/superCoupon/list` });
    },
    gotoEval (e) {
        app.globalData.navigateToXy({url: e.target.dataset.url});
    },
    gotoIndex(e){
        my.navigateTo({ url: `/pages/index/index` });
    },
    choiceType(e){
        let typeIndex = e.currentTarget.dataset.type
        if (+typeIndex === +ctx.data.typeIndex) return
        ctx.setData({
            typeIndex
        })
    },
})