(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{153:function(t,e,n){var content=n(156);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("0e6e5938",content,!0,{sourceMap:!1})},154:function(t,e,n){var content=n(158);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("d828d032",content,!0,{sourceMap:!1})},155:function(t,e,n){"use strict";var o=n(153);n.n(o).a},156:function(t,e,n){(e=n(41)(!1)).push([t.i,".triangle[data-v-05cf7af2]{position:absolute;width:0;height:0;border:30px solid transparent;color:#d32f2f;cursor:pointer}.triangle[data-v-05cf7af2]:hover{color:#e07070}.triangle__inner[data-v-05cf7af2]{margin-left:-14px;border:14px solid transparent;color:#fff}",""]),t.exports=e},157:function(t,e,n){"use strict";var o=n(154);n.n(o).a},158:function(t,e,n){(e=n(41)(!1)).push([t.i,".container[data-v-06332c4f]{display:flex;flex-direction:column;min-height:100vh;min-width:100vw;justify-content:center;align-items:center;text-align:center}.page[data-v-06332c4f]{position:absolute;left:0;top:0}",""]),t.exports=e},159:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(27);var o={index:0,profile:1};function r(t,e){return t&&e?o[t.name]>o[e.name]?{name:"slide-up",mode:null}:{name:"slide-down",mode:null}:{}}},160:function(t,e,n){"use strict";var o={props:{down:Boolean,up:Boolean},computed:{innerStyles:function(){return this.up?{"border-bottom":"7px solid","margin-top":"-5px"}:{"border-top":"7px solid","margin-top":"-15px"}},styles:function(){return this.up?{"border-bottom":"15px solid",top:"10px"}:{"border-top":"15px solid #d32f2f",bottom:"10px"}}}},r=(n(155),n(19)),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"triangle",style:t.styles,on:{click:function(e){return t.$emit("click")}}},[n("div",{staticClass:"triangle__inner",style:t.innerStyles})])}),[],!1,null,"05cf7af2",null).exports,l={props:{prev:{type:String,default:null},next:{type:String,default:null}},data:function(){return{touchstartY:null}},components:{NaviArrow:c},methods:{goPrev:function(){this.$router.push({name:this.prev})},goNext:function(){this.$router.push({name:this.next})},wheel:function(t){this.prev&&t.deltaY<0?this.goPrev():this.next&&t.deltaY>0&&this.goNext()},touchstart:function(t){this.touchstartY=t.touches[0].pageY},touchend:function(t){this.wheel({deltaY:this.touchstartY-t.changedTouches[0].pageY})}}},f=(n(157),Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page",on:{"~wheel":function(e){return t.wheel(e)},touchstart:t.touchstart,touchend:t.touchend}},[n("div",{staticClass:"container"},[t.prev?n("navi-arrow",{attrs:{up:"",name:t.prev},on:{click:t.goPrev}}):t._e(),t._v(" "),t._t("default"),t._v(" "),t.next?n("navi-arrow",{attrs:{down:"",name:t.next},on:{click:t.goNext}}):t._e()],2)])}),[],!1,null,"06332c4f",null));e.a=f.exports},161:function(t,e,n){var content=n(167);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("003f25f2",content,!0,{sourceMap:!1})},166:function(t,e,n){"use strict";var o=n(161);n.n(o).a},167:function(t,e,n){(e=n(41)(!1)).push([t.i,".section__title[data-v-65f266ee]{display:block;font-weight:800;font-size:20px;color:#35495e;letter-spacing:1px;padding:10px 0}.section__subtitle[data-v-65f266ee]{display:block;padding:8px 0 0}.section__description[data-v-65f266ee]{padding:3px 0}.section[data-v-65f266ee]{padding:30px 0}",""]),t.exports=e},177:function(t,e,n){"use strict";n.r(e);var o=n(160),r={transition:n(159).a,components:{AppPage:o.a}},c=(n(166),n(19)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",{attrs:{prev:"job"}},[n("section",{staticClass:"section"},[n("h2",{staticClass:"section__title"},[t._v("Contests")]),t._v(" "),n("h3",{staticClass:"section__subtitle"},[t._v("日本情報オリンピック 2013-2014 本選 B ランク")]),t._v(" "),n("h3",{staticClass:"section__subtitle"},[t._v("日本情報オリンピック 2012-2013 本選出場")]),t._v(" "),n("h3",{staticClass:"section__subtitle"},[t._v("SupercomputingContest2013 本戦13位")]),t._v(" "),n("h3",{staticClass:"section__subtitle"},[t._v("パソコン甲子園2014　もう一つの本選 7位")])]),t._v(" "),n("section",{staticClass:"section"},[n("h2",{staticClass:"section__title"},[t._v("Certifications")]),t._v(" "),n("h3",{staticClass:"section__subtitle"},[t._v("情報セキュリティスペシャリスト試験")]),t._v(" "),n("h3",{staticClass:"section__subtitle"},[t._v("応用情報技術者試験")]),t._v(" "),n("h3",{staticClass:"section__subtitle"},[t._v("基本情報技術者試験")])])])}),[],!1,null,"65f266ee",null);e.default=component.exports}}]);