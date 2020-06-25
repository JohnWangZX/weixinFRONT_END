// pages/video/video.js
var app=getApp()
function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onLoad:function(options){
    this.setData({
      postId:options.videoId
    })
  },
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
    var that=this
    var postId=that.data.postId
    wx.request({
      url: 'http://localhost:8080/api/video/getVideoById',
      method:'GET',
      data:{
        id:postId
      },
      header: {
        'content-type': 'application/json' // 默认值
        },
        success (res) {
          that.setData({
            result:res.data
        });
        }
    })
    wx.request({
      url: 'http://localhost:8080/api/danmu/getDanmuList',
      method:'GET',
      data:{
        postid:postId
      },
      header: {
        'content-type': 'application/json' // 默认值
        },
        success (res) {
          that.setData({
            danmuList:res.data
        });
        }
    })
    wx.request({
      url: 'http://localhost:8080/api/user/getUserInfo',
      method:'GET',
      data:{
        id:1,
        notSelected:1,
      },
      header: {
        'content-type': 'application/json' // 默认值
        },
        success (res) {
          that.setData({
            userInfo:res.data
        });
        }
    }) 
    wx.getSystemInfo( {
      success: function( res ) {
        that.setData( {
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  data:{
    postId:0,
    isPlay:false,
    commentTime:0,
    currentVideoTime:0,
    playTime:0,
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    likeTime:0
  },
  inputValue: '',
  bindInputBlur: function(e) {
    if(app.globalData.isLogIn) this.inputValue = e.detail.value
    else{
      wx.showToast({
        title: '登录后才能发送弹幕！',
        icon: 'none',
        duration: 1000
      })
    }
  },
    bindButtonTap: function() {  //视频下载
        var that = this
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: ['front','back'],
            success: function(res) {
                that.setData({
                    src: res.tempFilePath
                })
            }
        })
    },
    start:function(){
      var that=this
      var postId=that.data.postId
      that.setData({
        playTime:that.data.playTime+1
      })
    wx.request({
      url: 'http://localhost:8080/api/video/addPlayNum',
      method:'POST',
      data:{
        id:postId,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        success (res) {
        }
    })
    if(!app.globalData.isLogIn){
    wx.request({
      url: 'http://localhost:8080/api/user/addHistory',
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      data:{
        id:2,
        postId:postId
      }
    })
  }
    },
    addCollect:function(){
      if(!app.globalData.isLogIn){
        wx.showToast({
          title: '登录后才能收藏！',
          icon: 'none',
          duration: 1000
        })
      }else{
      var that=this
      var postId=that.data.postId
      wx.request({
        url: 'http://localhost:8080/api/user/isCollected',
        method:"GET",
        header:{
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' 
        },
        data:{
          id:2,
          postId:postId
        },
        success(res){
          console.log("判断是否已经在收藏夹中，结果："+res.data)
          if(res.data){
            wx.showToast({
              title: '已经收藏过了哦~',
              icon: 'none',
              duration: 1000
            })
          }else{
          wx.showToast({
            title: '收藏+1',
            icon: 'none',
            duration: 1000
          })
          wx.request({
            url: 'http://localhost:8080/api/user/addCollect',
            method:'POST',
            header:{
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            data:{
              id:2,
              postId:postId
            }
          })
        }
        }
      })
    }
    },
    bindChange: function( e ) {

      var that = this;
      that.setData( { currentTab: e.detail.current });

    },
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
  bindSendDanmu: function () {
    if(!app.globalData.isLogIn){
      wx.showToast({
        title: '登录后才能发送弹幕！',
        icon: 'none',
        duration: 1000
      })
    }else{
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
    var that=this
    that.setData({
      commentTime:that.data.commentTime+1
    })
    var postId=that.data.postId
    wx.request({
      url: 'http://localhost:8080/api/video/addCommentNum',
      method:'POST',
      data:{
        id:postId
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' 
        },
    }),
    wx.request({
      url: 'http://localhost:8080/api/danmu/addDanmu',
      method:'POST',
      data:{
        postid:postId,
        userid:1,
        text:this.inputValue,
        color:getRandomColor(),
        time:that.data.currentVideoTime+1,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        success (res) {
        }
    })
  }
  },
  timeUpdate: function (e) {
    //实时播放进度 秒数
      var currentTime = parseInt(e.detail.currentTime)
      this.setData({
        currentVideoTime:currentTime
      })
  },
  addLikes:function(){
    if(!app.globalData.isLogIn){
      wx.showToast({
        title: '登录后才能点赞！',
        icon: 'none',
        duration: 1000
      })
    }else{
    var that=this
    var postId=that.data.postId
    wx.request({
      url: 'http://localhost:8080/api/user/isLiked',
      method:"GET",
      header:{
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' 
      },
      data:{
        id:2,
        postId:postId
      },
      success(res){
        console.log("判断是否已经点过赞了，结果："+res.data)
        if(res.data){
          wx.showToast({
            title: '已经点过赞了哦~',
            icon: 'none',
            duration: 1000
          })
        }else{
        wx.showToast({
          title: '点赞+1',
          icon: 'none',
          duration: 1000
        })
        wx.request({
          url: 'http://localhost:8080/api/user/addLike',
          method:'POST',
          header:{
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          data:{
            id:2,
            postId:postId
          }
        })
      }
      }
    })
  }
  },
  goodDanmu:function(e){
    var that=this
    var danmuId=e.currentTarget.dataset.yes
    wx.request({
      url: 'http://localhost:8080/api/user/isGoodDanmu',
      method:'GET',
      data:{
        danmuId:danmuId,
        id:2
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        success (res) {
          if(res.data){
            wx.showToast({
              title: '已经赞过这条弹幕了哦~',
              icon: 'none',
              duration: 500
            })
          }else{
            that.setData({
              likeTime:that.data.likeTime+1
            })
            wx.showToast({
              title: '你赞了这条弹幕~',
              icon: 'none',
              duration: 500
            })
            wx.request({
              url: 'http://localhost:8080/api/user/addDanmuLike',
              method:'POST',
              data:{
                danmuId:danmuId,
                id:2
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                success (res) {
                }
            })
          }
        }
    })
  },
    videoErrorCallback: function(e) {
      console.log('视频错误信息:');
      console.log(e.detail.errMsg);
    }
})