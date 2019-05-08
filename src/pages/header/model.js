import modelExtend from 'dva-model-extend'
import { pageModel } from 'utils/model'
import { message } from 'antd'
export default modelExtend(pageModel, {
  namespace: 'header',
  state: {
   city:'上海',
   selectDate:'',
   day:'yester',
   datePicker:[]

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
    }
    
  },
  reducers: {
    querySuccess(state, { payload: value }) {
      return { ...state, ...value }
    },
  },

})
