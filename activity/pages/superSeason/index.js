import {
    prizeWheelsIndex,
    prizeWheelsGetTaskInfo,
    prizeWheelsGetMyPrizeList,
    prizeWheelsTaskAction,
    prizeWheelsGetPrizeList,
    prizeWheelsDrawPrize
} from '/config/api'
import { checkLoginStatus } from '/config/login'
import {debounce} from '/util/utils'
let ctx, token, app = getApp();
const actTag = 'PrizeWheels20200818'
$global.GioPage({
    data: {
        onlyProducts: [
            {
                productName: 'iPhone 8 plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10278'
            },
            {
                productName: 'iPhone 8',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10285'
            },
            {
                productName: 'iPhone XS Max',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=3360891'
            },
        ],
        products: [
            {
                productName: 'iPhone 7 Plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10284'
            },
            {
                productName: 'iPhone X',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10287'
            },
            {
                productName: 'iPhone 6',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=5'
            },
            {
                productName: 'iPhone 7',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=4'
            },
            {
                productName: 'iPhone 6s Plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10275'
            },
            {
                productName: 'iPhone 6s',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10282'
            },
            {
                productName: 'iPhone XR',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=3360892'
            },
            {
                productName: 'iPhone 6 Plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10283'
            },
            {
                productName: 'iPhone 11',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=3497471'
            },
            {
                productName: '小米 8',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=3361126'
            },
            {
                productName: 'iPhone 11 Pro Max',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=3497473'
            },
            {
                productName: '小米 6',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10214'
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
        classes: [
            {
                className: '手机',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E6%89%8B%E6%9C%BA%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5'
            },
            {
                className: '平板',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E5%B9%B3%E6%9D%BF%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126860614%22%2C%22deep%22%3A2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5'
            },
            {
                className: '笔记本',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126854525%22%2C%22deep%22%3A2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5'
            },
        ],
        highPriceEvalUrl: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22:%22%E6%89%8B%E6%9C%BA%22,%22p%22:%22catId4:126862528%22,%22deep%22:2%7D,%7B%22title%22:%22%E5%B9%B3%E6%9D%BF%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126860614%22,%22deep%22:2%7D,%7B%22title%22:%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126854525%22,%22deep%22:2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=xinyonggift',
        systemInfo: {},
        ruleVisible: false,
        prizeVisible: false,
        typeIndex: 1,
        taskList: [],
        prizeList: [],
        prizeHistory: [],
        prizeInfo: {},
        totalNum: 0,
        remainNum: 0,
        days: [],
        scrollTop: 0,
        firstStatus: true,
        isCollected: false,
        wheelInfo: {
            bgImg: 'https://s1.huishoubao.com/static/m/common/superSeason_bg_inner.png',
            btnImg: 'https://s1.huishoubao.com/static/m/common/superSeason_btn.png',
            prizeList: [],
            prizeIndex: -1,
            times: 0,
            rotateInit: 0,
            wheelStyle: `transform:translate(-50%,-50%) rotate(0deg);transition: all 1s;`
        },
    },
    onDone () {
        ctx.setData({
            prizeVisible: true,
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
        await ctx.realToken()
        let res = await prizeWheelsDrawPrize({token, actTag})
        if (+res._errCode===0) {
            let data = res._data
            let prizeIndex = -1
            ctx.data.wheelInfo.prizeList.forEach((item,index) => {
                if (item.prizeId == data.prizeId) {
                    prizeIndex = index
                }
            })
            ctx.setData({
                'wheelInfo.prizeIndex': prizeIndex,
                'wheelInfo.times': ctx.data.wheelInfo.times++,
                prizeInfo: data,
                remainNum: data.remainNum || 0
            })
            ctx.getMyPrizeList(token)
        } else {
            my.alert({
                content: res._errStr || '系统繁忙~',
                buttonText: '我知道了'
            });
        }
    },
    onShareAppMessage(e) {
        return {
            path: 'activity/pages/superSeason/index?fromId='+ctx.data.id,
        };
    },
    async onLoad({fromId}) {
        ctx = this;
        ctx.setData({
            firstStatus: true,
            systemInfo: my.getSystemInfoSync(),
            fromId,
        })
        ctx.onStart = debounce(ctx.onStart, 600, true)
        await ctx.realToken()
        await ctx.prizeWheelsIndex(token)
        await ctx.prizeWheelsGetPrizeList(token)
        await ctx.getTaskInfo(token)
        await ctx.getMyPrizeList(token)
    },
    async onShow () {
        if (ctx.data.firstStatus) return
        await ctx.realToken()
        await ctx.prizeWheelsIndex(token)
        await ctx.getTaskInfo(token)
    },
    onHide () {
        ctx.setData({
            firstStatus: false
        })
    },
    async prizeWheelsIndex (token) {
        let res = await prizeWheelsIndex({token, actTag, fromId: ctx.data.fromId||''}).catch(console.log)
        if (+res._errCode===0){
            let data = res._data
            ctx.setData({
                id: data.id,
                'wheelInfo.prizeList': data.prizeArr || [],
                totalNum: data.totalNum || 0,
                remainNum: data.remainNum || 0
            })
        }
    },
    async getTaskInfo (token) {
        let res = await prizeWheelsGetTaskInfo({token, actTag}).catch(console.log)
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
    async prizeWheelsGetPrizeList (token) {
        let res = await prizeWheelsGetPrizeList({token, actTag})
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
        let res = await prizeWheelsGetMyPrizeList({token, actTag})
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
                        path: 'pages/index/index?originAppId=2021001171616271&newUserTemplate=KP20200818000002664891'
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
        let res = await prizeWheelsTaskAction({token, actTag, type})
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
    onRuleModalClose () {
        ctx.setData({
            ruleVisible: false
        })
    },
    ruleShow () {
        ctx.setData({
            ruleVisible: true
        })
    },
    submitRst (e) {
        let prizeInfo = e.target.dataset.index !== undefined ? ctx.data.prizeList[e.target.dataset.index] : ctx.data.prizeInfo
        // 1=天猫超市券，3=加价券，
        switch(+prizeInfo.type){
            case 1:
                if (prizeInfo.url) {
                    my.saveImage({
                        url: prizeInfo.url,
                        showActionSheet: true,
                        success: () => {
                            my.alert({
                                content: '保存成功',
                            });
                        },
                    });
                } else {
                    my.alert({
                        content: '获取二维码失败！',
                        buttonText: '我知道了'});
                }
                break;
            case 3:
                app.globalData.navigateToXy({
                    url: prizeInfo.url
                })
                break;
        }
        ctx.onRstClose()
    },
    onRstClose () {
        if (!ctx.data.prizeVisible) return
        ctx.setData({
            prizeVisible: false
        })
    },
    async realToken (flag) {
        token = my.getStorageSync({key: 'token'}).data
        if(!token || flag){
            await checkLoginStatus()
            token = my.getStorageSync({key: 'token'}).data
        }
    },
    gotoList () {
        my.navigateTo({ url: `/activity/pages/superSeason/list` });
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