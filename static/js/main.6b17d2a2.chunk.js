(window["webpackJsonppersonslist-redux"]=window["webpackJsonppersonslist-redux"]||[]).push([[0],{16:function(e,n,t){e.exports=t(31)},21:function(e,n,t){},22:function(e,n,t){},23:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(3),c=t.n(o),i=(t(21),t(10)),s=t(11),l=t(15),u=t(14),m=function(e){var n=e.firstName,t=e.lastName,a=e.img,o=e.email,c=e.city,i=e.cell;return r.a.createElement("div",{className:"tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{className:"br3",alt:"person",src:a}),r.a.createElement("div",null,r.a.createElement("h2",{className:"ttu"},n," ",t),r.a.createElement("h3",{className:"ttc"},"City:",c),r.a.createElement("p",null,"Email:",o),r.a.createElement("p",null,"Phone:",i)))},p=(t(22),function(e){var n=e.personsArray;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-container"},n.map((function(e){return r.a.createElement(m,{key:e.login.uuid,firstName:e.name.first,lastName:e.name.last,img:e.picture.large,email:e.email,cell:e.cell,city:e.location.city})}))))}),E=(t(23),t(4)),d=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onSearchPersons()}},{key:"render",value:function(){return this.props.isPending?r.a.createElement("h1",null,"Loading...."):r.a.createElement("div",null,r.a.createElement("h1",{className:"tc"},"Personal List"),r.a.createElement(p,{personsArray:this.props.persons}))}}]),t}(a.Component),h=Object(E.b)((function(e){return{persons:e.persons,isPending:e.isPending,error:e.error}}),(function(e){return{onSearchPersons:function(){return e((function(e){e({type:"REQUEST_PERSONS_PENDING"}),fetch("https://randomuser.me/api/?&nat=gb&results=20").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_PERSONS_SUCCESS",payload:n.results})})).catch((function(n){return e({type:"REQUEST_PERSONS_FAILED",payload:n})}))}))}}}))(d);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(29);var f=t(2),g=t(1),S={persons:[],isPending:!1,error:""},b=(t(30),[t(13).a]);var y=Object(f.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(g.a)({},e);switch(n.type){case"REQUEST_PERSONS_PENDING":return Object(g.a)(Object(g.a)({},t),{},{isPending:!0});case"REQUEST_PERSONS_SUCCESS":return Object(g.a)(Object(g.a)({},t),{},{persons:n.payload,isPending:!1});case"REQUEST_PERSONS_FAILED":return Object(g.a)(Object(g.a)({},t),{},{error:n.payload,isPending:!1});default:return t}}),f.a.apply(void 0,b));c.a.render(r.a.createElement(E.a,{store:y},r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.6b17d2a2.chunk.js.map