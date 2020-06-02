// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList: [
      {
        coverImg: 'http://i2.hdslb.com/bfs/archive/1239539a2f262d933bca7c2c1e290139420ba76a.jpg_320x200.jpg',
        title: '【乐正绫】《华夏之章》【小旭PRO】【绛舞乱丸】',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av1'
      },
      {
        coverImg: 'http://i1.hdslb.com/bfs/archive/ecce95b426faf188e6c28f9d3a0bdc63c5a72bb3.jpg_320x200.jpg',
        title: '【斗图歌】装逼不如斗图',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av2'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/archive/11bf8d41fffcad31976317760e301e2db64be8c8.png_320x200.png',
        title: '【胖胖球】【双子星】【獒龙】荒岛 - El transcurrir de las horas',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av3'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/archive/e73a92b0ed615b4d6568888906d09f84d0835674.jpg_320x200.jpg',
        title: '撩人净土系列【红菱歌舞伎初音】极乐净土【大神犬PV付】MME配布',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av4'
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
 
  toVideoPlay:function(){
    console.log("video")
    wx.navigateTo({
      url: '../video/video',
    })
  }
})