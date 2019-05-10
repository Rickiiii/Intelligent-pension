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
class EditUser extends Component {
    constructor(props){
        super(props)
        this.state={
			userId:this.props.location.query.id
		}
    }
    handleSubmit=()=>{
        const { getFieldsValue } = this.props.form
        const data=getFieldsValue()
        console.log(data)
    }
    handleBack=()=>{
        router.goBack();
    }
    render(){
        const info=
			{storeName:'亦店',userName:'李世杰',mobile:'18713569896',tags:'滁州市',open:['客流'],desc:'院长',statue:true,}
            const {userId}=this.state
        const { getFieldDecorator } = this.props.form
        const {storeId,storeName} =this.props.user
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
       <div className={styles.back}>
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
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input placeholder="请输入用户名称"/>)}
			</FormItem>
            <FormItem label="手机号"  {...formItemLayout}>
						{getFieldDecorator('mobile', {
                            initialValue:`${info.mobile}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input placeholder="请输入手机号"/>)}
			</FormItem>
            <FormItem label="登陆密码"  {...formItemLayout}>
						{getFieldDecorator('psw', {
                            initialValue:``,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input type="password" placeholder="请输入登陆密码"/>)}
			</FormItem>
            <FormItem label="确认登陆密码"  {...formItemLayout}>
						{getFieldDecorator('repsw', {
                            initialValue:``,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input type="password" placeholder="请输入登陆密码"/>)}
			</FormItem>
            <FormItem label="节点权限"  {...formItemLayout}>
						{getFieldDecorator('tags', {
                            initialValue:`${info.tags}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
                        })(<Input/>)}
			</FormItem>
            <FormItem label="版块权限"  {...formItemLayout}>
						{getFieldDecorator('open', {
                            initialValue:[`${info.open}`],
							rules: [
								{
									required: true,
								},
							],
						})(<CheckboxGroup options={options} />)}
			</FormItem>
            <FormItem label="备注"  {...formItemLayout}>
						{getFieldDecorator('desc', {
                            initialValue:`${info.desc}`,
						})(<TextArea rows={4} placeholder="有什么需要备注的吗"/>)}
			</FormItem>
            </Form>
            <div className={styles.submits}>
                <Button type="primary" onClick={this.handleSubmit}>提交</Button>

            </div>
        </div>
        </Page>
    )
}
}
export default connect(({user})=>({user}))(Form.create()(EditUser))