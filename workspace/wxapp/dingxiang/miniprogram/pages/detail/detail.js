// miniprogram/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    passages:[],
    pic:'',
    title:'',
    author:'',
    time:'',
    pic:'',
    zy:'',
    eightone:'',
    weighttwo:'',
    weightthree: '',
    weightfour:'',
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
    textk: '',
    textl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    console.log(id)
    let that = this
    wx.request({
      url:'https://www.easy-mock.com/mock/5ca457fa4767c3737055c895/example/dingxiang',
      data:{},
      method:'GET',
      success:function(res) {
        let data = res.data.data;
        that.setData({
          passages:data.passages,
          title:data.passages[id].title,
          author:data.passages[id].author,
          time:data.passages[id].time,
          pic:data.passages[id].pic,
          zy:data.passages[id].zy,
          weightone:data.passages[id].weightone,
          weighttwo:data.passages[id].weighttwo,
          weightthree:data.passages[id].weightthree,
          weightfour:data.passages[id].weightfour,
          texta:data.passages[id].texta,
          textb:data.passages[id].textb,
          textc:data.passages[id].textc,
          textd:data.passages[id].textd,
          texte:data.passages[id].texte,
          textf:data.passages[id].textf,
          textg:data.passages[id].textg,
          texth:data.passages[id].texth,
          texti:data.passages[id].texti,
          textj:data.passages[id].textj,
          textk:data.passages[id].textk,
          textl:data.passages[id].textl,
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