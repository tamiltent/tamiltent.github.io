(this.webpackJsonptamiltent=this.webpackJsonptamiltent||[]).push([[0],{108:function(e,t,a){e.exports={"news-content-container":"NewsDetail_news-content-container__2vx0L","news-content":"NewsDetail_news-content__bDwfp","news-metadata":"NewsDetail_news-metadata__2di4f"}},234:function(e,t,a){e.exports=a(516)},239:function(e,t,a){},46:function(e,t,a){e.exports={"radio-list":"RadioList_radio-list__2U1ch","radio-list-item":"RadioList_radio-list-item__1MXp6","radio-list-item-thumbnail":"RadioList_radio-list-item-thumbnail__UkZDh","radio-list-item-content":"RadioList_radio-list-item-content__1JT2k","radio-list-item-content-details":"RadioList_radio-list-item-content-details__xVZ_-","radio-list-item-content-details-title":"RadioList_radio-list-item-content-details-title__OEBKX","radio-list-item-content-details-badge":"RadioList_radio-list-item-content-details-badge__2x6Vg","radio-list-item-buttons":"RadioList_radio-list-item-buttons__26KSP"}},479:function(e,t,a){},484:function(e,t,a){},485:function(e,t,a){},510:function(e,t,a){},516:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(105),i=a.n(l),c=(a(239),a(145),a(240),a(241),a(243),a(292),a(479),a(63)),s=a(20),o=a(70),m=(a(484),a(69)),u=a(107);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={mediaType:null,mediaId:0,src:null,imageUrl:null,displayName:null,isPlaying:!1,isBuffering:!1},y=Object(m.b)({player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY_MEDIA":return p({},e,{mediaType:t.payload.mediaType,mediaId:t.payload.mediaId,src:t.payload.src,imageUrl:t.payload.imageUrl,displayName:t.payload.displayName,isPlaying:!0});case"STOP_MEDIA":return p({},e,{isPlaying:!1});case"START_BUFFER_MEDIA":return p({},e,{isBuffering:!0});case"END_BUFFER_MEDIA":return p({},e,{isBuffering:!1});default:return e}}}),g=Object(m.c)(y);a(485);var f=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:"/mainlogo.png",width:"30",height:"30",className:"d-inline-block align-top",alt:""}),r.a.createElement("span",{className:"pl-1"},"Tamiltent")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},r.a.createElement(c.b,{className:"nav-link",activeClassName:"active",exact:!0,to:"/"},"Home")),r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},r.a.createElement(c.b,{className:"nav-link",activeClassName:"active",exact:!0,to:"/radios"},"Radios")),r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},r.a.createElement(c.b,{className:"nav-link",activeClassName:"active",exact:!0,to:"/news"},"News")))))},E=a(51),v=a(55),w=a(50);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=function(e){return{type:"PLAY_MEDIA",payload:N({},e)}},O=function(){return{type:"STOP_MEDIA",payload:{}}},j=a(46),S=a.n(j),P=a(144),k=a.n(P),I=a(228),D=a(229),L=a.n(D),x="http://api.tamiltent.com/";function R(e){return A.apply(this,arguments)}function A(){return(A=Object(I.a)(k.a.mark((function e(t){var a,n,r,l=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!(l.length>1&&void 0!==l[1])||l[1],n=t,a&&(n=x+t),e.next=5,L.a.get(n);case 5:return r=e.sent,e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M={RADIO:"radio",PODCAST:"podcast"};var T=Object(o.b)((function(e){return{playerState:e.player}}),{playMedia:_,stopMedia:O})((function(e){var t=Object(n.useState)([]),a=Object(E.a)(t,2),l=a[0],i=a[1],c=e.playerState,s=e.limit||20;function o(e){var t=e.radio,a=(c&&c.mediaId)===t.id;return a&&c.isBuffering?r.a.createElement("div",{className:"spinner-border text-primary "+S.a["player-button"],role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):a&&c.isPlaying?r.a.createElement("button",{className:"btn btn-primary btn-lg btn-circle"},r.a.createElement(v.a,{icon:w.d})):r.a.createElement("button",{className:"btn btn-primary btn-lg btn-circle"},r.a.createElement(v.a,{icon:w.c}))}return Object(n.useEffect)((function(){R("https://raw.githubusercontent.com/kodebot/api.vaanoli.kodebot.github.io/master/radio/tamil",!1).then((function(e){e=e.slice(0,s),i(e)})).catch((function(e){return console.error(e)}))}),[]),r.a.createElement("div",{className:S.a["radio-list"]},r.a.createElement("ul",null,l.map((function(t){return r.a.createElement("li",{key:t.id,className:S.a["radio-list-item"],onClick:function(){return function(t){c.isPlaying&&c.mediaId===t.id?e.stopMedia():e.playMedia({mediaType:M.RADIO,mediaId:t.id,src:t.radioSources[0].url,imageUrl:t.imageUrl,displayName:t.name})}(t)}},r.a.createElement("div",{className:S.a["radio-list-item-thumbnail"]},r.a.createElement("img",{src:t.imageUrl,alt:""})),r.a.createElement("div",{className:S.a["radio-list-item-content"]},r.a.createElement("div",{className:S.a["radio-list-item-content-details"]},r.a.createElement("div",{className:S.a["radio-list-item-content-details-title"]},t.name),r.a.createElement("div",{className:"badge badge-secondary "+S.a["radio-list-item-content-details-badge"]},t.country)),r.a.createElement("div",{className:S.a["radio-list-item-buttons"]},r.a.createElement(o,{radio:t}))))}))))})),U=a(230),C=a.n(U),B=a(231),F=a.n(B);var H=function(e){var t=e.value;return r.a.createElement("span",null,F()(Date.now()-Date.parse(t),{largest:1})+" ago")},V=a(56),W=a.n(V),J=20;var X=Object(s.h)((function(e){var t=new URLSearchParams(Object(s.g)().search),a=parseInt(t.get("page")||1),l=parseInt(t.get("category")||1),i=Object(n.useState)([]),c=Object(E.a)(i,2),o=c[0],m=c[1],u=Object(n.useState)(a),d=Object(E.a)(u,2),p=d[0],b=d[1],y=Object(n.useState)([]),g=Object(E.a)(y,2),f=g[0],h=g[1],N=Object(n.useState)(l),_=Object(E.a)(N,2),O=_[0],j=_[1],S=e.hideCategory||!1,P=e.limit||20;function k(){var t=p+1;e.history.push("/news?category=".concat(O,"&page=").concat(t)),b(t)}function I(){var t=p-1;e.history.push("/news?category=".concat(O,"&page=").concat(t)),b(t)}function D(t){O!==t&&(e.history.push("/news?category=".concat(t,"&page=1")),b(1),j(t))}function L(e){var a=parseInt(t.get("category")||1),n=e.category.ID===a?"nav-link active":"nav-link";return r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:n,onClick:function(){return D(e.category.ID)}},e.category.CategoryDisplayName))}return Object(n.useEffect)((function(){R("article/list?category=".concat(O,"&page=").concat(p)).then((function(e){e=(e=e||[]).slice(0,P),m(e||[]),window.scrollTo({top:0,left:0,behavior:"smooth"})})).catch((function(e){return console.error(e)}))}),[p,O]),Object(n.useEffect)((function(){R("category/list").then((function(e){h(e||[])})).catch((function(e){return console.error(e)}))}),[]),r.a.createElement("div",{className:W.a["news-list-container"]},!S&&r.a.createElement("ul",{className:"nav nav-pills"},f.map((function(e){return r.a.createElement(L,{key:e.ID,category:e})}))),r.a.createElement("div",{className:W.a["news-list"]},r.a.createElement("ul",{className:"row"},o.map((function(t){return r.a.createElement("li",{key:t.ID,className:W.a["news-list-item"]+" col-12 col-md-4",onClick:function(){return a=t.ID,void e.history.push("/article/?id=".concat(a));var a}},r.a.createElement("div",{className:W.a["news-list-item-inner"]+" row h-100 text-center"},t.ThumbImageURL&&r.a.createElement("div",{className:"col-auto col-md-12"},r.a.createElement("img",{src:t.ThumbImageURL,alt:""})),r.a.createElement("div",{className:"col col-md-12"},r.a.createElement("div",{className:W.a["news-list-item-title"]},r.a.createElement(C.a,{text:t.Title,length:120}))),r.a.createElement("div",{className:"w-100"}),r.a.createElement("div",{className:W.a["news-list-item-footer"]+" row col align-self-end"},r.a.createElement("div",{className:"col-auto text-left"},r.a.createElement("img",{alt:"",src:"https://api.vaanoli.kodebot.com/news/images/feed-sources/"+t.Source+".png"})),r.a.createElement("div",{className:"col-auto pt-1 text-right align-self-center"},r.a.createElement(H,{value:t.PublishedAt})))))}))),r.a.createElement("div",{className:W.a["news-list-pagination"]},r.a.createElement((function(){return p>1?r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:I},r.a.createElement(v.a,{icon:w.a})," \xa0 Previous"):null}),null),r.a.createElement((function(){return o.length===J?r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:k},"\xa0\xa0\xa0Next\xa0\xa0\xa0",r.a.createElement(v.a,{icon:w.b})):null}),null))))})),Y=a(232),K=a(108),Z=a.n(K);var Q=function(e){var t=new URLSearchParams(Object(s.g)().search),a=Object(n.useState)({}),l=Object(E.a)(a,2),i=l[0],c=l[1],o=t.get("id");return Object(n.useEffect)((function(){o&&R("article/".concat(o)).then((function(e){c(e),window.scrollTo({top:0,left:0,behavior:"smooth"})})).catch((function(e){return console.error(e)}))}),[]),o?r.a.createElement("div",{className:Z.a["news-content-container"]},r.a.createElement(Y.Helmet,null,r.a.createElement("link",{rel:"canonical",href:i.SourceURL})),r.a.createElement("h1",null,i.Title),r.a.createElement("div",{className:Z.a["news-metadata"]+" row"},r.a.createElement("div",{className:"col-6 text-left"},r.a.createElement("img",{alt:"",src:"https://api.vaanoli.kodebot.com/news/images/feed-sources/"+i.Source+".png"})),r.a.createElement("div",{className:"col-6 text-right align-self-center"},r.a.createElement(H,{value:i.PublishedAt}))),r.a.createElement("div",{className:Z.a["news-content"],dangerouslySetInnerHTML:{__html:i.Content}}),r.a.createElement("a",{className:"btn btn-primary my-2 my-sm-0",target:"_blank",rel:"noopener noreferrer",href:i.SourceURL},"Read original article")):r.a.createElement(s.a,{to:"/news"})};a(510);var $=Object(s.h)((function(e){var t=new URLSearchParams(Object(s.g)().search),a=t.get("s");if(a){t.delete("s");var n=t.toString();switch(n=n&&"/?".concat(n),a.toLowerCase()){case"article":return r.a.createElement(s.a,{to:"/article".concat(n)});case"news":return r.a.createElement(s.a,{to:"/news".concat(n)});case"radios":return r.a.createElement(s.a,{to:"/radios".concat(n)});default:return r.a.createElement(s.a,{to:"/"})}}return r.a.createElement("div",{className:"Home-body"},r.a.createElement("div",{className:"Home-list"},r.a.createElement("h2",null,"Radios"),r.a.createElement(T,{limit:5}),r.a.createElement("button",{type:"button",onClick:function(){e.history.push("radios")},className:"btn btn-link"}," VIEW ALL RADIOS")),r.a.createElement("div",{className:"Home-list"},r.a.createElement("h2",null,"Latest News"),r.a.createElement(X,{hideCategory:!0,limit:12}),r.a.createElement("button",{type:"button",onClick:function(){e.history.push("news")},className:"btn btn-link"}," VIEW MORE NEWS")))})),q=a(233),z=a.n(q),G=a(71),ee=a.n(G);var te=Object(o.b)((function(e){return{playerState:e.player}}),{playMedia:_,stopMedia:O,startBufferMedia:function(){return{type:"START_BUFFER_MEDIA",payload:{}}},endBufferMedia:function(){return{type:"END_BUFFER_MEDIA",payload:{}}}})((function(e){if(!e.playerState.mediaId)return null;function t(){e.playerState.isPlaying?e.stopMedia():e.playMedia({mediaType:e.playerState.mediaType,mediaId:e.playerState.mediaId,src:e.playerState.src,imageUrl:e.playerState.imageUrl,displayName:e.playerState.displayName})}function a(t){t?e.startBufferMedia():e.endBufferMedia()}return r.a.createElement("div",{className:ee.a.player},r.a.createElement("div",{className:ee.a["player-image"]},r.a.createElement("img",{src:e.playerState.imageUrl,alt:""})),r.a.createElement("div",{className:ee.a["player-name"]},e.playerState.displayName),r.a.createElement((function(){return e.playerState.isBuffering?r.a.createElement("div",{className:"spinner-border text-primary "+ee.a["player-button"],role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("button",{className:"btn btn-primary btn-lg btn-circle "+ee.a["player-button"],onClick:t}," ",r.a.createElement(v.a,{icon:e.playerState.isPlaying?w.d:w.c})," ")}),null),r.a.createElement(z.a,{url:e.playerState.isPlaying?e.playerState.src:"none",config:{file:{attributes:{preload:"none"},forceAudio:!0}},style:{display:"none"},playing:e.playerState.isPlaying,onBuffer:function(){return a(!0)},onBufferEnd:function(){return a(!1)}}))}));var ae=function(){return r.a.createElement("div",{className:"App container-fluid p-0"},r.a.createElement(c.a,null,r.a.createElement(o.a,{store:g},r.a.createElement(f,null),r.a.createElement("article",{className:"App-body"},r.a.createElement("div",{className:"App-body-content row no-gutters"},r.a.createElement("div",{className:"d-none d-lg-block col-lg-2 App-box"}),r.a.createElement("div",{className:"col col-md-8 col-lg-6"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/article",render:function(e){return r.a.createElement(Q,e)}}),r.a.createElement(s.b,{exact:!0,path:"/news"},r.a.createElement(X,null)),r.a.createElement(s.b,{exact:!0,path:"/radios"},r.a.createElement("div",null,r.a.createElement(T,null))),r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement($,null)))),r.a.createElement("div",{className:"d-none d-md-block col-md-4 col-lg-4 App-box"})),r.a.createElement(te,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,t,a){e.exports={"news-list-container":"NewsList_news-list-container__3AVji","news-list":"NewsList_news-list__2J6VU","news-list-pagination":"NewsList_news-list-pagination__YiwXc","news-list-item":"NewsList_news-list-item__3T2nX","news-list-item-inner":"NewsList_news-list-item-inner__2EpQ-","news-list-item-title":"NewsList_news-list-item-title__2_tIB","news-list-item-footer":"NewsList_news-list-item-footer__3wflg"}},71:function(e,t,a){e.exports={player:"Player_player__9t-_A","player-image":"Player_player-image__3iMEc","player-button":"Player_player-button__2rOId","player-name":"Player_player-name__2H9HF"}}},[[234,1,2]]]);
//# sourceMappingURL=main.01b6c1ca.chunk.js.map