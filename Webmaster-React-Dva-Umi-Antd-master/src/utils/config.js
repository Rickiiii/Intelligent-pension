const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: '智慧养老管理后台',
  prefix: '智慧养老管理后台',
  footerText: '智慧养老管理后台',
  logo: '/public/logo.svg',
  iconFontCSS: '/public/iconfont.css',
  iconFontJS: '/public/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    patientSearch: `${APIV1}/patient/search`,
    patientDelete: `${APIV1}/patient/delete`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
}
