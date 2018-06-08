//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name:'名字',
    info: {
      a:1,
      b:2
    },
    sex:'男'
  },

  onLoad: function () {
    console.log('欢迎到来！');
  },

  tapName(){
    this.setData({
      name: '小三'
    })
  },

  showok() {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
    showoks() {
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 2000
      })
  } 
  

})
