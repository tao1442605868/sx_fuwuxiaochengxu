;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/page-component/goods/app-price"],{"2a0e":function(t,e,n){"use strict";var u=n("7fb4"),r=n.n(u);r.a},5471:function(t,e,n){"use strict";n.r(e);var u=n("e54f"),r=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=r.a},"6c9f":function(t,e,n){"use strict";n.r(e);var u=n("cb33"),r=n("5471");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("2a0e");var c=n("2877"),f=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,"69366529",null);e["default"]=f.exports},"7fb4":function(t,e,n){},cb33:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return r})},e54f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={props:{max:{type:String,default:function(){return"-1"}},min:{type:String,default:function(){return"-1"}},defaultPrice:{type:String,default:function(){return"-1"}},price:{type:[String,Number],default:function(){return"-1"}},type:{type:String,default:function(){return"text-price"}}},data:function(){return{priceType:this.type}},computed:{actual:function(){var t=-1,e=-1,n=-1,u=-1,r=-1,i=this.type;return"undefined"!=this.price&&(e=Number(this.price)),"undefined"!=this.min&&(n=Number(this.min)),"undefined"!=this.max&&(u=Number(this.max)),"undefined"!=this.defaultPrice&&(r=Number(this.defaultPrice)),e&&e>0?t=e:0==e?(t="免费",i=""):u>n&&n>=0?t=n+"-"+u:u==n&&n>=0?t=n:r>0?t=r:0==r&&(t="免费",i=""),{price:t,type:i}}}};e.default=u}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/page-component/goods/app-price-create-component',
    {
        'components/page-component/goods/app-price-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("6c9f"))
        })
    },
    [['components/page-component/goods/app-price-create-component']]
]);                