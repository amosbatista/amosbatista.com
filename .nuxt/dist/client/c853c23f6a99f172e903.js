(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(o,e,t){"use strict";t(14);var n=t(156),r=t.n(n),c={get:function(o){return new Promise(function(e,t){r.a.get(o).then(function(o){e(o)}).catch(function(o){t(o)})})}};e.a=c},222:function(o,e,t){"use strict";t.r(e);t(14);var n=t(148);e.default=function(o){return new Promise(function(e,t){n.a.get("".concat("http://localhost:3001/processSong","?songId=").concat(o)).then(function(o){var t=o.data;t.isSongCensored?(t.tipoCarimbo="censurado",t.urlThumb="censored.png",t.tituloResposta="CENSURA!! Artista ".concat(t.theSong.artistName," sofre censura do governo!! "),t.descricaoResposta="A música "+t.theSong.songName+" foi recusada pelos orgãos de regulamentação de Diversões. Seu autor está sujeito às penalidades previstas por lei."):t.isSongFreeOfObjections?(t.tipoCarimbo="aprovado",t.urlThumb="approved.png",t.tituloResposta=t.theSong.songName+" [Aprovado pelo governo]",t.descricaoResposta="A música "+t.theSong.songName+" foi aprovada pelas autoridades, sendo considerada segura para a sociedade brasileira."):(t.tipoCarimbo="comRestricao",t.urlThumb="restricted.png",t.tituloResposta=t.theSong.songName+": Ameaça de Censura!",t.descricaoResposta="A música "+t.theSong.songName+" teve partes de sua composição rejeitadas pelos orgãos do governo, e está sujeita à censura."),t.urlPagina="",e(t)}).catch(function(o){t(o)})})}}}]);