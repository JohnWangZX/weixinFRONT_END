const app = getApp()
Page({
  onReady: function (res){
  },
  data: {
    userId:2,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    massage:'initial',
    orderItems: [
      {
        typeId: 0,
        name: '粉丝',
        url: 'bill',
        imageurl: '../../imageIcon/fensi.png',
      },
      {
        typeId: 1,
        name: '关注',
        url: 'bill',
        imageurl: '../../imageIcon/guanzhu.png',
      },
    ],
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
    var that=this
    app.globalData.isLogIn=true
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    console.log(this.userInfo)
    var that=this
    wx.request({
      url: 'http://localhost:8080/api/user/getUserInfo',
      method:'GET',
      data:{
        id:2
      },
      success (res) {
        that.setData({
          user:res.data
      });
      }
    })
  },
  upload_handler:function(){
    var that=this
    if(app.globalData.isLogIn){
    console.log("publish")
    wx.navigateTo({
     url: '../publish/publish'
   })
  }else{
    wx.showToast({
      title: '请先登录',
      icon: 'none',
      duration: 1000
    })
  }
   },
  collect_handler:function(){
    var that=this
    if(app.globalData.isLogIn){
    console.log("collect")
    wx.navigateTo({
     url: "../collect/collect?id=2"
   })
  }else{
    wx.showToast({
      title: '请先登录',
      icon: 'none',
      duration: 1000
    })
  }
   },
   release_handler:function(){
    var that=this
     if(app.globalData.isLogIn){
    console.log("release")
    wx.navigateTo({
     url: '../release/release?id=2'
   })
  }else{
    wx.showToast({
      title: '请先登录',
      icon: 'none',
      duration: 1000
    })
  }
   },
   history_handler:function(){
    var that=this
     if(app.globalData.isLogIn){
    console.log("history")
    wx.navigateTo({
     url: '../history/history?id=2'
   })
  }else{
    wx.showToast({
      title: '请先登录',
      icon: 'none',
      duration: 1000
    })
  }
   },
   comment_handler:function(){
    var that=this
     if(app.globalData.isLogIn){
    wx.navigateTo({
      url: '../comment/comment?id=2'
    })
  }else{
    wx.showToast({
      title: '请先登录',
      icon: 'none',
      duration: 1000
    })
  }
   },
   others_handler:function(){
    var that=this
     if(app.globalData.isLogIn){
    wx.navigateTo({
      url: '../dianzan/dianzan?id=2'
    })
  }else{
    wx.showToast({
      title: '请先登录',
      icon: 'none',
      duration: 1000
    })
  }
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

