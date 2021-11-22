"use strict";(self.webpackChunkdatabend_official_front=self.webpackChunkdatabend_official_front||[]).push([[3813],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1529:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"\u6280\u672f\u5206\u4eab | MySQL\u8fdb\u7a0b\u53f7\u3001\u8fde\u63a5ID\u3001\u67e5\u8be2ID\u3001InnoDB\u7ebf\u7a0b\u4e0e\u7cfb\u7edf\u7ebf\u7a0b\u5982\u4f55\u5bf9\u5e94",slug:"howto-find-out-os-mysql-innodb-thread",tags:["Linux","MySQL","InnoDB"],hide_table_of_contents:!1},c=void 0,u={permalink:"/blog/howto-find-out-os-mysql-innodb-thread",source:"@site/blog/howto-find-out-os-mysql-innodb-thread.md",title:"\u6280\u672f\u5206\u4eab | MySQL\u8fdb\u7a0b\u53f7\u3001\u8fde\u63a5ID\u3001\u67e5\u8be2ID\u3001InnoDB\u7ebf\u7a0b\u4e0e\u7cfb\u7edf\u7ebf\u7a0b\u5982\u4f55\u5bf9\u5e94",description:"\u5bfc\u8bfb",date:"2021-11-22T02:31:41.937Z",formattedDate:"November 22, 2021",tags:[{label:"Linux",permalink:"/blog/tags/linux"},{label:"MySQL",permalink:"/blog/tags/my-sql"},{label:"InnoDB",permalink:"/blog/tags/inno-db"}],readingTime:7.81,truncated:!0,authors:[],prevItem:{title:"Databend architecture",permalink:"/blog/databend-architecture"},nextItem:{title:"\u6570\u636e\u5e93\u7d22\u5f15\u603b\u7ed3\uff1a\u6a21\u578b\u6570\u7a7a\u8fd0\u6700\u5feb",permalink:"/blog/2021/11/22/songhua"}},p={authorsImageUrls:[]},s=[{value:"\u5bfc\u8bfb",id:"\u5bfc\u8bfb",children:[],level:2}],f={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5bfc\u8bfb"},"\u5bfc\u8bfb"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e00\u6587\u5feb\u901f\u638c\u63e1 MySQL\u8fdb\u7a0b\u53f7\u3001\u8fde\u63a5ID\u3001\u67e5\u8be2ID\u3001InnoDB\u7ebf\u7a0b\u4e0e\u7cfb\u7edf\u7ebf\u7a0b\u7684\u5bf9\u5e94\u5173\u7cfb\u3002")),(0,a.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6000\u7591\u67d0\u4e2aMySQL\u5185\u5b58\u67e5\u8be2\u5bfc\u81f4CPU\u6216\u78c1\u76d8I/O\u6d88\u8017\u7279\u522b\u9ad8\uff0c\u4f46\u53c8\u4e0d\u786e\u5b9a\u5177\u4f53\u662f\u54ea\u4e2aSQL\u5f15\u8d77\u7684\u3002"),(0,a.kt)("p",null,"\u6216\u8005\u5f53InnoDB\u5f15\u64ce\u5185\u90e8\u6709semaphore wait\u65f6\uff0c\u60f3\u77e5\u9053\u5177\u4f53\u662f\u54ea\u4e2a\u7ebf\u7a0b/\u67e5\u8be2\u5f15\u8d77\u7684\u3002\u591a\u8bf4\u4e00\u4e0b\uff0c\u5f53\u6709semaphore wait\u4e8b\u4ef6\u8d85\u8fc7600\u79d2\u7684\u8bdd\uff0cInnoDB\u4f1a\u53d1\u51facrash\u4fe1\u53f7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"InnoDB: ###### Diagnostic info printed to the standard error stream\n2020-12-13T09:41:33.810011Z 0 [ERROR] [FATAL] InnoDB: Semaphore wait has lasted > 600 seconds. We intentionally crash the server because it appears to be hung.\n2020-12-13 10:41:33 0x7f3d92a4e700 InnoDB: Assertion failure in thread 139902430013184 in file ut0ut.cc line 917\nInnoDB: We intentionally generate a memory trap.\nInnoDB: Submit a detailed bug report to http://bugs.mysql.com.\nInnoDB: If you get repeated assertion failures or crashes, even\nInnoDB: immediately after the mysqld startup, there may be\nInnoDB: corruption in the InnoDB tablespace. Please refer to\nInnoDB: http://dev.mysql.com/doc/refman/8.0/en/forcing-innodb-recovery.html\nInnoDB: about forcing recovery.\n09:41:33 UTC - mysqld got signal 6 ;\n")),(0,a.kt)("p",null,"\u56e0\u6b64\u4e5f\u8981\u76d1\u63a7InnoDB\u7684semaphore wait\u72b6\u6001\uff0c\u4e00\u65e6\u8d85\u8fc7\u9608\u503c\uff0c\u5c31\u8981\u5c3d\u5feb\u62a5\u8b66\u5e76\u5206\u6790\u51fa\u95ee\u9898\u539f\u56e0\uff0c\u53ca\u65f6\u6740\u6389\u6216\u505c\u6b62\u5f15\u8d77\u7b49\u5f85\u7684\u67e5\u8be2\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u4e0d\u8fc7\u672c\u6587\u60f3\u8ba8\u8bba\u7684\u662f\uff0cMySQL\u7684\u8fdb\u7a0bID\u3001\u5185\u90e8\u67e5\u8be2ID\u3001\u5185\u90e8\u7ebf\u7a0bID\uff0c\u548c\u64cd\u4f5c\u7cfb\u7edf\u5c42\u7684\u8fdb\u7a0bID\u3001\u7ebf\u7a0b\u5982\u4f55\u5bf9\u5e94\u8d77\u6765\u3002"))}m.isMDXComponent=!0}}]);