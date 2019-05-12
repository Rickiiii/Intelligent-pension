import React,{Component} from 'react'
import { Page } from 'components'
import  {Button,Row,Col} from 'antd'
import styles from './logging.less'
import LoggingList from '../../components/header/loggingList';
import Pagination from '../../components/pagination';

const data=[
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
class Logging extends Component{
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
            <Row>
                <Col span={3}><div className={styles.title}>数据列表</div></Col>
                <Col span={3} offset={18}><Button onClick={this.flushData}>刷新数据</Button></Col>
            </Row>
            <div className={styles.table}>
            <LoggingList dataSource={data}/>
            <Pagination total={50} onPageChange={this.onHandlePageChange} onSizeChange={this.onHandleSizeChange}/>
            </div>
             </Page>
        )
    }
}
export default Logging