import React, { Component } from 'react'
import { Page } from 'components'
import { connect } from 'dva';
import { 
  Select, Col, Row, DatePicker, LocaleProvider, Radio 
} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment'
import styles from './userParam.less'
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
      user: 'wfg',
      param: '血氧浓度',
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
        today,
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

    selectCity = (data, type) => {
      this.setState({ [type]: data })
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
      const { user, param } = this.state
      const { city, day } = this.props.header

      return (
        <Page inner>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Row>
                <Col span={4}>
                  <div className={styles.title}>参数曲线图</div>

                </Col>
                <Col>
                  <div className={styles.selectDate} id="selectDate">
                    {/* <LocaleProvider locale={zh_CN}>
            <DatePicker onChange={this.onChangeDate} format={dateFormat} defaultValue={moment(today,dateFormat)}
            getCalendarContainer={()=>document.getElementById('selectDate')}/>
            </LocaleProvider> */}
                  </div>

                </Col>
              </Row>
            </div>
            <div>
              <div className={styles.select} id="selectCity">
            人员选择：
                <Select
                  defaultValue={user}
                  onChange={value => this.selectCity(value, 'user')}
                  style={selectStyle.select}
                  getPopupContainer={() => document.getElementById('selectCity')}
                  showSearch
                >
                  <Option value="wfg">王富贵</Option>
                  <Option value="wqx">王全喜</Option>
                  <Option value="wfc">王福才</Option>
                </Select>
              </div>
              <div className={styles.select} id="selectCity">
            参数选择：
                <Select
                  defaultValue={param}
                  onChange={value => this.selectCity(value, 'param')}
                  style={selectStyle.select}
                  getPopupContainer={() => document.getElementById('selectCity')}
                  showSearch
                >
                  <Option value="血氧浓度">血氧浓度</Option>
                  <Option value="心率">心率</Option>
                </Select>
              </div>
            </div>
            <LineChart user={user} param={param} />
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Row>
                <Col span={4}>
                  <div className={styles.title}>客户占比分析</div>
                </Col>
                <Col span={7} offset={8}>
                  <div className={styles.buttons}>
                    <Radio.Group value={day} onChange={this.onChangeNearDay} style={{ marginBottom: 16 }} buttonStyle="solid">
                      <Radio.Button value="yester">昨天</Radio.Button>
                      <Radio.Button value="last7">最近7天</Radio.Button>
                      <Radio.Button value="last30">最近30天</Radio.Button>
                      <Radio.Button value="last90">最近90天</Radio.Button>
                    </Radio.Group>
                  </div>
                </Col>
                <Col span={4}>
                  <div className={styles.selectDate} id="selectPicker">
                    <LocaleProvider locale={zh_CN}>
                      <RangePicker
                        onChange={this.onChangePicker}
                        format={dateFormat}
                        style={selectStyle.select1}
                        getCalendarContainer={() => document.getElementById('selectPicker')}
                      />
                    </LocaleProvider>
                  </div>
                </Col>
              </Row>
            </div>
            <PieChart />
          </div>
        </Page>
      )
    }
}
export default connect(({ header }) => ({ header }))(Header)
