(window["webpackJsonppersonslist-redux"]=window["webpackJsonppersonslist-redux"]||[]).push([[0],{20:function(e,n,t){e.exports=t(33)},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(4),c=t.n(o),i=(t(25),t(11)),s=t(12),u=t(18),l=t(13),p=t(19),m=function(e){var n=e.id,t=e.name,r=e.email,o=e.website;return a.a.createElement("div",{className:"tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{className:"br3",alt:"person",src:"https://randomuser.me/api/portraits/thumb/men/".concat(n,".jpg")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,"Email:",r),a.a.createElement("p",null,"Website:",o)))},E=(t(26),function(e){var n=e.personsArray;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"grid-container"},n.map(function(e){return a.a.createElement(m,{key:e.id,id:e.id,name:e.username,email:e.email,website:e.website})})))}),d=(t(27),t(5)),f=function(e){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onSearchPersons()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",{className:"tc"},"Personal List"),a.a.createElement(E,{personsArray:this.props.persons}))}}]),n}(r.Component),b=Object(d.b)(function(e){return{persons:e.persons,isPending:e.isPending,error:e.error}},function(e){return{onSearchPersons:function(){return e(function(e){e({type:"REQUEST_PERSONS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e({type:"REQUEST_PERSONS_SUCCESS",payload:n})}).catch(function(n){return e({type:"REQUEST_PERSONS_FAILED",payload:n})})})}}})(f);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(32);var h=t(3),O=t(15);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(t,!0).forEach(function(n){Object(O.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var S={persons:[],isPending:!1,error:""},w=t(16),P=t(17),j=Object(w.createLogger)(),v=Object(h.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=y({},e);switch(n.type){case"REQUEST_PERSONS_PENDING":return y({},t,{isPending:!0});case"REQUEST_PERSONS_SUCCESS":return y({},t,{persons:n.payload,isPending:!1});case"REQUEST_PERSONS_FAILED":return y({},t,{error:n.payload,isPending:!1});default:return t}},Object(h.a)(P.a,j));c.a.render(a.a.createElement(d.a,{store:v},a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.32078446.chunk.js.map