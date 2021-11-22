"use strict";(self.webpackChunkdatabend_official_front=self.webpackChunkdatabend_official_front||[]).push([[3813],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=i(t),u=a,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1529:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return i},assets:function(){return m},toc:function(){return c},default:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],s={},p="\u6280\u672f\u5206\u4eab | MySQL\u8fdb\u7a0b\u53f7\u3001\u8fde\u63a5ID\u3001\u67e5\u8be2ID\u3001InnoDB\u7ebf\u7a0b\u4e0e\u7cfb\u7edf\u7ebf\u7a0b\u5982\u4f55\u5bf9\u5e94",i={permalink:"/blog/howto-find-out-os-mysql-innodb-thread",source:"@site/blog/howto-find-out-os-mysql-innodb-thread.md",title:"\u6280\u672f\u5206\u4eab | MySQL\u8fdb\u7a0b\u53f7\u3001\u8fde\u63a5ID\u3001\u67e5\u8be2ID\u3001InnoDB\u7ebf\u7a0b\u4e0e\u7cfb\u7edf\u7ebf\u7a0b\u5982\u4f55\u5bf9\u5e94",description:"\u4e00\u6587\u5feb\u901f\u638c\u63e1 MySQL\u8fdb\u7a0b\u53f7\u3001\u8fde\u63a5ID\u3001\u67e5\u8be2ID\u3001InnoDB\u7ebf\u7a0b\u4e0e\u7cfb\u7edf\u7ebf\u7a0b\u7684\u5bf9\u5e94\u5173\u7cfb\u3002",date:"2021-11-22T01:26:51.945Z",formattedDate:"November 22, 2021",tags:[],readingTime:7.785,truncated:!1,authors:[],prevItem:{title:"Databend architecture",permalink:"/blog/databend-architecture"},nextItem:{title:"\u6570\u636e\u5e93\u7d22\u5f15\u603b\u7ed3\uff1a\u6a21\u578b\u6570\u7a7a\u8fd0\u6700\u5feb",permalink:"/blog/2021/11/22/songhua"}},m={authorsImageUrls:[]},c=[{value:"\u5ef6\u4f38\u9605\u8bfb",id:"\u5ef6\u4f38\u9605\u8bfb",children:[],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e00\u6587\u5feb\u901f\u638c\u63e1 MySQL\u8fdb\u7a0b\u53f7\u3001\u8fde\u63a5ID\u3001\u67e5\u8be2ID\u3001InnoDB\u7ebf\u7a0b\u4e0e\u7cfb\u7edf\u7ebf\u7a0b\u7684\u5bf9\u5e94\u5173\u7cfb\u3002")),(0,o.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6000\u7591\u67d0\u4e2aMySQL\u5185\u5b58\u67e5\u8be2\u5bfc\u81f4CPU\u6216\u78c1\u76d8I/O\u6d88\u8017\u7279\u522b\u9ad8\uff0c\u4f46\u53c8\u4e0d\u786e\u5b9a\u5177\u4f53\u662f\u54ea\u4e2aSQL\u5f15\u8d77\u7684\u3002"),(0,o.kt)("p",null,"\u6216\u8005\u5f53InnoDB\u5f15\u64ce\u5185\u90e8\u6709semaphore wait\u65f6\uff0c\u60f3\u77e5\u9053\u5177\u4f53\u662f\u54ea\u4e2a\u7ebf\u7a0b/\u67e5\u8be2\u5f15\u8d77\u7684\u3002\u591a\u8bf4\u4e00\u4e0b\uff0c\u5f53\u6709semaphore wait\u4e8b\u4ef6\u8d85\u8fc7600\u79d2\u7684\u8bdd\uff0cInnoDB\u4f1a\u53d1\u51facrash\u4fe1\u53f7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"InnoDB: ###### Diagnostic info printed to the standard error stream\n2020-12-13T09:41:33.810011Z 0 [ERROR] [FATAL] InnoDB: Semaphore wait has lasted > 600 seconds. We intentionally crash the server because it appears to be hung.\n2020-12-13 10:41:33 0x7f3d92a4e700 InnoDB: Assertion failure in thread 139902430013184 in file ut0ut.cc line 917\nInnoDB: We intentionally generate a memory trap.\nInnoDB: Submit a detailed bug report to http://bugs.mysql.com.\nInnoDB: If you get repeated assertion failures or crashes, even\nInnoDB: immediately after the mysqld startup, there may be\nInnoDB: corruption in the InnoDB tablespace. Please refer to\nInnoDB: http://dev.mysql.com/doc/refman/8.0/en/forcing-innodb-recovery.html\nInnoDB: about forcing recovery.\n09:41:33 UTC - mysqld got signal 6 ;\n")),(0,o.kt)("p",null,"\u56e0\u6b64\u4e5f\u8981\u76d1\u63a7InnoDB\u7684semaphore wait\u72b6\u6001\uff0c\u4e00\u65e6\u8d85\u8fc7\u9608\u503c\uff0c\u5c31\u8981\u5c3d\u5feb\u62a5\u8b66\u5e76\u5206\u6790\u51fa\u95ee\u9898\u539f\u56e0\uff0c\u53ca\u65f6\u6740\u6389\u6216\u505c\u6b62\u5f15\u8d77\u7b49\u5f85\u7684\u67e5\u8be2\u8bf7\u6c42\u3002"),(0,o.kt)("p",null,"\u4e0d\u8fc7\u672c\u6587\u60f3\u8ba8\u8bba\u7684\u662f\uff0cMySQL\u7684\u8fdb\u7a0bID\u3001\u5185\u90e8\u67e5\u8be2ID\u3001\u5185\u90e8\u7ebf\u7a0bID\uff0c\u548c\u64cd\u4f5c\u7cfb\u7edf\u5c42\u7684\u8fdb\u7a0bID\u3001\u7ebf\u7a0b\u5982\u4f55\u5bf9\u5e94\u8d77\u6765\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1\u3001\u64cd\u4f5c\u7cfb\u7edf\u8fdb\u7a0bID"),"\nMySQL\u662f\u4e00\u4e2a\u5355\u8fdb\u7a0b\u591a\u7ebf\u7a0b\u7684\u670d\u52a1\u7a0b\u5e8f\uff0c\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ps -ef|grep mysqld")," \u5c31\u80fd\u770b\u5230\u5176\u7cfb\u7edf\u8fdb\u7a0bID\u4e86\u3002\u53e6\u5916\uff0c\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"my.cnf")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u589e\u52a0\u4e00\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"innodb_status_file = 1")," \u65f6\uff0c\u4e5f\u4f1a\u751f\u6210\u5e26\u6709\u7cfb\u7edf\u8fdb\u7a0bID\u7684innodb status \u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@yejr.run]# ps -ef | grep mysqld\nmysql    38801     1  0 Jun13 ?        00:03:30 /usr/local/GreatSQL-8.0.22/bin/mysqld --defaults-file=/mysql/data06/my.cnf\n\n[root@yejr.run]# ls -la innodb_status.38801\n-rw-r----- 1 mysql mysql 4906 Jun 14 14:26 innodb_status.38801\n")),(0,o.kt)("p",null,"\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"innodb_status.pid")," \u7684\u4f5c\u7528\u662f\u6bcf\u969415\u79d2\u5de6\u53f3\u8f93\u51fainnodb\u5f15\u64ce\u5404\u79cd\u72b6\u6001\u4fe1\u606f\uff0c\u548c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW ENGINE INNODB STATUS")," \u7684\u4f5c\u7528\u76f8\u540c\u3002 \u4e8c\u8005\u7684\u533a\u522b\u5728\u4e8e\uff0c\u524d\u8005\uff08\u6587\u4ef6\u8f93\u51fa\u65b9\u5f0f\uff09\u7684\u8f93\u51fa\u5185\u5bb9\u957f\u5ea6\u4e0d\u53d7\u9650\u5236\uff0c\u800c\u540e\u8005\uff08\u547d\u4ee4\u884c\u8f93\u51fa\uff09\u5219\u6700\u591a\u53ea\u663e\u793a1MB\u5185\u5bb9\uff0c\u66f4\u591a\u7684\u4f1a\u88ab\u622a\u65ad\u3002\u6240\u4ee5\u52a1\u5fc5\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"innodb_status_file = 1")," \u9009\u9879\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Standard Monitor output is limited to 1MB when produced using the SHOW ENGINE INNODB STATUS statement. This limit does not apply to output written to server standard error output (stderr).\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2\u3001\u7cfb\u7edf\u7ebf\u7a0b\u548cMySQL\u8fde\u63a5ID\u3001\u67e5\u8be2ID\u7b49\u7684\u5173\u7cfb"),"\n\u4eceMySQL 5.7\u5f00\u59cb\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"performance_schema.threads")," \u8868\u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"THREAD_OS_ID")," \u5217\uff0c\u7528\u4e8e\u8bb0\u5f55MySQL\u5185\u90e8\u7ebf\u7a0b\u5bf9\u5e94\u7684\u7cfb\u7edf\u7ebf\u7a0bID\u3002"),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u8fde\u63a5\uff0c\u5e76\u6267\u884c\u4e0b\u9762\u7684SQL\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@yejr.run]# mysql -S./mysql.sock -uroot -p mymgr\n...\n# \u67e5\u5230MySQL\u7684\u8fde\u63a5ID\u662f25\uff08PROCESSLIST_ID = 25\uff09\n[root@yejr.run] [none]> show processlist;\n+----+------+-----------+-------+---------+------+-------+------------------+-----------+---------------+\n| Id | User | Host      | db    | Command | Time | State | Info             | Rows_sent | Rows_examined |\n+----+------+-----------+-------+---------+------+-------+------------------+-----------+---------------+\n| 25 | root | localhost | mymgr | Query   |    0 | init  | show processlist |         0 |             0 |\n+----+------+-----------+-------+---------+------+-------+------------------+-----------+---------------+\n\n[root@yejr.run] [mymgr]> begin; select *,sleep(1000) from t1 for update;\n...  <-- \u8fd9\u4e2aSQL\u4f1a\u8fd0\u884c\u5f88\u957f\u65f6\u95f4\uff0c\u65b9\u4fbf\u6211\u4eec\u89c2\u5bdf\n")),(0,o.kt)("p",null,"\u65b0\u5f00\u4e00\u4e2a\u7a97\u53e3\uff0c\u67e5\u770b ",(0,o.kt)("inlineCode",{parentName:"p"},"pfs.threads")," \u8868\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@yejr.run] [performance_schema]> SELECT * FROM threads WHERE PROCESSLIST_ID=25\\G\n*************************** 1. row ***************************\n          THREAD_ID: 65  <-- MySQL\u5185\u90e8\u7ebf\u7a0bID\uff0c\u4e5f\u662fPFS\u7684\u5185\u90e8\u8ba1\u6570\u5668\n               NAME: thread/sql/one_connection\n               TYPE: FOREGROUND\n     PROCESSLIST_ID: 25  <-- MySQL\u8fde\u63a5ID\n   PROCESSLIST_USER: root\n   PROCESSLIST_HOST: localhost\n     PROCESSLIST_DB: mymgr\nPROCESSLIST_COMMAND: Query\n   PROCESSLIST_TIME: 246\n  PROCESSLIST_STATE: User sleep\n   PROCESSLIST_INFO: select *,sleep(1000) from t1 for update  <-- \u6b63\u5728\u8fd0\u884c\u7684SQL\n   PARENT_THREAD_ID: NULL\n               ROLE: NULL\n       INSTRUMENTED: YES\n            HISTORY: YES\n    CONNECTION_TYPE: Socket\n       THREAD_OS_ID: 58412  <-- \u5bf9\u5e94\u64cd\u4f5c\u7cfb\u7edf\u7684\u7ebf\u7a0bID\n     RESOURCE_GROUP: USR_default\n")),(0,o.kt)("p",null,"\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"ps -Lef")," \u67e5\u770b\u5bf9\u5e94\u7684\u7cfb\u7edf\u7ebf\u7a0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@yejr.run]# ps -Lef | grep 58412  <-- \u4e0a\u9762\u67e5\u8be2pfs.threads\u770b\u5230 THREAD_OS_ID \u5217\u7684\u503c\nmysql    38801     1 58412  0   40 14:46 ?        00:00:00 /usr/local/GreatSQL-8.0.22/bin/mysqld --defaults-file=/mysql/data06/my.cnf\n")),(0,o.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"general_log=1"),"\uff0c\u90a3\u4e48\u4e5f\u80fd\u770b\u5230 ",(0,o.kt)("strong",{parentName:"p"},"general_log")," \u91cc\u6709\u8fd9\u6837\u7684\u8bb0\u5f55\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@yejr.run]# cat yejr.run.log\n\n/usr/local/GreatSQL-8.0.22/bin/mysqld, Version: 8.0.22-13 (Source distribution). started with:\nTcp port: 6001  Unix socket: mysql.sock\n#\u51e0\u4e2a\u5217\u5206\u522b\u662f\uff1a\u65f6\u95f4\u3001\u8fde\u63a5ID\u3001\u8bf7\u6c42\u7c7b\u578b\u3001\u8be6\u7ec6\u7684SQL\nTime                 Id Command    Argument\n...\n2021-06-14T14:46:47.474393+08:00       25 Query select *,sleep(1000) from t1 for update  <-- \u53ef\u4ee5\u770b\u5230\u8fde\u63a5ID\u662f25\n...\n")),(0,o.kt)("p",null,"\u518d\u67e5\u8be2 ",(0,o.kt)("inlineCode",{parentName:"p"},"pfs.events_statements_current")," \u8868\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@yejr.run] [performance_schema]> SELECT * FROM events_statements_current WHERE THREAD_ID = 65\\G\n              THREAD_ID: 65\n               EVENT_ID: 8\n           END_EVENT_ID: NULL\n             EVENT_NAME: statement/sql/select\n                 SOURCE: init_net_server_extension.cc:95\n            TIMER_START: 82217983305961000\n              TIMER_END: 82559992238886000\n             TIMER_WAIT: 342008932925000\n              LOCK_TIME: 206000000\n               SQL_TEXT: select *,sleep(1000) from t1 for update\n                 DIGEST: 4d7f4182dff4abc484010b73024b4afb35075e1b6592d14ce895a2b8764b8f46\n            DIGEST_TEXT: SELECT * , `sleep` (?) FROM `t1` FOR UPDATE\n         CURRENT_SCHEMA: mymgr\n...\n            SELECT_SCAN: 1\n...\n       NESTING_EVENT_ID: 6\n     NESTING_EVENT_TYPE: TRANSACTION\n    NESTING_EVENT_LEVEL: 0\n           STATEMENT_ID: 87  <-- \u67e5\u8be2ID\uff0c\u6bcf\u6b21\u67e5\u8be2\u8be5ID\u503c\u90fd\u4f1a\u589e\u52a0\n\n")),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW ENGINE INNODB STATUS\\G")," \u67e5\u770b\u4e8b\u52a1\u72b6\u6001\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\n# \u4e8b\u52a1ID=9322\uff0c\u8fd0\u884c\u65f6\u957f=252\u79d2\n---TRANSACTION 9322, ACTIVE 252 sec\nmysql tables in use 1, locked 1\n2 lock struct(s), heap size 1136, 1 row lock(s)\n# MySQL\u8fde\u63a5ID=25\uff0cOS\u7ebf\u7a0b\u53e5\u67c4 = 140442126739200\uff08\u540e\u9762\u518d\u4ecb\u7ecd\uff09\uff0c\u67e5\u8be2ID=87\uff08\u5bf9\u5e94\u4e0a\u9762\u7684 STATEMENT_ID\uff09\nMySQL thread id 25, OS thread handle 140442126739200, query id 87 localhost root User sleep\nselect *,sleep(1000) from t1 for update\n...\n")),(0,o.kt)("p",null,"\u518d\u770b\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"OS thread handle")," \u548c\u64cd\u4f5c\u7cfb\u7edf\u7ebf\u7a0bID\u7684\u5bf9\u5e94\u5173\u7cfb\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"OS thread handle 140442126739200")," \uff08OS thread handle\u662f\u8fdb\u7a0b\u5185\u90e8\u7528\u4e8e\u8bc6\u522b\u5404\u4e2a\u7ebf\u7a0b\u7684\u5185\u90e8ID\uff09\u8fd9\u91cc\u662f\u4e2a\u5341\u8fdb\u5236\u7684\u6570\u503c\uff0c\u9700\u8981\u5148\u8f6c\u6210\u5341\u516d\u8fdb\u5236\uff08\u6709\u65f6\u5019\u53ef\u80fd\u4f1a\u76f4\u63a5\u7528\u5341\u516d\u8fdb\u5236\u8868\u793a\uff0c\u8fd9\u4e2a\u95ee\u9898\u4e5f\u6709\u4eba\u63d0\u51fa\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://jira.mariadb.org/browse/MDEV-17237"},"MDEV-17237"),"\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@yejr.run] [performance_schema]> select lower(conv(140442126739200, 10, 16));\n+--------------------------------------+\n| lower(conv(140442126739200, 10, 16)) |\n+--------------------------------------+\n| 7fbb3b136700                         |\n+--------------------------------------+\n")),(0,o.kt)("p",null,"\u518d\u5229\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"pstack")," \u67e5\u8be2\u8be5\u53e5\u67c4\u548c\u64cd\u4f5c\u7cfb\u7edf\u7ebf\u7a0bID\u7684\u5173\u8054\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@yejr.run]# pstack `pidof mysqld` | grep 7fbb3b136700\nThread 2 (Thread 0x7fbb3b136700 (LWP 58412)):\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 LWP = 58412\uff0c\u5bf9\u5e94\u4e0a\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"THREAD_OS_ID")," \u503c\uff0cLWP\u662fLight-Weight Processes\u7684\u7f29\u5199\uff08\u8f7b\u91cf\u7ea7\u8fdb\u7a0b\uff09\u3002\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"pidstat")," \u4e5f\u80fd\u770b\u5230\u8fd9\u4e2aLWP\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@yejr.run]# pidstat -t -p 38801 | grep 58031\n03:45:02 PM  1000         -     58031    0.00    0.00    0.00    0.00     2  |__mysqld\n")),(0,o.kt)("p",null,"\u3010\u7279\u522b\u63d0\u9192\u3011",(0,o.kt)("strong",{parentName:"p"},"\u8fd0\u884cpstack\u4f1a\u77ed\u6682\u963b\u585emysqld\u8fdb\u7a0b\uff0c\u6240\u4ee5\u8bf7\u5207\u52ff\u5728\u4e1a\u52a1\u9ad8\u5cf0\u671f\u6267\u884c\uff0c\u9664\u975e\u4e07\u4e0d\u5f97\u5df2"),"\u3002"),(0,o.kt)("p",null,"\u6709\u65f6\u5019\u53ef\u80fd\u4f1a\u770b\u5230\u7c7b\u4f3c\u4e0b\u9762\u7684 innodb status\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SEMAPHORES\n----------\nOS WAIT ARRAY INFO: reservation count 15143\n--Thread 140585128785664 has waited at buf0flu.cc line 1209 for 237 seconds the semaphore:\nSX-lock on RW-latch at 0x7fdb1fbe3f80 created in file buf0buf.cc line 1460\na writer (thread id 140584786024192) has reserved it in mode SX\nnumber of readers 0, waiters flag 1, lock_word: 10000000\nLast time read locked in file row0sel.cc line 3758\nLast time write locked in file /export/home/pb2/build/sb_0-34537258-1560179931.8/mysql-5.7.27/storage/innobase/fsp/fsp0fsp.cc line 167\n")),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u8fd9\u6bb5\u4fe1\u606f\u4e2d\uff0c\u7ebf\u7a0b ",(0,o.kt)("inlineCode",{parentName:"p"},"Thread 140585128785664")," \u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"buf0flu.cc\u4ee3\u78011209\u884c"),"\u8fd9\u91cc\u7b49\u5f85\u4e86237\u79d2\uff0c\u60f3\u8981\u8bf7\u6c42 SX-lock \u7684 RW-latch\uff0c\u88ab\u53e6\u4e00\u4e2a\u7ebf\u7a0b ",(0,o.kt)("inlineCode",{parentName:"p"},"thread id 140584786024192")," \u7ed9\u963b\u585e\u4e86\uff0c\u5b83\u6301\u6709\u7684\u662f SX latch\u3002"),(0,o.kt)("p",null,"\u8fd9\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u5229\u7528pstack\u53cd\u67e5\u5bf9\u5e94\u7684LWP\uff0c\u518d\u53cd\u67e5\u51faPROCESSLIST_ID\uff0c\u4ee5\u53ca\u6b63\u5728\u6267\u884c\u7684SQL\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"pfs.events_statements_current")," \u4e2d\u53ea\u80fd\u67e5\u5230\u5f53\u524d\u6267\u884c\u7684SQL\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"pfs.events_statements_history")," \u67e5\u770b\u6700\u8fd1\u6267\u884c\u8fc7\u7684SQL\u3002"),(0,o.kt)("p",null,"Enjoy MySQL :)"),(0,o.kt)("h2",{id:"\u5ef6\u4f38\u9605\u8bfb"},"\u5ef6\u4f38\u9605\u8bfb"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"15.17.3 InnoDB Standard Monitor and Lock Monitor Output, ",(0,o.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-standard-monitor.html"},"https://dev.mysql.com/doc/refman/8.0/en/innodb-standard-monitor.html")),(0,o.kt)("li",{parentName:"ul"},"27.12.21.6 The threads Table, ",(0,o.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/performance-schema-threads-table.html"},"https://dev.mysql.com/doc/refman/8.0/en/performance-schema-threads-table.html")),(0,o.kt)("li",{parentName:"ul"},"27.12.6.1 The events_statements_current Table, ",(0,o.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/performance-schema-events-statements-current-table.html"},"https://dev.mysql.com/doc/refman/8.0/en/performance-schema-events-statements-current-table.html")),(0,o.kt)("li",{parentName:"ul"},"27.12.6.2 The events_statements_history Table, ",(0,o.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/performance-schema-events-statements-history-table.html"},"https://dev.mysql.com/doc/refman/8.0/en/performance-schema-events-statements-history-table.html"))))}u.isMDXComponent=!0}}]);