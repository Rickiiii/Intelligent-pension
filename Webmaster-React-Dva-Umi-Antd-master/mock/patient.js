const qs = require('qs')
const Mock = require('mockjs')
const config = require('../src/utils/config')

const { apiPrefix } = config

let dataSource = [
  {id:'D001',userName:'李一',age: 78,mobile:'18713569890',sex:'男',bed: '2号楼02楼2204室01床',remark:'一天换一次药',nurse:'王芳'},
  {id:'D002',userName:'李二',age: 78,mobile:'18713569891',sex:'男',bed: '2号楼02楼2204室02床',remark:'一天换一次药',nurse:'王芳'},
  {id:'D003',userName:'李三',age: 78,mobile:'18713569892',sex:'男',bed: '2号楼02楼2204室03床',remark:'一天换一次药',nurse:'王芳'},
  {id:'D004',userName:'李四',age: 78,mobile:'18713569893',sex:'男',bed: '2号楼02楼2204室04床',remark:'一天换一次药',nurse:'王芳'},
  {id:'D005',userName:'李五',age: 78,mobile:'18713569894',sex:'男',bed: '2号楼02楼2204室05床',remark:'一天换一次药',nurse:'王芳'},
  {id:'D006',userName:'李六',age: 78,mobile:'18713569895',sex:'男',bed: '2号楼02楼2204室06床',remark:'一天换一次药',nurse:'王芳'},
  {id:'D007',userName:'李七',age: 78,mobile:'18713569896',sex:'男',bed: '2号楼02楼2204室07床',remark:'一天换一次药',nurse:'王芳'},
  {id:'D008',userName:'李八',age: 78,mobile:'18713569897',sex:'男',bed: '2号楼02楼2204室08床',remark:'一天换一次药',nurse:'王芳'},
  {id:'D009',userName:'李九',age: 78,mobile:'18713569898',sex:'男',bed: '2号楼02楼2204室09床',remark:'一天换一次药',nurse:'王芳'},
  {id:'D010',userName:'李十',age: 78,mobile:'18713569899',sex:'男',bed: '2号楼02楼2204室10床',remark:'一天换一次药',nurse:'王芳'},
  {id:'D011',userName:'李十一',age: 78,mobile:'18713569812',sex:'男',bed: '2号楼02楼2204室11床',remark:'一天换一次药',nurse:'王芳'},
  {id:'D012',userName:'李十二',age: 78,mobile:'18713569813',sex:'男',bed: '2号楼02楼2204室12床',remark:'一天换一次药',nurse:'王芳'},
  {id:'D013',userName:'李十三',age: 78,mobile:'18713569814',sex:'男',bed: '2号楼02楼2204室13床',remark:'一天换一次药',nurse:'王芳'},
]

module.exports = {
  [`POST ${apiPrefix}/patient/search`] (req, res) {
    const { userName } = req.body
    if (Object.keys(req.body).length === 0) {
      res.json({ success: true, message: 'Ok', data: dataSource })
    }
    else {
      const user = dataSource.filter(item => item.userName === userName)
      res.json({ success: true, message: 'Ok', data: user })
    }
  },  
  [`POST ${apiPrefix}/patient/delete`] (req, res) {
    const { id } = req.body
    const returnData = dataSource.filter(item => item.id !== id)
    dataSource = returnData
    res.json({ success: true, message: 'Ok', data: returnData })
  },  
}

