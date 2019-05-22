import { message } from '../node_modules/antd/lib'

const qs = require('../node_modules/qs/lib')
const Mock = require('../node_modules/mockjs/dist/mock')
const config = require('../src/utils/config')

const { apiPrefix } = config

let usersListData = Mock.mock({
  'data|80-100': [
    {
      id: '@id',
      name: '@name',
      nickName: '@last',
      phone: /^1[34578]\d{9}$/,
      'age|11-99': 1,
      address: '@county(true)',
      isMale: '@boolean',
      email: '@email',
      createTime: '@datetime',
      avatar() {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
      },
    },
  ],
})


let database = usersListData.data

const menus = [
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

const EnumRoleType = {
  ADMIN: 'admin',
  DEFAULT: 'guest',
  DEVELOPER: 'developer',
}

const userPermission = {
  DEFAULT: {
    visit: ['1', '31', '32', '33', '34'],
    role: EnumRoleType.DEFAULT,
  },
  ADMIN: {
    role: EnumRoleType.ADMIN,
  },
  DEVELOPER: {
    role: EnumRoleType.DEVELOPER,
  },
}

let adminUsers = [
  {
    id: 0,
    username: 'admin',
    password: 'admin',
    permissions: userPermission.ADMIN,
  }, {
    id: 1,
    username: 'guest',
    password: 'guest',
    permissions: userPermission.DEFAULT,
  }, {
    id: 2,
    username: '吴彦祖',
    password: '123456',
    permissions: userPermission.DEVELOPER,
  },
]

const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null
  }
  let data

  for (let item of array) {
    if (item[keyAlias] === key) {
      data = item
      break
    }
  }

  if (data) {
    return data
  }
  return null
}

const NOTFOUND = {
  message: 'Not Found',
  documentation_url: 'http://localhost:8000/request',
}

module.exports = {

  [`POST ${apiPrefix}/user/login`](req, res) {
    const { username, password } = req.body
    const user = adminUsers.filter(item => item.username === username)

    if (user.length > 0 && user[0].password === password) {
      const now = new Date()
      now.setDate(now.getDate() + 1)
      res.cookie('token', JSON.stringify({ id: user[0].id, deadline: now.getTime() }), {
        maxAge: 900000,
        httpOnly: true,
      })
      res.json({ success: true, message: 'Ok' })
    } else {
      message.destroy()
      message.error('账号或密码错误，请重试')
      res.json({ success: false, message: '账号或密码错误，请重试' })
    }
  },

  [`GET ${apiPrefix}/user/logout`](req, res) {
    res.clearCookie('token')
    res.status(200).end()
  },

  [`POST ${apiPrefix}/user/delete`](req, res) {
    const { ids } = req.body
    database = database.filter(item => !ids.some(_ => _ === item.id))
    res.status(204).end()
  },

  [`POST ${apiPrefix}/user/addUser`](req, res) {
    const { userName, password, permissions } = req.body
    let newPermissions = []
    permissions.map((item, index) => {
      if (item === true) {
        newPermissions.push(menus[index].id)
      }
    })
    const newUser = {
      username: userName,
      password,
      permissions: { visit: newPermissions },
      id: adminUsers.length
    }
    adminUsers.push(newUser)
    res.json({ success: true, message: 'Ok' })
  },

  [`POST ${apiPrefix}/user/editUser`](req, res) {
    const {
      id, userName, password, permissions 
    } = req.body
    let newPermissions = []
    permissions.map((item, index) => {
      if (item === true) {
        newPermissions.push(menus[index].id)
      }
    })
    adminUsers = adminUsers.map((item) => {
      if (item.id === id) {
        item = {
          username: userName,
          password,
          permissions: { visit: newPermissions },
          id,
        }
      }
      return item
    })
    res.json({ success: true, message: 'Ok' })
  },

  [`POST ${apiPrefix}/user/deleteUser`](req, res) {
    const { id } = req.body
    let _index = 0
    adminUsers.map((item, index) => {
      if (item.id === id) {
        _index = index
      }
    })
    adminUsers.splice(_index, 1)
    res.json({ success: true, message: 'Ok' })
  },

  [`POST ${apiPrefix}/user/userFetch`](req, res) {
    res.json({ data: adminUsers, success: true, message: 'Ok' })
  },

  [`GET ${apiPrefix}/user`](req, res) {
    const cookie = req.headers.cookie || ''
    const cookies = qs.parse(cookie.replace(/\s/g, ''), { delimiter: ';' })
    const response = {}
    const user = {}
    if (!cookies.token) {
      res.status(200).send({ message: 'Not Login' })
      return
    }
    const token = JSON.parse(cookies.token)
    if (token) {
      response.success = token.deadline > new Date().getTime()
    }
    if (response.success) {
      const userItem = adminUsers.filter(_ => _.id === token.id)
      if (userItem.length > 0) {
        user.permissions = userItem[0].permissions
        user.username = userItem[0].username
        user.id = userItem[0].id
      }
    }
    response.user = user
    res.json(response)
  },

  [`GET ${apiPrefix}/users`](req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = database
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) {
        newData = newData.filter((item) => {
          if ({}.hasOwnProperty.call(item, key)) {
            if (key === 'address') {
              return other[key].every(iitem => item[key].indexOf(iitem) > -1)
            } else if (key === 'createTime') {
              const start = new Date(other[key][0]).getTime()
              const end = new Date(other[key][1]).getTime()
              const now = new Date(item[key]).getTime()

              if (start && end) {
                return now >= start && now <= end
              }
              return true
            }
            return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
          }
          return true
        })
      }
    }

    res.status(200).json({
      data: newData.slice((page - 1) * pageSize, page * pageSize),
      total: newData.length,
    })
  },

  [`POST ${apiPrefix}/users/delete`](req, res) {
    const { ids } = req.body
    database = database.filter(item => !ids.some(_ => _ === item.id))
    res.status(204).end()
  },


  [`POST ${apiPrefix}/user`](req, res) {
    const newData = req.body
    newData.createTime = Mock.mock('@now')
    newData.avatar = newData.avatar || Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', newData.nickName.substr(0, 1))
    newData.id = Mock.mock('@id')

    database.unshift(newData)

    res.status(200).end()
  },

  [`GET ${apiPrefix}/user/:id`](req, res) {
    const { id } = req.params
    const data = queryArray(database, id, 'id')
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`DELETE ${apiPrefix}/user/:id`](req, res) {
    const { id } = req.params
    const data = queryArray(database, id, 'id')
    if (data) {
      database = database.filter(item => item.id !== id)
      res.status(204).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`PATCH ${apiPrefix}/user/:id`](req, res) {
    const { id } = req.params
    const editItem = req.body
    let isExist = false

    database = database.map((item) => {
      if (item.id === id) {
        isExist = true
        return Object.assign({}, item, editItem)
      }
      return item
    })

    if (isExist) {
      res.status(201).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },
}
