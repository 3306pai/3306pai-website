# 技术分享 | MySQL进程号、连接ID、查询ID、InnoDB线程与系统线程如何对应

---
title: 技术分享 | MySQL进程号、连接ID、查询ID、InnoDB线程与系统线程如何对应
author: 叶金荣
keywords: [Linux, MySQL, InnoDB]
---

## 导读
> 一文快速掌握 MySQL进程号、连接ID、查询ID、InnoDB线程与系统线程的对应关系。

有时候，怀疑某个MySQL内存查询导致CPU或磁盘I/O消耗特别高，但又不确定具体是哪个SQL引起的。

或者当InnoDB引擎内部有semaphore wait时，想知道具体是哪个线程/查询引起的。多说一下，当有semaphore wait事件超过600秒的话，InnoDB会发出crash信号：
```
InnoDB: ###### Diagnostic info printed to the standard error stream
2020-12-13T09:41:33.810011Z 0 [ERROR] [FATAL] InnoDB: Semaphore wait has lasted > 600 seconds. We intentionally crash the server because it appears to be hung.
2020-12-13 10:41:33 0x7f3d92a4e700 InnoDB: Assertion failure in thread 139902430013184 in file ut0ut.cc line 917
InnoDB: We intentionally generate a memory trap.
InnoDB: Submit a detailed bug report to http://bugs.mysql.com.
InnoDB: If you get repeated assertion failures or crashes, even
InnoDB: immediately after the mysqld startup, there may be
InnoDB: corruption in the InnoDB tablespace. Please refer to
InnoDB: http://dev.mysql.com/doc/refman/8.0/en/forcing-innodb-recovery.html
InnoDB: about forcing recovery.
09:41:33 UTC - mysqld got signal 6 ;
```
因此也要监控InnoDB的semaphore wait状态，一旦超过阈值，就要尽快报警并分析出问题原因，及时杀掉或停止引起等待的查询请求。

不过本文想讨论的是，MySQL的进程ID、内部查询ID、内部线程ID，和操作系统层的进程ID、线程如何对应起来。

## 1、操作系统进程ID
MySQL是一个单进程多线程的服务程序，用 `ps -ef|grep mysqld` 就能看到其系统进程ID了。另外，当 `my.cnf` 配置文件中增加一行 `innodb_status_file = 1` 时，也会生成带有系统进程ID的innodb status 文件
```
[root@yejr.run]# ps -ef | grep mysqld
mysql    38801     1  0 Jun13 ?        00:03:30 /usr/local/GreatSQL-8.0.22/bin/mysqld --defaults-file=/mysql/data06/my.cnf

[root@yejr.run]# ls -la innodb_status.38801
-rw-r----- 1 mysql mysql 4906 Jun 14 14:26 innodb_status.38801
```
文件 `innodb_status.pid` 的作用是每隔15秒左右输出innodb引擎各种状态信息，和执行 `SHOW ENGINE INNODB STATUS` 的作用相同。 二者的区别在于，前者（文件输出方式）的输出内容长度不受限制，而后者（命令行输出）则最多只显示1MB内容，更多的会被截断。所以务必设置 `innodb_status_file = 1` 选项。
```
Standard Monitor output is limited to 1MB when produced using the SHOW ENGINE INNODB STATUS statement. This limit does not apply to output written to server standard error output (stderr).
```

## 2、系统线程和MySQL连接ID、查询ID等的关系
从MySQL 5.7开始，`performance_schema.threads` 表增加 `THREAD_OS_ID` 列，用于记录MySQL内部线程对应的系统线程ID。

创建一个新连接，并执行下面的SQL：
```
[root@yejr.run]# mysql -S./mysql.sock -uroot -p mymgr
...
# 查到MySQL的连接ID是25（PROCESSLIST_ID = 25）
[root@yejr.run] [none]> show processlist;
+----+------+-----------+-------+---------+------+-------+------------------+-----------+---------------+
| Id | User | Host      | db    | Command | Time | State | Info             | Rows_sent | Rows_examined |
+----+------+-----------+-------+---------+------+-------+------------------+-----------+---------------+
| 25 | root | localhost | mymgr | Query   |    0 | init  | show processlist |         0 |             0 |
+----+------+-----------+-------+---------+------+-------+------------------+-----------+---------------+

[root@yejr.run] [mymgr]> begin; select *,sleep(1000) from t1 for update;
...  <-- 这个SQL会运行很长时间，方便我们观察
```

新开一个窗口，查看 `pfs.threads` 表：
```
[root@yejr.run] [performance_schema]> SELECT * FROM threads WHERE PROCESSLIST_ID=25\G
*************************** 1. row ***************************
          THREAD_ID: 65  <-- MySQL内部线程ID，也是PFS的内部计数器
               NAME: thread/sql/one_connection
               TYPE: FOREGROUND
     PROCESSLIST_ID: 25  <-- MySQL连接ID
   PROCESSLIST_USER: root
   PROCESSLIST_HOST: localhost
     PROCESSLIST_DB: mymgr
PROCESSLIST_COMMAND: Query
   PROCESSLIST_TIME: 246
  PROCESSLIST_STATE: User sleep
   PROCESSLIST_INFO: select *,sleep(1000) from t1 for update  <-- 正在运行的SQL
   PARENT_THREAD_ID: NULL
               ROLE: NULL
       INSTRUMENTED: YES
            HISTORY: YES
    CONNECTION_TYPE: Socket
       THREAD_OS_ID: 58412  <-- 对应操作系统的线程ID
     RESOURCE_GROUP: USR_default
```

运行 `ps -Lef` 查看对应的系统线程
```
[root@yejr.run]# ps -Lef | grep 58412  <-- 上面查询pfs.threads看到 THREAD_OS_ID 列的值
mysql    38801     1 58412  0   40 14:46 ?        00:00:00 /usr/local/GreatSQL-8.0.22/bin/mysqld --defaults-file=/mysql/data06/my.cnf
```

如果设置了 `general_log=1`，那么也能看到 **general_log** 里有这样的记录：
```
[root@yejr.run]# cat yejr.run.log

/usr/local/GreatSQL-8.0.22/bin/mysqld, Version: 8.0.22-13 (Source distribution). started with:
Tcp port: 6001  Unix socket: mysql.sock
#几个列分别是：时间、连接ID、请求类型、详细的SQL
Time                 Id Command    Argument
...
2021-06-14T14:46:47.474393+08:00	   25 Query	select *,sleep(1000) from t1 for update  <-- 可以看到连接ID是25
...
```

再查询 `pfs.events_statements_current` 表：
```
[root@yejr.run] [performance_schema]> SELECT * FROM events_statements_current WHERE THREAD_ID = 65\G
              THREAD_ID: 65
               EVENT_ID: 8
           END_EVENT_ID: NULL
             EVENT_NAME: statement/sql/select
                 SOURCE: init_net_server_extension.cc:95
            TIMER_START: 82217983305961000
              TIMER_END: 82559992238886000
             TIMER_WAIT: 342008932925000
              LOCK_TIME: 206000000
               SQL_TEXT: select *,sleep(1000) from t1 for update
                 DIGEST: 4d7f4182dff4abc484010b73024b4afb35075e1b6592d14ce895a2b8764b8f46
            DIGEST_TEXT: SELECT * , `sleep` (?) FROM `t1` FOR UPDATE
         CURRENT_SCHEMA: mymgr
...
            SELECT_SCAN: 1
...
       NESTING_EVENT_ID: 6
     NESTING_EVENT_TYPE: TRANSACTION
    NESTING_EVENT_LEVEL: 0
           STATEMENT_ID: 87  <-- 查询ID，每次查询该ID值都会增加

```

执行 `SHOW ENGINE INNODB STATUS\G` 查看事务状态：
```
...
# 事务ID=9322，运行时长=252秒
---TRANSACTION 9322, ACTIVE 252 sec
mysql tables in use 1, locked 1
2 lock struct(s), heap size 1136, 1 row lock(s)
# MySQL连接ID=25，OS线程句柄 = 140442126739200（后面再介绍），查询ID=87（对应上面的 STATEMENT_ID）
MySQL thread id 25, OS thread handle 140442126739200, query id 87 localhost root User sleep
select *,sleep(1000) from t1 for update
...
```

再看下 `OS thread handle` 和操作系统线程ID的对应关系。

首先，`OS thread handle 140442126739200` （OS thread handle是进程内部用于识别各个线程的内部ID）这里是个十进制的数值，需要先转成十六进制（有时候可能会直接用十六进制表示，这个问题也有人提出了 [MDEV-17237](https://jira.mariadb.org/browse/MDEV-17237)）：
```
[root@yejr.run] [performance_schema]> select lower(conv(140442126739200, 10, 16));
+--------------------------------------+
| lower(conv(140442126739200, 10, 16)) |
+--------------------------------------+
| 7fbb3b136700                         |
+--------------------------------------+
```

再利用 `pstack` 查询该句柄和操作系统线程ID的关联：
```
[root@yejr.run]# pstack `pidof mysqld` | grep 7fbb3b136700
Thread 2 (Thread 0x7fbb3b136700 (LWP 58412)):
```
可以看到 LWP = 58412，对应上面的 `THREAD_OS_ID` 值，LWP是Light-Weight Processes的缩写（轻量级进程）。用 `pidstat` 也能看到这个LWP：
```
[root@yejr.run]# pidstat -t -p 38801 | grep 58031
03:45:02 PM  1000         -     58031    0.00    0.00    0.00    0.00     2  |__mysqld
```
【特别提醒】**运行pstack会短暂阻塞mysqld进程，所以请切勿在业务高峰期执行，除非万不得已**。

有时候可能会看到类似下面的 innodb status：
```
SEMAPHORES
----------
OS WAIT ARRAY INFO: reservation count 15143
--Thread 140585128785664 has waited at buf0flu.cc line 1209 for 237 seconds the semaphore:
SX-lock on RW-latch at 0x7fdb1fbe3f80 created in file buf0buf.cc line 1460
a writer (thread id 140584786024192) has reserved it in mode SX
number of readers 0, waiters flag 1, lock_word: 10000000
Last time read locked in file row0sel.cc line 3758
Last time write locked in file /export/home/pb2/build/sb_0-34537258-1560179931.8/mysql-5.7.27/storage/innobase/fsp/fsp0fsp.cc line 167
```
在上面这段信息中，线程 `Thread 140585128785664` 在 `buf0flu.cc代码1209行`这里等待了237秒，想要请求 SX-lock 的 RW-latch，被另一个线程 `thread id 140584786024192` 给阻塞了，它持有的是 SX latch。

这时候，就可以利用pstack反查对应的LWP，再反查出PROCESSLIST_ID，以及正在执行的SQL。`pfs.events_statements_current` 中只能查到当前执行的SQL，可以通过 `pfs.events_statements_history` 查看最近执行过的SQL。

Enjoy MySQL :)

## 延伸阅读
- 15.17.3 InnoDB Standard Monitor and Lock Monitor Output, https://dev.mysql.com/doc/refman/8.0/en/innodb-standard-monitor.html
- 27.12.21.6 The threads Table, https://dev.mysql.com/doc/refman/8.0/en/performance-schema-threads-table.html
- 27.12.6.1 The events_statements_current Table, https://dev.mysql.com/doc/refman/8.0/en/performance-schema-events-statements-current-table.html
- 27.12.6.2 The events_statements_history Table, https://dev.mysql.com/doc/refman/8.0/en/performance-schema-events-statements-history-table.html
