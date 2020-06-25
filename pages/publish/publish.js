// pages/publish.js
var uploadVid = require('../../js/upload_/uploadVideo.js');//地址换成你自己存放文件的位置
var uploadImg = require('../../js/upload_/uploadImg.js');//地址换成你自己存放文件的位置
var sourceType = [ ['camera'], ['album'], ['camera', 'album'] ]
var sizeType = [ ['compressed'], ['original'], ['compressed', 'original'] ]
var videoUrl=''
var coverUrl=''
var title=''
var block=''
var subClass=''
var isTitle=false
var isInfo=false
var isVideo=false
var isImage=false
Page({
  data: {
    array_section:["篮球","足球","排球","乒乓球","电竞","健身","跑步","游泳","瑜伽","羽毛球","装备","其他"],
    basket_section:["实战教学","篮球技巧","战术讲解"],
    football_section:["实战教学","动作技巧","战术讲解"],
    volley_section:["实战教学","排球技巧","战术讲解"],
    ping_section:["实战教学","直板技巧","横拍技巧"],
    com_section:["实战教学","电竞技巧","战术讲解"],
    fit_section:["膳食搭配","健身技巧"],
    bad_section:["实战教学","羽毛球技巧","战术讲解"],
    yoga_section:["基础动作","进阶提高"],
    run_section:["短跑","长跑/马拉松"],
    swim_section:["基础泳姿","进阶技巧"],
    equ_section:["开箱测评","性能测评"],
    else_section:["其他"],
    index:0,
    sub_section_index:0,
    images:[],
    sourceTypeIndex: 0,
    sourceType: ['拍照', '相册', '拍照或相册'],
    sizeTypeIndex: 0,
    sizeType: ['压缩', '原图', '压缩或原图'],
    modal: "",
  },
  onReady: function () {
    //获得popup组件
    this.modal = this.selectComponent("#popup");
  },
 //选择视频
 chooseVideo: function() {
  var that = this
  wx.chooseVideo({
    count: 1, // 默认最多一次选择1个视频
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePath;
        //上传图片
        //你的域名下的/videos/当前年月日文件下的/视频.mp4
        //uploadImage-调用的js/uploadImg.js
        uploadVid(res.tempFilePath, 'videos/',
          function (result) {
            console.log("======上传成功视频地址为：", result);
            videoUrl=result;
            //这个result就是返给你上传到oss上的地址链接
            wx.hideLoading();
            isVideo=true
          }, function (result) {
            console.log("======上传失败======", result);
            wx.hideLoading()
          }
        )
    }
  })
},
  removeImage(e) {
    const idx = e.target.dataset.idx
    this.data.images.splice(idx, 1)
  },

  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images
    wx.previewImage({
      current: images[idx],  //当前预览的图片
      urls: images,  //所有要预览的图片
    })
  },
  bindKeyInput:function(e){
    this.setData({
      inputValue:e.detail.value
    })
  },
  getInfo:function(e){
    info=e.detail.value
  },
  getTitle:function(e){
    isTitle=true
    title=e.detail.value
  },
  getBlcok:function(e){
    block=e.detail.value
  },
  bindPickerChange: function(e) {
    var that=this
    this.setData({
      index: e.detail.value
    })
    block=that.data.array_section[e.detail.value],
    console.log(block)
  },
  bindPickerSubChange: function(e) {
    var that=this
    var index=that.data.index
    this.setData({
      sub_section_index: e.detail.value
    })
    var sub_section_index=that.data.sub_section_index
    if(index==0){
      subClass=that.data.basket_section[sub_section_index]
    }else if(index==1){
      subClass=that.data.football_section[sub_section_index]
    }else if (index==2) {
      subClass=that.data.volley_section[sub_section_index]
    }else if (index==3) {
      subClass=that.data.ping_section[sub_section_index]
    }else if (index==4) {
      subClass=that.data.com_section[sub_section_index]
    }else if (index==5) {
      subClass=that.data.fit_section[sub_section_index]
    }else if (index==6) {
      subClass=that.data.run_section[sub_section_index]
    }else if (index==7) {
      subClass=that.data.swim_section[sub_section_index]
    }else if (index==8) {
      subClass=that.data.yoga_section[sub_section_index]
    }else if (index==9) {
      subClass=that.data.bad_section[sub_section_index]
    }else if (index==10) {
      subClass=that.data.equ_section[sub_section_index]
    }else {
      subClass=that.data.else_section[sub_section_index]
    }
    console.log(subClass)
  },
  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },
  sizeTypeChange: function (e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    })
  },
  countChange: function (e) {
    this.setData({
      countIndex: e.detail.value
    })
  },
  chooseImage: function () {
    var that = this
    wx.chooseImage({
      count: 3, // 默认最多一次选择3张图
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        //支持多图上传
        for (var i = 0; i < res.tempFilePaths.length; i++) {
          //上传图片
          //你的域名下的/images/当前年月日文件下的/图片.png
          //图片路径可自行修改【(这二个参数就是你oss地址目录的下一个路径目录，比如:https://xxx.com/images/xxx.png)】
          uploadImg(res.tempFilePaths[i], 'images/',
            function (result) {
              console.log("======上传成功图片地址为：", result);
              //这个result就是返给你上传到oss上的地址链接
              coverUrl=result
              wx.hideLoading();
              isImage=true
            }, function (result) {
              console.log("======上传失败======", result);
              wx.hideLoading()
            }
          )
        }
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.imageList
    })
  },
  submit() {
    if(!isTitle){
      wx.showToast({
        title: '请填写标题！',
        icon: 'none',
        duration: 500
      })
    }else if(!isVideo){
      wx.showToast({
        title: '请选择视频！',
        icon: 'none',
        duration: 500
      })
    }else if(!isImage){
      wx.showToast({
        title: '请选择图片！',
        icon: 'none',
        duration: 500
      })
    }else{
    wx.request({
      url: 'http://localhost:8080/api/video/uploadVideo',
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        data:{
          userid:2,
          title:title,
          info:info,
          block:block,
          subClass:subClass,
          coverImg:coverUrl,
          videoUrl:videoUrl
        }
    })
    this.modal.showPopup();
  }
  },
  _error() {
    console.log('返回');
    this.modal.hidePopup();
    wx.navigateBack({
      url: '../mine/mine',
    })
  },
  //确认事件
  _success() {
    console.log('查看');
    this.modal.hidePopup();
    wx.request({
      url: 'http://localhost:8080/api/video/getVideoByVideoUrl',
      method:'GET',
      data:{
        videoUrl:videoUrl
      },
      header:{
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success:function (res) {
        console.log(res.data)
        wx.navigateTo({
          url: '../video/video?videoId='+res.data.id,
        })
      }
    })
  }
})
