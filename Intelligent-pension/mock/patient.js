const qs = require('qs')
const Mock = require('mockjs')
const config = require('../src/utils/config')

const { apiPrefix } = config

let dataSource = [
  {id:'D001',userName:'李一',age: 78,tel:'18713569890',sex:'男',bed: '2号楼02楼2204室01床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-13',dependentsName:'王一',dependentsTel:'18713569120'},
  {id:'D002',userName:'李二',age: 78,tel:'18713569891',sex:'男',bed: '2号楼02楼2204室02床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-14',dependentsName:'王二',dependentsTel:'18713569121'},
  {id:'D003',userName:'李三',age: 78,tel:'18713569892',sex:'男',bed: '2号楼02楼2204室03床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-15',dependentsName:'王三',dependentsTel:'18713569122'},
  {id:'D004',userName:'李四',age: 78,tel:'18713569893',sex:'男',bed: '2号楼02楼2204室04床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-16',dependentsName:'王四',dependentsTel:'18713569123'},
  {id:'D005',userName:'李五',age: 78,tel:'18713569894',sex:'男',bed: '2号楼02楼2204室05床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-17',dependentsName:'王五',dependentsTel:'18713569124'},
  {id:'D006',userName:'李六',age: 78,tel:'18713569895',sex:'男',bed: '2号楼02楼2204室06床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-18',dependentsName:'王六',dependentsTel:'18713569125'},
  {id:'D007',userName:'李七',age: 78,tel:'18713569896',sex:'男',bed: '2号楼02楼2204室07床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-19',dependentsName:'王七',dependentsTel:'18713569126'},
  {id:'D008',userName:'李八',age: 78,tel:'18713569897',sex:'男',bed: '2号楼02楼2204室08床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-20',dependentsName:'王八',dependentsTel:'18713569127'},
  {id:'D009',userName:'李九',age: 78,tel:'18713569898',sex:'男',bed: '2号楼02楼2204室09床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-21',dependentsName:'王九',dependentsTel:'18713569128'},
  {id:'D010',userName:'李十',age: 78,tel:'18713569899',sex:'男',bed: '2号楼02楼2204室10床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-22',dependentsName:'王十',dependentsTel:'18713569129'},
  {id:'D011',userName:'李十一',age: 78,tel:'18713569812',sex:'男',bed: '2号楼02楼2204室11床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-23',dependentsName:'王十一',dependentsTel:'18713569130'},
  {id:'D012',userName:'李十二',age: 78,tel:'18713569813',sex:'男',bed: '2号楼02楼2204室12床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-24',dependentsName:'王十二',dependentsTel:'18713569131'},
  {id:'D013',userName:'李十三',age: 78,tel:'18713569814',sex:'男',bed: '2号楼02楼2204室13床',remark:'一天换一次药',nurse:'王芳',date: '2018-02-25',dependentsName:'王十三',dependentsTel:'18713569132'},
]

module.exports = {
  [`POST ${apiPrefix}/patient/search`] (req, res) {
    const { userName } = req.body
    if (Object.keys(req.body).length === 0 || userName === '') {
      const _data = dataSource.slice()
      _data.reverse()
      res.json({ success: true, message: 'Ok', data: _data })
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
    res.json({ success: true, message: 'Ok', data: [] })
  },  
  [`POST ${apiPrefix}/patient/add`] (req, res) {
    const lastId = dataSource[dataSource.length - 1].id
    const pre = lastId.slice(0,2)
    const newId = pre + (Number(lastId.slice(2,4)) + 1)
    req.body.id = newId
    dataSource.push(req.body)
    res.json({ success: true, message: 'Ok', data: [] })
  },  
}

