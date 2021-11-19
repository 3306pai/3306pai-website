const company = {
  comment: {
    _comment: "这是赞助商和主办方的数据",
    title: "公司名称",
    logo: "公司log 地址对应static文件夹下，参考下方示例",
    link: "公司链接",
    sponsorData: "赞助商数据",
    hostData: "主办方数据"
  },
  sponsorData: [
    {
      title: "万里云数据库",
      logo: require('@site/static/img/home/greatDB.png').default,
      link: 'https://www.greatdb.com/'
    },
    {
      title: "爱可生",
      logo: require('@site/static/img/home/action.png').default,
      link: 'https://www.actionsky.com/'
    },
    {
      title: "华为",
      logo: require('@site/static/img/home/huawei.png').default,
      link: 'https://www.huaweicloud.com/'
    },
    {
      title: "Databend",
      logo: require('@site/static/img/home/databend.png').default,
      link: 'https://databend.com/'
    },
    {
      title: "RadonDB",
      logo: require('@site/static/img/home/radonDB.png').default,
      link: 'https://radondb.io/'
    },
  ],
  hostData: [
    {
      title: "3306π",
      logo: require('@site/static/img/home/3306π.png').default,
      link: null
    },
    {
      title: "Redis中国用户组",
      logo: require('@site/static/img/home/redis.png').default,
      link: null
    },
  ]
}
export default company;