import React,{Component} from 'react'
import { Page } from 'components'
import { Row,Col,Button} from 'antd'
import UserListTable from '../../components/user/userList';
import styles from './index.less'
import Paginations from './../../components/pagination'
import router from 'umi/router'
const dataSource=[
    {id:'D001',storeName:'亦店',userName:'李世杰',mobile:'18713569896',tags:'滁州市',open:'客流',desc:'院长',statue:true,},
    {id:'D002',storeName:'亦店',userName:'李世杰',mobile:'18713569896',tags:'滁州市',open:'客流',desc:'院长',statue:true,},
    {id:'D003',storeName:'亦店',userName:'李世杰',mobile:'18713569896',tags:'滁州市',open:'客流',desc:'院长',statue:true,},
    {id:'D004',storeName:'亦店',userName:'李世杰',mobile:'18713569896',tags:'滁州市',open:'客流',desc:'院长',statue:true,},
    {id:'D005',storeName:'亦店',userName:'李世杰',mobile:'18713569896',tags:'滁州市',open:'客流',desc:'院长',statue:true,},
    {id:'D006',storeName:'亦店',userName:'李世杰',mobile:'18713569896',tags:'滁州市',open:'客流',desc:'院长',statue:true,},
    {id:'D007',storeName:'亦店',userName:'李世杰',mobile:'18713569896',tags:'滁州市',open:'客流',desc:'院长',statue:true,},
    {id:'D008',storeName:'亦店',userName:'李世杰',mobile:'18713569896',tags:'滁州市',open:'客流',desc:'院长',statue:false,},
]
class User extends Component {
    constructor(props){
        super(props)
    }
    handleSizeChange=(current, pageSize)=>{
        console.log(current, pageSize)
    }
    handlePageChange=(current, pageSize)=>{
        console.log(current, pageSize)
    }
    addUser=()=>{
        router.push('/user/addUser')
    }
    render(){
    return (
        <Page inner>
        <div className={styles.header}>
            <Row>
                <Col span={3} offset={1}><span className={styles.title}>用户列表</span></Col>
                <Col span={3} offset={13}><div><Button onClick={this.addUser}>创建用户</Button></div></Col>
            </Row>
        </div>
        <div className={styles.content}>
        <UserListTable dataSource={dataSource}/>
        <Paginations total={dataSource.length} onPageChange={this.handleSizeChange} onSizeChange={this.handleSizeChange}/>
        </div>
        </Page>
    )
}
}
export default User