(function(t){function e(e){for(var a,i,r=e[0],c=e[1],u=e[2],f=0,d=[];f<r.length;f++)i=r[f],o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("1356"),o=n.n(a);o.a},1356:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=n("bb71");n("da64");a["a"].use(o["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("v-content",[n("v-container",[n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase mr-4"},[n("span",[t._v("Stock")]),n("span",{staticClass:"font-weight-ligth"},[t._v("Trader")])]),n("v-toolbar-items",[n("v-btn",{attrs:{flat:"",to:"/"}},[t._v("Início")]),n("v-btn",{attrs:{flat:"",to:"/portfolio"}},[t._v("Portifólio")]),n("v-btn",{attrs:{flat:"",to:"/stocks"}},[t._v("Ações")])],1),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{flat:""},on:{click:t.endDay}},[t._v("Finalizar o dia")]),n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("Salvar e Continuar")]),n("v-list",[n("v-list-tile",{on:{click:t.saveData}},[n("v-list-tile-title",[t._v("Salvar Dados")])],1),n("v-list-tile",{on:{click:t.loadDataLocal}},[n("v-list-tile-title",[t._v("Carregar Dados")])],1)],1)],1),n("v-layout",{attrs:{"align-center":""}},[n("span",{staticClass:"text-uppercase grey--text text--darken-2"},[t._v("\n              Saldo: "+t._s(t._f("currency")(t.funds))+"\n          ")])])],1)],1)},c=[],u=n("cebc"),l=n("2f62"),f={computed:{funds:function(){return this.$store.getters.funds}},methods:Object(u["a"])({},Object(l["b"])(["randomizeStocks","loadData"]),{endDay:function(){this.randomizeStocks()},saveData:function(){var t=this.$store.getters,e=t.funds,n=t.stockPortfolio,a=t.stocks;this.$http.put("data.json",{funds:e,stockPortfolio:n,stocks:a})},loadDataLocal:function(){this.loadData()}})},d=f,p=n("2877"),v=n("6544"),k=n.n(v),h=n("8336"),m=n("a722"),y=n("8860"),b=n("ba95"),_=n("5d23"),g=n("e449"),S=n("9910"),x=n("71d9"),C=n("2a7f"),q=Object(p["a"])(d,r,c,!1,null,null,null);q.options.__file="Header.vue";var V=q.exports;k()(q,{VBtn:h["a"],VLayout:m["a"],VList:y["a"],VListTile:b["a"],VListTileTitle:_["a"],VMenu:g["a"],VSpacer:S["a"],VToolbar:x["a"],VToolbarItems:C["a"],VToolbarTitle:C["b"]});var w={components:{Header:V},created:function(){this.$store.dispatch("initStocks")}},P=w,j=(n("034f"),n("7496")),O=n("a523"),$=n("549c"),T=Object(p["a"])(P,s,i,!1,null,null,null);T.options.__file="App.vue";var D=T.exports;k()(T,{VApp:j["a"],VContainer:O["a"],VContent:$["a"]});var I=n("cee4");a["a"].use({install:function(t){t.prototype.$http=I["a"].create({baseURL:"https://stock-trader-c435b-default-rtdb.firebaseio.com/"})}});var F=n("8c4f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"display-3 font-weight-light mb-4"},[t._v("Negocie e Consulte suas Ações")]),n("v-sheet",{staticClass:"pa-2 primary",attrs:{elevetion:6}},[n("v-icon",{staticClass:"white--text mr-3"},[t._v("info")]),n("span",{staticClass:"headline white--text font-weight-light"},[t._v("\n        Você pode Salvar & Carregar os Dados\n      ")])],1),n("v-sheet",{staticClass:"pa-2 success darken-1 mt-3",attrs:{elevetion:6}},[n("v-icon",{staticClass:"white--text mr-3"},[t._v("info")]),n("span",{staticClass:"headline white--text font-weight-light"},[t._v('\n        Clique em "Finalizar Dia" para iniciar um novo dia!\n      ')])],1),n("v-divider",{staticClass:"my-4"}),n("p",{staticClass:"display-1"},[n("strong",[t._v("Seu saldo:")]),t._v(t._s(t._f("currency")(t.funds)))])],1)},E=[],M={computed:{funds:function(){return this.$store.getters.funds}}},z=M,Q=n("ce7e6"),A=n("132d"),N=n("8dd9"),B=Object(p["a"])(z,L,E,!1,null,null,null);B.options.__file="Home.vue";var H=B.exports;k()(B,{VDivider:Q["a"],VIcon:A["a"],VSheet:N["a"]});var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.stocks,function(t){return n("Stock",{key:t.id,attrs:{stock:t}})}),1)},R=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{staticClass:"pr-3 pb-3",attrs:{xs12:"",md6:"",lg4:""}},[n("v-card",{staticClass:"blue darken-3 white--text"},[n("v-card-title",{staticClass:"headline"},[n("strong",[t._v(t._s(t.stock.name)+" \n              "),n("small",[t._v("\n                (Preço: "+t._s(t._f("currency")(t.stock.price))+" | Qtde: "+t._s(t.stock.quantity)+")\n              ")])])])],1),n("v-card",[n("v-container",{attrs:{"fill-height":""}},[n("v-text-field",{attrs:{label:"Quantidade",type:"number",error:t.insufficientQuantity||!Number.isInteger(t.quantity)},model:{value:t.quantity,callback:function(e){t.quantity=t._n(e)},expression:"quantity"}}),n("v-btn",{staticClass:"blue darken-3 white--text",attrs:{disabled:t.insufficientQuantity||t.quantity<=0||!Number.isInteger(t.quantity)},on:{click:t.sellStock}},[t._v(t._s(t.insufficientQuantity?"Saldo Insuficiente":"Vender"))])],1)],1)],1)},U=[],W={props:["stock"],data:function(){return{quantity:0}},computed:{insufficientQuantity:function(){return this.quantity>this.stock.quantity}},methods:{sellStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.$store.dispatch("sellStock",t),this.quantity=0}}},K=W,X=n("b0af"),Y=n("12b2"),Z=n("0e8f"),tt=n("2677"),et=Object(p["a"])(K,G,U,!1,null,null,null);et.options.__file="Stock.vue";var nt=et.exports;k()(et,{VBtn:h["a"],VCard:X["a"],VCardTitle:Y["a"],VContainer:O["a"],VFlex:Z["a"],VTextField:tt["a"]});var at={components:{Stock:nt},computed:Object(u["a"])({},Object(l["c"])({stocks:"stockPortfolio"}))},ot=at,st=Object(p["a"])(ot,J,R,!1,null,null,null);st.options.__file="Portfolio.vue";var it=st.exports;k()(st,{VLayout:m["a"]});var rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.stocks,function(t){return n("Stock",{key:t.id,attrs:{stock:t}})}),1)},ct=[],ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{staticClass:"pr-3 pb-3",attrs:{xs12:"",md6:"",lg4:""}},[n("v-card",{staticClass:"green darken-3 white--text"},[n("v-card-title",{staticClass:"headline"},[n("strong",[t._v(t._s(t.stock.name)+" "),n("small",[t._v("(Preço: "+t._s(t._f("currency")(t.stock.price))+")")])])])],1),n("v-card",[n("v-container",{attrs:{"fill-height":""}},[n("v-text-field",{attrs:{label:"Quantidade",type:"number",error:t.insufficientFunds||!Number.isInteger(t.quantity)},model:{value:t.quantity,callback:function(e){t.quantity=t._n(e)},expression:"quantity"}}),n("v-btn",{staticClass:"green darken-3 white--text",attrs:{disabled:t.insufficientFunds||t.quantity<=0||!Number.isInteger(t.quantity)},on:{click:t.buyStock}},[t._v(t._s(t.insufficientFunds?"Saldo insuficiente":"Comprar"))])],1)],1)],1)},lt=[],ft={props:["stock"],data:function(){return{quantity:0}},computed:{funds:function(){return this.$store.getters.funds},insufficientFunds:function(){return this.quantity*this.stock.price>this.funds}},methods:{buyStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.$store.dispatch("buyStock",t),this.quantity=0}}},dt=ft,pt=Object(p["a"])(dt,ut,lt,!1,null,null,null);pt.options.__file="Stock.vue";var vt=pt.exports;k()(pt,{VBtn:h["a"],VCard:X["a"],VCardTitle:Y["a"],VContainer:O["a"],VFlex:Z["a"],VTextField:tt["a"]});var kt={components:{Stock:vt},computed:{stocks:function(){return this.$store.getters.stocks}}},ht=kt,mt=Object(p["a"])(ht,rt,ct,!1,null,null,null);mt.options.__file="Stocks.vue";var yt=mt.exports;k()(mt,{VLayout:m["a"]}),a["a"].use(F["a"]);var bt=new F["a"]({mode:"history",routes:[{path:"/",component:H},{path:"/portfolio",component:it},{path:"/stocks",component:yt}]}),_t={loadData:function(t){var e=t.commit;a["a"].prototype.$http("data.json").then(function(t){var n=t.data;n&&(e("setStocks",n.stocks),e("setPortfolio",{funds:n.funds,stockPortfolio:n.stockPortfolio}))})}},gt=(n("ac6a"),[{id:1,name:"BMW",price:110},{id:2,name:"Google",price:200},{id:3,name:"Apple",price:280},{id:4,name:"Twitter",price:83}]),St={state:{stocks:[]},mutations:{setStocks:function(t,e){t.stocks=e},randomizeStocks:function(t){t.stocks.forEach(function(t){t.price=Math.round(t.price*(1+Math.random()-.45))})}},actions:{buyStock:function(t,e){var n=t.commit;n("buyStock",e)},initStocks:function(t){var e=t.commit;e("setStocks",gt)},randomizeStocks:function(t){var e=t.commit;e("randomizeStocks")}},getters:{stocks:function(t){return t.stocks}}},xt=(n("7f7f"),n("7514"),{state:{funds:1e4,stocks:[]},mutations:{buyStock:function(t,e){var n=e.stockId,a=e.quantity,o=e.stockPrice,s=t.stocks.find(function(t){return t.id==n});s?s.quantity+=a:t.stocks.push({id:n,quantity:a}),t.funds-=o*a},sellStock:function(t,e){var n=e.stockId,a=e.quantity,o=e.stockPrice,s=t.stocks.find(function(t){return t.id==n});s.quantity>a?s.quantity-=a:t.stocks.splice(t.stocks.indexOf(s),1),t.funds+=o*a},setPortfolio:function(t,e){t.funds=e.funds,t.stocks=e.stockPortfolio?e.stockPortfolio:[]}},actions:{sellStock:function(t,e){var n=t.commit;n("sellStock",e)}},getters:{stockPortfolio:function(t,e){return t.stocks.map(function(n){var a=e.stocks.find(function(t){return t.id==n.id});return console.log(t.stocks),{id:n.id,name:a.name,price:a.price,quantity:n.quantity}})},funds:function(t){return t.funds}}});a["a"].use(l["a"]);var Ct=new l["a"].Store({actions:_t,modules:{stocks:St,portfolio:xt}});a["a"].config.productionTip=!1,a["a"].filter("currency",function(t){return"R$ "+t.toLocaleString()}),new a["a"]({router:bt,store:Ct,render:function(t){return t(D)}}).$mount("#app")}});
//# sourceMappingURL=app.b443942d.js.map