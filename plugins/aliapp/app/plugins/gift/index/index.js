(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/gift/index/index"],{"6efe":function(t,i,e){"use strict";var n=e("7051"),s=e.n(n);s.a},7051:function(t,i,e){},"76f5":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e("a34a")),s=e("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function r(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,n)}return e}function a(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?r(e,!0).forEach(function(i){u(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(e).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function u(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function c(t,i,e,n,s,o,r){try{var a=t[o](r),u=a.value}catch(c){return void e(c)}a.done?i(u):Promise.resolve(u).then(n,s)}function h(t){return function(){var i=this,e=arguments;return new Promise(function(n,s){var o=t.apply(i,e);function r(t){c(o,n,s,r,a,"next",t)}function a(t){c(o,n,s,r,a,"throw",t)}r(void 0)})}}var f=function(){return e.e("plugins/gift/components/index/pick-gift").then(e.bind(null,"6e04"))},l=function(){return e.e("plugins/gift/components/index/gift-method").then(e.bind(null,"c660"))},d=function(){return e.e("plugins/gift/components/index/blessing-message").then(e.bind(null,"0474"))},p=function(){return Promise.all([e.e("common/vendor"),e.e("plugins/gift/components/index/generate-package")]).then(e.bind(null,"8158"))},g=function(){return e.e("plugins/gift/components/announcement/gift-navigation").then(e.bind(null,"aaa8"))},_=function(){return e.e("components/basic-component/app-empty-bottom/app-empty-bottom").then(e.bind(null,"0c06"))},m=function(){return e.e("plugins/gift/components/index/get-right-now").then(e.bind(null,"dc75"))},b=function(){return e.e("plugins/gift/components/index/voice").then(e.bind(null,"dac0"))},v={name:"index",data:function(){return{gift_list:[],totalPrice:0,method_type:"direct_open",open_type:0,open_num:null,select_str:"",open_time:"",bless_word:"",config:{},is_gift:!1,gift_id:-1,turn_no:"",gift:{},currentRoute:this.$platDiff.route(),navBool:!1,new_open_type:"",src:"",innerAudioContext:"",is_play:!1,audio:{},recorderManager:null,music_play:!1,bless_music:"",voice_i:0,voice_time:-1}},onLoad:function(i){var e=this;if(this.$user.isLogin()){if(i.gift_id&&i.user_id)this.is_gift=!0,this.gift_id=i.gift_id,this.turn_no=i.turn_no,this.getGift(this.gift_id);else if(i.pay_data){var n=JSON.parse(i.pay_data).gift_id;this.$request({url:this.$api.gift.cancel,data:{gift_id:n}})}}else this.$user.getInfo().then(function(){i.gift_id&&i.user_id&&(e.gift_id=i.gift_id,e.is_gift=!0,e.turn_no=i.turn_no,e.getGift(e.gift_id))});this.request();var s=this;this.recorderManager=t.getRecorderManager({duration:3e4}),this.innerAudioContext=t.createInnerAudioContext(),this.innerAudioContext.onEnded(function(t){s.is_play=!1,s.music_play=!1}),this.innerAudioContext.onStop(function(){}),this.innerAudioContext.autoplay=!0,this.recorderManager.onStop(function(i){t.uploadFile({url:s.$api.upload.file,filePath:i.tempFilePath,name:"file",fileType:"audio",formData:{file:i.tempFilePath,file_name:""},success:function(t){var i=JSON.parse(t.data),e=(i.code,i.data);s.bless_music=e.url}}),s.audio=i})},onShow:function(){this.gift_list=this.$storage.getStorageSync("GIFT_CART");for(var t=0;t<this.gift_list.length;t++)this.gift_list[t].total_cost=parseFloat((this.gift_list[t].number*this.gift_list[t].price).toFixed(2))},onUnload:function(){this.innerAudioContext&&(this.music_play=!1,this.is_play=!1,this.innerAudioContext.stop())},onHide:function(){this.innerAudioContext&&(this.music_play=!1,this.is_play=!1,this.innerAudioContext.stop())},onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/gift/index/index",title:this.config.ask_gift})},methods:{request:function(){var i=h(n.default.mark(function i(){var e;return n.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:return this.$utils.showLoading(),i.prev=1,i.next=4,this.$request({url:this.$api.gift.config,method:"get"});case 4:e=i.sent,this.$utils.hideLoading(),0===e.code?(this.config=e.data,t.setNavigationBarTitle({title:e.data.title}),this.$store.commit("gift/setTheme",Number(e.data.theme.id)),this.$store.commit("gift/setGiftPic",e.data.big_gift_pic),this.method_type=this.config.type[0]):t.showModal({title:"提示",content:e.msg}),i.next=13;break;case 9:throw i.prev=9,i.t0=i["catch"](1),this.$utils.hideLoading(),new Error(i.t0);case 13:case"end":return i.stop()}},i,this,[[1,9]])}));function e(){return i.apply(this,arguments)}return e}(),giftNumber:function(t,i){this.gift_list[t].number+=i,this.changeNumber(t)},giftInput:function(t,i){if(i>=this.gift_list[t].attr.stock){var e=JSON.parse(JSON.stringify(this.gift_list[t]));e.number=this.gift_list[t].attr.stock,this.$set(this.gift_list,t,e),this.changeNumber(t)}else this.$set(this.gift_list[t],"number",i),this.changeNumber(t)},changeNumber:function(t){var i=this.gift_list[t],e=i.number,n=i.price;this.$set(this.gift_list[t],"total_cost",parseFloat((e*n).toFixed(2))),0===this.gift_list[t].number&&this.$delete(this.gift_list,t),this.$storage.setStorageSync("GIFT_CART",this.gift_list)},submit:function(){var i=h(n.default.mark(function i(){var e,s,o,r,a;return n.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:for(this.$utils.showLoading(),e=[{mch_id:0,type:this.method_type,open_num:this.open_num,open_time:this.open_time,bless_word:this.bless_word?this.bless_word:this.config.bless_word,bless_music:this.bless_music,open_type:this.open_type,goods_list:[],remark:"",use_integral:0,user_coupon_id:0}],s=0;s<this.gift_list.length;s++){for(o={id:this.gift_list[s].attr.goods_id,attr:[],num:this.gift_list[s].number,cat_id:0,goods_attr_id:this.gift_list[s].attr.id},r=0;r<this.gift_list[s].attr.attr_list.length;r++)o.attr.push({attr_id:this.gift_list[s].attr.attr_list[r].attr_id,attr_group_id:this.gift_list[s].attr.attr_list[r].attr_group_id});e[0].goods_list.push(o)}a={form_data:JSON.stringify({list:e})},this.$store.commit("gift/setFormData",a),"direct_open"===this.method_type?(delete e[0].open_num,delete e[0].open_time):"time_open"===this.method_type?delete e[0].open_num:"num_open"===this.method_type&&delete e[0].open_time,this.$utils.hideLoading(),t.navigateTo({url:"/pages/order-submit/order-submit?preview_url=".concat(encodeURIComponent(this.$api.gift.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.gift.order_submit),"&pay_data_url=").concat(encodeURIComponent(this.$api.gift.pay_data),"&show_pay_result=false&mch_list=").concat(JSON.stringify(e),"&theme=").concat(this.theme,"&order_page_url=/plugins/gift/share/share&pay_cancel_url=/plugins/gift/index/index")});case 8:case"end":return i.stop()}},i,this)}));function e(){return i.apply(this,arguments)}return e}(),generatePackage:function(){this.submit()},set_methods:function(t){this.method_type=t},set_people_status:function(t){this.open_type=t},change_people:function(t){this.open_num=t},set_lottery_time:function(t,i){this.select_str=t,this.open_time=i},changeTextarea:function(t){this.bless_word=t},pay_data:function(){var i=h(n.default.mark(function i(e){var s,o=this;return n.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,this.$request({url:this.$api.gift.pay_data,method:"post",data:a({},e)});case 3:s=i.sent,0===s.code?s.data.hasOwnProperty("id")?(this.$payment.pay(s.data.id).then(function(){o.$storage.setStorageSync("GIFT_CART",[]),t.redirectTo({url:"/plugins/gift/share/share?gift_id=".concat(s.data.gift_id)})}).catch(function(){}),this.$utils.hideLoading()):setTimeout(function(){o.pay_data(e)},1e3):(this.$utils.hideLoading(),t.showModal({title:"提示",content:s.msg})),i.next=11;break;case 7:throw i.prev=7,i.t0=i["catch"](0),this.$utils.hideLoading(),new Error(i.t0);case 11:case"end":return i.stop()}},i,this,[[0,7]])}));function e(t){return i.apply(this,arguments)}return e}(),setGift:function(t){this.is_gift=t},getGift:function(){var i=h(n.default.mark(function i(e){var s;return n.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:return this.$utils.showLoading(),i.next=3,this.$request({url:this.$api.gift.gift,data:{gift_id:e}});case 3:s=i.sent,0===s.code?(this.gift=s.data,this.wordYun(this.gift.list.bless_word)):t.showModal({title:"提示",content:s.msg}),this.$utils.hideLoading();case 6:case"end":return i.stop()}},i,this)}));function e(t){return i.apply(this,arguments)}return e}(),setNav:function(){for(var t=this.currentRoute,i=0;i<this.tabBarNavs.length;i++)if(t.includes(this.tabBarNavs[i].url.split("?")[0]))return this.navBool=!0;return this.navBool=!1},play:function(t){this.is_play=t,t?(this.innerAudioContext.src=this.audio.tempFilePath,this.innerAudioContext.play()):this.innerAudioContext.stop()},recorder:function(t){var i=this;t?(clearInterval(this.voice_time),this.voice_i=0,this.voice_time=setInterval(function(){i.voice_i++},1e3),this.recorderManager.start()):(this.recorderManager.stop(),clearInterval(this.voice_time))},music:function(t,i){this.music_play=t,t?(this.innerAudioContext.src=i,this.innerAudioContext.play()):this.innerAudioContext.stop()},close:function(){this.is_play=!1,this.innerAudioContext.stop()}},watch:{gift_list:{handler:function(t){this.totalPrice=0;for(var i=0;i<t.length;i++)this.totalPrice+=t[i].total_cost;this.totalPrice=this.totalPrice.toFixed(2)},immediate:!0,deep:!0},tabBarNavs:{handler:function(){this.setNav()},immediate:!0}},computed:a({},(0,s.mapState)("gift",{theme:function(t){return t.theme},big_gift_pic:function(t){return t.big_gift_pic}}),{},(0,s.mapState)({tabBarNavs:function(t){return t.mallConfig.navbar.navs}}),{},(0,s.mapGetters)("iPhoneX",{BotHeight:"getNavHei"})),components:{"pick-gift":f,"gift-method":l,"blessing-message":d,"generate-package":p,"gift-navigation":g,"app-empty-bottom":_,"get-right-now":m,voice:b}};i.default=v}).call(this,e("c11b")["default"])},"98a7":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=(t._self._c,Number(96)),n=Object.keys(t.gift);t._isMounted||(t.e0=function(i){t.voice_i=0}),t.$mp.data=Object.assign({},{$root:{m0:e,g0:n}})},s=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return s})},bbb0:function(t,i,e){"use strict";e.r(i);var n=e("98a7"),s=e("f21a");for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);e("6efe");var r=e("2877"),a=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,null,null);i["default"]=a.exports},f21a:function(t,i,e){"use strict";e.r(i);var n=e("76f5"),s=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=s.a}},[["b4fe","common/runtime","common/vendor"]]]);