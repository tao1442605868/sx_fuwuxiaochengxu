(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/article/article-detail/article-detail"],{"144d":function(t,e,n){"use strict";n.r(e);var i=n("6859"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},2603:function(t,e,n){"use strict";var i=n("b4e4"),r=n.n(i);r.a},"2d0f":function(t,e,n){"use strict";n.r(e);var i=n("5667"),r=n("144d");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("2603");var o=n("2877"),c=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"989f78f0",null);e["default"]=c.exports},5667:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},6859:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-layout/app-layout")]).then(n.bind(null,"0b17"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-rich/parse")]).then(n.bind(null,"cb0e"))},l={data:function(){return{page:2,loading:!0,list:{content:" "}}},components:{appLayout:c,appRichText:u},computed:a({},(0,i.mapState)({theme:function(t){return t.mallConfig.theme}})),methods:{getList:function(){var e=this;this.$request({url:e.$api.article.detail,data:{article_id:e.id}}).then(function(n){e.$hideLoading(),0==n.code&&(e.loading=!1,e.list=n.data.article,t.setNavigationBarTitle({title:e.list.title}))}).catch(function(t){e.$hideLoading()})}},onLoad:function(t){this.$showLoading({type:"global",text:"加载中..."}),this.id=t.id,this.getList(),this.$store.dispatch("gConfig/setImageWidth",48)},onShareAppMessage:function(){return this.$shareAppMessage({title:this.list.title,path:"/pages/article/article-detail/article-detail",params:{id:this.id}})}};e.default=l}).call(this,n("c11b")["default"])},b4e4:function(t,e,n){}},[["d706","common/runtime","common/vendor"]]]);