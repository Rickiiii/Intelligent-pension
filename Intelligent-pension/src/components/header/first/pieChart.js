import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'
import { Row, Col } from 'antd'

const crrstyle = {
  chartstyle: {
    height: '400px',
  }
}
const option = {
  // title 设置标题
  title: {
    text: '年龄分析',
    x: 'center',
    textStyle: {
      color: '#FF5918',
      fontSize: '12'
    },
    top: '5'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  // legend 设置是设置类别
  legend: {
    orient: 'vertical',
    left: 'left',
    top: '50',
    data: ['60岁以下', '60-65岁', '65-70岁', '70-75岁', '75岁以上']
  },
  series: [
    {
      name: '年龄分析',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: '60岁以下' },
        { value: 610, name: '60-65岁' },
        { value: 434, name: '65-70岁' },
        { value: 135, name: '70-75岁' },
        { value: 148, name: '75岁以上' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
const options = {
  title: {
    text: '性别分析',
    x: 'center',
    textStyle: {
      color: '#FF5918',
      fontSize: '12'
    },
    top: '5'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    top: '50',
    data: ['男', '女']
  },
  series: [
    {
      name: '性别分析',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 610, name: '男' },
        { value: 435, name: '女' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

class PieChart extends Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <ReactEcharts option={option} style={crrstyle.chartstyle} />

        </Col>
        <Col span={12}>
          <ReactEcharts option={options} style={crrstyle.chartstyle} />

        </Col>
      </Row>
    )
  }
}
export default PieChart
