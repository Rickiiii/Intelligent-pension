import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react'

const crrstyle = {
  chartstyle: {
    height: '400px',
    color:'#FFFFFF'
  }
}

let allDate = [["2000-06-05"],["2000-06-06"],["2000-06-07"],["2000-06-08"],["2000-06-09"],["2000-06-10"],["2000-06-11"],["2000-06-12"],["2000-06-13"],["2000-06-14"],["2000-06-15"],["2000-06-16"],["2000-06-17"],["2000-06-18"],["2000-06-19"],["2000-06-20"],["2000-06-21"],["2000-06-22"],["2000-06-23"],["2000-06-24"],["2000-06-25"],["2000-06-26"],["2000-06-27"],["2000-06-28"],["2000-06-29"],["2000-06-30"],["2000-07-01"],["2000-07-02"],["2000-07-03"],["2000-07-04"],["2000-07-05"],["2000-07-06"],["2000-07-07"],["2000-07-08"],["2000-07-09"],["2000-07-10"],["2000-07-11"],["2000-07-12"],["2000-07-13"],["2000-07-14"],["2000-07-15"],["2000-07-16"],["2000-07-17"],["2000-07-18"],["2000-07-19"],["2000-07-20"],["2000-07-21"],["2000-07-22"],["2000-07-23"],["2000-07-24"]];


class LineChart extends Component{
  constructor(props){
    super(props)
    this.state={
      param: '',
      dateList: [],
      valueList: [],
      data: {
        wfg: [],
        wqx: [],
        wfc: [],
      },
      paramData: {
        wfg: [],
        wqx: [],
        wfc: [],
      }
    }
  }

  mapDate = () => {
    const { data, paramData } = this.state
    let _paramData = JSON.stringify(allDate)
    _paramData = JSON.parse(_paramData)
    if (allDate[0].push.length < 2) {
      for ( let i = 0; i< allDate.length; i++ ) {
        allDate[i].push(parseInt(Math.random()*(21)+80,10))
        _paramData[i].push(parseInt(Math.random()*(41)+60,10))
      }
    }
    
    for (let j = 0;j < 3; j++) {
      for (let i = 0; i< allDate.length; i++) {
        allDate[i][1] = (parseInt(Math.random()*(21)+80,10))
        _paramData[i][1] = (parseInt(Math.random()*(41)+60,10))
      }
      if (j === 0) {
        data.wfg = JSON.parse(JSON.stringify(allDate))
        paramData.wfg = JSON.parse(JSON.stringify(_paramData))
      }
      if (j === 1) {
        data.wqx = JSON.parse(JSON.stringify(allDate))
        paramData.wqx = JSON.parse(JSON.stringify(_paramData))
      }
      if (j === 2) {
        data.wfc = JSON.parse(JSON.stringify(allDate))
        paramData.wfc = JSON.parse(JSON.stringify(_paramData))
      }
    }
    this.setState({...this.state})
  }

  componentWillReceiveProps = (props) => {
    if (this.props !== props) {
      const { user, param } = props
      const { data, paramData } = this.state
      let _data = []
      if ( param === '血氧浓度') {
        _data = data[user]
      }
      if ( param === '心率') {
        _data = paramData[user]
      }
      const dateList = _data.map((item) => {
        return item[0];
      })
      const valueList = _data.map((item) => {
        return item[1];
      })
    this.setState({ dateList, valueList})
    }
  }

  componentWillMount = () => {
    this.mapDate()
  }

    render () {
      const { dateList, valueList } = this.state
      const { param } = this.props
      const option = {
        visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
        }, {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1
        }],
        title: [{
            left: 'center',
            text: param,
        }],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            data: dateList
        }],
        yAxis: [{
            splitLine: {show: false}
        }],
        series: [{
            type: 'line',
            showSymbol: false,
            data: valueList
        }]
    };
    return(
      <ReactEcharts
        option={option}
        style={crrstyle.chartstyle}
      />
      )
    }
}
export default LineChart