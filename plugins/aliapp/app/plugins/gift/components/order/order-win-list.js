;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/gift/components/order/order-win-list"],{"25b0":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"order-wind-list",props:["tab_status","theme","order_list"],methods:{setShare:function(t,e,r,n){this.$emit("setShare",{id:t,gift_id:e,bless_word:r,item:n})},routeGo:function(e){t.navigateTo({url:e})},receipt:function(t){this.$emit("receipt",t)},getConvert:function(t){for(var e=!0,r=0;r<t.length;r++)-1==t[r].is_convert&&(e=!1);return e}},filters:{getPicUrl:function(t){var e="[object String]"===Object.prototype.toString.call(t.goods_info)?JSON.parse(t.goods_info).goods_attr:t.goods_info.goods_attr;return e.pic_url?e.pic_url:t.cover_pic}}};e.default=r}).call(this,r("c11b")["default"])},"2f5b":function(t,e,r){"use strict";r.r(e);var n=r("25b0"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"595e":function(t,e,r){"use strict";r.r(e);var n=r("6f70"),i=r("2f5b");for(var o in i)"default"!==o&&function(t){r.d(e,t,function(){return i[t]})}(o);r("fdc3");var u=r("2877"),c=Object(u["a"])(i["default"],n["a"],n["b"],!1,null,"1d2f92f4",null);e["default"]=c.exports},"5d5b":function(t,e,r){},"6f70":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=(t._self._c,t.__map(t.order_list,function(e,r){var n=t.__map(e.detail,function(e,r){var n=t._f("getPicUrl")(e);return{$orig:t.__get_orig(e),f0:n}}),i=t.getConvert(e.detail);return{$orig:t.__get_orig(e),l0:n,m0:i}}));t.$mp.data=Object.assign({},{$root:{l1:r}})},i=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return i})},fdc3:function(t,e,r){"use strict";var n=r("5d5b"),i=r.n(n);i.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'plugins/gift/components/order/order-win-list-create-component',
    {
        'plugins/gift/components/order/order-win-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("595e"))
        })
    },
    [['plugins/gift/components/order/order-win-list-create-component']]
]);                