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
    duration: 1000,
    hotList: [
      {
        coverImg: '../../res/video_bc1.png',
        title: '【乐正绫】《华夏之章》【小旭PRO】【绛舞乱丸】',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av1'
      },
      {
        coverImg: '../../res/video_bc2.png',
        title: '【斗图歌】装逼不如斗图',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av2'
      },
      {
        coverImg: '../../res/video_bc3.png',
        title: '【胖胖球】【双子星】【獒龙】荒岛 - El transcurrir de las horas',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av3'
      },
      {
        coverImg: '../../res/video_bc4.jpg',
        title: '撩人净土系列【红菱歌舞伎初音】极乐净土【大神犬PV付】MME配布',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av4'
      }
    ],
    newList: [
      {
        coverImg: '../../res/video_bc5.jpg',
        title: '【乐正绫】《华夏之章》【小旭PRO】【绛舞乱丸】',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av1'
      },
      {
        coverImg: '../../res/video_bc6.png',
        title: '【斗图歌】装逼不如斗图',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av2'
      },
      {
        coverImg: '../../res/video_bc7.png',
        title: '【胖胖球】【双子星】【獒龙】荒岛 - El transcurrir de las horas',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av3'
      },
      {
        coverImg: '../../res/video_bc8.png',
        title: '撩人净土系列【红菱歌舞伎初音】极乐净土【大神犬PV付】MME配布',
        playNum: '4.7万',
        commentNum: '977',
        avid: 'av4'
      }
    ],
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
  toVideoPlay:function(){
  console.log("video")
  wx.navigateTo({
    url: '../video/video',
  })
}
 })