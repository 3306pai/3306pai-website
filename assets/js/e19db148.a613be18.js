"use strict";(self.webpackChunkdatabend_official_front=self.webpackChunkdatabend_official_front||[]).push([[5330],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=l(n),f=a,s=b["".concat(c,".").concat(f)]||b[f]||d[f]||o;return n?r.createElement(s,u(u({ref:t},p),{},{components:n})):r.createElement(s,u({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6050:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],i={title:"Databend architecture",description:"Databend \u6574\u4f53\u67b6\u6784",slug:"databend-architecture",authors:[{name:"BohuTang",title:"Co-creator of Databend",url:"https://bohutang.me",image_url:"https://avatars.githubusercontent.com/u/172204?v=4"}],tags:["Databend"],hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/databend-architecture",source:"@site/blog/2021-11-22-databend-architecture.md",title:"Databend architecture",description:"Databend \u6574\u4f53\u67b6\u6784",date:"2021-11-22T00:00:00.000Z",formattedDate:"November 22, 2021",tags:[{label:"Databend",permalink:"/blog/tags/databend"}],readingTime:7.28,truncated:!0,authors:[{name:"BohuTang",title:"Co-creator of Databend",url:"https://bohutang.me",image_url:"https://avatars.githubusercontent.com/u/172204?v=4",imageURL:"https://avatars.githubusercontent.com/u/172204?v=4"}],prevItem:{title:"MySQL\u5185\u5b58\u7edf\u8ba1\u7684\u5206\u6790\u4e0e\u5b9e\u8df5--\u5218\u5f00\u6d0b|\u7231\u53ef\u751f",permalink:"/blog/liukaiyang-interview"},nextItem:{title:"\u6280\u672f\u5206\u4eab | MySQL\u8fdb\u7a0b\u53f7\u3001\u8fde\u63a5ID\u3001\u67e5\u8be2ID\u3001InnoDB\u7ebf\u7a0b\u4e0e\u7cfb\u7edf\u7ebf\u7a0b\u5982\u4f55\u5bf9\u5e94",permalink:"/blog/howto-find-out-os-mysql-innodb-thread"}},p={authorsImageUrls:[void 0]},d=[],b={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Databend \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u3001\u5b8c\u5168\u9762\u5411\u4e91\u67b6\u6784\u7684\u65b0\u5f0f\u6570\u4ed3\uff0c\u5b83\u63d0\u4f9b\u5feb\u901f\u7684\u5f39\u6027\u6269\u5c55\u80fd\u529b\uff0c\u5e76\u7ed3\u5408\u4e91\u7684\u5f39\u6027\u3001\u7b80\u5355\u6027\u548c\u4f4e\u6210\u672c\uff0c\u4f7f Data Cloud \u6784\u5efa\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002\nDatabend \u628a\u6570\u636e\u5b58\u50a8\u5728\u50cf AWS S3 \uff0cAzure Blob \u8fd9\u4e9b\u4e91\u4e0a\u7684\u5b58\u50a8\u7cfb\u7edf\uff0c\u53ef\u4ee5\u4f7f\u4e0d\u540c\u7684\u8ba1\u7b97\u8282\u70b9\u6302\u8f7d\u540c\u4e00\u4efd\u6570\u636e\uff0c\u4ece\u800c\u505a\u5230\u8f83\u9ad8\u7684\u5f39\u6027\uff0c\u5b9e\u73b0\u5bf9\u8d44\u6e90\u7684\u7cbe\u7ec6\u5316\u63a7\u5236\u3002"),(0,o.kt)("h1",{id:"databend-architecture"},"Databend architecture"),(0,o.kt)("p",null,"Databend \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u3001\u5b8c\u5168\u9762\u5411\u4e91\u67b6\u6784\u7684\u65b0\u5f0f\u6570\u4ed3\uff0c\u5b83\u63d0\u4f9b\u5feb\u901f\u7684\u5f39\u6027\u6269\u5c55\u80fd\u529b\uff0c\u5e76\u7ed3\u5408\u4e91\u7684\u5f39\u6027\u3001\u7b80\u5355\u6027\u548c\u4f4e\u6210\u672c\uff0c\u4f7f Data Cloud \u6784\u5efa\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002\nDatabend \u628a\u6570\u636e\u5b58\u50a8\u5728\u50cf AWS S3 \uff0cAzure Blob \u8fd9\u4e9b\u4e91\u4e0a\u7684\u5b58\u50a8\u7cfb\u7edf\uff0c\u53ef\u4ee5\u4f7f\u4e0d\u540c\u7684\u8ba1\u7b97\u8282\u70b9\u6302\u8f7d\u540c\u4e00\u4efd\u6570\u636e\uff0c\u4ece\u800c\u505a\u5230\u8f83\u9ad8\u7684\u5f39\u6027\uff0c\u5b9e\u73b0\u5bf9\u8d44\u6e90\u7684\u7cbe\u7ec6\u5316\u63a7\u5236\u3002\nDatabend \u5728\u8bbe\u8ba1\u4e0a\u4e13\u6ce8\u4ee5\u4e0b\u80fd\u529b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f39\u6027 \u5728 Databend \u4e2d\uff0c\u5b58\u50a8\u548c\u8ba1\u7b97\u8d44\u6e90\u53ef\u4ee5\u6309\u9700\u3001\u6309\u91cf\u5f39\u6027\u6269\u5c55\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u5168 Databend \u4e2d\u6570\u636e\u6587\u4ef6\u548c\u7f51\u7edc\u4f20\u8f93\u90fd\u662f\u7aef\u5230\u7aef\u52a0\u5bc6\uff0c\u5e76\u5728 SQL \u7ea7\u522b\u63d0\u4f9b\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u63a7\u5236\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6613\u7528 Databend \u517c\u5bb9 ANSI SQL\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528 MySQL \u548c ClickHouse \u5ba2\u6237\u7aef\u63a5\u5165\uff0c\u51e0\u4e4e\u65e0\u5b66\u4e60\u6210\u672c\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6210\u672c Databend \u5904\u7406\u67e5\u8be2\u975e\u5e38\u9ad8\u6548\uff0c\u7528\u6237\u53ea\u9700\u8981\u4e3a\u4f7f\u7528\u7684\u8d44\u6e90\u4ed8\u8d39\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://datafuse-1255499614.cos.ap-beijing.myqcloud.com/architecture_v1.png",alt:null})))}f.isMDXComponent=!0}}]);