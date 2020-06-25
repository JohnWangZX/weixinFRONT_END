
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
  onLoad: function() {
    var that = this;
 
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
      url: 'http://localhost:8080/api/video/getHotVideoByBlcok',
      data:{
        block:"乒乓球",
        sub:"实战教学"
      },
      method:'GET',
      header:{
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success (res) {
        that.setData({
          hotList_shizhan:res.data
       });
        }
    })
    wx.request({
      url: 'http://localhost:8080/api/video/getNewVideoByBlcok',
      data:{
        block:"乒乓球",
        sub:"实战教学"
      },
      method:'GET',
      header:{
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success (res) {
        that.setData({
          newList_shizhan:res.data
       });
        }
    })
    wx.request({
      url: 'http://localhost:8080/api/video/getHotVideoByBlcok',
      data:{
        block:"乒乓球",
        sub:"直板技巧"
      },
      method:'GET',
      header:{
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success (res) {
        that.setData({
          hotList_zhiban:res.data
       });
        }
    })
    wx.request({
      url: 'http://localhost:8080/api/video/getNewVideoByBlcok',
      data:{
        block:"乒乓球",
        sub:"直板技巧"
      },
      method:'GET',
      header:{
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success (res) {
        that.setData({
          newList_zhiban:res.data
       });
        }
    })
    wx.request({
      url: 'http://localhost:8080/api/video/getHotVideoByBlcok',
      data:{
        block:"乒乓球",
        sub:"横拍技巧"
      },
      method:'GET',
      header:{
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success (res) {
        that.setData({
          hotList_hengban:res.data
       });
        }
    })
    wx.request({
      url: 'http://localhost:8080/api/video/getNewVideoByBlcok',
      data:{
        block:"乒乓球",
        sub:"横拍技巧"
      },
      method:'GET',
      header:{
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success (res) {
        that.setData({
          newList_hengban:res.data
       });
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
  toVideoPlay:function(e){
    var id=e.currentTarget.dataset.yes
    wx.navigateTo({
      url: "../video/video?videoId="+id,
    })
  },
  toHotList:function(){
    wx.navigateTo({
      url: '../hotlist/hotlist',
    })
    }
})