
appid:2021001171616271

## 支付宝小程序
```bash
  - 首页 / "pages/index/index", 
  - 到店 / "pages/face/index/index", 
  - 门店选择 / "pages/face/stores/index", 
```


## 外部参数接收 app.js
   - 传入参考链接 https://docs.alipay.com/mini/framework/app
   - 冷启动  / onLaunch
   - 热启动  / onShow

首页-邮寄回收-立即估价按钮，首页-底部导航-估价按钮：
https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5b%7b%22title%22:%22%E6%89%8B%E6%9C%BA%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22,%22p%22:%22catId4:126862528%22,%22deep%22:2%7d%2c%7b%22title%22:%22%E5%B9%B3%E6%9D%BF%E5%9B%9E%E6%94%B6%22,%22p%22:%22catId4:126860614%22,%22deep%22:2%7d%5d&sceneType=3C&supplierId=24633185&channel=HSBexternal&subChannel=hezuo3

首页-邮寄回收-手机（闲鱼选择机型页，手机类目）：
https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E6%89%8B%E6%9C%BA%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%7D%5D&sceneType=3C&supplierId=24633185&channel=HSBexternal&subChannel=hezuo3

首页-邮寄回收-平板（闲鱼选择机型页，平板类目）：
https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E5%B9%B3%E6%9D%BF%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126860614%22%2C%22deep%22%3A2%7D%5D&sceneType=3C&supplierId=24633185&channel=HSBexternal&subChannel=hezuo3

首页-邮寄回收-笔记本（闲鱼选择机型页，笔记本类目）：
https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleCatPick?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126854525%22%2C%22deep%22%3A2%7D%5D&sceneType=3C&supplierId=24633185&channel=HSBexternal&subChannel=hezuo3

首页-本机，首页-热门机型入口（闲鱼机型估价页，spuId参数是变量）：
https://market.m.taobao.com/app/idleFish-F2e/recycle/paramsSet?wh_weex=true&spuId=4&sceneType=3C&supplierId=24633185&channel=HSBexternal&subChannel=hezuo3

首页-到店回收-立即回收按钮、到店回收页-立即回收按钮：
https://market.m.taobao.com/app/idleFish-F2e/recycle/catPick?spm=a211k7.210270.1118298.1.25f34ccdD2xrci&wh_weex=true&catInfo=%5B%7B%22title%22:%22%E6%89%8B%E6%9C%BA%22,%22p%22:%22catId4:126862528%22,%22deep%22:2%7D,%7B%22title%22:%22%E5%B9%B3%E6%9D%BF%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126860614%22,%22deep%22:2%7D,%7B%22title%22:%22%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%22,%22p%22:%22catId4:126854525%22,%22deep%22:2%7D%5D&sceneType=3C_NEW&supplierId=24633185&channel=HSBexternal&subChannel=xiaozhanxcx&recycleShipType=3

订单入口：
https://render.alipay.com/p/s/i/?scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FappId%3D2018091061255978%26page%3Dpages%252Fpersonal%252Fpersonal%26enbsv%3D0.2.1912251738.45%26chInfo%3Dch_share__chsub_DingTalkSession