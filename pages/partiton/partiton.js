Page({
  data:{
    text:"Page partition"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  basketball_handler:function(){
    wx.navigateTo({
      url: '../basketball_block/basketball_block'
    })
   console.log(1)
  },
  soccer_handler:function(){ 
    wx.navigateTo({
      url: '../soccer_block/soccer_block'
    })
   console.log(1)
  },
   volleyball_handler:function(){
    wx.navigateTo({
      url: '../volleyball_block/volleyball_block'
    })
    console.log(3)
   },
   pingpong_handler:function(){
     wx.navigateTo({
       url: '../pingpong_block/pingpong_block',
     })
    console.log(4)
   },
  computer_handler:function(){
    wx.navigateTo({
      url: '../computer_block/computer_block',
    })
    console.log(5)
   },
   fit_handler:function(){
     wx.navigateTo({
       url: '../fit_block/fit_block',
     })
    console.log(6)
   },
   badminton_handler:function(){
     wx.navigateTo({
       url: '../badminton_block/badminton_block',
     })
    console.log(7)
   },
   yoka_handler:function(){
     wx.navigateTo({
       url: '../yoga_block/yoga_block',
     })
    console.log(8)
   },
   running_handler:function(){
     wx.navigateTo({
       url: '../running_block/running_block',
     })
    console.log(9)
   },
   swimming_handler:function(){
     wx.navigateTo({
       url: '../swimming_block/swimming_block',
     })
    console.log(10)
   },
   equipment_handler:function(){
    console.log(11)
    wx.navigateTo({
      url: '../equipment_block/equipment_block',
    })
   },
   else_handler:function(){
    console.log(12)
    wx.navigateTo({
      url: '../else_block/else',
    })
   },
})