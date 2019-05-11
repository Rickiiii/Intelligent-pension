import React,{Component} from 'react'
import { Page } from 'components'
import { connect } from 'dva'
import {Form,Input,Button,Row,Col,Checkbox} from 'antd'
import styles from './index.less'
const FormItem=Form.Item
const CheckboxGroup = Checkbox.Group;
const options = [
   '管理', '巡店', '客流', 
  ];
const { TextArea } = Input;
class AddUser extends Component {
    constructor(props){
        super(props)
    }
    handleSubmit=()=>{
        const { getFieldsValue } = this.props.form
        const data=getFieldsValue()
        console.log(data)
    }
    render(){
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
            <Form>
            <FormItem label="人员姓名"  {...formItemLayout}>
						{getFieldDecorator('userName', {
                            initialValue:`${storeId}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input disabled/>)}
			</FormItem>
            <FormItem label="人员性别"  {...formItemLayout}>
						{getFieldDecorator('sex', {
                            initialValue:`${storeName}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input disabled/>)}
			</FormItem>
            <FormItem label="手机号"  {...formItemLayout}>
						{getFieldDecorator('tel', {
                            initialValue:``,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input placeholder="请输入用户手机号"/>)}
			</FormItem>
            <FormItem label="床位"  {...formItemLayout}>
						{getFieldDecorator('bed', {
                            initialValue:``,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input placeholder="请输入手机号"/>)}
			</FormItem>
            <FormItem label="备注"  {...formItemLayout}>
						{getFieldDecorator('remark', {
                            initialValue:``,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input type="password" placeholder="请输入备注"/>)}
			</FormItem>
            <FormItem label="护理人员"  {...formItemLayout}>
						{getFieldDecorator('nurse', {
                            initialValue:``,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input type="password" placeholder="请输入护理人员名称"/>)}
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
export default connect(({user})=>({user}))(Form.create()(AddUser))