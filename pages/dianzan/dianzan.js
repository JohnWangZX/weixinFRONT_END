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
    var value=options.value
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
      url: 'http://localhost:8080/api/video/searchVideo',
      method:'GET',
      header:{
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      data:{
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
}) 