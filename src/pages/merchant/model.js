import modelExtend from 'dva-model-extend'
import { pageModel } from 'utils/model'
import { message } from 'antd'
export default modelExtend(pageModel, {
  namespace: 'merchant',
  state: {
    storeId:'0001',
    storeName:'亦店',
    storeStatus:'在线',
    open:'管理、巡店、客流、人脸、价签',
    userName:'曾亦',
    mobile:'18000000000',
    emil:'18000000000@163.com',
    address:'安徽省滁州市'
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        console.log(location.pathname)
        if (location.pathname === '/deviceManage/appointmentTime') {
          dispatch({
            type: 'list',
            payload: {

            },
          })
        }
      })
    },
  },
  effects: {
    * query({
      payload,
    }, { call, put }) {
      const data = yield call(query, payload)
      if (data.code == 200) {
        yield put({
          type: 'querySuccess',
          payload: {
            appointmentList: data.data,
          },
        })
      } else {
        throw data
      }
    }
    
  },
  reducers: {
    querySuccess(state, { payload: value }) {
      return { ...state, ...value }
    },
  },

})
