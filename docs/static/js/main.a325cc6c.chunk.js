(this.webpackJsonpktsrf=this.webpackJsonpktsrf||[]).push([[0],{109:function(e,a,t){},111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),o=(t(73),t(10)),s=t(14),i=t.n(s),m=t(16),u=t.n(m);var p=function(e){var a=e.setRoute,t=e.setIsLoggedIn,l=e.apiUrl,c=Object(n.useState)(""),s=Object(o.a)(c,2),m=s[0],p=s[1],h=Object(n.useState)(""),d=Object(o.a)(h,2),b=d[0],g=d[1];Object(n.useEffect)((function(){i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(u.a.get(l+"/user").catch((function(e){alert("Server Error: Could not retrieve user list"),console.log(e)})).then((function(e){return console.log("OK",e.data)})));case 2:case"end":return e.stop()}}))}),[]);var E=function(){!function(){var e,a;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e={email:m,password:b},t.next=3,i.a.awrap(u.a.post(l+"/login",e));case 3:a=t.sent,console.log(a.data);case 5:case"end":return t.stop()}}))}(),a("home"),t(!0)};return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure",onSubmit:E},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Log In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"E-mail"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){p(e.target.value)}})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){g(e.target.value)}}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:E,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Log In"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{className:"f6 link dim black db pointer",onClick:function(){return a("signup")}},"Sign up")))))};var h=function(e){var a=e.setRoute,t=e.setIsLoggedIn,l=e.apiUrl,c=Object(n.useState)(""),s=Object(o.a)(c,2),m=s[0],p=s[1],h=Object(n.useState)(""),d=Object(o.a)(h,2),b=d[0],g=d[1],E=Object(n.useState)(""),f=Object(o.a)(E,2),v=f[0],w=f[1];return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure",onSubmit:function(){!function(){var e,a;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e={name:m,email:b,password:v},t.next=3,i.a.awrap(u.a.post(l+"/user",e));case 3:a=t.sent,console.log(a.data);case 5:case"end":return t.stop()}}))}(),a("home"),t(!0)}},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign Up"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"User Name"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:function(e){p(e.target.value)}})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"E-mail"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){g(e.target.value)}})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){w(e.target.value)}}))),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))},d=t(11),b=t(149),g=t(8),E=t(154),f=t(155),v=t(152),w=t(156),N=t(165),y=t(153),O=t(166),j=t(164),k=t(59),C=t.n(k),I=t(60),S=t.n(I),R=t(36),x=t.n(R),L=t(57),U=t.n(L),z=t(58),B=t.n(z),W=Object(b.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(d.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(g.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(g.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(d.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(d.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function F(e){var a=W(),t=e.setRoute,n=e.setIsLoggedIn,l=r.a.useState(null),c=Object(o.a)(l,2),s=c[0],i=c[1],m=r.a.useState(null),u=Object(o.a)(m,2),p=u[0],h=u[1],d=Boolean(s),b=Boolean(p),g=function(e){i(e.currentTarget)},k=function(){h(null)},I="primary-search-account-menu",R=r.a.createElement(j.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:I,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:function(){i(null),k()}},r.a.createElement(O.a,{onClick:function(){t("login"),n(!1)}},"Log Out")),L=r.a.createElement(j.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:k},r.a.createElement(O.a,null,r.a.createElement(v.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(y.a,{badgeContent:4,color:"secondary"},r.a.createElement(U.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(O.a,null,r.a.createElement(v.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(y.a,{badgeContent:11,color:"secondary"},r.a.createElement(B.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(O.a,{onClick:g},r.a.createElement(v.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(x.a,null)),r.a.createElement("p",null,"Log Out")));return r.a.createElement("div",{className:a.grow},r.a.createElement(E.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(v.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(C.a,null)),r.a.createElement(w.a,{className:a.title,variant:"h6",noWrap:!0},"KTSRF"),r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(S.a,null)),r.a.createElement(N.a,{placeholder:"Search Spot...",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:a.grow}),r.a.createElement(w.a,{className:a.greeting,variant:"h6",noWrap:!0},"Hai Salut Gigele"),r.a.createElement("div",{className:a.sectionDesktop},r.a.createElement(v.a,{edge:"end","aria-label":"account of current user","aria-controls":I,"aria-haspopup":"true",onClick:g,color:"inherit"},r.a.createElement(x.a,null))),r.a.createElement("div",{className:a.sectionMobile},r.a.createElement(v.a,{edge:"end","aria-label":"account of current user","aria-controls":I,"aria-haspopup":"true",onClick:g,color:"inherit"},r.a.createElement(x.a,null))))),L,R)}t(157);var M=t(159),P=t(163),A=t(162),G=t(158),D=t(160),H=t(161),K=t(113),T=t(4),J=t(61),_=t.n(J);var Q=Object(T.a)(_.a)((function(e){var a=e.classes,t=e.spots;return r.a.createElement("div",null,r.a.createElement(G.a,{component:K.a,className:a.tableContainer},r.a.createElement(M.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(D.a,null,r.a.createElement(H.a,null,r.a.createElement(A.a,null,"Spot Name"),r.a.createElement(A.a,{align:"right"},"Country"),r.a.createElement(A.a,{align:"right"},"Latitude"),r.a.createElement(A.a,{align:"right"},"Longitude"),r.a.createElement(A.a,{align:"right"},"Wind Probability"),r.a.createElement(A.a,{align:"right"},"When To Go"))),r.a.createElement(P.a,null,t.map((function(e){return r.a.createElement(H.a,{key:e.name},r.a.createElement(A.a,{component:"th",scope:"row"},e.name),r.a.createElement(A.a,{align:"right"},e.country),r.a.createElement(A.a,{align:"right"},e.lat),r.a.createElement(A.a,{align:"right"},e.long),r.a.createElement(A.a,{align:"right"},e.probability),r.a.createElement(A.a,{align:"right"},e.month))}))))))})),V=t(34),$=t(19),q=t(62),X=t(63),Y=t(64),Z=t(41),ee={width:"100vw",height:"40vh",marginBottom:"2rem"},ae=function(e){function a(){return Object(V.a)(this,a),Object(q.a)(this,Object(X.a)(a).apply(this,arguments))}return Object(Y.a)(a,e),Object($.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mapContainer"},r.a.createElement(Z.Map,{google:this.props.google,zoom:14,style:ee,initialCenter:{lat:-1.2884,lng:36.8233}}))}}]),a}(n.Component),te=Object(Z.GoogleApiWrapper)({apiKey:"AIzaSyAFR9ohystEpVf1UyEPad9Mfh56S3-R6Qo"})(ae);Object(T.a)({footer:{backgroundColor:"black",height:"5vh",alignItems:"center",fontWeight:"bold"},footerEmoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var a=e.classes;return r.a.createElement("footer",{className:a.footer},"Liviu Preda 2020")}));var ne=Object(T.a)({userHomeContainer:{height:"100vh",width:"99vw",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative"},navbar:{height:"5vh",marginBottom:"2rem"},map:{height:"50vh"},form:{height:"20vh",margin:"1rem, 5rem",padding:"2rem",position:"relative",zIndex:"100",left:"1vw",top:"5vh"},table:{height:"55vh"}})((function(e){var a=e.classes,t=e.apiUrl,l=e.setRoute,c=e.setIsLoggedIn,s=Object(n.useState)([]),m=Object(o.a)(s,2),p=m[0],h=m[1];return Object(n.useEffect)((function(){!function(){var e;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(u.a.get(t+"/spot"));case 2:e=a.sent,h(e.data);case 4:case"end":return a.stop()}}))}()}),[]),r.a.createElement("div",{className:a.userHomeContainer},r.a.createElement("div",{className:a.appbar},r.a.createElement(F,{setRoute:l,setIsLoggedIn:c})),r.a.createElement("div",{className:a.map},r.a.createElement(te,null)),r.a.createElement("div",{className:a.table},r.a.createElement(Q,{spots:p})))})),re=(t(109),"https://5e3064ed576f9d0014d63faf.mockapi.io");var le=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=(a[0],a[1],Object(n.useState)("login")),l=Object(o.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),u=(m[0],m[1]);return r.a.createElement("div",{className:"App"},"home"===c?r.a.createElement(ne,{setRoute:s,setIsLoggedIn:u,apiUrl:re}):"login"===c?r.a.createElement(p,{setRoute:s,setIsLoggedIn:u,apiUrl:re}):r.a.createElement(h,{setRoute:s,setIsLoggedIn:u,apiUrl:re}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(110);c.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},61:function(e,a){},68:function(e,a,t){e.exports=t(111)},73:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.a325cc6c.chunk.js.map