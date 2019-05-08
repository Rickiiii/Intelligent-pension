import React,{Component} from 'react'
import { connect } from 'dva'
import styles from './index.less';
import { Input, Row, Col ,message} from 'antd';
class MobileSecondStep extends Component {
    constructor(props){
        super(props)
        this.state=({
            count: 0,
            mobile:'',
            code:''
        })
    }
    sendCode=()=>{
        if(this.state.mobile.length==11){
            let count=180
        this.setState({ count });
        this.interval = setInterval(() => {
          count -= 1;
          this.setState({ count });
          if (count === 0) {
            clearInterval(this.interval);
          }
        }, 1000);
        }else{
            message.error('填写正确的邮箱')
        }
        
    }
getCodeValue=(e)=>{
    const {onHandleCode2}=this.props
onHandleCode2(e.target.value)
this.setState({
    code:e.target.value
})
}
getNewMobile=(e)=>{
    const {onHandleMobile}=this.props
    onHandleMobile(e.target.value)
    this.setState({
        mobile:e.target.value
    })
}
    render(){
        const {mobile,code}=this.props.merchant
        const {count}=this.state
        const codes=<span>{count>0&&<span>{count}</span>}
        {count===0&&<span onClick={this.sendCode}>发送验证码</span>}
        </span>
    return (<div>
        <div className={styles.content}>
        <Row>
            <Col span={4} offset={5}><div className={styles.lable}>邮箱:</div></Col>
            <Col span={10}><div className={styles.inputs}>
            <Input size="large"onChange={this.getNewMobile}
            value={this.state.mobile}
             maxLength='11' placeholder="输入邮箱"/></div></Col>
        </Row>
        </div>
       
        <div className={styles.content}>
        <Row>
            <Col span={4} offset={5}><div className={styles.lable}>验证码:</div></Col>
            <Col span={10}><div className={styles.inputs}><Input size="large" placeholder="正确为5678" addonAfter={codes} onChange={this.getCodeValue} maxLength='4' value={this.state.code}/></div></Col>
        </Row>
        </div>
        </div>
    )
}
}
export default connect(({merchant})=>({merchant}))(MobileSecondStep)