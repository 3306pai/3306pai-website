---
slug:  bohutang-sz-interview-2021
title: 开源云原生数仓 Databend--张雁飞 (BohuTANG) | Datafuse Labs
tags: [Datafuse Labs, 3306π深圳站2021]
---
# 开源云原生数仓 Databend--张雁飞 (BohuTANG) | Datafuse Labs

![](https://3306pai-1255499614.cos.ap-guangzhou.myqcloud.com/sz2021/%E5%BC%A0%E9%9B%81%E9%A3%9E.jpg)

## 问题一
**小编：** 虎哥现在你对外挂的 Title 是：Datafuse Labs 联合创始人，对外的开源产品是 Databend , 这两者是什么关系呢？

**BohuTang:** Databend 是一个使用 Rust 研发、开源、完全面向云架构的新式数仓，提供极速的弹性扩展能力，致力于打造按需、按量的 Data Cloud 产品体验。

「Datafuse Labs」成立于 2021 年 3 月，是开源项目 Databend 的背后团队，团队在云原生数据库领域有着丰富的工程经验，同时也是数据库开源社区活跃贡献者，目前在中国、美国、新加坡均设有研发中心，专注于前沿技术领域的创新与实践，以及 Databend 开源生态、社区构建。
目前 Datafuse Labs 组建了 一个Worldwide Remote 式办公的国际化数据库研发团队，同时也欢迎大家关注 Databend 这个结合云调度能力和弹性的新式数仓：https://github.com/datafuselabs/databend

## 问题二
**小编：** 听虎哥您介绍 Databend 是定位云原生开源的数仓系统，对于云原生数仓系统，您认为主要的挑战在哪里？

**BohuTang:**  对于云原生这个概念，相信很多人也非常的模糊，或是很多朋友认为云厂商的数仓产品就是云原生数仓，其实这个理解是有问题的。可以先不纠结云原生数仓这个概念，我们先来看看从用户角度对数仓需求的几个层次：
1. 不想采购硬件来安装数仓软件 - 这个非常容易满足，云主机就可以
2. 不想运维数仓软件，比如管理版本升级等 - 这个需求也比较容易满足，大部分云厂商的数仓PaaS就可以
3. 秒级的弹性扩展能力 - 这个需求满足起来会比较困难，要求数仓从架构上针对云基础设施进行重设计，比如做存算分离等
4. 只为使用的资源付费 - 这个需求满足起来会非常困难，要求数仓对资源的控制和调度做到非常精细化
目前大部分数仓产品做到了第 2 层次，Snowflake 做到了 3 和 4， 这里最大的挑战就是 3 和 4。以当前的大环境来看，这两个需求借助于云基础设施才可以做到，所以 Databend 从第一天起就是完全面向云架构设计， 我们做了大量的工作来让状态和计算分离，致力于满足这两个需求。

## 问题三
**小编：** 对于数据库内核开发我们觉得是一个门槛很高的活，想咨询一下虎哥，现阶段你们公司的团队是一个什么样规模以及您怎么快速的组建的这个团队？你们现在的工作方式大概是什么样的？

**BohuTang:**  数据库内核，尤其是 Cloud Data Warehouse 研发是一个很酷和充满挑战的工作，因为这块目前还是个荒地，我们也是一边探索一边工程实践，正因如此才充满了乐趣。
在组建 Databend 内核研发团队时，我们把眼光放到了全球，现在中国、美国、新加坡都有我们的内核研发人员，未来可能还会有其它国家的同事参与进来。现在主要以 ClickHouse 头部贡献者为基础 ，加上阿里、Google 等公司的朋友组建的内核团队，一个几十人的”特种兵”团队，都是在数据库领域摸爬滚打多年的实战老手。
Databend 内核研发团队以 Worldwide Remote 模式办公， 大家通过 github 进行全球化协作，所有的工作都会在 Databend 社区进行沟通，追求开放、透明。每周五上午会有一个weekly meetup， 一般会针对某个技术点做一个分享，每次的内容也会 open 出来：https://github.com/datafuselabs/datafuse-presentations 。从整体上讲，我们现在工作方式还是比较 open ，自由，平等，数据库研发是一个创新型工作，有了足够的自由度，创新能力才可以更好的发挥。

## 问题四
**小编：**  目前看 Databend 开发 Roadmap 是 0.6 版本， 虎哥给我们介绍一下 0.6 版本大概包含哪些特性？

**BohuTang:** Databend 所有的开发都是以 Github 协同。 目前 0.6 版本的 Roadmap 也在 github 上公开：https://github.com/datafuselabs/databend/issues/2525   这里面对用户影响最大的就是用户配合 bendctl 非常方便的起 Databend， 使用 local disk 或是 S3 跑通 ontime 的数据加载， SQL 查询等。 同时引入云上的一个数据导入语法。 我计划在在 12 月 18 日参加 3306π 社区活动时给大家做一个展示。

## 问题五
**小编：** 最后想问一下虎哥，在哪里可以更多的关注或是联系到 Databend ？

**BohuTang:** Databend 是一款开源云原生数仓产品，项目托管在 Github 上面，目前 Github 上的 Issue ,  Discussions 都在使用， 方便大家进行 PR 或是讨论。  另外我们开放有： 
Slack:
https://join.slack.com/t/datafusecloud/shared_invite/zt-nojrc9up-50IRla1Y1h56rqwCTkkDJA

官方社区网站：  https://databend.rs
Facebook group：https://fb.me/databendcloud
Twitter:  @Datafuse_Labs
公众号：Databend
微信群： 微信搜 Databend ，添加小秘书申请入群。 

如果有对 Databend 有任何的建议或是问题，不用犹豫，可通过上面的多个渠道联系哦