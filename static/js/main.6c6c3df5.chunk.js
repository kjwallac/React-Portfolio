(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{73:function(e,t,r){},81:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r(11),n=r.n(c),i=(r(73),r(63)),s=r(10),o=r(44),l=r(22),u=r(113),j=r(115),b=r(117),d=r(126),h=r(127),p=r(118),g=r(119),f=r(25),m=r.n(f),O=r(2),x=[{label:"Home",userFocus:"home"},{label:"About",userFocus:"about"},{label:"Skills",userFocus:"skills"},{label:"Works",userFocus:"works"},{label:"Contact",userFocus:"contact"}],w=Object(u.a)((function(){return{header:{backgroundColor:"#60557C",flexGrow:1,alignItems:"center","@media (max-width: 900px)":{paddingLeft:0}},menuButton:{fontFamily:"Open Sans, sans-serif",fontWeight:700,size:"18px",marginLeft:"38px"},drawerContainer:{padding:"20px 30px"}}}));function k(e){var t=e.setUserFocus,r=e.userFocus,c=w(),n=c.header,i=c.menuButton,s=c.toolbar,u=c.drawerContainer,f=Object(a.useRef)(null);Object(a.useEffect)((function(){if("home"===r){f.current.scrollIntoView(!0);var e=window.scrollY;e&&window.scroll(0,e-72)}}),[r]);var k=Object(a.useState)({mobileView:!1,drawerOpen:!1}),v=Object(o.a)(k,2),y=v[0],F=v[1],N=y.mobileView,C=y.drawerOpen;Object(a.useEffect)((function(){var e=function(){return window.innerWidth<900?F((function(e){return Object(l.a)(Object(l.a)({},e),{},{mobileView:!0})})):F((function(e){return Object(l.a)(Object(l.a)({},e),{},{mobileView:!1})}))};e(),window.addEventListener("resize",(function(){return e()}))}),[]);var A=function(){return x.map((function(e){var r=e.label,a=e.userFocus;return Object(O.jsx)(h.a,{onClick:function(){t(a),F((function(e){return Object(l.a)(Object(l.a)({},e),{},{drawerOpen:!1})}))},children:r},r)}))},B=function(){return x.map((function(e){var r=e.label,a=e.userFocus;return Object(O.jsx)(p.a,{color:"inherit",className:i,key:r,onClick:function(){return t(a)},children:r})}))};return Object(O.jsx)("header",{id:"home",ref:f,children:Object(O.jsx)(g.a,{className:n,children:N?Object(O.jsxs)(j.a,{children:[Object(O.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:function(){return F((function(e){return Object(l.a)(Object(l.a)({},e),{},{drawerOpen:!0})}))},children:Object(O.jsx)(m.a,{})}),Object(O.jsx)(d.a,{anchor:"top",open:C,onClose:function(){return F((function(e){return Object(l.a)(Object(l.a)({},e),{},{drawerOpen:!1})}))},children:Object(O.jsx)("div",{className:u,children:A()})})]}):Object(O.jsx)(j.a,{className:s,children:Object(O.jsx)("div",{className:s,children:B()})})})})}var v=r(121),y=r(122),F=r(123),N=r(43),C=r.n(N),A=[{img:"/images/blog.png",title:"Tech Blog",app:"https://pure-dusk-57129.herokuapp.com/",repo:"https://github.com/kjwallac/TechBlog"},{img:"/images/fitnesstracker.png",title:"Fitness Tracker",app:"https://murmuring-dawn-97917.herokuapp.com/",repo:"https://github.com/kjwallac/Fitness-Tracker"},{img:"/images/budgettracker.png",title:"Progressive Budget",app:"https://nameless-waters-15440.herokuapp.com/",repo:"https://github.com/kjwallac/Progressive-Budget"},{img:"/images/googlebooksearch.png",title:"Books Search",app:"https://still-beyond-14942.herokuapp.com/",repo:"https://github.com/kjwallac/TechBlog"},{img:"/images/weatherdash.png",title:"Weather Dashboard",app:"https://kjwallac.github.io/WeatherDashboard/",repo:"https://github.com/kjwallac/WeatherDashboard"},{img:"/images/notetaker.png",title:"Note Taker",app:"https://secure-atoll-29612.herokuapp.com/",repo:"https://github.com/kjwallac/NoteTakerBackEnd"}],B=r(124),S=r(84),W=r(120),I=Object(u.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,textAlign:"center",padding:20},gridList:{maxWidth:1200,padding:10,justifyContent:"space-evenly"},icon:{color:"white"},tileBar:{height:150,background:"rgba(0, 0, 0, 0.7)"},work:{textAlign:"center",padding:10,backgroundColor:"#60557c",color:"white"},tile:{maxWidth:375,maxHeight:375}}}));function T(e){var t=e.userFocus,r=I(),c=Object(a.useRef)(null);return Object(a.useEffect)((function(){if("works"===t){c.current.scrollIntoView(!0);var e=window.scrollY;e&&window.scroll(0,e-72)}}),[t]),Object(O.jsx)(W.a,{ref:c,container:!0,direction:"row",justify:"space-evenly",alignItems:"center",className:r.root,id:"works",children:Object(O.jsxs)(v.a,{spacing:15,cellHeight:400,className:r.gridList,children:[Object(O.jsx)(y.a,{cols:2,style:{height:"auto"},children:Object(O.jsx)(S.a,{variant:"h6",className:r.work,children:"Check out my work"})}),A.map((function(e){return Object(O.jsxs)(y.a,{className:r.tile,children:[Object(O.jsx)("img",{src:e.img,alt:e.title}),Object(O.jsx)(F.a,{className:r.tileBar,title:Object(O.jsx)("h3",{children:e.title}),subtitle:Object(O.jsx)("h2",{children:Object(O.jsxs)(B.a,{target:"_blank",color:"inherit",href:e.app,children:[e.title," Deployed App"]})}),actionIcon:Object(O.jsx)(b.a,{"aria-label":"info about ".concat(e.title),className:r.icon,children:Object(O.jsx)(B.a,{target:"_blank",color:"inherit",href:e.repo,children:Object(O.jsx)(C.a,{})})})})]},e.img)}))]})})}var E=r(129),V=Object(u.a)((function(e){return{large:{width:e.spacing(15),height:e.spacing(15),display:"flex"},alignItemsAndJustifyContent:{width:"100%",height:"auto",display:"flex",alignItems:"center",justifyContent:"center"}}}));function L(){var e=V();return Object(O.jsx)("div",{className:e.alignItemsAndJustifyContent,children:Object(O.jsx)(E.a,{alt:"Kristina Wallace",src:"/images/kristinapic.png",className:e.large})})}var D=Object(u.a)({root:{marginTop:90,textAlign:"center",padding:10}});function J(e){var t=e.userFocus,r=D(),c=Object(a.useRef)(null);return Object(a.useEffect)((function(){if("about"===t){c.current.scrollIntoView(!0);var e=window.scrollY;e&&window.scroll(0,e-72)}}),[t]),Object(O.jsxs)("div",{className:r.root,id:"about",ref:c,children:[Object(O.jsx)("div",{style:{itemAlign:"center"},children:Object(O.jsx)(L,{})}),Object(O.jsx)(S.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Kristina Wallace"}),Object(O.jsx)(S.a,{gutterBottom:!0,variant:"subtitle1",color:"textSecondary",children:"Full-stack software developer passionate about building things that make a difference. Aviatrix. Space asset accountant. Tea lover. Adventuress. She/Her. \u0437\u0430 \u043c\u043d\u043e\u0439!"})]})}var R=r(62),H=r.n(R),Y=Object(u.a)({root:{textAlign:"center",padding:10,margin:"auto",maxWidth:1200},work:{textAlign:"center",padding:10,backgroundColor:"#60557c",color:"white"},icon:{fontSize:"xl",color:"#60557c",padding:10}});function z(e){var t=e.userFocus,r=Y(),c=Object(a.useRef)(null);return Object(a.useEffect)((function(){"contact"===t&&c.current.scrollIntoView()}),[t]),Object(O.jsxs)("div",{className:r.root,id:"contact",ref:c,children:[Object(O.jsx)(S.a,{variant:"h6",className:r.work,children:"Get in Touch"}),Object(O.jsxs)("div",{children:[Object(O.jsx)(m.a,{className:r.icon})," ",Object(O.jsx)(B.a,{target:"_blank",color:"inherit",href:"https://www.linkedin.com/in/kristina-wallace-880a8b57/",children:Object(O.jsx)(H.a,{className:r.icon})})," ",Object(O.jsx)(B.a,{target:"_blank",color:"inherit",href:"https://github.com/kjwallac",children:Object(O.jsx)(C.a,{className:r.icon})})," ",Object(O.jsx)(m.a,{className:r.icon})]})]})}var _=r(125);function K(){return Object(O.jsxs)(S.a,{variant:"body2",color:"textSecondary",style:{textAlign:"center"},children:["Copyright \xa9 ","Kristina Wallace ",(new Date).getFullYear(),"."]})}var M=Object(u.a)((function(e){return{footer:{alignText:"center",padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function P(){var e=M();return Object(O.jsx)("footer",{className:e.footer,children:Object(O.jsx)(_.a,{children:Object(O.jsx)(K,{})})})}var G=r(128),U=Object(u.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}})),Q=[{skill:"HTML/CSS"},{skill:"Javascript"},{skill:"NodeJs"},{skill:"API"},{skill:"MySQL"},{skill:"MongoDB"},{skill:"Express"},{skill:"React"}];function q(e){var t=e.userFocus,r=U(),c=Object(a.useRef)(null);return Object(a.useEffect)((function(){if("skills"===t){c.current.scrollIntoView(!0);var e=window.scrollY;e&&window.scroll(0,e-72)}}),[t]),Object(O.jsx)("div",{className:r.root,ref:c,id:"skills",children:Q.map((function(e){return Object(O.jsx)(G.a,{icon:Object(O.jsx)(m.a,{fontSize:"small",style:{color:"white"}}),label:e.skill,style:{backgroundColor:"#60557c",color:"white"}},e.skill)}))})}function X(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),r=t[0],c=t[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(k,{class:"App-header",setUserFocus:c,userFocus:r}),Object(O.jsx)(J,{userFocus:r}),Object(O.jsx)(q,{userFocus:r}),Object(O.jsx)(T,{userFocus:r}),Object(O.jsx)(z,{userFocus:r}),Object(O.jsx)(P,{})]})}var Z=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(s.b,{children:Object(O.jsx)(X,{})})})})};n.a.render(Object(O.jsx)(Z,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.6c6c3df5.chunk.js.map