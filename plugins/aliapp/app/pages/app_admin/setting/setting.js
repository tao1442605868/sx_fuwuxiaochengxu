(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/app_admin/setting/setting"],{"0601":function(e,t,i){"use strict";var n=i("c1fa"),s=i.n(n);s.a},1618:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(){e.model=!0,e.modelType=0,e.name=e.detail.name},e.e1=function(){e.model=!0,e.modelType=1,e.over_time=e.detail.setting.over_time},e.e2=function(){e.model=!0,e.modelType=2,e.delivery_time=e.detail.setting.delivery_time},e.e3=function(){e.model=!0,e.modelType=3,e.after_sale_time=e.detail.setting.after_sale_time},e.e4=function(){e.model=!0,e.modelType=4,e.payment_type=e.detail.setting.payment_type},e.e5=function(t){e.model=!0,e.modelType=6,e.member_integral=e.detail.setting.member_integral},e.e6=function(t){e.model=!0,e.modelType=7,e.member_integral_rule=e.detail.setting.member_integral_rule},e.e7=function(){e.cancel()})},s=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return s})},"487c":function(e,t,i){"use strict";i.r(t);var n=i("1618"),s=i("f0b7");for(var a in s)"default"!==a&&function(e){i.d(t,e,function(){return s[e]})}(a);i("0601");var l=i("2877"),o=Object(l["a"])(s["default"],n["a"],n["b"],!1,null,"02963194",null);t["default"]=o.exports},"6bc1":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return i.e("components/basic-component/app-switch/app-switch").then(i.bind(null,"61ac"))},s={name:"setting",data:function(){return{detail:{},mail:{},sms:{},model:!1,modelType:0,name:"",over_time:"",delivery_time:"",after_sale_time:"",payment_type:[],online_pay:!1,balance:!1,huodao:!1,send_type:[],express:!1,offline:!1,city:!1,member_integral:"",member_integral_rule:"",iphone_x:!1}},onLoad:function(){var t=this,i=this;e.getSystemInfo({success:function(e){(e.model.indexOf("iPhone X")>-1||e.model.indexOf("iPhone 11")>-1||e.model.indexOf("iPhone11")>-1||e.model.indexOf("iPhone12")>-1||e.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}}),this.$request({url:this.$api.app_admin.setting}).then(function(e){if(0===e.code){t.detail=e.data.detail;var i=t.detail.setting,n=i.over_time,s=i.delivery_time,a=i.after_sale_time,l=i.payment_type,o=i.member_integral,m=i.member_integral_rule;t.over_time=n,t.delivery_time=s,t.after_sale_time=a,t.payment_type=l,t.member_integral=o,t.member_integral_rule=m;for(var d=t.detail.setting.send_type,r=0;r<d.length;r++)"express"===d[r]?t.express=!0:"offline"===d[r]?t.offline=!0:"city"===d[r]&&(t.city=!0);t.name=t.detail.name,t.mail=e.data.mail,t.sms=e.data.sms;for(var u=0;u<l.length;u++)"online_pay"===l[u]?t.online_pay=!0:"huodao"===l[u]?t.huodao=!0:"balance"===l[u]&&(t.balance=!0)}})},methods:{toRedirect:function(t){e.redirectTo({url:t})},setLogo:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){e.uploadFile({url:t.$api.upload.file,filePath:i.tempFilePaths[0],name:"file",success:function(e){t.detail.setting.logo=JSON.parse(e.data).data.url,t.submit()},fail:function(e){}})}})},setSmsStatus:function(){1===this.sms.status?this.sms.status=0:this.sms.status=1,this.submit()},setMailStatus:function(){"1"===this.mail.status?this.mail.status="0":this.mail.status="1",this.submit()},setPay:function(e){this[e]=!this[e],!1===this.balance&&!1===this.huodao&&(this.online_pay=!0)},setSend:function(e){this[e]=!this[e],!1===this.offline&&!1===this.city&&(this.express=!0)},sendTypeHandler:function(){this.model=!0,this.modelType=5},jumpGo:function(){this.$jump({open_type:"navigate",url:"/pages/address/address?manual_btn_bg=#446dfd&is_hide_default_btn=1&is_refund_address=1"})},submit:function(){var e=this,t=this.mail?this.mail.status:null,i=this.sms?this.sms.status:null,n={name:this.detail.name,setting:JSON.stringify(this.detail.setting),mail:t,sms:i};this.$request({url:this.$api.app_admin.setting,method:"post",data:n}).then(function(t){0===t.code&&(e.model=!1)})},cancel:function(){this.model=!1},confirm:function(){this.detail.name=this.name,this.detail.setting.over_time=this.over_time,this.detail.setting.delivery_time=this.delivery_time,this.detail.setting.after_sale_time=this.after_sale_time,this.detail.setting.payment_type=[],this.detail.setting.member_integral=this.member_integral,this.detail.setting.member_integral_rule=this.member_integral_rule,!0===this.online_pay&&this.detail.setting.payment_type.push("online_pay"),!0===this.huodao&&this.detail.setting.payment_type.push("huodao"),!0===this.balance&&this.detail.setting.payment_type.push("balance"),this.detail.setting.send_type=[],!0===this.offline&&this.detail.setting.send_type.push("offline"),!0===this.express&&this.detail.setting.send_type.push("express"),!0===this.city&&this.detail.setting.send_type.push("city"),this.submit()}},components:{"app-switch":n}};t.default=s}).call(this,i("c11b")["default"])},c1fa:function(e,t,i){},f0b7:function(e,t,i){"use strict";i.r(t);var n=i("6bc1"),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=s.a}},[["e191","common/runtime","common/vendor"]]]);