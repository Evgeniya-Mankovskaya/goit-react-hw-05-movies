"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[132],{4390:function(e,n,t){t.d(n,{wr:function(){return l},HI:function(){return d},Mc:function(){return h},uV:function(){return f},Hx:function(){return v}});var c=t(5861),a=t(7757),r=t.n(a),i="https://api.themoviedb.org/3",o="4bfcb13ad28ed335545ffb88b4a098a0";function s(){return u.apply(this,arguments)}function u(){return u=(0,c.Z)(r().mark((function e(){var n,t,c,a=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",t=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(n,t);case 4:if(!(c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(){return s("".concat(i,"/trending/all/day?api_key=").concat(o))}function d(e){return s("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"))}function h(e){return s("".concat(i,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"))}function f(e){return s("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"))}function v(e){return s("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US"))}},3132:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var c=t(8152),a=t(2791),r=t(1523),i=t(9271),o=t(4390),s=t(6153),u="MovieDetailsView_button__F5NT6",l="MovieDetailsView_link__S7xaU",d="MovieDetailsView_activeLink__JVQLI",h=t(184),f=(0,a.lazy)((function(){return t.e(270).then(t.bind(t,1270))})),v=(0,a.lazy)((function(){return t.e(200).then(t.bind(t,1200))}));function p(){var e=(0,i.UO)().movieId,n=(0,a.useState)(null),t=(0,c.Z)(n,2),p=t[0],x=t[1],m=(0,i.$B)(),j=m.url,_=m.path,g=(0,i.k6)(),k=(0,i.TH)();(0,a.useEffect)((function(){o.Mc(e).then((function(e){x(e)}))}),[e]);return(0,h.jsx)(h.Fragment,{children:p&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{className:u,type:"button",onClick:function(){var e,n;g.push(null!==(e=null===k||void 0===k||null===(n=k.state)||void 0===n?void 0:n.form)&&void 0!==e?e:"/")},children:"Go back"}),(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(p.poster_path),alt:p.title}),(0,h.jsx)("h2",{children:p.title}),(0,h.jsxs)("p",{children:["User Score: ",(0,h.jsx)("span",{children:p.vote_average})]}),(0,h.jsxs)("p",{children:["Overview ",(0,h.jsx)("span",{children:p.overview})]}),(0,h.jsxs)("p",{children:["Genres"," ",(0,h.jsx)("span",{children:p.genres.map((function(e){return e.name})).join(" ")})]}),(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("nav",{children:[(0,h.jsx)(r.OL,{to:"".concat(j,"/cast"),className:l,activeClassName:d,children:"Cast"}),(0,h.jsx)(r.OL,{to:"".concat(j,"/reviews"),className:l,activeClassName:d,children:"Reviews"})]}),(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Z,{}),children:(0,h.jsxs)(i.rs,{children:[(0,h.jsx)(i.AW,{path:"".concat(_,"/cast"),children:(0,h.jsx)(f,{movieId:e})}),(0,h.jsx)(i.AW,{path:"".concat(_,"/reviews"),children:(0,h.jsx)(v,{movieId:e})})]})})]})})}}}]);
//# sourceMappingURL=132.8d316496.chunk.js.map