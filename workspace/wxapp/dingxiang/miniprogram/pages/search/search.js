// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    texta: '',
    textb: '',
    textc: '',
    textd: '',
    texte: '',
    textf: '',
    textg:'',
    texth:'',
    texti: '',
    textj: '',
    popular: [
      {
        id:0,
        name:"#扁桃体炎"
      },
      {
        id:1,
        name:"#成人水痘"
      },
      {
        id:2,
        name:"#急性支气管炎"
      },
      {
        id:3,
        name:"#肠炎"
      },
      {
        id:4,
        name:"#冻疮"
      },
    ],
    arr: [],
    display:true,
    content:false,
    search: [],
    value:'',
    newsList:[],
  },
  InputSearch:function(e){
    console.log(e.detail);
    // 将搜索内容存入缓存
    // wx.setStorageSync('keywords', e.detail); 
     // 调用getList方法搜索数据
    //  let search_list = this.getList(e.detail);
    //  this.setData({
    //    search_list
    //  })

    //输入的内容赋值给value
    this.setData({
      value:e.detail
    })
  },
  onSearch:function(e){
    // console.log(e.detail);
    //  将缓存中的keywords值赋值给keywords
    var that = this;
    // const keywords = wx.getStorageSync('keywords');
    wx.request({
      url:'https://www.easy-mock.com/mock/5ca457fa4767c3737055c895/example/dingxiang',
      data:{
        value:this.data.value
      },
      method:'GET',
      success:function(res) {
        console.log(res.data.data.search)
        let searchData = res.data.data
        that.setData({
          searchData
        })
        wx.setStorage({
          key: 'searchLists',
          data: {
              searchLists: res.data
          }
        })
      if (!that.data.value) {
        wx.showToast({
          title:'请重新输入',
          duration:2000,
        })
      } else if(searchData.search.length == 0) {
        wx.showToast({
          title:'关键词不存在哦~',
          duration:2000,
        })
      }else {
        // wx.getStorage({
        //   key: 'searchLists',
        //   success (res) {
        //     console.log(res.data.search)
        //   }
        // })
        var arr = [];
        const value = that.data.value
        console.log('res',res)
        console.log('value',res.data.data.search)
        for(let i in res.data.data.search) {
          if(res.data.data.search[i].title.indexOf(value) >= 0) {
            arr.push(res.data.data.search[i])
            that.setData({
              content: true,
              arr
            })
          }
        }
        if (arr.length == 0) {
          that.setData({
            newsList:[]
           })
        } else {
          that.setData({
            newsList: arr//在页面显示找到的数据
           })
        }
      }
      }
    })
  },
  topopular:function (e) {
    // console.log(e)
    let that = this
    let arr = []
    const id = e.currentTarget.dataset.id
    console.log(id)
    wx.request({
      url:'https://www.easy-mock.com/mock/5ca457fa4767c3737055c895/example/dingxiang',
      data:{},
      method:'GET',
      success:function(res) {
        // console.log(res);
        let data = res.data.data;
        // console.log(data.search[id])
        arr.push(data.search[id])
        that.setData({
          search:data.search,
          arr: arr,
          // title:data.passages[id].title,
          // title:data.search[id].title,
          // texta:data.search[id].texta,
          // textb:data.search[id].textb,
          // textc:data.search[id].textc,
          // textd:data.search[id].textd,
          // texte:data.search[id].texte,
          // textf:data.search[id].textf,
          // textg:data.search[id].textg,
          // texth:data.search[id].texth,
          // texti:data.search[id].texti,
          // textj:data.search[id].textj,
          display:false,
          content:true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const id = options.id
    // console.log(id)
    // let that = this

    let that = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5ca457fa4767c3737055c895/example/dingxiang',
      data:{},
      method:'GET',
      success:function(res) {
        console.log(res);
        let data = res.data.data;
        that.setData({
          search:data.search
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})