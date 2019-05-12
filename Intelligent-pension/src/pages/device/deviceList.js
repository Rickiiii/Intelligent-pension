import React,{Component} from 'react'
import { Page } from 'components'
import SearchDevice from '../../components/device/search';
import DeviceListTable from '../../components/device/tableList';
import Paginations from './../../components/pagination'
import styles from './index.less';
const dataSource=[
    {id:10001,deviceName:'数客宝',deviceHAID:'32323213155661',type:'数客宝',deviceSize:'规格',tags:'滁州市',desc:'无',statue:true},
    {id:10002,deviceName:'数客宝',deviceHAID:'32323213155661',type:'数客宝',deviceSize:'规格',tags:'滁州市',desc:'无',statue:true},
    {id:10003,deviceName:'数客宝',deviceHAID:'32323213155661',type:'数客宝',deviceSize:'规格',tags:'滁州市',desc:'无',statue:true},
    {id:10004,deviceName:'数客宝',deviceHAID:'32323213155661',type:'数客宝',deviceSize:'规格',tags:'滁州市',desc:'无',statue:true},
    {id:10005,deviceName:'数客宝',deviceHAID:'32323213155661',type:'数客宝',deviceSize:'规格',tags:'滁州市',desc:'无',statue:true},
    {id:10006,deviceName:'数客宝',deviceHAID:'32323213155661',type:'数客宝',deviceSize:'规格',tags:'滁州市',desc:'无',statue:true},
    {id:10007,deviceName:'数客宝',deviceHAID:'32323213155661',type:'数客宝',deviceSize:'规格',tags:'滁州市',desc:'无',statue:true},
    {id:10008,deviceName:'数客宝',deviceHAID:'32323213155661',type:'数客宝',deviceSize:'规格',tags:'滁州市',desc:'无',statue:true},
    {id:10009,deviceName:'数客宝',deviceHAID:'32323213155661',type:'数客宝',deviceSize:'规格',tags:'滁州市',desc:'无',statue:true},
    {id:10010,deviceName:'数客宝',deviceHAID:'32323213155661',type:'数客宝',deviceSize:'规格',tags:'滁州市',desc:'无',statue:false},
]
class Device extends Component {
    constructor(props){
        super(props)
    }
    handleSizeChange=(current, pageSize)=>{
        console.log(current, pageSize)
    }
    handlePageChange=(current, pageSize)=>{
        console.log(current, pageSize)
    }
    render(){
    return (
        <Page inner>
        <SearchDevice/>
        <div className={styles.content}>
            <DeviceListTable dataSource={dataSource}/>
            <Paginations total={dataSource.length} onPageChange={this.handleSizeChange} onSizeChange={this.handleSizeChange}/>
        </div>
        </Page>
    )
}
}
export default Device