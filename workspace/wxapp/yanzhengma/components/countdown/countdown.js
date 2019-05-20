// components/countdown/countdown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    start:{
      type:Boolean,
      value:false,
      observer(newVal){
        console.log('------',newVal);
        this.countdownFunc();
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    timerText:'获取验证码'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    countdownFunc(){
      this.setData({
        timerText:60
      })
      let countdownNum = this.data.timerText
      setInterval(() => {
        countdownNum--;
        this.setData({
          timerText:countdownNum
        })
        if (countdownNum === 0) {
          this.setData({
            timerText:'重新发送'
          })
        }
      }, 1000);
    }
  }
})
