import React,{Component} from 'react'
import {Table,Switch,Popconfirm } from 'antd'
import styles from './index.less'
import router from 'umi/router';
class DeviceListTable extends Component{
    constructor(props){
        super(props)
    }
    onSwitchChange=(data)=>{
        console.log(data)
    }
    handleLook=(data)=>{
       router.push({
        pathname:'/device/deviceInfo',
        query:{
            id:data
        }
    })
    }

    handleEdit=(data)=>{
        router.push({
            pathname:'/device/editDevice',
            query:{
                id:data
            }
        })
                    }
    handleDel=(data)=>{
                        console.log(data)
                            }
    handleCancel=(data)=>{
        console.log('取消')
    }
    render(){
        const {dataSource}=this.props
        const columns=[
            {
                title:'编号',
                dataIndex:'id',
                width:'120px'
            },
            {
                title:'设备名称',
                dataIndex:'deviceName',
                width:'120px'
            },
            {
                title:'设备识别号',
                dataIndex:'deviceHAID',
                width:'80px'
            },
            {
                title:'设备类型',
                dataIndex:'type',
                width:'120px'
            },
            {
                title:'设备规格',
                dataIndex:'deviceSize',
                width:'80px',
            },{
                title:'设备节点',
                dataIndex:'tags',
                width:'120px'
            },{
                title:'备注',
                dataIndex:'desc',
                width:'120px'
            },{
                title:'账户启用状态',
                dataIndex:'statue',
                width:'120px',
                render:(text, record, index) => (<div>
                    <Switch checked={text} onChange={
                        ()=>{this.onSwitchChange(text)}}/>
                    </div>)
                    
                
            },{
                title:'操作',
                width:'150px',
                render:(text, record, index) => (
                        <div>
                            <span onClick={()=>{this.handleLook(record.id)}} className={styles.text}>查看</span>
                            <span onClick={()=>{this.handleEdit(record.id)}} className={styles.text}>编辑</span>
                            <Popconfirm title="确认要删除吗？" onConfirm={()=>{this.handleDel(record)}} onCancel={()=>{this.handleCancel(record)}} okText="确认" cancelText="取消">

                            <span className={styles.text}>删除</span></Popconfirm>
                        </div>
                    )
                
            }
        ]
        return(
            <div>
                <Table columns={columns} dataSource={dataSource} pagination={false} rowKey={dataSource=>dataSource.id}/>
            </div>
        )
    }
}
export default DeviceListTable