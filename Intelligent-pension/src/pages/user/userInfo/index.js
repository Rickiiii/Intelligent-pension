import React,{Component} from 'react'
import { Page } from 'components'
import { connect } from 'dva'
import {Form,Input,Button,Row,Col,Checkbox} from 'antd'
import styles from './index.less'
import router from 'umi/router'
const FormItem=Form.Item
const CheckboxGroup = Checkbox.Group;
const options = [
   '管理', '巡店', '客流', 
  ];
const { TextArea } = Input;
class UserInfo extends Component {
    constructor(props){
		super(props)
		this.state={
			userId:this.props.location.query.id
		}
    }
    handleBack=()=>{
       router.goBack()
    }
    render(){
        const { getFieldDecorator } = this.props.form
		const {storeId,storeName} =this.props.user
		const {userId} =this.state
		const info=
			{storeName:'亦店',userName:'李世杰',mobile:'18713569896',tags:'滁州市',open:['客流'],desc:'院长',statue:true,}
		
		const formItemLayout = {
			labelCol: {
				span: 8,
			},
			wrapperCol: {
				span: 8,
			},
		}
		
    return (
        <Page inner>
       <div className={styles.contents}>
	   <div className={styles.submits}>
                <Button onClick={this.handleBack}>返回</Button>

            </div>
            <Form>
            <FormItem label="商户ID"  {...formItemLayout}>
						{getFieldDecorator('storeId', {
                            initialValue:`${storeId}`,
						})(<Input disabled/>)}
			</FormItem>
            <FormItem label="商户名称"  {...formItemLayout}>
						{getFieldDecorator('storeName', {
                            initialValue:`${storeName}`,
						})(<Input disabled/>)}
			</FormItem>
			<FormItem label="用户ID"  {...formItemLayout}>
						{getFieldDecorator('userId', {
                            initialValue:`${userId}`,
						})(<Input disabled/>)}
			</FormItem>
            <FormItem label="用户名称"  {...formItemLayout}>
						{getFieldDecorator('userName', {
                            initialValue:`${info.userName}`,
						})(<Input placeholder="请输入用户名称" disabled/>)}
			</FormItem>
            <FormItem label="手机号"  {...formItemLayout}>
						{getFieldDecorator('mobile', {
                            initialValue:`${info.mobile}`,
						})(<Input placeholder="请输入手机号" disabled/>)}
			</FormItem>
            <FormItem label="节点权限"  {...formItemLayout}>
						{getFieldDecorator('tags', {
                            initialValue:`${info.tags}`,
                        })(<Input disabled/>)}
			</FormItem>
            <FormItem label="版块权限"  {...formItemLayout}>
						{getFieldDecorator('open', {
                            initialValue:[`${info.open}`],
						})(<CheckboxGroup options={options} />)}
			</FormItem>
            <FormItem label="备注"  {...formItemLayout}>
						{getFieldDecorator('desc', {
                            initialValue:`${info.desc}`,
						})(<TextArea rows={4} placeholder="有什么需要备注的吗" disabled/>)}
			</FormItem>
            </Form>
			
        </div>
        </Page>
    )
}
}
export default connect(({user})=>({user}))(Form.create()(UserInfo))