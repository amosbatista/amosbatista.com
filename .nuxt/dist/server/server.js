module.exports=function(t){var e={},n={0:0};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(e){if(0!==n[e]){var r=require("./"+{1:"18c658595b515434f44a",2:"68a149041861c17f0be9",3:"285c6e894f9e79c2d451",4:"c01390cc5ee041143a4d",5:"88e400e0ccbed2c4e38c",6:"1093f891372e416f9169",7:"21ba0e7773e6aba21991",8:"ae6bbc2c2c7fb98ff2b3",9:"13d69ebca7867487b36d",10:"46f5958a7417640fcdc4",11:"e3545498610b03d0939b"}[e]+".js"),o=r.modules,c=r.ids;for(var l in o)t[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="/_nuxt/",r.oe=function(t){process.nextTick(function(){throw t})},r(r.s=11)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function r(t,e,n,r,o,c,l,d){var f,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),r&&(h.functional=!0),c&&(h._scopeId="data-v-"+c),l?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},h._ssrRegister=f):o&&(f=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(h.functional){h._injectStyles=f;var m=h.render;h.render=function(t,e){return f.call(e),m(t,e)}}else{var x=h.beforeCreate;h.beforeCreate=x?[].concat(x,f):[f]}return{exports:t,options:h}}n.d(e,"a",function(){return r})},function(t,e,n){var content=n(13);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(6).default;t.exports.__inject__=function(t){r("b675d82e",content,!0,t)}},function(t,e,n){var content=n(15);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(6).default;t.exports.__inject__=function(t){r("17cfdfa9",content,!0,t)}},function(t,e){t.exports=require("vue-router")},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var r=(c=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),o=n.sources.map(function(source){return"/*# sourceURL="+n.sourceRoot+source+" */"});return[content].concat(o).concat([r]).join("\n")}var c;return[content].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+content+"}":content}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var c=t[i];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},function(t,e,n){"use strict";function r(t,e,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return o(r._styles)}}),r._renderStyles=o);var c=r._styles||(r._styles={});e=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],c=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}(t,e),n?function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r],c=o.media||"default",style=t[c];style?style.ids.indexOf(o.id)<0&&(style.ids.push(o.id),style.css+="\n"+o.css):t[c]={ids:[o.id],css:o.css,media:o.media}}}(c,e):function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r];t[o.id]={ids:[o.id],css:o.css,media:o.media}}}(c,e)}}function o(t){var e="";for(var n in t){var style=t[n];e+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return e}n.r(e),n.d(e,"default",function(){return r})},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e){t.exports=require("vue-no-ssr")},function(t,e,n){t.exports=n(16)},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(0),c=n.n(o),l=n(8),d=n.n(l);var f={};function h(t){return t.then(t=>t.default||t)}function m(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function x(t,e=!1){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).map(r=>(e&&e.push(n),t.components[r]))))}function y(t){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((r,o)=>(t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r),[])))}(t,async(t,e,n,r)=>("function"!=typeof t||t.options||(t=await t()),n.components[r]=m(t),n.components[r])))}async function v(t){if(t)return await y(t),{...t,meta:x(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function _(t,e){t.context||(t.context={isStatic:!1,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,n)=>{if(!e)return;t.context._redirected=!0;let r=typeof path;"number"==typeof e||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=e),e=302),"object"===r&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));let o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&([path,o]=c);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=o?"#"+o:""}(path,n),t.context.next({path:path,status:e}))},t.context.beforeNuxtRender=t=>e.beforeRenderFns.push(t));const[n,r]=await Promise.all([v(e.route),v(e.from)]);e.route&&(t.context.route=n),e.from&&(t.context.from=r),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=Boolean(e.isHMR),t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function w(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():C(t[0],e).then(()=>w(t.slice(1),e))}function C(t,e){let n;return(n=2===t.length?new Promise(n=>{t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function $(t,e){return function(t){const e=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){let path="";const data=n||{},o=r||{},c=o.pretty?S:encodeURIComponent;for(let i=0;i<t.length;i++){const n=t[i];if("string"==typeof n){path+=n;continue}const r=data[n.name||"pathMatch"];let o;if(null==r){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(r)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let t=0;t<r.length;t++){if(o=c(r[t]),!e[i].test(o))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(o)+"`");path+=(0===t?n.prefix:n.delimiter)+o}}else{if(o=n.asterisk?encodeURI(r).replace(/[?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase()):c(r),!e[i].test(o))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+o+'"');path+=n.prefix+o}}return path}}(function(t,e){const n=[];let r=0,o=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=k.exec(t));){const e=l[0],d=l[1],f=l.index;if(path+=t.slice(o,f),o=f+e.length,d){path+=d[1];continue}const h=t[o],m=l[2],x=l[3],y=l[4],v=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const C=null!=m&&null!=h&&h!==m,$="+"===_||"*"===_,k="?"===_||"*"===_,S=l[2]||c,pattern=y||v;n.push({name:x||r++,prefix:m||"",delimiter:S,optional:k,repeat:$,partial:C,asterisk:Boolean(w),pattern:pattern?T(pattern):w?".*":"[^"+j(S)+"]+?"})}o<t.length&&(path+=t.substr(o));path&&n.push(path);return n}(t,e))}const k=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function S(t){return encodeURI(t).replace(/[\/?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function j(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$\/()])/g,"\\$1")}var E=n(9),N=n.n(E),O=n(4),R=n.n(O);const A=()=>h(n.e(8).then(n.bind(null,112))),P=()=>h(n.e(11).then(n.bind(null,111))),M=()=>h(n.e(4).then(n.bind(null,119))),L=()=>h(n.e(5).then(n.bind(null,120))),D=()=>h(n.e(6).then(n.bind(null,113))),U=()=>h(n.e(7).then(n.bind(null,114))),B=()=>h(n.e(9).then(n.bind(null,115))),I=()=>h(n.e(10).then(n.bind(null,116))),F=()=>h(n.e(1).then(n.bind(null,117))),z=()=>h(n.e(2).then(n.bind(null,118))),K=()=>h(n.e(3).then(n.bind(null,110)));c.a.use(R.a);const V=function(t,e,n){let r=!1;return t.matched.length<2&&t.matched.every(t=>!1!==t.components.default.options.scrollToTop)?r={x:0,y:0}:t.matched.some(t=>t.components.default.options.scrollToTop)&&(r={x:0,y:0}),n&&(r=n),new Promise(e=>{window.$nuxt.$once("triggerScroll",()=>{if(t.hash){let e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(r={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var J=n(10),H={...n.n(J).a,name:"NoSsr"},X={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){data.nuxtChild=!0;const r=e,o=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition;let l=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;data.nuxtChildDepth=l;const d=o[l]||c,f={};W.forEach(t=>{void 0!==d[t]&&(f[t]=d[t])});const h={};G.forEach(t=>{"function"==typeof d[t]&&(h[t]=d[t].bind(r))});const m=h.beforeEnter;h.beforeEnter=t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(r,t)};let x=[t("router-view",data)];return n.keepAlive&&(x=[t("keep-alive",{props:n.keepAliveProps},x)]),t("transition",{props:f,on:h},x)}};const W=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],G=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var Q={name:"NuxtError",props:{error:{type:Object,default:null}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}}},Y=n(1);var Z=Object(Y.a)(Q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])},[],!1,function(t){var e=n(12);e.__inject__&&e.__inject__(t)},null,"1d4b8bf0").exports,tt={name:"Nuxt",components:{NuxtChild:X,NuxtError:Z},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||$(this.$route.matched[0].path)(this.$route.params);const[t]=this.$route.matched;if(!t)return this.$route.path;const e=t.components.default;if(e&&e.options){const{options:t}=e;if(t.key)return"function"==typeof t.key?t.key(this.$route):t.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},et={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var nt=Object(Y.a)(et,void 0,void 0,!1,function(t){var e=n(14);e.__inject__&&e.__inject__(t)},null,"6eef4d24").exports;const ot={_default:Object(Y.a)({},function(){var t=this.$createElement;return(this._self._c||t)("Nuxt")},[],!1,null,null,"6315d014").exports};var it={head:{meta:[],link:[],style:[],script:[]},render(t,e){const n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&ot["_"+t]||(t="default"),this.layoutName=t,this.layout=ot["_"+t],this.layout},loadLayout:t=>(t&&ot["_"+t]||(t="default"),Promise.resolve(ot["_"+t]))},components:{NuxtLoading:nt}};c.a.component(H.name,H),c.a.component(X.name,X),c.a.component("NChild",X),c.a.component(tt.name,tt),c.a.use(N.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const st={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function at(t){const e=await new R.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:V,routes:[{path:"/portfolio",component:A,name:"portfolio"},{path:"/services",component:P,name:"services"},{path:"/portfolio/amosBatista",component:M,name:"portfolio-amosBatista"},{path:"/portfolio/cathoApp",component:L,name:"portfolio-cathoApp"},{path:"/portfolio/ehtldashboard",component:D,name:"portfolio-ehtldashboard"},{path:"/portfolio/ehtlexecutivo",component:U,name:"portfolio-ehtlexecutivo"},{path:"/portfolio/kofaxCapture",component:B,name:"portfolio-kofaxCapture"},{path:"/portfolio/masterrow",component:I,name:"portfolio-masterrow"},{path:"/artigo/:slug?",component:F,name:"artigo-slug"},{path:"/caderno1/:slug?",component:z,name:"caderno1-slug"},{path:"/",component:K,name:"index"}],fallback:!1}),n={router:e,nuxt:{defaultTransition:st,transitions:[st],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},st,{name:t}):Object.assign({},st,t):st),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,n.context._errored=Boolean(e),e=e?function(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}(e):null;const r=this.nuxt||this.$options.nuxt;return r.dateErr=Date.now(),r.err=e,t&&(t.nuxt.error=e),e}},...it},r=t?t.next:t=>n.router.push(t);let o;if(t)o=e.resolve(t.url).route;else{const path=function(base,t){let path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(e.options.base);o=e.resolve(path).route}return await _(n,{route:o,next:r,error:n.nuxt.error.bind(n),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t}),t&&t.url&&await new Promise((r,o)=>{e.push(t.url,r,()=>{const o=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,n.context.route=await v(e),n.context.params=e.params||{},n.context.query=e.query||{},o(),r()})})}),{app:n,router:e}}var ut={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};c.a.component(ut.name,ut),c.a.component("NLink",ut),global.fetch||(global.fetch=d.a);const ct=()=>new c.a({render:t=>t("div")}),lt=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(r.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=async t=>{t.redirected=!1,t.next=lt(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],error:null,serverRendered:!0};const{app:e,router:n}=await at(t),r=new c.a(e);t.meta=r.$meta(),t.asyncData={};const o=async()=>{await Promise.all(t.beforeRenderFns.map(e=>C(e,{Components:h,nuxtState:t.nuxt}))),t.rendered=()=>{}},l=async()=>{const n="function"==typeof Z.layout?Z.layout(e.context):Z.layout;return t.nuxt.layout=n||"default",await r.loadLayout(n),r.setLayout(n),await o(),r},d=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),l()),h=x(n.match(t.url));let y=[];if(y=y.map(t=>"function"==typeof t?t:("function"!=typeof f[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),f[t])),await w(y,e.context),t.redirected)return ct();if(t.nuxt.error)return l();let v=h.length?h[0].options.layout:Z.layout;if("function"==typeof v&&(v=v(e.context)),await r.loadLayout(v),t.nuxt.error)return l();if(v=r.setLayout(v),t.nuxt.layout=r.layoutName,y=[],(v=m(v)).options.middleware&&(y=y.concat(v.options.middleware)),h.forEach(t=>{t.options.middleware&&(y=y.concat(t.options.middleware))}),y=y.map(t=>"function"==typeof t?t:("function"!=typeof f[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),f[t])),await w(y,e.context),t.redirected)return ct();if(t.nuxt.error)return l();let _=!0;try{for(const t of h)if("function"==typeof t.options.validate&&!(_=await t.options.validate(e.context)))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),l()}if(!_)return t._generate&&(t.nuxt.serverRendered=!1),d();if(!h.length)return d();const $=await Promise.all(h.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=C(n.options.asyncData,e.context);o.then(e=>(t.asyncData[n.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){const data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(n),e)),r.push(o)}else r.push(null);return n.options.fetch?r.push(n.options.fetch(e.context)):r.push(null),Promise.all(r)}));return t.nuxt.data=$.map(t=>t[0]||{}),t.redirected?ct():t.nuxt.error?l():(await o(),r)}},function(t,e){t.exports=require("axios")},function(t,e){t.exports=require("moment")}]);
//# sourceMappingURL=server.js.map