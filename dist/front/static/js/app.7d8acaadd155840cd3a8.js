webpackJsonp([1],{"+TLq":function(t,e){},"/AhB":function(t,e,s){"use strict";var i={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:t.transition}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[s("div",{staticClass:"weui-mask_transparent"}),t._v(" "),s("div",{staticClass:"weui-toast",style:{position:t.position}},[s("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),s("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]},n=s("/Xao")(i,a,!1,function(t){s("riyc")},null,null);e.a=n.exports},0:function(t,e){},"7mc8":function(t,e){},Ep7Q:function(t,e){},GDDT:function(t,e){},IbBP:function(t,e,s){"use strict";var i={name:"toast",mixins:[s("bxxF").a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vux-toast"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),s("transition",{attrs:{name:t.currentTransition}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[s("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?s("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):s("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]},n=s("/Xao")(i,a,!1,function(t){s("Q3fM")},null,null);e.a=n.exports},KtbQ:function(t,e){},MO5W:function(t,e,s){"use strict";var i={mixins:[s("52AH").a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===this.layout}},[e("transition",{attrs:{name:this.maskTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"weui-mask",style:this.maskStyle,on:{click:this.hide}})]),this._v(" "),e("transition",{attrs:{name:this.dialogTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],class:this.dialogClass,style:this.dialogStyle},[this._t("default")],2)])],1)},staticRenderFns:[]},n={name:"confirm",components:{XDialog:s("/Xao")(i,a,!1,function(t){s("7mc8")},null,null).exports},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{setInputValue:function(t){this.msg=t},setInputFocus:function(){this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vux-confirm"},[s("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?s("div",{staticClass:"weui-dialog__hd"},[s("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showInput?s("div",{staticClass:"vux-prompt",on:{touchstart:function(e){e.preventDefault(),t.setInputFocus(e)}}},[s("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.inputAttrs,!1))]):s("div",{staticClass:"weui-dialog__bd"},[t._t("default",[s("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),s("div",{staticClass:"weui-dialog__ft"},[s("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),s("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])])],1)},staticRenderFns:[]},r=s("/Xao")(n,o,!1,function(t){s("KtbQ")},null,null);e.a=r.exports},NHnr:function(t,e,s){"use strict";function i(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],s=!0,i=0;i<e.length;i++)if(t.indexOf(e[i])>0){s=!1;break}return s}Object.defineProperty(e,"__esModule",{value:!0});s("GDDT");var a=s("XwMK"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},o=s("/Xao")({name:"app",mounted:function(){}},n,!1,function(t){s("+TLq"),s("fR9K")},null,null).exports,r=s("zO6J"),u=s("Xps3"),l={mounted:function(){},name:"tabbar",mixins:[u.b],props:{iconClass:String}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"weui-tabbar"},[this._t("default")],2)},staticRenderFns:[]},d=s("/Xao")(l,c,!1,function(t){s("sNLh")},null,null).exports,h={name:"badge",props:{text:[String,Number]}},p={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["vux-badge",{"vux-badge-dot":void 0===this.text,"vux-badge-single":void 0!==this.text&&1===this.text.toString().length}],domProps:{textContent:this._s(this.text)}})},staticRenderFns:[]},m={name:"tabbar-item",components:{Badge:s("/Xao")(h,p,!1,function(t){s("j4Ko")},null,null).exports},beforeMount:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[u.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():s("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?s("sup",[s("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),s("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]},v={components:{Tabbar:d,TabbarItem:s("/Xao")(m,f,!1,null,null,null).exports},data:function(){return{}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tabbar"},[s("tabbar",{staticClass:"ages-tabbar",staticStyle:{position:"fixed"}},[s("tabbar-item",{attrs:{selected:"Index"===t.$route.name},nativeOn:{click:function(e){t.$router.push({name:"Index"})}}},[s("span",{staticClass:"icon iconfont icon-xinwen",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"label"},slot:"label"},[t._v("新闻")])]),t._v(" "),s("tabbar-item",{attrs:{selected:"Article"===t.$route.name},nativeOn:{click:function(e){t.$router.push({name:"Article"})}}},[s("span",{staticClass:"icon iconfont icon-icon9",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"label"},slot:"label"},[t._v("文章")])]),t._v(" "),s("tabbar-item",{attrs:{selected:"Consult"===t.$route.name},nativeOn:{click:function(e){t.$router.push({name:"Consult"})}}},[s("span",{staticClass:"icon iconfont icon-085shucezhongxin",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"label"},slot:"label"},[t._v("咨询")])]),t._v(" "),s("tabbar-item",{attrs:{selected:"Member"===t.$route.name},nativeOn:{click:function(e){t.$router.push({name:"Member"})}}},[s("span",{staticClass:"icon iconfont icon-me",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("span",{attrs:{slot:"label"},slot:"label"},[t._v("个人中心")])])],1)],1)},staticRenderFns:[]},w=s("/Xao")(v,g,!1,function(t){s("QHbP")},null,null).exports,_=s("3cXf"),x=s.n(_),b=s("Tgqi"),y=s("qibK"),$={name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(y.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(x()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new b.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,s){t.current=s%t.length,t.index=s%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t){this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vux-slider"},[s("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,i){return s("div",{staticClass:"vux-swiper-item",attrs:{"data-index":i},on:{click:function(s){t.clickListItem(e)}}},[s("a",{attrs:{href:"javascript:"}},[s("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?s("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,i){return t.listTwoLoopItem.length>0?s("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":i},on:{click:function(s){t.clickListItem(e)}}},[s("a",{attrs:{href:"javascript:"}},[s("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?s("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return s("a",{attrs:{href:"javascript:"}},[s("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}))])},staticRenderFns:[]},k={components:{Tabbar:w,Swiper:s("/Xao")($,C,!1,function(t){s("Ep7Q")},null,null).exports},data:function(){return{msg:"我是手机",img_list:[{url:"",img:"http://thumb.niutuku.com/960x1/8f/b8/8fb8fb2623afa6336e2be205718f5f0e.jpg",title:""},{url:"",img:"http://thumb.niutuku.com/960x1/94/73/94731f3222b54c0fac39327cec4b438e.jpg",title:""},{url:"",img:"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=e30f83e88ab1cb132a643441bc3d3d2b/94cad1c8a786c917a899ba3ece3d70cf3bc7571b.jpg",title:""},{url:"",img:"http://thumb.niutuku.com/960x1/da/35/da357021b4d95225d374c86f14fec6a8.jpg",title:""}],demo01_index:0}}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"index"}},[s("div",{staticClass:"swiper"},[s("swiper",{attrs:{loop:"",auto:"",list:t.img_list,"aspect-ratio":100/195},model:{value:t.demo01_index,callback:function(e){t.demo01_index=e},expression:"demo01_index"}})],1),t._v("\n  "+t._s(t.msg)+"\n  "),s("Tabbar")],1)},staticRenderFns:[]},P=s("/Xao")(k,E,!1,function(t){s("rIIq")},null,null).exports,S={components:{Tabbar:w},data:function(){return{msg:"文章"}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:""}},[this._v("\n  "+this._s(this.msg)+"\n  "),e("Tabbar")],1)},staticRenderFns:[]},T=s("/Xao")(S,I,!1,null,null,null).exports,H={components:{Tabbar:w},data:function(){return{msg:"个人中心"}}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:""}},[this._v("\n  "+this._s(this.msg)+"\n  "),e("Tabbar")],1)},staticRenderFns:[]},L=s("/Xao")(H,D,!1,null,null,null).exports,M={components:{Tabbar:w},data:function(){return{msg:"咨询"}}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:""}},[this._v("\n  "+this._s(this.msg)+"\n  "),e("Tabbar")],1)},staticRenderFns:[]},B=s("/Xao")(M,R,!1,null,null,null).exports;a.a.use(r.a);var O=new r.a({mode:"history",routes:[{path:"/",name:"Index",component:P},{path:"/Member",name:"Member",component:L},{path:"/Consult",name:"Consult",component:B},{path:"/Article",name:"Article",component:T}]}),X={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:""},on:{click:function(e){t.$router.push("Home")}}},[t._v("\n  "+t._s(t.msg)+"\n")])},staticRenderFns:[]},A=s("/Xao")({data:function(){return{msg:"我是电脑"}}},X,!1,null,null,null).exports,N={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:""}},[this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]},F=s("/Xao")({data:function(){return{msg:"电脑跳转"}}},N,!1,null,null,null).exports;a.a.use(r.a);var V=new r.a({mode:"history",routes:[{path:"/",name:"Index",component:A},{path:"/Home",name:"Home",component:F}]});console.log(i());var j=i()?V:O,q=s("iDdd"),K=s.n(q),U=s("y0Fx"),z=s("9rMa");a.a.use(z.a);var Q=new z.a.Store({state:{},getters:{},mutations:{},actions:{}}),W=s("uKQW"),Z=s.n(W),G=s("/Xao")(Z.a,null,!1,null,null,null).exports,Y=s("Y+8o"),J=s.n(Y),tt=s("/Xao")(J.a,null,!1,null,null,null).exports,et=s("TLVx"),st=s.n(et),it=s("/Xao")(st.a,null,!1,null,null,null).exports,at=s("GLlk"),nt=s.n(at),ot=s("YUt4"),rt=s.n(ot),ut=s("D2x0"),lt=s("izrO"),ct=s("2KYe");K.a.attach(document.body),a.a.use(U.a),a.a.use(Q),a.a.use(G),a.a.use(tt),a.a.use(it),a.a.use(nt.a),a.a.use(rt.a),a.a.use(ct.a),a.a.use(ut.a),a.a.use(lt.a),a.a.config.productionTip=!1,new a.a({el:"#app",metaInfo:{title:"Eltur",titleTemplate:"%s",meta:[{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telephone=no"},{name:"format-detection",content:"email=no"}],htmlAttrs:{lang:"zh",amp:void 0}},router:j,store:Q,template:"<App/>",components:{App:o}})},Q3fM:function(t,e){},QHbP:function(t,e){},TLVx:function(t,e){var s={};s.install=function(t,e){t.prototype.$configs={apiURL:"http://www.eltur.cn",api:{index:"/index"}},t.prototype.$getTime=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,s=new Date(1e3*t),i=s.getFullYear(),a=s.getMonth()+1<10?"0"+(s.getMonth()+1):s.getMonth()+1,n=s.getDate()<10?"0"+s.getDate():s.getDate(),o=s.getHours()<10?"0"+s.getHours():s.getHours(),r=s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes(),u=s.getSeconds()<10?"0"+s.getSeconds():s.getSeconds();return 1===e?o+":"+r+":"+u:2===e?i+"-"+a+"-"+n:3===e?i+"-"+a+"-"+n+"  "+o+":"+r+":"+u:void 0},t.prototype.$delayShowLoading=function(t,e){var s=this;setTimeout(function(){s.$vux.loading.show({text:e})},t)},t.prototype.$delayHideLoading=function(t){var e=this;setTimeout(function(){e.$vux.loading.hide()},t)}},t.exports=s},"Y+8o":function(t,e){var s={};s.install=function(t,e){t.prototype.$isEmptyParam=function(t){return void 0===t||""===t||null===t},t.prototype.$checkLength=function(t,e,s){return e=void 0!==e?e:0,t.length<parseInt(e)?"最少需要"+e+"个字符":void 0!==e&&t.length>parseInt(s)&&"最多可以输入"+s+"个字符"},t.prototype.$checkMobileFormat=function(t){return/^1\d{10}$/.test(t)},t.prototype.$isEmail=function(t){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(t)},t.prototype.$isWechat=function(){return-1!==window.navigator.userAgent.toLowerCase().indexOf("micromessenger")},t.prototype.$isBankCard=function(t){return/^([1-9]{1})(\d{14}|\d{18})$/.test(t)}},t.exports=s},fR9K:function(t,e){},j4Ko:function(t,e){},rIIq:function(t,e){},riyc:function(t,e){},sNLh:function(t,e){},uKQW:function(t,e){var s={};s.install=function(t,e){t.prototype.$getData=function(t,e,s){var i=this;if(void 0===t)return this.$vux.toast.show({text:"数据错误",type:"cancel"}),!1;this.$isEmptyParam(e)&&(e=""),this.$http.get(this.$configs.apiURL+t+e).then(function(t){console.log(t),i.$isEmptyParam(t)||i.$isEmptyParam(t.data)||i.$isEmptyParam(t.data.responseHeader)||i.$isEmptyParam(t.data.responseHeader.returnCode)||0!==t.data.responseHeader.returnCode||(i.$isEmptyParam(t.data.responseData)?s(!0):s(t.data.responseData))}).catch(function(t){i.$isEmptyParam(t)||i.$isEmptyParam(t.data)||i.$isEmptyParam(t.data.responseHeader)||i.$isEmptyParam(t.data.responseHeader.returnCode)||0!==t.data.responseHeader.returnCode?i.$vux.toast.show({text:"出错了",type:"cancel"}):i.$isEmptyParam(t.data.responseData)?s(!0):s(t.data.responseData)})},t.prototype.$postData=function(t,e,s){var i=this;if(this.$isEmptyParam(t))return this.$vux.toast.show({text:this.$t("error.http_request_url_error"),type:"cancel"}),!1;this.$http.post(this.$configs.apiURL+t,e).then(function(t){var e=t.data.responseHeader;if(0===e.returnCode||i.$isEmptyParam(e.message))i.$isEmptyParam(t)||i.$isEmptyParam(t.data)||i.$isEmptyParam(t.data.responseHeader)||i.$isEmptyParam(t.data.responseHeader.returnCode)||0!==t.data.responseHeader.returnCode||(i.$isEmptyParam(t.data.responseData)?s(!0):s(t.data.responseData));else{var a=e.message.split(":")[1];i.$vux.toast.text(a)}}).catch(function(t){this.$isEmptyParam(t.data.responseData)?s(!0):s(t.data.responseData);var e=this.$t("error.http_request_error");this.$isEmptyParam(t)||this.$isEmptyParam(t.data)||this.$isEmptyParam(t.data.responseHeader)||this.$isEmptyParam(t.data.responseHeader.message)||(e=t.data.responseHeader.message),this.$vux.toast.show({text:e,type:"cancel"})})},t.prototype.$putData=function(t,e,s){var i=this;if(this.$isEmptyParam(t))return this.$vux.toast.show({text:this.$t("error.http_request_url_error"),type:"cancel"}),!1;this.$http.put(this.$configs.apiURL+t,e).then(function(t){i.$isEmptyParam(t)||i.$isEmptyParam(t.data)||i.$isEmptyParam(t.data.responseHeader)||i.$isEmptyParam(t.data.responseHeader.returnCode)||0!==t.data.responseHeader.returnCode||(i.$isEmptyParam(t.data.responseData)?s(!0):s(t.data.responseData))}).catch(function(t){var e=this.$t("error.http_request_error");this.$isEmptyParam(t)||this.$isEmptyParam(t.data)||this.$isEmptyParam(t.data.responseHeader)||this.$isEmptyParam(t.data.responseHeader.message)||(e=t.data.responseHeader.message),this.$vux.toast.show({text:e,type:"cancel"})})},t.prototype.$deleteData=function(t,e,s){var i=this;if(this.$isEmptyParam(t))return this.$vux.toast.show({text:this.$t("error.http_request_url_error"),type:"cancel"}),!1;this.$isEmptyParam(e)&&(e=""),this.$http.delete(this.$configs.apiURL+t+e).then(function(t){i.$isEmptyParam(t)||i.$isEmptyParam(t.data)||i.$isEmptyParam(t.data.responseHeader)||i.$isEmptyParam(t.data.responseHeader.returnCode)||0!==t.data.responseHeader.returnCode||(i.$isEmptyParam(t.data.responseData)?s(!0):s(t.data.responseData))}).catch(function(t){var e=this.$t("error.http_request_error");this.$isEmptyParam(t)||this.$isEmptyParam(t.data)||this.$isEmptyParam(t.data.responseHeader)||this.$isEmptyParam(t.data.responseHeader.message)||(e=t.data.responseHeader.message),this.$vux.toast.show({text:e,type:"cancel"})})}},t.exports=s}},["NHnr"]);
//# sourceMappingURL=app.7d8acaadd155840cd3a8.js.map