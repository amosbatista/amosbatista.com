(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{144:function(t,e,o){var content=o(158);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("55596896",content,!0,{sourceMap:!1})},145:function(t,e,o){var content=o(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("4be1c2d6",content,!0,{sourceMap:!1})},147:function(t,e,o){"use strict";var r={data:function(){return{whiteColorClass:this.isColorReverted?" white-title":"",fontSizeClass:""}},props:{content:String,isColorReverted:Boolean},created:function(){}},n=(o(157),o(18)),component=Object(n.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-paragraph"},[e("h2",{class:"title-paragraph-h"+this.whiteColorClass},[this._v(this._s(this.content))])])},[],!1,null,null,null);e.a=component.exports},150:function(t,e,o){"use strict";var r={props:["metadata"],head:function(){return"home"==this.metadata.type&&(this.metadata.detailTypes={og:"website",twitter:"summary_large_image"}),"list"==this.metadata.type&&(this.metadata.detailTypes={og:"website",twitter:"summary"}),"post"==this.metadata.type&&(this.metadata.detailTypes={og:"article",twitter:"summary_large_image"}),{title:this.metadata.title,titleTemplate:"%s | amosBatista.com",meta:[{name:"viewport",content:"width=device-width, user-scalable=no"},{property:"fb:app_id",content:"212560042661168"},{property:"og:title",content:this.metadata.title},{property:"og:description",content:this.metadata.description},{property:"og:url",content:"https://amosbatista.com"+this.metadata.url},{property:"og:image",content:this.metadata.thumbnail},{property:"og:type",content:this.metadata.detailTypes.og},{name:"twitter:title",content:this.metadata.title},{name:"twitter:description",content:this.metadata.description},{name:"twitter:url",content:"https://amosbatista.com"+this.metadata.url},{name:"twitter:image",content:this.metadata.thumbnail},{name:"twitter:type",content:this.metadata.detailTypes.twitter}]}}},n=o(18),component=Object(n.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null);e.a=component.exports},154:function(t,e,o){"use strict";var r={head:function(){return{link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Fjalla+One|Source+Serif+Pro:400,700"},{rel:"favicon",href:"~/static/favicon.ico"},{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.0.9/css/all.css",integrity:"sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1",crossorigin:"anonymous"}]}}},n=o(18),component=Object(n.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null);e.a=component.exports},157:function(t,e,o){"use strict";var r=o(144);o.n(r).a},158:function(t,e,o){(t.exports=o(64)(!1)).push([t.i,".title-paragraph{display:flex;justify-content:center;flex-direction:column;height:100%;width:80%;padding-left:20px}.title-paragraph .title-paragraph-h{font-family:Fjalla One,sans-serif;text-transform:uppercase;margin:0;line-height:1;color:#0d0d0d;font-size:200%;word-wrap:break-word}.title-paragraph .white-title{color:#f2f2f2}",""])},163:function(t,e,o){"use strict";o(164)("small",function(t){return function(){return t(this,"small","","")}})},164:function(t,e,o){var r=o(5),n=o(9),l=o(19),c=/"/g,h=function(t,e,o,r){var n=String(l(t)),h="<"+e;return""!==o&&(h+=" "+o+'="'+String(r).replace(c,"&quot;")+'"'),h+">"+n+"</"+e+">"};t.exports=function(t,e){var o={};o[t]=e(h),r(r.P+r.F*n(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",o)}},165:function(t,e,o){"use strict";var r=o(145);o.n(r).a},166:function(t,e,o){(t.exports=o(64)(!1)).push([t.i,".hover-big-box{min-width:170px;box-sizing:content-box;margin:10px 10px 0 0;float:left;display:flex;justify-content:center;flex-direction:column;overflow:hidden}.hover-big-box .link{width:100%;height:100%}.hover-big-box.border{box-shadow:0 1px 3px 1px #a6a6a6}.content-with-margin{padding-left:20px}.hoverable-box{transition:all .5s ease}.hoverable-box:hover{box-shadow:0 18px 3px 1px #a6a6a6;background-color:#fcfcfc}.small-size{width:23.5%;height:25%}.medium-size{width:48.5%;height:25%}.large-size{width:100%;height:auto}@media (max-width:800px){.medium-size{width:39.5%}}@media (max-width:600px){.hover-big-box{width:39.5%;max-width:none}.large-size{width:100%}}",""])},168:function(t,e,o){"use strict";o(163);var r=o(147),n={data:function(){return{classToAddToBox:"",boxWidth:""}},props:{boxUrl:String,isBoxHoverable:Boolean,boxSimpleTitle:String,isInsideFullSize:Boolean,small:Boolean,medium:Boolean,large:Boolean,invisible:Boolean},components:{titleParagraph:r.a},created:function(){var t="medium-size";this.small&&(t="small-size"),this.large&&(t="large-size"),this.medium&&(t="medium-size"),this.classToAddToBox=(this.isBoxHoverable?"hoverable-box":"")+" "+(this.invisible?"":"border")+" "+t}},l=(o(165),o(18)),component=Object(l.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hover-big-box",class:this.classToAddToBox},[e("a",{staticClass:"link",attrs:{href:this.boxUrl}},[this.boxSimpleTitle?e("title-paragraph",{attrs:{content:this.boxSimpleTitle}}):this._e(),this._t("default")],2)])},[],!1,null,null,null);e.a=component.exports},193:function(t,e,o){var content=o(375);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("6d55240c",content,!0,{sourceMap:!1})},374:function(t,e,o){"use strict";var r=o(193);o.n(r).a},375:function(t,e,o){(t.exports=o(64)(!1)).push([t.i,'.container{max-width:1000px;margin:10px auto;height:100vh;width:96.5%}.box{box-shadow:0 1px 3px 1px #a6a6a6;width:100%;height:100%;display:inline-block}body{margin:0}a{color:inherit;text-decoration:none}input{font:inherit}ul{padding:0}li{list-style:none}body{background-color:#f2f2f2}body .title{font-family:Fjalla One,sans-serif;color:hsla(0,0%,5%,.55);text-align:center}body .short-description{font-family:"Source Serif Pro",serif}body .services-list{width:100%;height:450px}',""])},425:function(t,e,o){"use strict";o.r(e);var meta=o(150),r=o(154),n=o(168),l={components:{metaTags:meta.a,baseStyle:r.a,box:n.a},data:function(){return{meta:{title:"Serviços",description:"Confira todos os serviços que presto.",thumbnail:"https://amosbatista.com/thumbnails/masterrow-logo.jpg",url:"/services",type:"post"}}}},c=(o(374),o(18)),component=Object(c.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg"},[e("meta-tags",{attrs:{metadata:this.meta}}),e("base-style"),e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("Serviços")]),e("h2",{staticClass:"short-description"},[this._v("Atualmente estou prestando serviços como consultor. Com 10 anos no mercado de desenvolvimento, vocẽ pode contar comigo para serviços de gestão e desenvolvimento web, além de refatoração de sistemas e automatização.")]),e("div",{staticClass:"services-list"},[e("box",{attrs:{"box-url":"/services/webDevelopment","box-simple-title":"Desenvolvimento web",small:""}}),e("box",{attrs:{"box-url":"/services/refatoring","box-simple-title":"Refatoração",small:""}}),e("box",{attrs:{"box-url":"/services/integrationAutmatization","box-simple-title":"Automatização e Integração",small:""}}),e("box",{attrs:{"box-url":"/services/teaching","box-simple-title":"Aulas de reforço",small:""}})],1)])],1)},[],!1,null,null,null);e.default=component.exports}}]);