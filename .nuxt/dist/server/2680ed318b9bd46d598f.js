exports.ids=[3,5],exports.modules={110:function(t,e,o){"use strict";o.r(e);var r=o(81),n=o.n(r);for(var l in r)"default"!==l&&function(t){o.d(e,t,function(){return r[t]})}(l);e.default=n.a},111:function(t,e,o){(t.exports=o(5)(!1)).push([t.i,".stamp{max-width:450px;width:85%;position:absolute;top:0;left:0}.folded{transform:translateX(100vw)}.unfolded{transform:translateX(0);transition:all .5s ease}.incl-1{transform:rotate(-15deg) translate(15px,45px)}.incl-2{transform:rotate(15deg) translate(25px,55px)}.incl-3{transform:rotate(5deg) translate(30px,45px)}.incl-4{transform:rotate(-5deg) translate(25px,45px)}.incl-5{transform:rotate(25deg) translate(20px,45px)}",""])},112:function(t,e,o){"use strict";o.r(e);var r=o(82),n=o.n(r);for(var l in r)"default"!==l&&function(t){o.d(e,t,function(){return r[t]})}(l);e.default=n.a},113:function(t,e,o){e=t.exports=o(5)(!1);var r=o(69)(o(70));e.push([t.i,"@font-face{font-family:Kingthings Trypewriter;src:url("+r+")}.typewriter{font-family:Kingthings Trypewriter,monospace}",""])},114:function(t,e,o){"use strict";o.r(e);var r=o(83),n=o.n(r);for(var l in r)"default"!==l&&function(t){o.d(e,t,function(){return r[t]})}(l);e.default=n.a},115:function(t,e,o){e=t.exports=o(5)(!1);var r=o(69),n=r(o(73)),l=r(o(70)),c=r(o(116));e.push([t.i,"body{margin:0}a{color:inherit}a,a:hover{text-decoration:none}input{font:inherit}ul{padding:0}li{list-style:none}body{font-size:20px;font-family:Open Sans,sans-serif;background-color:#000}.bg{width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;background-image:url("+n+");background-size:cover;background-position:top}.bg .bg-degrade{width:100%;height:100vh;background:rgba(0,0,0,.8) 25%;background:radial-gradient(rgba(0,0,0,.8) 25%,#000)}.main-container{position:relative;margin:0 auto;width:96%}.titulo-site{font-family:Fjalla One,sans-serif;color:#edf2fd;text-align:center;text-transform:uppercase;letter-spacing:-6px;line-height:90%;text-shadow:0 2px #0d0d0c}.descricao{font-family:Kingthings Trypewriter,monospace;text-align:justify;color:#edf2fd;line-height:90%}.ocultar{opacity:0!important;z-index:-2!important}.botao{font-size:80%;font-weight:700;padding:3px 5px;border-radius:3px;margin:0 0 5px 5px;color:#0d0d0c;display:inline-block}.botao .fa{margin-right:3px}@font-face{font-family:Kingthings Trypewriter;src:url("+l+")}.cabecalho{width:100%;margin-top:50px;float:left}.resultado{width:100%}.resultado .titulo-site{font-family:Fjalla One,sans-serif;color:#edf2fd;text-align:center;font-size:100%;text-transform:uppercase;letter-spacing:-6px;line-height:90%;text-shadow:0 2px #0d0d0c}.resultado .folha{width:80%;background-image:url("+c+");background-size:cover;background-position:0 0;margin:50px auto;padding:15px;box-shadow:0 5px 3px 1px #0d0d0c}.resultado .folha .margem{overflow:hidden;border:2px solid #413f3e;border-radius:3px;padding:15px}.resultado .folha .margem .topo{width:100%;float:left}.resultado .folha .margem .topo .topo-cent{margin:auto;width:75%}.resultado .folha .margem .topo .topo-cent .info{font-family:Open Sans,sans-serif;font-size:80%;text-transform:uppercase;text-align:center;font-weight:700;margin:0}.resultado .folha .margem .topo .topo-cent .nro-parecer{-webkit-text-orientation:right;text-orientation:right;font-family:Kingthings Trypewriter,monospace}.resultado .folha .margem .detalhes{margin-top:20px;width:100%;float:left}.resultado .folha .margem .detalhes .info{text-transform:uppercase;font-weight:700}.resultado .folha .margem .detalhes .musica-autor{min-height:60px}.resultado .folha .margem .detalhes .resultado-censura{height:100px;position:relative}.resultado .folha .margem .detalhes .lista-detalhes .item-detalhe{margin:11px 0;line-height:17px}.resultado .compartilhar{width:15%;float:right;margin-top:50px;color:#bfbfbf}.resultado .compartilhar .linha{float:left;padding:0 10px;width:80%}.resultado .compartilhar .linha .titulo{font-size:100%;text-align:center;font-family:Kingthings Trypewriter,monospace;width:90%}.resultado .compartilhar .linha .link{width:58px;font-size:150%;font-weight:700;padding:3px 5px;border-radius:3px;margin:0 0 5px 5px;color:#edf2fd;display:inline-block;text-align:center}.resultado .compartilhar .linha .link .conteudo{margin:0}.resultado .compartilhar .linha .facebook{background-color:#314c81}.resultado .compartilhar .linha .twitter{background-color:#1b95e0}.resultado .compartilhar .linha .voltar{font-size:80%;background-color:#2e95b8;font-family:Open Sans,sans-serif}.resultado .compartilhar .linha .ver-letra{font-size:80%;background-color:#288a72;font-family:Open Sans,sans-serif}@media (max-width:1000px){.resultado .folha{width:90%}.resultado .compartilhar{width:100%}.resultado .compartilhar .link{margin:0 0 0 10px}}.maquina-escrever{font-family:Kingthings Trypewriter,monospace}",""])},116:function(t,e,o){t.exports=o.p+"img/5ee85bd.jpg"},134:function(t,e,o){"use strict";o.r(e);var r={props:{activate:Boolean,type:String},data:()=>({stampSrc:"",stampStatus:"folded",TIME_TO_ACTIVATE:100}),created(){this.show(this.activate,this)},watch:{activate:function(t,e){this.show(t,this)}},methods:{show:(t,e)=>{if(t){switch(e.type){case"censurado":e.stampSrc="../../censored.png";break;case"comRestricao":e.stampSrc="../../restricted.png";break;case"aprovado":e.stampSrc="../../approved.png"}setTimeout(function(){e.stampStatus=`unfolded ${e.stampStatus}`},e.TIME_TO_ACTIVATE)}}}},n=o(1);var l=Object(n.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"stamp folded",class:this.stampStatus,attrs:{src:this.stampSrc}},[])},[],!1,function(t){var e=o(110);e.__inject__&&e.__inject__(t)},null,"46148ee8").exports,c={props:{content:String}};var d=Object(n.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"typewriter"},[this._ssrNode(this._ssrEscape(this._s(this.content)))])},[],!1,function(t){var e=o(112);e.__inject__&&e.__inject__(t)},null,"5aadf504").exports,m=o(93),f={async asyncData({params:t}){const e=await Object(m.default)(t.resultado);return{songArtistName:e.songArtistName,tipoCarimbo:e.tipoCarimbo,detalhes:e.theSong.censorResultList,songId:t.resultado,urlPagina:e.urlPagina,textoResultado:e.tituloResposta,descricaoResultado:e.descricaoResposta,urlLetra:e.theSong.url,meta:{title:e.tituloResposta,description:e.descricaoResposta,thumbnail:`https://amosbatista.com/${e.urlThumb}`,url:"/"+t.resultado,type:"post"}}},data:function(){return{isStampCalled:!1}},components:{stamp:l,typewriter:d,metaData:o(28).a},created(){var t=this;setTimeout(()=>{t.isStampCalled=!0},2e3)}};var h=Object(n.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"resultado"},[o("meta-data",{attrs:{metadata:t.meta}}),t._ssrNode('<div class="folha">',"</div>",[t._ssrNode('<div class="margem">',"</div>",[t._ssrNode('<div class="topo"><div class="topo-cent"><p class="info">Ministério da Justiça</p><p class="info">Departamento de Polícia Federal</p><p class="info">Divisão de Censura de Diversões Públicas</p><p class="info">Nº do Parecer: <span class="nro-parecer">'+t._ssrEscape(t._s(t.songId))+"</span></p></div></div>"),t._ssrNode('<div class="detalhes">',"</div>",[t._ssrNode('<p class="info musica-autor">',"</p>",[t._ssrNode("Música e Autor: "),t._ssrNode("<a"+t._ssrAttr("href",t.urlLetra)+' target="_blank">',"</a>",[o("typewriter",{attrs:{content:t.songArtistName}})],1)],2),t._ssrNode('<p class="info resultado-censura">',"</p>",[t._ssrNode("Parecer:"),o("stamp",{attrs:{type:t.tipoCarimbo,activate:!0}})],2),t._ssrNode('<p class="info">Detalhes:<ul class="lista-detalhes">'+t._ssrList(t.detalhes,function(e){return'<li class="item-detalhe maquina-escrever">'+t._ssrEscape("- "+t._s(e.feedBack)+" ")+"<i>"+t._ssrEscape('("...'+t._s(e.censorExcerpt)+'...")')+"</i></li>"})+"</ul></p>")],2)],2)])],1)},[],!1,function(t){var e=o(114);e.__inject__&&e.__inject__(t)},null,"00186d42");e.default=h.exports},28:function(t,e,o){"use strict";var r={props:["metadata"],head:function(){return"home"==this.metadata.type&&(this.metadata.detailTypes={og:"website",twitter:"summary_large_image"}),"list"==this.metadata.type&&(this.metadata.detailTypes={og:"website",twitter:"summary"}),"post"==this.metadata.type&&(this.metadata.detailTypes={og:"article",twitter:"summary_large_image"}),{title:this.metadata.title,titleTemplate:"%s | amosBatista.com",meta:[{name:"viewport",content:"width=device-width, user-scalable=no"},{property:"fb:app_id",content:"212560042661168"},{property:"og:title",content:this.metadata.title},{property:"og:description",content:this.metadata.description},{property:"og:url",content:"https://amosbatista.com"+this.metadata.url},{property:"og:image",content:this.metadata.thumbnail},{property:"og:type",content:this.metadata.detailTypes.og},{name:"twitter:title",content:this.metadata.title},{name:"twitter:description",content:this.metadata.description},{name:"twitter:url",content:"https://amosbatista.com"+this.metadata.url},{name:"twitter:image",content:this.metadata.thumbnail},{name:"twitter:type",content:this.metadata.detailTypes.twitter}]}}},n=o(1),component=Object(n.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",[])},[],!1,null,null,"4f8fdcda");e.a=component.exports},57:function(t,e,o){"use strict";var r=o(17),n=o.n(r);const l={get:t=>new Promise((e,o)=>{n.a.get(t).then(t=>{e(t)}).catch(t=>{o(t)})})};e.a=l},69:function(t,e,o){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},70:function(t,e,o){t.exports=o.p+"fonts/df8583a.ttf"},73:function(t,e,o){t.exports=o.p+"img/701e0e1.jpg"},81:function(t,e,o){var content=o(111);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(6).default;t.exports.__inject__=function(t){r("60fb520d",content,!0,t)}},82:function(t,e,o){var content=o(113);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(6).default;t.exports.__inject__=function(t){r("d0b11d0e",content,!0,t)}},83:function(t,e,o){var content=o(115);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(6).default;t.exports.__inject__=function(t){r("65281fe0",content,!0,t)}},93:function(t,e,o){"use strict";o.r(e);var r=o(57);e.default=function(t){return new Promise(function(e,o){r.a.get(`http://localhost:3001/processSong?songId=${t}`).then(function(t){const o=t.data;o.isSongCensored?(o.tipoCarimbo="censurado",o.urlThumb="censored.png",o.tituloResposta=`CENSURA!! Artista ${o.theSong.artistName} sofre censura do governo!! `,o.descricaoResposta="A música "+o.theSong.songName+" foi recusada pelos orgãos de regulamentação de Diversões. Seu autor está sujeito às penalidades previstas por lei."):o.isSongFreeOfObjections?(o.tipoCarimbo="aprovado",o.urlThumb="approved.png",o.tituloResposta=o.theSong.songName+" [Aprovado pelo governo]",o.descricaoResposta="A música "+o.theSong.songName+" foi aprovada pelas autoridades, sendo considerada segura para a sociedade brasileira."):(o.tipoCarimbo="comRestricao",o.urlThumb="restricted.png",o.tituloResposta=o.theSong.songName+": Ameaça de Censura!",o.descricaoResposta="A música "+o.theSong.songName+" teve partes de sua composição rejeitadas pelos orgãos do governo, e está sujeita à censura."),o.urlPagina="",o.songArtistName=o.theSong.songName+" - "+o.theSong.artistName,e(o)}).catch(function(t){o(t)})})}}};
//# sourceMappingURL=2680ed318b9bd46d598f.js.map