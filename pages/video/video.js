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
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
    data: {
        src: '',
        title: '【乐正绫】《华夏之章》【小旭PRO】【绛舞乱丸】',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      },
      { text: 'sb',
      color: '#ff00ff',
      time: 5}
    ],
    iconsrc:'../../imageIcon/匿名.png',
    name:"小网红",
    fansNUm:100,
    playCount: 10000,
    commentCount:100,
    dianzanCount:5,
    info:"最近是FGO和FZ的联动活动，所以特地给了闪闪、呆毛、大帝一大堆镜头....孔明本身的动作场景不多，但我还是强行给塞进去了23333 另外就是切嗣爸爸，虽然我给你的戏份少，但我给你儿子的戏份多呀！！",
    title:"【Fate全系列】英灵乱斗: 夺回未来的战争「Grand Order」"
  },
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
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
    videoErrorCallback: function(e) {
      console.log('视频错误信息:');
      console.log(e.detail.errMsg);
    }
})