(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/pt/goods/goods"],{"1d92":function(t,e,n){"use strict";n.r(e);var i=n("bbdf"),o=n("33a2");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("727c");var p=n("2877"),s=Object(p["a"])(o["default"],i["a"],i["b"],!1,null,"0ec1ca0e",null);e["default"]=s.exports},"33a2":function(t,e,n){"use strict";n.r(e);var i=n("ccc0"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a},"727c":function(t,e,n){"use strict";var i=n("8589"),o=n.n(i);o.a},8589:function(t,e,n){},bbdf:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,Number(110));t.$mp.data=Object.assign({},{$root:{m0:n}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},ccc0:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a")),o=n("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function p(t,e,n,i,o,r,p){try{var s=t[r](p),a=s.value}catch(c){return void n(c)}s.done?e(a):Promise.resolve(a).then(i,o)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var r=t.apply(e,n);function s(t){p(r,i,o,s,a,"next",t)}function a(t){p(r,i,o,s,a,"throw",t)}s(void 0)})}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(){return n.e("components/page-component/goods/app-goods-banner").then(n.bind(null,"12b6"))},l=function(){return n.e("plugins/pt/components/app-pt-time").then(n.bind(null,"c357"))},h=function(){return n.e("plugins/pt/components/app-price-title-share").then(n.bind(null,"ab72"))},m=function(){return n.e("components/page-component/app-join-member/app-join-member").then(n.bind(null,"40f4"))},f=function(){return n.e("plugins/pt/components/app-merchant-guarantee").then(n.bind(null,"1bf1"))},g=function(){return n.e("components/page-component/goods/app-goods-attr").then(n.bind(null,"9dc1"))},_=function(){return n.e("components/page-component/app-attr/app-attr").then(n.bind(null,"d3c4"))},b=function(){return n.e("plugins/pt/components/app-buttom-button").then(n.bind(null,"e20b"))},v=function(){return n.e("plugins/pt/components/app-pt-attr").then(n.bind(null,"3556"))},w=function(){return n.e("plugins/pt/components/app-participant").then(n.bind(null,"d49f"))},y=function(){return n.e("components/page-component/app-related-suggestion-product/app-related-suggestion-product").then(n.bind(null,"1ce4"))},A=function(){return n.e("components/page-component/goods/app-goods-detail").then(n.bind(null,"5abf"))},O=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/app-quick-navigation/app-quick-navigation")]).then(n.bind(null,"4d92"))},j=function(){return n.e("components/page-component/app-iphonex-bottom/app-iphonex-bottom").then(n.bind(null,"bc3b"))},I=function(){return n.e("components/basic-component/app-iphone-x/app-iphone-x").then(n.bind(null,"7598"))},q=function(){return n.e("components/basic-component/app-empty-bottom/app-empty-bottom").then(n.bind(null,"0c06"))},k=function(){return n.e("components/page-component/goods/app-goods-service").then(n.bind(null,"311c"))},P=function(){return n.e("components/page-component/app-vip-card/app-vip-card").then(n.bind(null,"19f0"))},$=function(){return n.e("components/page-component/goods/app-goods-marketing").then(n.bind(null,"1143"))},x={name:"goods",data:function(){return{goods_id:0,item:{name:"",pintuan_groups:[]},url:"",isCart:!1,selectAttr:{},show:0,pt:!1,selectGroupAttrId:0,pintuan_list:[],list:[],appAttr:{},cartShow:!1,price:"",time:null,day:"00",hour:"00",minute:"00",second:"00",is_vip_card_user:0,discount:null,is_vip:!1,loading:!1}},computed:c({},(0,o.mapState)("gConfig",{iphone:function(t){return t.iphone},iphoneHeight:function(t){return t.iphoneHeight}}),{},(0,o.mapState)({mall:function(t){return t.mallConfig.mall}})),onLoad:function(t){var e=this;this.goods_id=t.goods_id,this.$request({url:this.$api.goods.new_recommend}).then(function(t){0===t.code&&(e.list=t.data.list)}),this.$nextTick(function(){e.request(0).then(function(){e.selectGroupAttrId=e.item.pintuan_groups[0].id,e.getTime(e.item.pintuanGoods.end_time)})})},onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/pt/goods/goods",title:this.item.app_share_title?this.item.app_share_title:this.item.name,imageUrl:this.item.app_share_pic?this.item.app_share_pic:"",params:{goods_id:this.item.id}})},methods:{attr:function(t){this.appAttr=t},attrTap:function(t){null!==t?(this.selectAttr=t,this.price=t.price):this.selectAttr={}},request:function(){var e=s(i.default.mark(function e(n){var o;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.showLoading({title:"加载中"}),e.next=4,this.$request({url:this.$api.pt.detail,data:{id:this.goods_id,group_id:n}});case 4:o=e.sent,t.hideLoading(),0===o.code&&(this.item=o.data.detail,this.pintuan_list=o.data.pintuan_list,this.url="".concat(this.$api.pt.poster,"&goods_id=").concat(this.item.id),this.price=o.data.detail.price,this.item.vip_card_appoint.discount>0&&(this.is_vip=!0,this.discount=this.item.vip_card_appoint.discount),this.is_vip_card_user=this.item.vip_card_appoint.is_vip_card_user,this.loading=!0),e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](0),t.hideLoading(),new Error(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,9]])}));function n(t){return e.apply(this,arguments)}return n}(),shop:function(e){if("none"===this.appAttr.display)!1===e?(this.pt=!1,this.request(0)):(this.pt=!0,this.request(this.selectGroupAttrId)),this.show=Math.random();else if(!1===e&&!0===this.pt)this.pt=!1,this.selectAttr={},this.request(0);else if(!0===e&&!1===this.pt)this.pt=!0,this.selectAttr={},this.request(this.selectGroupAttrId);else if(!1===e&&!1===this.pt)this.buy();else if(!0===e&&!0===this.pt)if(0===Object.keys(this.selectAttr).length)t.showToast({title:"请选择规格",icon:"none"});else{for(var n=this.item.mch_id,i=[],o={id:this.item.id,attr:[],num:this.appAttr.number,goods_attr_id:this.selectAttr.id,cart_id:0},r=0;r<this.selectAttr.attr_list.length;r++){var p={attr_id:this.selectAttr.attr_list[r].attr_id,attr_group_id:this.selectAttr.attr_list[r].attr_group_id};o.attr.push(p)}i.push({mch_id:n,pintuan_order_id:0,pintuan_group_id:this.selectGroupAttrId,goods_list:[o]}),this.$jump({open_type:"navigate",url:"/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify(i),"&preview_url=").concat(encodeURIComponent(this.$api.pt.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.pt.order_submit),"&order_page_url=/plugins/pt/order/order&plugin=pt")})}},setGroupAttrID:function(t){this.selectGroupAttrId=t,this.selectAttr={},this.request(t)},defaultRequest:function(){this.pt=!0,this.request(this.selectGroupAttrId)},buy:function(){if(!this.submit())return!1;if(0!==Object.keys(this.selectAttr).length){var e=this.item,n=this.appAttr.number,i=this.selectAttr,o=i.id,r=[];for(var p in i.attr_list)r.push({attr_id:i.attr_list[p].attr_id,attr_group_id:i.attr_list[p].attr_group_id});var s=[],a={mch_id:e.mch_id?e.mch_id:0,goods_list:[]};a.goods_list.push({id:e.id,attr:r,num:n,cat_id:0,goods_attr_id:o}),s.push(a),t.navigateTo({url:"/pages/order-submit/order-submit?mch_list="+JSON.stringify(s)})}else t.showToast({title:"请选择规格",icon:"none"})},submit:function(){var e=this.item,n=this.appAttr.number,i=this.selectAttr;return i?n<=0?(t.showModal({title:"提示",content:"商品数量不能为0",showCancel:!1}),!1):!!e:(t.showModal({title:"提示",content:"请先选择规格",showCancel:!1}),!1)},getTime:function(t){var e=this,n=new Date(t.replace(/-/g,"/"));this.time=setInterval(function(){var t=new Date,i=n.getTime()-t.getTime(),o=parseInt(i/36e5/24),r=parseInt(i/1e3/60/60%24),p=parseInt(i/1e3/60%60),s=parseInt(i/1e3%60);e.day=o<10?"0".concat(o):o,e.hour=r<10?"0".concat(r):r,e.minute=p<10?"0".concat(p):p,e.second=s<10?"0".concat(s):s},1e3)}},components:{"app-goods-banner":d,"app-pt-time":l,"app-price-title-share":h,"app-join-member":m,"app-merchant-guarantee":f,"app-goods-attr":g,"app-attr":_,"app-button-button":b,"app-pt-attr":v,"app-participant":w,"app-related-suggestion-product":y,"app-goods-detail":A,"app-quick-navigation":O,"app-iphone-bottom":j,"app-iphone-x":I,"app-empty-bottom":q,"app-goods-service":k,"app-vip-card":P,"app-goods-marketing":$},onShow:function(){},onHide:function(){clearInterval(this.time)},onUnload:function(){clearInterval(this.time)}};e.default=x}).call(this,n("c11b")["default"])}},[["b954","common/runtime","common/vendor"]]]);