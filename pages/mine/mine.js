const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    todos:[
      {name:'JavaScript',completed:true},
      {name:'Html',completed:true},
      {name:'Css',completed:false}
    ],
    massage:'initial'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  inputHandler:function(e){
    this.setData({
      message:e.detail.value
    })
    //用来改变data数据
  },
  buttonTapHandler:function(e){
console.log(123)
//获取参数属性
console.dir(e.target.dataset)
  },
  innerHandler:function(){
console.log("inner")
  },
  outterHandler:function(){
    console.log("outter")
      },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    console.log(this.userInfo)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    console.log(this.userInfo)
  },
  upload_handler:function(){
    console.log("publish")
    wx.navigateTo({
     url: '../publish/publish'
   })
   },
  collect_handler:function(){
    console.log("collect")
    wx.navigateTo({
     url: '../collect/collect'
   })
   },
   release_handler:function(){
    console.log("release")
    wx.navigateTo({
     url: '../release/release'
   })
   },
   history_handler:function(){
    console.log("history")
    wx.navigateTo({
     url: '../history/history'
   })
   },
   comment_handler:function(){
    wx.navigateTo({
      url: '../comment/comment'
    })
   },
   containerTap: function (res) {
    var that = this
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY + 85;
    this.setData({
      rippleStyle: ''
    });
    setTimeout(function () {
      that.setData({
        rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.2s linear;animation:ripple 0.2s linear;'
      });
    }, 200)
  }
})

