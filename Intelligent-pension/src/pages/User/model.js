import modelExtend from 'dva-model-extend'
import { pageModel } from 'utils/model'
import {
  search, userDelete, addUser, pay, edit, userFetch, addUsers, editUsers, deleteUsers
} from './service'

export default modelExtend(pageModel, {
  namespace: 'user',
  state: {

  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
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
    },
    * search({ payload }, { call }) {
      const request = yield call(search, payload)
      const { success, data } = request
      if (success) {
        return data
      }
    },
    * userDelete({ payload }, { call }) {
      const request = yield call(userDelete, payload)
      const { success, data } = request
      if (success) {
        return data
      }
    },
    * addUser({ payload }, { call }) {
      const request = yield call(addUser, payload)
      const { success, data } = request
      if (success) {
        return data
      }
    },
    * userFetch({ payload }, { call }) {
      const request = yield call(userFetch, payload)
      const { success, data } = request
      if (success) {
        return data
      }
    },
    * addUsers({ payload }, { call }) {
      const request = yield call(addUsers, payload)
      const { success, data } = request
      if (success) {
        return data
      }
    },
    
    * deleteUsers({ payload }, { call }) {
      const request = yield call(deleteUsers, payload)
      const { success, data } = request
      if (success) {
        return data
      }
    },
    * editUsers({ payload }, { call }) {
      const request = yield call(editUsers, payload)
      const { success, data } = request
      if (success) {
        return data
      }
    },
    * pay({ payload }, { call }) {
      const request = yield call(pay, payload)
      const { success, data } = request
      if (success) {
        return data
      }
    },

    * edit({ payload }, { call }) {
      const request = yield call(edit, payload)
      const { success, data } = request
      if (success) {
        return data
      }
    },
  },
  reducers: {
    querySuccess(state, { payload: value }) {
      return { ...state, ...value }
    },
  },

})
