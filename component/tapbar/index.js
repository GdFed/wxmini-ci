let app = getApp()
Component({
  data: {
    iphoneX: my.getStorageSync({
      key: 'iphoneX'
    }).data || app.globalData.iphoneX,
    taps: [{
        icon: '/static/image/tabbar_home.png',
        choicedIcon: '/static/image/tabbar_home_sel.png',
        txt: '首页',
        url: '/pages/index/index',
        auth: 0,
      },
      {
        icon: '/static/image/eval.png',
        choicedIcon: '',
        txt: '估价',
        url: '',
        auth: 0,
      },
      {
        icon: '/static/image/tabbar_order.png',
        choicedIcon: '/static/image/tabbar_order_sel.png',
        txt: '订单',
        url: '',
        auth: 0,
      },
    ]
  },
  props: {
    choiced: 0
  },
  onInit() {
    const {
      model,
      isIphoneXSeries,
      windowHeight
    } = my.getSystemInfoSync()
    let iphoneX = (model.indexOf('X') !== -1) || isIphoneXSeries || (windowHeight > 800)
    this.setData({
      iphoneX
    })
  },
  methods: {
    toTap(e) {
      if (e.target.dataset.index == this.props.choiced) return
      // this.props.onTap(e)
      switch (+e.target.dataset.index) {
        case 1:
          app.globalData.navigateToXy({
            url: 'https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22:%22%E6%89%8B%E6%9C%BA%22,%22p%22:%22catId4:126862528%22,%22deep%22:2%7D,%7B%22title%22:%22%E5%B9%B3%E6%9D%BF%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126860614%22,%22deep%22:2%7D,%7B%22title%22:%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126854525%22,%22deep%22:2%7D%5D&sceneType=3C&supplierId=24633185&channel=xyxcy&subChannel=richang'
          })
          break
        case 2:
            my.navigateToMiniProgram({
              appId: '2018091061255978',   // 闲鱼信用回收的小程序appid
              path: 'pages/personal/personal',  // 为了解决不返回信用回收小程序首页的问题
              extraData: {
                flag: true,   // 标识外部小程序跳转
                outId: '2021001171616271',  // 对应己方小程序的appid
              },
              complete (res) {
                console.log(res)
              }
            })
      }
    }
  },
});