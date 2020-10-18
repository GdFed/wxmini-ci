import { checkLoginStatus } from '/config/login'
let ctx, app = getApp();
$global.GioPage({
  data:{
    link:''
  },
  async onLoad(query){
    ctx = this;
    let link = decodeURIComponent(query.link);
    if (query.title) {
      my.setNavigationBar({title: query.title});
    }
    await checkLoginStatus()
    let token = my.getStorageSync({key: 'token'}).data
    if (link.indexOf('?') !== -1) {
      link += '&pid=1777&token=' + token + '&platform=3'
    } else {
      link += '?pid=1777&token=' + token + '&platform=3'
    }
    ctx.setData({
      link
    })
  }
})