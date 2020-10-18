import {prizeWheelsGetMyNumLogs} from '/config/api'
import { checkLoginStatus } from '/config/login'
let ctx, app = getApp()
const actTag = 'PrizeWheels20200818'
$global.GioPage({
    data: {
        systemInfo: {},
        totalNum: 0,
        remainNum: 0,
        logs: []
    },
    async onLoad({}) {
        ctx = this;
        ctx.setData({
            systemInfo: my.getSystemInfoSync()
        })
        await checkLoginStatus()
        let token = my.getStorageSync({key: 'token'}).data
        let res = await prizeWheelsGetMyNumLogs({token, actTag}).catch(console.log)
        if (+res._errCode === 0) {
            ctx.setData({
                totalNum: res._data.totalNum || 0,
                remainNum: res._data.remainNum || 0,
                logs: res._data.logs || []
            })
        }
    },
})