;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/page-component/app-exclusive-coupon/app-exclusive-coupon"],{"24d1":function(e,t,n){},"64b9":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"8cc9":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"app-exclusive-coupon",props:{receiveBg:{type:String,default:function(){return""}},textColor:{type:String,default:function(){return"#ffffff"}},unclaimedBg:{type:String,default:function(){return""}},index:{type:Number},sign:{type:String},coupon_list:{type:Array,default:function(){return[{appoint_type:"",begin_time:"",cat:[],couponCat:[],couponGoods:[],created_at:"",deleted_at:"",desc:"",discount:"",end_time:"",expire_day:"",expire_type:"",goods:[],id:"",is_delete:"",is_member:"",is_receive:"",mall_id:"",min_price:"",name:"",pic_url:"",rule:"",sort:"",sub_price:"",total_count:"",type:"",updated_at:""}]}},showTop:{type:Boolean,default:function(){return!0}},noneColor:{type:Boolean,default:function(){return!1}}},data:function(){return{list:[]}},watch:{coupon_list:{handler:function(e){this.list=this.coupon_list},immediate:!0}},computed:{receiveTip:function(){var e="立即领取";return"integral-mall"===this.sign&&(e="立即兑换"),e}},methods:{receive:function(t){var n=this,i=this.list;if("integral-mall"!=this.sign){if(1==i[t].is_receive)return e.showToast({mask:!0,title:"已领取",icon:"none"}),!0;e.showLoading({mask:!0,title:"领取中"}),this.$request({url:this.$api.coupon.receive,data:{coupon_id:i[t].id}}).then(function(o){e.hideLoading(),0===o.code&&(i[t].is_receive="1",n.$store.dispatch("page/actionSetCoupon",{list:[i[t]],type:"receive"}),n.list=i)}).catch(function(){e.hideLoading()})}else this.$jump({url:i[t].page_url,open_type:"navigate"})}}};t.default=n}).call(this,n("c11b")["default"])},a8a4:function(e,t,n){"use strict";var i=n("24d1"),o=n.n(i);o.a},aa4c:function(e,t,n){"use strict";n.r(t);var i=n("8cc9"),o=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);t["default"]=o.a},bdfc:function(e,t,n){"use strict";n.r(t);var i=n("64b9"),o=n("aa4c");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("a8a4");var a=n("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"0e81a33f",null);t["default"]=c.exports}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/page-component/app-exclusive-coupon/app-exclusive-coupon-create-component',
    {
        'components/page-component/app-exclusive-coupon/app-exclusive-coupon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("bdfc"))
        })
    },
    [['components/page-component/app-exclusive-coupon/app-exclusive-coupon-create-component']]
]);                