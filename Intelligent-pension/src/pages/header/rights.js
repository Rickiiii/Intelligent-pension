import React, { Component } from 'react'
import { Page } from 'components'
import { connect } from 'dva';
import { 
  Table, Button, Divider, Checkbox, Modal, Input, message, Popconfirm
} from 'antd'
import 'moment/locale/zh-cn';

let menus = [
  {
    id: '1',
    icon: 'dashboard',
    name: '管理后台',
    route: '/header',
  },
  {
    id: '14',
    bpid: '1',
    mpid: '1',
    name: '权限分配',
    route: '/header/rights',
  },
  {
    id: '3',
    name: '用户',
    icon: 'user',
    route: '/user',
  },
  {
    id: '31',
    bpid: '3',
    mpid: '3',
    name: '用户列表',
    route: '/user/userList',
  },
  {
    id: '32',
    bpid: '3',
    mpid: '3',
    name: '用户创建',
    route: '/user/addUser',
  },
  {
    id: '33',
    bpid: '3',
    mpid: '-1',
    name: '用户详情',
    route: '/user/userInfo',
  },
  {
    id: '34',
    bpid: '3',
    mpid: '-1',
    name: '编辑用户',
    route: '/user/editUser',
  },
  {
    id: '35',
    bpid: '3',
    mpid: '3',
    name: '用户参数图表',
    route: '/user/userParam',
  },
  {
    id: '5',
    name: '业务管理',
    icon: 'user',
    route: '/messageSearch',
  },
  {
    id: '36',
    bpid: '5',
    mpid: '5',
    name: '床位管理',
    route: '/messageSearch/bedManage',
  },
  {
    id: '37',
    bpid: '5',
    mpid: '5',
    name: '结账',
    route: '/messageSearch/accounts',
  }
];

class User extends Component {
    state = {
      rightVisible: false,
      rightValue: [],
      userName: '',
      password: '',
    }

    componentWillMount = () => {
      this.fetchData()
    }

    fetchData = () => {
      const { dispatch } = this.props
      dispatch({
        type: 'user/userFetch',
        payload: {},
      }).then((data) => {
        this.setState({ data })
      })
    }

    setRight = (record) => {
      let { length } = menus
      let newRightValue = []
      if (!record.permissions.visit) {
        for (let i = 0; i < length; i++) {
          newRightValue.push('true')
        }
        this.setState({
          userName: record.username, password: record.password, rightValue: newRightValue, id: record.id 
        })
      } else {
        for (let j = 0; j < length; j++) {
          record.permissions.visit.map((item) => {
            if (menus[j].id == item) {
              newRightValue[j] = true
            }
          })
        }
        this.setState({
          userName: record.username, password: record.password, rightValue: newRightValue, id: record.id 
        })
      }
      this.setState({ rightVisible: true, type: 'edit' })
    }

    newUser = () => {
      this.setState({ rightVisible: true, type: 'new' })
    }

    handleCancle = () => {
      this.setState({
        rightVisible: false, 
        rightValue: [],
        userName: '',
        password: '', 
      })
    }

    handleOk = () => {
      const {
        userName, password, rightValue, type 
      } = this.state
      const { dispatch } = this.props
      if (type === 'new') {
        dispatch({
          type: 'user/addUsers',
          payload: {
            userName,
            password,
            permissions: rightValue,
          }
        }).then(() => {
          message.destroy()
          message.success('新增成功')
          this.fetchData()
          this.handleCancle()
        })
      } else {
        this.edit()
      }
    }

    checkOnChange = (value, index) => {
      const { rightValue } = this.state
      rightValue[index] = value
      this.setState({ rightValue })
      this.forceUpdate()
    }

    onChange = (value, key) => {
      this.setState({ [key]: value })
    }

    delete = (id) => {
      const { dispatch } = this.props
      dispatch({
        type: 'user/deleteUsers',
        payload: {
          id,
        }
      }).then(() => {
        message.destroy()
        message.success('删除成功')
        this.fetchData()
      })
    }

    edit = () => {
      const { dispatch } = this.props
      const {
        userName, password, rightValue, id 
      } = this.state
      dispatch({
        type: 'user/editUsers',
        payload: {
          userName,
          password,
          permissions: rightValue,
          id,
        }
      }).then(() => {
        message.destroy()
        message.success('修改成功')
        this.handleCancle()
        this.fetchData()
      })
    }

    render() {
      const {
        data, rightVisible, rightValue, userName, password
      } = this.state
      const { loading } = this.props
      const columns = [
        {
          title: 'id',
          dataIndex: 'id',
          width: 80,
        },
        {
          title: '账号',
          dataIndex: 'username',
          width: '120px'
        },
        {
          title: '权限',
          dataIndex: 'permissions',
          render: (text) => {
            if (!text.visit === true) {
              return '所有权限'
            } else {
              let _result = []
              for (let i = 0; i < text.visit.length; i++) {
                let result = menus.filter(item => item.id === text.visit[i])[0].name
                _result.push(result)
              }
              return _result.join(',')
            }
          }
        }, {
          title: '操作',
          width: '150px',
          render: (text, record) => (
            <div>
              <a onClick={() => this.setRight(record)}>设置权限</a>
              <Divider type="vertical" />
              <Popconfirm
                title="确定要删除吗?"
                onConfirm={() => this.delete(record.id)}
                okText="确定"
                cancelText="取消"
              >
                <a href="#">删除</a>
              </Popconfirm>              
            </div>
          )
        }
      ]
      return (

        <Page inner>
          <div>
            <>
              <div style={{ marginLeft: 10 }}>
                <Button type="primary" onClick={this.newUser}>新建用户</Button>
              </div>
            </>
          </div>
          <div style={{ marginTop: 10 }}>
            <Table
              dataSource={data}
              columns={columns}
              loading={!!loading.effects['user/userFetch']}
            />
          </div>
          <Modal
            visible={rightVisible}
            title="权限配置"
            onCancel={this.handleCancle}
            onOk={this.handleOk}
          >
            <div>
            账号:
              <Input style={{ width: 200, marginLeft: 10 }} value={userName} onChange={(e) => { this.onChange(e.target.value, 'userName') }} />
            </div>
            <br />
            <div>
            密码:
              <Input style={{ width: 200, marginLeft: 10 }} value={password} onChange={(e) => { this.onChange(e.target.value, 'password') }} />
            </div>
            <br />
            <div>
            权限分配:
              <br />
              {menus.map((item, index) => {
                return <Checkbox checked={rightValue[index]} onChange={e => this.checkOnChange(e.target.checked, index)}>{item.name}</Checkbox>
              })}

            </div>
            
          </Modal>
        </Page>
      )
    }
}


export default connect(({ loading }) => ({ loading }))(User);
