;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/page-component/app-good-shop-recommendation/app-good-shop-recommendation"],{"1b71":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},"38a5":function(t,e,n){"use strict";n.r(e);var o=n("5175"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},"3da2":function(t,e,n){"use strict";n.r(e);var o=n("1b71"),r=n("38a5");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("48c1");var c=n("2877"),i=Object(c["a"])(r["default"],o["a"],o["b"],!1,null,"938f9d38",null);e["default"]=i.exports},"48c1":function(t,e,n){"use strict";var o=n("f085"),r=n.n(o);r.a},5175:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={name:"app-good-shop-recommendation",props:{list:{type:Array,default:function(){return[]}},showGoods:{type:Boolean,default:function(){return!1}},cardStyle:{type:String,default:function(){return 1}},type:{type:String,default:function(){return"mch"}},backgroundColor:{type:String,default:function(){return"#fff"}}},computed:u({},(0,o.mapGetters)("mallConfig",{getVideo:"getVideo"})),methods:{jump:function(t){this.$jump({url:"/plugins/mch/shop/shop?mch_id=".concat(t),open_type:"navigate"})},router_jump:function(e,n){e.goodsWarehouse.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id,"&sign=mch")}):t.navigateTo({url:"/plugins/mch/goods/goods?id=".concat(e.id,"&mch_id=").concat(n)})}}};e.default=i}).call(this,n("c11b")["default"])},f085:function(t,e,n){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/page-component/app-good-shop-recommendation/app-good-shop-recommendation-create-component',
    {
        'components/page-component/app-good-shop-recommendation/app-good-shop-recommendation-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("3da2"))
        })
    },
    [['components/page-component/app-good-shop-recommendation/app-good-shop-recommendation-create-component']]
]);                