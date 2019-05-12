import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react'
const crrstyle = {
    chartstyle: {
      height: '400px',
      background:'#0F375F',
      color:'#FFFFFF'
    }
  }
  const option = {
      title:{
          text:'出入客流图',
          textStyle:{
            color:'#fff',
            fontSize:'14'
        },
        left:'20',
        top:'20'
      },
      tooltip: {
        trigger: 'axis',
    },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        data:['入流','出流'],
        textStyle:{
            color:'#ffffff',
            align:'right',
        }
    },
    xAxis: {
        type: 'category',
        data: ['9:00', '10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00', ],
        axisLabel:{
            textStyle:{
                color:'#fff'
            }
        },
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLabel:{
            textStyle:{
                color:'#fff'
            }
        },
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        }
    },
    series: [
        {
            name:'入流',
            type:'line',
            stack: '总量',
            data:[820, 932, 901,820,220,420, 934, 1290,820, 1330,520,420,220,],
            itemStyle: {
                normal: {
                    color: "#036BC8",
                    lineStyle: {
                        color: "#036BC8"
                    }
                }
            },
            
        },
        {
            name:'出流',
            type:'line',
            stack: '总量',
            data:[220, 182, 191,550, 234, 290, 1330,520,230,410,630,985, 310],
            itemStyle: {
                normal: {
                    color: "#4A95FF",
                    lineStyle: {
                        color: "#4A95FF"
                    }
                }
            },
        },
    ]
};
class LineChart extends Component{
    render(){
        return(
        <ReactEcharts
          option={option}
          style={crrstyle.chartstyle}
        />
        )
    }
}
export default LineChart