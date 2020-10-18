import { getIndexStoreInfo, getHotProductList, getPositionBannerList } from '/config/api'
import { formatDistance, formatStore } from '/util/utils'
import { getLocation } from '/config/sdk'
import { checkLoginStatus } from '/config/login'
let ctx, app = getApp()
let bannerTopCode = 'hsb_alipay_xianyu_01'
let bannerCenterCode = 'hsb_alipay_xianyu_02'
$global.GioPage({
  data: {
    iphoneX: my.getStorageSync({
      key: 'iphoneX'
    }).data || app.globalData.iphoneX,
    bannerTopList: [{}],
    bannerCenterList: [{}],
    current: 0,
    storeInfo: {},
    hotProductList: [],
    classList: [
      {
        name: '手机',
        pic: '/static/image/index/home_phone.png',
        powerStatus: true,
        link: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E6%89%8B%E6%9C%BA%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=richang'
      },
      {
        name: '平板',
        pic: '/static/image/index/home_pad.png',
        powerStatus: false,
        link: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E5%B9%B3%E6%9D%BF%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126860614%22%2C%22deep%22%3A2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=richang'
      },
      {
        name: '笔记本',
        pic: '/static/image/index/home_laptop.png',
        powerStatus: true,
        link: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126854525%22%2C%22deep%22%3A2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=richang'
      },
    ],
    hideKefu: false
  },
  async onLoad() {
    ctx = this
    await ctx.getBanner(bannerTopCode, 'bannerTopList')
    await ctx.getBanner(bannerCenterCode, 'bannerCenterList')
    await checkLoginStatus()
    ctx.getHotProductList()
    await getLocation().catch(console.log)
    ctx.getIndexStoreInfo()
  },
  bannerChange(e) {
    ctx.setData({
      current: e.detail.current
    })
  },
  async getBanner (positionCode, dataName) {
    let bannerList = []
    let res = await getPositionBannerList({positionCode}).catch(console.log)
    if (+res._errCode === 0) {
      bannerList = res._data.bannerList.map(item => {
        item.picUrl = item.picUrl.replace('http://s1-1251010403.file.myqcloud.com', 'https://s1.huishoubao.com')
        return item
      })
    }
    ctx.setData({
      [dataName]: bannerList,
    })
  },
  async getIndexStoreInfo () {
    let {longitude, latitude} = my.getStorageSync({key:'location'}).data || {}
    let res = await getIndexStoreInfo({longitude, latitude})
    if (+res._errCode===0) {
      res._data.distance = formatDistance(res._data.distance)
      res._data.storeName = formatStore(res._data.storeName)
      ctx.setData({
        storeInfo: res._data||{}
      })
    }
  },
  async getHotProductList () {
    let res = await getHotProductList().catch(console.log)
    if (+res._errCode===0) {
      ctx.setData({
        hotProductList: res._data||[]
      })
    }
  },
  checkExpress () {
    my.navigateTo({
      url: `/pages/h5/h5?link=https://ka.huishoubao.com/hsbh5/common/orders`
    })
  },
  navigateToXy (e) {
    let id = e.target.dataset.id
    let link = e.target.dataset.link
    let url = 'https://market.m.taobao.com/app/idleFish-F2e/recycle/catPick?spm=a211k7.210270.1118298.1.25f34ccdD2xrci&wh_weex=true&catInfo=%5B%7B%22title%22:%22%E6%89%8B%E6%9C%BA%22,%22p%22:%22catId4:126862528%22,%22deep%22:2%7D,%7B%22title%22:%22%E5%B9%B3%E6%9D%BF%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126860614%22,%22deep%22:2%7D,%7B%22title%22:%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126854525%22,%22deep%22:2%7D%5D&sceneType=3C_NEW&supplierId=24633185&channel=HSBexternal&subChannel=xiaozhanxcx&recycleShipType=3'
    if (id) {
      url = `https://market.m.taobao.com/app/idleFish-F2e/recycle/paramsSet?wh_weex=true&spuId=${id}&sceneType=3C&supplierId=24633185&channel=HSBexternal&subChannel=hezuo3`
    }
    if (link) {
      url = link
    }
    app.globalData.navigateToXy({url})
  },
  eval (e) {
    let link = e.target.dataset.link
    let url = 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22:%22%E6%89%8B%E6%9C%BA%22,%22p%22:%22catId4:126862528%22,%22deep%22:2%7D,%7B%22title%22:%22%E5%B9%B3%E6%9D%BF%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126860614%22,%22deep%22:2%7D,%7B%22title%22:%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126854525%22,%22deep%22:2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=richang'
    if (link) {
      url = link
    }
    app.globalData.navigateToXy({url})
  },
  gotoSearch () {
    app.globalData.navigateToXy({
      url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleSearchHistory?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E6%89%8B%E6%9C%BA%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%7D%2C%7B%22title%22%3A%22%E5%B9%B3%E6%9D%BF%E7%94%B5%E8%84%91%22%2C%22p%22%3A%22catId4%3A126860614%22%2C%22deep%22%3A2%7D%2C%7B%22title%22%3A%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%22%2C%22p%22%3A%22catId4%3A126854525%22%2C%22deep%22%3A2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=richang&spm=a2170.recyclecatpick.1.1&chInfo=ch_share__chsub_CopyLink'
    })
  },
  tapBannerItem(e) {
    let link = e.target.dataset.link
    if (link) {
      app.globalData.navigate(link)
    }
  },
  onPageScroll({scrollTop}){
    if (!ctx.data.hideKefu){
        ctx.setData({ hideKefu: true })  
    }
    clearTimeout(ctx.scrollTimer)
    ctx.scrollTimer = setTimeout(() => {
        ctx.setData({ hideKefu: false })
    },500)
  },
})