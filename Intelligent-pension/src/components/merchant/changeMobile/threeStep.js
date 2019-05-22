import React,{Component} from 'react'
import { connect } from 'dva'
import styles from './index.less';
import { Input, Row, Col, Icon } from 'antd';
class MobileThreeStep extends Component {
    constructor(props){
        super(props)
        this.state=({
            count: 0,
            code:''
        })
    }
    render(){
    return (<div>
       <div className={styles.icons}><Icon type="check-circle" theme="twoTone" twoToneColor="#1890FF" /></div>
        <div className={styles.header}>
            <div className={styles.mobile}>手机号码更换成功</div>
            <div className={styles.disc}>您可以在下次使用新号码进行登录</div>
        </div>
        </div>
    )
}
}
export default connect(({merchant})=>({merchant}))(MobileThreeStep)