(this.webpackJsonpktsrf=this.webpackJsonpktsrf||[]).push([[0],{125:function(e,a,t){},127:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),i=t.n(o),l=(t(84),t(36)),c=t(24),m=t(17),s=t(39),u=t(168),d=t(5),h=t(67),g=t.n(h);var p=Object(d.a)(g.a)((function(e){var a=e.classes,t=Object(n.useState)(""),o=Object(m.a)(t,2),i=o[0],l=o[1],c=Object(n.useState)(""),d=Object(m.a)(c,2),h=d[0],g=d[1];return r.a.createElement("div",{className:a.LoginFormContainer},r.a.createElement(s.ValidatorForm,{onSubmit:function(){e.history.push("/home")}},r.a.createElement(s.TextValidator,{label:"Username",onChange:function(e){g(e.target.value)},name:"username",value:h,validators:["required"],errorMessages:["this field is required"]}),r.a.createElement(s.TextValidator,{label:"Email",onChange:function(e){l(e.target.value)},name:"email",value:i,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),r.a.createElement(u.a,{type:"submit"},"Submit")))})),f=t(43),v=t.n(f),E=t(35),b=t.n(E);var y=Object(d.a)({navbar:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"5vh",backgroundColor:"cornflowerblue",border:"0.1rem solid #333"},logo:{marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"rgba(0, 212, 255, 1)",fontFamily:'"Roboto", sans-serif',height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},buttonContainer:{display:"flex",justifyContent:"flex-end","& addspot":{padding:"1rem"},"& signout":{padding:"1rem","& a":{textDecoration:"none"}}}})((function(e){var a=e.classes;return r.a.createElement("header",{className:a.navbar},r.a.createElement("div",{className:a.logo},r.a.createElement("a",{href:"https://liviupreda.me/"},"KTSRF")),r.a.createElement("div",{className:a.buttonContainer},r.a.createElement("div",{className:a.addspot},r.a.createElement(u.a,{variant:"contained",color:"primary"},"Add Spot")),r.a.createElement("div",{className:a.signout},r.a.createElement(l.b,{to:"/"},r.a.createElement(u.a,{variant:"contained",color:"primary"},"Sign Out")))))}));var j=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),o=(t[0],t[1]);return r.a.createElement("div",{className:"SpotSearchForm"},r.a.createElement("p",null,"Locations"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(e){o(e.target.value)}}),r.a.createElement(u.a,{type:"submit",onClick:function(){b.a.get("https://5e3064ed576f9d0014d63faf.mockapi.io/spot").then((function(e){return console.log(e.data)}))}},"Search")))},O=t(163),x=t(167),C=t(166),w=t(162),N=t(164),S=t(165),k=t(161),F=t(69),I=t.n(F);var W=Object(d.a)(I.a)((function(e){var a=e.classes,t=e.spots;return r.a.createElement("div",null,r.a.createElement(w.a,{component:k.a,className:a.tableContainer},r.a.createElement(O.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(N.a,null,r.a.createElement(S.a,null,r.a.createElement(C.a,null,"Spot Name"),r.a.createElement(C.a,{align:"right"},"Country"),r.a.createElement(C.a,{align:"right"},"Latitude"),r.a.createElement(C.a,{align:"right"},"Longitude"),r.a.createElement(C.a,{align:"right"},"Wind Probability"),r.a.createElement(C.a,{align:"right"},"When To Go"))),r.a.createElement(x.a,null,t.map((function(e){return r.a.createElement(S.a,{key:e.name},r.a.createElement(C.a,{component:"th",scope:"row"},e.name),r.a.createElement(C.a,{align:"right"},e.country),r.a.createElement(C.a,{align:"right"},e.lat),r.a.createElement(C.a,{align:"right"},e.long),r.a.createElement(C.a,{align:"right"},e.probability),r.a.createElement(C.a,{align:"right"},e.month))}))))))})),z=t(34),L=t(22),R=t(70),q=t(71),A=t(72),B=t(46),M={width:"100vw",height:"40vh",marginBottom:"2rem"},T=function(e){function a(){return Object(z.a)(this,a),Object(R.a)(this,Object(q.a)(a).apply(this,arguments))}return Object(A.a)(a,e),Object(L.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mapContainer"},r.a.createElement(B.Map,{google:this.props.google,zoom:14,style:M,initialCenter:{lat:-1.2884,lng:36.8233}}))}}]),a}(n.Component),V=Object(B.GoogleApiWrapper)({apiKey:"AIzaSyAFR9ohystEpVf1UyEPad9Mfh56S3-R6Qo"})(T);Object(d.a)({footer:{backgroundColor:"black",height:"5vh",alignItems:"center",fontWeight:"bold"},footerEmoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){e.paletteName,e.emoji;var a=e.classes;return r.a.createElement("footer",{className:a.footer},"Liviu Preda 2020")}));var D=Object(d.a)({userHomeContainer:{height:"100vh",width:"99vw",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative"},navbar:{height:"5vh",marginBottom:"2rem"},map:{height:"30vh"},form:{height:"20vh",margin:"2rem, 5rem",padding:"2rem",position:"relative",zIndex:"100",left:"1vw",top:"5vh"},table:{height:"50vh"}})((function(e){var a=e.classes,t=Object(n.useState)([]),o=Object(m.a)(t,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){!function(){var e;v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(b.a.get("https://5e3064ed576f9d0014d63faf.mockapi.io/spot"));case 2:e=a.sent,l(e.data);case 4:case"end":return a.stop()}}))}()}),[]),r.a.createElement("div",{className:a.userHomeContainer},r.a.createElement("div",{className:a.navbar},r.a.createElement(y,null)),r.a.createElement("div",{className:a.map},r.a.createElement(V,null)),r.a.createElement("div",{className:a.form},r.a.createElement(j,null)),r.a.createElement("div",{className:a.table},r.a.createElement(W,{spots:i})))}));t(125);var P=function(){return r.a.createElement(l.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(p,e)}}),r.a.createElement(c.a,{exact:!0,path:"/home",render:function(e){return r.a.createElement(D,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(126);i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,a){},69:function(e,a){},79:function(e,a,t){e.exports=t(127)},84:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.e72c5720.chunk.js.map