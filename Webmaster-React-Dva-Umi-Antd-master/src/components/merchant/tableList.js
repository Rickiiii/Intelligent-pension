import React from 'react'
import { Table } from 'antd';
const TableList=({data})=>{
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
    return(
        <div>
               <Table columns={columns} dataSource={data} pagination={false}  rowKey={record => record.time}/>
        </div>
    )
}
export default TableList