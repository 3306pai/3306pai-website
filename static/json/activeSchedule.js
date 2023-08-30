const table = {
  comment: {
    _comment: "这是活动规划的数据",
    time: "时间",
    area: "地区",
    subject: "主题",
    status: "0|-1|1",
    statusText: "报名中|敬请期待|完成",
    show: "是否展示到页面中 true|false"
  },
  tableTitle: [
    '时间', '地区', '主题', '状态'
  ],
  tableData: [
    {
      time: "2023.9.16",
      area: "北京",
      subject: "3306π 数据库朋友圈",
      status: 0,
      statusText: "报名",
      link: 'https://www.huodongxing.com/event/1716596158000',
      show: true
    },
    {
      time: "2021.12.18",
      area: "深圳",
      subject: "云原生--数据和未来",
      status: 1,
      statusText: "完成",
      link: 'https://4331392452249.huodongxing.com/event/3623282483400',
      show: true
    },
    {
      time: "2022.1.8",
      area: "北京",
      subject: "开源数据库最佳实践",
      status: 1,
      statusText: '完成',
      link: 'https://4331392452249.huodongxing.com/event/5606442046900',
      show: true
    },
    {
      time: "2021.03.20",
      area: "成都",
      subject: "3306π成都站",
      status: 1,
      statusText: "完成",
      link: 'https://www.bagevent.com/event/7196530',
      show: true
    },
    {
      time: "2021.5.22",
      area: "广州",
      subject: "新一代数据库技术论坛",
      status: 1,
      statusText: '完成',
      link: 'https://4331392452249.huodongxing.com/event/4592624816200',
      show: false
    },
    {
      time: "2021.10.23",
      area: "上海",
      subject: "开源数据库新技术论坛",
      status: 1,
      statusText: "完成",
      link: 'https://4331392452249.huodongxing.com/event/5616552405000',
      show: false
    }
  ]
}
export default table;