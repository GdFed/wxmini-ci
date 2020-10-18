let ctx, app = getApp()
$global.GioPage({
    data: {
        systemInfo: {},
        limitTimeSale: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22:%22%E6%89%8B%E6%9C%BA%22,%22p%22:%22catId4:126862528%22,%22deep%22:2%7D,%7B%22title%22:%22%E5%B9%B3%E6%9D%BF%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126860614%22,%22deep%22:2%7D,%7B%22title%22:%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126854525%22,%22deep%22:2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=p11',
        onlyProducts: [
            {
                productName: 'iPhone 8 plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=10278'
            },
            {
                productName: 'iPhone 8',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=10285'
            },
            {
                productName: 'iPhone XS Max',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=3360891'
            },
        ],
        products: [
            {
                productName: 'iPhone 7 Plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=10284'
            },
            {
                productName: 'iPhone X',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=10287'
            },
            {
                productName: 'iPhone 6',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=5'
            },
            {
                productName: 'iPhone 7',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=4'
            },
            {
                productName: 'iPhone 6s Plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=10275'
            },
            {
                productName: 'iPhone 6s',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=10282'
            },
            {
                productName: 'iPhone XR',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=3360892'
            },
            {
                productName: 'iPhone 6 Plus',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=10283'
            },
            {
                productName: 'iPhone 11',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=3497471'
            },
            {
                productName: '小米 8',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=3361126'
            },
            {
                productName: 'iPhone 11 Pro Max',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=3497473'
            },
            {
                productName: '小米 6',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&sceneType=3C&&supplierId=24633185&channel=xyxcy&subChannel=p11&spuId=10214'
            },
        ],
        brands: [
            {
                brandName: '苹果',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%2C%22id%22%3A%2230111%22%2C%22type%22%3A%22keyProp1Id%22%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=p11'
            },
            {
                brandName: '小米',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E6%89%8B%E6%9C%BA%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%2C%22id%22%3A%22125473192%22%2C%22type%22%3A%22keyProp1Id%22%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=p11'
            },
            {
                brandName: '华为',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E6%89%8B%E6%9C%BA%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%2C%22id%22%3A%2211813%22%2C%22type%22%3A%22keyProp1Id%22%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=p11'
            },
            {
                brandName: 'OPPO',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22OPPO%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%2C%22id%22%3A%2228247%22%2C%22type%22%3A%22keyProp1Id%22%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=p11'
            },
            {
                brandName: 'vivo',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22VIVO%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%2C%22id%22%3A%2291621%22%2C%22type%22%3A%22keyProp1Id%22%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=p11'
            },
            {
                brandName: '荣耀',
                url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E8%8D%A3%E8%80%80%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%2C%22id%22%3A%22590022244%22%2C%22type%22%3A%22keyProp1Id%22%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=p11'
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