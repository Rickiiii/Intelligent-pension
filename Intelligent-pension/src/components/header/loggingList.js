import React,{Component} from 'react'
import {Table} from 'antd'
const columns=[{
    title:'时间',
    dataIndex:'time',
    key:'time'
},{
    title:'IP',
    dataIndex:'ip',
    key:'ip'
},{
    title:'地区',
    dataIndex:'address',
    key:'address'
}]
class LoggingList extends Component{
    
    render(){
        const {dataSource}=this.props
        return (
           <div>
               <Table columns={columns} dataSource={dataSource} pagination={false}  rowKey={record => record.time}/>
           </div>
        )
    }
}
export default LoggingList