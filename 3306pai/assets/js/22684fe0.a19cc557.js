"use strict";(self.webpackChunkdatabend_official_front=self.webpackChunkdatabend_official_front||[]).push([[408],{1639:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"Databend architecture","metadata":{"permalink":"/3306pai/blog/databend-architecture","source":"@site/blog/databend-architecture.md","title":"Databend architecture","description":"Databend \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u3001\u5b8c\u5168\u9762\u5411\u4e91\u67b6\u6784\u7684\u65b0\u5f0f\u6570\u4ed3\uff0c\u5b83\u63d0\u4f9b\u5feb\u901f\u7684\u5f39\u6027\u6269\u5c55\u80fd\u529b\uff0c\u5e76\u7ed3\u5408\u4e91\u7684\u5f39\u6027\u3001\u7b80\u5355\u6027\u548c\u4f4e\u6210\u672c\uff0c\u4f7f Data Cloud \u6784\u5efa\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002","date":"2021-11-18T15:05:14.128Z","formattedDate":"November 18, 2021","tags":[],"readingTime":6.695,"truncated":false,"authors":[]},"content":"Databend \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u3001\u5b8c\u5168\u9762\u5411\u4e91\u67b6\u6784\u7684\u65b0\u5f0f\u6570\u4ed3\uff0c\u5b83\u63d0\u4f9b\u5feb\u901f\u7684\u5f39\u6027\u6269\u5c55\u80fd\u529b\uff0c\u5e76\u7ed3\u5408\u4e91\u7684\u5f39\u6027\u3001\u7b80\u5355\u6027\u548c\u4f4e\u6210\u672c\uff0c\u4f7f Data Cloud \u6784\u5efa\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002\\nDatabend \u628a\u6570\u636e\u5b58\u50a8\u5728\u50cf AWS S3 \uff0cAzure Blob \u8fd9\u4e9b\u4e91\u4e0a\u7684\u5b58\u50a8\u7cfb\u7edf\uff0c\u53ef\u4ee5\u4f7f\u4e0d\u540c\u7684\u8ba1\u7b97\u8282\u70b9\u6302\u8f7d\u540c\u4e00\u4efd\u6570\u636e\uff0c\u4ece\u800c\u505a\u5230\u8f83\u9ad8\u7684\u5f39\u6027\uff0c\u5b9e\u73b0\u5bf9\u8d44\u6e90\u7684\u7cbe\u7ec6\u5316\u63a7\u5236\u3002\\nDatabend \u5728\u8bbe\u8ba1\u4e0a\u4e13\u6ce8\u4ee5\u4e0b\u80fd\u529b\uff1a\\n\\n* \u5f39\u6027 \u5728 Databend \u4e2d\uff0c\u5b58\u50a8\u548c\u8ba1\u7b97\u8d44\u6e90\u53ef\u4ee5\u6309\u9700\u3001\u6309\u91cf\u5f39\u6027\u6269\u5c55\u3002\\n* \u5b89\u5168 Databend \u4e2d\u6570\u636e\u6587\u4ef6\u548c\u7f51\u7edc\u4f20\u8f93\u90fd\u662f\u7aef\u5230\u7aef\u52a0\u5bc6\uff0c\u5e76\u5728 SQL \u7ea7\u522b\u63d0\u4f9b\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u63a7\u5236\u3002\\n* \u6613\u7528 Databend \u517c\u5bb9 ANSI SQL\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528 MySQL \u548c ClickHouse \u5ba2\u6237\u7aef\u63a5\u5165\uff0c\u51e0\u4e4e\u65e0\u5b66\u4e60\u6210\u672c\u3002\\n* \u6210\u672c Databend \u5904\u7406\u67e5\u8be2\u975e\u5e38\u9ad8\u6548\uff0c\u7528\u6237\u53ea\u9700\u8981\u4e3a\u4f7f\u7528\u7684\u8d44\u6e90\u4ed8\u8d39\u3002\\n\\n![](https://datafuse-1255499614.cos.ap-beijing.myqcloud.com/architecture_v1.png)\\n\\n\u4e0a\u56fe\u662f Databend \u7684\u6574\u4f53\u67b6\u6784\u56fe\uff0c\u6574\u4e2a\u7cfb\u7edf\u4e3b\u8981\u7531\u4e09\u5927\u90e8\u5206\u7ec4\u6210\uff1aMeta service layer\u3001Compute Layer \u548c Storage Layer\u3002\\n## 1\u3001Meta Service Layer\\n\\n* Meta Service \u662f\u4e00\u4e2a\u591a\u79df\u6237\u3001\u9ad8\u53ef\u7528\u7684\u5206\u5e03\u5f0f key-value \u5b58\u50a8\u670d\u52a1\uff0c\u5177\u5907\u4e8b\u52a1\u80fd\u529b\uff0c\u4e3b\u8981\u7528\u4e8e\u5b58\u50a8\uff1a\\n* Metadata : \u8868\u7684\u5143\u4fe1\u606f\u3001\u7d22\u5f15\u4fe1\u606f\u3001\u96c6\u7fa4\u4fe1\u606f\u3001\u4e8b\u52a1\u4fe1\u606f\u7b49\u3002\\n* Administration\uff1a\u7528\u6237\u7cfb\u7edf\u3001\u7528\u6237\u6743\u9650\u7b49\u4fe1\u606f\u3002\\n* Security \uff1a\u7528\u6237\u767b\u5f55\u8ba4\u8bc1\u3001\u6570\u636e\u52a0\u5bc6\u7b49\u3002\\n\\n## 2\u3001Compute Layer\\n\\n\u8ba1\u7b97\u5c42\u7531\u591a\u4e2a\u96c6\u7fa4\uff08cluster\uff09\u7ec4\u6210\uff0c\u4e0d\u540c\u96c6\u7fa4\u53ef\u4ee5\u627f\u62c5\u4e0d\u540c\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u6bcf\u4e2a\u96c6\u7fa4\u53c8\u6709\u591a\u4e2a\u8ba1\u7b97\u8282\u70b9\uff08node\uff09\u7ec4\u6210\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u7684\u6dfb\u52a0\u3001\u5220\u9664\u8282\u70b9\u6216\u96c6\u7fa4\uff0c\u505a\u5230\u8d44\u6e90\u7684\u6309\u9700\u3001\u6309\u91cf\u7ba1\u7406\u3002\\n\u8ba1\u7b97\u8282\u70b9\u662f\u8ba1\u7b97\u5c42\u7684\u6700\u5c0f\u6784\u6210\u5355\u5143\uff0c\u5176\u4e2d\u6bcf\u4e2a\u8ba1\u7b97\u8282\u70b9\u5305\u542b\u4ee5\u4e0b\u51e0\u4e2a\u7ec4\u4ef6\uff1a\\n\u6267\u884c\u8ba1\u5212 \uff08Planner\uff09\\n\u6839\u636e\u7528\u6237\u8f93\u5165\u7684 SQL \u751f\u6210\u6267\u884c\u8ba1\u5212\uff0c\u5b83\u53ea\u662f\u4e2a\u903b\u8f91\u8868\u8fbe\uff0c\u5e76\u4e0d\u80fd\u771f\u6b63\u7684\u6267\u884c\uff0c\u800c\u662f\u7528\u4e8e\u6307\u5bfc\u6574\u4e2a\u8ba1\u7b97\u6d41\u6c34\u7ebf\uff08Pipeline\uff09\u7684\u7f16\u6392\u4e0e\u751f\u6210\u3002\\n\u6bd4\u5982\u8bed\u53e5\\n\\n\\tSELECT number + 1 FROM numbers_mt(10) WHERE number > 8 LIMIT 2 \\n\\n\u6267\u884c\u8ba1\u5212\uff1a\\n\\n\\tdatabend :) EXPLAIN SELECT number + 1 FROM numbers_mt(10) WHERE number > 8 LIMIT 2\\n\\t\u250c\u2500explain\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\\n\\t\u2502 Limit: 2                                                                                                                \u2502\\n\\t\u2502   Projection: (number + 1):UInt64                                                                                       \u2502\\n\\t\u2502     Expression: (number + 1):UInt64 (Before Projection)                                                                 \u2502\\n\\t\u2502       Filter: (number > 8)                                                                                              \u2502\\n\\t\u2502         ReadDataSource: scan partitions: [1], scan schema: [number:UInt64], statistics: [read_rows: 10, read_bytes: 80] \u2502\\n\\t\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\\n\\n\u8fd9\u4e2a\u6267\u884c\u8ba1\u5212\u81ea\u4e0b\u800c\u4e0a\u5206\u522b\u662f \uff1a\\n\\n* ReadDataSource\uff1a\u8868\u793a\u4ece\u54ea\u4e9b\u6587\u4ef6\u91cc\u8bfb\u53d6\u6570\u636e\\n\\n* Filter: \u8868\u793a\u8981\u505a (number > 8) \u8868\u8fbe\u5f0f\u8fc7\u6ee4\\n\\n* Expression: \u8868\u793a\u8981\u505a (number + 1) \u8868\u8fbe\u5f0f\u8fd0\u7b97\\n\\n* Projection: \u8868\u793a\u67e5\u8be2\u5217\u662f\u54ea\u4e9b\\n\\n* Limit: \u8868\u793a\u53d6\u524d 2 \u6761\u6570\u636e\\n\\n### \u4f18\u5316\u5668 \uff08Optimizer\uff09\\n\\n\u5bf9\u6267\u884c\u8ba1\u5212\u505a\u4e00\u4e9b\u57fa\u4e8e\u89c4\u5219\u7684\u4f18\u5316\uff08A Rule Based Optimizer\uff09, \u6bd4\u5982\u505a\u4e00\u4e9b\u8c13\u8bcd\u4e0b\u63a8\u6216\u662f\u53bb\u6389\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u5217\u7b49\uff0c\u4ee5\u4f7f\u6574\u4e2a\u6267\u884c\u8ba1\u5212\u66f4\u4f18\u3002\\n\\n### \u5904\u7406\u5668 \uff08Processors\uff09\\n\\n\u5904\u7406\u5668\uff08Processor\uff09\u662f\u6267\u884c\u8ba1\u7b97\u903b\u8f91\u7684\u6838\u5fc3\u7ec4\u4ef6\u3002\u6839\u636e\u6267\u884c\u8ba1\u5212\uff0c\u5904\u7406\u5668\u4eec\u88ab\u7f16\u6392\u6210\u4e00\u4e2a\u6d41\u6c34\u7ebf\uff08Pipeline\uff09\uff0c\u7528\u4e8e\u6267\u884c\u8ba1\u7b97\u4efb\u52a1\u3002\\n\u6574\u4e2a Pipeline \u662f\u4e00\u4e2a\u6709\u5411\u65e0\u73af\u56fe\uff0c\u6bcf\u4e2a\u70b9\u662f\u4e00\u4e2a\u5904\u7406\u5668\uff0c\u6bcf\u6761\u8fb9\u7531\u5904\u7406\u5668\u7684 InPort \u548c OutPort \u76f8\u8fde\u6784\u6210\uff0c\u6570\u636e\u5230\u8fbe\u4e0d\u540c\u7684\u5904\u7406\u5668\u8fdb\u884c\u8ba1\u7b97\u540e\uff0c\u901a\u8fc7\u8fb9\u6d41\u5411\u4e0b\u4e00\u4e2a\u5904\u7406\u5668\uff0c\u591a\u4e2a\u5904\u7406\u5668\u53ef\u4ee5\u5e76\u884c\u8ba1\u7b97\uff0c\u5728\u96c6\u7fa4\u6a21\u5f0f\u4e0b\u8fd8\u53ef\u4ee5\u8de8\u8282\u70b9\u5206\u5e03\u5f0f\u6267\u884c\uff0c\u8fd9\u662f Datafuse \u9ad8\u6027\u80fd\u7684\u4e00\u4e2a\u91cd\u8981\u8bbe\u8ba1\u3002\\n\\n\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 EXPLAIN PIPELINE \u6765\u67e5\u770b\uff1a\\n\\n\\tdatabend :) EXPLAIN PIPELINE SELECT number + 1 FROM numbers_mt(10000) WHERE number > 8 LIMIT 2\\n\\t\u250c\u2500explain\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\\n\\t\u2502 LimitTransform \xd7 1 processor                                                                              \u2502\\n\\t\u2502   Merge (ProjectionTransform \xd7 16 processors) to (LimitTransform \xd7 1)     \u2502\\n\\t\u2502     ProjectionTransform \xd7 16 processors                                                             \u2502\\n\\t\u2502       ExpressionTransform \xd7 16 processors                                                         \u2502\\n\\t\u2502         FilterTransform \xd7 16 processors                                                                 \u2502\\n\\t\u2502           SourceTransform \xd7 16 processors                                                           \u2502\\n\\t\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\\n\\n\u540c\u6837\uff0c\u7406\u89e3\u8fd9\u4e2a Pipeline \u6211\u4eec\u81ea\u4e0b\u800c\u4e0a\u6765\u770b\uff1a\\n\\n* SourceTransform\uff1a\u8bfb\u53d6\u6570\u636e\u6587\u4ef6\uff0c16 \u4e2a\u7269\u7406 CPU \u5e76\u884c\u5904\u7406\\n* ilterTransform\uff1a\u5bf9\u6570\u636e\u8fdb\u884c (number >  8) \u8868\u8fbe\u5f0f\u8fc7\u6ee4\uff0c16 \u4e2a\u7269\u7406 CPU \u5e76\u884c\u5904\u7406 \\n* pressionTransform\uff1a\u5bf9\u6570\u636e\u8fdb\u884c (number + 1) \u8868\u8fbe\u5f0f\u6267\u884c\uff0c16 \u4e2a\u7269\u7406 CPU \u5e76\u884c\u5904\u7406 \\n* ojectionTransform\uff1a\u5bf9\u6570\u636e\u5904\u7406\u751f\u6210\u6700\u7ec8\u5217 \\n* LimitTransform\uff1a\u5bf9\u6570\u636e\u8fdb\u884c Limit 2 \u5904\u7406\uff0cPipeline \u8fdb\u884c\u6298\u53e0\uff0c\u7531\u4e00\u4e2a\u7269\u7406 CPU \u6765\u6267\u884c \\n* Databend \u901a\u8fc7 Pipeline \u5e76\u884c\u6a21\u578b\uff0c\u5e76\u7ed3\u5408\u5411\u91cf\u8ba1\u7b97\u6700\u5927\u9650\u5ea6\u7684\u53bb\u538b\u69a8 CPU \u8d44\u6e90\uff0c\u4ee5\u52a0\u901f\u8ba1\u7b97\u3002\\n\\n### \u7f13\u5b58 ( Cache )\\n\\n\u8ba1\u7b97\u8282\u70b9\u4f7f\u7528\u672c\u5730 SSD \u7f13\u5b58\u6570\u636e\u548c\u7d22\u5f15\uff0c\u4ee5\u63d0\u9ad8\u6570\u636e\u4eb2\u548c\u6027\u6765\u52a0\u901f\u8ba1\u7b97\u3002\\n\u7f13\u5b58\u7684\u9884\u70ed\u65b9\u5f0f\u6709\uff1a\\nLOAD_ON_DEMAND - \u6309\u9700\u52a0\u8f7d\u7d22\u5f15\u6216\u6570\u636e\u5757\uff08\u9ed8\u8ba4\uff09\u3002\\nLOAD_INDEX - \u53ea\u52a0\u8f7d\u7d22\u5f15\u3002\\nLOAD_ALL - \u52a0\u8f7d\u5168\u90e8\u7684\u6570\u636e\u548c\u7d22\u5f15\uff0c\u5bf9\u4e8e\u8f83\u5c0f\u7684\u8868\u53ef\u4ee5\u91c7\u53d6\u8fd9\u79cd\u6a21\u5f0f\u3002\\n\\n## 3. Storage Layer\\n\\nDatabend \u4f7f\u7528 Parquet \u5217\u5f0f\u5b58\u50a8\u683c\u5f0f\u6765\u50a8\u5b58\u6570\u636e\uff0c\u4e3a\u4e86\u52a0\u5feb\u67e5\u627e\uff08Partition Pruning\uff09\uff0cDatabend  \u4e3a\u6bcf\u4e2a Parquet \u63d0\u4f9b\u4e86\u81ea\u5df1\u7684\u7d22\u5f15\uff08\u6839\u636e Primary Key \u751f\u6210\uff09\uff1a\\nmin_max.idx Parquet \u6587\u4ef6 minimum \u548c maximum \u503c\\nsparse.idx \u4ee5 N \u6761\u8bb0\u5f55\u4e3a\u9897\u7c92\u5ea6\u7684\u7a00\u758f\u7d22\u5f15\\n\u901a\u8fc7\u8fd9\u4e9b\u7d22\u5f15\uff0c \u6211\u4eec\u53ef\u4ee5\u51cf\u5c11\u6570\u636e\u7684\u4ea4\u4e92\uff0c\u5e76\u4f7f\u8ba1\u7b97\u91cf\u5927\u5927\u51cf\u5c11\u3002\\n\u5047\u8bbe\u6709\u4e24\u4e2aParquet \u6587\u4ef6\uff1af1, f2\uff0cf1 \u7684 min_max.idx: [3, 5] \uff1bf2 \u7684 min_max.idx: [4, 6] \u3002\u5982\u679c\u67e5\u8be2\u6761\u4ef6\u4e3a\uff1awhere x < 4 \uff0c \u6211\u4eec\u53ea\u9700\u8981 f1 \u6587\u4ef6\u5c31\u53ef\u4ee5\uff0c\u518d\u6839\u636e sparse.idx \u7d22\u5f15\u5b9a\u4f4d\u5230 f1 \u6587\u4ef6\u4e2d\u7684\u67d0\u4e2a\u6570\u636e\u9875\u3002\\n\\n## \u9879\u76ee\u5730\u5740\\n\\n\u4ee3\u7801\u5730\u5740\uff1a\\nhttps://github.com/datafuselabs/databend\\n\\n\u9879\u76ee\u5b98\u7f51\uff1a\\nhttps://datafuse.rs\\n\\n\u60f3\u4e86\u89e3\u6211\u4eec\u66f4\u591a\u53ef\u4ee5\u5173\u6ce8\u516c\u4f17\u53f7\uff1a Databend ."}]}')}}]);