"use strict";(self.webpackChunkdatabend_official_front=self.webpackChunkdatabend_official_front||[]).push([[5400],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4131:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],u={slug:"gaussdb-cloud-native-new-power",title:"GaussDB(for MySQL) \u6784\u7b51\u4e91\u539f\u751f\u7684\u7ade\u4e89\u529b- \u8bb8\u5609\u6b63",tags:["3306\u03c0 \u6570\u636e\u5e93\u670b\u53cb\u5708"]},i="GaussDB(for MySQL) \u6784\u7b51\u4e91\u539f\u751f\u7684\u7ade\u4e89\u529b- \u8bb8\u5609\u6b63",c={permalink:"/blog/gaussdb-cloud-native-new-power",source:"@site/blog/2023-09-03-GaussDB-cloud-nagtive-2023-3306pai-bj.md",title:"GaussDB(for MySQL) \u6784\u7b51\u4e91\u539f\u751f\u7684\u7ade\u4e89\u529b- \u8bb8\u5609\u6b63",description:"\u4e3b\u9898",date:"2023-09-03T00:00:00.000Z",formattedDate:"September 3, 2023",tags:[{label:"3306\u03c0 \u6570\u636e\u5e93\u670b\u53cb\u5708",permalink:"/blog/tags/3306-\u03c0-\u6570\u636e\u5e93\u670b\u53cb\u5708"}],readingTime:1.61,truncated:!1,authors:[],nextItem:{title:"PolarDB MySQL\u8ba1\u7b97\u5c42\u5728Lego\u4f53\u7cfb\u4e0b\u7684\u53d1\u5c55 - \u6881\u8fb0",permalink:"/blog/PloarDB-MySQL-2023-3306pai-bj"}},p={authorsImageUrls:[]},s=[{value:"\u4e3b\u9898",id:"\u4e3b\u9898",children:[],level:2},{value:"\u5927\u7eb2\uff1a",id:"\u5927\u7eb2",children:[],level:2},{value:"\u4f5c\u8005\u4ecb\u7ecd",id:"\u4f5c\u8005\u4ecb\u7ecd",children:[],level:2},{value:"\u516c\u53f8\u4ecb\u7ecd",id:"\u516c\u53f8\u4ecb\u7ecd",children:[],level:2},{value:"\u516c\u53f8\u4ea7\u54c1",id:"\u516c\u53f8\u4ea7\u54c1",children:[],level:2},{value:"3306\u03c0 \u6570\u636e\u5e93\u670b\u53cb",id:"3306\u03c0-\u6570\u636e\u5e93\u670b\u53cb",children:[],level:2}],f={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e3b\u9898"},"\u4e3b\u9898"),(0,a.kt)("p",null,"\u300aGaussDB(for MySQL) \u6784\u7b51\u4e91\u539f\u751f\u7684\u7ade\u4e89\u529b\u300b"),(0,a.kt)("h2",{id:"\u5927\u7eb2"},"\u5927\u7eb2\uff1a"),(0,a.kt)("p",null,"GaussDB(for MySQL) \u4f5c\u4e3a\u534e\u4e3a\u4e91\u81ea\u7814\u7684\u65b0\u4e00\u4ee3\u4e91\u539f\u751f\u6570\u636e\u5e93\uff0c\u4f9d\u6258\u4e91\u4e0a\u591a\u79cd\u591a\u6837\u7684\u57fa\u7840\u8bbe\u65bd\u80fd\u529b\uff0c\u5c06\u63a8\u51fa\u4e00\u7cfb\u5217\u65b0\u7684\u9ad8\u7ea7\u7279\u6027\uff0c\u5e94\u7b54\u5ba2\u6237\u5bf9\u4e91\u6570\u636e\u5e93\u66f4\u9ad8\u80fd\u529b\u7684\u8981\u6c42\uff0c\u6784\u7b51\u4e91\u539f\u751f\u6570\u636e\u5e93\u7684\u6838\u5fc3\u7ade\u4e89\u529b.\n1\u3001\u5173\u4e8e GaussDB(for MySQL)\n2\u3001GaussDB(for MySQL) \u4e00\u7cfb\u5217\u9ad8\u7ea7\u7279\u6027\n3\u3001\u6280\u672f\u8def\u7ebf\u7684\u6f14\u8fdb\u548c\u5bf9\u6bd4"),(0,a.kt)("h2",{id:"\u4f5c\u8005\u4ecb\u7ecd"},"\u4f5c\u8005\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bb8\u5609\u6b63"),"\uff0cGaussDB(for MySQL)\u4ea7\u54c1\u7ecf\u7406\uff0c\u539fGaussDB(for MySQL)\u5185\u6838\u7814\u53d1"),(0,a.kt)("h2",{id:"\u516c\u53f8\u4ecb\u7ecd"},"\u516c\u53f8\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u534e\u4e3a\u4e91"),(0,a.kt)("h2",{id:"\u516c\u53f8\u4ea7\u54c1"},"\u516c\u53f8\u4ea7\u54c1"),(0,a.kt)("p",null,"GaussDB(for MySQL) \u662f\u534e\u4e3a\u81ea\u7814\u7684\u6700\u65b0\u4e00\u4ee3\u9ad8\u6027\u80fd\u4f01\u4e1a\u7ea7\u5206\u5e03\u5f0f\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u5b8c\u5168\u517c\u5bb9MySQL\u3002\u57fa\u4e8e\u534e\u4e3a\u6700\u65b0\u4e00\u4ee3DFV\u5206\u5e03\u5f0f\u5b58\u50a8\uff0c\u91c7\u7528\u8ba1\u7b97\u5b58\u50a8\u5206\u79bb\u67b6\u6784\uff0c\u6700\u9ad8\u652f\u6301128TB\u7684\u6d77\u91cf\u5b58\u50a8\uff0c\u53ef\u5b9e\u73b0\u8d85\u767e\u4e07\u7ea7QPS\u541e\u5410\uff0c\u652f\u6301\u8de8AZ\u90e8\u7f72\uff0c\u6570\u636e0\u4e22\u5931\uff0c\u65e2\u62e5\u6709\u5546\u4e1a\u6570\u636e\u5e93\u7684\u6027\u80fd\u548c\u53ef\u9760\u6027\uff0c\u53c8\u5177\u5907\u5f00\u6e90\u6570\u636e\u5e93\u7684\u7075\u6d3b\u6027\u3002"),(0,a.kt)("h2",{id:"3306\u03c0-\u6570\u636e\u5e93\u670b\u53cb"},"3306\u03c0 \u6570\u636e\u5e93\u670b\u53cb"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.huodongxing.com/event/1716596158000"},"3306\u03c0 \u6570\u636e\u5e93\u670b\u53cb")," : ",(0,a.kt)("a",{parentName:"p",href:"https://www.huodongxing.com/event/1716596158000"},"https://www.huodongxing.com/event/1716596158000")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://wubx-1255499614.cos.ap-nanjing.myqcloud.com/image/3306pai-2023916.png?wubx",alt:null})),(0,a.kt)("p",null,"\u65f6\u95f4\uff1a \xa02023\u5e74\xa09\xa0\u670816\u65e5\xa0\xa013:00\xa0-\xa018:00"),(0,a.kt)("p",null,"\u5730\u70b9\uff1a\u5317\u4eac\u5e02\u671d\u9633\u533a\u9152\u4ed9\u6865\u8def\xa06\xa0\u53f7\u9662\xa02\xa0\u53f7\u697c\xa0360\xa0\u5927\u53a6\xa0A\xa0\u5ea7\xa0F1\xa0\u53d1\u5e03\u5385"),(0,a.kt)("p",null,"\u63d0\u524d\u63d0\u95ee\u5730\u5740\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.qq.com/form/page/DTlVDVEtqcFFTQWhz"},"https://docs.qq.com/form/page/DTlVDVEtqcFFTQWhz")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://wubx-1255499614.cos.ap-nanjing.myqcloud.com/image/3306pai-2023-bj-poster.png?wubx",alt:null})))}m.isMDXComponent=!0}}]);