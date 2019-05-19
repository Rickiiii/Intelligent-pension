import React, { Component } from 'react';
import { Page } from 'components';
import {
  Table, Button, message, Input 
} from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
import EditModal from './components/editModal'
import styles from './accounts.less';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      id: '',
      name: '',
      visible: false,
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

    onSearch = () => {
      const { id, name } = this.state
      const payload = {
        userName: name,
        id,
      };
      this.fetchData(payload)
    }

    onChange = (value, type) => {
      this.setState({ [type]: value })
    }

    componentDidMount = () => {
      this.fetchData()
    }

    pay = (id) => {
      this.setState({ orderId: id, visible: true })
    }

    handleCancel = () => {
      this.setState({ visible: false })
    }

    render() {
      const {
        dataSource, id, name, visible, orderId
      } = this.state;
      const { loading } = this.props;
      const columns = [
        {
          title: '序号',
          detaIndex: 'No',
          width: 80,
          render: (text, record, index) => {
            return index + 1
          } 
        },
        {
          title: '编号',
          dataIndex: 'id',
          width: '120px'
        },
        {
          title: '姓名',
          dataIndex: 'userName',
          width: '120px'
        },
        {
          title: '年龄',
          dataIndex: 'age',
          width: '80px'
        },
        {
          title: '手机号',
          dataIndex: 'tel',
          width: '120px'
        },
        {
          title: '性别',
          dataIndex: 'sex',
          width: '80px',
        }, {
          title: '床位',
          dataIndex: 'bed',
          width: '120px'
        }, {
          title: '备注',
          dataIndex: 'remark',
          width: '120px'
        }, {
          title: '护理人员',
          dataIndex: 'nurse',
          width: '120px',
        }, {
          title: '登记日期',
          dataIndex: 'date',
          width: '120px',
        }, {
          title: '操作',
          width: '150px',
          render: (text, record) => (
            <div>
              <a onClick={() => this.pay(record.id)}>收款</a>
            </div>
          )
        }
      ]
      return (
        <Page inner>
          <div className={styles.group}>
            <>
              <div>
              编号:
                <Input
                  style={{ width: 200, marginLeft: 10 }}
                  value={id}
                  onChange={e => this.onChange(e.target.value, 'id')}
                />
              </div>
              <div style={{ marginLeft: 10 }}>
              姓名:
                {' '}
                <Input
                  style={{ width: 200, marginLeft: 10 }}
                  value={name}
                  onChange={e => this.onChange(e.target.value, 'name')}
                />
              </div>
              <div style={{ marginLeft: 10 }}>
                <Button type="primary" onClick={this.onSearch}>搜索</Button>
              </div>
            </>
          </div>
          <div style={{ marginTop: 10 }}>
            <Table
              dataSource={dataSource}
              columns={columns}
              loading={!!loading.effects['user/search']}
            />
          </div>
          <EditModal
            visible={visible}
            handleCancel={this.handleCancel}
            fetchData={this.fetchData}
            id={orderId}
          />
        </Page>
      );
    }
}

export default connect(({ loading }) => ({ loading }))(User);
