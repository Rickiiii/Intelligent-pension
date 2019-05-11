import React,{Component} from 'react'
import { Page } from 'components'
import { connect } from 'dva'
import {Form,Input,Button,DatePicker,Radio,Checkbox,message} from 'antd'
import styles from './index.less'
import moment from 'moment'
const FormItem=Form.Item
const RadioGroup = Radio.Group;
class AddUser extends Component {
    constructor(props){
        super(props)
    }
    handleSubmit=()=>{
	this.props.form.validateFieldsAndScroll((err, values) => {
		if (!err) {
			const { getFieldsValue } = this.props.form
			const data = getFieldsValue()
			data.date = moment(data.date).format('YYYY-MM-DD')
			this.props.dispatch({
				type: 'user/addUser',
				payload: data,
			}).then(() => {
				message.destroy()
				message.success('新增成功')
			})
		}
		})
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
                            initialValue:'',
							rules: [
								{
									required: true,message: '请输入人员姓名!'
								},
							],
						})(<Input placeholder="请输入姓名" />)}
			</FormItem>
			<FormItem label="年龄"  {...formItemLayout}>
						{getFieldDecorator('age', {
                            initialValue:'',
							rules: [
								{
									required: true,message: '请输入年龄!'
								},
							],
						})(<Input placeholder="请输入年龄" />)}
			</FormItem>
			<FormItem label="入住日期"  {...formItemLayout}>
						{getFieldDecorator('date', {
                            initialValue:'',
							rules: [
								{
									required: true,
									message: '请选择日期!'
								},
							],
						})(<DatePicker format={moment().format('YYYY-MM-DD')} />)}
			</FormItem>
            <FormItem label="人员性别"  {...formItemLayout}>
						{getFieldDecorator('sex', {
                            initialValue:'男',
							rules: [
								{
									required: true,
								},
							],
						})(<RadioGroup name="radiogroup">
						<Radio value='男'>男</Radio>
						<Radio value='女'>女</Radio>
					  </RadioGroup>)}
			</FormItem>
            <FormItem label="手机号"  {...formItemLayout}>
						{getFieldDecorator('tel', {
                            initialValue:``,
							rules: [
								{
									required: true,message: '请输入手机号!'
								},
							],
						})(<Input placeholder="请输入手机号"/>)}
			</FormItem>
            <FormItem label="床位"  {...formItemLayout}>
						{getFieldDecorator('bed', {
                            initialValue:``,
							rules: [
								{
									required: true,
									message: '请输入床位!'
								},
							],
						})(<Input placeholder="请输入床位"/>)}
			</FormItem>
            <FormItem label="备注"  {...formItemLayout}>
						{getFieldDecorator('remark', {
                            initialValue:``,
							rules: [
								{
									required: true,
									message: '请输入备注!'
								},
							],
						})(<Input placeholder="请输入备注"/>)}
			</FormItem>
            <FormItem label="护理人员"  {...formItemLayout}>
						{getFieldDecorator('nurse', {
                            initialValue:``,
							rules: [
								{
									required: true,
									message: '请输入护理人员名称!'
								},
							],
						})(<Input placeholder="请输入护理人员名称"/>)}
			</FormItem>
			<FormItem label="家属姓名"  {...formItemLayout}>
						{getFieldDecorator('dependentsName', {
                            initialValue:``,
							rules: [
								{
									required: true,
									message: '请输入家属姓名!'
								},
							],
						})(<Input placeholder="请输入家属姓名"/>)}
			</FormItem>
			<FormItem label="家属手机"  {...formItemLayout}>
						{getFieldDecorator('dependentsTel', {
                            initialValue:``,
							rules: [
								{
									required: true,
									message: '请输入家属手机!'
								},
							],
						})(<Input placeholder="请输入家属手机"/>)}
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