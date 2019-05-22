import React, { Component } from 'react';
import { Page } from 'components';
import {
  Row, Col, Button, message, Input 
} from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
import UserListTable from '../../components/user/userList';
import styles from './index.less';

const { Search } = Input;

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

    handleSizeChange=(current, pageSize) => {
      console.log(current, pageSize)
    }

    handlePageChange=(current, pageSize) => {
      console.log(current, pageSize)
    }

    addUser=() => {
      router.push('/user/addUser');
    }

    del = (id) => {
      const { dispatch } = this.props
      dispatch({
        type: 'user/userDelete',
        payload: {
          id,
        },
      }).then(() => {
        message.destroy();
        message.success('删除成功');
        this.fetchData();
      });
    }

    fetchData = (data) => {
      const { dispatch } = this.props
      dispatch({
        type: 'user/search',
        payload: data,
      }).then((value) => {
        this.setState({ dataSource: value })
      });
    }

    onSearch = (value) => {
      const payload = {
        userName: value
      };
      this.fetchData(payload)
    }

    componentDidMount = () => {
      this.fetchData()
    }

    render() {
      const { dataSource } = this.state;
      const { loading } = this.props;
      return (
        <Page inner>
          <div className={styles.header}>
            <Row>
              <Col span={3} offset={1}><span className={styles.title}>用户列表</span></Col>
              <Col span={3} offset={2}><span><Search onSearch={value => this.onSearch(value)} style={{ width: 200 }} /></span></Col>
              <Col span={3} offset={22}><span><Button onClick={this.addUser}>创建用户</Button></span></Col>
            </Row>
          </div>
          <div className={styles.content}>
            <UserListTable loading={!!loading.effects['user/search']} dataSource={dataSource} del={this.del} />
          </div>
        </Page>
      );
    }
}

export default connect(({ loading }) => ({ loading }))(User);
