// pages/publish.js
var sourceType = [ ['camera'], ['album'], ['camera', 'album'] ]
var sizeType = [ ['compressed'], ['original'], ['compressed', 'original'] ]
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
    success: function(res) {
      that.setData({
        src: res.tempFilePath,
      })
      that.uploadvideo();
    }
  })
},

  //上传视频 目前后台限制最大100M，以后如果视频太大可以在选择视频的时候进行压缩
  uploadvideo: function() {
    var src = this.data.images[0];
    wx.uploadFile({
      url: '**************/Upload', //服务器接口
      filePath: src,
      header: {
        'content-type': 'multipart/form-data'
      },
      name: 'files',
      success: function(res) {
        console.log(res.data)
      },
      fail: function() {
        console.log('接口调用失败')
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
  uploadpic: function() {
    var src = this.data.imageList;
    wx.uploadFile({
      url: '**************/Upload', //服务器接口
      filePath: src,
      header: {
        'content-type': 'multipart/form-data'
      },
      name: 'files',
      success: function(res) {
        console.log(res.data)
      },
      fail: function() {
        console.log('接口调用失败')
      }
    })
  },
  bindKeyInput:function(e){
    this.setData({
      inputValue:e.detail.value
    })
  },
  getDataBindTap:function(e){
    var result = e.detail.value;
    console.log(result)
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerSubChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sub_section_index: e.detail.value
    })
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
      sourceType: "album",
      sizeType: "compressed",
      success: function (res) {
        console.log(res)
        that.setData({
          imageList: res.tempFilePaths
        })
        that.uploadpic();
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
    //上传代码写在这
    this.modal.showPopup();
  },
  _error() {
    console.log('你点击了返回');
    this.modal.hidePopup();
    wx.navigateBack({
      url: '../mine/mine',
    })
  },
  //确认事件
  _success() {
    console.log('你点击了查看');
    this.modal.hidePopup();
    wx.navigateTo({
      url: '../video/video',
    })
  }
})
