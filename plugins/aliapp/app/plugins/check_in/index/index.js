(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/check_in/index/index"],{"2d02":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},5762:function(e,t,n){"use strict";var i=n("f52d"),a=n.n(i);a.a},afd2:function(e,t,n){"use strict";n.r(t);var i=n("f302"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},f302:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-layout/app-layout")]).then(n.bind(null,"0b17"))},s=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-form-id/app-form-id")]).then(n.bind(null,"8ee9"))},u={data:function(){return{month:1,year:1990,everyday:[],config:[],user:{},result:{},now:1,noday:["","","","","","","",""],week:1,date:[],getRed:!1,customize:null,page_loading:!0,template_message:!1,success:!1}},components:{"app-layout":c,"app-form-id":s},computed:o({},(0,i.mapState)({theme:function(e){return e.mallConfig.theme},userInfo:function(e){return e.user.info},mallImg:function(e){return e.mallConfig.__wxapp_img.mall},checkImg:function(e){return e.mallConfig.plugin.check_in}})),methods:{toRules:function(){e.navigateTo({url:"/plugins/check_in/rules/rules"})},toIndex:function(){e.redirectTo({url:"/pages/index/index"})},getSetting:function(){var t=this;t.$request({url:t.$api.check_in.customize}).then(function(n){0==n.code?(t.customize=n.data.list,t.getList()):(t.$hideLoading(),e.showToast({title:n.msg,icon:"none",duration:1e3}))}).catch(function(e){t.$hideLoading()})},getList:function(){var t=this;t.$request({url:t.$api.check_in.index}).then(function(n){t.$hideLoading(),0==n.code?(t.config=n.data.config,t.user=n.data.check_in_user,t.template_message=n.data.template_message,t.getEveryday()):e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},getEveryday:function(){var e=this,t=e.month,n=e.year,i=32,a=[];t<8&&t%2==0&&2!=t?i=31:t>7&&t%2==1?i=31:2==t&&(i=n%4==0&&n%100!=0?30:29);for(var o=1;o<i;o++)a.push({date:o});for(var r=e.noday,c=e.week,s=0;s<c;s++)a.unshift(r[s]);if(a.length%7!=0)for(var u=7-a.length%7,d=0;d<u;d++)a.push(r[d]);e.everyday=a,e.getDay(t)},getDay:function(t){var n=this;n.$request({url:n.$api.check_in.sign_in_day,data:{month:t}}).then(function(t){if(n.$hideLoading(),0==t.code){for(var i=t.data.check_in_day,a=0;a<n.everyday.length;a++)i.indexOf(n.everyday[a].date)>-1&&(n.everyday[a].check=!0);n.$forceUpdate()}else e.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(e){n.$hideLoading()})},lose:function(){var e=this.month-1,t=this.year,n=this.now;e<1&&(e=12,t--);var i=t+"-"+e+"-01",a=new Date(Date.parse(i.replace(/-/g,"/")));this.week=a.getDay();var o=new Date,r=o.getFullYear(),c=o.getMonth()+1;n=t==r?e>c?0:e<c?32:o.getDate():t>r?0:32,this.year=t,this.month=e,this.now=n,this.getEveryday()},add:function(){var e=this.month+1,t=this.year,n=this.now;e>12&&(e=1,t++);var i=t+"-"+e+"-01",a=new Date(Date.parse(i.replace(/-/g,"/")));this.week=a.getDay();var o=new Date,r=o.getFullYear(),c=o.getMonth()+1;n=t==r?e>c?0:e<c?32:o.getDate():t>r?0:32,this.year=t,this.month=e,this.now=n,this.getEveryday()},subscribe:function(){var e=this;this.$subscribe(this.template_message).then(function(t){e.getAward(1)}).catch(function(t){e.getAward(1)})},getAward:function(t,n){var i=this;e.showLoading({title:"领取中..."}),i.$request({url:i.$api.check_in.sign_in,data:{status:t,day:n||1}}).then(function(t){if(0==t.code){var n=t.data.queueId,a=t.data.token;i.checkInResult(n,a)}else e.hideLoading(),e.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(a){e.hideLoading(),i.$event.on(i.$const.EVENT_USER_LOGIN).then(function(){i.$store.dispatch("user/info"),i.getAward(t,n)})})},checkInResult:function(t,n){var i=this;i.$request({url:i.$api.check_in.sign_in_result,data:{queueId:t,token:n}}).then(function(a){e.hideLoading(),0==a.code?1==a.data.retry?i.checkInResult(t,n):(i.result=a.data,"integral"==i.result.type?i.success=!0:"balance"==i.result.type&&(i.getRed=!0)):e.showToast({title:a.msg,icon:"none",duration:1e3})}).catch(function(t){e.hideLoading()})},changeSwitch:function(){0==this.user.is_remind&&this.$subscribe(this.template_message)},toSwitch:function(t){var n=this,i=this,a=0;t.detail.value&&(a=1),i.$request({url:i.$api.check_in.user,data:{is_remind:a}}).then(function(t){i.$hideLoading(),0==t.code?n.user.is_remind=a:e.showToast({title:t.msg,icon:"none",duration:1e3})}).catch(function(e){i.$hideLoading()})},close:function(){this.success=!1,this.getRed=!1,this.getList()}},onShareAppMessage:function(){return this.$shareAppMessage({title:"签到",path:"/plugins/check_in/index/index"})},onLoad:function(){var e=this,t=new Date;e.year=t.getFullYear(),e.month=t.getMonth()+1,e.now=t.getDate();var n=e.year+"-"+e.month+"-01",i=new Date(Date.parse(n.replace(/-/g,"/")));e.week=i.getDay(),e.$showLoading({type:"global",text:"加载中..."}),e.getSetting()}};t.default=u}).call(this,n("c11b")["default"])},f4ec:function(e,t,n){"use strict";n.r(t);var i=n("2d02"),a=n("afd2");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("5762");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"0eea2b7a",null);t["default"]=c.exports},f52d:function(e,t,n){}},[["54bf","common/runtime","common/vendor"]]]);