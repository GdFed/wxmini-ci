let ctx, app = getApp()
$global.GioPage({
    data: {
        systemInfo: {},
        highEvalUrl: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22:%22%E6%89%8B%E6%9C%BA%22,%22p%22:%22catId4:126862528%22,%22deep%22:2%7D,%7B%22title%22:%22%E5%B9%B3%E6%9D%BF%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126860614%22,%22deep%22:2%7D,%7B%22title%22:%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126854525%22,%22deep%22:2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5',
        couponUrl: 'https://fleamarket.taobao.com/wow/z/act/default/gumajiajiaquana-copy-copy?spm=a1zfx5.my_create_page.0.0.62f92251R4tRA9&wh_biz=tm',
        products: [
            {
                productName: 'iphone 6',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=5'
            },
            {
                productName: 'iPhone 7 plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10284'
            },
            {
                productName: 'iPhone x',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10287'
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
                productName: 'iphone 7',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=4'
            },
            {
                productName: 'iPhone 6 Plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10283'
            },
            {
                productName: 'iphone 11',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=3497471'
            },
            {
                productName: 'iphone 8 plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10278'
            },
            {
                productName: 'iphone 8',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=10285'
            },
            {
                productName: 'iPhone XR',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=3360892'
            },
            {
                productName: 'iphone xs max',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=xinyongh5&spuId=3360891'
            },
        ]
    },
    onShareAppMessage(e) {
    },
    onLoad({title}) {
        ctx = this
        if (title) {
            my.setNavigationBar({title})
        }
        ctx.setData({
            systemInfo: my.getSystemInfoSync()
        })
    },
    gotoEval (e) {
        app.globalData.navigateToXy({url: e.target.dataset.url})
    },
    gotoIndex(){
        my.navigateTo({ url: `/pages/index/index` })
    },
})