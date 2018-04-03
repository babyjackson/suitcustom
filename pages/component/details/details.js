// pages/component/details/details.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    review: [
      "/images/xinxin.png", 
      "/images/xinxin.png", 
      "/images/xinxin.png", 
      "/images/xinxin.png", 
      "/images/xinxin.png"
      ],
    inform:{
      time:"00:00-23:59",
      address:"江苏省南京市浦口区公园北路26-34",
      tips:["西装","定制","正装"],
    },
    scrollTop:0,
    floorstatus:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        // 计算主体部分高度,单位为px
        that.setData({
          screen_h: res.windowHeight
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  onPageScroll: function (e) { // 获取滚动条当前位置
    
  },
  /* 回到顶部 */
  goTop: function (e) {  // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }
})