(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/mch/mch/count/count"],{"2a84":function(t,e,a){"use strict";a.r(e);var n=a("df4c"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=r.a},5381:function(t,e,a){"use strict";a.r(e);var n=a("f1ef"),r=a("2a84");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("5e86");var o=a("2877"),c=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"283e61d0",null);e["default"]=c.exports},"5e86":function(t,e,a){"use strict";var n=a("8443"),r=a.n(n);r.a},8443:function(t,e,a){},df4c:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r=i(a("a9cc"));function i(t){return t&&t.__esModule?t:{default:t}}var o=null,c={name:"count",components:{},data:function(){return{contrast_prev_monthly:"",monthly_order_pay_price_average:"",monthly_order_pay_price_count:"",mch_id:0,options:[],year_str:"",month_str:"",year_list:null,scrollId:null,year_index:0,index:0,cWidth:"",cHeight:"",pixelRatio:1,serverData:""}},onLoad:function(e){this.mch_id=e.mch_id,this.getYear(),n=this,t.getSystemInfo({success:function(t){t.pixelRatio>1&&(n.pixelRatio=2)}}),this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500)},methods:{showColumn:function(t,e){o=new r.default({$this:n,canvasId:t,type:"line",background:"#FFFFFF",animation:!0,dataPointShape:!1,pixelRatio:n.pixelRatio,categories:e.categories,series:e.series,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,legend:!0,xAxis:{disabled:!0,axisLine:!1,disableGrid:!0},yAxis:{format:function(t){return t}},dataLabel:!1,extra:{line:{type:"curve",width:"4rpx"}}})},changeData:function(){o.updateData({series:n.serverData.ColumnB.series,categories:n.serverData.ColumnB.categories})},getYear:function(){var t=this,e=this;e.$showLoading(),e.$request({url:e.$api.mch.year_list}).then(function(a){if(e.$hideLoading(),0===a.code){var n,r,i,o=a.data.year_list;o.map(function(t,e){t.month_list.map(function(t,a){t.active&&(n=e.toString()+a.toString(),r=o[e].year,i=o[e].month_list[a].month)})});var c=[o,n,r,i];e.year_list=c[0],e.scrollId=c[1],e.year_str=c[2],e.month_str=c[3],t.loadData()}})},loadData:function(){var t=this;t.$request({url:t.$api.mch.statistic,data:{mch_id:t.mch_id,monthly:t.month_str,year:t.year_str}}).then(function(e){if(0===e.code){var a={categories:e.data.trend_arr,series:[{name:"日成交额",data:e.data.trend_arr,color:"#fa6855"}]};t.showColumn("canvasColumn",a);var n=[e.data.contrast_prev_monthly,e.data.monthly_order_pay_price_average,e.data.monthly_order_pay_price_count];t.contrast_prev_monthly=n[0],t.monthly_order_pay_price_average=n[1],t.monthly_order_pay_price_count=n[2]}})},switchTaps:function(t,e){var a=this,n=a.year_list;n.forEach(function(a,n){a.active=n==t,a.month_list.forEach(function(a,r){a.active=n==t&&r==e})});var r=a.scrollId;e>=2||0==t?r=t.toString()+(e-2).toString():(console.log(13),r=(t-1).toString()+(e+10).toString());var i=[t,n,e,r,n[t].year,n[t].month_list[e].month];a.index=i[0],a.year_list=i[1],a.year_index=i[2],a.scrollId=i[3],a.year_str=i[4],a.month_str=i[5],a.loadData()}}};e.default=c}).call(this,a("c11b")["default"])},f1ef:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})}},[["3111","common/runtime","common/vendor"]]]);