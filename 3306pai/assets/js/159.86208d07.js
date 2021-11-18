"use strict";(self.webpackChunkdatabend_official_front=self.webpackChunkdatabend_official_front||[]).push([[159],{9497:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(7294),a=t(6010),o=t(3773),i=t(4973),l=t(7462),c=t(3366),u=["width","height","color","strokeWidth","className"];function s(e){var n=e.width,t=void 0===n?21:n,a=e.height,o=void 0===a?21:a,i=e.color,s=void 0===i?"currentColor":i,m=e.strokeWidth,d=void 0===m?1.2:m,f=(e.className,(0,c.Z)(e,u));return r.createElement("svg",(0,l.Z)({viewBox:"0 0 15 15",width:t,height:o},f),r.createElement("g",{stroke:s,strokeWidth:d},r.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}var m="announcementBar_3WsW",d="announcementBarPlaceholder_2m9F",f="announcementBarClose_38nx",v="announcementBarContent_3EUC";var h=function(){var e=(0,o.nT)(),n=e.isActive,t=e.close,l=(0,o.LU)().announcementBar;if(!n)return null;var c=l.content,u=l.backgroundColor,h=l.textColor,p=l.isCloseable;return r.createElement("div",{className:m,style:{backgroundColor:u,color:h},role:"banner"},p&&r.createElement("div",{className:d}),r.createElement("div",{className:v,dangerouslySetInnerHTML:{__html:c}}),p?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",f),onClick:t,"aria-label":(0,i.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(s,{width:14,height:14,strokeWidth:3.1})):null)}},8617:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),a="iconExternalLink_3J9K",o=function(e){var n=e.width,t=void 0===n?13.5:n,o=e.height,i=void 0===o?13.5:o;return r.createElement("svg",{width:t,height:i,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},9757:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(7462),a=t(7294),o=t(9105),i=t(2263),l=t(4996);function c(e){var n=e.locale,t=e.version,r=e.tag;return a.createElement(o.Z,null,n&&a.createElement("meta",{name:"docusaurus_locale",content:n}),t&&a.createElement("meta",{name:"docusaurus_version",content:t}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var u=t(1217),s=t(3773),m=t(5977);function d(){var e=(0,i.Z)().i18n,n=e.defaultLocale,t=e.locales,r=(0,s.l5)();return a.createElement(o.Z,null,t.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:n,fullyQualified:!0}),hrefLang:"x-default"}))}function f(e){var n=e.permalink,t=(0,i.Z)().siteConfig.url,r=function(){var e=(0,i.Z)().siteConfig.url,n=(0,m.TH)().pathname;return e+(0,l.Z)(n)}(),c=n?""+t+n:r;return a.createElement(o.Z,null,a.createElement("meta",{property:"og:url",content:c}),a.createElement("link",{rel:"canonical",href:c}))}function v(e){var n=(0,i.Z)(),t=n.siteConfig.favicon,m=n.i18n,v=m.currentLocale,h=m.localeConfigs,p=(0,s.LU)(),b=p.metadatas,E=p.image,Z=e.title,g=e.description,w=e.image,k=e.keywords,_=e.searchMetadatas,C=(0,l.Z)(t),y=(0,s.pe)(Z),N=v,L=h[v].direction;return a.createElement(a.Fragment,null,a.createElement(o.Z,null,a.createElement("html",{lang:N,dir:L}),t&&a.createElement("link",{rel:"shortcut icon",href:C}),a.createElement("title",null,y),a.createElement("meta",{property:"og:title",content:y}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),E&&a.createElement(u.Z,{image:E}),w&&a.createElement(u.Z,{image:w}),a.createElement(u.Z,{description:g,keywords:k}),a.createElement(f,null),a.createElement(d,null),a.createElement(c,(0,r.Z)({tag:s.HX,locale:v},_)),a.createElement(o.Z,null,b.map((function(e,n){return a.createElement("meta",(0,r.Z)({key:"metadata_"+n},e))}))))}},3792:function(e,n,t){t.d(n,{Z:function(){return E}});var r=t(7294),a=t(412),o=t(3773),i=(0,o.WA)("theme"),l="light",c="dark",u=function(e){return e===c?c:l},s=function(e){(0,o.WA)("theme").set(u(e))},m=function(){var e=(0,o.LU)().colorMode,n=e.defaultMode,t=e.disableSwitch,m=e.respectPrefersColorScheme,d=(0,r.useState)(function(e){return a.Z.canUseDOM?u(document.documentElement.getAttribute("data-theme")):u(e)}(n)),f=d[0],v=d[1],h=(0,r.useCallback)((function(){v(l),s(l)}),[]),p=(0,r.useCallback)((function(){v(c),s(c)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",u(f))}),[f]),(0,r.useEffect)((function(){if(!t)try{var e=i.get();null!==e&&v(u(e))}catch(n){console.error(n)}}),[t,v]),(0,r.useEffect)((function(){t&&!m||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var n=e.matches;v(n?c:l)}))}),[t,m]),{isDarkTheme:f===c,setLightTheme:h,setDarkTheme:p}},d=t(2924);var f=function(e){var n=m(),t=n.isDarkTheme,a=n.setLightTheme,o=n.setDarkTheme;return r.createElement(d.Z.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:o}},e.children)},v="docusaurus.tab.",h=function(){var e=(0,r.useState)({}),n=e[0],t=e[1],a=(0,r.useCallback)((function(e,n){(0,o.WA)("docusaurus.tab."+e).set(n)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,o._f)().forEach((function(n){if(n.startsWith(v)){var t=n.substring(v.length);e[t]=(0,o.WA)(n).get()}})),t(e)}catch(n){console.error(n)}}),[]),{tabGroupChoices:n,setTabGroupChoices:function(e,n){t((function(t){var r;return Object.assign({},t,((r={})[e]=n,r))})),a(e,n)}}},p=(0,r.createContext)(void 0);var b=function(e){var n=h(),t=n.tabGroupChoices,a=n.setTabGroupChoices;return r.createElement(p.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a}},e.children)};function E(e){var n=e.children;return r.createElement(f,null,r.createElement(o.pl,null,r.createElement(b,null,r.createElement(o.OC,null,r.createElement(o.L5,null,r.createElement(o.Cn,null,n))))))}},5525:function(e,n,t){t.d(n,{O:function(){return p}});var r=t(7462),a=t(3366),o=t(7294),i=t(6010),l=t(6742),c=t(4996),u=t(8617),s=t(3919),m=t(6253),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],v=["className","isDropdownItem"],h=["mobile","position"];function p(e){var n,t=e.activeBasePath,i=e.activeBaseRegex,m=e.to,f=e.href,v=e.label,h=e.activeClassName,p=void 0===h?"":h,b=e.prependBaseUrlToHref,E=(0,a.Z)(e,d),Z=(0,c.Z)(m),g=(0,c.Z)(t),w=(0,c.Z)(f,{forcePrependBaseUrl:!0}),k=v&&f&&!(0,s.Z)(f),_="dropdown__link--active"===p;return o.createElement(l.Z,(0,r.Z)({},f?{href:b?w:f}:Object.assign({isNavLink:!0,activeClassName:null!=(n=E.className)&&n.includes(p)?"":p,to:Z},t||i?{isActive:function(e,n){return i?new RegExp(i).test(n.pathname):n.pathname.startsWith(g)}}:null),E),k?o.createElement("span",null,v,o.createElement(u.Z,_&&{width:12,height:12})):v)}function b(e){var n=e.className,t=e.isDropdownItem,l=void 0!==t&&t,c=(0,a.Z)(e,f),u=o.createElement(p,(0,r.Z)({className:(0,i.Z)(l?"dropdown__link":"navbar__item navbar__link",n)},c));return l?o.createElement("li",null,u):u}function E(e){var n=e.className,t=(e.isDropdownItem,(0,a.Z)(e,v));return o.createElement("li",{className:"menu__list-item"},o.createElement(p,(0,r.Z)({className:(0,i.Z)("menu__link",n)},t)))}n.Z=function(e){var n,t=e.mobile,i=void 0!==t&&t,l=(e.position,(0,a.Z)(e,h)),c=i?E:b;return o.createElement(c,(0,r.Z)({},l,{activeClassName:null!=(n=l.activeClassName)?n:(0,m.E)(i)}))}},6400:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(7462),a=t(3366),o=t(7294),i=t(5525),l=t(6730),c=t(6010),u=t(6253),s=t(3773),m=t(8780),d=["docId","label","docsPluginId"];function f(e){var n,t=e.docId,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,d),p=(0,l.Iw)(v),b=p.activeVersion,E=p.activeDoc,Z=(0,s.J)(v).preferredVersion,g=(0,l.yW)(v),w=function(e,n){var t=e.flatMap((function(e){return e.docs})),r=t.find((function(e){return e.id===n}));if(!r){var a=t.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+n+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,m.uniq)([b,Z,g].filter(Boolean)),t),k=(0,u.E)(h.mobile);return o.createElement(i.Z,(0,r.Z)({exact:!0},h,{className:(0,c.Z)(h.className,(n={},n[k]=(null==E?void 0:E.sidebar)&&E.sidebar===w.sidebar,n)),activeClassName:k,label:null!=f?f:w.id,to:w.path}))}},9308:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(7462),a=t(3366),o=t(7294),i=t(5525),l=t(3154),c=t(6730),u=t(3773),s=t(4973),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(n){return n.id===e.mainDocId}))};function f(e){var n,t,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,p=e.dropdownItemsBefore,b=e.dropdownItemsAfter,E=(0,a.Z)(e,m),Z=(0,c.Iw)(v),g=(0,c.gB)(v),w=(0,c.yW)(v),k=(0,u.J)(v),_=k.preferredVersion,C=k.savePreferredVersionName;var y,N=(y=g.map((function(e){var n=(null==Z?void 0:Z.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:n.path,isActive:function(){return e===(null==Z?void 0:Z.activeVersion)},onClick:function(){C(e.name)}}})),[].concat(p,y,b)),L=null!=(n=null!=(t=Z.activeVersion)?t:_)?n:w,I=f&&N?(0,s.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):L.label,D=f&&N?void 0:d(L).path;return N.length<=1?o.createElement(i.Z,(0,r.Z)({},E,{mobile:f,label:I,to:D,isActive:h?function(){return!1}:void 0})):o.createElement(l.Z,(0,r.Z)({},E,{mobile:f,label:I,to:D,items:N,isActive:h?function(){return!1}:void 0}))}},7250:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(7462),a=t(3366),o=t(7294),i=t(5525),l=t(6730),c=t(3773),u=["label","to","docsPluginId"];function s(e){var n,t=e.label,s=e.to,m=e.docsPluginId,d=(0,a.Z)(e,u),f=(0,l.zu)(m),v=(0,c.J)(m).preferredVersion,h=(0,l.yW)(m),p=null!=(n=null!=f?f:v)?n:h,b=null!=t?t:p.label,E=null!=s?s:function(e){return e.docs.find((function(n){return n.id===e.mainDocId}))}(p).path;return o.createElement(i.Z,(0,r.Z)({},d,{label:b,to:E}))}},3154:function(e,n,t){var r=t(7462),a=t(3366),o=t(7294),i=t(6010),l=t(3773),c=t(5525),u=t(6253),s=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,n){return e.some((function(e){return function(e,n){return!!(0,l.Mg)(e.to,n)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(n))||!(!e.activeBasePath||!n.startsWith(e.activeBasePath))}(e,n)}))}function v(e){var n,t=e.items,l=e.position,m=e.className,d=(0,a.Z)(e,s),f=(0,o.useRef)(null),v=(0,o.useRef)(null),h=(0,o.useState)(!1),p=h[0],b=h[1];return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===l,"dropdown--show":p})},o.createElement(c.O,(0,r.Z)({className:(0,i.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!p))}}),null!=(n=d.children)?n:d.label),o.createElement("ul",{ref:v,className:"dropdown__menu"},t.map((function(e,n){return o.createElement(u.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var r=f.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:n}))}))))}function h(e){var n,t=e.items,s=e.className,d=(e.position,(0,a.Z)(e,m)),v=(0,l.be)(),h=f(t,v),p=(0,l.uR)({initialState:function(){return!h}}),b=p.collapsed,E=p.toggleCollapsed,Z=p.setCollapsed;return(0,o.useEffect)((function(){h&&Z(!h)}),[v,h,Z]),o.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":b})},o.createElement(c.O,(0,r.Z)({role:"button",className:(0,i.Z)("menu__link menu__link--sublist",s)},d,{onClick:function(e){e.preventDefault(),E()}}),null!=(n=d.children)?n:d.label),o.createElement(l.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},t.map((function(e,n){return o.createElement(u.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:n}))}))))}n.Z=function(e){var n=e.mobile,t=void 0!==n&&n,r=(0,a.Z)(e,d),i=t?h:v;return o.createElement(i,r)}},6253:function(e,n,t){t.d(n,{Z:function(){return g},E:function(){return Z}});var r=t(3366),a=t(7294),o=t(5525),i=t(3154),l=t(7462),c=["width","height"],u=function(e){var n=e.width,t=void 0===n?20:n,o=e.height,i=void 0===o?20:o,u=(0,r.Z)(e,c);return a.createElement("svg",(0,l.Z)({viewBox:"0 0 20 20",width:t,height:i,"aria-hidden":"true"},u),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},s=t(2263),m=t(3773),d="iconLanguage_3vod",f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function v(e){var n=e.mobile,t=e.dropdownItemsBefore,o=e.dropdownItemsAfter,c=(0,r.Z)(e,f),v=(0,s.Z)().i18n,h=v.currentLocale,p=v.locales,b=v.localeConfigs,E=(0,m.l5)();function Z(e){return b[e].label}var g=p.map((function(e){var n="pathname://"+E.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:Z(e),to:n,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),w=[].concat(t,g,o),k=n?"Languages":Z(h);return a.createElement(i.Z,(0,l.Z)({},c,{href:"#",mobile:n,label:a.createElement("span",null,a.createElement(u,{className:d}),a.createElement("span",null,k)),items:w}))}var h=function(){return null};function p(e){return e.mobile?null:a.createElement(h,null)}var b=["type"],E={default:function(){return o.Z},localeDropdown:function(){return v},search:function(){return p},dropdown:function(){return i.Z},docsVersion:function(){return t(7250).Z},docsVersionDropdown:function(){return t(9308).Z},doc:function(){return t(6400).Z}};var Z=function(e){return e?"menu__link--active":"navbar__link--active"};function g(e){var n=e.type,t=(0,r.Z)(e,b),o=function(e,n){return e&&"default"!==e?e:n?"dropdown":"default"}(n,void 0!==t.items),i=function(e){var n=E[e];if(!n)throw new Error('No NavbarItem component found for type "'+e+'".');return n()}(o);return a.createElement(i,t)}},3946:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7294),a=t(5977),o=t(4973),i=t(3773),l="skipToContent_1oUP";function c(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,r.useRef)(null),n=(0,a.k6)().action;return(0,i.SL)((function(t){var r=t.location;e.current&&!r.hash&&"PUSH"===n&&c(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:l,onClick:function(e){e.preventDefault();var n=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");n&&c(n)}},r.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))}},2924:function(e,n,t){var r=t(7294).createContext(void 0);n.Z=r},5662:function(e,n,t){var r=t(7294),a=t(3773);n.Z=function(e){var n=(0,r.useState)(e),t=n[0],o=n[1],i=(0,r.useRef)(!1),l=(0,r.useRef)(0),c=(0,r.useCallback)((function(e){null!==e&&(l.current=e.getBoundingClientRect().height)}),[]);return(0,a.RF)((function(n,t){if(e){var r=n.scrollY;if(r<l.current)o(!0);else if(i.current)i.current=!1;else{var a=null==t?void 0:t.scrollY,c=document.documentElement.scrollHeight-l.current,u=window.innerHeight;a&&r>=a?o(!1):r+u<c&&o(!0)}}})),(0,a.SL)((function(n){if(e)return n.location.hash?(i.current=!0,void o(!1)):void o(!0)})),{navbarRef:c,isNavbarVisible:t}}},8245:function(e,n,t){var r=t(7294);n.Z=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function n(n){"keydown"===n.type&&"Tab"===n.key&&document.body.classList.add(e),"mousedown"===n.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",n),document.addEventListener("mousedown",n),function(){document.body.classList.remove(e),document.removeEventListener("keydown",n),document.removeEventListener("mousedown",n)}}),[])}},1839:function(e,n,t){var r=t(7294);n.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},6459:function(e,n,t){function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}t.d(n,{Z:function(){return r}})}}]);