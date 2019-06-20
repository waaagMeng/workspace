//index.js
const app = getApp()

Page({
  data: {
    //tab切换
    display:true,
    contentAsk:false,
    contentFam:false,
    shouye:[],
    keshi:[],
    neike:["内分泌科","心血管内科","神经内科","肾脏内科","呼吸内科","普通内科","风湿免疫科","血液科","感染传染科"],
    waike:["神经外科","心胸外科","肝胆胰腺科","甲状腺科","普外科","美容整形科"],
    other:["全科","精神心里科","肿瘤科","影像检验科","疼痛麻醉科","药剂科"],
    imgUrls:["../../pic/swiper1.png","../../pic/swiper2.png"],
    today:'',
    curIndex: 0,
    typeLists:[],
    typeList:[]
  },
  back:function() {
    let that = this;
    that.setData({
      display:true,
      contentAsk:false,
      contentFam:false,
    })
  },
  toSearch:function() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  toDetail:function (e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url:'/pages/detail/detail?id=' + id
    })
    // console.log(e.currentTarget.dataset.id)
  },
  getDate:function () {
    var date;
    date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var newtoday = month + '月' + day + '日';
    let that = this;
    that.setData({
      today:newtoday
    })
  },
  swichNav:function (e) {
    var index = e.currentTarget.dataset.index;
      console.log(index);
      if (index == 1) {
         this.setData({
        display:false,
        contentFam:false,
        contentAsk:true
      })
    }else if (index == 2) {
      this.setData({
        display:false,
        contentAsk:false,
        contentFam:true
      })
    }
  },

  onLoad: function() {
    wx.showLoading({
      title:'加载中',
    })
    let that =this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5ca457fa4767c3737055c895/example/dingxiang',
      data:{},
      method:'GET',
      success:function(res) {
        console.log(res);
        let data = res.data.data;
        that.setData({
          shouye:data.shouye,
          keshi:data.keshi,
          lists:data.lists,
          typeLists:data.typeLists,
          typeList: data.typeLists[that.data.curIndex].typeList
        })
        wx.hideLoading()
      },
      fail:function() {
        console.log('fail')
      }
    })
    this.getDate();
  },
  toList: function (e) {
    let that = this
    // console.log(e)
    let currentId = e.currentTarget.dataset.id
    console.log(that.data.typeLists[currentId].typeList)
    that.setData({
      curIndex: e.currentTarget.dataset.id,
      typeList: that.data.typeLists[currentId].typeList
    })
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
