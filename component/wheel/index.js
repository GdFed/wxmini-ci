import {saveFormId} from '/config/api'
let app = getApp()
Component({
    data: {
        transition: 1000,
        rotateInit: 0,
        wheelStyle: ``
    },
    props:{
        wheelInfo: {},
        onStart: e => console.log(e),
        onDone: e => console.log(e),
    },
    deriveDataFromProps (nextProps) {
        if (nextProps.wheelInfo.times<this.props.wheelInfo.times) {
            let rotate = nextProps.wheelInfo.prizeIndex > this.props.wheelInfo.prizeIndex ? (nextProps.wheelInfo.prizeIndex/this.props.wheelInfo.prizeList.length + 1) * 360 : (nextProps.wheelInfo.prizeIndex/this.props.wheelInfo.prizeList.length + 2) * 360
            rotate += this.props.wheelInfo.rotateInit
            this.setData({
                wheelStyle: `transform:translate(-50%,-50%) rotate(-${rotate}deg);transition: all 1s;`
            })
            setTimeout(()=>{
                this.props.onDone();
                this.setData({
                    wheelStyle: `transform:translate(-50%,-50%) rotate(-${rotate%360}deg);`
                })
            }, this.data.transition);
        }
    },
    didMount(){
        this.setData({
            length: this.props.wheelInfo.prizeList.length
        })
        if (this.props.wheelInfo.rotateInit) {
            this.setData({
                rotateInit: this.props.wheelInfo.rotateInit
            })
        }
        if (this.props.wheelInfo.wheelStyle) {
            this.setData({
                wheelStyle: this.props.wheelInfo.wheelStyle
            })
        }
    },
    methods: {
        onSubmit (e) {
            // let token = my.getStorageSync({key: 'token'}).data
            // if (token) {
            //     saveFormId({token, formId: e.detail.formId})
            // }
            if (this.props.wheelInfo.prizeList.length) {
                this.props.onStart()
            }
        }
    }
  });