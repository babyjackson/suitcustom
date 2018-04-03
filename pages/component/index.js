//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
   banner:[
     {
       url:"",
       imgsrc:"/images/banner1.jpg"
     },
     {
       url: "",
       imgsrc: "/images/banner1.jpg"
     },
     {
       url: "",
       imgsrc: "/images/banner1.jpg"
     },
   ],
   tabArr:{
     curHdIndex: 0,
     curBdIndex:0
   },
   consort:[
     {
       imgsrc:"/images/allimg.jpg",
       tit:"圣得西西装男套装修身休闲正装",
       score:"5",
       eva:"0",
       tips:["西装","定制","正装"],
       address:"东菀市万江区水蛇涌社区大莲糖...",
       distance:"1195.5",
       url:"details/details"
     },
     {
       imgsrc: "/images/allimg.jpg",
       tit: "圣得西西装男套装修身休闲正装",
       score: "5",
       eva: "0",
       tips: ["西装", "定制", "正装"],
       address: "东菀市万江区水蛇涌社区大莲糖...",
       distance: "1195.5",
       url: ""
     },
     {
       imgsrc: "/images/allimg.jpg",
       tit: "圣得西西装男套装修身休闲正装",
       score: "5",
       eva: "0",
       tips: ["西装", "定制", "正装"],
       address: "东菀市万江区水蛇涌社区大莲糖...",
       distance: "1195.5",
       url: ""
     },
     {
       imgsrc: "/images/allimg.jpg",
       tit: "圣得西西装男套装修身休闲正装",
       score: "5",
       eva: "0",
       tips: ["西装", "定制", "正装"],
       address: "东菀市万江区水蛇涌社区大莲糖...",
       distance: "1195.5",
       url: ""
     },
     {
       imgsrc: "/images/allimg.jpg",
       tit: "圣得西西装男套装修身休闲正装",
       score: "5",
       eva: "0",
       tips: ["西装", "定制", "正装"],
       address: "东菀市万江区水蛇涌社区大莲糖...",
       distance: "1195.5",
       url: ""
     },
     {
       imgsrc: "/images/allimg.jpg",
       tit: "圣得西西装男套装修身休闲正装",
       score: "5",
       eva: "0",
       tips: ["西装", "定制", "正装"],
       address: "东菀市万江区水蛇涌社区大莲糖...",
       distance: "1195.5",
       url: ""
     },
     {
       imgsrc: "/images/allimg.jpg",
       tit: "圣得西西装男套装修身休闲正装",
       score: "5",
       eva: "0",
       tips: ["西装", "定制", "正装"],
       address: "东菀市万江区水蛇涌社区大莲糖...",
       distance: "1195.5",
       url: ""
     },
     {
       imgsrc: "/images/allimg.jpg",
       tit: "圣得西西装男套装修身休闲正装",
       score: "5",
       eva: "0",
       tips: ["西装", "定制", "正装"],
       address: "东菀市万江区水蛇涌社区大莲糖...",
       distance: "1195.5",
       url: ""
     }
   ],
   location:"上海路"
  },
  /**定位**/
  onLoad: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(res)
      }
    })
  },
 //获取头像昵称
  //点击切换
  tabFun:function(e){
    console.log(e);
    var _datasetId = e.target.dataset.id;
    if (_datasetId !=null){
      var _obj = {};
      _obj.curHdIndex = _datasetId;
      _obj.curBdIndex = _datasetId;
      this.setData({
        tabArr: _obj
      });
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  localaddress:function(options){
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        var regex = /^(北京市|天津市|重庆市|上海市|香港特别行政区|澳门特别行政区)/;
        var REGION_PROVINCE = [];
        var addressBean = {
          REGION_PROVINCE: null,
          REGION_COUNTRY: null,
          REGION_CITY: null,
          ADDRESS: null
        };
        function regexAddressBean(address, addressBean) {
          regex = /^(.*?[市州]|.*?地区|.*?特别行政区)(.*?[市区县])(.*?)$/g;
          var addxress = regex.exec(address);
          addressBean.REGION_CITY = addxress[1];
          addressBean.REGION_COUNTRY = addxress[2];
          addressBean.ADDRESS = addxress[3] + "(" + res.name + ")";
          console.log(addxress);
        }
        if (!(REGION_PROVINCE = regex.exec(res.address))) {
          regex = /^(.*?(省|自治区))(.*?)$/;
          REGION_PROVINCE = regex.exec(res.address);
          addressBean.REGION_PROVINCE = REGION_PROVINCE[1];
          regexAddressBean(REGION_PROVINCE[3], addressBean);
        } else {
          addressBean.REGION_PROVINCE = REGION_PROVINCE[1];
          regexAddressBean(res.address, addressBean);
        }
        that.setData({
          ADDRESS_1_STR:
          addressBean.REGION_PROVINCE + " "
          + addressBean.REGION_CITY + ""
          + addressBean.REGION_COUNTRY
        });
        that.setData(addressBean);
      }
    })  
  }
  
})
