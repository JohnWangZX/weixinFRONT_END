//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    background: ['../../res/test1_kb.jpg', '../../res/test2_kb.jpg','../../res/test3_kb.jpg'],
    src:['../../res/test1_kb.jpg', '../../res/test2_kb.jpg','../../res/test3_kb.jpg'],
    indicatorDots: true,
    indicatorColor:"grey",
    indicatorActiveColor:"white",
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000
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
 })