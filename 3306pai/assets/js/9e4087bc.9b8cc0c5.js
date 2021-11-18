"use strict";(self.webpackChunkdatabend_official_front=self.webpackChunkdatabend_official_front||[]).push([[608],{3012:function(e,a,t){t.r(a),t.d(a,{default:function(){return s}});var r=t(7294),n=t(4666),l=t(9960),c=t(5999);function i(e){var a=e.year,t=e.posts;return r.createElement(r.Fragment,null,r.createElement("h3",null,a),r.createElement("ul",null,t.map((function(e){return r.createElement("li",{key:e.metadata.date},r.createElement(l.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function m(e){var a=e.years;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},a.map((function(e,a){return r.createElement("div",{key:a,className:"col col--4 margin-vert--lg"},r.createElement(i,e))})))))}function s(e){var a,t,l=e.archive,i=(0,c.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,c.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),v=(a=l.blogPosts,t=a.reduceRight((function(e,a){var t=a.metadata.date.split("-")[0],r=e.get(t)||[];return e.set(t,[a].concat(r))}),new Map),Array.from(t,(function(e){return{year:e[0],posts:e[1]}})));return r.createElement(n.Z,{title:i,description:s},r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},i),r.createElement("p",{className:"hero__subtitle"},s))),r.createElement("main",null,v.length>0&&r.createElement(m,{years:v})))}},4666:function(e,a,t){t.d(a,{Z:function(){return z}});var r=t(7294),n=(t(412),t(6010)),l=t(2752),c=t(74),i=t(7462),m=t(9960),s=t(2822),v=t(5662),o=t(1839),u=t(9253),d="data:image/png;base64,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",E="navbarHideable_fBz2",g="navbarHidden_190W",h=t(6459),b=function(e){return(0,h.Z)(e),r.createElement("svg",{t:"1635920265080",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2474",style:{width:"6.4vw"}},r.createElement("path",{d:"M44.4 245.9h935.2c24.4 0 44.4-20 44.4-44.4s-19.8-44.4-44.4-44.4H44.4C20 157.1 0 177.1 0 201.5s20 44.4 44.4 44.4z m935.2 221.8H44.4C20 467.7 0 487.7 0 512.1s20 44.4 44.4 44.4h935.2c24.4 0 44.4-20 44.4-44.4s-20-44.4-44.4-44.4z m0 310.4H44.4C20 778.1 0 797.8 0 822.5s20 44.4 44.4 44.4h935.2c24.4 0 44.4-19.8 44.4-44.4s-20-44.4-44.4-44.4z","p-id":"2475",fill:"#76AFF7"}))},f={width:"8vw",height:"8vw"};var p=function(){var e,a=(0,s.LU)().navbar,t=a.items,l=a.hideOnScroll,c=a.style,h=(0,r.useState)(!1),p=h[0],w=h[1],C=(0,v.Z)(l),k=C.navbarRef,A=C.isNavbarVisible;(0,o.Z)(p);var N=(0,r.useCallback)((function(){w(!0)}),[w]),y=(0,r.useCallback)((function(){w(!1)}),[w]),Z=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!=(a=e.position)?a:"right")}))}}(t),M=Z.leftItems;return r.createElement("nav",{ref:k,className:(0,n.Z)("navbar","navbar--fixed-top",(e={"navbar--primary":"primary"===c,"navbar-sidebar--show":p},e[E]=l,e[g]=!A,e))},r.createElement("div",{"data-pc":!0,className:"navbar__inner_pc"},r.createElement("div",{className:"navbar__inner"},r.createElement(m.Z,{href:"/",style:{width:"2.604167vw",height:"2.604167vw"}},r.createElement("img",{src:d})),r.createElement("div",{className:"navbar__items_wrap"},M.map((function(e,a){return r.createElement(u.Z,(0,i.Z)({className:"pc-nav-item"},e,{key:a}))}))))),r.createElement("div",{"data-phone":!0,className:"navbar__inner-phone-wrap"},r.createElement("div",{className:"navbar__inner"},r.createElement(m.Z,{href:"/",style:f},r.createElement("img",{src:d})),r.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:N,onKeyDown:N},r.createElement(b,null)))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:y}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement("img",{src:d,style:f,onClick:y})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},t.map((function(e,a){return r.createElement(u.Z,(0,i.Z)({mobile:!0},e,{onClick:y,key:a}))})))))))},w="footer_TasJ",C="footerWraper_DVUg",k="footerTitle_97MM",A="followUs_b6Mg",N="item_mh6s",y="itemIcon_88qO",Z="coppyright_mCtY",M=t(4996);var G=function(){var e=(0,s.LU)().footer,a=e.copyright,t=e.links;return r.createElement("div",{className:w},r.createElement("div",{className:C},t.map((function(e,a){return r.createElement("div",{key:a},r.createElement("div",{className:k},e.title),e.items.map((function(e,a){return r.createElement("div",{key:a,className:N+" "+(e.icon?y:"")},e.icon?r.createElement("img",{className:A,src:(0,M.Z)(e.icon)}):e.to?r.createElement(m.Z,{href:e.to},e.label):r.createElement("a",{target:"_blank",href:e.href},e.label))})))}))),r.createElement("div",{className:Z},a))},I=t(4572),J=t(7667),S=t(8245);var z=function(e){var a=e.children,t=e.noFooter,i=e.wrapperClassName;return(0,S.Z)(),r.createElement(I.Z,null,r.createElement(J.Z,e),r.createElement(l.Z,null),r.createElement(c.Z,null),r.createElement(p,null),r.createElement("div",{className:(0,n.Z)("gl-main-wrapper",i)},a),!t&&r.createElement(G,null))}}}]);