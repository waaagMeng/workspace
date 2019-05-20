Page({
  data:{
    hasUserInfo:false,
    userInfo:{},
    todos:[],
    addShow:false
  },
  addTodoShow:function() {
    this.setData({
      addShow:true
    })
  },
  getUserInfo:function(e) {
    console.log(e);
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo:true
    })
  }
})