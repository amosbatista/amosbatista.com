exports.ids=[6],exports.modules={57:function(t,e,r){"use strict";var n=r(17),c=r.n(n);const o={get:t=>new Promise((e,r)=>{c.a.get(t).then(t=>{e(t)}).catch(t=>{r(t)})})};e.a=o},92:function(t,e,r){"use strict";r.r(e);var n=r(57);e.default=function(param){return new Promise(function(t,e){var r="";r=param.artist&&""!=param.artist.artistName?`?artistName=${param.artist.artistName}&songName=${param.searchValue}`:`?searchValue=${param.searchValue}`,n.a.get("http://localhost:3001/searchSong"+r).then(function(e){t(e.data.result)}).catch(function(t){e(t)})})}}};
//# sourceMappingURL=f93fbe2d03aa17d43399.js.map