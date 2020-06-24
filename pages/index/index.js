//index.js
//获取应用实例
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
// btnToDo:function(){
//   wx.showActionSheet({
//     itemList: ['A', 'B', 'C'],
//     success (res) {
//       console.log(res.tapIndex)
//     },
//     fail (res) {
//       console.log(res.errMsg)
//     }
//   })  
// }
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
  var searchValue = e.detail.value;
},
handleinput: function(){
  //处理输入搜索
  wx.navigateTo({
    url: "../search/search",
  })
}
 })