(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},24:function(e,t,a){e.exports=a(45)},29:function(e,t,a){},30:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(20),r=a.n(o);a(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(2),l=a(3),s=a(5),u=a(4),m=a(6),h=a(12),p=a(10),d=(a(30),"AIzaSyCgwo2fNF4rRz1YLLXG4EaRSSjSkN5Qv-E"),f="351399255802075299",g=function(e){return new Promise(function(t,a){fetch(e,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){e.ok?t(e.json()):a(new Error("error"))},function(e){a(new Error(e.message))})})},E={getBlog:function(e){var t="".concat("https://www.googleapis.com/blogger/v3/blogs/byurl","?key=").concat(d,"&url=").concat("https://www.anisuki.gq");return g(t)},getBlogPost:function(){var e="".concat("https://www.googleapis.com/blogger/v3/blogs","/").concat(f,"/posts?key=").concat(d,"&maxResults=7");return g(e)},getBlogArticleViaSearch:function(e){var t="".concat("https://www.googleapis.com/blogger/v3/blogs","/").concat(f,"/posts/search?q=").concat(e,"&key=").concat(d);return g(t)}},b=Object(n.createContext)(),v=b.Provider,j=b.Consumer,N=function(e){return function(t){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){var t=this;return c.a.createElement(j,null,function(a){return c.a.createElement(e,Object.assign({},t.props,a))})}}]),a}(n.Component)},O=function(e){return function(t){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).dispatch=function(e){},t.getSiteInfo=function(){},t.getAuthorInfo=function(){},t.getBlogPost=function(){},t.state={SiteTitle:"Anisuki v2",Authentication:{isLogin:!1,userName:"",passWord:""},isPost:!1,PageTitle:"Anisuki v2 | Fansub team"},t}return Object(m.a)(a,t),Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t={state:this.state,dispatch:this.dispatch};return c.a.createElement(v,{value:t},c.a.createElement(e,this.props))}}]),a}(n.Component)},y=N(function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this),c.a.createElement("header",{className:"headerSection"},c.a.createElement("div",{className:"headerContainer"},c.a.createElement("div",{className:"headerContent"},c.a.createElement("div",{className:"headerBrand"},c.a.createElement("div",{className:"headerBrandItem"},c.a.createElement("h1",{className:"headerBrandTitle"},c.a.createElement(h.b,{to:"/"},this.props.state.SiteTitle)))),c.a.createElement("div",{className:"headerNavigation"},c.a.createElement("ul",{className:"Nav"},c.a.createElement("li",{className:"active"},c.a.createElement("a",{href:"#"},"Home")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"About")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"Contact")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"Login")))))))}}]),t}(n.Component)),w=a(23),S=(a(39),function(e){return function(t){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"contentSection"},c.a.createElement("div",{className:"contentContainer"},c.a.createElement(e,this.props)))}}]),a}(n.Component)}),k=(a(19),a(40),function(e){var t=e.post.content;return t=(t=t.replace(/(<\/?(?:img)[^>]*>)|<[^>]+>/gi,"$1")).substring(0,600),c.a.createElement("div",{className:"postList"},c.a.createElement("div",{className:"postListItem"},c.a.createElement("h2",{onClick:function(){return e.LinkArticle(e.post.url,e.post)},className:"postListTitle"},e.post.title),c.a.createElement("div",{className:"postListInfo"},c.a.createElement("span",{className:"postListInfoSpan"},"Penulis : ",e.post.author.displayName)),c.a.createElement("p",{className:"postListSnippet",dangerouslySetInnerHTML:{__html:t}})))}),C=(a(41),function(e){return c.a.createElement("div",{className:"authorCard"},c.a.createElement("img",{className:"authorPic",src:e.authorPic,alt:""}),c.a.createElement("div",{className:"authorText"},c.a.createElement("span",{className:"authorName"},e.authorName),c.a.createElement("p",{className:"authorBio"},e.authorBio)),c.a.createElement("div",{className:"authorSocial"}))}),P=(a(42),function(e){return c.a.createElement("div",{className:"sidebarSection"},c.a.createElement(C,{authorPic:"https://lh3.googleusercontent.com/-zjNVNWYFaQs/AAAAAAAAAAI/AAAAAAAAAC0/S8KG71vF0vI/w140-h138-p/photo.jpg",authorName:"Rinkato Tekari",authorBio:"Someone who is trying to make beautiful web."}))}),L=S(function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getBlogPost=function(){E.getBlogPost().then(function(e){"undefined"!==typeof e&&a.setState({blogPost:e,isShowPost:!0,isLoading:!1},function(){a.state.blogPost.items.map(function(e,t){var n=e.url;n=(n=(n=n.replace(".html","")).split("/"))[n.length-1];var c=Object(w.a)({},a.state.blogPost);c.items[t].url=n,a.setState({items:c.items[t]},function(){console.log(a.state.blogPost)})})})}).catch(function(e){console.error(e)})},a.handleLinkArticle=function(e,t){a.props.history.push("article/".concat(e),t)},a.state={blogPost:{},isShowPost:!1,isLoading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getBlogPost(),document.title="Anisuki v2 | Fansub team"}},{key:"render",value:function(){var e=this,t=this.state.blogPost.items;return c.a.createElement("div",{className:"mainSection"},c.a.createElement("div",{className:"mainLeft"},c.a.createElement("div",{className:"postListSection"},this.state.isShowPost?t.map(function(t){return c.a.createElement(k,{key:t.id,post:t,LinkArticle:e.handleLinkArticle})}):"Уншиж байна...")),c.a.createElement("div",{className:"mainRight"},c.a.createElement(P,null)))}}]),t}(n.Component)),A=(a(43),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footerSection"},c.a.createElement("div",{className:"footerContainer"},c.a.createElement("div",{className:"footerContent"},c.a.createElement("div",{className:"copyRightHolder"},c.a.createElement("p",null,"@Copyright by Anisuki v2")))))}}]),t}(n.Component)),B=function(e){return c.a.createElement("article",{className:"articleSection"},c.a.createElement("div",{className:"articleHeader"},c.a.createElement("h1",{className:"articleTitle"},e.data.title),c.a.createElement("div",{className:"articleInfo"})),c.a.createElement("div",{className:"articleBody"},c.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.data.content}})))},T=(a(44),N(S(function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getArticle=function(){var e=a.props.history.location.state;"undefined"===typeof e?E.getBlogArticleViaSearch(a.props.match.params.url).then(function(e){console.log("hasil Search: ",e),a.setState({article:e.items[0]},function(){document.title=a.state.article.title})}).catch(function(e){console.error(e)}):(console.log(a.props.history.location.state),a.setState({article:e},function(){document.title=a.state.article.title}))},a.state={article:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getArticle(),document.querySelector("html").scrollTop=0,console.log(this.state)}},{key:"render",value:function(){return console.log(this),c.a.createElement("div",{className:"mainSection"},c.a.createElement("div",{className:"mainLeft"},c.a.createElement(B,{data:this.state.article})),c.a.createElement("div",{className:"mainRight"},c.a.createElement(P,null)))}}]),t}(n.Component)))),I=O(function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement(y,null),c.a.createElement(p.a,{path:"/",exact:!0,component:L}),c.a.createElement(p.a,{path:"/article/:url",exact:!0,component:T}),c.a.createElement(A,null))}}]),t}(n.Component));r.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.f80607cd.chunk.js.map
