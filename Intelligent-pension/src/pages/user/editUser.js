import React,{Component} from 'react'
import { Page } from 'components'
import { connect } from 'dva'
import {Form,Input,Button,Radio} from 'antd'
import styles from './index.less'
import router from 'umi/router'
const FormItem=Form.Item
const RadioGroup = Radio.Group;
class EditUser extends Component {
    constructor(props){
        super(props)
        this.state={
			data: this.props.location.query.data
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

    componentDidMount = () => {
      console.log(this.state.data)
    }
    render(){
        const { getFieldDecorator } = this.props.form
        const {storeId,storeName} =this.props.user
        const { userName, age,sex,tel,bed,remark,nurse,dependentsName,dependentsTel} = this.state.data
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
                           initialValue:userName || '',
             rules: [
               {
                 required: true,message: '请输入人员姓名!'
               },
             ],
           })(<Input placeholder="请输入姓名" />)}
     </FormItem>
     <FormItem label="年龄"  {...formItemLayout}>
           {getFieldDecorator('age', {
                           initialValue:age || '',
             rules: [
               {
                 required: true,message: '请输入年龄!'
               },
             ],
           })(<Input placeholder="请输入年龄" />)}
     </FormItem>
           <FormItem label="人员性别"  {...formItemLayout}>
           {getFieldDecorator('sex', {
                           initialValue:sex || '',
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
                           initialValue:tel || '',
             rules: [
               {
                 required: true,message: '请输入手机号!'
               },
             ],
           })(<Input placeholder="请输入手机号"/>)}
     </FormItem>
           <FormItem label="床位"  {...formItemLayout}>
           {getFieldDecorator('bed', {
                           initialValue:bed || '',
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
                           initialValue:remark || '',
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
                           initialValue:nurse || '',
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
                           initialValue:dependentsName || '',
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
                           initialValue:dependentsTel || '',
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
export default connect(({user})=>({user}))(Form.create()(EditUser))