// pages/dianzan/dianzan.js
var app = getApp()
Page( {
  data: {
    /**
        * 页面配置
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
  },
  toVideoPlay:function(e){
    var id=e.currentTarget.dataset.yes
    wx.navigateTo({
      url: "../video/video?videoId="+id,
    })
  },
  onLoad: function(options) {
    var that = this;
<<<<<<< HEAD
    var id=options.id
=======
    var value=options.value
>>>>>>> 8ee9d9d9815aab3d59f6a086d41a671d97f84bbc
    /**
     * 获取系统信息
     */
    wx.getSystemInfo( {
      success: function( res ) {
        that.setData( {
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    wx.request({
<<<<<<< HEAD
      url: 'http://localhost:8080/api/user/getLikes',
=======
      url: 'http://localhost:8080/api/video/searchVideo',
>>>>>>> 8ee9d9d9815aab3d59f6a086d41a671d97f84bbc
      method:'GET',
      header:{
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      data:{
<<<<<<< HEAD
        id:id
      },
      success(res){
        that.setData({
          dianzanList:res.data
=======
        str:value
      },
      success(res){
        if(res.data==false){
          wx.showToast({
            title: '很抱歉，无相关视频！',
            icon: 'none',
            duration: 1000
          })
        }
        that.setData({
          searchList:res.data
>>>>>>> 8ee9d9d9815aab3d59f6a086d41a671d97f84bbc
        })
      }
    })
  },
  /**
     * 滑动切换tab
     */
  bindChange: function( e ) {

    var that = this;
    that.setData( { currentTab: e.detail.current });

  },
  /**
   * 点击tab切换
   */
  swichNav: function( e ) {

    var that = this;

    if( this.data.currentTab === e.target.dataset.current ) {
      return false;
    } else {
      that.setData( {
        currentTab: e.target.dataset.current
      })
    }
  },
<<<<<<< HEAD
})  
=======
}) 
>>>>>>> 8ee9d9d9815aab3d59f6a086d41a671d97f84bbc
