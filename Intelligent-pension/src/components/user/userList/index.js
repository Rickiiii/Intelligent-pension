/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Table, Switch, Popconfirm } from 'antd'
import router from 'umi/router';
import styles from './index.less'

class UserListTable extends Component {
  constructor(props) {
    super(props)
  }

    onSwitchChange=(data) => {
      console.log(data)
    }

    handleLook=(data) => {
      router.push({
        pathname: '/user/userInfo',
        query: {
          id: data
        }
      })
    }

    handleEdit=(data) => {
      router.push({
        pathname: '/user/editUser',
        query: {
          data
        }
      })
    }

    handleDel=(id) => { this.props.del(id) }

    handleCancel=(data) => {
      console.log('取消')
    }

    render() {
      const { dataSource } = this.props
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
          render: (text, record, index) => (
            <div>
              <span onClick={() => { this.handleLook(record.id) }} className={styles.text}>查看</span>
              <span onClick={() => { this.handleEdit(record) }} className={styles.text}>编辑</span>
              <Popconfirm title="确认要删除吗？" onConfirm={() => { this.handleDel(record.id) }} onCancel={() => { this.handleCancel(record) }} okText="确认" cancelText="取消">

                <span className={styles.text}>删除</span>

              </Popconfirm>
            </div>
          )
                
        }
      ]
      return (
        <div>
          <Table loading={this.props.loading} columns={columns} dataSource={dataSource} rowKey={dataSource => dataSource.id} />
        </div>
      )
    }
}
export default UserListTable
