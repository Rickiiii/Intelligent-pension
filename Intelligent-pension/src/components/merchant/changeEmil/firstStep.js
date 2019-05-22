import React,{Component} from 'react'
import { connect } from 'dva'
import styles from './index.less';
import { Input, Row, Col } from 'antd';
class MobileFirstStep extends Component {
    constructor(props){
        super(props)
        this.state=({
            count: 0,
            code:''
        })
    }
    sendCode=()=>{
        let count=59
        this.setState({ count });
        this.interval = setInterval(() => {
          count -= 1;
          this.setState({ count });
          if (count === 0) {
            clearInterval(this.interval);
          }
        }, 1000);
    }
getCodeValue=(e)=>{
    const {onHandleCode}=this.props
onHandleCode(e.target.value)
this.setState({
    code:e.target.value
})
}
    render(){
        const {mobile,code}=this.props.merchant
        const {count}=this.state
        const pre=mobile.substring(0,3)
        const lst=mobile.substring(7,11)
        const showMobile=pre+"****"+lst

        const codes=<span>{count>0&&<span>{count}</span>}
        {count===0&&<span onClick={this.sendCode}>发送验证码</span>}
        </span>
    return (<div>
       
        <div className={styles.header}>
            <div className={styles.mobile}>已绑定的手机:{showMobile}</div>
            <div className={styles.disc}>若该手机号已无法使用请联系客服</div>
        </div>
        <div className={styles.content}>
        <Row>
            <Col span={3} offset={5}><div className={styles.lable}>验证码:</div></Col>
            <Col span={10}><div className={styles.inputs}><Input size="large" placeholder="正确为1234" addonAfter={codes} onChange={this.getCodeValue} maxLength='4' value={this.state.code}/></div></Col>
        </Row>
        </div>
        </div>
    )
}
}
export default connect(({merchant})=>({merchant}))(MobileFirstStep)