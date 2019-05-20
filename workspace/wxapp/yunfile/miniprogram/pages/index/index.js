//连上数据库
const db = wx.cloud.database();
//找到userInfo表
const userInfo =  db.collection('userInfo');
Page({
  data:{
    userList:[]
  },
  getUserInfo:function(result) {
    console.log(result);
    //用户_openid前端是拿不到的，云开发能拿到
    wx
    .cloud
    .callFunction({
      name:'getOpenId',
      complete: res => {
        console.log(res, '-------')
        //云数据库中，传一个json 代表一条记录
        //数量
        //要的不是结果，是符合条件的数量
        userInfo.where({
          _openid:res.result.openId
        }).count().then(res => {
          if(res.total == 0) {
          userInfo.add({
          data:result.detail.userInfo
        })
        .then(res => {
          console.log(res);
        })
          }else{
            // console.log('加过了');
            wx.navigateTo({
              url:'/pages/add/add',
              success:function(res) {

              },
            })
          }
        })
        // console.log(result.detail.userInfo);
        
      }
    })
  },
  onLoad: function(options) {
    userInfo
      .get()
      .then(res => {
        console.log(res, '-----');
        this.setData({
          userList:res.data
        })
      })
  }
})