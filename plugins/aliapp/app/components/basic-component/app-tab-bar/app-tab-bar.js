;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/basic-component/app-tab-bar/app-tab-bar"],{"1d56":function(t,e,r){"use strict";r.r(e);var n=r("c8d7"),o=r("ef0f");for(var a in o)"default"!==a&&function(t){r.d(e,t,function(){return o[t]})}(a);r("d5e4");var c=r("2877"),u=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,"49c4c6c8",null);e["default"]=u.exports},c7c6:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("2f62");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(r,!0).forEach(function(e){c(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={data:function(){return{router:""}},props:{pageCount:Number},computed:a({},(0,n.mapGetters)("mallConfig",{tabBarNavs:"getNavBar"}),{},(0,n.mapGetters)("iPhoneX",{botNavHei:"getNavHei"}),{},(0,n.mapState)("mallConfig",{bottom_background_color:function(t){return t.navbar.bottom_background_color},shadow:function(t){return t.navbar.shadow}})),mounted:function(){this.router=this.$platDiff.tabBarUrl(null,this.pageCount)}};e.default=u},c8d7:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return o})},d5e4:function(t,e,r){"use strict";var n=r("fcce"),o=r.n(n);o.a},ef0f:function(t,e,r){"use strict";r.r(e);var n=r("c7c6"),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},fcce:function(t,e,r){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/basic-component/app-tab-bar/app-tab-bar-create-component',
    {
        'components/basic-component/app-tab-bar/app-tab-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("1d56"))
        })
    },
    [['components/basic-component/app-tab-bar/app-tab-bar-create-component']]
]);                
