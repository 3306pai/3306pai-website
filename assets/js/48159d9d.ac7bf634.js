"use strict";(self.webpackChunkdatabend_official_front=self.webpackChunkdatabend_official_front||[]).push([[3066],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return L}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),a=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=a(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=a(t),L=o,m=y["".concat(p,".").concat(L)]||y[L]||d[L]||s;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function L(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var a=2;a<s;a++)i[a]=t[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4717:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return a},assets:function(){return c},toc:function(){return d},default:function(){return L}});var r=t(7462),o=t(3366),s=(t(7294),t(3905)),i=["components"],l={title:"\u6570\u636e\u5e93\u7d22\u5f15\u603b\u7ed3\uff1a\u6a21\u578b\u6570\u7a7a\u8fd0\u6700\u5feb",tags:["SQL\u4f18\u5316","\u77e5\u6570\u5802"]},p=void 0,a={permalink:"/blog/2021/11/22/songhua",source:"@site/blog/2021-11-22-songhua.md",title:"\u6570\u636e\u5e93\u7d22\u5f15\u603b\u7ed3\uff1a\u6a21\u578b\u6570\u7a7a\u8fd0\u6700\u5feb",description:"\u5927\u5bb6\u597d\uff0c\u6211\u662f\u77e5\u6570\u5802SQL \u4f18\u5316\u73ed\u8001\u5e08 \u7f51\u540d\uff1a\u9a91\u9f9f\u7684\u5154\u5b50",date:"2021-11-22T00:00:00.000Z",formattedDate:"November 22, 2021",tags:[{label:"SQL\u4f18\u5316",permalink:"/blog/tags/sql\u4f18\u5316"},{label:"\u77e5\u6570\u5802",permalink:"/blog/tags/\u77e5\u6570\u5802"}],readingTime:9.055,truncated:!1,authors:[],prevItem:{title:"Databend architecture",permalink:"/blog/databend-architecture"}},c={authorsImageUrls:[]},d=[],y={toc:d};function L(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u5927\u5bb6\u597d\uff0c\u6211\u662f\u77e5\u6570\u5802SQL \u4f18\u5316\u73ed\u8001\u5e08 \u7f51\u540d\uff1a\u9a91\u9f9f\u7684\u5154\u5b50"),(0,s.kt)("p",null,"\u6211\u4eca\u5929\u5237\u5934\u6761\u7684\u65f6\u5019 \u770b\u5230\u4e86\u4e00\u4f4d\u53eb\u300a\u8001\u733f\u8bf4\u5f00\u53d1\u300b\u603b\u7ed3\u7684\u7d22\u5f15\u4e0d\u80fd\u4f7f\u7528\u53e3\u8bc0\n\u6a21\u578b\u6570\u7a7a\u8fd0\u6700\u5feb"),(0,s.kt)("p",null,"\u6211\u89c9\u5f97\u633a\u597d\uff0c\u4f46\u662f\u56e0\u4e3a\u6ca1\u6709\u5177\u4f53\u7684\u6848\u4f8b\uff0c\u8fd8\u6709\u6ca1\u8bf4\u662f\u54ea\u4e2a\u6570\u636e\u5e93\u8fd9\u4e9b\u9700\u8981\u5b8c\u5584\u7684\u5730\u65b9\uff0c\u6240\u4ee5\u5199\u4e00\u7bc7\u6587\u7ae0\u3002"),(0,s.kt)("p",null,"\u6a21\uff1a\u6a21\u7cca\u67e5\u8be2%\u5728\u524d\u9762\u60c5\u51b5\u4e0d\u80fd\u4f7f\u7528\u7d22\u5f15\uff0c\u8fd9\u79cd\u60c5\u51b5\u975e\u5f97\u8bf4\u4e00\u4e2a\u7279\u4f8b\u5c31\u662f\u4e0d\u56de\u8868\u60c5\u51b5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"root@mysql3306.sock>[employees]>desc select dept_no from t_group2 where dept_no like '%005';\n+----+-------------+----------+------------+-------+---------------+-------------+---------+------+------+----------+--------------------------+\n| id | select_type | table    | partitions | type  | possible_keys | key         | key_len | ref  | rows | filtered | Extra                    |\n+----+-------------+----------+------------+-------+---------------+-------------+---------+------+------+----------+--------------------------+\n|  1 | SIMPLE      | t_group2 | NULL       | index | NULL          | ix_dept_no2 | 16      | NULL |   10 |    11.11 | Using where; Using index |\n+----+-------------+----------+------------+-------+---------------+-------------+---------+------+------+----------+--------------------------+\n")),(0,s.kt)("p",null,"\u578b\uff1a\u6570\u636e\u7c7b\u578b\u6709\u53d8\u5316\u7684\u65f6\u5019\u4e0d\u80fd\u4f7f\u7528"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"root@mysql3306.sock>[employees]>desc test1 ;\n+-------+-------------+------+-----+---------+-------+\n| Field | Type        | Null | Key | Default | Extra |\n+-------+-------------+------+-----+---------+-------+\n| id    | varchar(10) | YES  | MUL | NULL    |       |\n| n     | varchar(10) | YES  |     | NULL    |       |\n+-------+-------------+------+-----+---------+-------+\n2 rows in set (0.00 sec)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"root@mysql3306.sock>[employees]>select * from test1 ;\n+------+------+\n| id   | n    |\n+------+------+\n| 1000 | NULL |\n| NULL | NULL |\n+------+------+\n2 rows in set (0.00 sec)\n\nroot@mysql3306.sock>[employees]>show index from test1 ;\n+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n| Table | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment | Visible | Expression |\n+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n| test1 |          1 | ix_id    |            1 | id          | A         |           2 |     NULL |   NULL | YES  | BTREE      |         |               | YES     | NULL       |\n+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n1 row in set (0.01 sec)\n\nroot@mysql3306.sock>[employees]>desc select * from test1 where id=1000;\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+\n| id | select_type | table | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra       |\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+\n|  1 | SIMPLE      | test1 | NULL       | ALL  | ix_id         | NULL | NULL    | NULL |    2 |    50.00 | Using where |\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+\n1 row in set, 3 warnings (0.00 sec)\n\nroot@mysql3306.sock>[employees]>desc select * from test1 where id='1000';\n+----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+-------+\n| id | select_type | table | partitions | type | possible_keys | key   | key_len | ref   | rows | filtered | Extra |\n+----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+-------+\n|  1 | SIMPLE      | test1 | NULL       | ref  | ix_id         | ix_id | 43      | const |    1 |   100.00 | NULL  |\n+----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+-------+\n1 row in set, 1 warning (0.01 sec)\n")),(0,s.kt)("p",null,"\u6570\uff1a\u7d22\u5f15\u5217\u5957\u7528\u51fd\u6570\u4e0d\u80fd\u4f7f\u7528\u7d22\u5f15\uff0c\u8fd9\u65f6\u5019mysql 5.7\u53ef\u4ee5\u7528\u865a\u62df\u5217\uff0c8.0\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u51fd\u6570\u7d22\u5f15\uff0c5.6\u7684\u65f6\u5019\u53ef\u4ee5\u5229\u7528\u7c7b\u4f3c\u89e3\u65b9\u7a0b\u65b9\u6cd5\u89e3\u5f00"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"root@mysql3306.sock>[employees]>desc select * from test1 where id='1000';\n+----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+-------+\n| id | select_type | table | partitions | type | possible_keys | key   | key_len | ref   | rows | filtered | Extra |\n+----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+-------+\n|  1 | SIMPLE      | test1 | NULL       | ref  | ix_id         | ix_id | 43      | const |    1 |   100.00 | NULL  |\n+----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+-------+\n1 row in set, 1 warning (0.01 sec)\n\nroot@mysql3306.sock>[employees]>desc select * from test1 where concat(id,'')='1000';\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+\n| id | select_type | table | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra       |\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+\n|  1 | SIMPLE      | test1 | NULL       | ALL  | NULL          | NULL | NULL    | NULL |    2 |   100.00 | Using where |\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+\n1 row in set, 1 warning (0.00 sec)\nroot@mysql3306.sock>[employees]>create index idx_t1_ke1 on test1((concat(id,'')));\nQuery OK, 0 rows affected (0.03 sec)\nRecords: 0  Duplicates: 0  Warnings: 0\n\nroot@mysql3306.sock>[employees]>desc select * from test1 where concat(id,'')='1000';\n+----+-------------+-------+------------+------+---------------+------------+---------+-------+------+----------+-------+\n| id | select_type | table | partitions | type | possible_keys | key        | key_len | ref   | rows | filtered | Extra |\n+----+-------------+-------+------------+------+---------------+------------+---------+-------+------+----------+-------+\n|  1 | SIMPLE      | test1 | NULL       | ref  | idx_t1_ke1    | idx_t1_ke1 | 43      | const |    1 |   100.00 | NULL  |\n+----+-------------+-------+------------+------+---------------+------------+---------+-------+------+----------+-------+\n1 row in set, 1 warning (0.00 sec)\n")),(0,s.kt)("p",null,"\u7a7a\uff1a\u7d22\u5f15\u5217\u6709\u7a7a\u503c\u4f7f\u7528is null \u5c31\u4e0d\u80fd\u4f7f\u7528\u7d22\u5f15\uff0c\u8fd9\u4e2a\u5728oracle \u662f\u6ca1\u95ee\u9898\u7684\n\u4f46\u662f\u5728mysql \u8fd9\u4e2a\u662f\u9519\u7684"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"root@mysql3306.sock>[employees]>desc test1 ;\n+-------+-------------+------+-----+---------+-------+\n| Field | Type        | Null | Key | Default | Extra |\n+-------+-------------+------+-----+---------+-------+\n| id    | varchar(10) | YES  | MUL | NULL    |       |\n| n     | varchar(10) | YES  |     | NULL    |       |\n+-------+-------------+------+-----+---------+-------+\n2 rows in set (0.00 sec)\n\nroot@mysql3306.sock>[employees]>select * from test1 ;\n+------+------+\n| id   | n    |\n+------+------+\n| 1000 | NULL |\n| NULL | NULL |\n+------+------+\n2 rows in set (0.00 sec)\n\nroot@mysql3306.sock>[employees]>show index from test1 ;\n+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n| Table | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment | Visible | Expression |\n+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n| test1 |          1 | ix_id    |            1 | id          | A         |           2 |     NULL |   NULL | YES  | BTREE      |         |               | YES     | NULL       |\n+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n1 row in set (0.01 sec)\n\nroot@mysql3306.sock>[employees]>desc select * from test1 where id is null;\n+----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+-----------------------+\n| id | select_type | table | partitions | type | possible_keys | key   | key_len | ref   | rows | filtered | Extra                 |\n+----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+-----------------------+\n|  1 | SIMPLE      | test1 | NULL       | ref  | ix_id         | ix_id | 43      | const |    1 |   100.00 | Using index condition |\n+----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+-----------------------+\n1 row in set, 1 warning (0.00 sec)\n\nroot@mysql3306.sock>[employees]>desc select * from test1 where id is not  null;\n+----+-------------+-------+------------+-------+---------------+-------+---------+------+------+----------+-----------------------+\n| id | select_type | table | partitions | type  | possible_keys | key   | key_len | ref  | rows | filtered | Extra                 |\n+----+-------------+-------+------------+-------+---------------+-------+---------+------+------+----------+-----------------------+\n|  1 | SIMPLE      | test1 | NULL       | range | ix_id         | ix_id | 43      | NULL |    1 |   100.00 | Using index condition |\n+----+-------------+-------+------------+-------+---------------+-------+---------+------+------+----------+-----------------------+\n1 row in set, 1 warning (0.00 sec)\n")),(0,s.kt)("p",null,"\u8fd0\uff1a\u7d22\u5f15\u5217\u6709\u6570\u5b57\u8fd0\u7b97\u7684\u65f6\u5019\u4e0d\u80fd\u4f7f\u7528\u7d22\u5f15"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"root@mysql3306.sock>[employees]>desc select * from test1 where id='1000';\n+----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+-------+\n| id | select_type | table | partitions | type | possible_keys | key   | key_len | ref   | rows | filtered | Extra |\n+----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+-------+\n|1| SIMPLE      | test1 | NULL       | ref  | ix_id         | ix_id | 43      | const |    1 |100.00| NULL  |\n+----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+-------+\n1 row in set, 1 warning (0.00 sec)\n\nroot@mysql3306.sock>[employees]>desc select * from test1 where id+0='1000';\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+\n| id | select_type | table | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra       |\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+\n|1| SIMPLE      | test1 | NULL       | ALL  | NULL          | NULL | NULL    | NULL |    2 |100.00| Using where |\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+\n1 row in set, 1 warning (0.00 sec)\n")),(0,s.kt)("p",null,"\u6700\uff1a\u590d\u5408\u7d22\u5f15\uff0c\u6700\u5de6\u8fb9\u539f\u5219\uff0c\u8fd9\u4e2a\u4e5f\u9700\u8981\u5206\u60c5\u51b5\u5206\u7248\u672c\uff0c\u56e0\u4e3a\u6709skip index\u7684\u5b58\u5728"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"root@mysql3306.sock>[employees]>show index from dept_emp2 ;\n+-----------+------------+-------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n| Table     | Non_unique | Key_name    | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment | Visible | Expression |\n+-----------+------------+-------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n| dept_emp2 |          1 | ix_dept_emp |            1 | dept_no     | A         |           8 |     NULL |   NULL |      | BTREE      |         |               | YES     | NULL       |\n| dept_emp2 |          1 | ix_dept_emp |            2 | emp_no      | A         |      315555 |     NULL |   NULL |      | BTREE      |         |               | YES     | NULL       |\n+-----------+------------+-------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n2 rows in set (0.00 sec)\nroot@mysql3306.sock>[employees]>desc select * from dept_emp2 where emp_no=10001 limit 10 ;\n+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+-------------+\n| id | select_type | table     | partitions | type | possible_keys | key  | key_len | ref  | rows   | filtered | Extra       |\n+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+-------------+\n|  1 | SIMPLE      | dept_emp2 | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 331008 |    10.00 | Using where |\n+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+-------------+\n1 row in set, 1 warning (0.00 sec)\n\nroot@mysql3306.sock>[employees]>desc select emp_no,dept_no from dept_emp2 where emp_no=10001 limit 10 ;\n+----+-------------+-----------+------------+-------+---------------+-------------+---------+------+-------+----------+----------------------------------------+\n| id | select_type | table     | partitions | type  | possible_keys | key         | key_len | ref  | rows  | filtered | Extra                                  |\n+----+-------------+-----------+------------+-------+---------------+-------------+---------+------+-------+----------+----------------------------------------+\n|  1 | SIMPLE      | dept_emp2 | NULL       | range | ix_dept_emp   | ix_dept_emp | 20      | NULL | 33100 |   100.00 | Using where; Using index for skip scan |\n+----+-------------+-----------+------------+-------+---------------+-------------+---------+------+-------+----------+----------------------------------------+\n1 row in set, 1 warning (0.00 sec)\n")),(0,s.kt)("p",null,"\u5feb\uff1a\u5982\u679c\u4f18\u5316\u5668\u8ba4\u4e3a\u4f7f\u7528\u5168\u8868\u6bd4\u4f7f\u7528\u7d22\u5f15\u5feb\uff0c\u90a3\u5c31\u4e0d\u4f1a\u4f7f\u7528\u7d22\u5f15\uff0c\u8bf4\u767d\u4e86\u5c31\u662f\u57fa\u4e8e\u4f18\u5316\u5668\u6216\u8005\u7edf\u8ba1\u4fe1\u606f\uff0c\u8fd9\u4e2a\u5c31\u662f\u6240\u8c13\u7684\u767e\u5206\u6bd4\uff0c\u8fd9\u91cc\u6700\u91cd\u8981\u7684\u4e00\u70b9\u662f\u4f7f\u7528\u7d22\u5f15\u4e00\u822c\u60c5\u51b5\u4e0b\u662f\u56de\u8868\uff0c\u4e5f\u5c31\u662f\u53d1\u751f\u968f\u673aIO,\u8fd9\u4e2a\u968f\u7740\u56de\u8868\u7684\u91cf\u7684\u5927\u5c0f\u53d8\u5927\uff0c\u4e00\u822cOLTP\u90fd\u662f\u5728\u8868\u4e0b\u67e5\u8be2\u5c11\u91cf\u6570\u636e\u60c5\u51b5\uff0c\u6240\u4ee5\u8fd8\u662f\u4f7f\u7528\u7d22\u5f15\u7684\u60c5\u51b5\u4f1a\u597d"),(0,s.kt)("p",null,"\u5f53\u7136\u4e0a\u9762\u7684\u60c5\u51b5\u4e4b\u5916\uff0c\u8fd8\u6709\u522b\u7684\u60c5\u51b5\uff0c\u5982\u65e5\u671f\u7c7b\u578b\uff0c\u8fd8\u6709\u5b57\u7b26\u4e32\u6bd4\u8f83\u7684\u65f6\u5019\u7b49\u7b49\uff0c\u8fd9\u4e9b\u5728\u8bfe\u5802\u4e2d\u6709\u8be6\u7ec6\u7684\u89e3\u7b54\u3002\n\u6211\u662f\u77e5\u6570\u5802SQL \u4f18\u5316\u73ed\u8001\u5e08~ ^^"),(0,s.kt)("p",null,"\u6700\u65b0\u4e00\u671fSQL\u4f18\u5316\u8bfe\uff0c\u572812\u6708\u4efd\u5f00\u59cb\u3002"),(0,s.kt)("p",null,"\u5982\u6709\u5173\u4e8eSQL\u4f18\u5316\u65b9\u9762\u7591\u95ee\u548c\u4e00\u8d77\u4ea4\u6d41\u7684\u8bf7\u52a0 \u5e76\u4e14 @\u5154\u5b50@\u77e5\u6570\u5802SQL\u4f18\u5316"),(0,s.kt)("p",null,"\u9ad8\u6027\u80fdMySQL,SQL\u4f18\u5316\u7fa4 \u6709\u53f6\u91d1\u8363\uff0c\u5434\u70b3\u9521 \u4e24\u4f4d\u5927\u795e\u5750\u9547 \uff1a579036588"),(0,s.kt)("p",null,"\u6b22\u8fce\u52a0\u5165 \u77e5\u6570\u5802\u5927\u5bb6\u5ead\u3002"),(0,s.kt)("p",null,"\u6211\u7684\u5fae\u4fe1\u516c\u4f17\u53f7\uff1aSQL\u5f00\u53d1\u4e0e\u4f18\u5316(sqlturning)"))}L.isMDXComponent=!0}}]);