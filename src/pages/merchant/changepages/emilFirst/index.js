import React,{Component} from 'react'
import { Page } from 'components'
import styles from './mobile.less';
import {Form,Input,Button,Row,Col,Steps,message} from 'antd'
import router from 'umi/router'
import MobileFirstStep from '../../../../components/merchant/changeEmil/firstStep';
import MobileSecondStep from '../../../../components/merchant/changeEmil/secondStep';
import MobileThreeStep from '../../../../components/merchant/changeEmil/threeStep';
const FormItem=Form.Item
const Step = Steps.Step;
class EmilFirst extends Component {
    constructor(props){
        super(props)
        this.state = {
            current: 0,
            code:'',
            newCode:''
          };
    }
    changeMobileSuccess=()=>{
        router.push('/merchant/changeMerchant')

    }
    handleCode=(data)=>{
        this.setState({
            code:data
        })
    }
    handleCode2=(data)=>{
        this.setState({
            newCode:data
        })
    }
    handleMobile=(data)=>{
        this.setState({
            mobile:data
        })
    }
    next=()=> {
        if(this.state.current==0){
            //在此处可以验证code是否符合后台的code
            if(this.state.code=='1234'){
                const current = this.state.current + 1;
                this.setState({ current });
            }else {
                message.error('验证码错误')
            }
        }
        if(this.state.current==1){
            if(this.state.newCode=='5678'){
                const current = this.state.current + 1;
                this.setState({ current });
            }else {
                message.error('验证码错误')
            }
        }
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
    
    render(){
        const { current } = this.state;
        const steps = [{
            title: '验证身份',
            content: <MobileFirstStep onHandleCode={this.handleCode}/>,
          }, {
            title: '修改邮箱',
            content: <MobileSecondStep onHandleCode2={this.handleCode2} onHandleMobile={this.handleMobile}/>,
          }, {
            title: '完成更换',
            content: <MobileThreeStep/>,
          }];
    return (
        <Page inner>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.text}>更换手机号码</div>
            </div>
        <div className={styles.steps}>
        <Steps current={current} labelPlacement="vertical">
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className={styles.stepsContent}>{steps[current].content}</div>
        <div className={styles.stepsAction}>
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>下一步</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={this.changeMobileSuccess}>完成</Button>
          }
          {/* {
            current > 1
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              上一步
            </Button>
            )
          } */}
        </div>
      </div>
        </div>
        </Page>
    )
}
}
export default EmilFirst