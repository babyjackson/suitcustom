// pages/component/order/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gwc: [
      {
        id: "1",
        imggoods: "/images/allimg.jpg",
        tit: "碧生源减肥茶 2.5g/袋*15袋/盒...",
        price: "¥158.00"
      }
    ],
    name: "张三",
    tel: "13733332222",
    addre: "长沙市天心区解放路一单元110号",
    goodscon: [
      {
        dptit: "韩流主旗舰店",
        goodsimg: "/images/allimg.jpg",
        goodstit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风",
        color: "颜色：卡其色",
        size: "均码",
        yuanj: "¥285",
        sj: "¥200",
        num: "1"
      }
    ],
    zj: [
      {
        name: "商品总价",
        price: "¥158.10",
        colorC: "zhei"
      },
      {
        name: "打折减",
        price: "-¥158.10",
        colorC: "zhong"
      },
      {
        name: "邮费",
        price: "+¥158.10",
        colorC: "zhong"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  navfun: function () {
    xw: wx.navigateTo({
      url: '/pages/component/order/wxzf/wxzf?id=' + this.data.id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
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

  }
})