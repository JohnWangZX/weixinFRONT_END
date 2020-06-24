//index.js
//获取应用实例
var searchValue=''
var app = getApp()
Page({
  onReady:function(res){
    var that=this
    setInterval(function () {
    wx.request({
      url: 'http://localhost:8080/api/video/getHotVideo',
      method:'GET',
      header: {
        'content-type': 'application/json' // 默认值
        },
        success (res) {
          that.setData({
            hotList:res.data
        });
        }
    })
    wx.request({
      url: 'http://localhost:8080/api/video/getNewVideo',
      method:'GET',
      header: {
        'content-type': 'application/json' // 默认值
        },
        success (res) {
          that.setData({
            newList:res.data
        });
        }
    })
  }, 1000)
  },
  data: {
    background: ['../../res/test1_kb.jpg', '../../res/test2_kb.jpg','../../res/test3_kb.jpg'],
    src:['../../res/test1_kb.jpg', '../../res/test2_kb.jpg','../../res/test3_kb.jpg'],
    indicatorDots: true,
    indicatorColor:"grey",
    indicatorActiveColor:"white",
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
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
},
getDataBindTap:function(e){
  searchValue= e.detail.value;
},
handleinput: function(){
  //处理输入搜索
  if(searchValue==''){
    wx.showToast({
      title: '请输入关键字',
      icon: 'none',
      duration: 1000
    })
  }else{
  console.log(searchValue)
  wx.navigateTo({
    url: "../search/search?value="+searchValue,
  })
}
}
 })