import React,{Component} from 'react'
import {Table,Switch,Popconfirm } from 'antd'
import styles from './index.less'
import router from 'umi/router';
class UserListTable extends Component{
    constructor(props){
        super(props)
    }
    onSwitchChange=(data)=>{
        console.log(data)
    }
    handleLook=(data)=>{
       router.push({
        pathname:'/user/userInfo',
        query:{
            id:data
        }
    })
    }

    handleEdit=(data)=>{
        router.push({
            pathname:'/user/editUser',
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
                title:'用户ID',
                dataIndex:'id',
                width:'120px'
            },
            {
                title:'商户名称',
                dataIndex:'storeName',
                width:'120px'
            },
            {
                title:'姓名',
                dataIndex:'userName',
                width:'80px'
            },
            {
                title:'手机号',
                dataIndex:'mobile',
                width:'120px'
            },
            {
                title:'节点权限',
                dataIndex:'tags',
                width:'80px',
            },{
                title:'板块权限',
                dataIndex:'open',
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
export default UserListTable