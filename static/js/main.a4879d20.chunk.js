(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{124:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t);var s=n(7),r=n(21),a=n.n(r),c=n(95),i=n.n(c),o=n(52),l=n.n(o),d=n(96),j=n(97),u=n(98),m=n(101),v=n(100),h=n(99),b=n.n(h);var p=function(e){e.id;var t=e.year,n=e.title,r=e.summary,a=e.poster,c=e.genres;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:a,alt:n}),Object(s.jsx)("ul",{children:c.map((function(e,t){return Object(s.jsx)("li",{children:e},t)}))}),Object(s.jsxs)("h4",{children:[n," (",t,")"]}),Object(s.jsx)("p",{children:r.length<60?r.slice(0,60):"".concat(r.slice(0,60),"...")})]})},x=(n(124),function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(j.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovie=Object(d.a)(l.a.mark((function t(){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?limit=50");case 2:return n=t.sent,s=n.data.data.movies,t.next=6,e.setState({movies:s,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(p,{id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component));n(125);i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.a4879d20.chunk.js.map