(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1242:function(t,e,n){"use strict";var l=n(13),r=n(72),v={props:{txs:{type:[Array,Object],default:function(){return[]}},title:{type:String,default:""},subtitle:{type:String,default:""},txName:{type:String,default:""}},computed:Object(l.a)({},Object(r.c)("txHashKeeper",["txExplorerUrl","txHashToRender","txStatusClass"]),{show:function(){return"multisendTxs"===this.txName?this.txs.length>0:this.txs.txHash},multisend:function(){return"multisendTxs"===this.txName}})},c=n(15),component=Object(c.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"token-field"},[t.title?n("div",{staticClass:"title",class:{"is-spaced":t.subtitle}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.subtitle?n("div",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),t.multisend?n("ol",{staticClass:"txs"},t._l(t.txs,function(e){var l=e.txHash,r=e.status;return n("li",{key:l,staticClass:"txs__item",class:t.txStatusClass(r)},[n("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl(t.txName,l),target:"_blank"}},[t._v("\n        "+t._s(t.txHashToRender(t.txName,l))+"\n      ")]),t._v(" "),n("div",{staticClass:"txs__status"})])}),0):n("div",{staticClass:"txs"},[n("div",{staticClass:"txs__item",class:t.txStatusClass(t.txs.status)},[n("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl(t.txName),target:"_blank"}},[t._v("\n        "+t._s(t.txHashToRender(t.txName))+"\n      ")]),t._v(" "),n("div",{staticClass:"txs__status"})])])]):t._e()},[],!1,null,null,null);e.a=component.exports},1378:function(t,e,n){"use strict";n.r(e);var l=n(13),r=n(1242),v=n(72),c={components:{Tx:r.a},data:function(){return{vipValue:0}},computed:Object(l.a)({},Object(v.c)("metamask",["networkConfig"]),Object(v.c)("token",["toDecimals"]),Object(v.d)("distribution",["vipCost"]),Object(v.d)("txHashKeeper",["vipTx"])),methods:Object(l.a)({},Object(v.b)("distribution",["buyVip"]))},_=n(15),component=Object(_.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-container"},[n("div",{staticClass:"crown"}),t._v(" "),n("div",{staticClass:"subtitle"},[n("p",[t._v(t._s(t.$t("vipGives")))]),t._v(" "),n("p",[t._v(t._s(t.$t("payForNetworkFees")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("vipInformation"))+"\n      "),n("a",{attrs:{href:"https://t.me/MultiSender"}},[t._v("t.me/MultiSender")])])]),t._v(" "),n("div",{staticClass:"vip-form"},[n("div",{staticClass:"vip-form__inner"},[n("div",{staticClass:"vip-form__fields"},[n("div",{staticClass:"field"},[n("b-radio",{attrs:{size:"is-medium","native-value":"0"},model:{value:t.vipValue,callback:function(e){t.vipValue=e},expression:"vipValue"}},[n("span",{staticClass:"vip-form__name"},[t._v("\n              1 "+t._s(t.$tc("day",1))+" "),n("span",[t._v("("+t._s(t.$t("unlimited"))+")")])]),t._v(" "),n("span",{staticClass:"vip-form__value"},[t._v("\n              "+t._s(t.toDecimals(t.vipCost[0],18))+" "+t._s(t.networkConfig.currencyName)+"\n            ")])])],1),t._v(" "),n("div",{staticClass:"field"},[n("b-radio",{attrs:{size:"is-medium","native-value":"1"},model:{value:t.vipValue,callback:function(e){t.vipValue=e},expression:"vipValue"}},[n("span",{staticClass:"vip-form__name"},[t._v("\n              7 "+t._s(t.$tc("day",2))+" "),n("span",[t._v("("+t._s(t.$t("unlimited"))+")")])]),t._v(" "),n("span",{staticClass:"vip-form__value"},[t._v("\n              "+t._s(t.toDecimals(t.vipCost[1],18))+" "+t._s(t.networkConfig.currencyName)+"\n            ")])])],1),t._v(" "),n("div",{staticClass:"field"},[n("b-radio",{attrs:{size:"is-medium","native-value":"2"},model:{value:t.vipValue,callback:function(e){t.vipValue=e},expression:"vipValue"}},[n("span",{staticClass:"vip-form__name"},[t._v("\n              "+t._s(t.$t("lifetime"))+" "),n("span",[t._v("("+t._s(t.$t("unlimited"))+")")])]),t._v(" "),n("span",{staticClass:"vip-form__value"},[t._v("\n              "+t._s(t.toDecimals(t.vipCost[2],18))+" "+t._s(t.networkConfig.currencyName)+"\n            ")])])],1)])]),t._v(" "),n("div",{staticClass:"buttons is-centered"},[n("b-button",{attrs:{type:"is-primary"},on:{click:function(e){return t.buyVip({tier:t.vipValue})}}},[t._v("\n        "+t._s(t.$t("vipBuy"))+"\n      ")])],1)]),t._v(" "),n("Tx",{attrs:{txs:t.vipTx,"tx-name":"vipTx",title:t.$t("txVipHash")}})],1)},[],!1,null,null,null);e.default=component.exports}}]);