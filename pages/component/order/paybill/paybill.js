// pages/component/order/paybill/paybill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  /***判断* */
  formsubmit:function(e){
    var warn = "";
    var that = this;
    var flag = false;
    console.log(e);
    if (e.detail.value.paybill == '') {
      warn = "请输入消费金额";
    }else{
      flag = true;
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    }
    if (flag == false) {
      wx.showModal({
        title: '提示',
        content: warn
      })
    }
  }
})