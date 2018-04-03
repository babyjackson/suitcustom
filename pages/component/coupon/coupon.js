// pages/component/coupon/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr: { curHdIndex: 0, curBdIndex: 0 },
    wsy: [
      {
        je: "100",
        tips: "购买100元使用",
        classn: "zsbg",
        leix: "蔬菜",
        tit: "蔬菜商品类专用优惠券",
        yimgs: "/images/xdt.png",
        time: "使用时间：2017.6.8-2017.12.2",
        ljurl: ""
      },
      {
        je: "50",
        tips: "购买100元使用",
        classn: "lsbg",
        leix: "蔬菜",
        tit: "蔬菜商品类专用优惠券",
        yimgs: "/images/kgqt.png",
        time: "使用时间：2017.6.8-2017.12.2",
        ljurl: ""
      }
    ],
    ysy: [
      {
        je: "10",
        tips: "购买100元使用",
        classn: "hsbg",
        leix: "蔬菜",
        tit: "蔬菜商品类专用优惠券",
        yimgs: "/images/yyjsy.png",
        time: "使用时间：2017.6.8-2017.12.2",
        ljurl: ""
      },
      {
        je: "50",
        tips: "购买100元使用",
        classn: "hsbg",
        leix: "蔬菜",
        tit: "蔬菜商品类专用优惠券",
        yimgs: "/images/yyjsy.png",
        time: "使用时间：2017.6.8-2017.12.2",
        ljurl: ""
      }
    ],
    ygq: [
      {
        je: "10",
        tips: "购买100元使用",
        classn: "hsbg",
        leix: "蔬菜",
        tit: "蔬菜商品类专用优惠券",
        yimgs: "/images/ygq.png",
        time: "使用时间：2017.6.8-2017.12.2",
        ljurl: ""
      },
      {
        je: "50",
        tips: "购买100元使用",
        classn: "hsbg",
        leix: "蔬菜",
        tit: "蔬菜商品类专用优惠券",
        yimgs: "/images/ygq.png",
        time: "使用时间：2017.6.8-2017.12.2",
        ljurl: ""
      }
    ]
  },
  tabFun: function (e) {   //获取触发事件组件的dataset属性 
    var _datasetId = e.target.dataset.id;
    if (_datasetId != null) {
      var _obj = {};
      _obj.curHdIndex = _datasetId;
      _obj.curBdIndex = _datasetId;
      this.setData({
        tabArr: _obj
      });
    }
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

  }
})