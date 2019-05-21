import React, { Component } from 'react'
import { Page } from 'components'
import { connect } from 'dva';
import { 
  Card, Button, Select, Col, Row, DatePicker, LocaleProvider, Radio 
} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment'
import styles from './dailyPaper.less'
import LineChart from '../../components/header/first/lineChart'
import PieChart from '../../components/header/first/pieChart'
import 'moment/locale/zh-cn';

const { Option } = Select
const dateFormat = 'YYYY-MM-DD';
const { RangePicker } = DatePicker
const selectStyle = {
  select: {
    width: 150
  },
  select1: {
    width: 230
  },
    
}
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      today: '',

    }
  }

    componentWillMount=() => {
      const { dispatch } = this.props
      const data = new Date()
      const year = data.getFullYear()
      const momth = data.getMonth()
      const date = data.getDate()
      const today = year + '-' + momth + '-' + date
      this.setState({
        today: today
      })
      dispatch({
        type: 'header/querySuccess',
        payload: {
          selectDate: today
        }
      })
    }

    // 点击选择出入流时间框
    onChangeDate=(data) => {
      const { dispatch } = this.props
      const date = moment(data).format('YYYY-MM-DD')
      console.log(date)
      dispatch({
        type: 'header/querySuccess',
        payload: {
          selectDate: date 
        }
      })
    }

    // 点击出入流导出
    goOutexport=() => {
      const { city, selectDate } = this.props.header
      console.log('选择的时间为：' + selectDate, '选择的城市为:' + city)
    }

    // 点击选择出入流的城市
    selectCity=(data) => {
      console.log(data)
      const { dispatch } = this.props
      dispatch({
        type: 'header/querySuccess',
        payload: {
          city: data
        }
      })
    }

    // 点击客户占比分析的 昨天，7天，30.。。
    onChangeNearDay = (e) => {
      console.log(e.target.value)
      const { dispatch } = this.props
      dispatch({
        type: 'header/querySuccess',
        payload: {
          day: e.target.value
        }
      })
    }

    // 点击客户占比分析的日期选择框
    onChangePicker=(data, dateString) => {
      const { dispatch } = this.props
      console.log(dateString)
      dispatch({
        type: 'header/querySuccess',
        payload: {
          datePicker: dateString
        }
      })
    }

    render() {
      const { today } = this.state
      const { city, day } = this.props.header

      return (
        <Page inner>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Row>
                <Col span={4}>
                  <div className={styles.title}>经营报表</div>

                </Col>
                <Col>
                  <div className={styles.selectDate} id="selectDate">
                    <LocaleProvider locale={zh_CN}>
                      <RangePicker 
                        onChange={this.onChangePicker} 
                      />
                    </LocaleProvider>
                  </div>

                </Col>
              </Row>
            </div>
            <div />
          </div>
        </Page>
      )
    }
}
export default connect(({ header }) => ({ header }))(Header)
