// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmuList: [
      {
        coverImg: '../../res/video_bc5.jpg',
        title: '【乐正绫】《华夏之章》【小旭PRO】【绛舞乱丸】',
        text:'骚得一批屁屁屁屁屁呜呜呜呜',
        avid: 'av1'
      },
      {
        coverImg: '../../res/video_bc6.png',
        title: '【斗图歌】装逼不如斗图',
        text: '可以嗷',
        avid: 'av2'
      },
      {
        coverImg: '../../res/video_bc7.png',
        title: '【胖胖球】【双子星】【獒龙】荒岛 - El transcurrir de las horas',
        text: '你再骂',
        avid: 'av3'
      },
      {
        coverImg: '../../res/video_bc8.png',
        title: '撩人净土系列【红菱歌舞伎初音】极乐净土【大神犬PV付】MME配布',
        text: '给爷爬',
        avid: 'av4'
      }
    ],
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
  toVideoPlay:function(){
    console.log("video")
    wx.navigateTo({
      url: '../video/video',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})