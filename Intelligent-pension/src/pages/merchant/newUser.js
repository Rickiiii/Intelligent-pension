import React,{Component} from 'react'
import { Page } from 'components'
import {Button,Row,Col} from 'antd'
import  styles  from './newUser.less';
import Info from '../../components/merchant/info';
import TableList from '../../components/merchant/tableList';
import Pagination from '../../components/pagination';
const infoData={
    storeId:'0001',storeName:'亦店',storeStatus:'在线',open:'管理、巡店、客流、人脸、价签',userName:'曾亦',mobile:'18000000000',emil:'18000000000@163.com',address:'安徽省滁州市'
}
const dataSource=[
    {time:'2018-01-11 21:00',ip:'183.14.135.1',address:'安徽省滁州市'},
    {time:'2018-01-11 19:50',ip:'183.14.135.1',address:'安徽省滁州市'},
    {time:'2018-01-11 19:00',ip:'183.14.135.1',address:'安徽省滁州市'},
    {time:'2018-01-11 17:00',ip:'183.14.135.1',address:'安徽省滁州市'},
    {time:'2018-01-11 16:40',ip:'183.14.135.1',address:'安徽省滁州市'},
    {time:'2018-01-11 15:20',ip:'183.14.135.1',address:'安徽省滁州市'},
    {time:'2018-01-11 15:00',ip:'183.14.135.1',address:'安徽省滁州市'},
    {time:'2018-01-11 11:00',ip:'183.14.135.1',address:'安徽省滁州市'},
    {time:'2018-01-11 9:00',ip:'183.14.135.1',address:'安徽省滁州市'},
    {time:'2018-01-11 8:00',ip:'183.14.135.1',address:'安徽省滁州市'},
    ]
class Merchant extends Component {
     //分页器的函数-选择的每页的总数
     onHandlePageChange=(current, pageSize)=>{
        console.log(current, pageSize)
    }
    //分页器的函数-选择的是第几页
    onHandleSizeChange=(current, pageSize)=>{
        console.log(current, pageSize)
    }
    //刷新数据的按钮
    flushData=()=>{
        console.log("从新请求接口，进行数据的更新")
    }
    render(){
    return (
        <Page inner>
        <div className={styles.header}>
            <Row>
                <Col span={3} offset={1}> <div className={styles.buttons}>  <Button>编辑资料</Button></div></Col>
                <Col span={3} offset={16}><div className={styles.buttons}> <Button onClick={this.flushData}>刷新</Button></div></Col>
            </Row>
        </div>
        <div className={styles.content}>
        <Info data={infoData}/>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.text}>登陆记录</div>
            </div>
            <TableList data={dataSource}/>
            <Pagination total={50} onPageChange={this.onHandlePageChange} onSizeChange={this.onHandleSizeChange}/>
        </div>
        </Page>
    )
}
}
export default Merchant