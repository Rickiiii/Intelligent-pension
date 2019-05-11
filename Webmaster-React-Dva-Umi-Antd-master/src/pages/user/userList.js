import React,{Component} from 'react'
import { Page } from 'components'
import { Row,Col,Button, message } from 'antd'
import { connect } from 'dva'
import UserListTable from '../../components/user/userList';
import styles from './index.less'
import Paginations from './../../components/pagination'
import router from 'umi/router'
class User extends Component {
    constructor(props){
        super(props)
        this.state = {
          dataSource: [],
        }
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
    del = (id) => {
      this.props.dispatch({
        type: 'user/userDelete',
        payload: {
          id,
        },
      }).then(() => {
        message.destroy()
        message.success('删除成功')
        this.fetchData()
      })
    }

    fetchData = () => {
      this.props.dispatch({
        type: 'user/search',
        payload: {},
      }).then((data) => {
        this.setState({dataSource: data})
      })
    }

    componentDidMount = () => {
      this.fetchData()
    }
    render () {
    const { dataSource } = this.state
    const { loading } = this.props
    return (
        <Page inner>
        <div className={styles.header}>
            <Row>
                <Col span={3} offset={1}><span className={styles.title}>用户列表</span></Col>
                <Col span={3} offset={22}><div><Button onClick={this.addUser}>创建用户</Button></div></Col>
            </Row>
        </div>
        <div className={styles.content}>
        <UserListTable loading={!!loading.effects['user/search']} dataSource={dataSource} del={this.del}/>
        <Paginations total={dataSource.length} onPageChange={this.handleSizeChange} onSizeChange={this.handleSizeChange}/>
        </div>
        </Page>
    )
}
}

export default connect(({ loading }) => ({ loading }))(User)