// pages/video/video.js
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
        id:1
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
  },
  data:{
    postId:0,
    isPlay:false,
    isLike:false,
    commentTime:0,
    currentVideoTime:0
  },
  inputValue: '',
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
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
        isPlay:true
      })
    wx.request({
      url: 'http://localhost:8080/api/video/addPlayNum',
      method:'POST',
      data:{
        id:postId,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        success (res) {
        }
    })
    },
  bindSendDanmu: function () {
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
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
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
  },
  timeUpdate: function (e) {
    //实时播放进度 秒数
      var currentTime = parseInt(e.detail.currentTime)
      this.setData({
        currentVideoTime:currentTime
      })
  },
  addLikes:function(){
    var that=this
    var postId=that.data.postId
    that.setData({
      isLike:true
    })
    wx.request({
      url: 'http://localhost:8080/api/video/addLikes',
      method:'POST',
      data:{
        id:postId,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        success (res) {
        }
    })
  },
    videoErrorCallback: function(e) {
      console.log('视频错误信息:');
      console.log(e.detail.errMsg);
    }
})